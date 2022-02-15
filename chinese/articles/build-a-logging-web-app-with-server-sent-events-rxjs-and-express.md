> - 原文地址：[How to Build a Logging Web App with Server-Sent Events, RxJS, and Express](https://www.freecodecamp.org/news/build-a-logging-web-app-with-server-sent-events-rxjs-and-express/)
> - 原文作者：[Shayan](https://www.freecodecamp.org/news/author/shayan/)
> - 译者：luojiyin
> - 校对者：

![How to Build a Logging Web App with Server-Sent Events, RxJS, and Express](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/Frame-11.png)

假设你正在研究你的新的伟大想法--一个网络或移动应用程序，以及一个后端服务器。到目前为止，没有什么太复杂的东西。直到你意识到你需要将数据从你的服务器流向这些客户端。

通常，在处理这个问题时，首先想到的是使用社区里的一个很酷的工具，如WebSockets、SocketIO，甚至是一个付费服务，为你处理这个问题。

但是，还有一种方法通常被遗漏了，你可能还没有听说过它。它叫做SSE，是服务器发送事件的简称。

SSE在我心中有一个特殊的位置，因为它很简单。它是轻量级的，高效的，而且非常强大。

为了详细解释SSE以及我如何使用它，我将介绍我的一个小项目，我认为这是SSE的一个很好的展示。我将使用Typescript、Express和RxJS，所以请准备好你的环境并系好安全带，因为我们即将进入一些代码

在我们开始之前，你应该知道一些关于SSE的事情。顾名思义，服务器发送的事件是单向的，从你的服务器到客户端。如果你的客户需要把数据流回给服务器，这可能是个大问题。但在很多情况下不是这样的，我们可以直接依靠REST来向服务器发送数据。

## 项目是怎样的?

这个项目的想法很简单。我有一堆脚本在树莓派上运行，还有部署在Digital Ocean上的，以及其他一些我不容易访问的地方。因此，我希望有一种方法可以打印出日志，并从任何地方查看它们。

作为一个解决方案，我希望有一个基本的网络应用程序来推送我的日志，并有一个直接链接到我的会话，我可以在任何设备上打开，甚至与其他人分享。

在我们开始之前，有几件事情需要记住。

First, logs coming from my scripts are not that frequent, and the overhead of using HTTP is negligible for my use case. Because of this, I decided to publish my logs over a basic REST API and use SSE on the client-side to subscribe the incoming logs.

![Frame-8-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-8-1.png)

Logging Example

Second, this tool is mainly for quickly debugging things I'm working on. There are many production-ready and enterprise tools out there that I could use instead. But I wanted something very light and easy to use.

## Let's Write Some Server-side Code

The server-side setup is straightforward. So let's start with a diagram to give you an idea of the setup before explaining everything in detail.

![Frame-10-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-10-1.png)

Server Diagram

If we think of our backend server as a pipeline, on one end we have a series of publishers – in our case, the scripts publishing logs. On the other end, we have some clients subscribing to these logs.

To connect these two ends, I will be using an RxJS Subject. It will allow me to publish anything from the publishers over REST and then subscribe to these events and forward the messages to the clients over SSE.

To get started, let's define our Log interface. To keep things simple, I will only define a content field that will hold our log information.

```ts
interface Log {
  content: string;
}
```

### How to set up RxJS

Let's import RxJS, create a new Subject for our Logs, and define a function to publish our logs to this Subject.

Of course, we could export our Subject and directly call it from our router, but I prefer to abstract away the implementation and only provide the emit function to the rest of my code.

```ts
import { Subject } from 'rxjs';

// Log Subject
const NewLog$ = new Subject<Log>();

/**
 * Emit a new log to the RxJS subject
 * @param log
 */
export function emitNewLog(log: Log): void {
    NewLog$.next(log);
}
```

Finally, let's define a new route on our Express server that would accept new logs from our client and publish them to the emitNewLog method that we have just created.

```ts
app.post('/', (req: Request, res: Response) => {
  const content = req.body.content;
  const log: Log = { content: content };
  emitNewLog(log);
  return res.status(200).json({ ok: true });
});
```

We are now done with the publishing side. What's left is to define our SSE route, subscribe to the RxJS Subject, and deliver the logs to our client.

### How to set up the SSE Route

Let's define a new route for our SSE connection. To enable SSE, we need to flush a couple of headers back to our client.

We want the **‘Connection’** set to **‘keep-alive’**, **‘Cache-Control’** set to ‘**no-cache**’, and **‘Content-Type’** set to **‘text/event-stream’**. This way our client will understand that this is an SSE route.

In addition, I have added **‘Access-Control-Allow-Origin’** for CORS and **‘X-Accel-Buffering’** set to **‘no’** to keep [Nginx](https://www.nginx.com/) from messing with this route. Finally, we can flush the headers back to our client to kickstart the event stream.

```ts
app.get('/', (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();
});
```

We can now start streaming data by writing something into our response.

SSE provides a text-based protocol that we can use to help our clients differentiate between the event types. Each one of our events should look like the following:

```ts
event: ${event name}\n
data: ${event data}\n\n
```

To make my life a bit easier, I have created a helper function to take care of serialization for us.

```ts
/**
 * SSE message serializer
 * @param event: Event name
 * @param data: Event data
 */
function serializeEvent(event: string, data: any): string {
  const jsonString = JSON.stringify(data);
  return `event: ${event}\ndata: ${jsonString}\n\n`;
}
```

We can now subscribe to the RxJS Subject we created earlier, serialize each new log, and write it as a **NEW\_LOG** event to our connection.

```ts
app.get('/', (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  NewLog$.subscribe((log: Log) => {
    res.write(serializeEvent('NEW_LOG', log));
  });

}
```

Finally, we have to make sure to unsubscribe from our observer when the SSE connection is closed. Putting all of these together, we should have something like this:

```ts
app.get('/', (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const stream$ = NewLog$.subscribe((log: Log) => {
    res.write(serializeEvent('NEW_LOG', log));
  });

  req.on('close', () => {
    stream$.unsubscribe();
  });
});
```

That’s it! We are done with our backend server and it’s time to move to the frontend code.

## Write the Client Code

Subscribing to our SSE route on the browser is very straightforward. First, let’s move to our client code and create a new instance of the **EventSource** interface and pass our endpoint to the constructor.

```js
const eventSource = new EventSource("/");
```

Then, we can add event listeners for the events we want to subscribe to (in our case, **NEW\_LOG**) and define a callback method to handle our log.

```js
eventSource.addEventListener(
   "NEW_LOG", (event) => {
       const log = JSON.parse(event.data);
       // use the data to update the UI
    }, false
);
```

And finally, we can close the connection whenever we are done listening to these events.

```js
eventSource.close();
```

## Conclusion

As you can see, Server-Sent Events make it very easy to stream content from the server to the client. They are specifically helpful because we get a built-in interface in most modern browsers, and we can easily poly-fill for those that do not provide the interface.

In addition, SSE automatically handles re-connect for us in case the client loses connection with the server. Therefore, it is a valid alternative to SocketIO and WebSockets in various scenarios where we need a uni-directional event streaming from the server.

If you are further interested in this project, I have added a couple of extra functionalities to the code that we just went over and a web GUI that you can check out here: [LogSnag Console](https://logsnag.com/console).

![Frame-9-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-9-1.png)

Console Demo
