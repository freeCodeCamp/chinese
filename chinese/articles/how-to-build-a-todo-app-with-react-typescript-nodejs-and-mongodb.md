> * 原文地址：[How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB 如何用 React，TypeScript，NodeJS 和 MongoDB 搭建待办事项 App](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/)
> * 原文作者：Ibrahima Ndaw
> * 译者：cyan
> * 校对者：

![How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/cover-1.png)

在本教程中，我们将在两端(服务器和客户端)使用TypeScript从头开始用React、NodeJS、Express和MongoDB构建一个Todo应用程序。

那么，让我们从规划API开始。


-   [API 与 NodeJS, Express, MongoDB 和 TypeScript][1]
-   [构建][2]
-   [创建 Todo 类型][3]
-   [创建 Todo 模型][4]
-   [创建API控制器][5]
-   [获取、新增、更新和删除 Todo][6]
-   [创建API路由][7]
-   [创建服务器][8]
-   [用 React 和 TypeScript 创建客户端][9]
-   [构建][10]
-   [创建 Todo 类型][11]
-   [从 AP I获取数据][12]
-   [创建组件][13]
-   [添加 Todo 表单][14]
-   [显示 Todo][15]
-   [获取和显示数据][16]
-   [资源][17]

_就让我们一探究竟吧。_

## API 与 NodeJS, Express, MongoDB 和 TypeScript

### Getting set up

如果你是新手，你可以从开始[TypeScript的实用指南][18]，或者从[如何用Node JS、Express和MongoDB中从头开始构建API][19]，来充分使用本教程。否则，我们直接开始吧。

要创建一个新的NodeJS应用程序，您需要在终端上运行这个命令:

```shell
  yarn init

```

它会询问几个问题，然后初始化应用程序。 你可以通过向命令中添加`-y`来跳过它。

接下来，按照以下目录构建项目:

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

如你所见，这个文件结构相对简单。代码编译成纯JavaScript后，dist目录将用作输出文件夹。

我们还有一个`app.ts`，它是服务器的入口。控制器、类型和路由也在它们各自的文件夹名中。

现在，我们需要配置`tsconfig.json`，使编译器运行我们的首选项。

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

`rootDir`: 通知TypeScript编译src文件夹中的每个.ts文件。

`include`: 告诉编译器包含src目录和子目录中的文件。

`exclude`: 在编译时会排除数组中的文件或文件夹。

现在我们可以安装依赖项，使项目可以使用TypeScript。因为默认情况下，这个应用程序会使用JavaScript。

在NodeJS应用程序中有两种使用TypeScript的方法。要么在项目中本地安装使用，要么在电脑中全局安装使用。基于个人喜好，我会选择后者，但如果你想，你也可以坚持使用本地安装的的方式。

现在，让我们在终端上执行以下命令来安装TypeScript。

```shell
  yarn add typescript -g

```

这个`g`标志允许全局安装TypeScript，这样它就能在计算机任何地方使用。

接下来，为了使用Express和MongoDB让我们添加一些依赖项。

```shell
  yarn add express cors mongoose

```

我们还需要安装它们的类型作为开发依赖项，帮助TypeScript编译器理解这些包。

```shell
  yarn add -D @types/node @types/express @types/mongoose @types/cors

```

现在，TypeScript不会再对你错误提示——它将使用这些类型来定义我们刚刚安装的库。

我们还需要添加其他依赖项，以便能够编译TypeScript代码并同时启动服务器。

```shell
  yarn add -D concurrently nodemon

```

有了这些，我们现在就可以更新 `package.json`的scripts来启动服务器。

-   package.json

```js
  "scripts": {
    "build": "tsc",
    "start": "concurrently \"tsc -w\" \"nodemon dist/js/app.js\""
  }

```

`concurrently`  帮助编译TypeScript代码，持续观察变化，同时启动服务器。也就是说，我们现在可以启动服务器了——但是，我们还没有创建一些有意义的东西。所以，让我们在下一节中解决这个问题。

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

这里，我们有了继承`mongoose`提供的`Document`类型的Todo接口。稍后我们将使用它与MongoDB交互。也就是说，我们现在可以定义Todo模型。

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

正如你在这里看到的，我们首先导入`ITodo `接口和 一些 `mongoose`里的模块，后者是帮助定义 Todo schema 和在导出前把ITodo作为类型参数传入`model`。

这样，我们现在就可以在其他文件中使用Todo模型来与数据库交互。

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

这里，我们首先需要从`express`导入一些类型，因为我想显式地指明类型。如果你想，你可以让TypeScript帮你推断。

接下来，我们使用函数getTodos()来获取数据。它接收一个`req`和`res`参数并返回promise.

在前面创建的Todo模型的帮助下，我们现在可以从MongoDB获取数据并返回Todo数组。

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

如你所见，函数`addTodo()`接收用户输入数据的body对象数据。

接下来，我使用类型转换来避免拼写错误，并限制`body`变量与`ITodo`类型匹配，然后基于该模型创建一个新的Todo。

有了这些，我们现在可以在DB中保存Todo并返回新增的Todo和更新的todos数组。

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

为了实现更新todo, 我们需要拿到id和从`req`对象中获取body，然后把他们传进 `findByIdAndUpdate()`. 这个函数将会在数据库中找到Todo并且更新它。

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

函数`deleteTodo()`允许你从数据库中删除Todo。在这里，我们从req中拿到id，并把它作为参数传递给findByIdAndRemove()，来获取到对应的Todo并从DB中删除它。

接下来，导出这些函数以便我们在其他文件中使用它们。也就是说，我们现在可以为API创建一些路由，并使用这些方法来处理请求。

### Create API routes

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

As you can see here, we have four routes to get, add, update, and delete todos from the database. And since we already created the functions, the only thing we have to do is import the methods and pass them as parameters to handle the requests.

So far, we have covered a lot. But we still don't have a server to start. So, let's fix that in the next section.

### Create a Server

Before creating the server, we need to first add some environment variables that will hold the MongoDB credentials in the  `nodemon.json`  file.

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

You can get the credentials by creating a new cluster on  [MongoDB Atlas][20].

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
const uri: string = mongodb+srv://</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>process<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>env<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token constant" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 0, 85);">MONGO_USER</span><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">:</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>process<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>env<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token constant" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 0, 85);">MONGO_PASSWORD</span><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">@clustertodo.raz9g.mongodb.net/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>process<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>env<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token constant" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 0, 85);">MONGO_DB</span><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">?retryWrites=true&amp;w=majority
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

```

Here, we start by importing the  `express`  library that allows us to access the  `use()`  method that helps handle the Todos routes.

Next, we use the  `mongoose`  package to connect to MongoDB by appending to the URL the credentials held on the  `nodemon.json`  file.

That said, now if we connect successfully to MongoDB, the server will start. If appropriate, an error will be thrown.

We're now done building the API with Node, Express, TypeScript, and MongoDB. Let's now start building the client-side app with React and TypeScript.

![excited](https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif)

## Client-side with React and TypeScript

### Setting up

To create a new React app, I will go with create-react-app - you can use other methods as well if you want.

So, let's run in the terminal the following command:

```shell
  npx create-react-app my-app --template typescript

```

Next, install the Axios library to be able to fetch remote data.

```shell
  yarn add axios

```

Once the installation completed, let's structure our project as follows:

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

Here, we have a relatively simple file structure. The main thing to notice is that  `src/type.d.ts`  will hold the types. And since I will use them on almost every file, I added the extension  `.d.ts`  to make the types globally available. And now we don't need to import them anymore.

### Create a Todo Type

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

Here, the  `ITodo`  interface needs to mirror the shape of data from the API. And since we don't have  `mongoose`  here, we need to add additional properties to match the type defined on the API.

Next, we use that same interface for the  `TodoProps`  which is the type annotation for the props that will be received by the component responsible for rendering the data.

We have now defined our types - let's now start fetching data from the API.

### Fetch data from the API

-   src/API.ts

```ts
import axios, { AxiosResponse } from "axios"
const baseUrl: string = "http://localhost:4000"

```

As you can see, we need to import  `axios`  to request data from the API. Next, we use the function  `getTodos()`  to get data from the server. It will return a promise of type  `AxiosResponse`  that holds the Todos fetched that need to match the type  `ApiDataType`.

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

This function receives the data entered by the user as an argument and returns a promise. Here, we need to omit the  `_id`  property because MongoDB will create it on the fly.

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
      </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>baseUrl<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">/edit-todo/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>todo<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">,
      todoUpdate
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error)
  }
}

```

To update a Todo, we have to pass in the updated data and the  `_id`  of the object. Here, we need to change the  `status`  of the Todo, which is why I only pick the property we need before sending the request to the server.

-   src/API.ts

```ts
export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>baseUrl<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">/delete-todo/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>_id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">
    )
    return deletedTodo
  } catch (error) {
    throw new Error(error)
  }
}

```

Here, we also have a function that receives as a parameter the  `_id`  property and returns a promise.

With that in place, we can now go to the  `components`  folder and add some meaningful code to its files.

### Create the components

#### Add Todo Form

-   components/AddTodo.tsx

```js
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

As you can see, here we have a functional component of type  `React.FC`  (FC stands for functional component). It receives as a prop the method  `saveTodo()`  that allows us to save data to the DB.

Next, we have a  `formData`  state that needs to match the  `ITodo`  type to satisfy the compiler. That is why we pass it to the  `useState`  hook. We also need to add an alternative type (`{}`) because the initial state will be an empty object.

And with that, we can now move forward and display the data fetched.

### **Display a Todo**

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

Here, we need to extend the  `TodoProps`  type and append the functions  `updateTodo`  and  `deleteTodo`  to handle appropriately the props received by the component.

Now, once the Todo object passed in, we will be able to display it and add the functions needed to update or delete a Todo.

Great! We can now go to the  `App.tsx`  file and add the last piece to the puzzle.

### Fetch and Display data

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

```

Here, we first need to import the components and utility functions held on  `API.ts`. Next, we pass to  `useState`  an array of type  `ITodo`  and initialize it with an empty array.

The method  `getTodos()`  returns a promise - therefore, we can access the  `then`  function and update the state with the data fetched or throw an error if any occurs.

With that in place, we can now call the function  `fetchTodos()`  when the component is successfully mounted.

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

Once the form is submitted, we use  `addTodo()`  to send the request to the server, and then if the Todo has successfully saved, we update the data, otherwise an error will be thrown.

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

The functions to update or delete a Todo are quite similar. They both receive a parameter, send the request, and get back a response. And then, they check if the request has been successful and handle it accordingly.

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

Here, we loop through the  `todos`  array and then pass to the  `TodoItem`  the expected data.

Now, if you browse on the folder that contains the server-side app (and execute the following command in the terminal):

```shell
yarn start

```

And also on the client-side app:

```shell
yarn start

```

You should see that our Todo app works as expected.

![app](https://drive.google.com/uc?id=1bmmN-yfXsisixCgSNDnWLNYKaulFscY1)

Great! With that final touch, we have now finished building a Todo App using TypeScript, React, NodeJs, Express, and MongoDB.

You can find the  [Source Code here][22].

You can find other great content like this on  [my blog][23]  or follow me  [on Twitter][24]  to get notified.

Thanks for reading.

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
