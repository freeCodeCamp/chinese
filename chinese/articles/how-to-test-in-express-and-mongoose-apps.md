> - 原文地址：[How to Test Your Express.js and Mongoose Apps with Jest and SuperTest](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/)
> - 原文作者：[Rakesh Potnuru](https://www.freecodecamp.org/news/author/rakesh/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Test Your Express.js and Mongoose Apps with Jest and SuperTest](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/how-to-write-tests.png)

测试是软件开发的重要组成部分。 越早进行越好。

在本文中，我将向您展示如何使用 **Jest** 和 **Supertest** 为您的 NodeJs/ExpressJS 和 MongoDB/Mongoose 应用程序编写测试。

## 开始

首先让我们做一个演示 Express.js 应用程序。

假设我们正在为电子商务应用程序构建一个后端 REST API。

这个应用程序：

- 获取所有产品
- 通过 id 获取产品
- 将产品添加到数据库
- 从数据库中删除产品
- 更新产品信息

## Express.js 应用设置

### Step 1: Project 设置

首先，创建一个文件夹，用`npm`启动一个空白应用程序。

```bash
npm init
```

填写它所要求的所有细节。

然后,通过下面的命令，安装 `express`, `mongoose`, `axios` 和 `dotenv`:

```bash
npm i express mongoose axios dotenv
```

下面是我在 GitHub 上的[package.json](https://github.com/itsrakeshhq/jest-tests-demo/blob/a1725cb3379f78a03cf8d3d4cfa22127469e8b50/package.json)的一个链接。

### Step 2: 创建模板

让我们创建所有的文件夹和文件，然后用一些模板代码填充它们。

你的文件夹层次结构应该是这样的:

```bash
.
├── controllers
│   └── product.controller.js
├── models
│   └── product.model.js
├── routes
│   └── product.route.js
├── package-lock.json
├── package.json
├── .env
├── app.js
└── server.js
```

package.json

通过复制和粘贴来使用这些文件的代码。你要尽可能地分析代码和流程。

- `[product.controller.js](https://github.com/itsrakeshhq/jest-tests-demo/blob/main/controllers/product.controller.js)`
- `[product.model.js](https://github.com/itsrakeshhq/jest-tests-demo/blob/main/models/product.model.js)`
- `[product.route.js](https://github.com/itsrakeshhq/jest-tests-demo/blob/main/routes/product.route.js)`
- `[app.js](https://github.com/itsrakeshhq/jest-tests-demo/blob/main/app.js)`
- `[server.js](https://github.com/itsrakeshhq/jest-tests-demo/blob/main/server.js)`

### Step 3: Database 设置

我建议为一个项目使用两个数据库--一个用于测试，另一个用于开发。但对于学习来说，只用一个数据库就足够了。

首先，创建一个[MongoDB](https://mongodb.com)账户或登录。

然后创建一个新的项目。给它起个名字，然后按 **Next** 按钮。

![Naming the project](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-205148.png)

为 project 命名

然后点击 **Create Project**。

我们必须在下面的窗口中通过选择一个云供应商、一个位置和规格来创建一个数据库。因此，按 **Build a Database** 就可以开始了。

![Build a database](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-205911.png)

创建一个 database

选择 "Shared"，因为它足以满足学习目的。然后点击 **Create**。

![Choose a deployment option](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-211701.png)

选择部署选项

下来，选择 `aws` 作为你的云供应商，并选择离你最近的地区。在你选择之后，点击 **Create Cluster**。

该集群的形成将需要一些时间。在此同时，创建一个用户来访问你的数据库。

![Create Superuser](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-212537.png)

创建 Superuser 用户

选择 "My Local Environment"，因为我们正在开发我们的应用程序。然后你可以添加一个 IP 地址。最后，点击**Close**。

![Add IP addresses](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-213347.png)

添加 IP 地址

数据库建立后，你会收到一个 URI 字符串，我们将用它来连接数据库。该字符串显示如下:

```bash
mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER_URL>/<DATABASE_NAME>?retryWrites=true&w=majority
```

把这个字符串放在`.env`文件中。

```bash
MONGODB_URI=your database string
```

现在我们准备开始测试我们的应用程序。

## 如何用 Jest 和 SuperTest 编写测试

### Step 1: 安装 npm 包

你需要三个 npm 包来开始编写测试。`jest`，`supertest`，和`cross-env`。你可以像这样安装它们。

```bash
npm i jest supertest cross-env
```

- `jest`: Jest 是一个测试 JavaScript 代码的框架。单元测试是它的主要用途。
- `supertest`: : 使用 Supertest，我们可以测试 HTTP 服务器上的端点和路由。
- `cross-env`: 你可以使用 cross-env 在命令中内联设置环境变量。

### Step 2: 添加测试命令

打开你的`package.json`文件，将测试命令添加到脚本中。

```json
"scripts": {
    "test": "cross-env NODE_ENV=test jest --testTimeout=5000",
    "start": "node server.js",
    "dev": "nodemon server.js"
},
```

在这个案例中，我们使用`cross-env`来设置环境变量，`jest`来执行测试套件，`testTimeout`被设置为`5000`，因为某些请求可能需要一段时间才能完成。

### Step 3: 开始编写测试代码

首先，在应用程序的根目录下创建一个名为`tests`的文件夹，然后在那里创建一个名为`product.test.js`的文件。当你执行 `npm run test` 时，Jest 会在项目的根目录下搜索 `tests` 文件夹。因此，你必须将你的测试文件放在`tests`文件夹中。

接下来，在测试文件中导入`supertest`和`mongoose`包。

```javascript
const mongoose = require("mongoose");
const request = require("supertest");
```

导入`dotenv`以加载环境变量，并导入`app.js`，因为那是我们的应用程序启动的地方。

```javascript
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();
```

你需要在每次测试前连接数据库和测试后断开数据库（因为测试完成后我们不需要数据库）。

```javascript
/* 在每次测试前连接到数据库。*/
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* 每次测试后关闭数据库连接。*/
afterEach(async () => {
  await mongoose.connection.close();
});
```

现在你可以写你的第一个单元测试。

```javascript
describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
```

在上面的代码中。

- 我们使用`describe`来描述单元测试。尽管它不是必需的，但它对于在测试结果中识别测试是很有用的。
- 在`it`中，我们写了实际的测试代码。在第一个参数中告诉测试执行的内容，然后在第二个参数中，写一个包含测试代码的回调函数。
- 在回调函数中，首先向端点（endpoint）发送请求，然后比较预期和实际的响应。如果两个答案都吻合，测试就通过，否则就失败。就这么简单✨。

你可以以同样的方式为所有的端点编写测试。

```javascript
describe("GET /api/products/:id", () => {
  it("should return a product", async () => {
    const res = await request(app).get(
      "/api/products/6331abc9e9ececcc2d449e44"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Product 1");
  });
});

describe("POST /api/products", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Product 2",
      price: 1009,
      description: "Description 2",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Product 2");
  });
});

describe("PUT /api/products/:id", () => {
  it("should update a product", async () => {
    const res = await request(app)
      .patch("/api/products/6331abc9e9ececcc2d449e44")
      .send({
        name: "Product 4",
        price: 104,
        description: "Description 4",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(104);
  });
});

describe("DELETE /api/products/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app).delete(
      "/api/products/6331abc9e9ececcc2d449e44"
    );
    expect(res.statusCode).toBe(200);
  });
});
```

然后运行`npm run test`来运行测试套件（套件-测试文件）。

![image-428](https://www.freecodecamp.org/news/content/images/2022/09/image-428.png)

测试结果

就这样了! 你现在知道如何用 Jest 和 SuperTest 来测试你的 Express/Mongoose 应用程序了。

现在去为你的应用程序创建新的测试吧！:)

如果你有任何问题，请随时在[Twitter](https://twitter.com/rakesh_at_tweet)上给我留言。
