
> - 原文地址：[The Benefits of Going RESTful – What is REST and Why You Should Learn About It](https://www.freecodecamp.org/news/benefits-of-rest/)
> - 原文作者：[YiğitKemalErinç](https://www.freecodecamp.org/news/author/erinc/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Benefits of Going RESTful – What is REST and Why You Should Learn About It](https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/1_sPLooWMag11pjZnzYXIQCA.png)

在这篇文章中，我们将看看表现层状态转换（REST）原则，了解它们是什么，以及你能从应用它们中得到什么好处。

我相信了解你为什么要学习一些东西是很重要的--包括REST。因此，让我们来看看REST原则带来了什么。

## 什么是REST?

表现层状态转换（REST）是一种架构风格，由于其简单性和可扩展性，近年来得到了很多人的青睐。

在REST得到普及之前，SOAP是访问资源和通过网络进行通信的事实方式。

## 你为什么要考虑REST？

在本节中，我将讨论为什么REST原则很重要，以及为什么值得努力去了解它们。你还将学习如何将它们应用于你的后端项目。

### 1) REST很容易理解和实施

EST是为了在HTTP上工作（实际上HTTP受到了REST的影响）。因此，它使用了我们大多数人都知道的HTTP动词，如GET、POST和PUT。

即使你不知道这些动词是干什么的，它们的名字也是不言自明的。另外，客户端和服务器代码的明确分离使得不同的团队很容易在应用程序的不同部分（前端或后端）工作。

由于它很容易理解，也很容易实现，REST原则可以帮助提高你的开发团队的生产力。如果你要发布一个公共API供人们开发应用，它们也很重要。

许多人知道REST和HTTP，所以他们会更容易理解和使用你的API。

![How to Keep Your Developer Team Happy: Lead Dev New York 2019 | Arc Blog](https://ucarecdn.com/f9a4640d-ba7f-4f85-82eb-901a56362a9a/)

Happy Developers


### 2) REST使你的应用程序更具可扩展性

有2个主要的原因，REST可以帮助使你的应用程序更具可扩展性:

#### 无状态

正如我们将在下一节（REST的原则）中看到的，REST的核心原则之一是它在服务器端是无状态的。因此，每个请求的处理都将独立于之前的请求。

在具有服务器端状态或会话的应用程序中，可能为每个登录的用户存储一个会话。这种会话数据很容易变得臃肿，并开始占用服务器上的大量资源。

另一方面，无状态服务器只在处理请求时占用资源（内存），一旦请求被处理完毕，就会释放资源。

由于目前可扩展性的趋势是水平扩展（通常是在云上），存储服务器端的会话也会使你的应用程序难以扩展，因为它产生了一些困难的问题。

例如，假设你有许多服务器，它们在一个负载平衡器后面运行。如果客户在他们的第一个请求中到达了服务器1（服务器1现在拥有客户的会话），而在后来，由于服务器1的负载，客户到达了服务器2，而服务器2并不知道他们之前存储在服务器1上的会话数据，那么会发生什么？当然，这个问题有解决办法，但它使可扩展性更加困难。

#### 更快的数据交换格式

RESTful APIs通常使用JSON作为数据交换格式。与XML相比，JSON更紧凑，尺寸更小。它也可以比XML更快地被解析。([对比数据来源](http://ijcsn.org/IJCSN-2014/3-4/JSON-vs-XML-A-Comparative-Performance-Analysis-of-Data-Exchange-Formats.pdf))

虽然他们大多使用JSON操作，但也要记住，REST APIs仍然能够通过使用 [Accept header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)来响应不同的格式。

### 3) 使用REST缓存更容易

缓存是现代网络应用程序可扩展性和性能的一个关键因素。一个完善的缓存机制（具有最佳的命中率）可以大大减少服务器的平均响应时间。

REST的目的是使缓存更容易。由于服务器是无状态的，每个请求都可以单独处理，GET请求通常应该返回相同的响应，而不考虑之前的请求和会话。

这使得GET请求很容易被缓存，浏览器通常也会这样对待它们。我们也可以使用 **Cache-Control** 和 **Expires** 头来使我们的POST请求可以缓存。

### 4) REST是灵活的

我所说的灵活性是指它很容易修改，而且它还能回答许多客户的要求，他们可以要求不同的数据类型（XML、JSON等）。

客户端可以使用**Accept**头来指定类型（正如我前面提到的），REST API可以根据这一点返回不同的响应。

另一个值得一提的机制是 [HATEOAS](https://www.wikiwand.com/en/HATEOAS#:~:text=Hypermedia%20as%20the%20Engine%20of,provid%20information%20dynamically%20through%20hypermedia。)。如果你不知道这个词，不要担心，它的基本意思是。在服务器响应中返回某一特定资源的相关URLs。

看一下维基百科上的这个例子。客户端从银行的API中请求带有 `account_number` 的账户信息，得到这样的响应:

```json

{
    "account": {
        "account_number": 12345,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposit": "/accounts/12345/deposit",
            "withdraw": "/accounts/12345/withdraw",
            "transfer": "/accounts/12345/transfer",
            "close": "/accounts/12345/close"
        }
    }
}
```


这个服务器利用HATEOAS并返回相应的行动链接。这使得探索API非常容易，同时也通过允许服务器改变端点而使其变得灵活。

可以这样想：如果服务器没有应用HATEOAS，客户就需要对端点进行硬编码，如 "/accounts/:account-id/deposit"。但如果服务器将URL改为 "/accounts/:account-id/depositMoney"，客户端的代码也需要改变。

在HATEOAS链接的帮助下，客户端可以通过解析这个JSON来检查链接，并轻松提出请求。如果端点发生变化，他们将得到新的端点，而不需要改变客户端的代码。

关于这个话题的更多见解，你可以查看 Roy Fielding 的[此](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)博文。

## 总结

在这篇文章中，我试图表达我为什么重视REST，以及为什么我相信你也应该重视它。我希望在读完这篇文章后，你会更清楚应用REST标准的原因。

这篇文章可以作为学习更多相关知识的动力。而且我有个好消息：我计划在不久的将来写关于REST最佳实践和常见错误的文章。

如果你有兴趣，你可以继续关注或订阅我的[博客](http://erinc.io/)。你也可以在那里看一下我以前的文章:)

如果你有任何问题或想进一步讨论这个话题，你可以随时联系我。

祝你新年快乐，感谢你的阅读。 :)
