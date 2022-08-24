> -  原文地址：[How to Build Better APIs in Express with OpenAPI](https://www.freecodecamp.org/news/how-to-build-explicit-apis-with-openapi/)
> -  原文作者：[Alain PerkazAlain Perkaz](https://www.freecodecamp.org/news/author/aperkaz/)
> -  译者：HeZean
> -  校对者：

![如何用 OpenAPI 在 Express 中构建更好的 API](https://images.unsplash.com/photo-1546411649-8c3bb42e6008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDh8fGJ1aWxkfGVufDB8fHx8MTYxNzM5NDY2MQ&ixlib=rb-1.2.1&q=80&w=2000)

我将在这篇文章中分享在 Express 中构建鲁棒的 REST API 的方法。首先，我会介绍构建 REST API 的一些挑战，然后提出一个使用开放标准的解决方案。

本文并非一篇关于 [Node.js](https://nodejs.org/en/)、[Express.js](https://expressjs.com/) 或 [REST API](/news/rest-apis/) 的介绍。如果你需要复习，请在深入研究本文内容之前查看这些链接。🤿

我喜欢 Node.js 那极具灵活性和易用性的生态。这个社区充满活力，并且你可以用你已经掌握的语言在几分钟内设置一个 REST API。

在应用的前后端使用相同的编程语言是很有价值的。这使我们在浏览代码库时可以减少[上下文切换](https://blog.rescuetime.com/context-switching/)，从而变得更轻松。全栈开发者可以快速切换技术栈，[共享代码](https://betterprogramming.pub/sharing-logic-components-between-frontend-and-backend-repositories-6fdc1f9cb850)也变得轻而易举。

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

文档是构建 REST API 时的另一个敏感话题。我坚信在大多数情况下，代码应该作为足够的文档。

That said, REST APIs can grow in complexity, and checking the security, parameters, and possible responses for each endpoint in the code becomes tedious and time-consuming. This slows down the speed of development, and bugs creep into the system.

Even if the team is committed to manually keeping the documentation up to date in a separate document from the code, it's hard to be 100% certain that it reflects the code.

### 3\. 📢 Public APIs

This won't apply to all apps, but an application may need to expose a set of functionalities to a third party in some cases. When doing so, the third party may build core functionalities on top of our exposed APIs.

This means that we can't modify those APIs at the same rate that we update our private APIs. The third-party application may break, and that's something we should avoid at all costs.

What the public APIs expose should be explicit and simple to develop against, to limit the amount of back and forth communication needed between internal and external developer teams.

### 4\. ✍️ Manual integration tests

When applications grow organically without a thorough plan, the chances are high that what the API provides and what the API consumer expects is buried deep into the code.

This is not a big problem when you have a small number of endpoints for internal use. But as the API surface grows, modifying existing endpoints requires following breadcrumbs across the whole system to ensure that what the consumer expects to receive is equal to what's provided.

This can be mitigated by keeping integration tests between the parts of the system that talk to the REST API. But doing it manually is tremendous work and when done poorly, provides false security that the system will work properly.

## Proposed solution

We have seen some of the inherent challenges that come with building REST APIs. In the following section we will build an example Express project that addresses those challenges using open standards.

### API standard specification

The challenges described in the previous section have been around for a long time, so it pays off to look into existing solutions, instead of re-inventing the wheel.

There have been multiple attempts to standardize REST API definitions ([RAML](https://raml.org/), [JsonAPI](https://jsonapi.org/), [OpenAPI](https://www.openapis.org/)...). These projects have the shared goal making it easier for developers to define how their APIs behave, so servers and clients across multiple languages can 'speak a common language'.

Having some sort of formal specification of the API solves many of the challenges, since in many cases, client SDKs, tests, mock servers and documentation can be auto generated from those specifications.

One of my favorites is OpenAPI (formerly Swagger). It has a big community, and plenty of tooling for Express. This may not the be the best tool for every REST API project out there, so remember to do some extra research to make sure the tooling and support around the said specification makes sense in your case.

### Context for our example

For the sake of this example, let's suppose we are building a todo list management app. The user has access to a web app where they can fetch, create, edit and delete todos, which are persisted in the backend.

In this case, the backend will be an Express.js app that will expose over a REST API the following functionalities:

-   Fetch todos: **\[GET\] /todos**
-   创建待办事项：**\[POST\] /todos**
-   编辑待办事项：**\[PUT\] /todos/:id**
-   删除待办事项：**\[DELETE\] /todos/:id**

This is an over-simplification of the functionalities that a todo management app will need, but will serve to show how we can overcome the challenges presented above in a real context.

### Implementation

Great, now that we have introduced open standards for API definitions and a context, let's implement an Express todos app tackling the previous challenges.

We will be using an OpenAPI with the Express library [**express-openapi**](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi). Note that this library provides advanced functionalities (response validation, authentication, middleware setup...) beyond the scope of this post.

The complete code is available in **[this repository](https://github.com/aperkaz/express-open-api)**.

1.  Initialize a Express skeleton and initialize a Git repo:

```bash
npx express-generator --no-view --git todo-app
cd ./todo-app
git init
git add .; git commit -m "Initial commit";
```

2\. Add the OpenAPI Express library, **[express-openapi](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi)**:

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

3\. Add OpenAPI base schema.

Note that the schema defines the type of a **Todo**, which will be referenced in the route handlers.

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

4\. Add route [handlers](https://github.com/kogosoftwarellc/open-api/tree/master/packages/express-openapi#getting-started).

Each handler declares which operations it supports (GET, POST...), the callbacks for each operation, and the **apiDoc** OpenAPI schema for that handler.

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

5\. Add autogenerated documentation, **[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)**:

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

And here's what we'll get:

![](https://www.freecodecamp.org/news/content/images/2021/04/image-23.png)

Auto-generated SwaggerUi, at http://localhost:3030/api-documentation

🎉 **Congratulations!**

If you have made it this far, you should have a fully functioning Express application, fully integrated with OpenAPI.

Using the schema available in _[http://localhost:3030/api-docs](http://localhost:3030/api-docs)_ we can now easily generate [tests](https://nordicapis.com/generating-web-api-tests-from-an-openapi-specification/), a [mock server](https://github.com/stoplightio/prism), [types](https://github.com/drwpow/openapi-typescript) or even a [client](https://phrase.com/blog/posts/using-openapi-to-generate-api-client-code/)!

## 总结

We scratched only the surface of whats possible with OpenAPI. But I hope the article shed some light on how a standard API definition schema can help with visibility, testing, documentation, and overall confidence when building REST APIs.

Thanks for sticking around until the end!

I am currently building [__**taggr**__](https://taggr.ai/)_,_ a cross-platform desktop application that enables users to ****rediscover**** their digital ****memories**** while keeping their ****privacy****.

The open-alpha is coming soon to Linux, Windows, and Mac OS. Make sure to check the [webpage](https://taggr.ai/) and [signup](https://taggr.us18.list-manage.com/subscribe/post?u=482d473aa1e4dedadc89fb3e2&id=aa6a10c164) so you don't miss it!
