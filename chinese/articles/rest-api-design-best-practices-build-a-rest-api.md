> -  原文地址：[REST API Design Best Practices – How to Build a REST API with JavaScript, Node.js, and Express.js](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)
> -  原文作者：[Jean-Marc Möckel](https://www.freecodecamp.org/news/author/jeanmarcmoeckel/)
> -  译者：Papaya HUANG
> -  校对者：

![REST API Design Best Practices – How to Build a REST API with JavaScript, Node.js, and Express.js](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/rest-api-design-course-header.png)

在过去几年我创建和使用过不少API，期间我遇到过优秀的实践方式，也遭遇过极其不好的实践方式，但曙光总是存在。

网上有许多优秀实践相关的文章，但是他们大多数都缺乏现实经验。通过一些例子来了解理论是一个好办法，但是我一直都在思考如何用现实世界的例子来展现API的应用。

简单的例子确实可以帮助概念的理解，也省去了复杂度。但实际情况往往并不简单，我确信你对此也深有体会。 😁

这就是我决定写这个教程的原因。我讲过去好的坏的学习经验都融入了这个易读的文章中，并提供伴随例子。读完整片文章，我们就会通过一个又一个最佳实践来创建一个完整的API。

开始之前的注意事项：

最佳实践如你所想并不是具体的必须遵从的规则。它们是随着时间的推移人们总结出来的有效的惯例，有一些确实成为现在的标准，但这并不意味着你需要百分之一百的采用这些实践。

最佳实践应该告诉你如何使得API更加符合用户的使用习惯（消费者和其他工程师）、更加安全和提高性能。

请记住项目各不相同，使用的方法也各不相同。肯定会有一些情况下你无法遵守这些规范，每一个工程师都应该自己决定使用什么方法。

话不多说，让我们开始吧！

## 目录

-   [示例项目](#our-example-project)
    -   [前提条件](#prerequisites)
    -   [架构](#architecture)
    -   [基础设置](#basic-setup)
-   [REST API最佳实践](#rest-api-best-practices)
    -   [版本](#versioning)
    -   [用复数形式命名资源](#name-resources-in-plural)
    -   [通过JSON格式接受和响应数据](#accept-and-respond-with-data-in-json-format)
    -   [处理HTTP标准代码错误](#respond-with-standard-http-error-codes)
    -   [在终点避免使用动词](#avoid-verbs-in-endpoint-names)
    -   [帮相关资源放在一起](#group-associated-resources-together-logical-nesting-)
    -   [集成过滤排序和分页功能](#integrate-filtering-sorting-pagination)
    -   [使用数据缓存提升性能](#use-data-caching-for-performance-improvements)
    -   [好的安全实践](#good-security-practices)
    -   [API编写合适的文档](#document-your-api-properly)
-   [总结](#conclusion)

<h2 id="our-example-project">示例项目</h2>

![alvaro-reyes-qWwpHwip31M-unsplash--1-](https://www.freecodecamp.org/news/content/images/2022/04/alvaro-reyes-qWwpHwip31M-unsplash--1-.jpg)

图片作者[Alvaro Reyes](https://unsplash.com/@alvarordesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)来自[Unsplash](https://unsplash.com/s/photos/project?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

在正式开始在示例中应用最佳实践前，我先简单介绍一下我们要创建什么。

我们将为CrossFit训练应用创建REST API。如果你不熟悉CrossFit，它是一种健身方式，融合了竞争类运动和高强度训练，包含了各种各样的运动（奥林匹克举重、体操等）。

在这个应用中，我们将创建、读取、更新和删除**WOD**'s(**W**orkout **o**f the **D**ay应用名称)。该应用将帮助用户（健身馆主）指定和维护已有的健身计划。除此之外，还可以在一些重要的训练旁批注一些小建议。

我们的国内工作就是设计和部署这个应用的API。

<h3 id="prerequisites">前提条件</h3>

在学习这门教程之前，你必须有JavaScript， Node.js， Express.js以及后端架构的经验，REST和API这类属于对于你来说是熟悉的，并且你了解[主从式架构](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)。

当然你不需要时这些话题的专家，熟悉并且有这些内容的实际工作经验就足够了。

如果这些都不符合你的话，当然也不是不看这篇教程的理由。你还是可以从这篇文章中学到很多东西，但是如果有这些技能的话可以帮助你更轻松地阅读这篇文行。

虽然虽然这里的API是用JavaScript和Express写的，但不表示这些最佳实践仅适用于这些工具。可以在其他的编程语言和框架中应用这些最佳实践。

<h3 id="architecture">架构</h3>

就向前面说的那样，我会是用Express.js来搭建API。我不想使用太复杂的架构，所以我会使用 **3层结构:**

![Bildschirmfoto-2022-04-25-um-14.33.24-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-25-um-14.33.24-1.png)

在 **控制层** 我们将处理所有HTTP相关的内容，也就是说我们在这里处理终点的请求和回应。在这层之上时 Express的**路由**把请求传递给相应的控制器。

所有业务逻辑都在**服务层**，服务层会暴露特定服务（方法）供控制层使用。

第三层是 **数据通过层**， 在这里处理数据库。我们将导出一些处理数据的方法，如创建WOD，供服务层使用。

在这个例子中，我们不会使用 _真实的_ 数据哭如MongoDB或者PostgreSQL，因为我想专注于最佳实践本身。因此我们会使用到本地的JSON文件来模拟数据库。但是的使用逻辑可以应用到其他的数据库。

<h3 id="basic-setup">基础设置</h3>

现在我们开始创建API的基础设置。我们不用把事情复杂化，我们只创建一个简单有组织的架构。

首先，我们创建一个总文件目录结构，包含所有必须的文件和依赖项。创建完了之后，我们将快速地检查一下一切是否正常运行。

```bash
# 创建项目文件夹并且打开这个文件夹
mkdir crossfit-wod-api && cd crossfit-wod-api
```

```bash
# 创建src文件夹并打开这个文件夹
mkdir src && cd src
```

```bash
# 创建子文件夹
mkdir controllers && mkdir services && mkdir database && mkdir routes
```

```bash
# 创建index文件（API接入点）
touch index.js
```

```bash
# 我们现在在src文件夹，所以要返回一级
cd .. 

# 创建package.json文件
npm init -y
```

安装基础设置的所有依赖项：

```bash
# 开发依赖项
npm i -D nodemon 

# 依赖项 
npm i express
```

在你最喜欢使用的文字处理器中打开我们的项目，然后配置Express：

```javascript
// 在src/index.js中
const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// 供测试用代码
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
```

在package.json中添加 **"dev"** 脚本：

```json
{
  "name": "crossfit-wod-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}
```

nodemon可以确保每次你保存更改的时候，重新启动开发服务器。

启动开发服务器：

```bash
npm run dev
```

查看控制台，会收到消息 **"API is listening on port 3000"**。

在浏览器中打开 **localhost:3000**。如果一切设置正确，你会看到下面内容：

![Bildschirmfoto-2022-04-30-um-11.09.44](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-11.09.44.png)

太好了！我们已经设置好应用最佳实践的环境。

<h2 id="rest-api-best-practices">REST API最佳实践</h2>

![constantin-wenning-idDvA4jPBO8-unsplash--1-](https://www.freecodecamp.org/news/content/images/2022/04/constantin-wenning-idDvA4jPBO8-unsplash--1-.jpg)

Photo by [Constantin Wenning](https://unsplash.com/@conniwenningsimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/handshake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

很好！我们已经做好了基础的Express设置，现在我们可以根据最佳实践来扩展API了。

我们从最简单的基础CRUD终点开始，之后我们将使用最佳实践来扩展API。

<h3 id="versioning">版本</h3>

稍等一下。在我们编写具体的API代码之前，我们要关注一下版本。和其他所有应用一样，我们的API也需要迭代、更新功能……，所以给我们的API制定版本十分重要。

这样做最大的优势是当我们在创建新功能的时候并不影响客户在旧版本上继续使用。

我们并不强迫用户直接使用我们的新版本，用户可以继续使用老的版本，直到新版本稳定后再迁移到新版本。

当下版本和新版本同时运行互不干扰。

那我们如何区分不同的版本呢？一种不错的做法是在URL添加**v1****v2**这样的路径段。

```javascript
// Version 1 
"/api/v1/workouts" 

// Version 2 
"/api/v2/workouts" 

// ...
```

这就是我们暴露给外部世界，以及其他开发者也可以使用的。同时，我们也需要一个项目架构来区分不同的版本。

管理Express API版本的方法各式各样。本教程中我将在**src**目录下创建一个版本文件夹，如**v1**：

```bash
mkdir src/v1
```

现在我们讲路由文件夹移动到新的v1目录下：

```bash
# 获取当前路径（复制）
pwd 

# 讲“routes”添加到“v1” （使用{pwd}插入新的路径）
mv {pwd}/src/routes {pwd}/src/v1
```

新目录 **/src/v1/routes** 将存储版本1.0的所有路由。之后我们会在里面添加“真实”的内容，但现在我们简单添加一个**index.js**文件来简单测试一下。

```bash
# 在/src/v1/routes 
touch index.js
```

我们开启一个简单的路由：

```javascript
// 在 src/v1/routes/index.js
const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;
```

现在我们将在v1内部的根入口点src/index.js接上路由：

```javascript
// 在src/index.js
const express = require("express");
// *** 添加 ***
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** 删除 ***
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

// *** 添加 ***
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
```

再登陆浏览器浏览**localhost:3000/api/v1**，你会看到以下画面：

![Bildschirmfoto-2022-04-30-um-11.22.28](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-11.22.28.png)

祝贺你！你已经架构好了项目的不同版本。现在我们通过版本1.0的路由来传入请求，之后每一个请求会连接相应的控制方式。

再继续下一步之前，我想强调一些内容。

我们把路由文件夹迁移到了v1目录下，其他文件夹如控制器和服务器仍在src目录下。因为我们搭建的API比较小，所以这么做没有问题，每一个版本我们使用相同的控制器和服务器。

当API逐渐壮大，比方说2.0版本需要使用不同的控制方法的话，最好还是把控制器文件夹放在v2目录下，这样就打包了这个版本所有的特定逻辑。

另一个这样做的原因是，我们可能在其他版本中想要改变某个服务器，但我们并不想要中断除此之外的版本。所以把服务器文件夹也迁移到特定版本文件夹是一个推荐的操作。

如果所讲，在我们的例子当中仅区分路由是可行的。尽管如此。切记当API壮大需要改变的时候，拥有一个清晰的架构十分重要。

<h3 id="name-resources-in-plural">用复数形式命名资源</h3>

设置完毕后我们就进入了真正的API搭建了。我希望从基础的CRUD终点开始。

也就是说，我们从应用创建、读取、更新和删除训练终点开始。

首先，让我们为训练连接一个特定的控制器、服务器和路由

```bash
touch src/controllers/workoutController.js 

touch src/services/workoutService.js 

touch src/v1/routes/workoutRoutes.js
```

我通常喜欢从编写路由开始。让我们思考一下如何给终点命名。这里就会使用到最佳实践。

我们可以将终点命名为 **/api/v1/workout**，因为我们只添加一个训练计划，对不对？虽说这样做没什么问题，但是这样会造成误解。

谨记：你的API会被其他的人类使用，所以必须精准。这同样适用于给你的资源命这一方面。

我通常会把资源看作一个盒子。在我们的例子中，这个盒子存储了各种各样的 **训练计划**。

将资源以复数形式命名最大的好处是这对于其他用户来说也清晰易懂，复数意味着这是一个包含了各种各样训练的合集。

所以，让我们之后再再训练路由中定义终点：

```javascript
// 在 src/v1/routes/workoutRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all workouts");
});

router.get("/:workoutId", (req, res) => {
  res.send("Get an existing workout");
});

router.post("/", (req, res) => {
  res.send("Create a new workout");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing workout");
});

module.exports = router;
```

我们可以删除 **src/v1/routes**中的**index.js**文件。

现在让我们回到入口点连接版本1.0的路由。

```javascript
// 在 src/index.js
const express = require("express");
// *** 删除 ***
const v1Router = require("./v1/routes");
// *** 添加 ***
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** 删除 ***
app.use("/api/v1", v1Router);

// *** 添加 ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
```

进展的很顺利！现在我们就可以通过版本1.0的训练路由捕获到来自 **/api/v1/workouts**的所有请求。

在路由当中，我们讲调用另一个方法来使用控制器处理各种各样的终点。

让我们为每一个终点创建一个方法。现阶段只需要可以发送返回一个信息。

```javascript
// 在 src/controllers/workoutController.js
const getAllWorkouts = (req, res) => {
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

现在可以重构一下训练路由，使用控制器方法：

```javascript
// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
```

现在可以测试 **GET /api/v1/workouts/:workoutId** 终点，在浏览器输入 **localhost:3000/api/v1/workouts/2342** ，你会看到以下信息：

![Bildschirmfoto-2022-04-30-um-11.29.19](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-11.29.19.png)

我们成功了！架构的第一层就搭建完毕。让我们用另个最佳实践来创建服务层。

<h3 id="accept-and-respond-with-data-in-json-format">通过JSON格式接受和响应数据</h3>

和API交互的时候，我们始终会通过请求发送特定数据，或者通过响应接受数据。市面上有各种各样的数据格式，但是JSON（JavaScript Object Notation）是一个标准格式。

虽然在JSON的全称中有 **JavaScript** ，但两者并没有绑定。你也可以使用Java或者Python来编写你的API，来处理JSON。

由于这样的标准化，API应该接受和响应JSON格式的数据。

让我们回到我们的代码，看看如何把这一点融入到我们的最佳实践。

首先，我们常见服务层。

```javascript
// 在src/services/workoutService.js
const getAllWorkouts = () => {
  return;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = () => {
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

将服务方法和控制器方法命名为一样的名字也是一种最佳实践，这样可以让两者保持一定关联。让我们先不返回任何东西。

在训练软件的控制器中，我们使用了这些方法：

```javascript
// 在src/controllers/workoutController.js
// *** 添加 ***
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  // *** 添加 ***
  const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  // *** 添加 ***
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  // *** 添加 ***
  const createdWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  // *** 添加 ***
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  // *** 添加 ***
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

现在我们不需要改变响应中的任何内容，但是控制器已经可以和服务层联通了。

在服务的方法中，我们处理了商务逻辑，如改变数据结构。

为此我们需要一个数据库和一组处理与数据库交互的方法。我们的数据库将为简单的提前编写好一些健身计划的JSON文件。

```bash
# 在src/database中创建一个新的名为 db.json的文件
touch src/database/db.json 

# 在/src/database中创建一个存储所有训练细节的训练文件
touch src/database/Workout.js
```

将这些内容复制粘贴到db.json:

```json
{
  "workouts": [
    {
      "id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
      "name": "Tommy V",
      "mode": "For Time",
      "equipment": [
        "barbell",
        "rope"
      ],
      "exercises": [
        "21 thrusters",
        "12 rope climbs, 15 ft",
        "15 thrusters",
        "9 rope climbs, 15 ft",
        "9 thrusters",
        "6 rope climbs, 15 ft"
      ],
      "createdAt": "4/20/2022, 2:21:56 PM",
      "updatedAt": "4/20/2022, 2:21:56 PM",
      "trainerTips": [
        "Split the 21 thrusters as needed",
        "Try to do the 9 and 6 thrusters unbroken",
        "RX Weights: 115lb/75lb"
      ]
    },
    {
      "id": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "name": "Dead Push-Ups",
      "mode": "AMRAP 10",
      "equipment": [
        "barbell"
      ],
      "exercises": [
        "15 deadlifts",
        "15 hand-release push-ups"
      ],
      "createdAt": "1/25/2022, 1:15:44 PM",
      "updatedAt": "3/10/2022, 8:21:56 AM",
      "trainerTips": [
        "Deadlifts are meant to be light and fast",
        "Try to aim for unbroken sets",
        "RX Weights: 135lb/95lb"
      ]
    },
    {
      "id": "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7",
      "name": "Heavy DT",
      "mode": "5 Rounds For Time",
      "equipment": [
        "barbell",
        "rope"
      ],
      "exercises": [
        "12 deadlifts",
        "9 hang power cleans",
        "6 push jerks"
      ],
      "createdAt": "11/20/2021, 5:39:07 PM",
      "updatedAt": "11/20/2021, 5:39:07 PM",
      "trainerTips": [
        "Aim for unbroken push jerks",
        "The first three rounds might feel terrible, but stick to it",
        "RX Weights: 205lb/145lb"
      ]
    }
  ]
}
```

可以看到上面添加了三组训练计划。每组训练计划包含id, name, mode, equipment, exercises, createdAt, updatedAt和trainerTips。

我们从最简单的开始，返回所有存储的训练计划，在访问数据层建立对应的方法(src/database/Workout.js)。

在这里我也使服务层和控制层的命名相同，这完全是任选的。

```javascript
// 在src/database/Workout.js
const DB = require("./db.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };
```

跳回到训练计划服务层，并且应用**getAllWorkouts**的逻辑。

```javascript
// 在src/database/workoutService.js
// *** 添加 ***
const Workout = require("../database/Workout");
const getAllWorkouts = () => {
  // *** 添加 ***
  const allWorkouts = Workout.getAllWorkouts();
  // *** 添加 ***
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = () => {
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

返回所有的训练计划十分简单，我们不现在不需要改变数据格式，因为数据已经是一个JSON文件了。同时，我们也不需要传入参数，现在做的事情非常简单直白，待会儿我们会重新回到这里。

在我们的训练计划控制层，已经接受到了 `workoutService.getAllWorkouts()`的返回值并且发送给客户端一个返回值。我们在服务器和控制层之间循环数据。

```javascript
// 在src/controllers/workoutControllers.js
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  // *** 添加 ***
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

在浏览器访问 **localhost:3000/api/v1/workouts**，你将看到响应的JSON。

![Bildschirmfoto-2022-04-30-um-11.38.14](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-11.38.14.png)

一切都进展得很顺利，我们将数据以JSON的形式返回。但如何接受这些数据呢？假设我们需要一个终点来接受来自客户端的JSON，需要从客户端创建和更新训练数据。

在控制器中，我们提取了请求体来创建一个新的训练，并传入训练服务器。在训练服务器中，我们插入了DB.json并且将新创建的训练返回到客户端。

要在请求体中解析JSON，我们需要首先安装**body-parser**并配置。

```bash
npm i body-parser
```

```javascript
// 在src/index.js中
const express = require("express");
// *** 添加 ***
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** 添加 ***
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
```

现在我们就可以控制器的在 **req.body.**中接受JSON格式的数据。

可以打开你最喜欢的HTTP服务器（我使用的是Postman）来进行测试，创建一个路由为localhost:3000/api/v1/workouts的POST请求，并且将请求体设置为JSON格式：

```javascript
{
  "name": "Core Buster",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}
```

你可以注意到了，如"id"、"createdAt"、"updatedAt"这些属性不存在。这些属性会通过API在插入前添加。我们会在训练服务器中处理相关内容。

在训练控制器的 **createNewWorkout** 方法中，我们可以在请求体中提取body，并做一些验证，并作为参数传入训练服务器。

```javascript
// In src/controllers/workoutController.js
...

const createNewWorkout = (req, res) => {
  const { body } = req;
  // *** 添加 ***
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  // *** 添加 ***
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  // *** 添加 ***
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  // *** 添加 ***
  res.status(201).send({ status: "OK", data: createdWorkout });
};

...
```

通常提高请求验证质量的方式是使用第三方包，如：[express-validator](https://express-validator.github.io/docs/).

让我们打开训练服务器，接受来自createdNewWorkout方法传入的数据。

之后我们将缺失的属性传入对象，传入数据访问层的新方法并且存入DB中。

首先我们要创建一个简单的Util函数，来覆盖JSON文件以保存数据。

```bash
# 在data目录下创建util文件
touch src/database/utils.js
```

```javascript
// 在 src/database/utils.js
const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
```

我们可以在Workout.js文件中使用这个函数

```javascript
// 在src/database/Workout.js
const DB = require("./db.json");
// *** 添加 ***
const { saveToDatabase } = require("./utils");


const getAllWorkouts = () => {
  return DB.workouts;
};

// *** 添加 ***
const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

module.exports = {
  getAllWorkouts,
  // *** 添加 ***
  createNewWorkout,
};
```

一切进展得很顺利。下一步是使用训练服务器中的数据方法。

```bash
# 安装uuid包
npm i uuid
```

```javascript
// 在src/services/workoutService.js
// *** 添加 ***
const { v4: uuid } = require("uuid");
// *** 添加 ***
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (newWorkout) => {
  // *** 添加 ***
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  // *** 添加 ***
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

一切还不错，对不对？现在你可以去HTTP客户端，重新发送POST请求，就会接受到新的JSON格式的训练。

如果你尝试再次添加同样的训练，你仍会得到201状态码，但是不会插入新的内容。

也就是说我们的数据库方法取消了插入，什么都不返回。这是因为if声明检查了是否已经存在同样名称的内容，现在这样做就很好了，如果优化这种操作，我们会在下一个最佳实践中讲解。

现在向 **localhost:3000/api/v1/workouts**发出GET请求，读取所有的训练。 我选择使用浏览器来操作，你会看到我们的训练成功地插入了：
![Bildschirmfoto-2022-04-30-um-11.57.23](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-11.57.23.png)

你可以选择自己编写其他的方法，或者直接复制我的：

首先是训练控制器（你可以直接复制所有内容）

```javascript
// 在src/controllers/workoutController.js
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const workout = workoutService.getOneWorkout(workoutId);
  res.send({ status: "OK", data: workout });
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

然后是训练服务层（你可以直接复制所有内容）

```javascript
// 在 src/services/workoutServices.js
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

最后是数据访问层的数据库方法（你可以直接复制所有内容）

```javascript
// 在src/database/Workout.js
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

太棒了！让我们进入下一个最佳实践，来看看怎么处理报错。

<h3 id="respond-with-standard-http-error-codes">处理HTTP标准代码错误</h3>

我们已经完成了不少，但还没结束呢。现在我们的API已经可以处理CRUD并且存储数据，这样很棒！但还不够。

为什么？让我来解释。

在一个完美的世界里，所有事情都会运行顺利，没有错误。但是你可能知道，在现实中，会出现很多错误——无论这个错误是来自人类还是技术角度。

你可以体会过这样奇怪的感觉，一开始所有都运行得很好，没有任何错误。这样确实很棒也让人享受，但作为一个开发者，我们应该更习惯于出现错误。 😁

API也是这样，我们需要处理当出现问题或者报错的时候的情况。这也可以健壮我门的API。

但出现问题时（不论是请求还是在我们API内部），我们返回HTTP错误代码。我见过并使用过一些API始终返回400错误代码，并且不附带任何具体的信息说明为什么错误会出现，错误是什么。这样调试就变得很痛苦。

这就是为什么针对不同的情况返回合适的HTTP代码是一种最佳实践。这能够帮助使用或者构建API的工程师更轻松地识别问题。

为了提升体验，我们还可以在返回错误的同时发送一个快速的错误信息。但正如在简介中说的那样，这并不是万精油，还需要工程师自己来权衡。

例如，是否返回 **"该用户名已经注册"** 应该经过深思熟虑，因为这样就给用户提供了本该隐藏的数据。

在我们的交叉训练API中，我们可以浏览一遍创建的终点，看看会出现什么问题，我们能怎么解决。在这一部分最后部分，你可以看到其他终点的完整运行方式。

我们先从训练控制器的createNewWorkout方法开始：

```javascript
// 在src/controllers/workoutController.js
...

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

...
```

我们已经解决了请求体不完全的情况，并且获得了丢失的关键属性。

在返回400时，附带一条返回错误信息是一个不错的选择。

```javascript
// 在src/controllers/workoutController.js
...

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

...
```

如果我们想要添加一个新的训练，但是忘记在请求体提供"mode"属性，我们会在400报错的同时看到错误信息。

![Bildschirmfoto-2022-04-30-um-15.17.21](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-15.17.21.png)

使用这个API的开发者知道自己需要什么。他们马上就知道应该在请求体中找答案，并且看看他们缺失了哪一个必须的属性。

在我们的例子中使用通用的错误信息没有问题。一般情况下可以使用一个模式验证器来处理这个问题。

让我们再深入一层看看服务层有什么潜在的错误：

```javascript
// 在src/services/workoutService.js
...

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

...
```

在 **Workout.createNewWorkout().** 中的插入代码可能出现问题，我想将他们打包在try/catch代码块中，来捕获错误。

```javascript
// 在src/services/workoutService.js
...

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

...
```

Workout.createNewWorkout()方法中的所有错误都会被catch代码块捕获。我们抛出这个错误之后就可以在控制器中调整响应。

让我们在Workout.js中定义错误：

```javascript
// 在src/database/Workout.js
...

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name '${newWorkout.name}' already exists`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

...
```

如你所见，一个错误包含了状态和信息两个内容。 此处我使用了 **throw**关键字来发出一个数据结构而不是一条字符串，在 **throw new Error()**中必须。

使用throw的缺点是无法得到栈追踪。但基本上抛出错误由第三方库来处理（如果你使用MongoDB数据库的话就是Mongoose），但在本教程中，我们现在做的就够了。

现在我们就可以在服务和数据访问层来抛出和捕获错误了。我们现在进入训练控制层，来编写抛出错误和对应的消息。

```javascript
// 在src/controllers/workoutController.js
...

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  // *** 添加 ***
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

...
```

你可以通过添加同样名字的训练，或者不在请求体中提供必需的属性来测试。你会接受对应的HTTP错误代码以及错误信息。

在结束这一篇并且进入下一个最佳实践之前，让我们复制其他的实践代码，或者你可以尝试自己编写：

```javascript
// 在src/controllers/workoutController.js
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  try {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  getRecordsForWorkout,
};
```

```javascript
// In src/services/workoutService.js
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

```javascript
// In src/database/Workout.js
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${newWorkout.name}' already exists`,
      };
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
```

<h3 id="avoid-verbs-in-endpoint-names">在终点避免使用动词</h3>

在终点中使用动词实际上没有任何作用。大体上所有URL都指向一个资源（如我们敬爱更难过的盒子）。

在URL中使用动词，相当于展示了资源本身并没有的行为。

我们已经在不使用动词的情况下正确地编写好了URL，但让我们看看，如果使用动词URL会是什么样。

```javascript
// 现在的样子（没有动词）
GET "/api/v1/workouts" 
GET "/api/v1/workouts/:workoutId" 
POST "/api/v1/workouts" 
PATCH "/api/v1/workouts/:workoutId" 
DELETE "/api/v1/workouts/:workoutId"  

// 使用动词
GET "/api/v1/getAllWorkouts" 
GET "/api/v1/getWorkoutById/:workoutId" 
CREATE "/api/v1/createWorkout" 
PATCH "/api/v1/updateWorkout/:workoutId" 
DELETE "/api/v1/deleteWorkout/:workoutId"
```

你看到区别了吗？给每一个行为分配不同过得URL，会很快地变得让人困惑并且复杂。

假设我们有300个不同的终点。为每个终点分配单独的URL可能造成开销（和文档）地狱。

另一个我不推荐在URL中使用动词的原因是，HTTP动词已经表明了响应的动作。

如 **"GET /api/v1/getAllWorkouts"** 和 **"DELETE api/v1/deleteWorkout/workoutId"**就很没有必要。

你会发现我们的实现非常清晰，因为我们只使用两个不同的URL，而实际的行为是通过HTTP动词以及对应的请求负载来实现。

我认为HTTP动词是来定义行为的（我们也希望这样），而URL（指向资源）是目标。 **"GET /api/v1/workouts"** 这样在人类的语言中也更通顺。

<h3 id="group-associated-resources-together-logical-nesting-">把相关的资源放在一起（逻辑嵌套）</h3>

当你在设计API的时候，会出现资源之间相互关联的情况。一个好的实践方式是将资源整合和嵌套到一个资源。

在我们的API中，有一系列的会员注册了交叉训练盒子（“盒子”是交叉训练健身房的名字），为了鼓励会员，我们记录了每一次训练的所有记录。

假设有一组训练包含一定顺序的练习，你想要尽快做完。我们记录了所有会员完成训练的时间。

这是，前端就需要一个终点来响应一个特定训练的所有时间记录，并且在UI上呈现。

训练、会员还有训练记录存储在不同的数据库里。所以在这里我们需要使用盒中盒（训练中的记录），对不对？

这个终点的URI会是 **/api/v1/workouts/:workoutId/records**. 这便是一个在URL中实现逻辑嵌套的好实践。URL本身不需要反应数据结构。

让我们来实现这个终点。

首先我们要在db.json中添加一组叫"memebers"的数据，放在"workouts"下面。

```json
{
  "workouts": [ ...
  ],
  "members": [
    {
      "id": "12a410bc-849f-4e7e-bfc8-4ef283ee4b19",
      "name": "Jason Miller",
      "gender": "male",
      "dateOfBirth": "23/04/1990",
      "email": "jason@mail.com",
      "password": "666349420ec497c1dc890c45179d44fb13220239325172af02d1fb6635922956"
    },
    {
      "id": "2b9130d4-47a7-4085-800e-0144f6a46059",
      "name": "Tiffany Brookston",
      "gender": "female",
      "dateOfBirth": "09/06/1996",
      "email": "tiffy@mail.com",
      "password": "8a1ea5669b749354110dcba3fac5546c16e6d0f73a37f35a84f6b0d7b3c22fcc"
    },
    {
      "id": "11817fb1-03a1-4b4a-8d27-854ac893cf41",
      "name": "Catrin Stevenson",
      "gender": "female",
      "dateOfBirth": "17/08/2001",
      "email": "catrin@mail.com",
      "password": "18eb2d6c5373c94c6d5d707650d02c3c06f33fac557c9cfb8cb1ee625a649ff3"
    },
    {
      "id": "6a89217b-7c28-4219-bd7f-af119c314159",
      "name": "Greg Bronson",
      "gender": "male",
      "dateOfBirth": "08/04/1993",
      "email": "greg@mail.com",
      "password": "a6dcde7eceb689142f21a1e30b5fdb868ec4cd25d5537d67ac7e8c7816b0e862"
    }
  ]
}
```

在你问之前，我先回答——是的，密码是哈希的。😉

然后我们在"records"下面添加"members"：

```json
{
  "workouts": [ ...
  ],
  "members": [ ...
  ],
  "records": [
    {
      "id": "ad75d475-ac57-44f4-a02a-8f6def58ff56",
      "workout": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "record": "160 reps"
    },
    {
      "id": "0bff586f-2017-4526-9e52-fe3ea46d55ab",
      "workout": "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7",
      "record": "7:23 minutes"
    },
    {
      "id": "365cc0bb-ba8f-41d3-bf82-83d041d38b82",
      "workout": "a24d2618-01d1-4682-9288-8de1343e53c7",
      "record": "358 reps"
    },
    {
      "id": "62251cfe-fdb6-4fa6-9a2d-c21be93ac78d",
      "workout": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "record": "145 reps"
    }
  ],
}
```

为了确保同一ID下的训练相同，我也复制了一些训练到workouts中：

```json
{
  "workouts": [
    {
      "id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
      "name": "Tommy V",
      "mode": "For Time",
      "equipment": [
        "barbell",
        "rope"
      ],
      "exercises": [
        "21 thrusters",
        "12 rope climbs, 15 ft",
        "15 thrusters",
        "9 rope climbs, 15 ft",
        "9 thrusters",
        "6 rope climbs, 15 ft"
      ],
      "createdAt": "4/20/2022, 2:21:56 PM",
      "updatedAt": "4/20/2022, 2:21:56 PM",
      "trainerTips": [
        "Split the 21 thrusters as needed",
        "Try to do the 9 and 6 thrusters unbroken",
        "RX Weights: 115lb/75lb"
      ]
    },
    {
      "id": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "name": "Dead Push-Ups",
      "mode": "AMRAP 10",
      "equipment": [
        "barbell"
      ],
      "exercises": [
        "15 deadlifts",
        "15 hand-release push-ups"
      ],
      "createdAt": "1/25/2022, 1:15:44 PM",
      "updatedAt": "3/10/2022, 8:21:56 AM",
      "trainerTips": [
        "Deadlifts are meant to be light and fast",
        "Try to aim for unbroken sets",
        "RX Weights: 135lb/95lb"
      ]
    },
    {
      "id": "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7",
      "name": "Heavy DT",
      "mode": "5 Rounds For Time",
      "equipment": [
        "barbell",
        "rope"
      ],
      "exercises": [
        "12 deadlifts",
        "9 hang power cleans",
        "6 push jerks"
      ],
      "createdAt": "11/20/2021, 5:39:07 PM",
      "updatedAt": "4/22/2022, 5:49:18 PM",
      "trainerTips": [
        "Aim for unbroken push jerks",
        "The first three rounds might feel terrible, but stick to it",
        "RX Weights: 205lb/145lb"
      ]
    },
    {
      "name": "Core Buster",
      "mode": "AMRAP 20",
      "equipment": [
        "rack",
        "barbell",
        "abmat"
      ],
      "exercises": [
        "15 toes to bars",
        "10 thrusters",
        "30 abmat sit-ups"
      ],
      "trainerTips": [
        "Split your toes to bars in two sets maximum",
        "Go unbroken on the thrusters",
        "Take the abmat sit-ups as a chance to normalize your breath"
      ],
      "id": "a24d2618-01d1-4682-9288-8de1343e53c7",
      "createdAt": "4/22/2022, 5:50:17 PM",
      "updatedAt": "4/22/2022, 5:50:17 PM"
    }
  ],
  "members": [ ...
  ],
  "records": [ ...
  ]
}
```

让我花点时间来想想如何实现。

我们有一组叫做"workouts"的资源，还有另一组叫做"records"的资源。

在创建架构之前，建议先创建另一个控制层、服务层和数据结合方法来负责records。

为记录实现GRUD终点的几率很高，因为在未来我们也会添加、更新和删除记录。但这不是现在的首要任务。

我们也需要一个记录路由来捕捉针对训练的请求。这是你练习自己实现CRUD的绝好机会。

```bash
# 创建记录控制层
touch src/controllers/recordController.js 

# 创建记录服务层
touch src/services/recordService.js 

# 创建记录数据处理方法 
touch src/database/Record.js
```

很简单！让我们从后往前，从实现数据方法开始编写。

```javascript
// 在src/database/Record.js
const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getRecordForWorkout };
```

很直接对不对，我们通过查询参数过滤到和训练id相关的记录数据

接下来是记录的服务层：

```javascript
// 在src/services/recordService.js
const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForWorkout };
```

这里也没有新的知识点。

现在就可以在训练路由创建新的路由，并且导向记录服务请求。

```javascript
// 在src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");
// *** 添加 ***
const recordController = require("../../controllers/recordController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

// *** 添加 ***
router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
```

真棒！让我们在浏览器中测试一下。

首先我们抓取素有训练记录，来获得一个训练id。

![Bildschirmfoto-2022-04-30-um-15.36.48](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-15.36.48.png)

让我们来看看能不能获得这个id下的所有记录。

![Bildschirmfoto-2022-04-30-um-15.36.32](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-15.36.32.png)

如你所见，逻辑嵌套可以使资源捆绑在一起。理论上你可以想嵌套多少层就嵌套多少层，但是这里的敬仰是至多使用三层嵌套。

如果你想嵌套得更深，可以稍微调整一个数据库的记录。我给你看一个小例子。

想象一下，前端还需要一个端点来获取到底是哪个成员持有当前记录的信息，并希望接收关于他们的元数据。

你当然可以使用下面的URI：

```javascript
GET /api/v1/workouts/:workoutId/records/members/:memberId
```

现在，我们对它的嵌套越多，端点就越不容易管理。因此，将接收成员信息的URI直接存储在记录中是一个好的做法

可以这样修改数据库：

```json
{
  "workouts": [ ...
  ],
  "members": [ ...
  ],
  "records": [ ... {
      "id": "ad75d475-ac57-44f4-a02a-8f6def58ff56",
      "workout": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "record": "160 reps",
      "memberId": "11817fb1-03a1-4b4a-8d27-854ac893cf41",
      "member": "/members/:memberId"
    },
  ]
}
```

我们在数据库中添加了"memberId"和“menmber"这两个属性，这样我们就不需要在端点嵌套得更深。

前端只需要调用 **GET /api/v1/workouts/:workoutId/records**便可以获得所有和训练相关的数据。

除此之外，我们可以由会员id来获取会员的信息，就可以避免更深入的嵌套。

当然，要想要实现的前提是处理"/members/:memberId"请求。 😁 这听上去是以恶锻炼你自己实现能力的好机会！

<h3 id="integrate-filtering-sorting-pagination">继承过滤、排序和分页功能</h3>

现在我们的API已经可以完成很多工作，取得了相当大的进展，但是这还不够。

在上一部分我们聚焦在如何提高开发者的体验，以及我们的API如何交互。但是API的整体性能也是一个我们需要努力的关键因素。

这就是为什么在我的清单中继承过滤、排序和分页功能也是非常关键的。

假设我们的DB中有2000个训练，450条记录和500个会员。当我们调用端点来获取训练的时候，我们不希望一次性获得所有2000个训练。这样的响应速度会比较慢，导致系统崩溃(可能需要200000条记录 😁)。

这就是为什么过滤和分页十分重要。过滤正如这个名称一样，十分有效。可以帮助我们在整个数据集中获取我们需要的数据。例如所有具备“时间”模式的训练。

分页是另一种可以分割数据集的机制，比方说我们可以把数据分成每页二十个训练的“页面”。这个技术确保我们一次返回不超过20个训练。

排序是一个复杂的任务，在我们的API中给用户发送排序后的数据更有效。

我们首先在API中整合一些过滤机制。我们将发送所有训练的端点升级，让这个端点接受过滤参数。通常在GET请求中，我们使用查询参数来添加过滤条件。

我们新的URI会是这样，当我们只获取处于"AMRAP"（尽可能多地训练）状态的训练 (**A**s **M**any **R**ounds **A**s **P**ossible): **/api/v1/workouts?mode=amrap.**

为了让实现更有趣，我们可以添加更多的训练。请在db.json中的"workouts"数据集中添加以下代码：

```json
{
  "name": "Jumping (Not) Made Easy",
  "mode": "AMRAP 12",
  "equipment": [
    "jump rope"
  ],
  "exercises": [
    "10 burpees",
    "25 double-unders"
  ],
  "trainerTips": [
    "Scale to do 50 single-unders, if double-unders are too difficult"
  ],
  "id": "8f8318f8-b869-4e9d-bb78-88010193563a",
  "createdAt": "4/25/2022, 2:45:28 PM",
  "updatedAt": "4/25/2022, 2:45:28 PM"
},
{
  "name": "Burpee Meters",
  "mode": "3 Rounds For Time",
  "equipment": [
    "Row Erg"
  ],
  "exercises": [
    "Row 500 meters",
    "21 burpees",
    "Run 400 meters",
    "Rest 3 minutes"
  ],
  "trainerTips": [
    "Go hard",
    "Note your time after the first run",
    "Try to hold your pace"
  ],
  "id": "0a5948af-5185-4266-8c4b-818889657e9d",
  "createdAt": "4/25/2022, 2:48:53 PM",
  "updatedAt": "4/25/2022, 2:48:53 PM"
},
{
  "name": "Dumbbell Rower",
  "mode": "AMRAP 15",
  "equipment": [
    "Dumbbell"
  ],
  "exercises": [
    "15 dumbbell rows, left arm",
    "15 dumbbell rows, right arm",
    "50-ft handstand walk"
  ],
  "trainerTips": [
    "RX weights for women: 35-lb",
    "RX weights for men: 50-lb"
  ],
  "id": "3dc53bc8-27b8-4773-b85d-89f0a354d437",
  "createdAt": "4/25/2022, 2:56:03 PM",
  "updatedAt": "4/25/2022, 2:56:03 PM"
}
```

当我们处理好接受和处理查询参数后，就可以编写训练的控制层：

```javascript
// 在src/controllers/workoutController.js
...

const getAllWorkouts = (req, res) => {
  // *** 添加 ***
  const { mode } = req.query;
  try {
    // *** 添加 ***
    const allWorkouts = workoutService.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

...
```

我们在req.query对象中提取“mode”，并用作workoutService.getAllWorkouts的参数。这个对象包含了所有过滤参数。

这里我使用了简写语法，来创建一个名为"mode"的新键，这个键位于对象内部，其值可以是任意"req.query.mode"的值。可以为一个真值或者如果没有一个参数为“mode”的参数则为定义值。我们可以在对象内扩充更多过滤参数。

在workoutService中传入数据处理方法：

```javascript
// 在src/services/workoutService.js
...

const getAllWorkouts = (filterParams) => {
  try {
    // *** 添加 ***
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

...
```

现在我们可以使用数据库方法，并且应用过滤：

```javascript
// 在src/database/Workout.js
...

const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode) {
      return DB.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    // Other if-statements will go here for different parameters
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

...
```

简单明了！我们在这里做的工作就是检查"filterParams"中是否存在键"mode"的真值，如果存在，则过滤出所有包含同样"mode"的训练，如果不存在，则返回所有训练，

此处我们使用"let"来定义"workouts"变量是因为如果我们使用if表达式来添加更多过滤器的话，会覆盖掉"workouts"并且串联过滤器。

在浏览器中可以登陆3000/api/v1/workouts?mode=amrap 就会接收到所有包含 "AMRAP"的训练：

![Bildschirmfoto-2022-04-30-um-15.48.57](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-30-um-15.48.57.png)

如果不填写查询参数的话，就会重新获得所有训练。你可以尝试添加"for%20time"作为"mode"的参数(记住--> "%20" 代表 "空格")， 你就会获得所有包含"For Time"的训练，

如果输入一个不存在的值，则会接受到空数组。

排序和分页的参数页遵行同样的原理，我们来看看我们需要实现的一些功能：

-   接受所有需要杠铃的训练： **/api/v1/workouts?equipment=barbell**
-   接受5组训练： **/api/v1/workouts?length=5**
-   使用分页时，返回第二页：**/api/v1/workouts?page=2**
-   给训练排序，并且以创建时间为标准降序来响应训练： **/api/v1/workouts?sort=-createdAt**
-   你也可以合并参数，获取最近更新的10个训练：**/api/v1/workouts?sort=-updatedAt&length=10**

<h3 id="use-data-caching-for-performance-improvements">使用数据缓存提升性能</h3>

使用数据缓存也是一个提升API整体使用体验和性能的优秀实践。

当一段数据经常被请求，或者这个数据太大了需要比较长的时间加载的时候，可以使用缓存来提供数据。

你可以将这些数据存储到缓存，这样就可以避免每一次都重新提交数据请求。

但必须记住的是，使用缓存来提供数据的话，这段数据很有可能过期。所以必须确保缓存中的数据保持更新。

有各种实现的方式，一种是使用[redis](https://www.npmjs.com/package/redis)或者express的中间件[apicache](https://www.npmjs.com/package/apicache).

我准备使用apicache，但如果你想使用Redis， 我强烈推荐你阅读他们的[文档](https://docs.redis.com/latest/rs/references/client_references/client_nodejs/)。

我们思考一下在API中使用缓存的场景。我认为使用缓存来返回所有训练会更加有效。

首先，让我们安装中间件：

```bash
npm i apicache
```

Now, we have to import it into our workout router and configure it.

```javascript
// 在src/v1/routes/workoutRoutes.js
const express = require("express");
// *** 添加 ***
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
// *** 添加 ***
const cache = apicache.middleware;

// *** 添加 ***
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
```

开始十分简单。我们可以将新的缓存定义为**apicache.middleware**，并在路由中当作中间件来使用。仅需在实际的路径和训练控制层之间放置这个参数。

你可以在中间件内部定义你需要保存缓存多久。在这篇教程中我选择2分钟。保存时间一般取决于你存储的数据多久更改一次。

让我们测试一下！

在Postman或者另外的HTTP客户端中，定义一个新的请求，获取所有的训练。之前我都是在浏览器中操作，但是这次我想给你更直观的感受，所以使用Postman。

让我们第一次请求数据：

![Bildschirmfoto-2022-04-26-um-15.36.46-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-26-um-15.36.46-1.png)

你可以看到我们的API花了22.93毫秒来响应。一旦缓存被清空（2分钟后），又回重新抓去数据保存到缓存。这是我们第一次获取数据。

在上述例子中，数据并不是有又缓存提供。而是通过“普通”方式来抓去数据保存到缓存。

现在我们第二次请求数据，响应时间变短，因为我们直接从缓存中返回数据。

![Bildschirmfoto-2022-04-26-um-15.36.59-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-26-um-15.36.59-1.png)

比起第一次请求，我们快了三倍，这完全归功于缓存。

在我们的例子中，我们值缓存了一个路由，你可以再所有路由中应用：

```javascript
// 在src/index.js
const express = require("express");
const bodyParser = require("body-parser");
// *** 添加 ***
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
// *** 添加 ***
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// *** 添加 ***
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
```

还有一件关于缓存的**重要** 的事情，虽然在这个例子中，缓存给你节省了不少事情，但是缓存也可以给应用造成不小的麻烦：

当使用缓存时，你需要注意的事：

-   必须保证缓存中的数据是更新的，你可不想提供过期的数据
-   当第一个请求在执行的过程中，数据被保存到缓存，也有更多地请求进来，你必须决定是延迟其他的请求，从缓存中提供数据，还是其他的请求也如第一次请求一样从数据库来获取数据
-   如果使用分布式缓存如Redis，缓存是你的架构中的一个组件，所以你必须考虑一下是否有必要使用缓存

我尝尝这么做：

当我在构建的时候我希望一切从简，API同理。

首次搭建API的时候没有特别的原因马上使用缓存，我会等使用了一段时间之后，有理由使用缓存后再使用缓存。

<h3 id="good-security-practices">好的安全时间</h3>

这是一段不错的旅行，我们讲了需要API相关的重要观点，并且扩充了我们的API。

我们已经讲了提升API使用和性能的最佳时间。安全也是API重要的一环。如果你创建出一个绝佳的API，但是在服务器上运行的时候却十分脆弱，那这个API就变得无用且危险。

首先必须使用的是SSL/TLS，因为这是当今互联网通讯的一个标准。特别是当API需要在客户端和服务器之间传输私人数据的时候。

如果你需要给验证客户提供数据，你不要使用验证手段来保护数据。

在Express中，我们可以像在缓存中那样在路由中插入特定的中间件来检查请求的真实性再获取资源。

API中的一些资源和交互你可能不希望所有用户都可以请求。这是就需要一个角色系统。在路由中添加一个检查逻辑来验证用户是否有权利来获取这些数据。

用户角色在我们的用例中页同样适用。如果我们需要特定用户（教练）来使用创建、更新和删除训练和记录的功能。所有用户可以读取（同样可成为“普通”用户）。

这可以通过在路由中插入中间件来实现。如在我们的/api/v1/workouts的POST请求中插入。

在第一个中间件中我们检查用户是不是真实的，如果为真，就进入下一个中间件来检查用户角色，如果用户符合获取资源的角色，就移交到对应的控制层。

路由处理器如下：

```javascript
// 在src/v1/routes/workoutRoutes.js
...

// 定制中间件
const authenticate = require("../../middlewares/authenticate");
const authorize = require("../../middlewares/authorize");

router.post("/", authenticate, authorize, workoutController.createNewWorkout);

...
```

这个话题相关的最佳时间，我推荐阅读[这篇文章](https://restfulapi.net/security-essentials/)。

<h3 id="document-your-api-properly">API编写合适的文档</h3>

对于开发者来说编写文档确实不是一件让他们乐意干的活儿，但是是必须要做的事。特别是API的文档。

有人说过：

> “API得和文档一样优秀“

我认为这句话挺有道理，因为如果不好好写API的文档，这个API就不好使用。文档帮助开发者更方便地使用API。

永远记住文档是API使用者和API交互的第一环节。用户能够更快读懂文档，就能够更快使用API。

所以我们必须编写良好精确的文档。有一些比较好用的工具可以帮助我们实现。

和其他计算机科学领域一样，API文档也有标准，查看[OpenAPI细则](https://swagger.io/specification/).

让我们来看看如何遵循这份规则来创建文档。 我们将使用[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) 和[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) 工具包。你马上就会为这两个工具包能够做到的事感到惊奇。

首先我们设置好文档的基础结构。因为我们会有不同版本的API，所以文档会有些许不同，这件事为什么我会创建swagger文件，来处理不同版本的文档。

```bash
# 安装必须的NPM包
npm i swagger-jsdoc swagger-ui-express 

# 创建新的文件来这只swagger文件
touch src/v1/swagger.js
```

```javascript
// 在src/v1/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// API的基础信息
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Crossfit WOD API", version: "1.0.0" },
  },
  apis: ["./src/v1/routes/workoutRoutes.js", "./src/database/Workout.js"],
};

// 使用JSON格式的文件
const swaggerSpec = swaggerJSDoc(options);

// 设置文件的函数
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // 使得允许使用JSON格式文件
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
```

设置很简单，我们定义了API的基本数据，创建了JSON格式的文档，并创建了函数使文档可用。

为了检查一切可以运行，我们在控制台打印一个简单的信息。

这是我们在根文件中会使用到的函数，在根文件中我们也创建了Express服务器，确保文档也被启动。

```javascript
// 在src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
// *** 添加 ***
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  /// *** 添加 ***
  V1SwaggerDocs(app, PORT);
});
```

现在你可以在你的控制台查看服务器是否在运行。

![Bildschirmfoto-2022-04-28-um-20.23.51-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-28-um-20.23.51-1.png)

当你登陆localhost:3000/api/v1/docs，你会看到我们的文档已经准备好了：

![Bildschirmfoto-2022-04-28-um-20.25.00-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-28-um-20.25.00-1.png)

每次我都会惊叹运作的如此顺畅。现在基本机构已经设置好，我们可以来实现文档的端点了，让我们开始吧！

当你查看swagger.js文件中的 **options.apis** ，你会发现我们已经预留了处理训练路由和数据库中训练文件的路径。 这就是让魔法实现最重要的环节。

在swagger中有这些选项，使得我们可以使用评论来引用OpenAPi，并且使用类似yaml的语法来编写文档，这些就是设置文档的所有必须条件了。

现在我们就可以开始来创建我们文档的第一个端点了，让我们开始吧！

```javascript
// 在src/v1/routes/workoutRoutes.js
...

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

...
```

这就基本上是使用swagger文档来添加端点的所有魔法了，你可以在他们的[文档](https://swagger.io/docs/specification/about/)中查看所有细则。

当你重新加载文档页面，你会看到如下：

![Bildschirmfoto-2022-04-29-um-07.21.51-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-07.21.51-1.png)

如果你熟悉OpenAPI文档的话，这个画面对于你来说就不陌生。在这个页面中我们会看到所有端点，并且包含每一个端点的信息。

![Bildschirmfoto-2022-04-29-um-07.41.46-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-07.41.46-1.png)

但你仔细看会发现我们还没有定义正确的返回值，因为我们的"data"属性仅设定为一个空对象。

这时模式就发挥了作用。

```javascript
// 在src/databse/Workout.js
...

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

...
```

在上面的示例中，我们创建了第一个模式，通常在你的模式或者模式文件中的定义的是数据模型。

这也很简单明了。我们定义了所有训练的属性，包括种类和例子。

再次浏览文档页面，你会看到另一个由模式主导的板块。

![Bildschirmfoto-2022-04-29-um-07.29.49-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-07.29.49-1.png)

我们可以引用这个模式来定义端点的响应。

```javascript
// 在src/v1/routes/workoutRoutes.js
...

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 */
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

...
```

仔细看最底部的评论，在"item"内部，我们使用了"$ref"来创建引用，来引用我们在训练文件中定义的模式。

现在我们就可以完整地展示训练的响应了。

![Bildschirmfoto-2022-04-29-um-07.44.12-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-07.44.12-1.png)

很不错！你可能会认为“编写这些评论很繁琐”。

这或许是真的，但是可以这样想。这些在你的代码中的评论也可以帮助你作为一个API开发者更好地了解你的API。当你想要了解某一个端点的时候，你不要阅读所有文档，你可以直接在代码中找到。

为端点写文档也可以帮助你更好的了解这些端点，“逼迫”自己去思考在实现的过程当中缺失了什么。

你看我确实忘记了一些东西，就是可能出现的错误响应，查询参数也缺少了。

让我们调整一下：

```javascript
// 在src/v1/routes/workoutRoutes.js
...

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", cache("2 minutes"),  workoutController.getAllWorkouts);

...
```

当你查看评论最上方"tag"内部，会发现我添加了另一个键叫做"parameters"，这里可以定义我们过滤所需的查询参数。

我们的文档也会展示出来：

![Bildschirmfoto-2022-04-29-um-08.03.00-1](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-08.03.00-1.png)

现阶段展示可能出现的错误，我们只用抛出5XX报错就行。所以在"responses"内部，我们可以定义另一个文档。

现在我们的文档页面如下：

![Bildschirmfoto-2022-04-29-um-08.04.44-2](https://www.freecodecamp.org/news/content/images/2022/04/Bildschirmfoto-2022-04-29-um-08.04.44-2.png)

很棒！我们已经给一个端点创建了完整的文档，我强烈建议你为剩下的端点创建对应的文档，在这个过程中你会学到很多东西。

你或许也体会到了为API写文档并不总是一件头疼的事，使用我介绍给你的工具可以减轻你不少负担，并且搭建起来也十分简单明了。

这样你就可以把注意力集中在重要的事情上，编写文档内容。swagger和OpenAPI的文档非常不错，在网络上你也可以找到其他的优秀例子。

因为太多“额外”工作也不写文档这个理由现在就不成立了。

<h2 id="conclusion">总结</h2>

呼！这是一趟有趣的旅程！我非常享受写这篇文章也从中学习了很多。

这些最佳实践中又一些可能很重要。另一些可能不适用于你现在的情况。没关系，正如我一开始说的那样，对于开发者来说最重要的是能够根据情况挑选出最适合他们的方法。

我尽力把所有最佳实践融汇到这个API项目中，我从中获得非常多的乐趣。

我十分乐意接受各种反馈，任何你想要告诉我的事情（好的或坏的），别迟疑告诉我：

这是我的[Instagram](https://www.instagram.com/jean_marc.dev/) (你也可以关注我作为软件工程师的成长路径)

下篇文章见！
