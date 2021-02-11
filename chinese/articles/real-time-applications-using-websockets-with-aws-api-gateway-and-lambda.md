> - 原文地址：[How to build real-time applications using WebSockets with AWS API Gateway and Lambda](https://www.freecodecamp.org/news/real-time-applications-using-websockets-with-aws-api-gateway-and-lambda-a5bb493e9452/)
> - 原文作者：Janihta Tennakoon
> - 译者：ZhichengChen
> - 校对者：

![How to build real-time applications using WebSockets with AWS API Gateway and Lambda](https://cdn-media-1.freecodecamp.org/images/0*OaDVOjdkCturioO_.png)

by Janitha Tennakoon

最近 AWS 宣布推出了一项广受欢迎的功能：Amazon API Gateway 的 WebSockets。通过 WebSockets，可以构建双向通讯，用于一些诸如实时应用程序的场景。那么问题来了，什么是实时应用程序呢？我们先来解答这个问题。

目前大部分的应用都是客户端 - 服务器架构。在这种架构中，客户端使用网络通信通过 Internet 发送请求，然后服务器处理该请求并将响应返回给客户端。

客户端 - 服务器架构中客户端是通信的发起方，首先，客户端发起通讯，然后服务器返回服务生成的请求。如果服务端想直接向客户端推送消息，而不是被动的响应客户端的请求该怎么办呢？实时应用程序的用武之地就到啦。

实时应用程序就是服务器无需客户端请求数据就可以直接向客户端推送消息的应用程序。假设我们有一个聊天应用程序，客户端之间可以通过服务器进行通信。如果客户端通过轮询的方式每秒向服务器发送请求判断是否有新消息，会增加服务器的成本。更有效率的做法是当客户端需要收消息时服务器直接推送消息给客户端。这个功能可以通过实时应用程序来完成。

在 2018 AWS re:Invent 上 Amazon 宣布将在 API Gateway 中支持 WebSockets。12 月下旬，API Gateway 正式支持了 WebSockets。也就是说，现在通过 AWS 的基础设施就可以创建一个实时应用程序。

在本文中，我们将使用 API Gateway WebSockets 创建一个简单的聊天应用程序。再开始之前，需要了解一些关于实时应用程序和 API Gateway 的概念。

## WebSocket API 概念

WebSocket API 由一个或多个路由组成。请求通过路由表达式选择的特定路由，表达式根据请求匹配与路由的 routeKey 相对应的值。比如，如果请求的 JSON 消息包含 action 属性，想要根据不同的 action 执行不同的操作，那么可以通过 `${request.body.action}` 路由表达式来匹配路由执行相应的操作。

比如，如果请求的 JSON 消息为 `{"action": "onMessage", message: "Hello everyone"}`，那么这个请求将会匹配 onMessage 路由。

默认情况下，WebSocket API 中已经定义了三个路由。除了下面提到的三个路由外，还可以根据需要定制路由。

- **$default** - 当路由表达式匹配不到 API 中的其它路由时，会默认使用这个路由。可以用于实现错误处理。
- **$connect** - 客户端第一次连接到 WebSocket API 时关联的路由。
- **$disconnect** - 客户端从 API 断开连接时关联的路由。

通过 WebSocket API 成功连接客户端后，将为该客户端分配唯一的 connection id。一旦建立连接，connection id 将在整个生命周期内保持不变。向客户端推送消息时，需要发送带有 connection id 的 POST 请求，如下。

```apl
POST https://{api-id}.execute-api.us-east 1.amazonaws.com/{stage}/@connections/{connection_id}
```

## 实现聊天室应用

在学习了 WebSocket API 的基本概念之后，来看一下如何使用 WebSocket API 创建实时应用程序。在本文中，我们将使用 WebSocket API、AWS Lambda 和 DynamoDB 实现一个简单的聊天应用程序。下图展示了实时应用程序的架构。

![](https://cdn-media-1.freecodecamp.org/images/EiHc2HzJkq621fqsah0gFRGo6J0298tfu5KF)

在我们的应用中，客户端将连接到 API Gateway。当客户端连接后，lambda 函数会将 connection id 保存在 DynamoDB 表中。在这里我们还需要向客户端推送消息，另一个 lambda 函数会检索需要发送客户端的 connection id，然后通过向 callback URL 发送 POST 请求将数据推送到客户端。

### 创建 WebSocket API

创建 WebSocket API，首先需要进入 Amazon API Gateway 服务控制台。选择 Create new API。单击 WebSocket 创建一个 WebSocket API，指定 API name 和路由选择表达式（Route Selection Expression）。在这里，添加 `${request.body.action}` 路由表达式，点击 Create API。

![](https://cdn-media-1.freecodecamp.org/images/Fu3WT1nNu67o1AEQbVvyqPjF4Xfgdy5DIdU8)

创建 API 后，会重定向到路由页面。在这里可以看到三个预定义的路由：`$connect、$disconnect 和 $default`。在我们的架构中，`$connect 和 $disconnect` 路由完成以下任务：

- **$connect** - 当调用此路由时，Lambda 函数会将客户端的  connection id 添加到 DynamoDB。
- **$disconnect** - 当调用此路由时 ，Lambda 函数会从 DynamoDB 中删除断开连接的客户端的 connection id。
- **onMessage** - 当调用此路由时，消息会发送到当前已经连接的所有的客户端。

在根据上述步骤添加路由之前，我们还需要完成如下四个任务：

- 创建一个 DynamoDB 表
- 创建一个 lambda connect 函数
- 创建一个 lambda disconnect 函数
- 创建一个 lambda onMessage 函数

首先，来创建 DynamoDB 表。进入 DynamoDB 控制台创建一个名为 Chat 的新表。添加主键 'connectionid'。

![](https://cdn-media-1.freecodecamp.org/images/tC0qYzoiulwhYS3pdneXVn1uzu927lCTm2Mz)

接下来，创建一个  Lambda connect 函数。进入 Lambda 控制台点击 create function。选择 Author from Scratch，指定名字 'ChatRoomConnectFunction' 以及含有必需的权限的 role。（role 应该具有从 DynamoDB get、put 和 delete 项目的权限，以及通过 API gateway 调用 API 的权限。）

在 lambda 函数的代码区域添加如下代码。这个代码将会添加连接客户端的 connection id 到我们刚刚创建的 DynamoDB 表中。

```javascript
exports.handler = (event, context, callback) => {
     const connectionId = event.requestContext.connectionId;
     addConnectionId(connectionId).then(() => {
         callback(null, {statusCode: 200,})
     });
}

function addConnectionId(connectionId) {
    return ddb.put({
        TableName: 'Chat',
        Item: {
            connectionid : connectionId
        },
    }).promise();
}
```

接下来，创建一个 Lambda disconnect 函数。按照上面的步骤创建一个名为 'ChatRoomDisconnectionFunction' 的函数。函数代码如下。代码会在客户端断开连接时从 DynamoDB 表中删除 connection id。

```javascript
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const connectionId = event.requestContext.connectionId;
    addConnectionId(connectionId).then(() => {
        callback(null, {statusCode: 200,})
    });
}

function addConnectionId(connectionId) {
    return ddb.delete({
        TableName: 'Chat',
        Key: {
            connectionid : connectionId,
        },
    }).promise();
}
```

现在我们已经创建了一个 DynamoDB 表和两个 lambda 函数。在创建第三个函数之前，让我们回到 API Gateway 控制台使用刚刚创建的 lambda 函数来配置路由。首先，点击 `$connect` 路由，集成类型（ ingegration type）选择 Lambda 函数然后选择 ChatRoomConnectionFunction。

![](https://cdn-media-1.freecodecamp.org/images/Jm4gDZE2iTvkM7jjEIbD5dJwxMpfQqNJcxaw)

同样使用 ChatRoomDisconnectionFunction Lambda 函数配置 `$disconnect` 路由：

![](https://cdn-media-1.freecodecamp.org/images/xydcct1RcCF4MMgATbCUE7RoOlVw5Zx-rBzy)

现在已经配置了 `$connect 和 $disconnect` 路由，已经可以测试一下 WebSocket API 了。测试之前需要部署 API。在 Actions 按钮的下拉选项里，点击 Deploy API 来发布。指定一个 stage name 如 Test 表明我们发布 API 的目的是为了测试。

![](https://cdn-media-1.freecodecamp.org/images/Bflmr7zIfPBtVbdcQw-FhWrdWLomxD5wSMIu)

部署之后，会看到两个 URL。第一个是 WebSocket URL，第二个是 Connection URL。

![](https://cdn-media-1.freecodecamp.org/images/81K7bxiFXv-JMJx8b5jScxBmnjkKM4brxY9Q)

WebSocket URL 是客户端通过 WebSocket 连接到 API 的 URL。第二个 URL，即 Connection URL，是接下来用于向已连接客户端推送消息的 URL。由于还没有配置客户端推送，目前可以仅测试 `$connect 和 $disconnect` 路由。

为了便于测试 WebSocket，可以使用 wscat 工具。在命令行中执行 `npm  install  -g wscat` 命令来安装它。安装成功后就可以使用了。执行如下命令，连接到 WebScoket API，注意使用自己的 URL 替换 WebSocket URL。

```bash
wscat -c wss://bh5a9s7j1e.execute-api.us-east-1.amazonaws.com/Test
```

![](https://cdn-media-1.freecodecamp.org/images/8uYGb6iG04XmfBsGOWxhLsxAenVIafGSWRE3)

连接成功后，会在终端上 显示 connected，可以到 DynamoDB 控制台中看表中是否新增了终端连接的 connection id 记录，来确保 lambda 函数已经生效。

![](https://cdn-media-1.freecodecamp.org/images/uMqXnECECOiDAkC4NcS4OYjWgpvLOsUBNA8z)

同理，也可以通过在按下 CTRL + C 来模拟断开连接来测试 disconnect。

现在已经测试了两个路由，接下来看看自定义的 onMessage 路由。onMessage 路由的功能是接受客户端发送的消息，并将该消息发送到所有连接到该 WebSocket API 的客户端。为此我们需要另一个 lambda 函数，来从 DynamoDB 表中查询所有的已连接客户端的 connection id，然后给他们推送消息。

首先如上创建一个名为 ChatRoomOnMessageFunction 的 lambda 函数，代码如下：

```javascript
const AWS = require('aws-sdk');const ddb = new AWS.DynamoDB.DocumentClient();require('./patch.js');

let send = undefined;
function init(event) {
    console.log(event)
    const apigwManagementApi = new AWS.ApiGatewayManagementApi({    
      apiVersion: '2018-11-29',
      endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
    });
    send = async (connectionId, data) => {
    await apigwManagementApi.postToConnection({
      ConnectionId: connectionId,
      Data: `Echo: ${data}` }).promise();  
    }
}

exports.handler =  (event, context, callback) => {
    init(event);
    let message = JSON.parse(event.body).message      
    getConnections().then((data) => {
        console.log(data.Items);          
        data.Items.forEach(function(connection) {           
            console.log("Connection " +connection.connectionid)           
            send(connection.connectionid, message);
        });
    });
  return {}
};

function getConnections(){
  return ddb.scan({
    TableName: 'Chat',
  }).promise();
}
```

上面的代码会扫描 DynamoDB 表中所有的记录。然后使用 API 中提供的 Connection URL 向其发送消息。在代码中，lambda 函数会解析 message 属性，然后将其发送到所有的已连接的客户端。

由于 WebSockets API 刚发布不久不够完善，还在迭代。需要我们手动执行一些操作。创建一个名为 patch.js 的文件了，在其添加如下代码。

```javascript
require('aws-sdk/lib/node_loader');
var AWS = require('aws-sdk/lib/core');
var Service = AWS.Service;var apiLoader = AWS.apiLoader;
apiLoader.services['apigatewaymanagementapi'] = {};
AWS.ApiGatewayManagementApi = Service.defineService('apigatewaymanagementapi', ['2018-11-29']);
Object.defineProperty(apiLoader.services['apigatewaymanagementapi'], '2018-11-29', {
    get: function get() {
        var model = {
            "metadata": {
                "apiVersion": "2018-11-29",
                "endpointPrefix": "execute-api",
                "signingName": "execute-api",
                "serviceFullName": "AmazonApiGatewayManagementApi",
                "serviceId": "ApiGatewayManagementApi",
                "protocol": "rest-json",
                "jsonVersion": "1.1",
                "uid": "apigatewaymanagementapi-2018-11-29",
                "signatureVersion": "v4"
            },
            "operations": {
                "PostToConnection": {
                    "http": {
                        "requestUri": "/@connections/{connectionId}",
                        "responseCode": 200
                    },
                    "input": {
                        "type": "structure",
                        "members": {
                            "Data": {
                                "type": "blob"
                            },
                            "ConnectionId": {
                                "location": "uri",
                                "locationName": "connectionId"
                            }
                        },
                        "required": [
                            "ConnectionId",
                            "Data"
                        ],
                        "payload": "Data"
                    }
                }      
            },
            "shapes": {}
        }
        model.paginators = {
            "pagination": {}
        }
        return model;
    },
    enumerable: true,
    configurable: true
});
module.exports = AWS.ApiGatewayManagementApi;
```

这些代码参考了[这篇文章][1]。代码的功能是为 API 自动生成 Callback URL 然后发送 POST 请求。

![](https://cdn-media-1.freecodecamp.org/images/Uq12ZG3KNn38ut5jQQLRjOPebZBuLIxxqesW)

现在已经创建了 lambda 函数，可以继续在 API Gateway 中创建自定义路由。在新的 Route Key 中，添加 'onMessage' 自定义路由。完成路由配置后，将 lambda 函数添加到此路由上然后部署 API。

现在已经完成了 WebSocket API，可以完整的测试这个应用程序了。可以打开多个终端来模拟多个客户端间发送消息。

连接成功后，用如下 JSON 发送消息；

```
{"action" : "onMessage" , "message" : "Hello everyone"}
```

在这里，action 是我们自定义的路由，message 是需要发送到其它客户端的消息。

![](https://cdn-media-1.freecodecamp.org/images/hHo2bGE-lEcSiKIF9CNUpHwXJrKj05h2F5mV)

这就是使用  AWS WebSocket API 实现的简单的聊天应用程序。实际上我们并未配置 `$default` 路由，该路由会在路由无法成功匹配时调用，这个路由的实现就交给你啦。此致，下一篇文章见 ：）

[1]: https://hackernoon.com/websockets-api-gateway-9d4aca493d39
