> -  原文地址：[Fetch API – How to Make a GET Request and POST Request in JavaScript](https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：
> -  校对者：

![Fetch API – How to Make a GET Request and POST Request in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/Fetch-API.png)

Often times you might want your system to communicate with other web servers to get information.

For example, let's say a new user wants to sign up for an account on your website. And instead of having to manually fill out a form to send their information to your system, they want to use their information that's already in another service or platform (that is, **3rd party authentication**) to sign up.

In such a case, your system has to communicate with the third party's system to get that user's information. And it does that through an **API**.

> An API, or Application Programming Interface, is just a set of rules that guide how one software or system communicates with another.

![](https://www.freecodecamp.org/news/content/images/2021/05/IMG_20210530_115853.jpg)

My hand-drawn explanation of an API

If your application is a single-page application built with an asynchronous programming language like JavaScript, you have a helpful tool to carry out that function: `fetch()`.

## What is the Fetch API?

`fetch()` is a mechanism that lets you make simple AJAX (Asynchronous JavaScript and XML) calls with JavaScript.

**Asynchronous** means that you can use fetch to make a call to an external API without halting the execution of other instructions. That way, other functions on the site will continue to run even when an API call has not been resolved.

When a response (data) is sent back from the API, the asynchronous tasks (fetch) resume. If it still sounds difficult, you can read my detailed introduction into [Asynchronous code here](https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript).

It is important to note, though, that fetch is not part of the JavaScript spec, but the WWTAG. As a result, you will not be able to use it in a Node.js environment (unless you install a special module).

## How to Use `fetch()` in JavaScript

When we talk about APIs, we also need to talk about **endpoints**. An endpoint is simply a unique URL you call to interact with another system.

Let's assume that we are making a request to an external API to get some data (like a blog post). For this, we'll use a simple GET request.

Simply call `fetch()` with the endpoint URL as the argument:

```js
fetch('https://ubahthebuilder.tech/posts/1');
```

Trying to fetch blog post from external API

The response body for this endpoint will be information about a blog post:

```js
{
userId: 1,
id: 1,
title: 'A post by Kingsley',
body: 'Brilliant post on fetch...',
};
```

Ultimately, you'll want to get the response body. But the response object contains quite a bit of information beyond the body, including the status code, headers, and more information.

> Note that the fetch API returns a promise. Because of this, you need to nest a then() method to handle the resolution. Learn more about promises [here](https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript).

The data returned from the API is not usually in a useable form. So you'll need to convert the data to a form which your JavaScript can operate with. Thankfully, you can use the `json()` method to do just that:

```js
fetch('https://ubahthebuilder.tech/posts/1')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});
```

Retrieving blog post from API and extracting only the title property

As you can see in the above code, you can nest a subsequent `then()` method to parse the data (I pulled out just the title in our case)

In this example, we simply wanted to get a blog post from the API. But what if we wanted to post a story instead?

## How to Make a POST Request

Once you move beyond GET requests, you'll need to set a few more options. So far, you have only supplied a single argument to `fetch()` — the URL endpoint.

For a post request, you'll need to pass an object of configuration options as a second argument. The optional object can take a lot of different parameters. In this case, include only the most necessary information.

Because you're sending a POST request, you'll need to declare that you're using the POST method.

You'll also need to pass some data to actually create the new blog post. Since you're sending JSON data, you'll need to set a header of _Content-Type_ set to _application/json_. Finally, you'll need the body, which will be a single string of JSON data.

```js
const update = {
title: 'A blog post by Kingsley',
body: 'Brilliant post on fetch API',
userId: 1,
};

const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(update),
};
```

And then, the API call:

```js
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      // {
      //
      title: 'A blog post by Kingsley',
      //
      body: 'Brilliant post on fetch API',
      //
      userId: 1,
      //
      id: 101
      // };
      }).catch(e => {
      console.log(e);
      });
```

If your request is successful, you'll get a response body containing the blog post object along with a new ID. The response will vary depending on how the API is set up.

Finally, you should note that endpoints may change with time and API's may be restructured. So you should put all your fetch calls together for easier access.

## Conclusion

Here are some points to summarize this article:

-   Computer systems like software communicate with each other and share information through a layer called an API.
-   An API contains the set of rules and protocols guiding how two or more systems interact. For example, Facebook's system may interact with Google's system to get information on a user though an API.
-   In front end JavaScript, you can make simple API calls with the `fetch()` utility.
-   To make a simple GET request with fetch, you just need to pass in the URL endpoint as an argument.
-   To make a POST request, you'll need to pass along certain other parameters including a configuration object.

If you liked my article and want to offer your support, kindly visit my [Buy Me A Coffee page](https://buymeacoffee.com/ubahthebuilder).

Thank you and see you soon.