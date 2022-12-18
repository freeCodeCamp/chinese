> -  原文地址：[Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/what-is-cross-site-request-forgery/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：ilam0x
> -  校对者：

![Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/megan-article-image.jpg)

跨站点请求伪造（Cross Site Request Forgery）又被称作CSRF，是恶意站点或程序通过已认证用户的浏览器在受信任站点上执行操作非正常操作。可进行的恶意操作局限于已在网站通过身份验证的用户的功能。

例如，Jane 可能会在查看电子邮件的同时登录了她的网上银行，然后可能会点进钓鱼邮件中的自带转账请求的链接（比如迷惑性的短链接），要求Jane的银行转账至被攻击者控制的账户里。

由于Jane已经登陆了银行，该转账请求会被自动执行，因为是通过已被Jane授权了的浏览器发出的请求。

## 什么是HTTP请求（Requests）和 Cookie?

### HTTP GET 请求

这个请求用于向 Web 服务器请求数据（比如输入URL（请求网站）加载）。

###  HTTP POST 请求
这个请求用于向web服务器发送数据（比如提交Web表单）。

某些 GET 和 POST 请求会自动触发，无需用户交互（例如获取搜索建议或使用 `img src` 属性加载图像内容）。

### 会话Cookies
会话 cookie 是 HTTP 处理状态的一种方式（因为它本身不处理状态）。 网站使用会话 cookie（包含唯一 ID）来识别用户并保留他们的会话。

设置会话cookie后，用户浏览器会在每次请求时将 cookie 发送到服务器，以供站点识别用户。

攻击者可以通过强制用户浏览器发送请求来利用 cookie 来冒充用户，如果用户已经登录到站点，cookie 将随请求自动发送。

## 跨站点请求伪造是如何工作的?

攻击者进行 CSRF 攻击需要满足以下几点：

-   攻击者想在网站应用中执行一种操作 — 例如更改密码、转账等。
-   不包含不可猜测的请求参数 — 攻击者可以猜测（或知道）网站应用的此类请求中需要的所有参数。
-   该操作仅依赖 cookie 来验证请求是否来自用户，并可以通过 HTTP请求执行。

CSRF 会影响网站使用 cookie，浏览器身份验证或客户端证书对用户进行身份验证的 Web 应用程序。基本上CSRF可能发生在应用程序自动将用户证书或身份添加到请求的任何情况下。

CSRF 攻击可以利用 GET 请求或 POST 请求（由于POST请求更复杂，因此不常见）。

两者都需要攻击者先诱骗受害者加载或将信息提交到 Web 应用程序。这可以通过多种方式发生 - 例如钓鱼链接。

另外，类似于 XSS（跨站点脚本），CSRF 可以是一个可以被存储型漏洞。 比如攻击者将攻击代码存储在被接受的HTML代码中就会导致存储型CSRF（例如 `IMG` 或 `IFRAME` 标签）时。 这意味着浏览该页面的任何人都可能受到影响。 该漏洞可以伪装成普通链接或隐藏在图像标签中。

例如，作为网页上的普通链接<a href=“malicious link”>Unsubscribe here</a>`

Or, as an image tag 或者伪装成图片标签: `<img src=“malicious link” width=“0” height=“0” border=“0”>`

## CSRF示例

想象一下，您的银行 (bank.com) 使用 GET 请求处理转账，其中包括几个参数（收款人身份以及转账的金额）。

例如，如果Jim想给他的朋友Bob10 美元，请求可能如下所示：

`http://bank.com/transfer?recipient=Bob&amount=10`

该请求还包括一个会话 cookie，用于标识帐户所持有人，以便银行知道从哪里取款。

现在，攻击者可能成功使Jim 单击如下所示的链接（但已被巧妙的用缩短器或超链接缩短）：

`http://bank.com/transfer?recipient=Hacker&amount=100000`

因为 Jim 已经登录，他的浏览器会将他的cookie 和请求一并发送 — 所以他的银行相信他本人正在请求转账于是执行了转账请求。

## 如何防止CSRF攻击

### 谨慎选择网站框架

使用内置了防护CSRF的框架，例如 `.NET`。 正确的配置很重要。如果您使用的框架没有保护，可以使用 Anti-CSRF 令牌添加保护。

### 使用 Anti-CSRF 令牌

令牌（也称为令牌同步模式）是一种服务器端的保护方式，服务器向用户的浏览器提供唯一的、随机生成的令牌，并检查每个请求来查看浏览器是否在执行请求之前将其发回。

这个令牌通过隐藏字段发送，应该是一个会在很短的时间内失效的不可预测的随机数，且不能重复使用。

根据不同页面的信息敏感程度，可以针对每个请求使用不同的令牌，或者仅针对不同的表单。令牌应该以安全的方式进行对比验证（例如比较哈希值），并且不应在 HTTP GET请求中发送，防止作为 URL 的一部分或者 Referrer泄漏。

### 在 Cookie 中使用 SameSite 标记

SameSite 标记的 cookie，只能发送来自同域名的请求。

基本上，www.bank.com 可以被允许向`www.bank.com/updatepassword` 提交request请求。 但`www.maliciousdomain.com`向 www.bank.com/updatepassword 发出请求时不能发送会话cookie，因此无法进行攻击。

现在大多数浏览器都支持这个标志，但不是全部。 它应该是综合防御战略的一部分。

### 深入练习防御

您可以进行许多其他的控制措施并配合其他措施使用，可以提供针对 CSRF 的保护。

例如，您可以采取以下一些其他保护措施
- 使用标准头文件验证来源（确定请求的来源和目标位置是否匹配）
- 使用自定义的请求头文件（站点将不接受没有相应的头文件的请求）
- 双重提交 cookie（尤其是一秒钟随机生成且未知的cookie；对于攻击者来说，必须提交该参数才能正常请求）。


### 让用户参与交易流程

对于转账或密码更改等敏感操作，要求用户行为（如 CAPTCHA、一次性令牌或重新身份验证）。

## 无效的措施示例：
-   **多步骤交易** 只要攻击者可以预测/确定每个步骤，有多少步骤并不重要。
-   **HTTPS:** 总是一个好的安全措施，但对于 CSRF 无效
-   **URL 改写** 这可以防止攻击者在 CSRF 攻击期间猜测受害者的会话 ID，但随后攻击者可以在 URL 中看到它。用一个缺陷替换另一个缺陷并不是一个好主意。
-   **使用 私密（Secret）Cookie:** 私密 cookie 同样是作为请求的一部分提交，也就是仍然可以被攻击者利用。
-   **只接受 POST 请求/避免 GET 请求：** 伪造的 POST 请求仍可用于执行 CSRF 攻击。
### CSRF的其他称呼

CSRF 也被称作 XSRF, Sea Surf (CSRF发音), 会话叠置（Session Riding）, 跨站点引用伪造（Cross-Site Reference Forgery）,恶意连接（Hostile Linking）, 一键攻击（One-Click Attack）.

### Sources/Further Reading:
### 资料来源/扩展阅读
-   [OWASP CSRF](https://owasp.org/www-community/attacks/csrf)
-   [OWASP CSRF Prevention](https://owasp.org/www-community/attacks/csrf)
-   [CSRF Attacks](https://www.netsparker.com/blog/web-security/csrf-cross-site-request-forgery/)
-   [Anti-CSRF Tokens](https://www.netsparker.com/blog/web-security/protecting-website-using-anti-csrf-token/)
-   [CSRF Basics](https://www.acunetix.com/websitesecurity/csrf-attacks/)
-   [PortSwigger CSRF](https://portswigger.net/web-security/csrf)
