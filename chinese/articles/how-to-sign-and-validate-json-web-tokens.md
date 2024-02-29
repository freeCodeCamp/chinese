> -  原文地址：[How to Sign and Validate JSON Web Tokens – JWT Tutorial](https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/)
> -  原文作者：[Rohit Jacob Mathew](https://www.freecodecamp.org/news/author/rohitjmathew/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Sign and Validate JSON Web Tokens – JWT Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/rohit-code-2400x1260.jpg)

从开始学习 JSON Web 令牌（JWT），我就一直很好奇，它是如何被验证的。

我了解我们签名了令牌，并且使用签名后的令牌来验证真实性。但是我还是特别好奇以及为什么我之前没有去了解内部的细节。

希望这篇文章可以帮助你理解签名 JWT 是如何运作的，你是如何签名和验证令牌的。

## 什么是 JWT?

在我们正式开始之前，让我们快速回顾一下 JSON Web 令牌到底是什么。

JSON Web 令牌(JWT)是一种在两方之间紧凑的、URL 安全的传输数据的方式。

它由开放标准(RFC 7519)定义，并由三个部分组成：header（头部）、payload（负载）以及一个加密部分。

JWT 在生成时会被签名，相同的签名 JWT 在收到时会被验证，以确保它在传输过程中没有被修改。

如果你想要了解 JWT 的细节，我推荐你阅读我的博文——[JSON Web 令牌(JWT)以及我们为什么使用它](https://blog.rohitjmathew.space/json-web-token-jwt-and-why-we-use-them).


## 为什么你不需要知道签名和验证是如何工作的？ 🤔

现在的问题是，为什么大部分的 JWT 资源都会说“然后你签名并验证”就没有别的信息了？答案是因为这些信息很抽象。

就好比当你在开车的时候，你并不需要知道引擎是如何工作的，或者也不需要靠自己来调整引擎，使汽车运行得更好。

相反，你信任制造商利用他们的专业、并且尽责为你制造了对你有用的产品。

同样的，你也不需要了解签名和验证 JWT 的流程是什么，就可以高效地使用它来验证和授权你的应用和 API。

请注意**你大概率是不需要自己签名和验证令牌的**，但了解背后的原理能够帮助你更有信心地使用 JWT。但总的来说，身份供应商和身份（Identity-as-a-Service ）即服务平台（如 Auth0、Okta 和 Microsoft Active Directory）可确保此过程很简单。

如果你仍对它是如何运作的感兴趣（和我一样），欢迎你继续阅读。

## JSON Web 令牌由什么组成? 🤔

我在[这篇教程](https://blog.rohitjmathew.space/json-web-token-jwt-and-why-we-use-them)中做了深入的介绍，但是让我们快速回顾一下。

JSON Web 令牌由三段 URL 安全的字符串并用句号 `.`连接组成。

### JWT 的 Header（头部）部分

第一个部分是头部，如下：

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9`

头部是一个 JSON 对象，包含了一个签名算法和一个令牌类型。它是由 base64Url 编码而成。

解码后如下：

```
{
  "alg": "RS256",
  "typ": "JWT"
}
```

### JWT 的 Payload（负载）部分

第二部分是负载：

`eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0`

这是一个包含数据声明的 JSON 对象，其中包含有关用户的信息和其他与身份验证相关的信息。

是 JWT 从一个实体传递到另一个实体的信息。它也是 base64Url 编码的。数据声明如下所示：

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```


### JWT 的加密/签名部分

最后一部分是加密/签名部分。JWT 被签名之后不能在传输的过程中被修改。一旦一个授权的服务器发行了一个令牌，就使用密匙来签名。

当客户端接收到 ID 的令牌，也通过密匙来验证签名。

签名算法不同，使用的密钥也会有所不同。如果使用的是非对称签名算法，则使用不同的密钥进行签名和验证。在这种情况下，只有授权服务器能够签名令牌。

## JWT 中的签名和验证是如何运作的？ 🤔

### 如何签名一个 JWT

在这篇文章中，我将使用 RS256 签名算法。RS256 是使用 SHA-256 的 RSA 电子签名。

SHA-256 是一种非对称密钥加密算法，它使用一对密钥：一个公钥和一个私钥来加密和解密。

在这里，授权服务器将使用私钥，而接收令牌以验证它的应用程序将使用公钥。

#### 签名输入

首先让我来看看 JWT 的前两个部分（头部和负载），如下：

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0`

基本上就是一个由 base64url 编码的头部和负载，并且由 `.`连接。

```
base64UrlEncode(header) + "." 
+ base64UrlEncode(payload)
```

以上就是签名输入。

#### 对签名输入做哈希加密

然后我们使用[SHA-256 哈希算法](https://dev.to/wagslane/how-sha-2-works-step-by-step-sha-256-11ci)对签名输入进行加密。哈希将一个值转换为另一个不同的值。哈希函数使用数学算法从现有值生成新值。

注意:

-   哈希是不可逆的，一旦我们将输入哈希之后，就无法再次获取原有的输入。
-   如果输入相同，哈希后的结果始终相同。
-   不存在两个不同的哈希输入产出相同的结果。

```
SHA-256 (
    base64UrlEncode(header) + "." 
    + base64UrlEncode(payload)
)
```

现在我们就拥有了哈希后的头部和负载部分，可以用此和其他的哈希结果比较，但是不能逆转返回到最初的签名输入。

#### 加密签名输入

接下来，我们给哈希后的签名输入加密。和哈希不同的是，加密是可逆的。授权服务器使用加密私钥给哈希后的签名加密，产生一个结果。

这个最终结果（哈希过、加密过、头部和负载编码后）就是 JWT 的加密/签名部分。

```
RSA (
    SHA-256 (
        base64UrlEncode(header) + "." 
        + base64UrlEncode(payload)
    ),
    {RSA Private Key}
)
```

这就是 JSON Web 令牌产生的过程

### 如何验证 JWT

现在你知道令牌是如何签名的，我们可以进一步了解当收到令牌后，如何验证这个 JWT 是没有被篡改的。

假设有一个接受 JWT 的应用，并且需要验证 JWT。这个应用也可以访问授权服务器的公钥。

JWT 的验证是为了达到一个目的：即我们可以有效地将我们收到的与我们期望的进行比较。

#### 解码声明

应用可以对头部和负载解码来获取信息。

请记住，这两个段是用 base64Url 编码，以使它们是 URL 安全的。这并不是密码学维度的安全。

你可以使用简单的在线 base64 解码工具来解码。一旦被解码，我们就可以轻松地读取其中的信息。

例如，我们可以解码头部，看看 JWT 说它是用什么算法签名的。

解码后的头部如下：

```
{
  "alg": "RS256",
  "typ": "JWT"
}
```

当我们读取 JWT 头部的算法后，我们应该验证它是否和我们期待的配置匹配，如果不匹配，就马上拒绝这个令牌。

#### 哈希加密(再次)

如果令牌中的算法符合我们的期望（即使用 RS256 算法），我们需要生成头部和负载的 SHA-256 哈希。

请记住，哈希是不可逆的，但相同的输入总是会产生相同的输出。所以我们将哈希连接在一起的、由 base64Url 编码的头部和负载。现在我们在应用程序端重新哈希计算签名输入。


#### 解密

哈希签名输入也在 JWT 的签名中，但它已由授权服务器使用私钥加密。应用程序可以访问公钥，因此我们可以解密签名。

完成此操作后，我们就可以访问原始哈希：第一次生成令牌时由授权服务器生成的哈希。

#### 对比哈希值

现在我们可以将解密的哈希与计算的哈希进行比较。如果它们相同，那么我们验证 JWT 头部和负载段中的数据在授权服务器创建令牌到应用程序收到它的之间没有被修改。

#### 验证令牌声明

此外，一旦我们验证了签名，我们就可以验证 JSON Web 令牌的数据。也可以验证负载段中的声明，因为它包含有关令牌颁发者、令牌到期时间、令牌的目标受众、令牌绑定到授权请求的信息等。

这些声明为应用程序提供了签名验证以外的详细信息。

例如，对声明的检查可以揭示技术上有效的令牌实际上是为不同的应用程序或用户准备的、它已经过期、它来自与该应用程序无关的发行者等等。

## 总结

我们已经介绍完毕 JWT 是如何签名和验证的，希望可以帮助你更好地理解 JWT 并且使用它。我想再重复一次**你不需要自己来签名和验证 JWT**。

有[Auth0](https://auth0.com/)、 [Okta](https://www.okta.com/),、[Ping Identity](https://www.pingidentity.com/en.html)等身份平台帮助你完成。他们也提供应用端和 API 端的 SDK、验证库和令牌管理系统。

如果你对使用 Auth0 感兴趣，你需要注册一个账号。你可以[免费在这里注册](https://a0.to/signup-for-auth0)。

感谢阅读！希望你觉得这篇文章对你有帮助，我也很感兴趣收听你的想法，回答你的问题。如果你觉得本文对你有帮助，请你转发给其他人。

感谢阅读！ :)

P.S 欢迎在[LinkedIn](https://www.linkedin.com/in/rohitjmathew/) 或[Twitter](https://twitter.com/iamrohitjmathew)联系我。


## 附录

以下是撰写这篇文章我参考的资料：

-   [Signing and Validating JSON Web Tokens (JWT) For Everyone](https://dev.to/kimmaida/signing-and-validating-json-web-tokens-jwt-for-everyone-25fb) 作者： [Kim Maida](https://twitter.com/KimMaida)
-   [JSON Web Token (JWT) Signing Algorithms Overview](https://auth0.com/blog/json-web-token-signing-algorithms-overview/) 来自 Auth0
