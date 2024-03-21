> -  原文地址：[How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：luojiyin
> -  校对者：

![如何在 React 中使用 Axios：2021 年完全指南](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/how-to-use-axios-with-react.png)

在本指南中，你将看到如何使用 Axios.js 和 React，并使用大量具有 React hook 的真实世界的例子。

你会看到为什么你应该使用 Axios 作为数据获取库，如何用 React 设置它，并使用它执行各种类型的 HTTP 请求。

然后，我们将触及更多的高级功能，如创建 Axios 实例以实现可重用性，使用 async-await 来简化 Axios，以及如何将 Axios 作为一个自定义 Hook。

让我们直接开始吧!

### **想要自己的副本?‬ 📄**

****[点击这里下载 PDF 格式的小册子](https://reedbarger.com/resources/react-axios-2021)**** (它需要 5 秒下载完).

它包括这里所有的基本信息，作为一个方便的 PDF 指南。

## 目录

-   [什么是 Axios?](#what-is-axios)
-   [为什么在 React 中使用 Axios](#why-use-axios-in-react)
-   [如何用 React 设置 Axios](#how-to-set-up-axios-with-react)
-   [如何进行 GET 请求(检索数据)](#how-to-make-a-get-request)
-   [如何进行 POST 请求(创建数据)](#how-to-make-a-post-request)
-   [如何进行 PUT 请求(更新数据)](#how-to-make-a-put-request)
-   [如何提出 DELETE 请求(删除数据)](#how-to-make-a-delete-request)
-   [如何处理 Axios 的错误](#how-to-handle-errors-with-axios)
-   [如何创建一个 Axios 实例](#how-to-create-an-axios-instance)
-   [如何使用 Axios 的 Async-Await 语法](#how-to-use-the-async-await-syntax-with-axios)
-   [如何创建一个自定义的 `useAxios` Hook](#how-to-create-a-custom-useaxios-hook)

## What is Axios?

Axios 是一个 HTTP 客户端库，它允许你向一个给定的端点(endpoint)发出请求。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-12-at-1.14.41-PM.png)

例如，这可能是一个外部 API 或你自己的后端 Node.js 服务器。

通过提出请求，你希望你的 API 能根据你提出的请求执行操作。

例如，如果你提出一个 GET 请求，你希望得到的数据能在你的应用程序中显示。

## Why Use Axios in React

有许多不同的库可以用来提出这些请求，那么为什么选择 Axios 呢？

以下 **五个理由** ,为什么你应该使用 Axios 作为你的客户端来进行 HTTP 请求:

1.  它有很好的默认值来处理 JSON 数据。与 Fetch API 等替代品不同，你通常不需要设置你的头文件。或执行繁琐的任务，如将你的请求体转换为 JSON 字符串
2.  Axios 有与任何 HTTP 方法相匹配的函数名称。要执行一个 GET 请求，你可以使用`.get()`方法。
3.  Axios 用更少的代码做更多的事情。与 Fetch API 不同，你只需要一个`.then()`回调来访问你请求的 JSON 数据。
4.  Axios 有更好的错误处理。Axios 为你抛出 400 和 500 范围的错误。不像 Fetch API，你必须检查状态代码并自己抛出错误。
5.  Axios 既可以在服务器上使用，也可以在客户端使用。如果你正在写一个 Node.js 应用程序，请注意 Axios 也可以在独立于浏览器的环境中使用。

## How to Set Up Axios with React

在 React 中使用 Axios 是一个非常简单的过程。你需要三样东西:

1.  一个现有的 React 项目
2.  用 npm/yarn 来安装 Axios
3.  一个用于发出请求的 API 端点(endpoint)

创建一个新的 React 应用程序的最快捷的方法是去 [react.new](https://react.new)网站。

如果你有一个现有的 React 项目，你只需要用 npm（或任何其他包管理器）安装 Adios。

```bash
npm install axios
```

在本指南中，你将使用 JSON Placeholder API 来获取和改变帖子数据。

下面是你可以提出请求的所有不同路由(routes)的列表，以及每个路线的相应 HTTP 方法:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-10-at-12.21.28-PM.png)

下面是一个快速的例子，说明你将使用 Axios 和你的 API 端点进行的所有操作--检索、创建、更新和删除帖子:

![](https://www.freecodecamp.org/news/content/images/2021/07/axios-react.gif)

## How to Make a GET Request

要获取数据或检索数据，要提出一个 GET 请求。

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

为了在挂载组件时执行这个请求， 你可以使用`useEffect`Hook。这涉及到导入 Axios，使用`.get()`方法向你的端点(endpoint)发出 GET 请求， 并使用`.then()`回调获得所有的响应数据。

响应被作为一个对象返回。数据（这里是一个带有`id`,`title`和`body`属性的帖子）被放在一个叫做`post`的状态中，在组件中显示。

请注意，你总是可以从响应中的`.data`属性中找到请求的数据。

## How to Make a POST Request

要创建新的数据，要发出一个 POST 请求。

根据 API，这需要在`/posts`端点(endpoint)上执行。如果你看一下下面的代码，你会发现点击一个按钮可以创建一个帖子。

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

为了用 Axios 进行 POST 请求，你使用`.post()`方法。作为第二个参数，你包括一个对象属性，指定你希望新的帖子是什么。

再一次，使用`.then()`回调来获取响应数据，用你请求的新帖子替换你得到的第一个帖子。

这与`.get()`方法非常相似，但你想要创建的新资源是作为 API 端点(endpoint)之后的第二个参数提供的。

## How to Make a PUT Request

要更新一个给定的资源，要提出一个 PUT 请求。

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

在上面的代码中，你使用了 Axios 的 PUT 方法。和 POST 方法一样，你包括了你想在更新资源中的属性。

同样，使用`.then()`回调，你用返回的数据更新 JSX。

## How to Make a DELETE Request

最后，要删除一个资源，使用 DELETE 方法

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

在大多数情况下，你不需要从`.delete()`方法中返回的数据。

但在上面的代码中，`.then()`回调仍被用来确保你的请求被成功处理。

在上面的代码中，一个帖子被删除后，用户会被提醒它被成功删除。然后，帖子数据被清除出状态，将其设置为初始值`null`。

另外，一旦一个帖子被删除，文本 "没有帖子 "就会在警告信息后立即显示。

## How to Handle Errors with Axios

如何处理 Axios 的错误？

如果在发出请求时出现了错误怎么办？例如，你可能传递了错误的数据，向错误的端点(endpoint)发出了请求，或者出现了网络错误。

为了模拟一个错误，你将向一个不存在的 API 端点(endpoint)发送一个请求: `/posts/asdf`.

这个请求将返回一个`404`状态代码。

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

在这种情况下，Axios 不会执行`.then()`回调函数，而是抛出一个错误并运行`.catch()`回调函数。

在这个函数中，我们正在获取错误数据，并将其放入状态，以提醒我们的用户注意错误。因此，如果我们有一个错误，我们将显示该错误信息。

在这个函数中，错误数据被放在状态中，用来提醒用户注意错误。所以，如果有一个错误，就会显示一个错误信息。

当你运行这段代码的时候，你会看到这样的文字, "Error: Request failed with status code 404".

## How to Create an Axios Instance

如果你看一下前面的例子，你会发现有一个`baseURL`，你用它作为 Axios 执行这些请求的端点(endpoint)的一部分。

然而，为每一个请求不断地编写`baseURL`是有点乏味的。你能不能让 Axios 记住你使用的`baseURL`？因为它总是涉及一个类似的端点。

事实上，你可以。如果你用`.create()`方法创建一个实例，Axios 会记住`baseURL`，以及你可能想为每个请求指定的其他值，包括消息头(header)。

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

上述配置对象中的一个属性是`baseURL`，你把端点(endpoint)传给它。

`.create()`函数返回一个新创建的实例，在本例中它被称为`client`。

然后在未来，你可以使用所有与之前相同的方法，但你不必再将`baseURL`作为第一个参数。你只需要引用你想要的特定路由，例如，`/`，`/1`，等等。

## How to Use the Async-Await Syntax with Axios

在 JavaScript（包括 React 应用程序）中使用 promises 的一大好处是 async-await 语法。

Async-await 允许你不使用`then`和`catch`回调函数的情况下写出更简洁的代码。另外，使用 async-await 的代码看起来很像同步代码，而且更容易理解。

但你如何使用 Axios 的 async-await 语法呢？

在下面的例子中，获取了帖子，但仍有一个按钮可以删除该帖子:

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

然而在`useEffect`中，有一个`async`函数，叫做`getPost`。

让它成为`async`允许你使用`await`关键字来解决(resolve)GET 请求，并在下一行将该数据设置为状态，而不需要`.then()`回调。

注意，`getPost`函数在被创建后立即被调用。

此外，`deletePost`函数现在是`async`，这是使用`await`关键字的要求，它可以解决(resolve)它返回的 promise（每个 Axios 方法都会返回一个 promise 来解决(resolve)）。

在使用`await`关键字和 DELETE 请求后，用户会被提醒帖子被删除，并且帖子被设置为`null`。

正如你所看到的，async-await 极大地简化了代码，你可以非常容易地将其用于 Axios。

## How to Create a Custom `useAxios` Hook

Async-await 是一个简化代码的好方法，但你可以更进一步。

你可以用 Axios 创建你自己的自定义 Hook，作为一个可重用的函数执行同样的操作，而不是使用`useEffect`在组件挂载时获取数据。

虽然你可以自己制作这个自定义 Hook，但是有一个非常好的库可以给你一个自定义的`useAxios`钩子，叫做 use-axios-client。

首先，安装该软件包:

```
npm install use-axios-client
```

要使用 Hook 本身，请在组件的顶部从 use-axios-client 导入`useAxios`。

因为你不再需要`useEffect`，你可以删除 React 的导入。

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

现在你可以在应用程序组件的顶部调用`useAxios`，传入你想要请求的 URL，钩子会返回一个对象，其中包含你需要处理不同状态的所有值。`loading`, `error`和解决(resolved)的`data`。

在执行这个请求的过程中，值`loading`将为真。如果有一个错误，你会想显示这个错误状态。否则，如果你有返回的数据，你可以在用户界面中显示它。

像这样的自定义 Hook 的好处是，它确实减少了代码，并从整体上简化了代码

如果你想用 Axios 获取更简单的数据，可以试试像这样的自定义`useAxios`钩子。

## What's Next?

恭喜你！你现在知道如何使用一个最强大的 HTTP 客户端库来支持你的 React 应用了。你现在知道如何使用最强大的 HTTP 客户端库之一来支持你的 React 应用程序。

我希望你从本指南中得到了很多。

[记住，你可以将本指南下载为 PDF 格式的手册，以备将来参考。](https://reedbarger.com/resources/react-axios-2021)

## Want Even More? Join The React Bootcamp

**[The React Bootcamp](http://bit.ly/join-react-bootcamp)** 这本书把你应该知道的关于学习 React 的所有知识，捆绑在一个综合包里，包括视频、手册，还有特别的奖金。

获得**已经成为 React 专家百名开发者**的内幕信息。他们已经找到自己的梦想工作，并掌控他们的未来。

[![The React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](http://bit.ly/join-react-bootcamp)  
_点击这里，当它开放时，将得到通知_