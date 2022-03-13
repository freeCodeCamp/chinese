> - 原文地址：[How to Build a RESTful API Using Node, Express, and MongoDB](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)
> - 原文作者：[Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Build a RESTful API Using Node, Express, and MongoDB](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/How-to-Build-a-Weather-Application-using-React--65-.png)

在这篇文章中，我们将使用Node、Express和MongoDB构建一个RESTful API。我们将为创建数据、读取数据、更新数据和删除数据（基本CRUD操作）创建端点（endpoints）。

但在我们开始之前，请确保你的系统中已经安装了Node。如果没有，请到 [https://nodejs.org/en/download/](https://nodejs.org/en/download/)下载并安装它。

## 让我们先做一下基本设置

在一个空文件夹中，运行以下命令:

``` shell
npm init
```

这个命令会问你各种细节，比如你的项目名称、作者、存储库等等。然后它将在该文件夹中生成一个 **package.json** 文件。

![Screenshot-2022-02-19-130254](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-130254.jpeg)

```json
{
  "name": "rest-api-express-mongo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Package.json file

这个Package.json文件将包含所有的脚本，如如何运行应用程序，或如何测试应用程序，以及所有的依赖。

我们现在需要安装一些依赖项。

```shell
npm i express mongoose nodemon dotenv
```

这里,

1. Express将被用于中间件，以创建各种CRUD端点。
2. Mongoose用于使用各种查询来管理MongoDB中的数据。
3. Nodemon用于在我们每次保存文件时重新启动我们的服务器。
4. Dotenv管理**.env**文件。

因此，请继续安装它们。

在它们完成安装后，创建一个名为**index.js.**的文件，这将是我们应用程序的入口。

而在这个文件中，让我们添加Express和Mongoose，并运行该文件。

```js
const express = require('express');
const mongoose = require('mongoose');
```

现在，将Express的内容转移到一个名为**app**的新常量中。

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
```

现在，让我们修改这个文件，在3000端口监听。

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
```

现在，服务器被设置在 **端口3000**。让我们写脚本来启动我们的服务器。我们还添加了 **app.use**。在这里面，我们有一个代码片段，允许我们接受 JSON 格式的数据。

在package.json文件中，添加一个脚本，内容如下:

```js
"scripts": {
    "start": "nodemon index.js"
},
```

这意味着我们可以使用**npm start启动我们的服务器，**它将使用我们之前安装的Nodemon包运行。

在终端中输入npm start，我们将在终端中看到以下输出:

![Screenshot-2022-02-19-132326](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-132326.jpeg)

## 如何配置MongoDB数据库

现在，让我们来配置mongoDB数据库。前往 [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login) 并创建你的账户，如果你已经有一个账户，则可以登录。

登录后，我们要创建一个数据库。

![Screenshot-2022-02-19-132848](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-132848.jpeg)

因此，创建一个 **Free Shared Cluster.**

It will ask you the username and the password, so fill those in.

![Screenshot-2022-02-19-132958](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-132958.jpeg)

然后，添加你的IP地址。

![Screenshot-2022-02-19-133131](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-133131.jpeg)

点击完成并关闭。

我们的集群将需要一些时间来完成，所以让我们等待吧。同时，在项目文件夹中创建一个名为**.env**的文件。

并在集群主页中，点击连接按钮。

![Screenshot-2022-02-19-133319](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-133319.jpeg)

将出现以下窗口:

![Screenshot-2022-02-19-133404](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-133404.jpeg)

点击MongoDB Compass，它将返回以下字符串。同时，下载并安装MongoDB Compass。

![Screenshot-2022-02-19-133516](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-133516.jpeg)

将你的用户名和密码添加到这个你以前使用过的字符串中。最后的连接字符串将看起来像这样:

```js
mongodb+srv://nishant:********@cluster0.xduyh.mongodb.net/testDatabase
```

这里，nishant是用户名，其次是密码，最后是数据库名称。

所以，把这个字符串粘贴到**.env**文件中。

```js
DATABASE_URL = mongodb+srv://nishant:*******@cluster0.xduyh.mongodb.net/testDatabase
```

现在在MongoDB Compass中，也添加这个字符串。

![Screenshot-2022-02-19-134347](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-134347.jpeg)

然后，点击 `Connect`。

在这里，我们将得到两个数据库，这是默认的。第三个将在以后自动创建。

![Screenshot-2022-02-19-134435](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-134435.jpeg)

现在，让我们在脚本文件index.js中导入我们的.**env**文件的内容。

```js
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
```

在这里，我们将字符串存储到一个名为 **mongoString.** 的变量中。

现在，让我们使用Mongoose将数据库连接到我们的服务器。

```js
mongoose.connect(mongoString);
const database = mongoose.connection
```

现在，我们必须根据我们的数据库连接是成功还是失败，抛出一个成功或错误信息。

```js
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
```

这里，**database.on** 意味着它将连接到数据库，如果连接失败，将抛出任何错误。而 **database.once** 意味着它将只运行一次。如果它成功了，它将显示一条信息：数据库已连接。

![Screenshot-2022-02-19-135414-1](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-135414-1.jpeg)

以下是到此为止的全部代码:

```js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
```

## 如何为端点（Endpoints）创建我们的路由

创建一个名为routes的文件夹，并在里面制作一个名为routes.js的文件。

将此文件导入我们的主脚本文件index.js中。

```js
const routes = require('./routes/routes');
```

另外，让我们使用这个路由文件（routes.js）。

```js
const routes = require('./routes/routes');

app.use('/api', routes)
```

这里，这个app.use需要两样东西。一个是基础端点（base endpoint），另一个是路由的内容。现在，我们所有的端点将从'/api'开始。

我们会得到一个错误，因为我们在路由文件里面没有任何东西。所以，让我们添加它们。

```js
const express = require('express');

const router = express.Router()

module.exports = router;
```

在这里，我们使用Express中的Router，并且我们也使用module.exports导出了它。现在，我们的应用程序可以正常工作了。

## 如何编写我们的端点（Endpoints）

现在，让我们在这个路由文件中写入我们的端点。我们将有五条路由用于以下 actions:

1. 将数据发布到数据库。
2. 从数据库中获取所有数据。
3. 获取基于ID的数据。
4. 基于ID更新数据。
5. 根据ID删除数据。

因此，让我们为这些 actions 创建路由:

```js
//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
```

我们有五个方法，使用REST方法的Post、Get、Patch和Delete。

这个路由器把路由作为第一个参数。然后，在第二个参数中，它正在接受一个回调。

在回调中，我们有一个**res**和一个**req**。**res**表示**响应，**req*表示**请求。**我们使用**res**来向我们的客户端，如Postman，或任何前端客户端发送响应。而我们使用**req**来接收来自客户端应用程序（如Postman）或任何前端客户端的请求。

然后在回调 body 中，我们要打印一条消息，说明是响应 API 消息。

保存这个，然后打开Postman来检查端点（endpoints）。如果你没有，请下载 [Postman](https://www.postman.com/downloads/)。它是测试API端点的一个好工具。

![Screenshot-2022-02-19-141237](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-141237.jpeg)

在地址栏中添加这个地址，然后点击发送，或按回车键。

![Screenshot-2022-02-19-141328](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-141328.jpeg)

我们将在Postman的正文中得到这个消息，因为我们只是使用 **res.send.** 发送一个消息。

现在，让我们从一个客户应用中获取一个响应。让我们简单地打印一个ID。

我们必须首先改变**getOne**函数。我们使用**req.params.id**获取ID，然后使用**res.send.**将其发送到客户端应用程序。

```js
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
```

```js
localhost:3000/api/getOne/1000
```

在地址栏中添加这个端点（endpoint）。这里，我们使用**getOne**端点，后面是ID。然后，点击发送。

![Screenshot-2022-02-19-142619](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-142619.jpeg)

我们将在Postman的响应 body 中获得ID。

## 如何创建模型

现在，让我们创建一个模型，它将定义我们的数据库结构。

创建一个名为model的文件夹，里面有一个名为model.js的文件。

```js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
```

在这里，我们有一个定义我们数据库结构的模式。它有一个 **name** 和一个 **age** 属性。这两个字段都有类型，而且都是必填的。

然后，我们简单地导出模式模型。

现在，在**routes.js**文件中导入这个模型。

```js
const Model = require('../models/model');
```

## 如何向数据库 post 数据

让我们使用刚刚创建的模型创建要发布（post）的数据体。

```js
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
})
```

我们的 name 和 agg是接受来自 **req body** 的 name 和 age。我们从客户端应用如**Postman**，或任何前端客户端如 **React** 或 **Angular.** 获得这些数据。

我们还将创建一个**try-catch**块来处理成功信息和错误。

```js
//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{

    }
    catch(error){
        
    }
})
```

在尝试块中，我们使用 **data.save()** 来保存 **data**。然后，我们将数据存储在一个叫做 **dataToSave** 的常量中。

我们还将成功的消息与数据一起发送到响应体中（response body）。

在catch块中，我们将接收任何错误，如果我们得到任何错误。

```js
//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
```

现在，让我们从Postman添加一些数据。但在这之前，这个函数需要异步工作。所以，我们将使用 async-await。

```js
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
```

如果我们在正文中添加数据并点击发送，我们将得到以下结果:

![Screenshot-2022-02-19-145714](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-145714.jpeg)

It's also generating a unique ID. Open the MongoDB Compass app, and you will see the database and this record you just created:

![Screenshot-2022-02-19-150007](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-150007.jpeg)

## 如何获得所有数据

获取数据也很简单。只需几行代码:

```js
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
```

这里，我们使用 **Model.find** 方法从数据库中获取所有数据。然后，我们将其以JSON格式返回。如果我们有一个错误，我们也会得到它。

![Screenshot-2022-02-19-150423](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-150423.jpeg)

如果我们在Postman中调用这个端点（endpoint），我们将在Postman主体中得到一个对象的数组。

## 如何根据ID获取数据

这个方法也很简单。我们只需要在一个叫做 **findById** 的方法中传递文档的ID，也就是 **req.params.id**。

```js
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
```

如果我们点击发送，我们将根据ID获得数据。

![Screenshot-2022-02-19-150808](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-150808.jpeg)

## 如何根据ID来更新和删除数据

首先，让我们使用**补丁（patch）**方法来针对更新方法。

```js
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
```

在这里，我们有三个参数传递给 **findByIdAndUpdate** 方法，我们用它来通过ID找到一个文档并更新它。

其中**req.params.id**是常量id，**updatedData**包含req.body，还有**options**，它指定了是否在body中返回更新的数据。

现在我们来测试一下。只要粘贴一个特定文件的ID，然后点击发送。也要改变端点（endpoints）。

![Screenshot-2022-02-19-152717](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-152717.jpeg)

我们正在使用一个ID进行更新，而且它正在被更新。

删除也很简单。让我们来实现它:

```js
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
```

我们在这里获取ID，然后使用 Model.findByIdAndDelete 来删除该字段，同时传递ID。

我们将更新的数据存储在一个常量 **data** 中。

在响应中，我们将得到这样的消息：具有特定名称的文档已经被删除。

如果我们测试一下，我们会得到以下结果:

![Screenshot-2022-02-19-153557](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-19-153557.jpeg)

所以，所有五个方法都完成了。我们可以发布数据和获取所有的数据（也基于ID）。我们还可以更新它们和删除它们。

### 谢谢您的阅读

在这篇文章中，你了解了如何使用Node、Express和MongoDB设计和开发一个RESTful API。

现在你可以使用这些端点来构建一个全栈应用程序，使用 Vanilla JavaScript、React、Angular、Next或Vue.js。

你也可以看看我关于同一主题的视频，[RESTful APIs - 使用Node、Express和MongoDB构建RESTful API](https://youtu.be/paxagc55loU)

欢迎从 [Github](https://github.com/nishant-666/Rest-Api-Express-MongoDB) 下载代码并进行实验。

> 快乐学习。
