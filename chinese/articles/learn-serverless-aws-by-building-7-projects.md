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

# Combination API Project

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

# URL Shortener Project

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

# Reminder App Project

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

# Live Chat App Project

This project will teach you how to build WebSockets. A user can either create a new 'room' or join an existing room. Any messages sent are sent to everyone connected to the room.

![ch5-live-chat.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch5-live-chat.drawio.png)

WebSockets work slightly differently than regular APIs. Instead of having multiple endpoints, you have one endpoint and different message types.

There are some default message types and some custom ones:

- connectToRoom – Custom
- createRoom – Custom
- onMessage – Custom
- disconnect – Default

When a user connects to the WebSocket, they can either send a `connectToRoom` or `createRoom` message. Both of these will create a record in Dynamo with the user's WebSocket `connectionId` and the `roomId`. As we did before, we'll have a GSI in Dynamo so we can later query to get all users for a `roomId`.

The code for `connectToRoom` and `createRoom` will look very similar to previous "writing data to Dynamo" lambdas.

You may want to check in `connectToRoom` that the room does exist first. You can do that by querying for all users by roomId. If there are no users in the room then that means they're trying to connect to a room that doesn't exist anymore.

Now a user is in a room they can send a message. Here's the pseudo-code for that Lambda:

```
// onMessage
const handler = (event: WebsocketMessageEvent) => {
    // get the user's connectionId
    
    // get the user by connectionId from Dynamo to get the roomId
    
    // query for all users in that roomId
    
    // send the message to all users
    
    // return
}
```

Finally, there is the onDisconnect which will be a simple Lambda that just deletes the user's record from Dynamo.

# Idea Voting App Project

This project will teach you to design and build more advanced Dynamo tables and also work with Cognito for authentication. You should also build a simple front end for this to learn how to integrate Cognito into web apps.

The tool allows you to ask your community for ideas and find out which of those are most popular.

![ch6-idea-voting-app.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch6-idea-voting-app.drawio.png)

This starts with all users needing to sign up to your application. We use Cognito for this and do it so that we can ensure that each person can only vote once.

You'll need to then create a few endpoints:

- create a board
- add an idea to a board
- vote for an idea
- get board details

### Create a board

The first API endpoint that we need is one to create a new board for ideas. Anyone can create a board and the record in Dynamo is really simple. Just a `boardId` and then some info about the board owner, maybe a title and description.

| boardId | owner | title | description |
| --- | --- | --- | --- |
| boardId | userId | My awesome idea | some description |

### Add ideas to a board

Next we need to be able to add ideas to a board. This will be another API endpoint and Lambda. With the idea database record we need to be a bit smarter as we need to be able to directly reference an idea, but also get all ideas for a board.

To do this we have a schema like this. `pk` is a partition key and `sk` is a sort key, which are both needed for querying on DynamoDB.

| id | pk | sk | idea | owner |
| --- | --- | --- | --- | --- |
| id | boardId | ideaId | the idea | userId |

With the `id` we can directly reference the idea, but we can also query on the record. We can get all ideas for board `1234` by querying for `pk = 1234`.

### Add vote to the idea

Now that we have ideas on the board, we need our users to vote for them. This will be a new API endpoint and Lambda. This Lambda has a bit more work to do than the other two. First, we'll look at the schema for this record.

| pk | sk | pk2 | sk2 |
| --- | --- | --- | --- |
| ideaId | userId | userId | ideaId |

This may look strange at first but I'll explain why we want to structure it like this.

For a given idea, we want to know how many votes it has. We can find that out by querying on  `pk = ideaId` which will return all votes for the idea.

When adding a vote we want to check that the user hasn't already voted for the idea. We can do that by querying `pk = ideaId && sk = userId`. If we find a record that matches, we know they've already voted for this idea. If not then we can add the `vote` record for this user and idea.

### Get Board Details

We can now write a lambda that will query the data we have:

```
export const handler = async (event: APIGatewayProxyEvent) => {
    // get boardId from the request
    // query all ideas on the board
    // map over each idea
        // query for all votes on this idea
    // format it all into a nice format
    // return to the user
}
```

### Get votes for a user

Lastly, we want to be able to show all votes for a given user. We can't query where `sk = userId` as you always need a partition key when querying DynamoDB. Therefore we created a second partition key (`pk2`) which contains the userId. Now we can query `pk2 = userId` to get all ideas that a user has voted for.

This pattern of having a second GSI where the PK and SK are switched is very common. It allows you to have a many-to-many relationship. You can query for all of B that are connected to a specific A and all of A that are connected to a specific B. This is often called a junction table.

## Messaging App Project

This project will teach you to about Dynamo compound keys and give you more practice with websockets and Cognito.

This app allows users to sign up, request to join a room, and then see all messages that have been sent in that room. The owner of a room decides whether to let someone join the room.

![ch7-messaging-app-api.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch7-messaging-app-api.drawio.png)

The architecture will start by looking a lot like the live chat application – with a WebSocket connection with Lambdas for `onConnect, onDisconect, create`Group, `joinGroup, listMyGroups handleJoinGroupRequest` and `sendMessage`.

Before we get onto the Lambda code, we want to add Cognito to the application so we can have users signup. This will be used later when a user requests access to a group.

The `createGroup` Lambda will be almost identical to the live chat solution. It just creates a simple `group` record.

### Websocket Connect / Disconnect

Now when a user logs in and connects to the WebSocket, we can create an onConnection Lambda. This will get the userId and verify their Cognito user token. This token will easily give us the userId and userName.

If they don't pass a token or the token is invalid (or has expired) then we can kill the websocket, stopping them from doing anything else without a valid token.

If the token is valid then we can store a simple connection record. This will allow us to send messages back down the websocket later.

Just remember to delete this record when the user disconnects from the WebSocket. We can use the default `$disconnect` action to trigger an `onDisconnect` lambda.

### Create a group

The first thing that someone needs to be able to do is to create a group that they can then invite their friends to.

This will involve creating two records in Dynamo. The first is just a record of the group. This will include the group ID, group name, and who is the group owner.

The second is going to be a group membership record. This will be saying that this user is part of this group.

| pk | sk | pk2 | sk2 | userName | groupName |
| --- | --- | --- | --- | --- | --- |
| groupId | user#{userId} | userId | groupId | user name | group name |

This first part will allow us to query on `pk = groupId and sk startsWith('user')` to get all users for the group. That will be used in the `sendMessage` Lambda to get all the users to send the WebSocket message to.

The second parts (PK2, SK2) are added to allow us to get all groups that a user is authorised for by querying where `PK2 = userId`. This is used when we need to get a list of all of the user's groups.

### Joining a group

The `join` Group request will now create a record in Dynamo for an `access request`. This will not give the user access to the group but will allow the owner of the group to review the access requests.

These records will be the first time that we're going to use compound keys. This is taking the sort key to the next level and the record will look like this:

| pk | sk |
| --- | --- |
| groupId | joinRequest#{userId} |

This enables us to query where `pk = groupId and sk startsWith('joinRequest')`. This will return all of the access requests for that group. When someone makes this request we can first check that they are the owner of the group.

The group owner then has two options – accept or reject. If the owner rejects the user we can just delete the access request record. If they accept the user then we need to add an `authorised user`. This will require a new record to Dynamo.

### Send Message

Now we're onto the core of the messaging app – sending and storing messages.

In the `sendMessage` WebSocket Lambda, we can query for all users in the group and send the message to all current connections. We also need to store the message in Dynamo.

| pk | sk | message | user |
| --- | --- | --- | --- |
| groupId | message#{timestamp} | my message | userId |

### Get Previous Messages

When a user logs in they need to be able to get the messages they missed whilst offline. With the message data structured this way, we can query where:

`pk = groupId and sk > 'message#{ timestamp for yesterday }'`

This will return all messages created since yesterday.

We could also allow them to get older messages by passing up the last message they have. This will allow us to get the next chuck of messages. This will allow us to create an infinite up scroll on the message history.

## Event Driven E-Commerce System Project

This project will teach you about Event Bridge, plus give you some extra practice with DynamoDB Table design and services like SES and SNS for email and text.

This system will have products and filtering, carts and orders as you would expect. The key here is that order placement, order status changes, and delivery updates will all be handled through Event Bridge.

![ch8-event-ecomerce.drawio](https://www.freecodecamp.org/news/content/images/2022/08/ch8-event-ecomerce.drawio.png)

### Storing Products

To start we need to store products. We can structure our sort keys in a way to allow a level of hierarchy for our products.

| id | pk | sk | title | description | ... |
| --- | --- | --- | --- | --- | --- |
| productId | clothing | mens#tops#{productId} | Next Slimfit T-Shirt | ... | ... |
| productId | clothing | womens#trousers#{productId} | Levi's Jeans | ... | ... |

This allows us to query for `pk = clothing and sk beginsWith mens` to get all men's clothes or for `pk = clothing and sk beginsWith womens#trousers` to get all women's trousers.

### Placing an Order

The next part is being able to place an order. We're not going to try and take payment, just add an order record to the dynamoDB table.

### Event Bridge

The big difference here is that we're going to start using Event Bridge. This is a tool which allows us to have events which can trigger multiple lambdas. This is great as we can add a new listener without having to change the upfront code.

### Order Created

We're going to have two lambdas that listen for the `orderCreated` event. The first is going to take the order data and send it to a warehouse API to get packed. The second is going to send the user an order confirmation email

### Order Packed

We're going to pretend that there is a real warehouse and after getting the order packing list, they packed up and got the order ready for shipping. They have a system that calls our API and changes the order status to `packed`.

This change in the Dynamo record will trigger another Event Bridge event for `orderPacked`. This also has two listeners: one to email an update to the user, and another to email a delivery service to collect the parcel from the warehouse and deliver it to the customer.

### Order Shipped

Similarly we're going to pretend that a delivery company took the parcel and delivered it. They call another `Order Shipped` API endpoint and that changes the status of the order in the database again.

That triggers another event for `orderDelivered` and that has two listeners:

One for sending a "thank you" message to the customer.

And another one that will do something a bit different. It will take the order, remove any personal data, and store it into another DynamoDB table.

This is something becoming increasingly common as a preparation step for a data scientist. We remove the personal data to reduce the legal issues but still allow a data scientist to do things like train a model to give you "People also bought ……" kinds of recommendations.

## What's Next

If you like these project ideas but don't know where to start, then I have a full video course that will teach you how to build all of these projects.

[Check out the course here](https://completecoding.mykajabi.com/7-serverless-projects).

You can also download a [Free PDF](https://completecoding.mykajabi.com/7-practical-project-pdf) of these projects so you can visualise your progress in your learning journey.
