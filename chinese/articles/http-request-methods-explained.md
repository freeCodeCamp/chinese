> -  原文地址：[HTTP Request Methods – Get vs Put vs Post Explained with Code Examples](https://www.freecodecamp.org/news/http-request-methods-explained/)
> -  原文作者：[Camila Ramos Garzon](https://www.freecodecamp.org/news/author/camiinthisthang/)
> -  译者：ZhichengChen
> -  校对者：

![HTTP Request Methods – Get vs Put vs Post Explained with Code Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/FCC-Cover.png)

在本文中，我们将讨论 get、put 和 post HTTP 方法。介绍每种 HTTP 方法的用途以及使用场景。

为了深入了解 HTTP 方法的工作原理，本文还将介绍 HTTP 有关上下文和背景信息。

### 这篇文章讲要介绍的主题

-   HTTP 协议
-   客户端-服务器架构
-   APIs

读完本文，将对每个请求方法的定位有一个很好的了解。还将具备发起请求和使用 Web API 的经验。

## 什么是 HTTP？

HTTP 是一种协议，或一组明确的规则，用于访问网络上的资源。资源可以是任何东西，从 HTML 文件到数据库中的数据、照片、文本等等。

通过 HTTP 协议向这些 API 发出请求，然后返回相应的资源。`API`代表应用程序编程接口。它是开发人员请求资源的机制。

### 客户端-服务器架构

学习 HTTP 方法前，理解客户端/服务器架构的概念很重要。该架构描述了 Web 应用程序的工作方式，并定义了通信的规则。

客户端是用户实际与之交互的应用程序，它展示所需的内容。服务器是将内容或资源发送到客户端的应用程序。服务器在某处持续运行等待客户端的请求。

这种分离的主要原因是为了保护敏感信息。如果整个应用程序都被下载到浏览器中，任何访问网页的人都可以访问所有数据。

这种架构有助于保护 API 密钥、个人数据等。现在，[Next.js](https://nextjs.org/) 和 [Netlify](https://www.netlify.com/) 等流行工具允许开发人员在与其客户端程序中运行服务器代码， 无需部署到专用的服务器上。

### 客户端-服务器通信

客户端和服务器根据需要每次单独发送消息进行通信，而不是持续的流通信。

这些通信几乎总是由客户端以请求的形式发起。这些请求由服务器应用程序完成，返回包含请求的资源的响应。

### 为什么我们需要服务器-客户端架构

假设正在构建一个网络天气应用。用户要与之交互的是客户端程序——它有按钮、搜索栏，并显示城市名称、当前温度、AQI 等数据。

天气应用不会将每个城市及其天气信息直接硬编码到程序中。这会使应用程序变得臃肿而缓慢，检索数据添加到数据库需要花费很长时间，而且每天的更新的也很让人头疼。

相反，该应用程序可以使用 Weather Web API 按城市访问天气数据。应用程序会收集用户的位置，然后向服务器发出请求，说：“嘿，把这个城市的天气信息发给我。”

根据要实现的目标，将使用不同的请求方法。服务器返回一个包含天气信息等内容的响应，具体取决于 API 的设计。它还可能会返回时间戳、该城市所在的区域等信息。

客户端与运行在某处的服务器进行通信，服务器的工作就是不断地到监听是否有到该地址的请求。当它接收到请求时，它会基于传入的参数从数据库或者另一个 API 或者本地文件查询返回符合要求的响应。

### HTTP 请求剖析

HTTP 请求必须具有以下内容：

-   HTTP 方法（如 `GET`）
-   主机 URL（如`https://api.spotify.com/`）
-   端点路径（如 `v1/artists/{id}/related-artists`）

请求还可选包含：

-   Body 请求体
-   Headers 
-   查询字符串
-   HTTP 版本号

### HTTP 响应剖析

响应必须具有以下内容：

-   协议版本（如`HTTP/1.1`）
-   状态码（如 `200`）
-   状态文本（`OK`）
-   Headers

响应还可选具有：

-   Body 响应体

## HTTP 方法解释

Post Malone 意味着 Get、Put、Patch 和 Delete Malone 的存在。

 — Paul Ford (@ftrain) [November 15, 2019](https://twitter.com/ftrain/status/1195350262145306624?ref_src=twsrc%5Etfw)

现在我们知道了什么是 HTTP 以及为什么需要它，让我们来聊聊这些不同的 HTTP 方法。

在上面的天气应用程序示例中，我们想要检索某城市的天气信息。但是如果我们想提交一个城市的天气信息该如何请求呢？

在现实生活中，可能无权更改其他人的数据，但假设我们是社区运行的天气应用程序的贡献者。除了从 API 获取天气信息外，该城市的成员还可以更新此信息以显示更准确的数据。

或者，如果我们想完全添加一个由于某种原因在我们的城市数据库中不存在的新城市怎么办？ 这些是不同的功能——检索数据、更新数据、创建新数据——所有这些都有对应的 HTTP 方法。

### HTTP POST 请求

 `POST` 用来创建一个新资源。`POST` 请求需要一个请求体，可以在其中定义要创建的实体数据。

 POST 请求成功返回的状态码是 200。在天气应用中，可以使用 POST 方法来添加新城市。

### HTTP GET 请求

 `GET` 用来读取或检索资源。 `GET` 成功后会返回包含所请求信息的响应。

在天气应用中，可以使用 GET 来检索某城市当前的天气。

### HTTP PUT 请求

 `PUT` 用来修改资源。`PUT` 用请求体 payload 中的数据替换整个资源。如果没有与请求体唯一标识相匹配的资源，它将创建一个新资源。

在天气应用中，可以使用 `PUT` 来更新指定城市的所有天气数据。

### HTTP PATCH 请求

`PATCH` 用来修改资源的部分字段。使用 `PATCH`，只需要传入想要更新的字段即可。

在天气应用中，可以使用 `PATCH` 来更新指定城市指定日期的降雨量。

### HTTP 删除请求

 `DELETE` 可以用来删除资源。在天气应用中，可以使用 `DELETE` 删除出于某种原因不再想跟踪的城市。

## HTTP Methods 常见问题解答

### PUT 和 POST 有什么区别？

`PUT` 请求是幂等的，这意味着执行相同的 `PUT` 请求将始终产生相同的结果。

另一方面，`POST` 会产生不同的结果。如果多次执行 `POST` 请求，将多次创建新资源，尽管传入的是相同的数据。

使用餐厅类比，多次 `POST` 会创建多个独立的订单，而多次 `PUT` 请求将更新现有的订单。

### PUT 和 PATCH 有什么区别？

主要区别在于，如果 `PUT` 找不到指定的资源，它将创建一个新资源。而使用 `PUT` 时，需要传入改数据的全部资源，即使只想修改一个字段。

使用 `PATCH`，可以只传入要更新字段更新资源。

### 如果我只想更新我的部分资源怎么办？ 我还能使用 PUT 吗？

如果只想更新部分资源，则在发出 `PUT` 请求时仍需要发送整个资源的数据。这里更适合的选项是 `PATCH`。

### 为什么请求和响应的 body 是可选的？

body 是可选的，因为对于某些请求，例如使用 `GET` 方法检索资源，请求正文中无需指定任何内容。可以从指定端点检索所有数据。

类似地，当状态码足够或正文中没有要返回的内容时，某些响应的主体是可选的，如 `DELETE` 操作。

## HTTP 请求示例

现在已经介绍了什么是 HTTP 请求，以及它们的使用场景，让我们发起一些请求！这里将使用 [GitHub Gist API](https://docs.github.com/en/rest/reference/gists)。

 “Gist 是一种与他人共享代码段的简单方法。所有 Gist 都是 Git 仓库，因此可以使用 Git 的版本控制，fork 等功能。” （来源：Github）

为此，需要一个 GitHub 帐户。如果还没有，这是一个很好的时机来创建一个以在将来保存代码。

GitHub 上的每个用户都可以创建 gist、检索他们的 gist、检索所有公共 gist、删除 gist 和更新 gist，等等。为了简单起见，我们将使用 [Hoppscotch](https://hoppscotch.io/)，这是一个可以方便地发起 HTTP 请求的一个可视化平台。

快速上手 Hoppscotch：

-   有一个下拉菜单，可以在其中选择要用来创建请求的 method。
-   有一个文本框，可以在其中粘贴要访问的 API 端点的 URL。

![Screen-Shot-2022-01-24-at-12.35.33-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-12.35.33-PM.png)

-   有一个 Headers 部分，我们将按照 GitHub 文档的说明在其中传递请求头。

![Screen-Shot-2022-01-24-at-12.39.38-PM-1](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-12.39.38-PM-1.png)

-   有一个 body 区域，可以按照 GitHub 文档的指示将相应的请求实体写入 body。

![Screen-Shot-2022-01-24-at-12.41.14-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-12.41.14-PM.png)

-   如果请求成功，右栏会显示通知。如果它是绿色的，表示成功发起了请求，如果它是红色的，代表有错误。

![Screen-Shot-2022-01-24-at-3.44.56-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-3.44.56-PM.png)

### 如何发出 GET 请求

要创建 `GET` 请求以检索所有特定用户的 gists，可以使用以下方法和端点：`GET /users/{username}/gists`。按照文档可以通过 endpoint 传入指定的参数来发起请求。

可以看到在路径中需要传入一个带有目标用户用户名的字符串。还需要传入一个名为 accept 的 headers 并将其设置为 `application/vnd.github.v3+json`。

![Screen-Shot-2022-01-20-at-2.01.35-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-2.01.35-PM.png)

API 的 URL 为：

```shell
https://api.github.com
```

此特定操作的端点路径为：

```
/users/{username}/gists
```

要发起此请求：

1.  在 Hoppscotch 的输入字段中粘贴完整的 URL + 路径。请务必将“username”替换为实际用户名。如果还没有创建过 Gists 的 GitHub 账号，可以先使用我的：camiinthisthang。
2.  选择`GET`请求方法
3.  在 Headers 选项卡中，将 accept 设置为 header 并将值设置为 `application/vnd.github.v3+json`

![Screen-Shot-2022-01-24-at-12.39.38-PM-2](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-12.39.38-PM-2.png)

4\. 点击发送！

在底部，会看到格式为 `JSON` 的响应。为了便于阅读，复制响应并将其粘贴到 [在线 JSON 格式化程序](https://jsonformatter.curiousconcept.com/#)。

在格式化程序中，可以知道响应是一个对象数组。每个对象代表一个 gist，向我们展示 URL、ID 等信息。

### 如何发出 POST 请求

现在来使用 `POST` 方法创建一个资源。在这种情况下，新资源将是一个新的 gist。

首先，需要创建一个个人 access token。为此，[转到设置页面](https://github.com/settings/tokens)并点击生成令牌。

命名 token 并选择 scope “Create Gists”：

![Screen-Shot-2022-01-20-at-2.59.11-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-2.59.11-PM.png)

然后单击页面底部的绿色 `Generate token` 按钮。

![Screen-Shot-2022-01-20-at-3.28.01-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-3.28.01-PM.png)

复制 access 代码并将其粘贴到合适的位置。

现在准备好发起的请求了！根据文档应该在 body 中传递一个 headers 和一个 `files` 对象。可选传入一些其他参数，包括一个布尔值，它代表这个 gist 是公共的还是私有的。

![Screen-Shot-2022-01-20-at-2.07.23-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-2.07.23-PM.png)

API 的 URL 如下：

```shell
https://api.github.com
```

此操作的端点路径如下：

```
/gists
```

要发起此请求：

1. 将完整的 URL + 路径粘贴到 Hoppscotch 的输入字段中。

2. 选择`POST`请求方法

3. 在 Headers 选项卡中，将 accept 设置为 header 并将值设置为 `application/vnd.github.v3+json`

4. 在 Body 选项卡中，将内容类型设置为 `application/json`。然后从一个对象`{}`开始。

   在这个对象内部，将 public `boolean` 设置为 `true`。然后将定义属性 `files`，其值是另一个对象，其键名是新 gist 名称。值应该是另一个其键为 `content` 的对象。这里的值应该是想要实际添加到要点中的任何值。

   可以复制/粘贴以下代码：

```javascript
{
  "public": true, 
  "files": {
    "postgist.txt": {
      "content": "Adding a GIST via the API!!"
    }
  }
}
```

![Screen-Shot-2022-01-24-at-2.35.57-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-2.35.57-PM.png)

5\. 在 Authorization 选项卡中，将授权类型设置为 `Basic Auth`。输入 Github 用户名并传入在密码字段中创建的个人访问令牌。

在执行这个之后，会得到一个很长的响应。检查 gist 是否已创建的一种简单方法是访问 GitHub 中的 Gist。

![Screen-Shot-2022-01-24-at-2.39.27-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-2.39.27-PM.png)

可以看到成功添加了一个 Gist！

![Screen-Shot-2022-01-24-at-2.39.58-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-2.39.58-PM.png)

### 如何创建 PATCH  请求

来更新刚刚创建的 Gist 的标题和描述。请记住：`PATCH` 允许更新资源的一部分，而不是整个资源。我们没有传入的任何内容都将保持不变。

在创建 Gist 时实际上并没有提供描述，因此我们可以使用 patch 创建一个。

![Screen-Shot-2022-01-20-at-3.35.56-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-3.35.56-PM.png)

API 的 URL：

```shell
https://api.github.com
```

此特定操作的端点路径如下：

```
/gists/{gist_id}
```

要创建此请求：

1.  在 Hoppscotch 的输入字段中粘贴完整的 URL + 路径。获取要更新的 gist 的 `Gist ID`。可以通过转到 GitHub 中的 Gist 并复制 URL 末尾的字母数字字符串来找到 ID。

![Screen-Shot-2022-01-20-at-3.50.13-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-3.50.13-PM.png)

2\.  选择 `PATCH` 请求方法。

3\.   在 Headers 选项卡中，将 accept 设置为 header 并将值设置为 `application/vnd.github.v3+json`。

4\.   在 Authorization 选项卡中，将授权类型设置为 `Basic Auth`。输入 GitHub 用户名并传递我们在密码字段中创建的个人 access token。

5\.   在 Body 选项卡中，传入更新后的描述和标题。代码如下：

```javascript
{
  "description": "Adding a description via the API", 
  "files": {
    "postgist.txt": {
      "content": "Adding a GIST via the API!! -- adding this line at the end to make the content slightly longer"
    }
  }
}
```

刷新 Gist，会看到标题和描述已经更新！

![Screen-Shot-2022-01-24-at-3.38.35-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-3.38.35-PM.png)

### 如何发起  DELETE 请求

要删除创建的 Gist。应该传入 header 和 Gist ID。

![Screen-Shot-2022-01-24-at-3.42.30-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-24-at-3.42.30-PM.png)

API 的 URL 如下：

```shell
https://api.github.com
```

此特定操作的端点路径如下：

```
/gists/{gist_id}
```

要创建此请求：

1.  在 Hoppscotch 的输入字段中粘贴完整的 URL + 路径。获取要更新的 gist 的 `Gist ID` 。可以通过转到 GitHub 中的 Gist 并复制 URL 末尾的字母数字字符串来找到 ID。

![Screen-Shot-2022-01-20-at-3.50.13-PM](https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-20-at-3.50.13-PM.png)

2\.   选择 `DELETE` 请求方法

3\.  在 Headers 选项卡中，将 accept 设置为 header 并将值设置为 `application/vnd.github.v3+json`。

导航到 Gists，会看到已经成功地删除了该资源。

### 如何在程序中发起请求

使用 Hoppscotch 是因为它可以方便的发起请求，而无需启动程序或下载任何内容。

如果想在 JavaScript/React 应用程序中发出请求，可以使用 [Javascript fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 或 [Axios]( https://axios-http.com/docs/intro)。

有关如何发起使用 HTTP 请求方法和 API 的简单应用程序的步骤演示，[可以查看我在 youtube 上的视频，我们在其中创建了一个 Web 应用程序，该应用程序通过 API 显示有关所有国家/地区的信息 .](https://www.youtube.com/watch?v=7xu7FnKh54M&t=334s)

## 你做到了！

如果正在阅读本文，请继续给自己点赞，因为已经了解了 Web API、HTTP 协议、客户端-服务器架构——并且还发起了第一个请求。

如果你喜欢我的风格，可以在 [YouTube](https://www.youtube.com/channel/UCyEnr-lcCUavJzh0uodvG3w)、[Tik Tok](https:// www.tiktok.com/@camiinthisthang?)、[Twitter](https://twitter.com/camiinthisthang) 和 [Hashnode](https://hashnode.com/@camiinthisthang) 找到我。还可以通过 [我的个人网站](https://camiinthisthang.dev/) 找到代码片段和联系我的方式。
