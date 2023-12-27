> -  原文地址：[TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/)
> -  原文作者：[Yazdun Fadali](https://www.freecodecamp.org/news/author/yazdun/)
> -  译者：
> -  校对者：

![TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App](https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/TypeScript-Handbook-for-React-Developers-Cover.png)

In today's JavaScript landscape, TypeScript is gaining more and more popularity. And React developers are starting to use it more and more.

If you're a React developer looking to explore TypeScript or enhance your skills with it, this handbook is just for you. I'll guide you through using TypeScript in a React application by building a classic todo app.

I'm going to cover everything you need to know in order to get started with TypeScript as a React developer. You will learn how to handle state and props with strong typing, how to create React components with TypeScript, how to use TypeScript with React Hooks, and how to use TypeScript with the Context API.

By the end of this tutorial, you'll have a solid understanding of TypeScript and be ready to develop type-safe React applications with confidence. So, without further due let's get started!

## Here is What We'll Cover

-   [Prerequisites](#prerequisites)
-   [What Are We Going to Build?](#what-are-we-going-to-build)
-   [Getting Started](#getting-started)
-   [How to set up the Todo app component](#how-to-set-up-the-todo-app-component)
-   [How to create a simple form element in React](#how-to-create-a-simple-form-element-in-react)
-   [What is a type error in TypeScript and how to fix it?](#what-is-a-type-error-in-typescript-and-how-to-fix-it)
-   [What are the Generic types in TypeScript?](#what-are-the-generic-types-in-typescript)
-   [How to handle form submission with TypeScript in React](#how-to-handle-form-submission-with-typescript-in-react)
-   [How to automatically focus on an input field in React](#how-to-automatically-focus-on-an-input-field-in-react)
-   [What is `useRef` and how to to use it with TypeScript](#what-is-useref-and-how-to-to-use-it-with-typescript)
-   [How to create type-safe React components with TypeScript](#how-to-create-type-safe-react-components-with-typescript)
-   [What is `forwardRef` in React?](#what-is-forwardref-in-react)
-   [How to create a todo item on the form submission?](#how-to-create-a-todo-item-on-the-form-submission)
-   [What is React Context?](#what-is-react-context)
-   [How to use React Context with TypeScript?](#how-to-use-react-context-with-typescript)
-   [What are Interfaces in TypeScript?](#what-are-interfaces-in-typescript)
-   [How to use TypeScript interfaces with React Context](#how-to-use-typescript-interfaces-with-react-context)
-   [How to create a custom hook to consume React Context](#how-to-create-a-custom-hook-to-consume-react-context)
-   [How to define an interface for Todo items](#how-to-define-an-interface-for-todo-items)
-   [How to build a custom React component for displaying Todo items](#how-to-build-a-custom-react-component-for-displaying-todo-items)
-   [How to implement functionality: Edit, Delete, and Update Todo items](#how-to-implement-functionality-edit-delete-and-update-todo-items)
-   [Conclusion](#conclusion)

## Prerequisites

No prior knowledge of TypeScript is necessary to begin this tutorial, making it completely beginner-friendly. However, having a background in React will greatly enhance your understanding and maximize your learning potential throughout this tutorial.

Throughout this tutorial, you'll be utilizing the following tools:

1.  **React 18.2.0:** React is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI based on data changes.
2.  **TypeScript:** TypeScript is a statically typed superset of JavaScript that adds optional type annotations. It provides enhanced tooling and helps catch potential errors during development, making code more reliable and easier to maintain.
3.  **Vite:** Vite is a fast development server and build tool for modern web applications. It offers instant server start, hot module replacement, and optimized build output, enabling quick and efficient development workflows.
4.  **Framer Motion:** Framer Motion is a popular animation library for React. It provides an easy-to-use interface for creating smooth, interactive animations and transitions in web applications, enhancing the overall user experience.

In the upcoming section, you'll get a concise preview of the project you'll be building in this tutorial.

## What Are We Going to Build?

We are going to build a classic todo application. It will have the following features:

-   Add a todo item.
-   Edit a todo item.
-   Delete a todo item.
-   Mark a todo item as completed or not.
-   Storing todo items in the browser's local storage.
-   Displaying proper error messages when the user tries to add or edit a todo item with an empty title.

![This is a todo app where users can add or delete an item, also they can edit an existing item or mark them as completed](https://www.freecodecamp.org/news/content/images/2023/06/ezgif-3-98866e5ad0.gif)

Preview of the final app

## Getting Started

To get started with this tutorial, I've already prepared you a boilerplate project which contains all the required dependencies. This eliminates the need to set up your project from scratch.

Simply clone the [starter boilerplate](https://github.com/Yazdun/react-ts-fcc-tutorial/tree/starter) from the GitHub repository and then follow along with the tutorial. This way, you can focus on learning and implementing the concepts without getting caught up in setup details.

-   Starter Boilerplate: [View on GitHub](https://github.com/Yazdun/react-ts-fcc-tutorial/tree/starter)
-   Final Version: [View on GitHub](https://github.com/Yazdun/react-ts-fcc-tutorial)

Once you have set up the starter boilerplate and successfully run it on your local machine, you should be able to see the initial page. This page will serve as the starting point for our journey.

![Simple page which is displaying the text "Todo App". this page serves as the starting point of our tutorial](https://www.freecodecamp.org/news/content/images/2023/06/image-314.png)

Starter Boilerplate

Now, we'll start adding exciting features to our application. Let's jump in and get started right away!

## How to Set Up the Todo App Component

In this section, you will set up the main component of your Todo App and gradually enhance it with additional functionality. Open up `./src/App.tsx` and add the following code:

```tsx
//📂./src/App.tsx

import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
```

Let's break it down step by step:

-   `<Toaster position="bottom-center" />`: This component is responsible for displaying toast notifications at the bottom center of the screen.
-   `<AddTodo />`: This component will represents an input field and button to add new todo items to the app.
-   `<TodoList />`: This component will render a list of existing todo items.

Now, open up your local server on your browser and you will be able to see the following page:

![Simple web page which is displaying two React components](https://www.freecodecamp.org/news/content/images/2023/06/image-315.png)

Preview of the App.tsx

These two components play a critical role in your application. In the upcoming section, you will be building the functionality to add a todo item using the `<AddTodo />` component. Specifically, you will learn how to handle form submissions with TypeScript in React.

## How to Create a Simple Form Element in React

First of all, you need to create a form element for creating a todo item. To achieve this in your application, you need to create a form and handle the form submission effectively. In this section, you will be exploring how to handle form submission using TypeScript in a React application.

I just want to give you a quick heads up since you're about to face your first type-error in TypeScript! Add the following code to the `components/AddTodo.tsx`:

```tsx
//📂./src/components/AddTodo.tsx
//⚠️TypeScript is not happy with this code

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState()

  return (
    <form>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

You've created a useState hook that updates the state with the value of the input as it changes. However, TypeScript is not happy with this code. But why is TypeScript unhappy?

### What is a type error in TypeScript and how to fix it

Types in TypeScript define the kind of data that variables can hold and enable the detection of errors and bugs during development.

A type error in TypeScript occurs when a value is used in a way that is incompatible with its expected type, leading to potential bugs or unexpected behavior in the code.

In our case, TypeScript is showing an error in this code because it cannot infer the type of the state variable `input` automatically. To fix this, you need to provide TypeScript with the type information explicitly. In this case, you want input to be of type string since it represents the value of the input field.

To fix this error, you have two options. The easy solution is adding a initial value to the `useState` hook and TypeScript will automatically infer the `input` type as a string:

```tsx
 const [input, setInput] = useState('')
```

By adding the above code, you may notice that the error disappears and TypeScript is satisfied. But not all errors can be resolved this easily in TypeScript.

Let's consider a situation where you are uncertain about the type of your state and cannot determine whether it should be initialized as a number or a string. This uncertainty leads us to the second option, which is using generic types.

### What are the Generic types in TypeScript?

Generic types provide a way to handle situations when you are unsure about the specific type of a value. With generic types, you can define a placeholder that represents the actual type, allowing you to make your code more flexible and reusable:

```tsx
const [state, setState] = useState<string | number>('')
```

The above code is initializing a state variable named "state" with an initial value of an empty string, but it allows the state to hold either a string or a number as its value.

Now, let's introduce a generic type into your app. You don't want your users to add a number as a todo – we want them to be able to only add a string:

```tsx
//📂./src/components/AddTodo.tsx
//✅TypeScript is happy with this code

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')

  return (
    <form>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

By specifying `<string>` after the `useState` function, we ensure that the state variable `input` can only hold values of type string. This prevents users from entering numbers or any other incompatible data types as todos.

### How to handle form submission with TypeScript in React

Now that you have successfully stored the input value in the state, let's proceed with handling the form submission itself:

```tsx
//📂./src/components/AddTodo.tsx

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form has been submitted')
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

```

The `handleSubmission` function is called when the form is submitted. Let's break it down step by step:

1.  `(e: React.FormEvent)` is the function's parameter declaration. It specifies that the function expects an event object of type `React.FormEvent` to be passed as an argument. The `React.FormEvent` is a type of event object that represents an event occurring on a form element, such as submitting the form or interacting with form fields.
2.  `e.preventDefault()` is a method that belongs to the event object (`e`). It is called to prevent the default behavior of form submission, which is to refresh the page. By calling `preventDefault()`, we override the default behavior and prevent the page from refreshing.
3.  `console.log('form has been submitted')` is a simple statement that logs a message to the browser's console. In this case, it logs the message "form has been submitted" when the form submission event occurs.

Great! You've completed the necessary steps to handle the form submission. Now let's proceed to the next section where you enhance your form's functionality by making some modifications.

### How to automatically focus on an input field in React

To enhance user experience, you can automatically set focus on the "add todo" input field when the app is initially loaded. This eliminates the need for users to manually click on the input upon opening the app.

To implement this functionality, you can utilize a specific React hook called `useRef`, which allows you to incorporate this feature into the input.

#### What is `useRef` and how to to use it with TypeScript

`useRef` is a special hook in React that creates a reference to an element or value in your component. This reference can be used to access and manipulate the referenced element directly, without causing re-renders.

You'll commonly use it to access DOM elements, manage focus, or store mutable values across component renders.

Open app `components/AddTodo.tsx` and add the following code:

```tsx
//📂./src/components/AddTodo.tsx

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form has been submitted')
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

Here, the `useRef` hook from React is being used along with TypeScript.

-   The line `const inputRef = useRef<HTMLInputElement>(null)` declares a reference variable called `inputRef` using the useRef hook. The type parameter `<HTMLInputElement>` specifies that the ref is intended for an input element. The initial value of the ref is set to `null`.
-   In the useEffect hook, `inputRef.current` is checked to see if it exists. If it does, the `focus()` method is called on it, which means the input field will receive focus when the component is mounted.

The `useRef` hook is type-parameterized with `<HTMLInputElement>` to ensure that the reference is compatible with input elements.

By using useRef and TypeScript together, the code benefits from TypeScript's static type checking and the ability to interact with the input element's DOM reference using useRef.

While this code functions correctly, it would be beneficial to reuse this input component in other parts of your application. Therefore, let's create a reusable input component and explore how to develop type-safe React components by implementing this input.

### How to create type-safe React components with TypeScript

In this section, you will create a type-safe Input component for future use cases in your app.

To create this custom Input component, you will need to pass the ref you created in the previous section as a prop to this component.

Refs are passed as normal props, and in order to pass refs to child components, you need to implement a special built-in React function called forwardRef.

#### What is `forwardRef` in React?

In React, the `forwardRef` function is a feature that allows you to pass a ref from a parent component to a child component. Refs are used to access and manipulate the underlying DOM elements directly.

By using `forwardRef`, you can create a custom component that can receive a ref and pass it down to a specific element within the component.

This enables the parent component to interact with the child component's underlying element, such as focusing an input field or triggering certain actions.

In simple terms, `forwardRef` helps you to connect a ref between components, allowing you to control or access the child component's inner element if needed.

Now, let's create a re-usable Input component. Open up `components/Input.tsx` :

```tsx
// 📂./src/components/Input.tsx

import { InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(
        'w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white',
        className,
      )}
    />
  )
})
```

Let's break this component down step by step:

1.  The component utilizes the `forwardRef` function from React to forward the ref to the underlying `<input>` element. This allows the parent components to access and manipulate the input element directly.
2.  `HTMLInputElement` specifies the type of the ref that will be forwarded to the underlying `<input>` element. This ensures that the ref is compatible with the input element's expected type.
3.  `InputHTMLAttributes<HTMLInputElement>` specifies the type of the props object that the component accepts. This includes all the standard HTML input element attributes, such as `value`, `placeholder`, `onChange`, and so on.
4.  The component destructures the `className` prop from the `rest` object and also receives the `ref` as a parameter.
5.  Inside the component, a JSX expression is used to render an `<input>` element. The spread operator (`{...rest}`) is used to pass all the props (except `className` and `ref`) received by the component to the `<input>` element. This ensures that any additional attributes passed to the `<Input>` component will be applied to the underlying `<input>` element.
6.  The `ref` is assigned to the underlying `<input>` element using the `ref` attribute, enabling the parent component to reference the input element.
7.  The `className` is constructed using the `cn` function from the `classnames` module. This function combines multiple CSS class names based on the provided conditions. In this case, it combines the default input element class names with the `className` prop passed to the `<Input>` component.

The final rendered `<input>` element will have the combined class names and inherit all other props passed to the `<Input>` component.

Now, let's update the `<AddTodo />` component to utilize the custom `<Input />` instead of the default HTML input element:

```tsx
//📂./src/components/AddTodo.tsx

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form has been submitted')
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

Now, you are able to use this custom `<Input />` component across your whole application. In the next section, you'll be creating the funcionality to add a todo item on the form submission.

### How to create a todo item on the form submission

To store each todo item, you can utilize an array that holds the user's input. Essentially, we require an array of strings to store each todo:

```tsx
const [todos, setTodos] = useState<string[]>([])
```

`string[]` specifies the type of data that will be stored in the `todos` state variable. In this case, it is an array of strings, meaning it will hold a list of todo items, where each item is represented as a string.

Now let's add an item to the `todos` on form submission:

```tsx
//📂./src/components/AddTodo.tsx

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      setTodos([...todos, input])
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

The `` `handleSubmission` `` checks if the `input` (the user's entered todo) is not an empty string after removing any leading or trailing whitespace using `input.trim() !== ''`.

If it's not empty, it adds the `input` value to the existing `todos` array using `setTodos([...todos, input])`. This creates a new array with all the previous todos and the new todo added at the end. It resets the `input` value to an empty string using `setInput('')` so that the input field becomes empty and ready for the next todo entry.

Now, while you have successfully implemented the functionality to create a todo item, it cannot be displayed on the screen yet.

This is because the `<AddTodo />` component is responsible for adding todo items, not displaying them.

On the other hand, the `<TodoList />` component is responsible for displaying all the items. To bridge this gap and share todos between these components, you can leverage the power of React Context.

## What is React Context?

React Context API is a feature in React that allows data to be shared and accessed by components without passing it explicitly through props. It provides a way to create a global state that can be accessed by any component in the application.

Imagine you have a tree-like structure of components, where certain data needs to be accessed by multiple components at different levels. Rather than passing the data through multiple layers of components, you can use React Context to create a central store for that data.

Here's how it works:

1.  **Create a Context:** First, you define a context using the `createContext()` function. This creates a context object that holds the shared data.
2.  **Provide the Context:** You wrap the parent component or a specific part of your application with a `<Context.Provider>`. This provider component accepts a `value` prop where you can pass the data you want to share.
3.  **Consume the Context:** To access the shared data within a component, you use the `useContext()` hook provided by React. By passing the created context as an argument to `useContext()`, you can access the shared data and use it within that component.
4.  **Update the Context:** If you need to update the shared data, you can do so by modifying the value in the provider component. This change will automatically propagate to all the components that are consuming the context.

React Context API simplifies the process of sharing data across components, eliminating the need for manual prop drilling.

In your situation, you need to create a Context to share todo items across multiple components. Let's create a Context to see how this mechanism works in practice.

### How to use React Context with TypeScript

In this section, you will learn how to create a React Context to isolate the application logic and improve the state management capabilities of your app.

If you open up `context/TodoContext.tsx`, you'll see the following code:

```tsx
// 📂./src/context/TodoContext.tsx

import React, { createContext } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

export const TodoContext = createContext<undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={undefined}>
      {props.children}
    </TodoContext.Provider>
  )
}

```

Let's break it down step by step:

-   The `TodoContext` is created using the `createContext` function provided by React. It is initialized with an undefined value.
-   Additionally, a `TodoProvider` component is defined. It takes a `children` prop, which represents the child components that will be wrapped by this provider.
-   Inside the `TodoProvider` component, a `<TodoContext.Provider>` component is rendered. It wraps the `props.children`, which allows the child components to access the TodoContext.
-   The value provided to the `<TodoContext.Provider>` component is set to `undefined` for now.

In the upcoming section, you'll make a more complex Context by learning about something called an ****Interface**** in TypeScript.

### What are Interfaces in TypeScript?

In TypeScript, interfaces are a way to define the structure and shape of an object. They allow you to specify the properties and their types that an object should have. Think of an interface as a blueprint or a contract that describes what an object should look like.

Imagine you are building a house. Before starting the construction, you would have a blueprint that outlines the design and layout of the house. Similarly, an interface in TypeScript is like a blueprint for an object.

Let's look at a simple example of an interface:

```ts
interface Person {
  name: string;
  age: number;
}
```

In this example, we define an interface called `Person` that describes the structure of a person object. It specifies that a person object should have two properties: `name`, which should be of type `string`, and `age`, which should be of type `number`.

Let's consider your Todo Context and the props you want to pass to its consumers. In this case, you will need an interface that defines the required props, including an array of strings that contains all the todo items, as well as a function that accepts a string and adds it to the todo list.

```tsx
interface TodoContextProps {
  todos: string[]
  addTodo: (text: string) => void
}
```

The `TodoContextProps` interface specifies the structure of the properties expected in the TodoContext. It has two properties:

1.  `todos`: An array of strings that represents the todo items. This property holds all the existing todos.
2.  `addTodo`: A function that accepts a parameter of type string (`text`) and has a return type of `void`. This function is responsible for adding a new todo item to the list. It takes the new todo item as input and performs the necessary action without returning any value.

### How to use TypeScript Interfaces with React Context

Now that you have a grasp of the benefits of TypeScript interfaces, it's time to enhance your Context by incorporating this interface:

```tsx
// 📂./src/context/TodoContext.tsx

import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps {
  todos: string[]
  addTodo: (text: string) => void
}
export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([])

  // ::: ADD NEW TODO :::
  const addTodo = (text: string) => {
    setTodos([...todos, text])
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
```

In this updated code, there are significant changes compared to the previous version. These changes introduce TypeScript and modify the TodoContext and TodoProvider components:

1.  Here, `TodoContextProps` specifies that it should have two properties: `todos`, which is an array of strings representing todo items, and `addTodo`, a function that takes a string parameter and returns void (no return value).
2.  The `TodoContext` is now created with `createContext` and initialized with a type of `TodoContextProps | undefined`. This means the context value can be of type `TodoContextProps` or undefined.
3.  The `TodoProvider` component now initializes the `todos` state using the `useState` hook. It keeps track of the todo items using an array of strings.
4.  A new function `addTodo` is introduced, which takes a string `text` as a parameter. It uses the `setTodos` function to update the `todos` state by appending the new todo item to the existing array.
5.  Creating the value for the context: The `value` variable is assigned an object of type `TodoContextProps`, containing the `todos` array and the `addTodo` function.
6.  Providing the context value: The `<TodoContext.Provider>` component wraps the `props.children`, and the value prop is set to `value`, which provides the `todos` and `addTodo` to the child components.

In summary, you are using TypeScript to define an interface for the TodoContextProps, adds a new todo using useState and a custom function, and provides the updated context value to the child components.

### How to create a custom hook to consume React Context

To utilize the values provided by the context, you need to create a custom hook that consumes this context and provides its values to the child components. Open up `context/useTodo.ts` and add the following code:

```tsx
// 📂./src/context/useTodo.ts

import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}
```

Let's break it down step by step:

1.  You import the `useContext` hook from the 'react' module and the `TodoContext` from the `./TodoContext` file.
2.  Inside the hook, the `useContext` hook is called with `TodoContext` as the argument. This hooks into the `TodoContext` and retrieves its current value.
3.  If the `context` value is `undefined`, it means that the `useTodo` hook is being used outside the scope of the `TodoProvider`. In such cases, an error is thrown with the message 'useTodo must be used within a TodoProvider'.

Overall, this code allows you to create a custom hook named `useTodo` that can be used within your components.

By calling this hook, you can access the `TodoContext` and retrieve its value, which includes the todo-related data and functions defined in the `TodoProvider`.

It also ensures that the `useTodo` hook is used only within the scope of the `TodoProvider` to maintain the correct usage and prevent any errors.

Next, you'll need to wrap your entire app with the TodoProvider component. This ensures that the context values are accessible to its children components by utilizing the `useTodo` hook:

```tsx
// 📂 ./src/main.tsx

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
```

`<TodoProvider>` wraps the entire application and provides the necessary context for managing todo-related data.

Now, let's integrate the useTodo hook within the `<AddTodo />` component to efficiently manage todo items through the context. Additionally, let's implement toast notifications to provide feedback based on user interactions:

```tsx
//📂./src/components/AddTodo.tsx

import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context/useTodo'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          type="text"
          placeholder="start typing ..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
```

1.  The line `const { addTodo } = useTodo()` uses the `useTodo` hook to retrieve the `addTodo` function from the todo context. This allows us to add new todo items.
2.  The `toast.success('Todo added successfully!')` line displays a success toast notification indicating that the todo was added successfully.
3.  The `toast.error('Todo field cannot be empty!')` line displays an error toast notification if the todo field is empty when attempting to submit.
4.  If the `input` value (trimmed of whitespace) is not empty, the `addTodo` function is called with the input value, the `input` state is cleared, and a success toast notification is displayed.
5.  If the `input` value is empty, an error toast notification is displayed indicating that the todo field cannot be empty.

This code integrates the `useTodo` hook to manage todo items through context. It captures user input, adds todos, and displays toast notifications to provide feedback on the success or failure of adding a todo item.

Now, let's also modify `<TodoList />` component and display the todo items on the screen. Open up `components/TodoList.tsx` and add the following code:

```tsx
//📂./src/components/TodoList.tsx

import { useTodo } from '../context/useTodo'
import { SiStarship } from 'react-icons/si'

export const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}
```

1.  The import statement `import { useTodo } from '../context/useTodo'` imports the `useTodo` hook from the custom context, which allows us to access the `todos` array.
2.  If the `todos` array is empty (`!todos.length`), meaning there are no todos, a message is displayed indicating that there is nothing to do.
3.  If there are todos in the `todos` array, an unordered list (`<ul>`) is rendered.
4.  Inside the `<ul>`, the `todos` array is iterated using the `map` function. For each todo item, a list item (`<li>`) is created with a unique `key` set to the value of the todo item.
5.  The todo item itself is then displayed inside the list item.

This component retrieves the `todos` array from the context using the `useTodo` hook. If there are no todos, it displays a message. If there are todos, it renders an unordered list and populates it with list items for each todo item.

![Adding todo items and displaying toast notifications](https://www.freecodecamp.org/news/content/images/2023/07/ezgif-5-ff3ed7ffc5.gif)

Adding todo items and displaying toast notifications

Great job so far! You now have a functioning basic todo app. It's time to take it up a notch and add some exciting features to enhance your app even further.

## How to Define an Interface for Todo Items

In this section, you will build upon the existing context from the previous section and enhance it to create a more complex todo item with additional features.

Each todo item consists of three attributes:

-   **id:** a unique string that serves as an identifier for the item
-   **text:** a simple string representing the content of the todo item
-   **status:** the status of the todo item, which can be either "undone" or "completed"

Based on the above information, the proper todo interface would be as follows:

```ts
interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}
```

To implement the Todo interface into your context, we will make necessary updates and modifications to utilize this enhanced context effectively:

```tsx
//📂./src/context/TodoContext.tsx

import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
}

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  // ::: ADD NEW TODO :::
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    }

    setTodos([...todos, newTodo])
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
```

Here's an explanation of what's changed in the context:

**Todo interface:**

-   The Todo interface defines the structure of a todo item.
-   It consists of three properties: id (a string), text (a string representing the content of the todo item), and status (a string that can have the value 'undone' or 'completed').
-   This interface helps ensure that todo items have consistent properties and data types.

**useState<Todo\[\]>:**

-   The useState hook is used to manage state in a functional component.
-   In this case, `useState<Todo[]>` initializes a state variable called "todos" as an array of Todo items.
-   The "todos" state variable will be used to store and update the todo items.

**`addTodo` function and the `newTodo` variable:**

-   The addTodo function is a callback function that takes a text parameter (string).
-   Inside the addTodo function, a newTodo variable is declared as a Todo object.
-   The newTodo object is created with a unique id generated by the nanoid() function, the provided text, and an initial status of 'undone'.
-   The setTodos function from useState is called to update the todos state by adding the newTodo object to the existing array of todos.
-   This allows new todo items to be added to the list.

Now, you need to update the `<TodoList />` components to reflect the changes you made to the context:

```tsx
//📂./src/components/TodoList.tsx

import { useTodo } from '../context/useTodo'
import { SiStarship } from 'react-icons/si'

export const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
```

With this updated code, the todo's id is now being used as the key prop for each rendered todo item, and the todo's text is being used to display the content of each todo item.

Now, let's create a custom React component to appropriately display each todo item and introduce additional functionalities like editing, deleting, and updating individual todo items in our app.

## How to Build a Custom React Component for Displaying Todo Items

In this section, you will be creating a custom React component that handles the display and management of each individual todo item.

Open up `components/TodoItem.tsx` and add the following code:

```tsx
//📂./src/components/TodoItem.tsx

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props

  return (
    <motion.li
      layout
      className={cn(
        'p-5 rounded-xl bg-zinc-900',
        todo.status === 'completed' && 'bg-opacity-50 text-zinc-500',
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </motion.span>
    </motion.li>
  )
}
```

`<TodoItem />` is responsible for rendering an individual todo item:

-   The component takes a prop called `props`, which is an object containing a property called `todo`. The `todo` property is of type `Todo`, representing a single todo item.
-   Inside the component, the `todo` property is extracted from the `props` object using destructuring assignment.
-   The `motion.li` component is used from a Framer Motion to provide animations. It represents a list item (`<li>`) and supports layout animations.
-   The `className` attribute uses the `cn` utility function (from the `classnames` library) to conditionally apply CSS classes based on the `todo.status`. If the todo is completed, it adds classes for a semi-transparent background and text color.
-   Inside the list item, a `motion.span` component is used to wrap the todo text. It also supports layout animations.
-   The style of the span element is set based on the `todo.status`. If the todo is completed, a line-through text decoration is applied.
-   The `{todo.text}` expression renders the text content of the todo item.

TodoItem receives a todo item as a prop and renders it with optional animations, styling, and conditional CSS classes based on the todo's status.

Now let's modify `<TodoList />` component to use the `<TodoItem />` component:

```tsx
//📂./src/components/TodoList.tsx

import { TodoItem } from './TodoItem'
import { useTodo } from '../context/useTodo'
import { SiStarship } from 'react-icons/si'
import { motion } from 'framer-motion'

export const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <motion.ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </motion.ul>
  )
}
```

Here's an explanation of what's changed in the `<TodoList />`:  
  
**Importing additional dependencies:**

-   The code now imports the `motion` component from the `framer-motion` library. This allows for animations in the component.

**Rendering TodoItem component:**

-   Previously, the todo items were rendered as simple list items (`<li>`) directly within the TodoList component.
-   In the updated version, the TodoItem component is imported (`import { TodoItem } from './TodoItem'`) and used to render each todo item.
-   The TodoItem component is passed the `todo` prop, which represents an individual todo item.
-   The `key` prop is also provided to each TodoItem component, ensuring a unique identifier for each rendered todo item.

**Wrapping the list with motion component:**

-   The `<ul>` element is now wrapped with the `<motion.ul>` component to enable animations using the `framer-motion` library.
-   This allows for dynamic and smooth transitions when adding, removing, or updating todo items.

Overall, the updated TodoList component introduces animations using the `motion` component from `framer-motion` and replaces the direct rendering of todo items with the `<TodoItem />` component.

Now that you have successfully created the `<TodoItem />` component, let's shift our focus towards implementing the necessary functionalities to enable editing, deleting, and updating of each todo item using the Todo Context and TodoItem component.

## How to Implement Functionality: Edit, Delete, and Update Todo Items

In this section, you will enhance your Todo app by incorporating additional functionalities.

Firstly, you will implement the necessary logic within the todo context to handle these functionalities. Then, you will add the corresponding JSX to the `<TodoItem />` component to introduce interactivity and enable users to interact with the app.

As you recall, you utilized context to handle adding todo items to the app, and you will follow a similar approach for the edit, delete, and update functionalities.

The logic for these actions will be encapsulated within the todo context, and the useTodo hook will be utilized to leverage this logic within the `<TodoItem />` component. You will also store the todo items in the browser's local storage to ensure that users do not lose their progress when they leave the app.

Open up `context/TodoContext.tsx` and add the following code:

```tsx
// 📂./src/context/TodoContext.tsx

import React, { createContext } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, text: string) => void
  updateTodoStatus: (id: string) => void
}

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  // ::: ADD NEW TODO :::
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    }

    setTodos([...todos, newTodo])
  }

  // ::: DELETE A TODO :::
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // ::: EDIT A TODO :::
  const editTodo = (id: string, text: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text }
        }
        return todo
      })
    })
  }

  // ::: UPDATE TODO STATUS :::
  const updateTodoStatus = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone',
          }
        }
        return todo
      })
    })
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
```

Here's an explanation of what's happening:

**Defining TodoContextProps:**

-   TodoContextProps is an interface that specifies the structure of the TodoContext's value.
-   It includes properties such as todos (an array of Todo items) and functions for adding, deleting, editing, and updating the status of todo items.

**Implementing `addTodo`:**

-   The addTodo function takes a text parameter, generates a unique ID using nanoid, and creates a new todo object with the provided text and an initial status of 'undone'.
-   It uses the setTodos function, provided by useLocalStorage, to update the todos state by appending the newTodo to the existing array of todos.

**Implementing `deleteTodo`:**

-   The deleteTodo function takes an id parameter and uses the setTodos function to filter out the todo item with the matching id from the todos state.

**Implementing `editTodo`:**

-   The editTodo function takes an id and text parameter.
-   It uses the setTodos function to map over the todos state and update the text of the todo item with the matching id.

**Implementing `updateTodoStatus`:**

-   The updateTodoStatus function takes an id parameter.
-   It uses the setTodos function to map over the todos state and toggle the status of the todo item with the matching id between 'undone' and 'completed'.

**Providing the value and rendering child components:**

-   The value object is created with the todos array and the defined functions.
-   It is passed as the value prop to the TodoContext.Provider component to provide the defined values to its nested child components.

In summary, the `TodoContext` and `TodoProvider` handle the state and logic related to managing todo items. They provide the necessary functions and data through the TodoContext to be used by child components, such as `<TodoItem />`, for performing operations like adding, deleting, editing, and updating todo items.

Now, let's incorporate the corresponding JSX to enable users to interact with the logic that you have just implemented. Open up `components/TodoItem.tsx` and add the following code:

```tsx
//📂./src/components/TodoItem.tsx

import { useEffect, useRef, useState } from 'react'
import { Todo } from '../context/TodoContext'
import { useTodo } from '../context/useTodo'
import { Input } from './Input'
import { BsCheck2Square } from 'react-icons/bs'
import { TbRefresh } from 'react-icons/tb'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { toast } from 'react-hot-toast'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props

  const [editingTodoText, setEditingTodoText] = useState<string>('')
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

  const editInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus()
    }
  }, [editingTodoId])

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId)
    setEditingTodoText(todoText)

    if (editInputRef.current) {
      editInputRef.current.focus()
    }
  }

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== '') {
      editTodo(todoId, editingTodoText)
      setEditingTodoId(null)
      setEditingTodoText('')
      toast.success('Todo updated successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId)
    toast.success('Todo deleted successfully!')
  }

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId)
    toast.success('Todo status updated successfully!')
  }

  return (
    <motion.li
      layout
      key={todo.id}
      className={cn(
        'p-5 rounded-xl bg-zinc-900',
        todo.status === 'completed' && 'bg-opacity-50 text-zinc-500',
      )}
    >
      {editingTodoId === todo.id ? (
        <motion.div layout className="flex gap-2">
          <Input
            ref={editInputRef}
            type="text"
            value={editingTodoText}
            onChange={e => setEditingTodoText(e.target.value)}
          />
          <button
            className="px-5 py-2 text-sm font-normal text-orange-300 bg-orange-900 border-2 border-orange-900 active:scale-95 rounded-xl"
            onClick={() => handleUpdate(todo.id)}
          >
            Update
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5">
          <motion.span
            layout
            style={{
              textDecoration:
                todo.status === 'completed' ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </motion.span>
          <div className="flex justify-between gap-5 text-white">
            <button onClick={() => handleStatusUpdate(todo.id)}>
              {todo.status === 'undone' ? (
                <span className="flex items-center gap-1">
                  <BsCheck2Square />
                  Mark Completed
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <TbRefresh />
                  Mark Undone
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="flex items-center gap-1 "
              >
                <FaRegEdit />
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="flex items-center gap-1 text-red-500"
              >
                <RiDeleteBin7Line />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  )
}
```

Let's focus on the `handleEdit`, `handleUpdate`, `handleDelete`, and `handleStatusUpdate` functions and how they work:

**`handleEdit` function:**

This function is called when the user clicks the "Edit" button. It takes the `todoId` (unique identifier for the todo item) and `todoText` (current text of the todo item) as parameters.

It sets the `editingTodoId` state to the `todoId` and the `editingTodoText` state to the `todoText`. Also, if the `editInputRef` (a reference to the input field) exists, it sets the focus on the input field using the `focus` method.

**`handleUpdate` function:**

This function is called when the user clicks the "Update" button after editing a todo item. It takes the `todoId` as a parameter.

It first checks if the trimmed `editingTodoText` is not empty. If it's not empty, it calls the `editTodo` function from the `useTodo` hook, passing the `todoId` and `editingTodoText` as arguments. It then resets the `editingTodoId` and `editingTodoText` states to null and an empty string, respectively.

Finally, it displays a success toast message if the update was successful or an error toast message if the todo field was empty.

**`handleDelete` function:**

This function is called when the user clicks the "Delete" button. It takes the `todoId` as a parameter. It calls the `deleteTodo` function from the `useTodo` hook, passing the `todoId` as an argument. It then displays a success toast message indicating that the todo item was deleted successfully.

**`handleStatusUpdate` function:**

This function is called when the user clicks the "Mark Completed" or "Mark Undone" button. It takes the `todoId` as a parameter.

It calls the `updateTodoStatus` function from the `useTodo` hook, passing the `todoId` as an argument. It then displays a success toast message indicating that the todo item's status was updated successfully.

These functions handle the interactions and actions related to editing, updating, deleting, and updating the status of a todo item in the TodoItem component.

The JSX displays the todo's text with the option to edit, delete, and update its status. The appearance and behavior of the todo item are determined by the values of the `todo` object and the component's state variables.

If the todo is being edited, an input field and an "Update" button are shown. Otherwise, the todo's text is displayed, and buttons for marking it as completed or undone, editing, and deleting are available.

The `handleEdit`, `handleUpdate`, `handleDelete`, and `handleStatusUpdate` functions are used as event handlers for these buttons, enabling the user to interact with and modify the todo item.

![Final todo app, a user adds an item, then edit and delete the todo item in order to display the app's functionality](https://www.freecodecamp.org/news/content/images/2023/07/ezgif-1-f7b9438717.gif)

Final result

Congratulations! You have successfully created a beautiful Todo app with the essential features.

With the knowledge gained from this article, you are now well-equipped to further enhance and customize the app based on your specific needs and preferences.

## Conclusion

Throughout this article, we've covered the fundamentals of React development with TypeScript and learned how to create a fully functional Todo app.

We explored concepts like state management, context, and hooks, enabling you to add, edit, delete, and update todo items.

With this knowledge, you're now ready to apply these principles to your future projects and build type-safe applications with React. Keep exploring and experimenting with new features to take your app to the next level.

You can follow me on [Twitter](https://twitter.com/Yazdun) where I share more useful tips on web development. Happy coding!