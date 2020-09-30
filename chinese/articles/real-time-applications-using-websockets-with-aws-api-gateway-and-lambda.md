> -   原文地址：[How to build real-time applications using WebSockets with AWS API Gateway and Lambda 使用 WebSockets，AWS API Gateway 和 Lambda 创建实时应用程序](https://www.freecodecamp.org/news/real-time-applications-using-websockets-with-aws-api-gateway-and-lambda-a5bb493e9452/)
> -   原文作者：Janitha Tennakoon
> -   译者：
> -   校对者：

![How to build real-time applications using WebSockets with AWS API Gateway and Lambda](https://cdn-media-1.freecodecamp.org/images/0*OaDVOjdkCturioO_.png)

by Janitha Tennakoon

Recently AWS has announced the launch of a widely-requested feature: WebSockets for Amazon API Gateway. With WebSockets, we are able to create a two-way communication line which can be used in many scenarios like real-time applications. This brings up the question: what are real-time applications? So let’s first answer that question.

Most of the applications that are currently operational use client-server architecture. In client-server architecture, the client sends the requests over the Internet using network communication and then the server processes that request and sends the response back to the client.

Here you can see that it is the client that starts off the communication with the server. So first the client initiates the communication and the server responds to the request sent by the server. So what if the server wants to start off the communication and push responses without the client requesting them first? That is where real-time applications come into the play.

Real-time applications are applications where the server gets the ability to push to the clients without the client requesting data first. Assume we have a chat application where two chat clients can communicate via a server. In this situation, it is a waste if all the chat clients request data from the server like every second. What is more efficient is if the server sends data to client chat applications when a chat is received. This functionality can be done through real-time applications.

Amazon announced that they are going to support WebSockets in API Gateway at AWS re:Invent 2018. Later in December, they launched it in the API Gateway. So now using AWS infrastructure we are able to create real-time applications using API Gateway.

In this post, we are going to create a simple chat application using API Gateway WebSockets. Before we start implementing our chat application, there are some concepts that we need to understand regarding real-time applications and API Gateway.

### WebSocket API Concepts

A WebSocket API is composed of one or more routes. A _route selection expression_ is there to determine which route a particular inbound request should use, which will be provided in the inbound request. The expression is evaluated against an inbound request to produce a value that corresponds to one of your route’s _routeKey_ values. For example, if our JSON messages contain a property call action, and you want to perform different actions based on this property, your route selection expression might be `${request.body.action}`.

For example: if your JSON message looks like {“action” : “onMessage” , “message” : “Hello everyone”}, then the onMessage route will be chosen for this request.

By default, there are three routes which are already defined in the WebSocket API. In addition to the below-mentioned routes, we can add custom routes for our needs.

-   **\$default** — Used when the route selection expression produces a value that does not match any of the other route keys in your API routes. This can be used, for example, to implement a generic error handling mechanism.
-   **\$connect** — The associated route is used when a client first connects to your WebSocket API.
-   **\$disconnect** — The associated route is used when a client disconnects from your API.

Once a device is successfully connected through WebSocket API, the device will be allocated with a unique connection id. This connection id will be persisted throughout the lifetime if the connection. To send messages back to the device we need to use the following POST request using the connection id.

```
POST https://{api-id}.execute-api.us-east 1.amazonaws.com/{stage}/@connections/{connection_id}
```

### Implementing chat application

After learning the basic concepts of the WebSocket API, let us look at how we can create a real-time application using WebSocket API. In this post, we are going to implement a simple chat application using WebSocket API, AWS LAmbda and DynamoDB. The following diagram shows the architecture of our real-time application.

![](https://cdn-media-1.freecodecamp.org/images/EiHc2HzJkq621fqsah0gFRGo6J0298tfu5KF)

In our application, devices will be connected to the API Gateway. When a device gets connected, a lambda function will save the connection id in a DynamoDB table. In an instance where we want to send a message back to the device, another lambda function will retrieve the connection id and POST data back to the device using a callback URL.

#### Creating WebSocket API

In order to create the WebSocket API, we need first go to Amazon API Gateway service using the console. In there choose to create new API. Click on WebSocket to create a WebSocket API, give an API name and our Route Selection Expression. In our case add \$request.body.action as our selection expression and hit Create API.

![](https://cdn-media-1.freecodecamp.org/images/Fu3WT1nNu67o1AEQbVvyqPjF4Xfgdy5DIdU8)

After creating the API we will be redirected to the routes page. Here we can see already predefined three routes: $connect, $disconnect and $default. We will also create a custom route $onMessage. In our architecture, $connect and $disconnect routes achieve the following tasks:

-   \$connect — when this route is called, a Lambda function will add the connection id of the connected device to DynamoDB.
-   \$disconnect — when this route is called, a Lambda function will delete the connection id of the disconnected device from DynamoDB.
-   onMessage — when this route is called, the message body will be sent to all the devices that are connected at the time.

Before adding the route according to the above, we need to do four tasks:

-   Create a DynamoDB table
-   Create connect lambda function
-   Create disconnect lambda function
-   Create onMessage lambda function

First, let us create the DynamoDB table. Go to DynamoDB service and create a new table called Chat. Add primary key as ‘connectionid’.

![](https://cdn-media-1.freecodecamp.org/images/tC0qYzoiulwhYS3pdneXVn1uzu927lCTm2Mz)

Next, let’s create the connect Lambda function. To create the Lambda function, go to Lambda services and click create function. Select Author from scratch and give the name as ‘ChatRoomConnectFunction’ and a role with necessary permissions. (The role should have the permission to get, put and delete items from DynamoDB, call API calls in API gateway.)

In the code of the lambda function add the following code. This code will add the connection id of the connected device to the DynamoDB table that we have created.

```
exports.handler = (event, context, callback) => {    const connectionId = event.requestContext.connectionId;    addConnectionId(connectionId).then(() => {    callback(null, {        statusCode: 200,        })    });}
```

```
function addConnectionId(connectionId) {    return ddb.put({        TableName: 'Chat',        Item: {            connectionid : connectionId        },    }).promise();}
```

Next, let us create the disconnect lambda function as well. Using the same steps create a new lambda function named  
‘ChatRoomDonnectFunction’. Add the following code to the function. This code will remove the connection id from the DynamoDB table when a device gets disconnected.

```
const AWS = require('aws-sdk');const ddb = new AWS.DynamoDB.DocumentClient();
```

```
exports.handler = (event, context, callback) => {    const connectionId = event.requestContext.connectionId;    addConnectionId(connectionId).then(() => {    callback(null, {        statusCode: 200,        })    });}
```

```
function addConnectionId(connectionId) {    return ddb.delete({        TableName: 'Chat',        Key: {            connectionid : connectionId,        },    }).promise();}
```

Now we have created the DynamoDB table and two lambda functions. Before creating the third lambda function, let us go back again to API Gateway and configure the routes using our created lambda functions. First, click on \$connect route. As integration type, select Lambda function and select the ChatRoomConnectionFunction.

![](https://cdn-media-1.freecodecamp.org/images/Jm4gDZE2iTvkM7jjEIbD5dJwxMpfQqNJcxaw)

We can do the same on \$disconnect route as well where the lambda function will be ChatRoomDisconnectionFunction:

![](https://cdn-media-1.freecodecamp.org/images/xydcct1RcCF4MMgATbCUE7RoOlVw5Zx-rBzy)

Now that we have configured our $connect and $disconnect routes, we can actually test whether out WebSocket API is working. To do that we must first to deploy the API. In the Actions button, click on Deploy API to deploy. Give a stage name such as Test since we are only deploying the API for testing.

![](https://cdn-media-1.freecodecamp.org/images/Bflmr7zIfPBtVbdcQw-FhWrdWLomxD5wSMIu)

After deploying, we will be presented with two URLs. The first URL is called WebSocket URL and the second is called Connection URL.

![](https://cdn-media-1.freecodecamp.org/images/81K7bxiFXv-JMJx8b5jScxBmnjkKM4brxY9Q)

The WebSocket URL is the URL that is used to connect through WebSockets to our API by devices. And the second URL, which is Connection URL, is the URL which we will use to call back to the devices which are connected. Since we have not yet configured call back to devices, let’s first only test the $connect and $disconnect routes.

To call through WebSockets we can use the wscat tool. To install it, we need to just issue the `npm install -g wscat` command in the command line. After installing, we can use the tool using wscat command. To connect to our WebSocket API, issue the following command. Make sure to replace the WebSocket URL with the correct URL provided to you.

```
wscat -c wss://bh5a9s7j1e.execute-api.us-east-1.amazonaws.com/Test
```

![](https://cdn-media-1.freecodecamp.org/images/8uYGb6iG04XmfBsGOWxhLsxAenVIafGSWRE3)

When the connection is successful, a connected message will be displayed on the terminal. To check whether our lambda function is working, we can go to DynamoDB and look in the table for the connection id of the connected terminal.

![](https://cdn-media-1.freecodecamp.org/images/uMqXnECECOiDAkC4NcS4OYjWgpvLOsUBNA8z)

As above, we can test the disconnect as well by pressing CTRL + C which will simulate a disconnection.

Now that we have tested our two routes, let us look into the custom route onMessage. What this custom route will do is it will get a message from the device and send the message to all the devices that are connected to the WebSocket API. To achieve this we are going to need another lambda function which will query our DynamoDB table, get all the connection ids, and send the message to them.

Let’s first create the lambda function in the same way we created other two lambda functions. Name the lambda function ChatRoomOnMessageFunction and copy the following code to the function code.

```
const AWS = require('aws-sdk');const ddb = new AWS.DynamoDB.DocumentClient();require('./patch.js');
```

```
let send = undefined;function init(event) {  console.log(event)    const apigwManagementApi = new AWS.ApiGatewayManagementApi({    apiVersion: '2018-11-29',    endpoint: event.requestContext.domainName + '/' + event.requestContext.stage  });        send = async (connectionId, data) => {  await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: `Echo: ${data}` }).promise();  }}
```

```
exports.handler =  (event, context, callback) => {  init(event);  let message = JSON.parse(event.body).message    getConnections().then((data) => {        console.log(data.Items);        data.Items.forEach(function(connection) {           console.log("Connection " +connection.connectionid)           send(connection.connectionid, message);        });    });        return {}};
```

```
function getConnections(){    return ddb.scan({        TableName: 'Chat',    }).promise();}
```

The above code will scan the DynamoDB to get all the available records in the table. For each record, it will POST a message using the Connection URL provided to us in the API. In the code, we expect that the devices will send the message in the attribute named ‘message’ which the lambda function will parse and send to others.

Since WebSockets API is still new there are some things we need to do manually. Create a new file named patch.js and add the following code inside it.

```
require('aws-sdk/lib/node_loader');var AWS = require('aws-sdk/lib/core');var Service = AWS.Service;var apiLoader = AWS.apiLoader;
```

```
apiLoader.services['apigatewaymanagementapi'] = {};AWS.ApiGatewayManagementApi = Service.defineService('apigatewaymanagementapi', ['2018-11-29']);Object.defineProperty(apiLoader.services['apigatewaymanagementapi'], '2018-11-29', {  get: function get() {    var model = {      "metadata": {        "apiVersion": "2018-11-29",        "endpointPrefix": "execute-api",        "signingName": "execute-api",        "serviceFullName": "AmazonApiGatewayManagementApi",        "serviceId": "ApiGatewayManagementApi",        "protocol": "rest-json",        "jsonVersion": "1.1",        "uid": "apigatewaymanagementapi-2018-11-29",        "signatureVersion": "v4"      },      "operations": {        "PostToConnection": {          "http": {            "requestUri": "/@connections/{connectionId}",            "responseCode": 200          },          "input": {            "type": "structure",            "members": {              "Data": {                "type": "blob"              },              "ConnectionId": {                "location": "uri",                "locationName": "connectionId"              }            },            "required": [              "ConnectionId",              "Data"            ],            "payload": "Data"          }        }      },      "shapes": {}    }    model.paginators = {      "pagination": {}    }    return model;  },  enumerable: true,  configurable: true});
```

```
module.exports = AWS.ApiGatewayManagementApi;
```

I took the above code from this [article][1]. The functionality of this code is to automatically create the Callback URL for our API and send the POST request.

![](https://cdn-media-1.freecodecamp.org/images/Uq12ZG3KNn38ut5jQQLRjOPebZBuLIxxqesW)

Now that we have created the lambda function we can go ahead and create our custom route in API Gateway. In the New Route Key, add ‘OnMessage’ as a route and add the custom route. As configurations were done for other routes, add our lambda function to this custom route and deploy the API.

Now we have completed our WebSocket API and we can fully test the application. To test that sending messages works for multiple devices, we can open and connect using multiple terminals.

After connecting, issue the following JSON to send messages:

```
{"action" : "onMessage" , "message" : "Hello everyone"}
```

Here, the action is the custom route we defined and the message is the data that need to be sent to other devices.

![](https://cdn-media-1.freecodecamp.org/images/hHo2bGE-lEcSiKIF9CNUpHwXJrKj05h2F5mV)

That is it for our simple chat application using AWS WebSocket API. We have not actually configured the \$defalut route which is called on every occasion where there no route is found. I will leave the implementation of that route to you. Thank you and see you in another post. :)

[1]: https://hackernoon.com/websockets-api-gateway-9d4aca493d39
