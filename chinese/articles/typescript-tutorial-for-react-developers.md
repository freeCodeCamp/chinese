> -  原文地址：[TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/)
> -  原文作者：[Yazdun Fadali](https://www.freecodecamp.org/news/author/yazdun/)
> -  译者：yiwei
> -  校对者：

![TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App](https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/TypeScript-Handbook-for-React-Developers-Cover.png)

在当今的JavaScript生态中，TypeScript越来越受欢迎。越来越多的React开发者开始使用它。

如果你是一个想要探索TypeScript或提升你与它相关的技能的React开发者，这本手册正适合你。我将指导你通过构建一个经典的待办事项应用，来在React应用中使用TypeScript。

我将涵盖作为一个React开发者开始使用TypeScript所需知道的一切。你将学会如何使用强类型处理状态和属性，如何用TypeScript创建React组件，如何在React Hooks中使用TypeScript，以及如何与Context API一起使用TypeScript。

通过本教程的学习，你将对TypeScript有一个坚实的理解，并准备好自信地开发类型安全的React应用程序。所以，不用再等待，让我们开始吧！

## 我们将涵盖以下内容

-   [先决条件](#prerequisites)
-   [我们将要构建什么？](#what-are-we-going-to-build)
-   [如何开始](#getting-started)
-   [如何设置待办事项应用的组件](#how-to-set-up-the-todo-app-component)
-   [如何在React中创建一个简单的表单元素](#how-to-create-a-simple-form-element-in-react)
-   [TypeScript中的类型错误是什么以及如何修复它？](#what-is-a-type-error-in-typescript-and-how-to-fix-it)
-   [TypeScript中的泛型是什么？](#what-are-the-generic-types-in-typescript)
-   [如何在React中用TypeScript处理表单提交](#how-to-handle-form-submission-with-typescript-in-react)
-   [如何在React中自动聚焦一个输入字段](#how-to-automatically-focus-on-an-input-field-in-react)
-   [什么是`useRef`以及如何在TypeScript中使用它](#what-is-useref-and-how-to-to-use-it-with-typescript)
-   [如何用TypeScript创建类型安全的React组件](#how-to-create-type-safe-react-components-with-typescript)
-   [React中的`forwardRef`是什么？](#what-is-forwardref-in-react)
-   [如何在表单提交时创建一个待办事项](#how-to-create-a-todo-item-on-the-form-submission)
-   [什么是React上下文？](#what-is-react-context)
-   [如何在TypeScript中使用React上下文？](#how-to-use-react-context-with-typescript)
-   [TypeScript中的接口是什么？](#what-are-interfaces-in-typescript)
-   [如何将TypeScript接口与React上下文一起使用](#how-to-use-typescript-interfaces-with-react-context)
-   [如何创建一个自定义钩子来使用React上下文](#how-to-create-a-custom-hook-to-consume-react-context)
-   [如何为待办事项定义一个接口](#how-to-define-an-interface-for-todo-items)
-   [如何构建一个自定义的React组件来展示待办事项](#how-to-build-a-custom-react-component-for-displaying-todo-items)
-   [如何实现功能：编辑、删除和更新待办事项](#how-to-implement-functionality-edit-delete-and-update-todo-items)
-   [结论](#conclusion)

## 先决条件

开始本教程无需事先了解TypeScript，使其非常适合初学者。然而，拥有React的背景知识将极大地增强你的理解力，并在整个教程中最大限度地提升你的学习潜力。

在本教程中，你将使用以下工具：

1.  **React 18.2.0：** React是一个用于构建用户界面的JavaScript库。它允许开发者创建可重用的UI组件，并根据数据变化高效地更新UI。
2.  **TypeScript：** TypeScript是JavaScript的一种静态类型超集，增加了可选的类型注释。它提供了增强的工具，并帮助在开发过程中捕获潜在的错误，使代码更可靠，更易于维护。
3.  **Vite：** Vite是一个用于现代Web应用的快速开发服务器和构建工具。它提供即时服务器启动、热模块替换和优化的构建输出，使开发流程快速而高效。
4.  **Framer Motion：** Framer Motion是React的一种流行动画库。它提供了一个易于使用的界面，用于在Web应用中创建流畅的互动动画和过渡，增强了整体用户体验。

在接下来的部分中，你将对你将在本教程中构建的项目有一个简洁的预览。

## 我们将要构建什么？

我们将要构建一个经典的待办事项应用程序。它将具有以下功能：

-   添加一个待办事项。
-   编辑一个待办事项。
-   删除一个待办事项。
-   标记一个待办事项是否完成。
-   在浏览器的本地存储中存储待办事项。
-   当用户尝试添加或编辑一个空标题的待办事项时，显示适当的错误消息。

![This is a todo app where users can add or delete an item, also they can edit an existing item or mark them as completed](https://www.freecodecamp.org/news/content/images/2023/06/ezgif-3-98866e5ad0.gif)

应用程序最终预览

## 如何开始

为了开始本教程，我已经为你准备了一个包含所有必需依赖项的样板项目。这消除了从头开始设置项目的需要。

只需从GitHub仓库克隆[起始样板](https://github.com/Yazdun/react-ts-fcc-tutorial/tree/starter)，然后跟随教程。这样，你可以专注于学习和实现概念，而不会被设置细节所困扰。

-   起始样板：[在GitHub上查看](https://github.com/Yazdun/react-ts-fcc-tutorial/tree/starter)
-   最终版本：[在GitHub上查看](https://github.com/Yazdun/react-ts-fcc-tutorial)

一旦你设置好起始样板并成功地在你的本地机器上运行它，你应该能够看到初始页面。这个页面将作为我们旅程的起点。

![简单的页面，显示着“待办事项应用”的文字。这个页面作为我们教程的起点](https://www.freecodecamp.org/news/content/images/2023/06/image-314.png)

起始样板

现在，我们将开始为我们的应用添加令人兴奋的功能。让我们立即跳入并开始吧！

## 如何设置待办事项应用的组件

在这一部分，你将设置你的待办事项应用的主要组件，并逐渐增强它的附加功能。打开`./src/App.tsx`并添加以下代码：

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

让我们一步步分解：

-   `<Toaster position="bottom-center" />`：这个组件负责在屏幕底部中央显示toast通知。
-   `<AddTodo />`：这个组件将表示一个输入字段和一个按钮，用于向应用添加新的待办事项。
-   `<TodoList />`：这个组件将渲染现有待办事项的列表。

现在，在你的浏览器上打开你的本地服务器，你将能看到以下页面：

![Simple web page which is displaying two React components](https://www.freecodecamp.org/news/content/images/2023/06/image-315.png)

App.tsx的预览

这两个组件在你的应用中起着至关重要的作用。在接下来的部分中，你将构建使用`<AddTodo />`组件添加待办事项的功能。具体来说，你将学习如何在React中使用TypeScript处理表单提交。

## 如何在React中创建一个简单的表单元素

首先，你需要为创建一个待办事项创建一个表单元素。为了在你的应用中实现这一点，你需要创建一个表单并有效地处理表单提交。在这一部分中，你将探索如何在React应用中使用TypeScript处理表单提交。

我只是想给你一个快速提示，因为你即将遇到你在TypeScript中的第一个类型错误！将以下代码添加到`components/AddTodo.tsx`：

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

你创建了一个useState钩子，它会随着输入值的改变而更新状态。然而，TypeScript对这段代码不满意。但为什么TypeScript会不满意呢？

### TypeScript中的类型错误是什么以及如何修复它

TypeScript中的类型定义了变量可以持有的数据种类，并在开发过程中启用了错误和漏洞的检测。

当一个值以与其预期类型不兼容的方式使用时，就会在TypeScript中出现类型错误，导致代码中可能出现漏洞或意外行为。

在我们的案例中，TypeScript显示这段代码有错误，因为它无法自动推断状态变量`input`的类型。要解决这个问题，你需要明确地提供TypeScript类型信息。在这种情况下，你希望input是字符串类型，因为它代表输入字段的值。

要修复这个错误，你有两个选择。简单的解决方案是向`useState`钩子添加一个初始值，TypeScript将自动推断`input`类型为字符串：

```tsx
 const [input, setInput] = useState('')
```

通过添加上述代码，你可能会注意到错误消失了，TypeScript也满意了。但并不是所有的错误都能在TypeScript中这么容易解决。

让我们考虑一个情况，你对你的状态的类型不确定，不能确定它应该初始化为数字还是字符串。这种不确定性引导我们使用第二个选项，即使用泛型。

### TypeScript中的泛型是什么？

泛型提供了一种处理你不确定特定值类型的情况的方法。通过泛型，你可以定义一个占位符来代表实际的类型，使你的代码更加灵活和可重用：

```tsx
const [state, setState] = useState<string | number>('')
```

上述代码初始化了一个名为“state”的状态变量，其初始值为空字符串，但它允许状态变量存储字符串或数字作为其值。

现在，让我们在你的应用中引入一个泛型。我们不希望你的用户添加数字作为待办事项 - 我们希望他们只能添加字符串：

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

通过在`useState`函数后指定`<string>`，我们确保状态变量`input`只能持有字符串类型的值。这样可以防止用户输入数字或任何其他不兼容的数据类型作为待办事项。

### 如何在React中使用TypeScript处理表单提交

既然你已经成功地将输入值存储在状态中，让我们继续处理表单提交本身：

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

当表单被提交时，会调用`handleSubmission`函数。让我们逐步分解它：

1.  `(e: React.FormEvent)`是函数的参数声明。它指定函数期望传递一个类型为`React.FormEvent`的事件对象作为参数。`React.FormEvent`是表示在表单元素上发生的事件的事件对象类型，例如提交表单或与表单字段互动。
2.  `e.preventDefault()`是属于事件对象（`e`）的方法。它被调用以阻止表单提交的默认行为，即刷新页面。通过调用`preventDefault()`，我们覆盖了默认行为并阻止了页面刷新。
3.  `console.log('form has been submitted')`是一个简单的语句，将消息记录到浏览器的控制台。在这种情况下，它在表单提交事件发生时记录消息“form has been submitted”。

太好了！你已经完成了处理表单提交所需的步骤。现在让我们继续到下一部分，在那里你将通过做一些修改来增强你的表单功能。

### 如何在React中自动聚焦输入字段

为了提升用户体验，你可以在应用最初加载时自动将焦点设置在“添加待办事项”的输入字段上。这消除了用户在打开应用时手动点击输入框的需要。

为了实现这个功能，你可以使用一个特定的React钩子，称为`useRef`，它允许你将这个特性整合到输入框中。

#### 什么是`useRef`以及如何在TypeScript中使用它

`useRef`是React中的一个特殊钩子，用于在组件中创建对一个元素或值的引用。这个引用可以用来直接访问和操作被引用的元素，而不会导致重新渲染。

你通常会用它来访问DOM元素、管理焦点或在组件渲染中存储可变值。

打开应用`components/AddTodo.tsx`并添加以下代码：

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

这里，React的`useRef`钩子与TypeScript一起使用。

-   行`const inputRef = useRef<HTMLInputElement>(null)`使用useRef钩子声明了一个名为`inputRef`的引用变量。类型参数`<HTMLInputElement>`指定该ref用于输入元素。ref的初始值设置为`null`。
-   在useEffect钩子中，检查`inputRef.current`是否存在。如果存在，则调用其上的`focus()`方法，这意味着当组件被装载时，输入字段将接收焦点。

`useRef`钩子使用`<HTMLInputElement>`进行类型参数化，以确保引用与输入元素兼容。

通过结合使用useRef和TypeScript，代码不仅受益于TypeScript的静态类型检查，还能使用useRef与输入元素的DOM引用进行交互。

虽然这段代码可以正确运行，但将此输入组件在应用的其他部分复用将是有益的。因此，让我们创建一个可复用的输入组件，并探索如何通过实现这个输入来开发类型安全的React组件。

### 如何用TypeScript创建类型安全的React组件

在这一部分中，你将为应用中未来的使用案例创建一个类型安全的Input组件。

为了创建这个自定义的Input组件，你需要将在上一节中创建的ref作为prop传递给这个组件。

Refs作为普通的props传递，为了将refs传递给子组件，你需要实现一个名为forwardRef的特殊内置React函数。

#### React中的`forwardRef`是什么？

在React中，`forwardRef`函数是一个特性，它允许你从父组件向子组件传递ref。Refs用于直接访问和操作底层的DOM元素。

通过使用`forwardRef`，你可以创建一个自定义组件，该组件可以接收一个ref，并将其传递到组件内的特定元素。

这使得父组件能够与子组件的底层元素进行交互，例如聚焦输入字段或触发某些动作。

简而言之，`forwardRef`帮助你在组件之间连接ref，使你在需要时能够控制或访问子组件的内部元素。

现在，让我们创建一个可复用的Input组件。打开`components/Input.tsx`：

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

让我们逐步分解这个组件：

1.  该组件使用React中的`forwardRef`函数将ref传递到底层的`<input>`元素。这允许父组件直接访问和操作输入元素。
2.  `HTMLInputElement`指定了将被传递到底层`<input>`元素的ref的类型。这确保了ref与输入元素期望的类型兼容。
3.  `InputHTMLAttributes<HTMLInputElement>`指定了组件接受的props对象的类型。这包括所有标准的HTML输入元素属性，例如`value`、`placeholder`、`onChange`等。
4.  该组件从`rest`对象中解构出`className`属性，并且接收`ref`作为参数。
5.  在组件内部，使用JSX表达式来渲染一个`<input>`元素。扩展运算符（`{...rest}`）被用于将组件接收到的所有props（除了`className`和`ref`）传递给`<input>`元素。这确保传递给`<Input>`组件的任何额外属性都将应用于底层的`<input>`元素。
6.  使用`ref`属性将`ref`分配给底层的`<input>`元素，使得父组件能够引用输入元素。
7.  `className`是通过`classnames`模块中的`cn`函数构建的。这个函数基于提供的条件组合多个CSS类名。在这种情况下，它将默认输入元素的类名与传递给`<Input>`组件的`className`属性结合起来。

最终渲染的`<input>`元素将具有组合的类名，并继承传递给`<Input>`组件的所有其他属性。

现在，让我们更新`<AddTodo />`组件，以使用自定义的`<Input />`替代默认的HTML输入元素：

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

现在，你可以在整个应用程序中使用这个自定义的`<Input />`组件。在下一部分中，你将创建在表单提交时添加待办事项的功能。

### 如何在表单提交时创建一个待办事项

为了存储每个待办事项，你可以使用一个数组来保存用户的输入。本质上，我们需要一个字符串数组来存储每个待办事项：

```tsx
const [todos, setTodos] = useState<string[]>([])
```

`string[]`指定了将存储在`todos`状态变量中的数据类型。在这种情况下，它是一个字符串数组，意味着它将保存一个待办事项列表，其中每个项都表示为一个字符串。

现在让我们在表单提交时向`todos`中添加一个项：

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

`handleSubmission`检查`input`（用户输入的待办事项）在使用`input.trim() !== ''`去除任何前导或尾随空格后是否不是空字符串。

如果它不为空，则使用`setTodos([...todos, input])`将`input`值添加到现有的`todos`数组中。这将创建一个新数组，其中包含所有之前的待办事项和在末尾添加的新待办事项。它使用`setInput('')`将`input`值重置为空字符串，这样输入字段就变为空的，准备好输入下一个待办事项。

现在，虽然你已经成功实现了创建待办事项的功能，但它还不能在屏幕上显示。

这是因为`<AddTodo />`组件负责添加待办事项，而不是显示它们。

另一方面，`<TodoList />`组件负责显示所有项目。为了弥合这一差距并在这些组件之间共享待办事项，你可以利用React Context的力量。

## 什么是React Context？

React Context API是React中的一个特性，它允许数据在不通过props显式传递的情况下被组件共享和访问。它提供了一种创建全局状态的方法，该状态可以被应用中的任何组件访问。

假设你有一个类似树的组件结构，其中某些数据需要被不同层级的多个组件访问。与其通过多层组件传递数据，你可以使用React Context为该数据创建一个中心存储。

它是这样工作的：

1.  **创建Context：** 首先，你使用`createContext()`函数定义一个context。这将创建一个包含共享数据的context对象。
2.  **提供Context：** 你用`<Context.Provider>`包裹父组件或应用的特定部分。这个提供者组件接受一个`value`属性，你可以在其中传递你想要共享的数据。
3.  **使用Context：** 要在一个组件内访问共享数据，你使用React提供的`useContext()`钩子。通过将创建的context作为参数传递给`useContext()`，你可以访问共享数据，并在该组件内使用它。
4.  **更新Context：** 如果你需要更新共享数据，可以通过修改提供者组件中的值来实现。这个更改将自动传播到所有使用context的组件。

React Context API简化了跨组件共享数据的过程，消除了手动传递prop的需要。

在你的情况下，你需要创建一个Context来在多个组件之间共享待办事项。让我们创建一个Context来看看这个机制在实践中是如何工作的。

### 如何在TypeScript中使用React Context

在这一部分中，你将学习如何创建一个React Context来隔离应用逻辑，并提高你的应用的状态管理能力。

如果你打开`context/TodoContext.tsx`，你会看到以下代码：

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

让我们逐步分解：

-   `TodoContext`是使用React提供的`createContext`函数创建的。它以未定义的值进行初始化。
-   此外，定义了一个名为`TodoProvider`的组件。它接受一个`children`属性，代表将被这个提供者包裹的子组件。
-   在`TodoProvider`组件内部，渲染了一个`<TodoContext.Provider>`组件。它包裹了`props.children`，允许子组件访问TodoContext。
-   目前为止，提供给`<TodoContext.Provider>`组件的值被设置为`undefined`。

在接下来的部分中，你将通过学习TypeScript中所谓的**接口**来创建一个更复杂的Context。

### TypeScript中的接口是什么？

在TypeScript中，接口是一种定义对象结构和形状的方式。它们允许你指定一个对象应该具有的属性及其类型。可以将接口视为一个蓝图或契约，描述一个对象应该具备的外观。

想象一下你正在建造一座房子。在开始施工之前，你会有一个蓝图，勾画出房子的设计和布局。类似地，TypeScript中的接口就像是一个对象的蓝图。

让我们来看一个简单的接口示例：

```ts
interface Person {
  name: string;
  age: number;
}
```

在这个示例中，我们定义了一个名为`Person`的接口，描述了一个人对象的结构。它指定一个人对象应该有两个属性：`name`，其类型应为`string`，和`age`，其类型应为`number`。

让我们考虑你的Todo Context以及你想传递给其消费者的属性。在这种情况下，你需要一个定义所需属性的接口，包括包含所有待办事项的字符串数组，以及一个接受字符串并将其添加到待办事项列表中的函数。

```tsx
interface TodoContextProps {
  todos: string[]
  addTodo: (text: string) => void
}
```

`TodoContextProps`接口指定了TodoContext中期望的属性结构。它有两个属性：

1.  `todos`：表示待办事项的字符串数组。这个属性包含了所有现有的待办事项。
2.  `addTodo`：一个接受类型为字符串（`text`）的参数并返回`void`类型的函数。这个函数负责将新的待办事项添加到列表中。它接受新的待办事项作为输入，并执行必要的操作，但不返回任何值。

### 如何在React Context中使用TypeScript接口

现在你已经了解了TypeScript接口的好处，是时候通过整合这个接口来增强你的Context了：

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

在这个更新的代码中，与之前的版本相比有显著的变化。这些变化引入了TypeScript，并修改了TodoContext和TodoProvider组件：

1.  这里，`TodoContextProps`指定它应该有两个属性：`todos`，表示待办事项的字符串数组，以及`addTodo`，一个接受字符串参数并返回void（无返回值）的函数。
2.  现在使用`createContext`创建了`TodoContext`，并用`TodoContextProps | undefined`类型进行初始化。这意味着context值可以是`TodoContextProps`类型或未定义。
3.  `TodoProvider`组件现在使用`useState`钩子初始化`todos`状态。它使用一个字符串数组来跟踪待办事项。
4.  引入了一个新函数`addTodo`，它接受一个字符串`text`作为参数。它使用`setTodos`函数通过将新的待办事项追加到现有数组来更新`todos`状态。
5.  创建context的值：`value`变量被赋值为一个`TodoContextProps`类型的对象，包含`todos`数组和`addTodo`函数。
6.  提供context值：`<TodoContext.Provider>`组件包裹`props.children`，并将value属性设置为`value`，它向子组件提供`todos`和`addTodo`。

总而言之，你正在使用TypeScript为TodoContextProps定义一个接口，使用useState和自定义函数添加新的待办事项，并向子组件提供更新后的context值。

### 如何创建一个自定义钩子来使用React Context

为了使用context提供的值，你需要创建一个自定义钩子来使用这个context，并将其值提供给子组件。打开`context/useTodo.ts`并添加以下代码：

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

让我们逐步分解：

1.  你从'react'模块导入`useContext`钩子，并从`./TodoContext`文件导入`TodoContext`。
2.  在钩子内部，调用`useContext`钩子并以`TodoContext`作为参数。这样连接到`TodoContext`并检索其当前值。
3.  如果`context`值是`undefined`，这意味着`useTodo`钩子正在`TodoProvider`的范围之外使用。在这种情况下，会抛出一个错误消息，内容为'`useTodo`必须在`TodoProvider`内部使用'。

总体来说，这段代码允许你创建一个名为`useTodo`的自定义钩子，可以在你的组件中使用。

通过调用这个钩子，你可以访问`TodoContext`并检索其值，其中包括在`TodoProvider`中定义的与待办事项相关的数据和函数。

它还确保`useTodo`钩子只在`TodoProvider`的范围内使用，以维护正确的使用方式并防止任何错误。

接下来，你需要用TodoProvider组件包裹整个应用程序。这确保了通过使用`useTodo`钩子，context值可以被其子组件访问：

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

`<TodoProvider>`包裹了整个应用程序，并提供了管理待办事项相关数据所需的context。

现在，让我们在`<AddTodo />`组件中集成`useTodo`钩子，以通过context高效管理待办事项。此外，让我们实现toast通知，以根据用户交互提供反馈：

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

1.  行`const { addTodo } = useTodo()`使用`useTodo`钩子从待办事项context中检索`addTodo`函数。这使我们能够添加新的待办事项。
2.  行`toast.success('Todo added successfully!')`显示一个成功的toast通知，指示待办事项已成功添加。
3.  行`toast.error('Todo field cannot be empty!')`在尝试提交时如果待办事项字段为空，则显示一个错误的toast通知。
4.  如果`input`值（去除空格）不为空，则调用`addTodo`函数并传入输入值，清除`input`状态，并显示成功的toast通知。
5.  如果`input`值为空，则显示一个错误的toast通知，指出待办事项字段不能为空。

这段代码集成了`useTodo`钩子，通过context管理待办事项。它捕获用户输入，添加待办事项，并显示toast通知，以提供关于添加待办事项成功或失败的反馈。

现在，让我们也修改`<TodoList />`组件，并在屏幕上显示待办事项。打开`components/TodoList.tsx`并添加以下代码：

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

1.  导入语句`import { useTodo } from '../context/useTodo'`从自定义context中导入`useTodo`钩子，使我们能够访问`todos`数组。
2.  如果`todos`数组为空（`!todos.length`），意味着没有待办事项，将显示一条消息表明没有要做的事情。
3.  如果`todos`数组中有待办事项，则渲染一个无序列表（`<ul>`）。
4.  在`<ul>`内部，使用`map`函数遍历`todos`数组。对于每个待办事项，创建一个带有唯一`key`的列表项（`<li>`），`key`设置为待办事项的值。
5.  然后将待办事项本身显示在列表项中。

这个组件使用`useTodo`钩子从context中检索`todos`数组。如果没有待办事项，它会显示一条消息。如果有待办事项，它会渲染一个无序列表，并为每个待办事项填充列表项。

![添加待办事项和显示toast通知](https://www.freecodecamp.org/news/content/images/2023/07/ezgif-5-ff3ed7ffc5.gif)

添加待办事项和显示toast通知

到目前为止做得很好！你现在有了一个基本的待办事项应用程序。是时候增加一些令人兴奋的功能，进一步提升你的应用了。

## 如何为待办事项定义一个接口

在这一部分中，你将基于上一节中的现有context进行构建，并增强它，以创建具有额外功能的更复杂的待办事项。

每个待办事项由三个属性组成：

-   **id：** 一个独特的字符串，作为该项的标识符
-   **text：** 一个简单的字符串，代表待办事项的内容
-   **status：** 待办事项的状态，可以是“未完成”或“已完成”

基于上述信息，适当的待办事项接口如下所示：

```ts
interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}
```

为了将Todo接口集成到你的context中，我们将进行必要的更新和修改，以有效地利用这个增强的context：

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

以下是context中变更的解释：

**Todo接口：**

-   Todo接口定义了待办事项的结构。
-   它包括三个属性：id（一个字符串），text（一个代表待办事项内容的字符串），以及status（一个可以取值为'undone'或'completed'的字符串）。
-   这个接口有助于确保待办事项具有一致的属性和数据类型。

**useState<Todo[]>：**

-   useState钩子用于在函数组件中管理状态。
-   在这种情况下，`useState<Todo[]>`初始化了一个名为"todos"的状态变量作为Todo项目的数组。
-   "todos"状态变量将用于存储和更新待办事项。

**`addTodo`函数和`newTodo`变量：**

-   addTodo函数是一个回调函数，它接受一个文本参数（字符串）。
-   在addTodo函数内部，声明了一个名为newTodo的变量作为Todo对象。
-   newTodo对象使用nanoid()函数生成的唯一id、提供的文本以及初始状态'undone'创建。
-   调用useState中的setTodos函数来更新todos状态，通过将newTodo对象添加到现有的todos数组中。
-   这允许向列表中添加新的待办事项。

现在，你需要更新`<TodoList />`组件以反映你对context所做的更改：

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

通过这个更新的代码，现在每个渲染的待办事项的id被用作每个待办事项的key属性，待办事项的text被用来显示每个待办事项的内容。

现在，让我们创建一个自定义的React组件来适当地显示每个待办事项，并在我们的应用中引入诸如编辑、删除和更新单个待办事项等额外功能。

## 如何构建一个自定义的React组件来显示待办事项

在这一部分中，你将创建一个自定义的React组件，用于处理每个单独待办事项的显示和管理。

打开`components/TodoItem.tsx`并添加以下代码：

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

`<TodoItem />`负责渲染单个待办事项：

-   该组件接受一个名为`props`的属性，这是一个包含名为`todo`的属性的对象。`todo`属性是`Todo`类型，代表单个待办事项。
-   在组件内部，使用解构赋值从`props`对象中提取`todo`属性。
-   使用Framer Motion的`motion.li`组件提供动画效果。它代表一个列表项（`<li>`），并支持布局动画。
-   `className`属性使用`cn`实用函数（来自`classnames`库）根据`todo.status`条件性地应用CSS类。如果待办事项已完成，它会添加半透明背景和文本颜色的类。
-   在列表项内部，使用`motion.span`组件包裹待办事项文本。它同样支持布局动画。
-   span元素的样式根据`todo.status`设置。如果待办事项已完成，会应用删除线文本装饰。
-   `{todo.text}`表达式渲染待办事项的文本内容。

TodoItem接收一个待办事项作为属性，并根据待办事项的状态，使用可选动画、样式和条件CSS类进行渲染。

现在让我们修改`<TodoList />`组件，以使用`<TodoItem />`组件：

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

以下是`<TodoList />`中所做更改的解释：

**导入额外的依赖：**

-   现在的代码从`framer-motion`库中导入了`motion`组件。这允许在组件中实现动画效果。

**渲染TodoItem组件：**

-   之前，待办事项被作为简单的列表项（`<li>`）直接在TodoList组件中渲染。
-   在更新的版本中，导入（`import { TodoItem } from './TodoItem'`）并使用TodoItem组件来渲染每个待办事项。
-   TodoItem组件传递了一个代表单个待办事项的`todo`属性。
-   同时为每个TodoItem组件提供了`key`属性，确保每个渲染的待办事项具有唯一标识符。

**使用motion组件包裹列表：**

-   `<ul>`元素现在被`<motion.ul>`组件包裹，以使用`framer-motion`库启用动画效果。
-   这允许在添加、移除或更新待办事项时实现动态和平滑的过渡。

总的来说，更新后的TodoList组件使用`framer-motion`的`motion`组件引入了动画，并用`<TodoItem />`组件替换了直接渲染待办事项的方式。

现在你已经成功创建了`<TodoItem />`组件，让我们将重点转向实现必要的功能，以启用使用Todo Context和TodoItem组件来编辑、删除和更新每个待办事项。

## 如何实现功能：编辑、删除和更新待办事项

在这一部分中，你将通过增加额外功能来增强你的待办事项应用。

首先，你将在待办事项context中实现处理这些功能所需的逻辑。然后，你将向`<TodoItem />`组件添加相应的JSX，以引入交互性，并使用户能够与应用互动。

正如你所记得的，你使用context处理了向应用添加待办事项，你将采用类似的方法来处理编辑、删除和更新功能。

这些操作的逻辑将被封装在待办事项context中，将使用useTodo钩子在`<TodoItem />`组件中利用这些逻辑。你还将把待办事项存储在浏览器的本地存储中，以确保用户离开应用时不会丢失他们的进度。

打开`context/TodoContext.tsx`并添加以下代码：

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

以下是正在发生的事情的解释：

**定义TodoContextProps：**

-   TodoContextProps是一个接口，指定了TodoContext的值的结构。
-   它包括诸如todos（一个Todo项的数组）之类的属性，以及添加、删除、编辑和更新待办事项状态的函数。

**实现`addTodo`：**

-   addTodo函数接受一个文本参数，使用nanoid生成一个唯一ID，并用提供的文本和初始状态'undone'创建一个新的待办事项对象。
-   它使用useLocalStorage提供的setTodos函数，通过将newTodo追加到现有的todos数组来更新todos状态。

**实现`deleteTodo`：**

-   deleteTodo函数接受一个id参数，并使用setTodos函数从todos状态中过滤掉具有匹配id的待办事项。

**实现`editTodo`：**

-   editTodo函数接受一个id和文本参数。
-   它使用setTodos函数遍历todos状态，并更新具有匹配id的待办事项的文本。

**实现`updateTodoStatus`：**

-   updateTodoStatus函数接受一个id参数。
-   它使用setTodos函数遍历todos状态，并在'undone'和'completed'之间切换具有匹配id的待办事项的状态。

**提供值并渲染子组件：**

-   使用todos数组和定义的函数创建了一个value对象。
-   它作为value属性传递给TodoContext.Provider组件，以向其嵌套的子组件提供定义的值。

总而言之，`TodoContext`和`TodoProvider`处理与管理待办事项相关的状态和逻辑。它们通过TodoContext提供必要的函数和数据供子组件使用，如`<TodoItem />`，以执行添加、删除、编辑和更新待办事项等操作。

现在，让我们加入相应的JSX，使用户能够与你刚刚实现的逻辑进行交互。打开`components/TodoItem.tsx`并添加以下代码：

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

让我们关注`handleEdit`、`handleUpdate`、`handleDelete`和`handleStatusUpdate`函数及其工作方式：

**`handleEdit`函数：**

当用户点击“编辑”按钮时调用此函数。它接受`todoId`（待办事项的唯一标识符）和`todoText`（待办事项当前文本）作为参数。

它将`editingTodoId`状态设置为`todoId`，将`editingTodoText`状态设置为`todoText`。此外，如果`editInputRef`（输入字段的引用）存在，它将使用`focus`方法将焦点设置在输入字段上。

**`handleUpdate`函数：**

当用户在编辑待办事项后点击“更新”按钮时调用此函数。它接受`todoId`作为参数。

它首先检查修剪后的`editingTodoText`是否不为空。如果不为空，它将调用`useTodo`钩子中的`editTodo`函数，传递`todoId`和`editingTodoText`作为参数。然后将`editingTodoId`和`editingTodoText`状态分别重置为null和空字符串。

最后，如果更新成功则显示成功的toast消息，如果待办事项字段为空则显示错误的toast消息。

**`handleDelete`函数：**

当用户点击“删除”按钮时调用此函数。它接受`todoId`作为参数。它将调用`useTodo`钩子中的`deleteTodo`函数，传递`todoId`作为参数。然后显示一条成功的toast消息，指示待办事项已成功删除。

**`handleStatusUpdate`函数：**

当用户点击“标记完成”或“标记未完成”按钮时调用此函数。它接受`todoId`作为参数。

它将调用`useTodo`钩子中的`updateTodoStatus`函数，传递`todoId`作为参数。然后显示一条成功的toast消息，指示待办事项的状态已成功更新。

这些函数处理与在TodoItem组件中编辑、更新、删除和更新待办事项状态相关的交互和操作。

JSX显示待办事项的文本，并提供编辑、删除和更新其状态的选项。待办事项的外观和行为由`todo`对象的值和组件的状态变量决定。

如果待办事项正在被编辑，则显示输入字段和“更新”按钮。否则，将显示待办事项的文本，并提供标记为完成或未完成、编辑和删除的按钮。

`handleEdit`、`handleUpdate`、`handleDelete`和`handleStatusUpdate`函数用作这些按钮的事件处理程序，使用户能够与待办事项进行交互和修改。

![Final todo app, a user adds an item, then edit and delete the todo item in order to display the app's functionality](https://www.freecodecamp.org/news/content/images/2023/07/ezgif-1-f7b9438717.gif)

最终结果

恭喜！你已经成功创建了一个具有基本功能的漂亮的待办事项应用。

通过本文所获得的知识，你现在已经准备好根据你的特定需求和偏好进一步增强和定制应用程序。

## 结论

在整篇文章中，我们介绍了使用TypeScript进行React开发的基础知识，并学习了如何创建一个功能齐全的待办事项应用。

我们探索了状态管理、context和钩子等概念，使你能够添加、编辑、删除和更新待办事项。

有了这些知识，你现在已经准备好将这些原则应用到你的未来项目中，并使用React构建类型安全的应用程序。继续探索和实验新功能，将你的应用提升到一个新的水平。

你可以在[Twitter](https://twitter.com/Yazdun)上关注我，我会在那里分享更多关于Web开发的有用提示。编码愉快！
