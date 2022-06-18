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

promise 是一个简单的函数，它返回一个你可以回调的 `Object(对象)`。

promise 对象上的回调只有在操作完成时才会被调用。在之前，回调将不得不等待，直到操作被****fulfilled**** 或**rejected**:

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

## 如何在 JavaScript 中使用 Promises 

现在你已经了解了什么是 promise，让我们通过建立我们之前看到的电影搜索应用来演示如何在 JavaScript 中使用 promise。

一个基本的电影搜索应用程序应该有一个输入字段，用户可以在那里搜索他们喜欢的电影。它还应该有一个用户界面来显示他们所搜索的电影的一些基本信息。

让我们从创建**HTML**开始。

### 如何编写 HTML

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

### 如何获取电影

为了获取我们的电影，我们将使用 TVMAZE 的 API。创建`main.js`文件并添加以下代码:

```js
const get_movie = (value = "Game of thrones") => {
   fetch(
    `https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`
  ).then((response) => create_UI(response.json()));
};
```

我们创建了一个函数`get_movie(value = "Game of thrones")`，使用了 JavaScript fetch API。我们用它来向我们的电影 API 端点（endpoint）发出`GET`请求。

fetch API 会返回一个 promise 。为了使用 API 的响应，我们使用了`.then()`回调，其中我们将`response.json()`传入一个新的函数`create_UI()`。让我们继续创建`create_UI`函数:

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

当用户提交表单时，我们就会得到他们在搜索框中输入的值，并将其传递给我们先前创建的 `get_movie(value = "Game of thrones")`函数。

## Promise 链

与我们在之前的例子中看到的不同，`.then()`回调并不是真正的结束。这是因为当你返回一个 `promise` 的值时，你会得到另一个 `promise`。当你想按顺序运行一系列的异步操作时，这就变得非常有用。

例如，我们的电影 API 不只是返回一部电影的信息，它还返回所有剧集的信息。比方说，我们真的不想显示《权力的游戏》中的所有剧集，我们只想要前四（4）集。

通过 promise chaining(链)，我们可以很容易地实现这一点:

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

这仍然是我们的`get_movie()`函数，但这次我们不是将数据传递给`create_UI`函数，而是返回响应`.then((response) => response.json())`。这将创建一个新的 `promise`，我们可以将更多的回调添加到这个 `promise` 上。

理想情况下，这个链可以一直持续下去，只要你想。记住，你所要做的就是返回 `promise` 的值。

## 如何处理 Promises 中的错误

在一个 `promise` 中发生的错误会立即进入 .catch()` 回调。:

```js
fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      // 这里的任何错误都会触发.catch()的回调。
    }).catch((error) => {
    // 所有的错误都在这里被捕捉和处理
    })
```

`.catch()`回调是`.then(null, (error) => {})`的简写。你也可以把上面的内容写成:

```js
fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      // 这里的任何错误都会触发.catch()的回调。
    }, (error) => {
    // 所有的错误都在这里被捕捉和处理
    })
```

以我们的电影搜索应用为例，当我们遇到任何错误时，我们可以在`.catch()`回调中处理并向用户显示一个漂亮的错误信息:

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

现在，如果由于任何原因产生的一个错误，`.catch()`回调被调用，我们向用户显示当前的错误。

## 如何在 JavaScript 中创建 Promises 

现在我们已经了解了什么是 `promise` 以及如何使用它们，让我们看看如何在 JavaScript 中创建一个 `promise`。

要在 JavaScript 中创建一个 `promise`，你需要使用 `promise` 构造函数。构造函数需要一个参数：一个有两个参数的函数，`resolve`和`reject`:

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

然后我们可以通过回调来使用我们的 `new_promise`:

```js
new_promise
  .then((response) => {
    // everything went fine
  })
  .catch((error) => {
    // handle errors
  });
```

## 总结

在本教程中，我们学习了 `promise`，它们是什么，以及如何通过建立一个电影搜索应用程序来使用它们。我们的电影应用程序的全部代码和实时预览可以在 `Codepen` 上找到。[电影搜索应用程序](https://codepen.io/Spruce_khalifa/pen/wvygzLq?editors=0100)。

### 挑战

在创建我们的电影应用程序时，我遗漏了一些部分，我认为这些部分对你练习新的 Promise 技能很有帮助:

1. 当我们在等待 API 响应时，我们的电影应用看起来被冻结了。你可以尝试添加一个加载器，告诉用户 `promise` 正在等待。
2. 我们目前只是使用`console.log(error)`来记录错误。但是我们不希望这样，所以你可以想办法以一种友好的方式向用户显示所有的错误。

如果你用这个创造了一些精彩的东西，请随时在推特上发表，并给我留言[@sprucekhalifa](https://twitter.com/sprucekhalifa)。还有，别忘了点击 `follow` 按钮。

编程愉快!
