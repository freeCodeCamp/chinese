> -  原文地址：[How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：luojiyin
> -  校对者：

![如何在 React 中使用 Axios：2021 年完全指南](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/how-to-use-axios-with-react.png)

在本指南中，你将看到如何使用Axios.js和React，并使用大量具有React hook的真实世界的例子。

你会看到为什么你应该使用Axios作为数据获取库，如何用React设置它，并使用它执行各种类型的HTTP请求。

然后，我们将触及更多的高级功能，如创建Axios实例以实现可重用性，使用async-await来简化Axios，以及如何将Axios作为一个自定义Hook。

让我们直接开始吧!

### **想要自己的副本?‬ 📄**

****[点击这里下载PDF格式的小册子](https://reedbarger.com/resources/react-axios-2021)**** (它需要5秒下载完).

它包括这里所有的基本信息，作为一个方便的PDF指南。

## 目录

-   [什么是Axios?](#what-is-axios)
-   [为什么在React中使用Axios](#why-use-axios-in-react)
-   [如何用React设置Axios](#how-to-set-up-axios-with-react)
-   [如何进行GET请求(检索数据)](#how-to-make-a-get-request)
-   [如何进行POST请求(创建数据)](#how-to-make-a-post-request)
-   [如何进行PUT请求(更新数据)](#how-to-make-a-put-request)
-   [如何提出DELETE请求(删除数据)](#how-to-make-a-delete-request)
-   [如何处理Axios的错误](#how-to-handle-errors-with-axios)
-   [如何创建一个Axios实例](#how-to-create-an-axios-instance)
-   [如何使用Axios的Async-Await语法](#how-to-use-the-async-await-syntax-with-axios)
-   [如何创建一个自定义的 `useAxios` Hook](#how-to-create-a-custom-useaxios-hook)

## What is Axios?

Axios是一个HTTP客户端库，它允许你向一个给定的端点(endpoint)发出请求。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-12-at-1.14.41-PM.png)

例如，这可能是一个外部API或你自己的后端Node.js服务器。

通过提出请求，你希望你的API能根据你提出的请求执行操作。

例如，如果你提出一个GET请求，你希望得到的数据能在你的应用程序中显示。

## Why Use Axios in React

有许多不同的库可以用来提出这些请求，那么为什么选择Axios呢？

以下 **五个理由** ,为什么你应该使用Axios作为你的客户端来进行HTTP请求:

1.  它有很好的默认值来处理JSON数据。与Fetch API等替代品不同，你通常不需要设置你的头文件。或执行繁琐的任务，如将你的请求体转换为JSON字符串
2.  Axios有与任何HTTP方法相匹配的函数名称。要执行一个GET请求，你可以使用`.get()`方法。
3.  Axios用更少的代码做更多的事情。与Fetch API不同，你只需要一个`.then()`回调来访问你请求的JSON数据。
4.  Axios有更好的错误处理。Axios为你抛出400和500范围的错误。不像Fetch API，你必须检查状态代码并自己抛出错误。
5.  Axios既可以在服务器上使用，也可以在客户端使用。如果你正在写一个Node.js应用程序，请注意Axios也可以在独立于浏览器的环境中使用。

## How to Set Up Axios with React

在React中使用Axios是一个非常简单的过程。你需要三样东西:

1.  一个现有的React项目
2.  用npm/yarn来安装Axios
3.  一个用于发出请求的API端点(endpoint)

创建一个新的React应用程序的最快捷的方法是去 [react.new](https://react.new)网站。

如果你有一个现有的React项目，你只需要用npm（或任何其他包管理器）安装Adios。

```bash
npm install axios
```

在本指南中，你将使用JSON Placeholder API来获取和改变帖子数据。

下面是你可以提出请求的所有不同路由(routes)的列表，以及每个路线的相应HTTP方法:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-10-at-12.21.28-PM.png)

下面是一个快速的例子，说明你将使用Axios和你的API端点进行的所有操作--检索、创建、更新和删除帖子:

![](https://www.freecodecamp.org/news/content/images/2021/07/axios-react.gif)

## How to Make a GET Request

要获取数据或检索数据，要提出一个GET请求。

首先，你要对单个帖子进行请求。如果你看一下端点，你将从`/posts`端点(endpoint)获得第一个帖子。

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

为了在挂载组件时执行这个请求， 你可以使用`useEffect`Hook。这涉及到导入Axios，使用`.get()`方法向你的端点(endpoint)发出GET请求， 并使用`.then()`回调获得所有的响应数据。

响应被作为一个对象返回。数据（这里是一个带有`id`,`title`和`body`属性的帖子）被放在一个叫做`post`的状态中，在组件中显示。

请注意，你总是可以从响应中的`.data`属性中找到请求的数据。

## How to Make a POST Request

要创建新的数据，要发出一个POST请求。

根据API，这需要在`/posts`端点(endpoint)上执行。如果你看一下下面的代码，你会发现点击一个按钮可以创建一个帖子。

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
```

当你点击按钮时，它会调用`createPost`函数。

为了用Axios进行POST请求，你使用`.post()`方法。作为第二个参数，你包括一个对象属性，指定你希望新的帖子是什么。

再一次，使用`.then()`回调来获取响应数据，用你请求的新帖子替换你得到的第一个帖子。

这与`.get()`方法非常相似，但你想要创建的新资源是作为API端点(endpoint)之后的第二个参数提供的。

## How to Make a PUT Request

要更新一个给定的资源，要提出一个PUT请求。

在这种情况下，你将更新第一个帖子。

为了做到这一点，你将再次创建一个按钮。但这一次，该按钮将调用一个函数来更新一个帖子:

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
```

在上面的代码中，你使用了Axios的PUT方法。和POST方法一样，你包括了你想在更新资源中的属性。

同样，使用`.then()`回调，你用返回的数据更新JSX。

## How to Make a DELETE Request

最后，要删除一个资源，使用DELETE方法

作为一个例子，我们将删除第一个帖子。

注意，你不需要第二个参数来执行这个请求。

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
```

In most cases, you do not need the data that's returned from the `.delete()` method.

But in the code above, the `.then()` callback is still used to ensure that your request is successfully resolved.

In the code above, after a post is deleted, the user is alerted that it was deleted successfully. Then, the post data is cleared out of the state by setting it to its initial value of `null`.

Also, once a post is deleted, the text "No post" is shown immediately after the alert message.

## How to Handle Errors with Axios

What about handling errors with Axios?

What if there's an error while making a request? For example, you might pass along the wrong data, make a request to the wrong endpoint, or have a network error.

To simulate an error, you'll send a request to an API endpoint that doesn't exist: `/posts/asdf`.

This request will return a `404` status code:

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`${baseURL}/asdf`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

In this case, instead of executing the `.then()` callback, Axios will throw an error and run the `.catch()` callback function.

In this function, we are taking the error data and putting it in state to alert our user about the error. So if we have an error, we will display that error message.

In this function, the error data is put in state and used to alert users about the error. So if there's an error, an error message is displayed.

When you run this code code, you'll see the text, "Error: Request failed with status code 404".

## How to Create an Axios Instance

If you look at the previous examples, you'll see that there's a `baseURL` that you use as part of the endpoint for Axios to perform these requests.

However, it gets a bit tedious to keep writing that `baseURL` for every single request. Couldn't you just have Axios remember what `baseURL` you're using, since it always involves a similar endpoint?

In fact, you can. If you create an instance with the `.create()` method, Axios will remember that `baseURL`, plus other values you might want to specify for every request, including headers:

```js
import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client.get("/1").then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    client
      .delete("/1")
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
```

The one property in the config object above is `baseURL`, to which you pass the endpoint.

The `.create()` function returns a newly created instance, which in this case is called `client`.

Then in the future, you can use all the same methods as you did before, but you don't have to include the `baseURL` as the first argument anymore. You just have to reference the specific route you want, for example, `/`, `/1`, and so on.

## How to Use the Async-Await Syntax with Axios

A big benefit to using promises in JavaScript (including React applications) is the async-await syntax.

Async-await allows you to write much cleaner code without `then` and `catch` callback functions. Plus, code with async-await looks a lot like synchronous code, and is easier to understand.

But how do you use the async-await syntax with Axios?

In the example below, posts are fetched and there's still a button to delete that post:

```js
import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
```

However in `useEffect`, there's an `async` function called `getPost`.

Making it `async` allows you to use the `await` keword to resolve the GET request and set that data in state on the next line without the `.then()` callback.

Note that the `getPost` function is called immediately after being created.

Additionally, the `deletePost` function is now `async`, which is a requirement to use the `await` keyword which resolves the promise it returns (every Axios method returns a promise to resolve).

After using the `await` keyword with the DELETE request, the user is alerted that the post was deleted, and the post is set to `null`.

As you can see, async-await cleans up the code a great deal, and you can use it with Axios very easily.

## How to Create a Custom `useAxios` Hook

Async-await is a great way to simplify your code, but you can take this a step further.

Instead of using `useEffect` to fetch data when the component mounts, you could create your own custom hook with Axios to perform the same operation as a reusable function.

While you can make this custom hook yourself, there's a very good library that gives you a custom `useAxios` hook called use-axios-client.

First, install the package:

```
npm install use-axios-client
```

To use the hook itself, import `useAxios` from use-axios-client at the top of the component.

Because you no longer need `useEffect`, you can remove the React import:

```js
import { useAxios } from "use-axios-client";

export default function App() {
  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  ) 
}
```

Now you can call `useAxios` at the top of the app component, pass in the URL you want to make a request to, and the hook returns an object with all the values you need to handle the different states: `loading`, `error` and the resolved `data`.

In the process of performing this request, the value `loading` will be true. If there's an error, you'll want to display that error state. Otherwise, if you have the returned data, you can display it in the UI.

The benefit of custom hooks like this is that it really cuts down on code and simplifies it overall.

If you're looking for even simpler data fetching with Axios, try out a custom `useAxios` hook like this one.

## What's Next?

Congratulations! You now know how to use one of the most powerful HTTP client libraries to power your React applications.

I hope you got a lot out of this guide.

[Remember that you can download this guide as a PDF cheatsheet to keep for future reference.](https://reedbarger.com/resources/react-axios-2021)

## Want Even More? Join The React Bootcamp

**[The React Bootcamp](http://bit.ly/join-react-bootcamp)** takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.

Gain the insider information **100s of developers** have already used to become a React pro, find their dream job, and take control of their future:

[![The React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](http://bit.ly/join-react-bootcamp)  
_Click here to be notified when it opens_