> -  原文地址：[MVC in Computer Science – The MVC Model](https://www.freecodecamp.org/news/what-does-mvc-mean-in-computer-science/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：Papaya HUANG
> -  校对者：

![MVC in Computer Science – The MVC Model](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/mvc-cover.png)

MVC 是模型（Model）、视图（View）和控制器（Controller）的缩写。这一软件架构模式诞生于 20 世纪 70 年代后期，被用于创建桌面应用。当然现在这一模式也在 web 应用中被广泛使用。

我将在这篇文章中深入讲解什么是 MVC 以及它代表的三个组件。

我也准备了图片辅助你理解 MVC，不过咱还是先读文章，：）

## 目录

-   [什么是 MVC，为什么使用它？](#whatismvcandwhyisitused)
-   [哪些语言和框架使用 MVC？](#whichlanguagesandframeworksusemvc)
-   [MVC 中的模型是什么？](#whatisthemodelinmvc)
-   [MVC 中的视图是什么？](#whatistheviewinmvc)
-   [MVC 中的控制器是什么？](#whatisthecontrollerinmvc)
-   [总结](#conclusion)

<h2 id="whatismvcandwhyisitused"> 什么是MVC，为什么使用它?</h2>

在计算机科学中，MVC 是一种软件设计模式，这种模式将应用代码组织成三个相互交织的部分——模型、视图和控制器。

模型是与数据库交互的逻辑；视图是用户接口和交互，控制器是是视图和数据库之间的中介。

大多数情况下，视图不直接和模型交互——这个功能由控制器执行。

![mvc1](https://www.freecodecamp.org/news/content/images/2022/06/mvc1.png)

在其他一些框架中，模型与视图直接交互。
![Copy-of-mvc2](https://www.freecodecamp.org/news/content/images/2022/06/Copy-of-mvc2.png)

MVC 设计模式旨在将应用代码分成各自的单位，来简化维护和优化。这种方式被称为“关注点分离”。

<h2 id="whichlanguagesandframeworksusemvc"> 哪些语言和框架使用MVC？</h2>

过去，MVC 仅被用于桌面(GUI)[https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2]，现在许多语言和框架也使用 MVC 来设计 web 应用。

一些框架甚至强制使用 MVC，所以你可能没意识到你已经使用过 MVC。

例如在一个全栈 Express 应用中，开发者往往把代码打包到模型、控制器和客户（视图）三个文件夹。
![Annotation-2022-06-20-103520](https://www.freecodecamp.org/news/content/images/2022/06/Annotation-2022-06-20-103520.png)

截图是我为我最喜欢的足球运动员编写的[玩笑生成器](https://blooming-reef-46396.herokuapp.com/)的文件结构。

使用 MVC 的编程语言包括：C、 C++、C#、 Java、 Ruby、 Smalltalk 等。

使用 MVC 的框架包括：Angular、 Express、 Django、 Flask、 Laravel、 Ruby on rails 等。

<h2 id="whatisthemodelinmvc">MVC中的模型是什么？</h2>

模型组件负责从数据库获取数据的逻辑。同样，你也可以使用 JSON 文件来提供数据。

例如，如果有一个电子商务应用的 SQL 数据库，模型的代码可能是`product-data = db.get(SELECT * FROM products;`。

在大多数情况下，模型和控制器沟通，然后给视图（UI）发送数据；另一些情况下，模型直接给视图发送数据。

<h2 id="whatistheviewinmvc"> MVC中的视图是什么？</h2>

视图组件是直接和用户交互的组件，视图与控制器沟通用户通过鼠标或者键盘发出的请求。

如 HTML、CSS 和 JavaScript 这类语言经常用于编写视图组件。你也可以使用 React、Vue 和 Svelte 这类框架。

一些开发者也会使用如：Handlebars、ejs 和 liquidjs 这类模板引擎来执行视图。

在电商应用中，视图组件的代码如下：

```js
<h1>{{product.name}}</h2>
<ul>
<p>{{product.description}}</p>
<p>{{product.delivery-modes}}</p>
```

<h2 id="whatisthecontrollerinmvc"> MVC中的控制器是什么？</h2>

控制器组件是连接模型和视图的中介。它既不是模型也不是视图，而是链接这两者的部分。

控制器的工作是接受和处理视图（UI）的请求和行为。 所以会处理`GET`、`POST`、`PUT` 或`PATCH`和`DELETE`请求。

当控制器收到用户请求时，会和模型沟通用户需要什么，然后返回响应给视图（UI）供用户使用。

以下是控制器会执行的伪代码：

```
if (success) {
      show products;
} else {
      show error;
}
```

<h2 id="conclusion">总结</h2>

在 web 应用和其他软件产品中 MVC 模式被广发使用。

可能刚接触 MVC 时你会觉得困惑，但是持续学习一段时间，之后你一定会豁然开朗。

如果你仍对 MVC 感到困惑，你可以这样类比：

-   **你**打电话给餐厅点了一份披萨 – 你是`view`
-   你向**服务员**点单 – 服务员是`controller`
-   服务员从**披萨店**拿到披萨并送给你 – 披萨店是`model`

你会发现你作为`view`不直接去披萨店拿披萨，就像在大多数情况下视图从不直接从模型获取数据。

感谢阅读。
