> -  原文地址：[Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/what-is-cross-site-request-forgery/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：ilam0x
> -  校对者：

![Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/megan-article-image.jpg)

Cross Site Request Forgery, or CSRF occurs when a malicious site or program causes a user's browser to perform an unwanted action on a trusted site when the user is authenticated. Any malicious action is limited to the capability of the website to which the user is authenticated.
跨站点请求伪造（Cross Site Request Forgery）又被称作CSRF，是恶意站点或程序通过已认证用户的浏览器在受信任站点上执行操作非正常操作。可进行的恶意操作局限于已在网站通过身份验证的用户的功能。

For example, Jane might login to her online banking portal while checking her email. While there, she may click a link in a phishing email (likely obfuscated by a link-shortening site) which would include a request for Jane's bank to transfer money to an account the attacker controls.
例如，Jane 可能会在查看电子邮件的同时登录了她的网上银行，然后可能会点进钓鱼邮件中的自带转账请求的链接（比如迷惑性的短链接），要求Jane的银行转账至被攻击者控制的账户里。

Since Jane is already authenticated by her bank, they automatically carry out the transaction, believing that because it is being requested by Jane's browser that she has authorized it.
由于Jane已经登陆了银行，该转账请求会被自动执行，因为是通过已被Jane授权了的浏览器发出的请求。

## What Are HTTP Requests and Cookies?
什么是HTTP请求（Requests）和 Cookie?

### HTTP GET Request
HTTP GET 请求

This is a request used to request data from a web server (for example typing in a URL (requesting a website) which results in it loading).
这个请求用于向 Web 服务器请求数据（比如输入URL（请求网站）加载）。

### HTTP POST Request
HTTP POST 请求
This is a request used to send data to a web server (for example, a web form submission).
这个请求用于向web服务器发送数据（比如提交Web表单）。

Some GET and POST requests are triggered automatically, without user interaction (like fetching search suggestions or loading image content with the img src attribute).
某些 GET 和 POST 请求会自动触发，无需用户交互（例如获取搜索建议或使用 `img src` 属性加载图像内容）。

### Session Cookies
会话Cookies
Session cookies are a way that HTTP handles state (since it doesn't handle state natively). Websites use session cookies (containing a unique ID) to identify users and to retain their session.
会话 cookie 是 HTTP 处理状态的一种方式（因为它本身不处理状态）。 网站使用会话 cookie（包含唯一 ID）来识别用户并保留他们的会话。

After being set, the user's browser sends the cookie to the server with every request it makes in order to identify the user to the site.
设置会话cookie后，用户浏览器会在每次请求时将 cookie 发送到服务器，以供站点识别用户。

An attacker can leverage the cookie to impersonate the user by forcing a user's browser to execute a request. If the user is already logged into the site, the cookie will be sent automatically with the request.
攻击者可以通过强制用户浏览器发送请求来利用 cookie 来冒充用户，如果用户已经登录到站点，cookie 将随请求自动发送。

## How does Cross Site Request Forgery work?
跨站点请求伪造是如何工作的?

In order for an attacker to carry out a CSRF attack, several things need to be true:
攻击者进行 CSRF 攻击需要满足以下几点：

-   There is an action in the application which an attacker wants to take – like changing a password, transferring funds, and so on.
-   There are not unpredictable request parameters – the attacker can guess (or knows) all of the parameters which the application expects to see from this type of request.
-   The action can be carried out by HTTP request(s) and it relies only on cookies in order to verify that the request is coming from the user.
-   攻击者想在网站应用中执行一种操作 — 例如更改密码、转账等。
-   不包含不可猜测的请求参数 — 攻击者可以猜测（或知道）网站应用的此类请求中需要的所有参数。
-   该操作仅依赖 cookie 来验证请求是否来自用户，并可以通过 HTTP请求执行。

CSRF can impact web applications which use cookies, browser authentication, or client side certificates to authenticate users. Essentially it can occur in any case where the application automatically appends a users' credentials or identity to a request.
CSRF 会影响网站使用 cookie，浏览器身份验证或客户端证书对用户进行身份验证的 Web 应用程序。基本上CSRF可能发生在应用程序自动将用户证书或身份添加到请求的任何情况下。

A CSRF attack can either leverage a GET request or a POST request (though a POST request is more complicated and is thus uncommon).
CSRF 攻击可以利用 GET 请求或 POST 请求（由于POST请求更复杂，因此不常见）。

Either one needs to start with an attacker tricking a victim into loading or submitting the information to a web application. This can take place in a number of ways – for example via a phishing link.
两者都需要攻击者先诱骗受害者加载或将信息提交到 Web 应用程序。这可以通过多种方式发生 - 例如钓鱼链接。

Alternatively, similar to XSS (Cross-site scripting), CSRF can be a stored vulnerability. Stored CSRF occurs when an attacker stores the attack in a field which accepts HTML such as an IMG or IFRAME tag. This would mean that anyone who views the page could be impacted.  The exploit can be disguised as an ordinary link or hidden in an image tag.
另外，类似于 XSS（跨站点脚本），CSRF 可以是一个可以被存储型漏洞。 比如攻击者将攻击代码存储在被接受的HTML代码中就会导致存储型CSRF（例如 `IMG` 或 `IFRAME` 标签）时。 这意味着浏览该页面的任何人都可能受到影响。 该漏洞可以伪装成普通链接或隐藏在图像标签中。

For example, as an ordinary link on a webpage: `<a href=“malicious link”>Unsubscribe here</a>`
例如，作为网页上的普通链接<a href=“malicious link”>Unsubscribe here</a>`

Or, as an image tag 或者伪装成图片标签: `<img src=“malicious link” width=“0” height=“0” border=“0”>`

## Example of CSRF
CSRF示例

Imagine that your bank (bank.com) processes transfers using GET requests which include several parameters (the identity of the recipient of the transfer and how much you want to transfer).
想象一下，您的银行 (bank.com) 使用 GET 请求处理转账，其中包括几个参数（收款人身份以及转账的金额）。

For example, if Jim wants to send his friend Bob $10, the request might look like this:
例如，如果Jim想给他的朋友Bob10 美元，请求可能如下所示：

`http://bank.com/transfer?recipient=Bob&amount=10`

The request also includes a session cookie identifying the account owner so the bank knows where to get the money from.
该请求还包括一个会话 cookie，用于标识帐户所持有人，以便银行知道从哪里取款。

Now, an attacker may convince Jim to click a link that looks like this (but has been shorted by a URL shortener or hyperlinked cleverly):
现在，攻击者可能成功使Jim 单击如下所示的链接（但已被巧妙的用缩短器或超链接缩短）：

`http://bank.com/transfer?recipient=Hacker&amount=100000`

Because Jim is already logged in, his browser sends his cookie with the request – so his bank believes that he is requesting the transfer and it is carried out.
因为 Jim 已经登录，他的浏览器会将他的cookie 和请求一并发送 — 所以他的银行相信他本人正在请求转账于是执行了转账请求。

## How to Stop CSRF Attacks
如何防止CSRF攻击

### Choose Your Frameworks Carefully
谨慎选择网站框架

Use frameworks which have built in protections against CSRF, like .NET. Correct configuration is key. If the framework you're using doesn't have protection, you can add protection with Anti-CSRF Tokens.
使用内置了防护CSRF的框架，例如 `.NET`。 正确的配置很重要。如果您使用的框架没有保护，可以使用 Anti-CSRF 令牌添加保护。

### Use Anti-CSRF Tokens
使用 Anti-CSRF 令牌

Tokens (also known as synchronizer token patterns) are a server-side protection where the server provides a user's browser with a unique, randomly generated token and checks each request to see if the browser sends it back before carrying out a request.
令牌（也称为令牌同步模式）是一种服务器端的保护方式，服务器向用户的浏览器提供唯一的、随机生成的令牌，并检查每个请求来查看浏览器是否在执行请求之前将其发回。

This token is sent via a hidden field and should be a non-predictable, random number which expires after a short time and cannot be reused.
这个令牌通过隐藏字段发送，应该是一个会在很短的时间内失效的不可预测的随机数，且不能重复使用。

Depending on the sensitivity of the page, different tokens can be used for each request, or simply for different forms. The tokens should be compared in a safe way (such as by comparing hashes) and should not be sent in an HTTP get request so they are not a part of the URL and cannot leak via the Referrer header.
根据不同页面的信息敏感程度，可以针对每个请求使用不同的令牌，或者仅针对不同的表单。令牌应该以安全的方式进行对比验证（例如比较哈希值），并且不应在 HTTP GET请求中发送，防止作为 URL 的一部分或者 Referrer泄漏。

116

### Use the SameSite Flag in Cookies
在 Cookie 中使用 SameSite 标记

The SameSite flag marks a cookie so it can only be sent for requests which originate from the same domain.
SameSite 标记的 cookie，只能发送来自同域名的请求。

Essentially if www.bank.com wants to make a request to `www.bank.com/updatepassword`, it's allowed to. But if `www.maliciousdomain.com` wants to make a request to www.bank.com/updatepassword, it can't send the session cookie and therefore cannot carry out the attack.
基本上，www.bank.com 可以被允许向`www.bank.com/updatepassword` 提交request请求。 但`www.maliciousdomain.com`向www.bank.com/updatepassword发出请求时不能发送会话cookie，因此无法进行攻击。

127

Most browsers now support this flag, but not all. It should be part of a comprehensive defense strategy.

### Practice Defense in Depth

You can implement a number of other controls which, when used in conjunction with other measures, can provide protection against CSRF.

For example, here are some other protections you can put in place:

-   verify the origin with standard headers (determine where the request originates and where it's targeted to ensure they match)
-   use a custom request header (so that without the header the site will not accept the request)
-   double submit cookies (essentially a second, randomly generated and unknown – to the attacker – parameter which an attacker has to submit with a request in order for it to be successful).

### Involve the User in the Transaction

For sensitive actions such as money transfers or password changes, require the user to take action (such as CAPTCHA, one-time tokens, or re-authentication).

## Examples of Measures that Don't Work:

-   **Multi-Step Transactions:** It doesn't matter how many steps there are as long as the attacker can predict/determine each one.
-   **HTTPS:** Always a good idea, but doesn't do anything to protect against CSRF.
-   **URL Rewriting:** This would prevent attackers from guessing the victim's session ID during a CSRF attack, but would then allow an attacker to see it in the URL. Swapping one flaw for another isn't a good idea.
-   **Using a Secret Cookie:** Even a secret cookie is submitted as part of the request, meaning that the attacker can still leverage it.
-   **Only Accepting POST Requests/avoiding GET Requests:** Forged POST requests can still be used to execute a CSRF attack.

### Other Names for CSRF

CSRF is also known as XSRF, Sea Surf, Session Riding, Cross-Site Reference Forgery, Hostile Linking, One-Click Attack.

### Sources/Further Reading:

-   [OWASP CSRF](https://owasp.org/www-community/attacks/csrf)
-   [OWASP CSRF Prevention](https://owasp.org/www-community/attacks/csrf)
-   [CSRF Attacks](https://www.netsparker.com/blog/web-security/csrf-cross-site-request-forgery/)
-   [Anti-CSRF Tokens](https://www.netsparker.com/blog/web-security/protecting-website-using-anti-csrf-token/)
-   [CSRF Basics](https://www.acunetix.com/websitesecurity/csrf-attacks/)
-   [PortSwigger CSRF](https://portswigger.net/web-security/csrf)
