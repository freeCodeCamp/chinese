> - 原文地址：[How to Learn Serverless AWS by Building 7 Projects](https://www.freecodecamp.org/news/learn-serverless-aws-by-building-7-projects/)
> - 原文作者：[Sam Williams](https://www.freecodecamp.org/news/author/sam-williams/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Learn Serverless AWS by Building 7 Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/pexels-christina-morillo-1181316.jpg)

当你开始学习 `serverless` 时，遵循教程是一个很好的第一步。但要想真正进步，你需要建立自己的项目。

问题是，想出一些既现实又能帮助你成长的想法是很难的。

为了帮助你，我想出了 7 个很棒的项目想法，以逐步帮助你成为一个更好的 `serverless` 开发人员。

如果你是 `serverless` 工作的新手，那么就从第一个项目开始。如果你以前用 Serverless 构建过 API 和 Dynamo，那么就挑选那些涵盖你最想学习的主题的项目。

如果你想观看和跟随，我还把它做成了视频:

# 组合式 API 项目
这个项目是为了让你熟悉用 Lambda 部署 API。你还将练习调用其他 API 并合并这些数据。

有很多逻辑可以用于此，但这里有两个例子:

- 获取 Steam 游戏交易，并转换为你的本地货币
- 获得新闻翻译成你当地语言

![ch2.drawio](https://completecoding.io/wp-content/uploads/2022/08/ch2.drawio.png)

这个项目的架构很简单，但这作为你的第一个项目。我们的想法是，你创建的 API 将接收一些参数，所以看起来像这样

```shell
https://apiurl.amazonaws.com/dev/steamdeals?currency=EUR
https://apiurl.amazonaws.com/dev/news/fr
```

逻辑将全部写进 Lambda 中。我不打算写完整的代码，但这里有一些伪代码:

```JavaScript
const handler = (event: APIGatewayProxyEvent) => {
    // get the path or query string parameter value

    // hit the first API to get the first data

    // get the data you need to translate / convert

    // pass the data from API1 into API2

    // combine the data 

    // return data in API Gateway format
} 
```

如果你需要一些免费和公共的 API 来使用，那么 [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) ，这里有一个庞大的文档供你选择.

然后构建这个尝试使用无服务器框架或 AWS CDK。这些工具将使你作为一个开发者的价值大大增加。

要开始使用 Serverless 框架 [查看此视频](https://youtu.be/HhgXwKFUzT8).

# 短网址器项目

这个项目将让你部署你的第一个 DynamoDB 表，然后从表中写入和读取数据。

![ch3-url-shortener.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch3-url-shortener.drawio.png)

将会有两个 API endpoints（端点）。一个是向缩短器添加新的 URL，一个是提供缩短后的 URL 并获得原始 URL。
下面是这两个 API 的伪代码:

```javascript
// Adding a new URL
const handler = (event: APIGatewayProxyEvent) => {
    // get their original url (body of the event)
    
    // generate a random 5 character code
    
    // write to Dyanamo - {id: code, url: originalUrl }
    
    // return the url (https://{apiurl}.amazonaws.com/dev/get/{code})
}
```

为了获得 `apiURL`，我们可以把它作为一个环境变量(environment variable)传入。如果你使用的是 Serverless 框架，你可以通过在配置的环境部分添加以下内容来实现这一点:

```json
apiUrl: {
  "Fn::Join": [
    "",
    [
      "https://",
      { Ref: "HttpApi" },
      ".execute-api.${self:provider.region}.amazonaws.com",
    ],
  ],
},
```

```JavaScript
// Getting a URL by code
const handler = (event: APIGatewayProxyEvent) => {
    // get code from the url path
    
    // get from dynamo by ID
    
    // return the original url
}
```

你可以更进一步，改变 `getUrl` 代码的状态代码，返回 301(永久重定向状态码)。你需要添加一些额外的消息头（headers），但这将自动将用户重定向到所需页面。

# 提醒应用程序项目

这个项目将教会你 Dynamo 的二级索引以及 Dynamo 的 Time-To-Live。你还可以尝试用亚马逊简单电子邮件服务（SES）实现电子邮件自动化，或者用简单通知服务（SNS）实现文本消息传递。

你还可以建立一个简单的前端应用程序，并学习在 S3 中托管它和使用 CloudFront 来分发它。

![ch4-reminder-app.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch4-reminder-app.drawio.png)

这个应用程序的想法是，你可以向第一个 API 发送一个新的提醒。这将在 DynamoDB 中写入一条新的记录，但你将为该表添加一个全局二级索引（GSI）。这意味着你可以通过 id 获得提醒，也可以基于用户进行查询。

它还将有一个 存活时间（TTL），这将允许你在提醒的时候触发一个 Lambda。设置提醒的代码看起来与之前的项目很相似。

该表将看起来像这样:

| id | userId | TTL | notificationType | message |
| --- | --- | --- | --- | --- |
| 123 | [test@gmail.com](mailto:test@gmail.com) | 1648277828 | email | Publish next youtube video |
| 897 | 447113350882 | 1648842828 | sms | Get More MILK |

存活时间（TTL）告诉 dynamo，一旦时间达到这个日期，就从 Dynamo 中删除该记录。

关于 TTL，有两件事需要注意:

- 确保这是删除日期的 Unix 时间戳，但以秒为单位。`new Date('october 20 2022').getTime()`的单位是毫秒，所以只需除以 1000。
- 记录将在你的 TTL 之后的 15 分钟内被删除，所以如果已经过了 5 分钟，记录还没有被删除，也不要惊慌。

然后，你可以设置第二个 Lambda，当记录从 Dynamo 被删除时，它会被触发。然后将信息发送到他们的电子邮件或电话。

```javascript
// Send reminder
const handler = async (event: DynamoDBStreamEvent) => {
    // get the list of deleted records
    
    // map over each record
       // Call SES or SNS to send the reminder
}
```

第二个 API 将是获取一个用户的所有提醒信息。确保你已经设置了一个 GSI （全局二级索引），分区键（partition key）为`userId`，排序键（sort key）为`TTL`。

```javascript
// Get My Reminders
const handler = (event: APIGatewayProxyEvent) => {
    // get the userId from request
    
    // params = KeyConditionExpression: "'userId' = userId",
    
    // Query Dynamo
    
    // format the reminders 
    
    // return to the user
}
```

对于前端，你可以写一个简单的网络应用，包括两个部分：创建新的提醒，以及列出我的提醒。这可以是 React、Vue、Angular，甚至是原始 HTML、CSS 和 JavaScript。

一旦你有了这个应用，你可以使用 `serverless-s3-sync` 来自动推送代码到 S3（你在 Serverless 中创建的）。

# 即时聊天应用程序项目

这个项目将教你如何建立 WebSockets。用户可以创建一个新的房间或加入一个现有的房间。任何发送的信息都会被发送到连接到房间的所有人那里。

![ch5-live-chat.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch5-live-chat.drawio.png)

WebSockets 的工作方式与常规 API 略有不同。你不是有多个端点(endpoints)，而是有一个端点和不同的消息类型。

有一些默认的消息类型和一些自定义的消息类型:

- connectToRoom – Custom
- createRoom – Custom
- onMessage – Custom
- disconnect – Default

当用户连接到 WebSocket 时，他们可以发送一个 `connectToRoom` 或 `createRoom` 消息。这两种方式都将在 Dynamo 中创建一条记录，其中包含用户的 WebSocket `connectionId`和 `roomId`。正如我们之前所做的，我们将在 Dynamo 中建立一个 GSI，这样我们以后就可以通过查询来获得所有用户的`roomId`。

`connectToRoom`和`createRoom`的代码将与以前的 `向Dynamo写数据` 的 lambdas 非常相似。

你可能想在 `connectToRoom` 中首先检查房间是否存在。你可以通过查询所有用户的 roomId 来做到这一点。如果房间里没有用户，那就意味着他们正试图连接到一个已经不存在的房间。

现在一个用户在一个房间里，他们可以发送一个消息。以下是该 Lambda 的伪代码:

```JavaScript
// onMessage
const handler = (event: WebsocketMessageEvent) => {
    // get the user's connectionId
    
    // get the user by connectionId from Dynamo to get the roomId
    
    // query for all users in that roomId
    
    // send the message to all users
    
    // return
}
```

最后是 onDisconnect，这将是一个简单的 Lambda，只是将用户的记录从 Dynamo 中删除。

# 创意投票应用项目

这个项目将教你设计和建立更高级的 Dynamo 表，同时与 Cognito 合作进行认证。你还应该为此建立一个简单的前端，以学习如何将 Cognito 集成到 Web 应用中。

这个工具允许你向你的社区提出意见，并找出其中最受欢迎的。

![ch6-idea-voting-app.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch6-idea-voting-app.drawio.png)

这要从所有用户需要在你的应用程序开始时注册。我们使用 Cognito，这样做是为了确保每个人只能投票一次。

然后你需要创建几个 API 端点:

- create a board
- add an idea to a board
- vote for an idea
- get board details

### 创建一个板块

我们需要的第一个 API 端点是用来创建一个新的创意板。任何人都可以创建一个论坛，Dynamo 中的记录非常简单。只有一个 "boardId"，然后是一些关于板块所有者的信息，也许是一个标题和描述。

| boardId | owner | title | description |
| --- | --- | --- | --- |
| boardId | userId | My awesome idea | some description |

### 将想法添加到一个板块中

接下来，我们需要能够将想法添加到一个板块（board）。这将是另一个 API 端点和 Lambda。对于想法数据库的记录，我们需要更聪明一些，因为我们需要能够直接引用一个想法，但也要获得一个板块(board)的所有想法。

为了做到这一点，我们有一个这样的模式。`pk`是一个分区键，`sk`是一个排序键，在 DynamoDB 上查询时都需要这两个键。

| id | pk | sk | idea | owner |
| --- | --- | --- | --- | --- |
| id | boardId | ideaId | the idea | userId |

通过 "id"，我们可以直接引用这个想法，但我们也可以查询这个记录。我们可以通过查询`pk = 1234` 来获得董事会`1234` 的所有想法。

### 对该想法进行投票

现在我们有了想法，我们需要我们的用户为他们投票。这将是一个新的 API 端点和 Lambda。这个 Lambda 比其他两个有更多的工作要做。首先，我们要看一下这个记录的模式。

| pk | sk | pk2 | sk2 |
| --- | --- | --- | --- |
| ideaId | userId | userId | ideaId |

这初看起来很奇怪，但我会解释为什么我们要这样构建它。

对于一个给定的想法，我们想知道它有多少票。我们可以通过查询 `pk = ideaId` 来了解，这将返回该想法的所有投票。

当添加投票时，我们要检查用户是否已经为该想法投票。我们可以通过查询`pk = ideaId && sk = userId` 来做到这一点。如果我们找到一个匹配的记录，我们就知道他们已经为这个想法投了票。如果没有，我们就可以为这个用户和想法添加`投票`记录。

### 获取详情

我们现在可以写一个 lambda，来查询我们所拥有的数据:

```JavaScript
export const handler = async (event: APIGatewayProxyEvent) => {
    // get boardId from the request
    // query all ideas on the board
    // map over each idea
        // query for all votes on this idea
    // format it all into a nice format
    // return to the user
}
```

### 为用户获取投票

最后，我们希望能够显示一个给定用户的所有投票。我们不能查询`sk = userId`，因为在查询 DynamoDB 时你总是需要一个分区键。因此，我们创建了第二个分区键(`pk2`)，其中包含了 userId。现在我们可以查询`pk2 = userId`来获得用户投票的所有想法。

这种拥有第二个 GSI 的模式非常普遍，其中 PK 和 SK 是对调的。它允许你有一个多对多的关系。你可以查询所有连接到特定 A 的 B 和所有连接到特定 B 的 A。

## 信息化应用项目

这个项目将教你了解 Dynamo 的复合键，并给你更多关于 websockets 和 Cognito 的练习。

这个应用程序允许用户注册，请求加入一个房间，然后查看该房间内已发送的所有信息。一个房间的主人决定是否让某人加入该房间。

![ch7-messaging-app-api.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch7-messaging-app-api.drawio.png)

架构开始时看起来很像即时聊天应用程序--有一个 WebSocket 连接，有`onConnect, onDisconect, create` Group, `joinGroup, listMyGroups handleJoinGroupRequest`和`sendMessage`的 Lambda。

在我们开始 Lambda 代码之前，我们要把 Cognito 添加到应用程序中，这样我们就可以让用户注册了。这将在以后用户请求访问某个组时使用。

`createGroup` Lambda 与即时聊天解决方案几乎相同。它只是创建一个简单的 `群组(group)`记录。

### Websocket Connect / Disconnect

现在，当一个用户登录并连接到 WebSocket 时，我们可以创建一个 onConnection Lambda。这将获得用户身份并验证他们的 Cognito 用户令牌。这个令牌将很容易给我们提供 userId 和 userName。

如果他们没有传递令牌(token)，或者令牌无效（或者已经过期），那么我们可以杀死 websocket，阻止他们在没有有效令牌的情况下做任何事情。

如果令牌是有效的，那么我们可以存储一个简单的连接记录。这将使我们能够在以后向 websocket 发送消息。

只需记住在用户断开与 WebSocket 的连接时删除该记录。我们可以使用默认的 `$disconnect` 动作来触发`onDisconnect` lambda。

### 创建一个组

有人需要做的第一件事是创建一个小组，然后邀请他们的朋友加入。

这将涉及在 Dynamo 中创建两条记录。第一条是小组的记录。这将包括群组 ID、群组名称，以及谁是群组所有者。

第二条将是一个组的成员记录。这将是说这个用户是这个组的一部分。

| pk | sk | pk2 | sk2 | userName | groupName |
| --- | --- | --- | --- | --- | --- |
| groupId | user#{userId} | userId | groupId | user name | group name |

这第一部分将允许我们查询 `pk = groupId and sk startsWith('user')` 以获得该组的所有用户。这将用于 `sendMessage` Lambda，以获得所有的用户来发送 WebSocket 消息。

添加第二部分（PK2，SK2）是为了让我们通过查询 `PK2 = userId` 来获得用户授权的所有组。这在我们需要获得所有用户组的列表时使用。

### 加入一个组

现在，`加入(join)` 组请求将在 Dynamo 中创建一个 `访问请求(access request)` 的记录。这不会让用户访问该组，但将允许该组的所有者审查访问请求。

这些记录将是我们第一次使用复合键。这是将排序键提升到一个新的层次，记录将看起来像这样:

| pk | sk |
| --- | --- |
| groupId | joinRequest#{userId} |

这使我们能够查询 `pk = groupId and sk startsWith('joinRequest')` 的地方。这将返回该组的所有访问请求。当有人提出这个请求时，我们可以首先检查他们是否是该组的所有者。

然后组主有两个选择——接受（accept）或拒绝（reject）。如果所有者拒绝该用户，我们可以直接删除访问请求记录。如果他们接受该用户，我们需要添加一个 `授权用户（authorised user）`。这将需要向 Dynamo 添加一条新的记录。

### 发送信息

现在我们进入了消息应用的核心,发送和存储消息。

在 `sendMessage` WebSocket Lambda 中，我们可以查询组内的所有用户，并向所有当前连接发送消息。我们还需要在 Dynamo 中存储消息。

| pk | sk | message | user |
| --- | --- | --- | --- |
| groupId | message#{timestamp} | my message | userId |

### 获取以前的信息

当用户登录时，他们需要能够得到他们在离线时错过的信息。有了这样的信息数据结构，我们可以查询到:

`pk = groupId and sk > 'message#{ timestamp for yesterday }'`

这将返回从昨天开始创建的所有消息。

我们也可以让他们通过传递他们的最后一条消息来获得更早的消息。这将使我们能够得到下一条信息。这将使我们能够在信息历史上创建一个无限的向上滚动。

## 事件驱动的电子商务系统项目

这个项目将教会你有关事件桥的知识，并给你一些有关 DynamoDB 表设计和服务的额外练习，如 SES 和 SNS 的电子邮件和文本。

这个系统将有产品和过滤，购物车和订单，正如你所期望的。这里的关键是，订单的下达、订单状态的改变和交付的更新都将通过 Event Bridge 来处理。

![ch8-event-ecomerce.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch8-event-ecomerce.drawio.png)

### 储存产品

首先，我们需要存储产品。我们可以用一种方式来构造我们的排序键，以便让我们的产品有一个层次的划分。

| id | pk | sk | title | description | ... |
| --- | --- | --- | --- | --- | --- |
| productId | clothing | mens#tops#{productId} | Next Slimfit T-Shirt | ... | ... |
| productId | clothing | womens#trousers#{productId} | Levi's Jeans | ... | ... |

这使得我们可以查询`pk = clothing and sk beginsWith mens`以获得所有男士的衣服，或者查询`pk = clothing and sk beginsWith womens#trousers`以获得所有女士的裤子。

### 下订单

接下来的部分是能够下订单。我们不打算尝试付款，只是向 dynamoDB 表添加一个订单记录。

### Event Bridge

这里最大的区别是，我们将开始使用 Event Bridge。这是一个工具，它允许我们拥有可以触发多个 lambdas 的事件。这很好，因为我们可以添加一个新的监听器，而不需要改变前期的代码。

### 创建订单

我们将有两个监听 "orderCreated "事件的 lambdas。第一个将获取订单数据，并将其发送到仓库 API 以获得包装。第二个将向用户发送一封订单确认邮件。

### 订单包装

我们要假装有一个真正的仓库，在得到订单的装箱单后，他们打包，让订单准备发货。他们有一个系统调用我们的 API，并将订单状态改为`packed'。

Dynamo 记录中的这一变化将触发另一个`orderPacked'的 Event Bridge 事件。这也有两个监听器：一个是通过电子邮件向用户发送更新信息，另一个是通过电子邮件让快递公司从仓库收取包裹并交付给客户。

### 已发货的订单（Order Shipped）

同样的，我们要假装一个快递公司拿了包裹并交付。他们调用另一个`Order Shipped`的 API 端点，这又改变了数据库中的订单状态。

这触发了另一个 "orderDelivered "的事件，这个事件有两个监听器:

一个用于向客户发送 "感谢 "信息。

另一个将做一些不同的事情。它将接收订单，删除任何个人数据，并将其存储到另一个 DynamoDB 表。

这是作为数据科学家的准备步骤而变得越来越普遍的事情。我们删除个人数据，以减少法律问题，但仍然允许数据科学家做一些事情，如训练一个模型，给你 `人们也买了。。。` 之类的建议。

## 下一步是什么

如果你喜欢这些项目的想法，但不知道从哪里开始，那么我有一个完整的视频课程，将教你如何建立所有这些项目。

[在此查看该课程](https://completecoding.mykajabi.com/7-serverless-projects).

你还可以下载这些项目的 [免费 PDF](https://completecoding.mykajabi.com/7-practical-project-pdf)，这样你就可以在学习过程中直观地看到你的进展。
