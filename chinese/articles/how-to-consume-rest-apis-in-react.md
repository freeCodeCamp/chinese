> -  原文地址：[How to Consume REST APIs in React – a Beginner's Guide](https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/)
> -  原文作者：[Joel Olawanle](https://www.freecodecamp.org/news/author/joel-olawanle/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Consume REST APIs in React – a Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/cover-template-2.jpg)

React是一个流行的前端库，开发者常常使用React来创建应用。如果想要创建的应用投入使用，你需要将API集成到应用中。

如果想要使用React构建现代、强大的web应用，就必须知道如何在React中使用API来获取数据。

在这份初学者指南中，你将学习如何在React中使用RESTful API，其中包括获取、删除以及添加数据。同时，我们将讲解两种主要使用RESTful API的方法，以及如何搭配React钩子来使用。

## 什么是REST API?

如果你接触过编程，就应该碰到过API这个术语。

API代表应用程序接口（Application Programming Interface）。是不同应用之间相互通讯以及实时返回响应的媒介。

[Roy Fielding](https://en.wikipedia.org/wiki/Roy_Fielding)在2000年将REST定义为一种互联网服务(如分布式超媒体系统）开发的架构—风格和方法，REST是"REpresentational State Transfer"（表现层状态转化）的缩写。

当通过REST API发出请求时，它会将资源的当前状态的表现发送给请求者或者终点。状态表现通常采用JSON格式（(JavaScript Object Notation），或者XML和HTML格式。

JSON格式之所以最受欢迎，是因为它和编程语言无关，人类和机器都可以理解。

**以下是一个JSON示例:**

```json
[
   {
      "userId": 1,
      "id": 1,
      "title": "sunt excepturi",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur "
   },
   {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil"
   }
]
```

## 如何在React中使用REST API

你可以通过各种不同的方法在React中使用REST API，但在这篇教程中我们只讲解两种主要的方法：Axios (基于promise的HTTP客户端) 和 Fetch API (浏览器内置的web API)。

**注意:** 你必须熟悉JavaScript、React和React钩子才能完全理解本教程。

在我们正式开始在React中使用REST API之前，我必须强调在React中使用API与在JavaScript中完全不同，因为请求是在React组件中完成。

这篇教程使用React函数组件，所以会使用两大钩子：

-   **useEffect Hook:** 在React中，我们通常使用`useEffect()`来发送API请求。一般是页面渲染后马上执行钩子内的代码，或者当达到特定状态时执行。基本语法如下：

```javascript
useEffect(() => {
    // 在这里获取数据
}, []);
```

-   **useState Hook:** 在请求数据的时候，我们必须准备一个状态(state)来存储返回的数据。你可以使用状态管理工具如Redux或者存储到一个上下文对象中。为了简化难度，这里我们将返回数据存储到React本地状态：

```javaScript
const [posts, setPosts] = useState([]);
```

让我们进入本文的正题，我们借助[JSONPlaceholder posts API](https://jsonplaceholder.typicode.com/posts)来学习如何获取、添加和删除数据。因为文章内容是针对初学者的，所以这里讲解的方法的应用面很广。

## 如何使用Fetch API来获取API数据

Fetch API是JavaScript内置从服务器或者API终点获取资源的方法。因为是内置的，所以使用Fetch API不需要安装任何依赖项或者包。

`fetch()`方法有一个强制参数，即你想要获取资源的路径或者URL， 该方法返回一个promise，可以使用`then()`和`catch()`方法来处理成功或者失败的情况。

一个基本的fetch请求简单易写，在下面示例中我们从URL获取数据后，返回JSON格式的数据然后打印在控制台。

```js
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));
```

默认响应是HTTP格式的，但是我们可以使用`json()`方法来把结果改成JSON对象。

### 如何在React中使用Fetch API来实现GET请求

可以使用HTTP GET方法从终点请求数据。

如前文所述，Fetch API有一个强制参数，但与此同时也接受一个选择参数，当使用GET方法的时候，可以选择写或者不写，但是如果使用POST和DELETE方法的话，就必须附上方法的名称及详情：

```js
fetch(url, {
    method: "GET" //默认参数，可以忽略
})
```

在学习完原理之后，让我们学以致用，从API中获取数据。

我们将使用[free online API JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)上的数据，获取一组帖子的数据到应用：

```js
import React, { useState, useEffect } from 'react';

const App = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
   // ... 在这里消费数据
);
};
```

我们在代码的一开始创建了一个状态来存储从API获取的数据，以便之后可以在应用中消费（使用）。同时，我们将状态的默认值设置为空数组。

```js
const [posts, setPosts] = useState([]);
```

主要的操作发生在useEffect中，一旦应用加载成功，就获取数据（帖子）。fetch请求得到一个promise，我们可以接受或者拒绝：

```js
useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(
      (response) => console.log(response)
   );
}, []);
```

`response`包含了大量的数据，如：状态码、文本以及其他我们之后要去处理的错误信息。

目前我们使用 `.then()`来处理promise决议， 但此刻只返回一个响应对象，并不是我们想要的。 所以我们要使用 `json()` 方法来修改决议格式为JSON格式。 此时也会返回一个promise需要我们使用第二个`.then()`来获取真正的数据。

```js
useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setPosts(data);
      });
}, []);
```

查看控制台，会发现我们已经用API获取了10条帖子，并且将状态设置为我们之前计划的样子。

还没完，因为我们只处理了决议没有处理拒绝，此时需要 `.catch()`方法：

```js
useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setPosts(data);
      })
      .catch((err) => {
         console.log(err.message);
      });
}, []);
```

我们已经知道如何使用`GET`请求，数据可以轻松通过数组循环在应用内消费（使用）：

```js
const App = () => {
// ...

   return (
   <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>
   );
};

export default App;
```

### 在React中如何使用Fetch API发送POST请求

可以使用HTTP`POST`方法从终点发送数据。该方法和`GET`请求类似，主要的区别在于需要添加方法名称，以及两个额外的参数到选填对象中：

```js
const addPosts = async (title, body) => {
await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
   title: title,
   body: body,
   userId: Math.random().toString(36).slice(2),
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   setPosts((posts) => [data, ...posts]);
   setTitle('');
   setBody('');
})
.catch((err) => {
   console.log(err.message);
});
};
```

代码中的`body`（请求体）和`header`（请求头）对于你来说可能有点陌生。

`body`部分的数据是我们想要传给API的数据，在传输给服务器之前必须先字符串化。`header`告知数据类型，通常和我们使用的REST API一致的类型。同时我们也使用状态保存新的数据，并将剩下的数据分配到上文所述的循环数组中。

在我们创建的`addPost()`方法中期望从表单或者其他地方获取数据。在我们的例子中，我创建了一个表单`<form>`，从状态的变化获得表单数据，然后在提交表单的时候将数据添加到方法。

```js
import React, { useState, useEffect } from 'react';
const App = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
// ...
const addPosts = async (title, body) => {
   await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: body,
         userId: Math.random().toString(36).slice(2),
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => response.json())
      .then((data) => {
         setPosts((posts) => [data, ...posts]);
         setTitle('');
         setBody('');
      })
      .catch((err) => {
         console.log(err.message);
      });
};

const handleSubmit = (e) => {
   e.preventDefault();
   addPosts(title, body);
};    

return (
   <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
         </form>
      </div>
      {/* ... */}
   </div>
);
};

export default App;
```

### 在React中如何使用Fetch API执行DELETE请求

可以使用HTTP`DELETE`方法从终点删除数据。这和`GET`请求类似，主要的区别在与这个方法附加的一些条件：

```js
const deletePost = async (id) => {
await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
   method: 'DELETE',
}).then((response) => {
   if (response.status === 200) {
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
   } else {
      return;
   }
});
};
```

一旦点击按钮就触发这个行为，我们获得按钮所在的具体帖子的`id`，然后从整个返回数据中删除这个数据。

这样操作会将数据从API删除，但是不从UI删除，所以我们添加了一个`filter`方法来在UI上删除响应的数据。每一个在循环中的删除键代码如下：

```js
const App = () => {
// ...

   return (
   <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               {/* ... */}
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                     Delete
                  </div>
               </div>    
            </div>
         );
      })}
   </div>
   );
};

export default App;
```

### 如何在Fetch API中使用Async/Await

目前我们使用promise语法来发送fetch请求，这个语法有时会造成理解上的困惑，特别是后续紧跟着链式调用。我们可以使用async/await取代`.then()`从而编写更易读的代码。

使用async/await的第一步是在函数中添加`async`标识，然后在需要等待响应的部分添加`await`语法，等待promise决议。

使用async/await后我们的fetch请求会变成这个样子：

```js
import React, { useState, useEffect } from 'react';

const App = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);

   // fetch API中的GET方法
   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };
      fetchPost();
   }, []);

   //fetch API中的DELETE方法
   const deletePost = async (id) => {
      let response = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${id}`,
         {
            method: 'DELETE',
         }
      );
      if (response.status === 200) {
         setPosts(
            posts.filter((post) => {
               return post.id !== id;
            })
         );
      } else {
         return;
      }
   };

   // fetch API中的POST方法
   const addPosts = async (title, body) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      let data = await response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

   return (
      // ...
   );
};

export default App;
```

### 如何使用Fetch API处理错误

在这个部分我们讲讨论如何使用传统和Async/Await的方式来处理错误。

我们可以使用响应数据来处理Fetch API中的错误，或者在async/await中使用try/catch声明来处理错误。

让我们先看看如果使用传统方式：

```js
const fetchPost = () => {
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then((response) => {
      if (!response.ok) {
         throw Error(response.statusText);
      }
      return response.json();
   })
   .then((data) => {
      console.log(data);
      setPosts(data);
   })
   .catch((err) => {
      console.log(err.message);
   });
};
```

更多相关内容可以阅读[这篇文章](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)。

在async/await中可以这样使用`try`和`catch`：

```js
const fetchPost = async () => {
   try {
      const response = await fetch(
         'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const data = await response.json();
      setPosts(data);
   } catch (error) {
      console.log(error);
   }
};
```

## 如何使用Axios来使用API

Axios是基于promise的HTTP客户端库，使得向REST终点发送异步HTTP请求变得更容易。本文使用的终点是JSONPlaceholder Posts API，我们会对它发出`GET`、`POST`和`DELETE`请求。

### 如何安装和配置Axios实例

Axios不像Fetch API一样是内置的，所以需要我们在使用之前将其安装在项目里。

你可以使用以下命令来安装Axios：

```
npm install axios
```

成功安装Axios之后，可以马上创建实例，这一步是选择性的，但是为了避免不必要的重复建议你这样操作。

我们使用`.create()`方法来创建实例，我们可以通过这个方法确定如URL和header等具体信息：

```js
import axios from "axios";

const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
```

### 在React中如何使用Axios执行GET请求

我们将使用创建好的实例来执行GET请求。只需要设置好参数，就可以获取默认JSON格式的响应。

和Fetch API方法不同的是，在Axios中没有额外的选择性参数。我们只需将方法添加到实例上，然后发出请求：

```js
useEffect(() => {
   client.get('?_limit=10').then((response) => {
      setPosts(response.data);
   });
}, []);
```

### 在React中如何使用Axios执行POST请求

如上文所述，可以通过`POST`方法将数据发送到终点，运行方式和`GET`请求类似，唯一的不同是在`POST`请求中需要指明请求方式以及添加我们需要发送的数据：

```js
const addPosts = (title, body) => {
   client
      .post('', {
         title: title,
         body: body,
      })
      .then((response) => {
         setPosts((posts) => [response.data, ...posts]);
      });
};
```

### 在React中如何使用Axios执行DELETE请求

我们可以通过`delete`方法来发送删除请求，获取`id`后，删除API上对应的内容。和在Fetch API中的操作一样，我们同样需要使用`filter`方法来更新UI：

```js
const deletePost = (id) => {
   client.delete(`${id}`);
   setPosts(
      posts.filter((post) => {
         return post.id !== id;
      })
   );
};
```

### How to Use Async/Await in Axios

目前为止我们都是使用promise的语法来发送Axios请求，现在让我们看看如何使用async/await语法来避免使用`.then()`链式调用。

使用async/await后，Axios请求可以改写如下：

```js
import React, { useState, useEffect } from 'react';

const App = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);

   // Axios中的GET
   useEffect(() => {
      const fetchPost = async () => {
         let response = await client.get('?_limit=10');
         setPosts(response.data);
      };
      fetchPost();
   }, []);

   // Axios中的DELETE
   const deletePost = async (id) => {
      await client.delete(`${id}`);
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
   };

   // Axios中的POST
   const addPosts = async (title, body) => {
      let response = await client.post('', {
         title: title,
         body: body,
      });
      setPosts((posts) => [response.data, ...posts]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

   return (
      // ...
   );
};

export default App;
```

### 如何使用Axios处理错误

如果是基于promise语法的Axios请求，我们使用`.then()`和`.catch ()` 方法，如果是async/await，我们使用`try...catch`代码块。这和使用Fetch API非常类似，`try...catch`代码块的示例如下：

```js
const fetchPost = async () => {
   try {
      let response = await client.get('?_limit=10');
      setPosts(response.data);
   } catch (error) {
      console.log(error);
   }
};
```

更多相关内容可以阅读[这篇文章](https://stackabuse.com/handling-errors-with-axios/).

## Fetch API vs Axios

你可以已经发现了一些不同，这里我制作了一张表格列举了两个方法之间的不同。

两者之间的区别可以帮助你决定在你的项目中采取哪种方法，两者之间的区别是：

| Axios | Fetch |
| --- | --- |
| Axios是一个便于安装的第三方独立包 | Fetch是许多浏览器内置的，所以**不需要安装** |
| Axios使用**data**（数据）属性 | Fetch使用**body**（请求体）属性 |
| Axios数据包含**对象** | Fetch的请求体需要 **字符串化** |
| 状态码为200以及状态文本为'OK'时，Axios请求成功| Fetch请求成功的标准是 **响应对象包含ok属性** |
| Axios**自动转换数据为JSON格式** | Fetch处理JSON格式请求需要**两步操作**：先发送请求，再对响应调用`.json()`方法 |
| Axios允许**取消请求和请求超时** | Fetch不允许 |
| Axios**内置下载进度支持** | Fetch不支持上传进度获取 |
| Axios**被大部分浏览器支持** | Fetch仅兼容Chrome 42+、Firefox 39+、Edge 14+、 and Safari 10.1+ (向后兼容) |

## 总结

在这篇文章中我们学习了如何使用Fetch API和Axios在React中使用REST API。

本文将开启你的React使用API之旅，之后你将自己选择API并进行更为复杂的数据处理。
