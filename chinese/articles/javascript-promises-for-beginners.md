> - 原文地址：[JavaScript Promises for Beginners](https://www.freecodecamp.org/news/javascript-promises-for-beginners/)
> - 原文作者：[Spruce Emmanuel](https://www.freecodecamp.org/news/author/spruce/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![JavaScript Promises for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/Web-capture_11-5-2022_134720_127.0.0.1-1.jpeg)

在 JavaScript 中，promise 是一个正在进行的操作的值的占位符（代理）。

你通常使用一个 promise 来管理你必须等待操作结果的情况。例如，将文件上传到服务器并等待 API 调用的响应，或者只是要求用户从他们的计算机中选择一个文件。

在这篇文章中，你将通过建立一个像下面这样的真实世界的例子应用来学习 JavaScript 的 promise:

![Web-capture_11-5-2022_134720_127.0.0.1](https://www.freecodecamp.org/news/content/images/2022/05/Web-capture_11-5-2022_134720_127.0.0.1.jpeg)

## What is a Promise?

promise 是一个简单的函数，它返回一个你可以附加回调的 `Object(对象)`。

附加到 promise 对象上的回调只有在操作完成时才会被调用。在之前，回调将不得不等待，直到操作被****fulfilled**** 或**rejected**:

```js
fetch(`some_api_url`).then((response) => {
  // Everything here will wait the fetch operation to complete
});
```

在一个 promise 最终确定之前（ promise 要么实现（fulfills），要么被拒绝（rejected）），它必须经历不同的状态:

| State | Description | Callbcak |
| --- | --- | --- |
| pending | 意味着操作仍在运行，promise 正在等待中 | \- |
| fulfilled | 操作已经完成，并且很成功 | `.then()` |
| rejected | 操作已完成，但出现了一个错误  | `.catch()` |
| settled | promise 要么已经 fulfilled ，要么被 rejected，无论如何，这个回调都会被调用 | `.finally()` |

当一个 promise 被创建时，初始状态是待定（pending）。然后根据操作的输出，promise 要么被 fulfilled ，要么被 rejected。

从上面的表格中，你可以很容易地看到根据 Promise 的每个状态而被调用的回调:

```js
fetch(`some_api_url`).then((response) => {
  // This will get called when the promise fulfills
}).catch((error) => {
  // This will get called when the promise is rejected
}).finally(() => {
  // This will get called all the time
})
```

## How to Use Promises in JavaScript

现在你已经了解了什么是 promise，让我们通过建立我们之前看到的电影搜索应用来演示如何在 JavaScript 中使用 promise。

一个基本的电影搜索应用程序应该有一个输入字段，用户可以在那里搜索他们喜欢的电影。它还应该有一个用户界面来显示他们所搜索的电影的一些基本信息。

让我们从创建**HTML**开始。

### How to write the HTML

为了本教程的目的和提供实际的例子，我将使用 **Codepen**，但你可以使用你喜欢的代码编辑器。

创建一个`index.html`文件并添加以下代码:

```html
  <div class="wrapper">
      <header class="header">
        <div class="header_logo">Movie</div>
        <div class="header_actions">
          <form onsubmit="handle_form(event)" id="header_form">
            <div class="header_form-icon">
            <input type="search" class="header_form-input" placeholder="Search, Press Enter to Submit" />
            <svg class="icon" width="22px" height="22px"><use href="#icon-search" /></svg>
          </div>
          </form>
          <img id="img_icon" width="32px" height="32px" src="" alt="" >
        </div>
      </header>
      <main id="main">
        <section>
          <article class="movie">
            <div class="movie_img">
              <img id="img_src" src="" alt="" srcset="">
            </div>
            <div class="movie_info">
              <header><h1 class="movie_title"></h1></header>
              <div class="movie_desc"></div>
              <div class="movie_details">
                <h2>Details</h2>
                <ul class="flex">
                  <li>Premiered: <span id="movie_date"></span></li>
                  <li>Rating: <span id="movie_rating"></span></li>
                  <li>Runtime: <span id="movie_runtime"></span></li>
                  <li>Status: <span id="movie_status"></span></li>
                </ul>
              </div>
              <a href="" class="btn" target="_blank" rel="noopener noreferrer">
            <svg class="icon" width="16px" height="16px"><use href="#icon-play" /></svg>
                Watch Movie</a>
            </div>
          </article>
          <div class="episodes_list">
            <h3 class="episodes_title"></h3>
          <ol class="episodes" id="episodes"></ol>
        </div>
        </section>
      </main>
    </div>
```

上面我们只是创建了我们的电影应用程序的基础。所以现在让我们用一些 CSS 给它注入一些活力:

### How to fetch a movie

为了获取我们的电影，我们将使用 TVMAZE 的 API。创建`main.js`文件并添加以下代码:

```js
const get_movie = (value = "Game of thrones") => {
   fetch(
    `https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`
  ).then((response) => create_UI(response.json()));
};
```

我们创建了一个函数`get_movie(value = "Game of thrones")`，使用了 JavaScript fetch API。我们用它来向我们的电影 API 端点（endpoint）发出`GET`请求。

fetch API 会返回一个 promise 。为了使用 API 的响应，我们附加了`.then()`回调，其中我们将`response.json()`传入一个新的函数`create_UI()`。让我们继续创建`create_UI`函数。:

```js
const create_UI = (data) => {
  const movie_img = document.querySelector("#img_src");
  const movie_icon = document.querySelector("#img_icon");
  const movie_title = document.querySelector(".movie_title");
  const movie_desc = document.querySelector(".movie_desc");
  const movie_link = document.querySelector(".btn");
  const movie_date = document.querySelector("#movie_date");
  const movie_rating = document.querySelector("#movie_rating");
  const movie_runtime = document.querySelector("#movie_runtime");
  const movie_status = document.querySelector("#movie_status");

  // set the UI
  movie_icon.src = data.image.medium;
  movie_img.src = data.image.original;
  movie_title.textContent = data.name;
  movie_desc.innerHTML = data.summary;
  movie_link.href = data.officialSite;
  movie_date.textContent = data.premiered;
  movie_rating.textContent = data.rating.average;
  movie_runtime.textContent = data.runtime;
  movie_status.textContent = data.status;
};
```

上述函数，顾名思义，帮助我们为我们的电影应用程序创建用户界面。但当然，我们仍然需要一种方法来收集用户的电影名称。

我们需要做的第一件事是给我们的 HTML 表单（form）添加一个`onsubmit`事件处理程序:

```html
<form onsubmit="search(event)" id="header_form">
  <input type="search" class="header_form-input" placeholder="Search, Press Enter to Submit" />
//
</form>
```

现在在我们的`main.js`文件中，我们通过提交表单时发生的事件触发处理:

```js
// handle form submit
const search = (event) => {
  event.preventDefault();
  const value = document.querySelector(".header_form-input").value;

  get_movie(value);
};
```

Anytime the user submits the form we get the value they entered in the search box and we pass it to the `get_movie(value = "Game of thrones")` function we created earlier.

## Promise Chaining

Unlike what we have been seeing in our previous examples, the `.then()` callback is not really the end. That's because when you return value of a promise you get another promise. This becomes very useful when you want to run a series of asynchronous operations in order.

For example, our movie API doesn't just return info about a movie, it also returns information about all the episodes. Let's say that we really don't want to display all the episodes in Game of Thrones, we only want the first four (4) episodes.

With promise chaining we can easily achieve this:

```js
const get_movie = (value = "Game of thrones") => {
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      if (data._embedded.episodes.length > 0) {
        const new_data = data._embedded.episodes.slice(0, 4);

        create_UI(data);
        return create_episodesUI(new_data);
      } else {
        return create_UI(data);
      }
    });
};
```

This is still our `get_movie()` function, but this time instead of passing the data to the `create_UI` function we return the response `.then((response) => response.json())`. This creates a new promise, which we can attach more callbacks to.

Ideally this chain can keep going on and on for as long as you want. Remember all you have to do is to return the value of the promise.

## How to Handle Errors in Promises

Errors that happen within a promise go immediately to the `.catch()` callback:

```js
fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      // any error here will trigger the .catch() callback
    }).catch((error) => {
    // all errors are caught and handled here
    })
```

The `.catch()` callback is short for `.then(null, (error) => {})`. You could also write the above as:

```js
fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      // any error here will trigger the .catch() callback
    }, (error) => {
    // all errors are caught and handled here
    })
```

With our movie search app, for example, when we encounter any errors we can handle and display a nice error message to users in the `.catch()` callback:

```js
const get_movie = (value = "Game of thrones") => {
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      if (data._embedded.episodes.length > 0) {
        const new_data = data._embedded.episodes.slice(0, 4);

        create_UI(data);
        return create_episodesUI(new_data);
      } else {
        return create_UI(data);
      }
    })
    .catch((error) => {
      console.log(error.message);
      // Challange: display your error here
    });
};
```

Now if for any reason we get an error, the `.catch()` callback is called and we display the correct error to the user.

## How to Create Promises in JavaScript

Now that we have learned what promises are and how to use them, let's see how we can create a promise in JavaScript.

To create a promise in JavaScript, you use the promise constructor. The constructor takes one argument: a function with two parameters, `resolve` and `reject`:

```js
const is_true = true
const new_promise = new Promise((resolve,reject) => {
  if(is_true) {
    // everything went fine
    resolve()
  } else {
    // Oops there was an error
    reject()
  }
})
```

Then we can go ahead and use our `new_promise` by attaching the callbacks:

```js
new_promise
  .then((response) => {
    // everything went fine
  })
  .catch((error) => {
    // handle errors
  });
```

## Conclusion

In this tutorial, we learnt about promises, what they are, and how to use them by building a movie search app. The entire code and live preview of our movie app can be found on Codepen: [Movie Search App](https://codepen.io/Spruce_khalifa/pen/wvygzLq?editors=0100).

### Challenge

While creating our movie app, I left out some parts which I think would be great for you to practice your new Promise skills:

1. Our movie app looks frozen when we are waiting for the API response. You can try adding a loader to tell the user that the promise is pending.
2. We currently just use `console.log(error)` to log out errors. But we don't want that, so you can figure out how to display all errors to users in a friendly way.

If you created something wonderful with this, please feel free to tweet about it and tag me [@sprucekhalifa](https://twitter.com/sprucekhalifa). And don't forget to hit the follow button.

Happy coding!
