> -  原文地址：[How to Use Flux to Manage State in ReactJS - Explained with an Example](https://www.freecodecamp.org/news/how-to-use-flux-in-react-example/)
> -  原文作者：[Sharvin Shah](https://www.freecodecamp.org/news/author/sharvin/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Use Flux to Manage State in ReactJS - Explained with an Example](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/Flux-4.png)

如果你最近开始使用ReactJS，那么你可能想知道如何在React中管理状态以便扩展应用程序。

许多公司就这个问题给出了自己的解决方案，而ReactJS的创始人Facebook给出的解决方案是[**Flux**](https://facebook.github.io/flux/)。

如果你曾经研究过**AngularJS**或者**EmberJS**，你可能听说过**Redux**。ReactJS也有一个实现Redux的库。

但是在学习Redux之前，我建议你先学习并理解Flux。我这样说是因为Redux是Fl​​ux的更高级版本。再清楚了Flux的概念之后，你可以学习redux并将其集成到您的应用程序中。

## 什么是Flux?

Flux采用**单向数据流模式**来解决状态管理的复杂性。记住它不是一个框架，而更像是一个解决状态管理问题的模式。

你是否会好奇现有的MVC框架出了什么问题？假设你的客户端应用扩展之后，各种模型（model）和视图（view）之间的交互错综复杂，是不是会变得一团糟？

![Screenshot-2020-04-16-at-6.38.14-PM](https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-16-at-6.38.14-PM.png)

备注：图片取自Facebook F8 Flux 大会

组件之间的关系变得复杂，导致扩展应用变得麻烦。Facebook曾面临同样的问题，所以他们搭建了**单向数据流**来解决这个问题。

![Flux-3](https://www.freecodecamp.org/news/content/images/2020/04/Flux-3.png)

备注：图片取自Facebook的Flux文档

如图所示，Flux包含许多组件，让我们逐一讲解这些组件。

**视图（View）:** 这个组件渲染UI。每当视图层上发生任何用户交互（如事件），都会触发渲染。同样，当数据层（store）通知视图层有变化的时候，视图重新渲染。例如，用户点击了**添加**按钮。

**动作（Action）:** 这部分处理所有的事件。事件由view组件传递。这一层通常被用于进行API调用。 一旦处理完毕，就使用派发器（dispatcher）派发任务。动作（action）可以是添加一个帖子、删除一个帖子等用户交互。

派发事件的通用负载（payload）结构为：

```js
{
	actionType: "",
    data: {
        title: "Understanding Flux step by step",
        author: "Sharvin"
    }
}
```

`actionType`是强制键，dispatcher通过它传递更新到相应的store。通常使用常量来保存`actionType`的值，这样不会出现拼写错误。`data`包含了我们想从Action派发到Store的信息。这个键的名称可以为任意值。

**派发器（Dispatcher）:** 这里是中央枢纽和单例注册表。dispatcher将负载由Action派发到Store，同时也要确保在派发的过程中没有产生[级联效应](https://baike.baidu.com/item/%E7%BA%A7%E8%81%94%E6%95%88%E5%BA%94/15623566)。 它确保数据层在完成处理和存储操作之前没有任何其他操作。

可以把这个组件想象成一个系统的交通控制器，它将回调集中到一个清单，调用回调，并且广播由action传递过来的负载。

由于这个组件的存在，数据流变得可以预测。每一个action都由注册在dispatcher的回调更新到对应的store。

**数据（Store）:** 这里包含了应用的状态，是这个模式中的数据层。不要把它类比为MVC中的模型（model）。一个应用可以有一个或者多个store。store通过注册在dispatcher的回调来更新数据。

Node的EventEmitter（事件发射器）被用来更新store并广播更新到view。view从不直接更新应用程序的状态，它被更新是因为store的变化。

这是Flux模型中唯一可以更新数据的组件。store内的接口包括：

1.  **EventEmitter(事件发射器)**通知view，store的数据更新了。
2.  **addChangeListener**和**removeChangeListener**这类监听器被添加。
3.  **emitChange**用于发射更改。

假设上述的范式有多个store和view，这个模式和数据流还是保持不变。因为和MVC或者双向绑定不同的是，flux模式是单向模式，数据流是可以预见的。 这就提高了**数据的一致性**并且**更容易发现bug**。

![Flux-Flow-3](https://www.freecodecamp.org/news/content/images/2020/04/Flux-Flow-3.png)

Flux数据流

因为**单向数据流**的特性，Flux有以下优点：

1.  代码更加简洁且便于理解。
2.  更容易使用单元测试进行测试。
3.  应用可以被扩展。
4.  可预见的数据流。

> _**注意:** Flux唯一的缺点是我们需要编写一些样板。除去样板，在往应用添加新的组件的时候，我们只需要编写一点点代码。_

## 应用模板

我们将通过学习创建一个博客页面来学习如何在ReactJS中实现flux。我们将在页面中展现所有文章。应用模板参见这个[commit](https://github.com/Sharvin26/DummyBlog/tree/0d56987b2d461b794e7841302c9337eda1ad0725)。我们将在这个模板的基础上结合Flux。

复制commit的代码：

```shell
git clone  https://github.com/Sharvin26/DummyBlog.git
```

```shell
git checkout 0d56987b2d461b794e7841302c9337eda1ad0725
```

我们需要引入**react-router-dom**和**bootstrap**模型。使用以下命令安装包：

```
npm install react-router-dom@5.0.0 bootstrap@4.3.1  
```

完成后，你会看到以下界面：

![captured](https://www.freecodecamp.org/news/content/images/2020/04/captured.gif)

虚拟博客

我们仅通过实现**GET**方法来了解Flux的细节。完成后你会发现**POST**、**EDIT**和**DELETE**的实现过程相同。

目录结构如下：

```shell
+-- README.md 
+-- package-lock.json
+-- package.json
+-- node_modules
+-- .gitignore
+-- public
|   +-- index.html
+-- src
|   +-- +-- components
|   +-- +-- +-- common
|   +-- +-- +-- +-- NavBar.js
|   +-- +-- +-- PostLists.js
|	+-- +-- pages
|   +-- +-- +-- Home.js
|   +-- +-- +-- NotFound.js
|   +-- +-- +-- Posts.js
|   +-- index.js
|   +-- App.js
|   +-- db.json
```

> **Note:** 我们添加了`db.json`文件，这是一个虚拟的数据文件。因为我们专注在Flux的讲解而不是如何搭建API，所以我们将从这个文件中获取数据。

我们的应用的基础组件是`index.js`。在这个文件中我们渲染了`App.js`，它位于public文件夹内的`index.html`内部，采用了**render**和 **getElementById**方法渲染 `App.js`用来配置路由。

同时，我们还添加了**NavBar**组件，让所有组件都可以访问到这个组件。

在**pages**目录中有三个文件=> `Home.js`、 `Posts.js`和`NotFound.js`。 `Home.js`用于展示`Home`组件，如果用户登陆到一个不存在的路由，会渲染`NotFound.js`。

`Posts.js`是一个父组件，从`db.json`文件获取数据，并将数据传递给`PostLists.js`，它位于**components**目录下。它是一个虚拟组件，仅用于渲染UI。从父组件(`Posts.js`)由props的形式获取数据，并以卡片的形式展示数据。

现在我们已经知道了应用的结构，让我们在这个基础上集成Flux。

## 集成Flux

使用以下命令行安装Flux：

```shell
npm install flux@3.1.3
```

为了集成Flux，需要把我们的应用分层四个小部分：

1.  派发器（Dispatcher）
2.  动作（Actions）
3.  数据（Stores）
4.  视图（View）

注意：完整的代码在这个[仓库](https://github.com/Sharvin26/DummyBlog)。

### 派发器（Dispatcher）

首先，我们在**src**目录下创建两个新的文件夹**actions**和**stores**。然后在同一个目录下创建`appDispatcher.js`。

**注意:**因为不是ReactJS的组件，现在开始所有和Flux相关的文件命名都为**驼峰式**。

进入`appDispatcher.js`，并复制以下代码：

```js
import { Dispatcher } from "flux";
const dispatcher = new Dispatcher();
export default dispatcher;
```

这里我们导入了flux库里的Dispatcher，创建了一个新的对象，并且导出这个对象，供action模块使用。

### 行为（Actions）

进入**actions**目录，创建`actionTypes.js`和`postActions.js`。 在`actionTypes.js`中，我们将定义被`postActions.js`和store模块引用的常量。

定义常量的原因是我们不想出现任何拼写错误，并不是强制要求这样做，但是这是一个推荐的办法。

```js
// actionTypes.js

export default {
    GET_POSTS: "GET_POSTS",
};

```

在`postActions.js`内，我们调用`db.json`数据，并使用dispatcher来派发。

```js
//postActions.js

import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../db.json";

export function getPosts() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
}
```

在上述代码中，我们引入了dispatcher对象，actionTypes常量和data。我们使用dispatch方法将数据发送到store。在我们的例子中的数据将以以下格式被发送：

```json
{
	actionTypes: "GET_POSTS",
    posts: [
        {
            "id": 1,
            "title": "Hello World",
            "author": "Sharvin Shah",
            "body": "Example of blog application"
        },
        {
            "id": 2,
            "title": "Hello Again",
            "author": "John Doe",
            "body": "Testing another component"
        }
    ]
}
```

### 数据（Stores）

现在我们需要创建作为**数组层**来存储文章的store。它内部包含一个**事件监听器**来告诉view发生了变化，并且会使用dispatcher的**register**获取action的数据。

导航到store目录，创建一个文件名为`postStore.js`的文件。首先我们导入Events包的**EventEmitter**，这个是NodeJS默认的方法，同时我们还将导入dispatcher对象和actionTypes常量文件。

```js
import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
```

我们将为**change**事件创建一个常量，还要创建一个变量来存储dispatcher传递过来的文章。

```js
const CHANGE_EVENT = "change";
let _posts = [];
```

现在我们编写一个由**EventEmitter**扩展而来的类，并在这个类中声明以下方法：

`addChangeListener`: 使用NodeJS的**EventEmitter.on**方法，添加一个change监听器接受回调函数作为参数。

`removeChangeListener`: 使用NodeJS的 **EventEmitter.removeListener**，当你再不需要监听一个事件，就可以使用这个方法。

`emitChange`: 使用NodeJS的**EventEmitter.emit**，每当变化发生，就发出这个变化。

这个类还将有一个方法叫做`getPosts`，会返回我们在类上面声明的`_posts`变量。

代码如下：

```js
class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPosts() {
        return _posts;
    }
}
```

现在我们为PostStore类创建`store`对象，并导出这个对象供view使用：

```js
const store = new PostStore();
```

接下来，我们使用dispatcher的**register**方法来接受Actions组件的负载。

我们使用`actionTypes`值来判断是什么action，以及需要处理的对应的数据。代码如下：

```js
dispatcher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_POSTS:
            _posts = action.posts;
            store.emitChange();
            break;
        default:
    }
});
```

导出这个对象以便其他的模块使用：

```js
export default store;
```

### 视图（View）

现在我们更新view，一旦文章页面加载，并且从postStore接受到负载就将事件发送到`postActions`。进入**pages**目录的`Posts.js`，你会看到**useEffect**方法内部的代码如下：

```js
useEffect(() => {
	setposts(data["posts"]);
}, []);
```

我们将改变useEffect读取和更新代码的方法，首先我们将使用来自postStore类的`addChangeListener`方法，并传入一个`onChange`回调。 将`posts`的状态设置为`postStore.js`文件中的`getPosts`方法的返回值。

一开始store会返回空数组，因为没有可用数据。我们调用`postActions.js`内的`_getPosts_`方法。这个方法会读取和传递数据。然后store发送数据，`addChangeListener`监听到变化，并使用`onChange`回调来更新`posts`的值。

这听起来有点让人困惑，没关系下面的流程图会让一切变得清晰。

![FluxBlogFlow-1](https://www.freecodecamp.org/news/content/images/2020/04/FluxBlogFlow-1.png)

更新`Posts.js`内的代码：

```js
import React, { useState, useEffect } from "react";
import PostLists from "../components/PostLists";
import postStore from "../stores/postStore";
import { getPosts } from "../actions/postActions";

function PostPage() {
    const [posts, setPosts] = useState(postStore.getPosts());

    useEffect(() => {
        postStore.addChangeListener(onChange);
        if (postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setPosts(postStore.getPosts());
    }

    return (
        <div>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;
```

在这段代码中我们删除了原有的导入，并且在回调函数中使用`setPosts`取代了使用useEffect方法获取数据。`return () => postStore.removeChangeListener(onChange);`用来在离开页面时删除监听器。

然后我们的博客页面就可以完全运作了。和之前的唯一区别是，之前我们使用**useEffect**获取数据，而现在我们是用action来读取数据，用store来存储数据，以及将数据传输到需要的组件中。

使用实际API时，您会发现应用程序从API加载一次数据并将其存储在store中。当我们重新访问同一页面时，你会发现不需要再次调用API。你可以在 Chrome开发者控制台的源选项卡进行监控。

介绍完毕。希望这篇教程可以帮助你对Flux有一个清晰的认识，以及日后你可以将其应用到你的项目中。

> 欢迎通过[Twitter](https://twitter.com/sharvinshah26)和[Github](https://github.com/Sharvin26)联系我。
