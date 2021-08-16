> -  原文地址：[How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：
> -  校对者：

![How To Use Axios With React: The Definitive Guide (2021)](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/how-to-use-axios-with-react.png)

In this guide, you will see exactly how to use Axios.js with React using tons of real-world examples featuring React hooks.

You'll see why you should use Axios as a data fetching library, how to set it up with React, and perform every type of HTTP request with it.

Then we'll touch on more advanced features like creating an Axios instance for reusability, using async-await with Axios for simplicity, and how to use Axios as a custom hook.

Let's dive right in!

### **Want Your Own Copy?‬ 📄**

****[Click here to download the cheatsheet in PDF format](https://reedbarger.com/resources/react-axios-2021)**** (it takes 5 seconds).

It includes all of the essential information here as a convenient PDF guide.

## Table of Contents

-   [What is Axios?](#what-is-axios)
-   [Why Use Axios in React?](#why-use-axios-in-react)
-   [How to Set Up Axios with React](#how-to-set-up-axios-with-react)
-   [How to Make a GET Request (Retrieve Data)](#how-to-make-a-get-request)
-   [How to Make a POST Request (Create Data)](#how-to-make-a-post-request)
-   [How to Make a PUT Request (Update Data)](#how-to-make-a-put-request)
-   [How to Make a DELETE Request (Delete Data)](#how-to-make-a-delete-request)
-   [How to Handle Errors with Axios](#how-to-handle-errors-with-axios)
-   [How to Create an Axios Instance](#how-to-create-an-axios-instance)
-   [How to Use the Async-Await Syntax with Axios](#how-to-use-the-async-await-syntax-with-axios)
-   [How to Create a Custom `useAxios` Hook](#how-to-create-a-custom-useaxios-hook)

## What is Axios?

Axios is an HTTP client library that allows you to make requests to a given endpoint:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-12-at-1.14.41-PM.png)

This could be an external API or your own backend Node.js server, for example.

By making a request, you expect your API to perform an operation according to the request you made.

For example, if you make a GET request, you expect to get back data to display in your application.

## Why Use Axios in React

There are a number of different libraries you can use to make these requests, so why choose Axios?

Here are **five reasons** why you should use Axios as your client to make HTTP requests:

1.  It has good defaults to work with JSON data. Unlike alternatives such as the Fetch API, you often don't need to set your headers. Or perform tedious tasks like converting your request body to a JSON string.
2.  Axios has function names that match any HTTP methods. To perform a GET request, you use the `.get()` method.
3.  Axios does more with less code. Unlike the Fetch API, you only need one `.then()` callback to access your requested JSON data.
4.  Axios has better error handling. Axios throws 400 and 500 range errors for you. Unlike the Fetch API, where you have to check the status code and throw the error yourself.
5.  Axios can be used on the server as well as the client. If you are writing a Node.js application, be aware that Axios can also be used in an environment separate from the browser.

## How to Set Up Axios with React

Using Axios with React is a very simple process. You need three things:

1.  An existing React project
2.  To install Axios with npm/yarn
3.  An API endpoint for making requests

The quickest way to create a new React application is by going to [react.new](https://react.new).

If you have an existing React project, you just need to install Adios with npm (or any other package manager):

```bash
npm install axios
```

In this guide, you'll use the JSON Placeholder API to get and change post data.

Here is a list of all the different routes you can make requests to, along with the appropriate HTTP method for each:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-10-at-12.21.28-PM.png)

Here is a quick example of all of the operations you'll be performing with Axios and your API endpoint — retrieving, creating, updating, and deleting posts:

![](https://www.freecodecamp.org/news/content/images/2021/07/axios-react.gif)

## How to Make a GET Request

To fetch data or retrieve it, make a GET request.

First, you're going to make a request for individual posts. If you look at the endpoint, you are getting the first post from the `/posts` endpoint:

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

To perform this request when the component mounts, you use the `useEffect` hook. This involves importing Axios, using the `.get()` method to make a GET request to your endpoint, and using a `.then()` callback to get back all of the response data.

The response is returned as an object. The data (which is in this case a post with `id`, `title`, and `body` properties) is put in a piece of state called `post` which is displayed in the component.

Note that you can always find the requested data from the `.data` property in the response.

## How to Make a POST Request

To create new data, make a POST request.

According to the API, this needs to be performed on the `/posts` endpoint. If you look at the code below, you'll see that there's a button to create a post:

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

When you click on the button, it calls the `createPost` function.

To make that POST request with Axios, you use the `.post()` method. As the second argument, you include an object property that specifies what you want the new post to be.

Once again, use a `.then()` callback to get back the response data and replace the first post you got with the new post you requested.

This is very similar to the `.get()` method, but the new resource you want to create is provided as the second argument after the API endpoint.

## How to Make a PUT Request

To update a given resource, make a PUT request.

In this case, you'll update the first post.

To do so, you'll once again create a button. But this time, the button will call a function to update a post:

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

In the code above, you use the PUT method from Axios. And like with the POST method, you include the properties that you want to be in the updated resource.

Again, using the `.then()` callback, you update the JSX with the data that is returned.

## How to Make a DELETE Request

Finally, to delete a resource, use the DELETE method.

As an example, we'll delete the first post.

Note that you do not need a second argument whatsoever to perform this request:

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