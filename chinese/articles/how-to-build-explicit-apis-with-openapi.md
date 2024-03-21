> -  原文地址：[How to Build Better APIs in Express with OpenAPI](https://www.freecodecamp.org/news/how-to-build-explicit-apis-with-openapi/)
> -  原文作者：[Alain PerkazAlain Perkaz](https://www.freecodecamp.org/news/author/aperkaz/)
> -  译者：HeZean
> -  校对者：

![如何用 OpenAPI 在 Express 中构建更好的 API](https://images.unsplash.com/photo-1546411649-8c3bb42e6008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDh8fGJ1aWxkfGVufDB8fHx8MTYxNzM5NDY2MQ&ixlib=rb-1.2.1&q=80&w=2000)

我将在这篇文章中分享在 Express 中构建鲁棒的 REST API 的方法。首先，我会介绍构建 REST API 的一些挑战，然后提出一个使用开放标准的解决方案。

本文并非一篇关于 [Node.js](https://nodejs.org/en/)、[Express.js](https://expressjs.com/) 或 [REST API](/news/rest-apis/) 的介绍。如果你需要复习，请在深入研究本文内容之前查看这些链接。🤿

我喜欢 Node.js 那极具灵活性和易用性的生态。这个社区充满活力，并且你可以用你已经掌握的语言在几分钟内设置一个 REST API。

在应用的前后端使用相同的编程语言是一件很有价值的事。这使我们在浏览代码库时可以减少[上下文切换](https://blog.rescuetime.com/context-switching/)，从而变得更轻松。全栈开发者可以快速切换技术栈，[共享代码](https://betterprogramming.pub/sharing-logic-components-between-frontend-and-backend-repositories-6fdc1f9cb850)也变得轻而易举。

尽管如此，随着 MVP 成长为成熟的生产环境应用程序和开发团队规模的扩大，这种灵活性也带来了挑战。

## 使用 REST API 的挑战

无论你使用哪种技术栈，当代码库和团队规模增长时，都会面临许多挑战。

在本文中，我将描述通过 REST API 暴露业务逻辑的 Express.js 应用程序所带来的挑战，以小见大。

无论 API 消费者的性质如何（网页、移动应用、第三方后端），随着他们的成长，他们都可能面临以下一个（或多个）挑战：

### 1\. ⚠️ 更难做出改变

在文档不够明确时，在 REST API 的任何一方进行修改都变得更加困难。

举个例子，假设你有一个 REST 端点，可以返回一个特定的用户的名字。在即将新增的功能中，你可能需要修改这个 API 使其返回年龄。这可能会潜在地破坏网络应用和移动应用。

你可以设置集成测试来一定程度上避免这个问题，但你仍然会严重依赖开发人员来手动覆盖所有的边界情况。这需要大量的时间和精力，而且你永远无法 100% 确定这些变化不会破坏应用程序。

### 2\. 📜 缺少（及时更新的）文档

文档是构建 REST API 时的另一个敏感话题。我坚信在大多数情况下，代码本身应该足以代替一部分文档。

也就是说，REST API 在开发中会变得越来越复杂，检查代码中每个端点的安全性、参数和可能的响应也随之变得繁琐且耗时。这就减慢了开发的速度，也给 bug 进入系统留下了隐患。

即使团队致力于在一个独立于代码的文档中手动保持文档的更新，也很难 100% 确保它反映了代码的情况。

### 3\. 📢 公共 API

这并不适用于所有的应用程序，但在某些情况下，一个应用程序可能需要向第三方暴露一系列的功能。对于这种情况，第三方有可能会在我们暴露的 API 之上构建核心功能。

这意味着我们不能以更新我们的私有 API 的同样速度来修改这些公共 API。一旦修改了公共 API，第三方应用程序可能会因此崩溃，而这正是我们应该不惜一切代价避免的事情。

公共 API 所暴露的内容应该是明确的，并且可以简单地进行开发，以限制内部和外部开发团队之间所需的来回沟通的数量。

### 4\. ✍️ 手动集成测试

当应用程序的开发没有与之匹配的周密计划时，很有可能 API 所提供的内容和 API 消费者期望的内容被深埋在代码中。

对于仅有少量的内部端点的系统来说，这并不是一个大问题。但随着 API 接口数量的增长，修改现有的端点需要在整个系统中遵循面包屑，以确保消费者期望得到的东西与提供的东西是相等的。

这个问题可以通过对系统的不同部分之间进行集成测试来缓解。但是人工完成这件事的工作量非常巨大的，并且如果没做好的话，可能会在系统实际上不能正常工作的时候让开发人员误以为系统状态良好。

## 提出的解决方案

我们已经看到了构建 REST API 所带来的固有挑战。在下一节中，我们将使用开放标准构建一个示例 Express 项目，以解决这些挑战。

### API 标准规范

前面部分描述的挑战已经存在很长时间了，所以面对这个问题，我们最好查看现有的解决方案，而不是重新发明轮子。

许多标准尝试对 REST API 进行规范化定义（[RAML](https://raml.org/)、[JsonAPI](https://jsonapi.org/)、[OpenAPI](https://www.openapis.org/)...）。这些项目的共同目标是使开发人员更容易定义他们的 API 行为，以便跨多种语言的服务器和客户端能够“共说一种语言”。

有了某种形式的 API 规范，可以解决许多挑战，因为在许多情况下，可以从这些规范自动生成客户端 SDK、测试、模拟服务器和文档。

一种我最喜欢的规范是 OpenAPI (原名 Swagger)。它有一个很大的社区，并且有很多用于 Express 的工具。这可能不是所有 REST API 项目中的最佳工具，因此请在为你自己的项目选择规范之前进行额外的研究，以确保该规范的工具和支持对你的项目有帮助。

### 示例的背景

在这个示例中，假设我们正在构建一个待办事项列表管理应用。用户可以通过访问一个 web 应用来获取、创建、编辑和删除待办事项，这些待办事项被保存在后端。

在这个例子中，后端使用一个 Express.js 应用程序，它将通过 REST API 暴露以下功能：

-   获取待办事项: **\[GET\] /todos**
-   创建待办事项：**\[POST\] /todos**
-   编辑待办事项：**\[PUT\] /todos/:id**
-   删除待办事项：**\[DELETE\] /todos/:id**

对于一个真实的待办事项管理应用来说，上面的功能有点过度简化，但这有助于展示我们如何在实际情况下克服上面提出的挑战。

### 实现

很好，现在我们已经介绍了 API 定义的开放标准和背景，让我们来实现一个 Express 待办事项应用，演示怎么解决前面的挑战。

我们将使用 Express 库 [**express-openapi**](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi) 的 OpenAPI。请注意，这个库提供的高级功能（响应验证、认证、中间件设置……）超出了本文的范围。

你可以在**[这个仓库](https://github.com/aperkaz/express-open-api)**中找到演示的完整代码。

1. 初始化一个 Express 框架，并初始化一个 Git 仓库：

```bash
npx express-generator --no-view --git todo-app
cd ./todo-app
git init
git add .; git commit -m "Initial commit";
```

2. 将 **[express-openapi](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi)** 引入我们的程序：

`npm i express-openapi -s`

```javascript
// ./app.js

...

app.listen(3030);

...

// OpenAPI routes
initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

module.exports = app;
```

3. 添加 OpenAPI 基础模型。

请注意，模型中定义了 **Todo** 的类型，将在路由处理程序中引用。

```javascript
// ./api/api-doc.js

const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "Todo app API.",
    version: "1.0.0",
  },
  definitions: {
    Todo: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        message: {
          type: "string",
        },
      },
      required: ["id", "message"],
    },
  },
  paths: {},
};

module.exports = apiDoc;
```

4. 添加路由[处理程序](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi#getting-started)。

每个处理程序都声明它支持哪些操作（GET、POST ...），对每个操作的回调，以及该处理程序的 **apiDoc** OpenAPI 模型。

```javascript
// ./api/paths/todos/index.js
module.exports = function () {
  let operations = {
    GET,
    POST,
    PUT,
    DELETE,
  };

  function GET(req, res, next) {
    res.status(200).json([
      { id: 0, message: "First todo" },
      { id: 1, message: "Second todo" },
    ]);
  }

  function POST(req, res, next) {
    console.log(`About to create todo: ${JSON.stringify(req.body)}`);
    res.status(201).send();
  }

  function PUT(req, res, next) {
    console.log(`About to update todo id: ${req.query.id}`);
    res.status(200).send();
  }

  function DELETE(req, res, next) {
    console.log(`About to delete todo id: ${req.query.id}`);
    res.status(200).send();
  }

  GET.apiDoc = {
    summary: "Fetch todos.",
    operationId: "getTodos",
    responses: {
      200: {
        description: "List of todos.",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/Todo",
          },
        },
      },
    },
  };

  POST.apiDoc = {
    summary: "Create todo.",
    operationId: "createTodo",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "todo",
        schema: {
          $ref: "#/definitions/Todo",
        },
      },
    ],
    responses: {
      201: {
        description: "Created",
      },
    },
  };

  PUT.apiDoc = {
    summary: "Update todo.",
    operationId: "updateTodo",
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
      {
        in: "body",
        name: "todo",
        schema: {
          $ref: "#/definitions/Todo",
        },
      },
    ],
    responses: {
      200: {
        description: "Updated ok",
      },
    },
  };

  DELETE.apiDoc = {
    summary: "Delete todo.",
    operationId: "deleteTodo",
    consumes: ["application/json"],
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Delete",
      },
    },
  };

  return operations;
};
```

5. 添加自动生成的文档，**[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)**：

```bash
npm i swagger-ui-express -s
```

```javascript
// ./app.js

...

// OpenAPI UI
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "http://localhost:3030/api-docs",
    },
  })
);

module.exports = app;
```

这就是我们最终获得的效果：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-23.png)

这个 SwaggerUi 是自动生成的，你可以在 http://localhost:3030/api-documentation 访问它。

🎉 **恭喜！**

当你进行到文章的这里时，你应该创建好了一个完全可运行的 Express 应用程序，其与 OpenAPI 完全集成。

现在，通过使用在 _[http://localhost:3030/api-docs](http://localhost:3030/api-docs)_ 中定义的模型，我们可以轻松生成[测试](https://nordicapis.com/generating-web-api-tests-from-an-openapi-specification/)、[模拟服务器](https://github.com/stoplightio/prism)、[类型](https://github.com/drwpow/openapi-typescript)，甚至[客户端](https://phrase.com/blog/posts/using-openapi-to-generate-api-client-code/)！

## 总结

我们只是浅浅涉猎了 OpenAPI 所能做到的事情。但是我希望这篇文章能够让你了解标准 API 定义模式是如何在可见性、测试、文档和整体置信度方面帮助构建 REST API 的。

谢谢你看到最后！

我目前正在构建 [__**taggr**__](https://taggr.ai/)，这是一个跨平台的桌面应用程序，它在帮助用户**重新发现**他们的数字记忆的同时保持他们的**隐私**。

Linux、Windows 和 macOS 平台上的 alpha 版本即将推出。请查看[网页](https://taggr.ai/)并[登记](https://taggr.us18.list-manage.com/subscribe/post?u=482d473aa1e4dedadc89fb3e2&id=aa6a10c164)，以免错过！
