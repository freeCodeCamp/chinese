> * 原文地址：[How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB 如何用 React，TypeScript，NodeJS 和 MongoDB 搭建待办事项 App](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/)
> * 原文作者：Ibrahima Ndaw
> * 译者：cyan
> * 校对者：

![How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/cover-1.png)

在本教程中，我们将在两端(服务器和客户端)使用 TypeScript、React、NodeJS、Express 和 MongoDB 从头开始构建一个 Todo 应用程序。

那么，让我们从设计 API 开始。


-   [用 NodeJS, Express, MongoDB 和 TypeScript 设计 API][1]
-   [构建][2]
-   [创建 Todo 类型][3]
-   [创建 Todo 模型][4]
-   [创建 API 控制器][5]
-   [获取、新增、更新和删除 Todo][6]
-   [创建 API 路由][7]
-   [创建服务器][8]
-   [用 React 和 TypeScript 创建客户端][9]
-   [构建][10]
-   [创建 Todo 类型][11]
-   [从 API 获取数据][12]
-   [创建组件][13]
-   [添加 Todo 表单][14]
-   [展示 Todo][15]
-   [获取和展示数据][16]
-   [资源][17]

_就让我们一探究竟吧。_

## 用NodeJS, Express, MongoDB 和 TypeScript 设计 API

### 构建

如果你是新手，你可以从 [TypeScript的实用指南][18]，或者从 [如何用Node JS、Express和MongoDB中从头开始构建API][19] 开始，从而充分体验本教程。否则，我们可以直接开始。

为了创建一个新的 NodeJS 应用程序，你需要在终端上运行这个命令:

```shell
  yarn init

```

它会询问几个问题，然后初始化应用程序。你可以通过向命令中添加 `-y` 标志来跳过它。

然后，按照以下目录构建项目:

```
├── dist
├── node_modules
├── src
   ├── app.ts
   ├── controllers
   |  └── todos
   |     └── index.ts
   ├── models
   |  └── todo.ts
   ├── routes
   |  └── index.ts
   └── types
      └── todo.ts
├── nodemon.json
├── package.json
├── tsconfig.json

```

如你所见，这个文件结构相对简单。代码编译成纯 JavaScript 后，dist 目录将用作输出文件夹。

我们还有一个 `app.ts`，它是服务器的入口。控制器、类型和路由也在它们各自以它们命名的的文件夹中。

现在，我们需要配置 `tsconfig.json`，使编译器运行我们的首选项。

-   tsconfig.json

```js
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist/js",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["src/types/*.ts", "node_modules", ".vscode"]
}

```

这里强调四个主要属性:

`outDir`: 告诉编译器把编译好的代码放进 `dist/js` 文件夹。

`rootDir`: 告诉 TypeScript 编译 src 文件夹中的每个 .ts 文件。

`include`: 告诉编译器包含 src 目录和子目录中的文件。

`exclude`: 在编译时会排除数组中的文件或文件夹。

现在我们安装依赖项，使项目可以使用 TypeScript。因为默认情况下，这个应用程序会使用 JavaScript。

在 NodeJS 应用程序中有两种使用 TypeScript 的方法。要么在项目中本地安装使用，要么在电脑中全局安装使用。基于个人喜好，我会选择后者，但如果你想，你也可以坚持使用本地安装使用的方式。

现在，让我们在终端上执行以下命令来安装 TypeScript。

```shell
  yarn add typescript -g

```

这个 `g` 标志允许全局安装 TypeScript，这样它就能在计算机任何地方使用。

接下来，为了使用 Express 和 MongoDB 让我们安装一些依赖项。

```shell
  yarn add express cors mongoose

```

我们还需要安装它们的类型作为开发依赖项，帮助 TypeScript 编译器理解这些包。

```shell
  yarn add -D @types/node @types/express @types/mongoose @types/cors

```

现在，TypeScript 不会再对你提示错误——它将使用这些类型来定义我们刚刚安装的库。

我们还需要安装其他依赖项，以便能够编译 TypeScript 代码并同时启动服务器。

```shell
  yarn add -D concurrently nodemon

```

有了这些，我们现在就可以更新 `package.json` 的 scripts 来启动服务器。

-   package.json

```js
  "scripts": {
    "build": "tsc",
    "start": "concurrently \"tsc -w\" \"nodemon dist/js/app.js\""
  }

```

`concurrently`  帮助编译 TypeScript 代码，持续观察变化，同时启动服务器。也就是说，我们现在可以启动服务器了——但是，我们还没有创建一些有意义的东西。所以，让我们在下一节中解决这个问题。

### 创建 Todo 类型

-   types/todo.ts

```ts
import { Document } from "mongoose"
export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
}

```

这里，我们有了继承 `mongoose` 提供的 `Document` 类型的 Todo 接口。稍后我们将使用它与 MongoDB 交互。也就是说，我们现在可以定义 Todo 模型。

### 创建 Todo 模型

-   models/todo.ts

```ts
import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"
const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
 description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)
export default model<ITodo>("Todo", todoSchema)
```

如你所见，我们首先导入 `ITodo ` 接口和 一些 `mongoose` 导出的模块，后者是帮助定义 Todo schema 和在导出前把 ITodo 作为类型参数传入 `model` 。

这样，我们现在就可以在其他文件中使用 Todo 模型来与数据库交互。

### 创建 API 构造器

#### 获取、新增、更新和删除 Todos

-   controllers/todos/index.ts

```ts
import { Response, Request } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "../../models/todo"

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}
```

这里，我们首先需要从 `express` 导入一些类型，因为我想显式指明类型。如果你想，你可以让 TypeScript 帮你推断。

接下来，我们使用 getTodos() 函数来获取数据。它接收 `req` 和 `res` 参数并返回 promise。

在前面创建的 Todo 模型的帮助下，我们现在可以从 MongoDB 获取数据并返回 Todo 数组。

-   controllers/todos/index.ts

```ts
const addTodo = async (req: Request, res: Response): Promise<void> => {
   try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos })
  } catch (error) {
    throw error
  }
}
```

如你所见，`addTodo()` 函数接收包含用户输入数据的 body 对象。

接下来，我使用类型转换来避免拼写错误，并限制 `body` 变量与 `ITodo` 类型匹配，然后基于该模型创建一个新的 Todo。

有了这些，我们现在可以在 DB 中保存 Todo 并返回新增的 Todo 和更新后的 todos 数组。

-   controllers/todos/index.ts

```ts
const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

```

为了实现更新 todo, 我们需要拿到 id 和从 `req` 对象中获取 body，然后把他们传入 `findByIdAndUpdate()`，这个函数将会在数据库中找到 Todo 并且更新它。

-   controllers/todos/index.ts

```ts
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
```

`deleteTodo()` 函数允许你从数据库中删除 Todo。在这里，我们从 req 中拿到 id，并把它作为参数传递给 `findByIdAndRemove()`，来获取到对应的 Todo 并从 DB 中删除它。

接下来，导出这些函数以便我们在其他文件中使用它们。也就是说，我们现在可以为 API 创建一些路由，并使用这些方法来处理请求。

### 创建 API 路由

-   routes/index.ts

```ts
import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"
const router: Router = Router()
router.get("/todos", getTodos)
router.post("/add-todo", addTodo)
router.put("/edit-todo/:id", updateTodo)
router.delete("/delete-todo/:id", deleteTodo)

```

如你所见，我们创建四个路由对应从数据库中获取、新增、更新和删除 todo。因为我们已经创建了函数，所以我们唯一要做的就是导入这些方法并将它们作为参数传递。

到目前为止，我们已经谈了很多。但是我们仍然没有启动服务器。所以，让我们在下一节中解决这个问题。

### 创建服务器

在创建服务器之前，我们需要在 `nodemon.json` 加一些环境变量来保存 MongoDB 的凭据。

-   nodemon.json

```js
{
    "env": {
        "MONGO_USER": "your-username",
        "MONGO_PASSWORD": "your-password",
        "MONGO_DB": "your-db-name"
    }
}

```

你可以在 [MongoDB Atlas][20]，通过创一个新集群来得到凭据。

-   app.ts

```ts
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

```

这里，我们首先从导入 `express` 库开始，这使用我们能调用 `use()` 方法，这个方法将帮助处理 Todo 路由。

然后，我们用 `mongoose` 包，通过读取 `nodemon.json` 带凭证的 url 去连接 MongoDB。

就是说，现在如果我们能成功连接 MongoDB，服务器就会启动。否则，会抛出错误。

我们现在已经通过 Node、Express、TypeScript 和 MongoDB 完成 api 的构建。现在让我们开始用 React 和 TypeScript 构建客户端。

![excited](https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif)

## 用 React 和 TypeScript 创建客户端

### 构建

为了创建一个新的 React 应用，我将会使用 create-react-app ——你可以用其他你想用的方法。

所以，在终端运行以下代码：

```shell
  npx create-react-app my-app --template typescript

```

然后，为了能获取远程数据安装 Axios 库。

```shell
  yarn add axios

```
安装完成后，按照以下目录构建项目：

```
├── node_modules
├── public
├── src
|  ├── API.ts
|  ├── App.test.tsx
|  ├── App.tsx
|  ├── components
|  |  ├── AddTodo.tsx
|  |  └── TodoItem.tsx
|  ├── index.css
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  ├── setupTests.ts
|  └── type.d.ts
├── tsconfig.json
├── package.json
└── yarn.lock

```

这样，我们有一个相对简单的文件结构。最值得注意的是  `src/type.d.ts`  被用来存放类型。我几乎在每个文件中都使用了它们，所以我添加了扩展 `.d.ts` ，使类型全局可用。现在我们不再需要导入它们。

### 创建 Todo 类型

-   src/type.d.ts

```ts
interface ITodo {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}
interface TodoProps {
  todo: ITodo
}

```

这里， `ITodo`  接口需要跟 API 返回的数据类型一样。我们在这里没有  `mongoose` , 所以我们需要加一些额外的属性来匹配 API 定义的数据类型。

然后，我们用相同的的接口定义 `TodoProps` ，组件会接受它并渲染数据。

现在我们已经定义了类型——现在让我们开始从 API 获取数据。

### 从API获取数据

-   src/API.ts

```ts
import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

```

如你所见，我们需要导入 `axios`，通过 api 来请求数据。然后，我们用  `getTodos()`  函数从服务端获取数据。 它将返回 `AxiosResponse` 为类型的 promise， 保存获取到的 `ApiDataType` 类型的 Todos。

-   src/API.ts

```ts
export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    )
    return saveTodo
  } catch (error) {
    throw new Error(error)
  }
}

```

这个函数接受用户输入的数据作为参数并返回 promise。这里，我们需要去掉 `_id` 属性因为 MongoDB 会自动生成。

-   src/API.ts

```ts
export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error)
  }
}

```

为了实现更新 Todo，我们必须传入更新后的数据和对象 id。这里，我们需要更改 Todo 的 `状态` ，那么在发送到服务器之前我们只需要选择所需的属性即可。

-   src/API.ts

```ts
export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    )
    return deletedTodo
  } catch (error) {
    throw new Error(error)
  }
}

```

这里，我们也有一个函数接受 `_id` 属性作为参数并返回 promise。

有了这些，我们现在可以转到 components 文件夹并向其文件中添加一些有意义的代码。

### 创建组件

#### 增加 Todo 表单

-   components/AddTodo.tsx

```jsx
import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo

```

如你所见，这里有一个 React 类型的函数组件。FC (FC 代表函数组件)。它接收 `saveTodo()` 方法为 props，该方法允许我们将数据保存到数据库。

然后，我们创建 `formData` state，它需要匹配 ITodo 类型来满足编译器的要求。这就是我们将它传递给 useState hook 的原因。我们还需要添加一个替代类型({})，因为初始状态是个空对象。

有了这些，我们现在可以继续下一步，展示获取的数据。

### **展示 Todo**

-   components/TodoItem.tsx

```jsx
import React from "react"
type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}
const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? line-through : ""
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? hide-button : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

```

这里，我们需要继承 `TodoProps`  类型并加入 `updateTodo`  和  `deleteTodo`  函数，作为 props 传递给组件。

现在，当传入 Todo 对象，我们将能够显示它并更新或删除 Todo。

太棒了!现在我们可以到 `App.tsx` 文件并把最后一块拼图放进去。

### 获取和展示数据

-   App.tsx

```jsx
import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

```

这里，我们首先导入组件和 `API.ts` 导出的函数。然后，我们传递 `ITodo`  类型的数组给 `useState` 并且把它初始化为空数组。

`getTodos()` 方法会返回 promise —— 因此，我们可以调用 then 函数并用获取到的数据更新 state，或者在发生任何错误时抛出一个错误。

有了这些，我们现在可以在组件组件成功挂载之后，调用 `fetchTodos()` 函数。

-   App.tsx

```jsx
const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
  e.preventDefault()
  addTodo(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error("Error! Todo not saved")
      }
      setTodos(data.todos)
    })
    .catch(err => console.log(err))
}

```

当发送表单时，我们用 `addTodo()` 向服务端发送请求，如果 Todo 被成功保存，我们将更新数据，否则将会抛出错误。

-   App.tsx

```jsx
const handleUpdateTodo = (todo: ITodo): void => {
  updateTodo(todo)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error! Todo not updated")
      }
      setTodos(data.todos)
    })
    .catch(err => console.log(err))
}

```

更新和删除 Todo 函数是很类似的。他们都接受参数，发送请求并得到响应。然后他们会检查请求是否成功并作相应处理。

-   App.tsx

```jsx
  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  )
}

```

这里我们遍历  `todos`  数组并将所需的数据传递给 `TodoItem`。

现在，如果你打开服务器端应用程序的文件夹(并在终端中执行以下命令)：

```shell
yarn start

```

在客户端也如此:

```shell
yarn start

```

你应该能看到我们的Todo应用程序会按预期工作。

![app](https://drive.google.com/uc?id=1bmmN-yfXsisixCgSNDnWLNYKaulFscY1)

太棒了!最后，我们使用 TypeScript、React、NodeJs、Express 和 MongoDB 完成了一个 Todo 应用程序的构建。

你可以在这里找到 [源代码][22]。

你可以在我的 [博客][23] 上找到类似的内容，或者在 [Twitter][24] 上关注我以获得相关的信息。

谢谢你的阅读。

## Resources

[React TypeScript Cheatsheet][25]

[Advanced TypeScript Types cheatsheet (with examples)][26]

[TypeScript Cheatsheets][27]

[1]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#api-with-nodejs-express-mongodb-and-typescript
[2]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#setting-up
[3]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-todo-type
[4]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-todo-model
[5]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-api-controllers
[6]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#get-add-update-and-delete-todos
[7]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-api-routes
[8]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-server
[9]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#client-side-with-react-and-typescript
[10]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#setting-up
[11]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-todo-type-1
[12]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#fetch-data-from-the-api
[13]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-the-components
[14]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#add-todo-form
[15]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#display-a-todo
[16]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#fetch-and-display-data
[17]: https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#resources
[18]: https://www.ibrahima-ndaw.com/blog/a-practical-guide-to-typescript/
[19]: https://www.ibrahima-ndaw.com/blog/graphql-api-express-mongodb/
[20]: https://www.mongodb.com/cloud/atlas
[21]: http://localhost:4000"
[22]: https://github.com/ibrahima92/fullstack-typescript-mern-todo
[23]: https://www.ibrahima-ndaw.com/
[24]: https://twitter.com/ibrahima92_
[25]: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
[26]: https://www.ibrahima-ndaw.com/blog/advanced-typescript-cheat-sheet/
[27]: https://github.com/typescript-cheatsheets
