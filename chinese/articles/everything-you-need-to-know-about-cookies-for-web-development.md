> -   原文地址：[Everything You Need to Know About Cookies for Web Development](https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/)
> -   原文作者：Kris Koishigawa
> -   译者：ZhichengChen
> -   校对者：

![Everything You Need to Know About Cookies for Web Development](https://images.unsplash.com/photo-1506452819137-0422416856b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDI5fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=2000)

你是否曾经想过为什么登录站点后关闭浏览器也可以保留登录状态，以及在登录前就可以将商品添加到购物车中？

无论是否了解，cookie 随处可见，它们彻底改变了我们使用网络的方式。

在本文中，我们将介绍 cookie 的历史，它们的工作方式，如何在 JavaScript 中使用它们以及需要熟知的一些安全隐患。

## cookies 简史

HTTP 超文本传输协议是一种无状态协议。根据 Wikipedia，它之所以无状态，是因为它“不需要 HTTP 服务器在不同请求期间保留用户的信息或状态”。

今天，网站服务依然是如此实现的 – 输入浏览器的 URL，浏览器向某处的服务器发出请求，然后服务器返回文件以呈现页面，然后关闭连接。

现在，假设需要登录网站以查看某些内容，例如使用 LinkedIn。该过程与上述过程基本相同，会看到一个表单，用于输入电子邮件地址和密码。

输入相关信息，然后浏览器将其发送到服务器。服务器检查登录信息，如果一切顺利，它将把呈现页面所需的数据发送回浏览器。

但是，如果 LinkedIn 是无状态的，一旦跳转到另一个页面，服务器将不记得你刚刚已经登录过。它将要求你再次输入电子邮件地址和密码，进行检查后在发送数据以渲染新页面。

那会非常令人沮丧，不是吗？许多开发人员也这样认为，并找到了很多在 Web 上创建有状态会话的方法。

### cookie 的发明

 90 年代初期，Netscape 的开发人员 Lou Montoulli 遇到了一个问题 – 他正在为另一家公司 MCI 开发一个在线商店，该商店会在服务器中存储每个客户购物车中的商品。这意味着人们必须首先创建一个帐户，创建账户需要花费一些时间，存储每个用户购物车的内容也会占用大量存储空间。

MCI 要求将这些数据存储在客户自己的计算机上。他们还希望客户在没有登录时也能添加商品到购物车。

为了解决这个问题，Lou 提出了一个在程序员中已经广为人知的想法：魔力 cookie。

魔力 cookie 或 cookie，是可以在两个计算机程序之间传递的少量数据。它们之所以“魔幻”，是因为 cookie 中的数据通常是随机密钥或令牌，并且实际只对使用它的软件才有意义。

Lou 采用了魔力 cookie 概念，并将其应用于在线商店，后来又应用于浏览器。

现在了解了 cookie 的历史，来看一下如何使用 cookie 在网络上创建有状态会话。

## cookies 如何工作

和 cookie 有点像的一个场景，就是你在游乐园中获得的腕带。

当登录网站时，过程就像进入游乐园一样。首先，要买票，然后进入公园时，工作人员会检票并给你一条腕带。

这和登录的方式一样 - 服务器检查你的用户名和密码，创建并存储会话，生成唯一的会话 ID，然后发送回带有该会话 ID 的 cookie。

（请注意，会话 ID 不是你的密码，它是完全独立的，即时生成的。密码处理和身份验证不在本文的讨论范围之内，可以在[这里](https://www.freecodecamp.org/news/search/?query=authentication)了解更多。）

在游乐园中，可以通过出示腕带来消费项目。

同样，当你向登录的网站发出请求时，浏览器会将带有会话 ID 的 cookie 发送回服务器。服务器使用你的会话 ID 检查会话，然后返回请求的数据。

最后，一旦离开游乐园，你的腕带将不再起作用 - 你无法使用它重新回到公园参与游乐活动。

登出网站也一样。浏览器将带有 cookie 的注销请求发送到服务端，服务端删除 session，并告知浏览器删除具有相应 session id 的 cookie。

如果想回到游乐园，则必须购买另一张门票并获得另一个腕带。同样，如果想继续使用网站，就必须重新登录。

![](https://www.freecodecamp.org/news/content/images/2021/02/fireship-cookies.png)

图片来源: [Session vs Token Authentication in 100 Seconds](https://www.youtube.com/watch?v=UBUNrFtufWo) (YouTube)

这是如何使用 cookie 来记录登录网站状态的简单示例。它还可以用来记录设置的深色主题模式，以及跟踪你在网站上的其它行为等。

## 怎样使用 cookie

现在已经了解了 cookie 的历史以及它们的作用，接下来来看一下 cookie 的一些局限，然用实例演示一下。

### Cookie 的限制

与浏览器中更常用的存储数据方案（例如，`localStorage` 或 `sessionStorage`）相比，Cookie 有很多局限性。 这是 cookie 和其它技术对比的摘要：

|  | cookies | Local Storage | Session Storage |
| --- | --- | --- | --- |
| 容量| 4KB | 10MB | 5MB |
| 可访问| 任何窗口| 任何窗口 | 相同标签页 |
| 过期| 手动设置 | 永不过期| 标签页关闭时 |
| 存储位置| 浏览器和服务端 | 仅浏览器| 仅浏览器 |
| 通过请求发送| 是 | 否 | 否 |

图片来源: [cookies vs localStorage vs sessionStorage \- Beau teaches JavaScript](https://www.youtube.com/watch?v=AwicscsvGLg) (YouTube)

cookies 是一种古老的技术，并且容量非常有限。不过，可以使用它们做很多事情。 它们的体积小巧，浏览器可以轻松地在每个请求中附带 cookie 发送到服务器。

还值得一提的是，出于安全原因，浏览器仅允许 cookie 在一个域名中可见。

因此，如果你通过 ally.com 登录银行，则 cookie 将仅在该域名及其子域名内起作用。例如，你的 `ally.com` 的 cookie 可以在 `ally.com`，`ally.com/about` 和域名 `www.ally.com` 上可见，而在 `axos.com` 上不可见。

这意味着，即使你同时拥有两个帐户并在 `ally.com` 和 `axos.com` 上都进行了登录，这些站点也将无法读取彼此的 cookie。

重要的是要记住，你的 cookie 是随浏览器中的请求一起发送的。这非常方便，但是存在一些严重的安全隐患，后面会详述。

最后，如果本文你只能记住一个知识点，那就请记住，cookie 是公开读取和发送的，切勿在其中存储诸如密码之类的敏感信息。

### 怎样在 JavaScript 中设置 cookie

cookies 实际上只是带有键/值对的字符串。 尽管可能更多在后端使用 cookie，但也需要客户端设置 cookie。

以下是在 vanilla JavaScript 中设置 ocokie 的方法：

```js
document.cookie = 'dark_mode=true'

```

然后，当打开开发者控制台时，单击“Application（应用程序）”，然后在站点的“Cookies”下，将看到刚添加的 cookie：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-101.png)

如果仔细查看 cookie，会发现它的过期日期设置为 `Session`。这意味着，当关闭标签页/浏览器时，cookie 将被销毁。

这可能是某些场景的预期行为，例如 cookie 存有付款信息的在线商店。

但是，如果希望 cookie 的存在时间更久，需要设置一个有效期。

### 如何在 JavaScript 中设置 cookie 的过期时间

要设置过期时间，只需设置 cookie 的值，然后添加带有日期配置的 expires 属性，该日期一般设置为未来的某个时间：

```js
document.cookie = 'dark_mode=true; expires=Fri, 26 Feb 2021 00:00:00 GMT' // expires 1 week from now

```

![](https://www.freecodecamp.org/news/content/images/2021/02/image-102.png)

JavaScript `Date` 对象可以很方便的生成日期。 可以[在此](https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-date-and-moment-js/)处阅读有关 `Date` 对象的更多信息。

或者，也可以将 `max-age` 属性与你希望 cookie 生效的秒数结合使用：

```js
document.cookie = 'dark_mode=true; max-age=604800'; // expires 1 week from now
```

然后，当到达该日期时，浏览器将自动删除 cookie。

### 如何在 JavaScript 中更新 cookie

cookie 更新很方便，和是否具有有效期无关。

只需更改 cookie 的值，浏览器就会自动配置：

```js
document.cookie = "dark_mode=false; max-age=604800"; // expires 1 week from now

```

![](https://www.freecodecamp.org/news/content/images/2021/02/image-105.png)

### 如何在 JavaScript 中设置 cookie 的路径

有时，只希望 cookie 在网站的某些部分生效。如何操作取决于网站的设置方式，一种方法是使用 `path` 属性。

配置 cookie 的方法如下：使 cookie 仅在 `/about` 的 about 页面上起作用：

```js
document.cookie = 'dark_mode=true; path=/about';
```

现在，cookie 仅能在 `/about` 和其他子目录（例如 `/about/team`）上生效，而不能在`/blog` 上生效。

然后，当访问 about 页面并查看 cookie 时，如下：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-103.png)

### 如何在 JavaScript 中删除 Cookie

要在 JavaScript 中删除 cookie，只需将 `expires` 属性设置为已过的日期即可：

```js
document.cookie = 'dark_mode=true; expires=Sun, 14 Feb 2021 00:00:00 GMT'; // 1 week earlier

```

也可以使用 `max-age` 并将其设置为负值：

```js
document.cookie = 'dark_mode=true; max-age=-60'; // 1 minute earlier

```

然后，查看 cookie，会发现它已经被删除：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-104.png)

这应该是在 vanilla JS 中使用 cookie 所需了解的比较全面的知识。

我们介绍的所有内容都能够满足常见的需求，如果对 cookie 的使用比较频繁，可以考虑类库 [JavaScript Cookie](https://github.com/js-cookie/js-cookie) 或 [Cookie Parser](https://github.com/expressjs/cookie-session)。

## Cookie 的安全性问题

通常，cookie 在正确配置的前提下非常安全。浏览器有很多内置的限制，我们之前已经介绍了这些限制，部分原因是该技术的年代久远，这反而提高了其安全性。

尽管如此，攻击者还是有一些办法窃取你的 cookie 并利用它来搞破坏。

我们将探讨一些常见的攻击手段，并介绍对该攻击的应对策略。

另外，请注意，所有代码段都将使用 。如果要在服务器上实现这些修补程序，则需要查找语言或框架的确切语法。

### 中间人攻击

中间人（MitM）攻击描述了广泛的攻击类别，其中，攻击者在客户端和服务器之间，并拦截在两者之间传递的数据。

![](https://www.freecodecamp.org/news/content/images/2021/02/man-in-the-middle-attack-how-avoid.png)

图片来源: [Man\-in\-the\-Middle Attacks and How To Avoid Them](https://www.netsparker.com/blog/web-security/man-in-the-middle-attack-how-avoid/)

这可以通过多种方式完成：通过访问或收听不安全的网站，模仿公共 WiFi 路由器，DNS 欺骗或通过 [SuperFish](https://en.wikipedia.org/wiki/Superfish) 一类的恶意软件/广告软件。

这是 MitM 攻击的比较深入的介绍概述，涉及了网站如何保护自己和用户。

警告：视频的开头谈论了斯科茨女王玛丽，并生动地描绘了她的斩首。它有一点点暴力，但是如果你想跳过他它，请跳至 00:57 处播放：

<iframe src="//player.bilibili.com/player.html?aid=375699669&bvid=BV17o4y1177Y&cid=343253065&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

作为开发人员，通过确保在服务器上启用 HTTPS，使用来自受信任的证书颁发机构的 SSL 证书以及确保代码使用 HTTPS 而不是不安全的 HTTP，可以大大减少 MitM 攻击的可能性。

就 cookie 而言，你应该在 cookie 中添加 `Secure` 属性，以便它们只能通过安全的 HTTPS 连接发送：

```js
document.cookie = 'dark_mode=false; Secure';
```

请记住，`Secure` 属性实际上并不会加密 cookie 中的任何数据 – 它只是确保 cookie 无法通过 HTTP 连接发送。

但是，攻击者仍然可能会拦截和操纵 cookie。为了防止这种情况的发生，还可以使用 `HttpOnly` 参数：

```js
document.cookie = 'dark_mode=false; Secure; HttpOnly';
```

带有 `HttpOnly` 的 cookie 只能由服务器访问，而不能由浏览器的 `Document.cookie` API 访问。这非常适合诸如登录会话之类的场景，在该会话中，只有服务器真正需要知道你是否已登录到站点，而客户端不需要该信息。

### XSS 攻击

XSS（跨站点脚本）攻击描述了恶意用户将意想不到的、潜在危险的代码注入网站时的一类攻击。

这些攻击非常棘手，因为它们可能会影响访问该网站的每个人。

![](https://www.freecodecamp.org/news/content/images/2021/02/cross-site-scripting.svg)

图片来源: [Cross\-site scripting](https://portswigger.net/web-security/cross-site-scripting)

例如，如果某个站点具有评论功能，并且某人能够将恶意代码包含在评论中，则访问该站点并阅读该评论的每个人都有可能受到影响。

就 cookie 而言，如果恶意行为者在站点上成功发起 XSS 攻击，则他们可以访问会话 cookie 并以另一个已登录用户的身份访问该站点。这样，他们就可以访问其他用户的设置，以该用户的身份购买商品并将其运送到另一个地址，等各种操作。

这是一个视频，概述了 XSS 的不同类型 - Reflected、Stored，基于 DOM 的和 Mutation：

<iframe src="//player.bilibili.com/player.html?aid=837611819&bvid=BV1Rg4y1b7VC&cid=168863963&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

作为开发人员，要确保服务器执行“相同来源策略”，并确保正确过滤了从用户那里收到的任何输入。

就像防止 MitM 攻击一样，你应该为你使用的任何 cookie 设置 `Secure` 和 `HttpOnly` 参数：

```js
document.cookie = 'dark_mode=false; Secure; HttpOnly';
```

### CSRF 攻击

CSRF（跨站点请求伪造）攻击是指攻击者诱骗他人执行意想不到的，潜在的恶意行为。

例如，如果你登录到站点并单击评论中的链接，如果该链接是 CSRF 攻击的一部分，则可能会导致你无意中更改登录详细信息，甚至删除帐户。

![](https://www.freecodecamp.org/news/content/images/2021/02/cross-site-request-forgery.svg)

图片来源: [Cross\-site request forgery](https://portswigger.net/web-security/csrf)

虽然 CSRF 攻击在某种程度上与 XSS 攻击有关，特别是反映了有人将恶意代码插入站点的 XSS 攻击，但每种攻击都基于不同类型的信任。

根据 [Wikipedia](https://en.wikipedia.org/wiki/Cross-site_request_forgery) 的说法，虽然 XSS “利用了用户对特定站点的信任，但是 CSRF 却利用了站点在用户浏览器中访问的信任。 ”

这是一段解释 CSRF 基础知识的视频，并提供了一些有用的示例：

<iframe src="//player.bilibili.com/player.html?aid=248191316&bvid=BV13v411L7e7&cid=343251479&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

至于 cookie，防止可能的 CSRF 攻击的一种方法是使用 `SameSite` 标志：

```js
document.cookie = 'dark_mode=false; Secure; HttpOnly; SameSite=Strict';

```

您可以为 `SameSite` 设置一些值：

* `Lax`:  cookie 不会发送嵌入内容（图像，iframe 等），而是在你单击链接或向该 cookie 所设置的来源发送请求时发送。例如，如果你在 `testing.com` 上，然后单击链接以转到 `test.com/about`，则浏览器将发送带有该请求的 `test.com` cookie。
* `Strict`：仅当你单击链接或从设置了 cookie 的来源发送请求时，才会发送 cookie。 例如，只会在你位于 `test.com` 及其附近时发送 `test.com` cookie，而不会来自 `testing.com` 之类的其他网站。
* `None`：Cookie 会随每个请求发送，无论上下文如何。 如果将 `SameSite` 设置为 `None`，则还必须添加 `Secure` 属性。如果可能，最好避免使用此值。

主流浏览器对 `SameSite` 的处理方式略有不同。例如，如果未在 cookie 上设置 `SameSite`，则 Google Chrome 默认将其设置为  `Lax` 。

## cookie 的替代品

你可能想知道，如果 cookie 有这么多潜在的安全漏洞，为什么我们仍在使用它们？ 当然，必须有更好的选择。

这些天来，你可以使用 `sessionStorage` 或 `localStorage` 来存储最初使用 cookie 的信息。对于有状态会话，还可以使用基于令牌的身份验证以及诸如 JWT（JSON Web 令牌）之类的东西。

虽然似乎你必须在基于 cookie 的身份验证或基于令牌的身份验证之间进行选择，但也可以同时使用两者。 例如，当某人通过浏览器登录时，你可能要使用基于 cookie 的身份验证，而当某人通过电话应用程序登录时，则要使用基于令牌的身份验证。

为了进一步解决问题，Auth0 等 authentication-as-aservice 提供程序允许你同时进行两种身份验证。

如果你想了解有关 Web 令牌和基于令牌的身份验证的更多信息，请查看我们的一些[文章](https://www.freecodecamp.org/news/search/?query=web%20tokens)。

## 当你向开发人员提供 cookie 时

就是这样！ 这就是你开始使用 cookie 所需的知识，以及在此过程中需要注意的事项。

你觉得这有用吗？ 你是如何使用 cookie？ 留言或给我发[推特](https://twitter.com/kriskoishigawa)吧。
