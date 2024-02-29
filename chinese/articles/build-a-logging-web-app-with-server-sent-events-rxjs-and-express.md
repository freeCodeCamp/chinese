> - 原文地址：[How to Build a Logging Web App with Server-Sent Events, RxJS, and Express](https://www.freecodecamp.org/news/build-a-logging-web-app-with-server-sent-events-rxjs-and-express/)
> - 原文作者：[Shayan](https://www.freecodecamp.org/news/author/shayan/)
> - 译者：luojiyin
> - 校对者：

![How to Build a Logging Web App with Server-Sent Events, RxJS, and Express](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/Frame-11.png)

假设你正在研究你的新的伟大想法--一个网络或移动应用程序，以及一个后端服务器。到目前为止，没有什么太复杂的东西。直到你意识到你需要将数据从你的服务器流向这些客户端。

通常，在处理这个问题时，首先想到的是使用社区里的一个很酷的工具，如 WebSockets、SocketIO，甚至是一个付费服务，为你处理这个问题。

但是，还有一种方法通常被遗漏了，你可能还没有听说过它。它叫做 SSE，是服务器发送事件的简称。

SSE 在我心中有一个特殊的位置，因为它很简单。它是轻量级的，高效的，而且非常强大。

为了详细解释 SSE 以及我如何使用它，我将介绍我的一个小项目，我认为这是 SSE 的一个很好的展示。我将使用 Typescript、Express 和 RxJS，所以请准备好你的环境并系好安全带，因为我们即将进入一些代码

在我们开始之前，你应该知道一些关于 SSE 的事情。顾名思义，服务器发送的事件是单向的，从你的服务器到客户端。如果你的客户需要把数据流回给服务器，这可能是个大问题。但在很多情况下不是这样的，我们可以直接依靠 REST 来向服务器发送数据。

## 项目是怎样的?

这个项目的想法很简单。我有一堆脚本在树莓派上运行，还有部署在 Digital Ocean 上的，以及其他一些我不容易访问的地方。因此，我希望有一种方法可以打印出日志，并从任何地方查看它们。

作为一个解决方案，我希望有一个基本的网络应用程序来推送我的日志，并有一个直接链接到我的会话，我可以在任何设备上打开，甚至与其他人分享。

在我们开始之前，有几件事情需要记住。

首先，来自我的脚本的日志不是那么频繁，而且对于我的使用情况来说，使用 HTTP 的开销可以忽略不计。正因为如此，我决定通过一个基本的 REST API 发布我的日志，并在客户端使用 SSE 来订阅传入的日志。

![Frame-8-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-8-1.png)

日志实例

第二，这个工具主要用于快速调试我正在做的事情。外面有很多生产用的和企业用的工具，我可以用它们代替。但我想要一个非常轻巧和容易使用的工具。

## 我们来写一些服务器端的代码

服务器端的设置是很简单的。因此，在详细解释一切之前，让我们从一张图开始，让你对设置有一个概念。

![Frame-10-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-10-1.png)

服务器图示

如果我们把我们的后端服务器看作是一个管道，在一端我们有一系列的发布者--在我们的例子中，是发布日志的脚本。在另一端，我们有一些客户在订阅这些日志。

为了连接这两端，我将使用 RxJS。它将允许我通过 REST 发布来自发布者的任何信息，然后订阅这些事件并通过 SSE 将消息转发给客户端

为了开始，让我们定义我们的日志接口。为了保持简单，我将只定义一个内容字段，用来保存我们的日志信息。

```ts
interface Log {
  content: string;
}
```

### 如何设置 RxJS

让我们导入 RxJS，为我们的日志创建一个新的 Subject，并定义一个函数来发布我们的日志到这个 Subject。

当然，我们可以导出我们的 Subject 并直接从我们的路由中调用它，但我更喜欢抽象实现，只向我的代码的其他部分提供函数调用。

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

最后，让我们在我们的 Express 服务器上定义一个新的路由，它将接受来自客户端的新日志，并将它们发布到我们刚刚创建的 emitNewLog 方法。

```ts
app.post('/', (req: Request, res: Response) => {
  const content = req.body.content;
  const log: Log = { content: content };
  emitNewLog(log);
  return res.status(200).json({ ok: true });
});
```

我们现在已经完成了发布方面的工作。剩下的就是定义我们的 SSE 路由，订阅 RxJS Subject，并将日志交付给我们的客户端。

### 如何设置 SSE 路由

让我们为我们的 SSE 连接定义一个新的路由。为了启用 SSE，我们需要将一些头信息(headers)返回给我们的客户。

我们希望**'Connection'**设置为**'keep-alive'**，**'Cache-Control'**设置为'**no-cache**'，并且**'Content-Type'**设置为**'text/event-stream'**。这样，我们的客户就会明白这是一个 SSE 路由。

此外，我还为 CORS 添加了**'Access-Control-Allow-Origin'**，并将**'X-Accel-Buffering'**设置为**'no'**，以防止[Nginx](https://www.nginx.com/)干扰这个路由。最后，我们可以将头信息冲回给我们的客户端，以启动事件流。

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

我们现在可以通过在我们的响应(response)中写一些东西来开始流式数据(streaming data)。

SSE 提供了一个基于文本的协议，我们可以用它来帮助我们的客户区分事件的类型。我们的每一个事件都应该看起来像下面这样。

```ts
event: ${event name}\n
data: ${event data}\n\n
```

为了让我的生活更轻松一些，我创建了一个辅助函数来为我们处理序列化问题。

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

我们现在可以订阅我们先前创建的 RxJS Subject，序列化每个新的日志，并将其作为一个**NEW/_LOG**事件写入我们的连接。

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

最后，我们必须确保在 SSE 连接关闭时取消对观察者的订阅。把所有这些放在一起，我们应该有这样的东西。

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

这就是了! 我们已经完成了后端服务器的工作，现在是时候进入前台代码了。

## 编写客户端代码

在浏览器上订阅我们的 SSE 路由是非常简单的。首先，让我们移动到我们的客户端代码，创建一个**EventSource**接口的新实例，并将我们的端点传递给构造函数。

```js
const eventSource = new EventSource("/");
```

然后，我们可以为我们想要订阅的事件添加事件监听器（在我们的例子中，**NEW_LOG**），并定义一个回调方法来处理我们的日志。

```js
eventSource.addEventListener(
   "NEW_LOG", (event) => {
       const log = JSON.parse(event.data);
       // use the data to update the UI
    }, false
);
```

最后，只要我们听完了这些事件，我们就可以关闭连接。

```js
eventSource.close();
```

## 结语

正如你所看到的，服务器发送事件使得从服务器到客户端的内容流变得非常容易。它们特别有帮助，因为我们在大多数现代浏览器中得到了一个内置的接口，对于那些不提供接口的浏览器，我们可以很容易地进行降级处理。

此外，在客户端与服务器失去连接的情况下，SSE 自动为我们处理重新连接。因此，它是 SocketIO 和 WebSockets 的有效替代方案，在各种情况下，我们需要从服务器获得单向的事件流。

如果你对这个项目进一步感兴趣，我在刚才的代码中增加了一些额外的功能，还有一个 web GUI，你可以在这里查看。[LogSnag Console](https://logsnag.com/console)。

![Frame-9-1](https://www.freecodecamp.org/news/content/images/2022/02/Frame-9-1.png)

Console Demo
