> -  原文地址：[HTTP vs HTTPS – What's the Difference?](https://www.freecodecamp.org/news/http-vs-https/)
> -  原文作者：[Annoh Karlgusta](https://www.freecodecamp.org/news/author/annoh/)
> -  译者：Papaya HUANG
> -  校对者：

![HTTP vs HTTPS – What's the Difference?](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/HTTP-VS-HTTPS.png)

我们每天都和HTTP还有HTTPS打交道，但是很多人都不知道这两者之间的区别是什么。

大多数计算机用户看到浏览器告知他们这个应用不安全，很有可能有黑客想要获取他们重要的信息的时候。用户可能跑得比博尔特还要快。

但这个安全风险是可以避免的，这就是为什么HTTPS引入并取代HTTP。今天我们就来讨论这个话题。 :)

## 我们将讨论：

1.  什么是HTTP?
2.  HTTP如何工作
3.  HTTP的功能
4.  如何知道一个网站不安全
5.  所有的HTTP网站都不安全吗？
6.  什么是HTTPS?
7.  HTTPS如何工作
8.  HTTPS的功能
9.  加密的工作原理
10.  如何知道一个网站是安全的？
11.  SSL证书是什么？
12.  SSL是如何工作的？
13.  如何给我的网站申请SSL?
14.  在哪里申请SSL证书?
15.  可以免费获取SSL证书吗?
16.  HTTPS和HTTP的主要区别
17.  总结

## 什么是HTTP?

超文本传输协议（HTTP）是浏览器和你想要访问的网站（web服务器）之间的一种沟通方法。

协议允许你通过浏览器从服务器获取你想要的信息。

通过类比来了解HTTP和HTTPS是一个很好的办法。我们都知道浏览器和服务器是通过HTTP来进行通信的。HTTP通常是纯文本。就好比世界上大多数人都说英语，如果一个黑客知道怎么说英语，并且黑进了你的电脑，这样他就可以很轻易地获取你的密码。

但是在肯尼亚，我们的母语是图尔卡纳语。如果你不了解这门语言，并且在肯尼亚发现两个图尔卡纳人在对话，你就会听不懂他们在说什么。

这就是HTTPS的精华所在。它做了加密处理，理论上黑客不知道浏览器和服务器之间发生了什么通信。

![Client to server](https://user-images.githubusercontent.com/33565767/178446926-d904cc04-57cd-4427-bdcc-e76c35f8b51b.png "client/browser communicating with server")

如果我登陆了[http://www.google.com](http://www.google.com)，我会看到谷歌的默认页面。

![Googles default page](https://user-images.githubusercontent.com/33565767/178450768-e1fed4a5-993d-4d49-a47f-83cce6473085.png "Google's default page")

客户端（大多数情况下是浏览器）发送一个信息，在计算机术语中叫做请求（request）。然后服务器应答，通常被称为响应（response）。

HTTP可以有效地发送HTML文档、图片和视频到web浏览器，方便用户观看。HTTP同样也使用HTML格式将数据传输到服务器。

![Where HTTP Protocol sits](https://user-images.githubusercontent.com/33565767/178460366-d0568e2d-d107-4afe-a778-0ce1d224b176.png "HTTP Protocol is between the web browser(client) and the web server, which is in constant communication with the server side script and the database.")

## HTTP如何运作

HTTP通过纯文本传输数据。举个例子，如果你在访问你的银行网页，这个网页使用的是HTTP，那么黑客就可以访问这个页面，并且读取任何你发送的信息。

此时HTTPS就派上用场了。许多公司都应用了HTTPS，确保用户安全地发送信息。我们会在后文章讨论。

## HTTP的特征

-   纯文本。在HTTP创建之初，开发者们只想解决一个问题：仅服务于文本文件。现在，HTTP已经被运用于文本以外更多地方。
    
-   七层协议。HTTP是网络通信OSI模型的第七层协议。第七层是应用层，也是OSI模型的最外层。 其他的层级包括物理层、数据链路层、网络层、传输层、会话层和表示层。想要了解更多OSI模型的信息，可以参考freeCodeCamp的Youtube频道里由Brain Ferrill讲解的网络工作的视频。视频中包含除了OSI以外更多精彩内容。 [Computer Networking Course - Network Engineering \[CompTIA Network+ Exam Prep\]](https://www.youtube.com/watch?v=qiQR5rTSshw&t=27s&ab_channel=freeCodeCamp.org)
    
-   不安全。当你通过纯文本发送HTTP请求的时候，你同样也收到纯文本响应。也就是说任何可以访问这些请求和响应的人都可以读取这些信息。 
    ![Insecure connection](https://user-images.githubusercontent.com/33565767/179723161-3ec27c27-df79-4749-b810-974583cf1687.png "Insecure connection during a normal HTTP connection by the user")
    
-   轻量。HTTP的优势在与轻量。因为没有像HTTPS一样，通过加密来保护数据，所以HTTP传输速度非常快。
    
-   HTTP通常在端口80监听。
    

## 如何知道一个网站不安全

当网站不安全的时候，Chrome通常会发出一个警告： `Your connection is not private`（你的连接不是私人的）。  
![HTTP Not secure](https://user-images.githubusercontent.com/33565767/182329336-d405d5b4-f5bb-45df-b936-aa1d04b9dffd.png "Your connection is not secure when going to a site that is not secure")

在Chrome的URL输入框内通常会显示红色的`Not Secure`（不安全）。
![Not secure URL image](https://user-images.githubusercontent.com/33565767/182329466-d2db68a8-7033-4f64-bb66-0665e8fc0c62.png "URL of an insecure website")

## 所有的HTTP网站都不安全吗？

假设你正在浏览一个meme网站，一边滚动图片一边哈哈大笑。如果网站使用的是HTTP协议，这没什么大不了。

这时你觉得有些无聊了，打算登陆你的银行的网站，网站没有使用HTTPS协议，此时你就向黑客双手奉上了你的账户信息。

所以安全的底线是你浏览的信息是否无关紧要。如果不重要，HTTP是安全的，但是如果是需要保密的信息，HTTP就不够用。

## 什么是HTTPS?

超文本传输安全协议，即HTTPS是浏览器和你登陆的网站（服务器）之间安全的通信。

## HTTPS如何运作

HTTPS通过加密数据这样的安全协议来确保通信的安全。

对于大多数网站来说，拥有HTTPS的方式是获取一个SSL (Secure Sockets Layer安全套接层)或者TLS (Transport Layer Security传输层安全协议)证书。

现在，SSL已经兼容TLS，所以你没有必要获取一个TLS证书。

## HTTPS的特证

-   加密数据。通过TLS/SSL协议来加密数据。
-   是第四层(传输层)协议。
-   公钥和私钥的密钥交换发生在HTTPS中以加密和解密数据。
-   不如HTTP轻量。当HTTPS发生加密和解密的时候，就变得笨重。
-   HTTPS在端口443监听。

## 加密的工作原理

![How encryption works](https://user-images.githubusercontent.com/33565767/180215739-5e731309-eda1-4993-927c-c9daa400c3c5.png "I am a dev from the client text passing through an encyption")

假设我输入“I am a dev（我是一个开发者）。”当我点击发送的时候，这段文字会被加密，然后在服务器端被解密。

服务器端也是同样的道理。从服务器发送的响应，会先被加密处理然后再到客户端被解密。

## 如何知道一个网站是安全的？

检查一个网站是否是安全的，你通常可以查看URL信息栏是否有一把锁。如果有一把锁，则服务器和客户端之间的通信就是安全的。

![Showing that the site is secure](https://user-images.githubusercontent.com/33565767/178449484-738fb908-901d-4a61-9f8f-fa5a39029012.png "A padlock that shows the site is secure on the URL")

当你点击这个锁的图标，就会看到安全连接的更多信息。

![Shows site is secure](https://user-images.githubusercontent.com/33565767/180213859-21460cfa-6a8c-484e-81e5-5dba4fc31f2a.png "The URL section with more details of a secure site")

## SSL证书是什么？

SSL证书是一个小文件，告诉你的浏览器，比方说，freecodecamp.org是它所声称的网站，并且是可靠的。

证书的认证即是向客户（用户）确认他们所连接的服务器是管理该域（domain）的服务器。认证是为了使用户免受如域名欺骗这样的安全问题的影响。

证书包含一个公钥，并告诉您正在尝试连接的网站的所有者是谁。如果网站没有SSL证书，则无法使用TLS加密。

如果你是网站所有者，你可以创建自己的SSL证书（也称为自签名证书）。但这种方法的问题在于Chrome等浏览器不信任这些证书。它们倾向于信任由证书颁发机构颁发的证书。

## SSL是如何运作的？

SSL加密有两种类型，非对称和对称。SSL加密结合了这两种加密方式。下文会做详细介绍：

### 什么是非对称加密？

在非对称加密中，你拥有两把密钥：

1.  公钥
2.  私钥

![Asymmetric encryption](https://user-images.githubusercontent.com/33565767/181718454-847858dc-0df5-4bc5-bfaf-b6210c571d8f.png "Asymmetric (Public key) encryption")

客户端/用户/浏览器在通信的时候给服务器提供公钥，然后通过公钥进行加密，服务器通过私钥进行解密。

私钥只能在该特定服务器上找到，其他任何人都没有。这就是为什么非对称加密更强大且更难破解，因为它有两个不同的密钥，私钥和公钥。这两个密钥协同工作以确保数据更安全。

这也是为什么这种加密的长度是1024/2048位。

### 什么是对称加密？

对称加密就简单很多。你只有一把密钥。客户端使用一个密钥进行加密，服务器使用相同的密钥解密数据。

对称加密更轻量。长度为128/256位。但与非对称相比，它更容易被入侵，这并不意味着它没有用。当我们使用SSL时，我们将非对称和对称结合起来，能够使通信更安全、更私密。

![Symmetric encryption](https://user-images.githubusercontent.com/33565767/181720497-326e0dd9-5e0b-4bfb-b01a-2effec5ab9e0.png "How symmetric encryption works by using one key on the client side to encrypt and the same key on the server side to decrypt")

### 非对称 + 对称加密的工作原理

非对称和对称的组合形成双层防护墙
![Asymmetric and Symmetric](https://user-images.githubusercontent.com/33565767/182565306-224f199a-da88-4a68-be81-707636cc1069.png "How asymmetric and symmetric encryption work by client first sending a Hello to the server. The server then sends to the client, its public key and certificate in response. The client on step 3, sends a session key that is encrypted using the public key. On step 4, the server will decrypt the session key using the server's private key. Finally, step 5, the connection is established between the client and the server.")

在第一步中，服务器向浏览器发送非对称的公钥。如我们所知，非对成密匙包含一个公钥和一个私钥，因此浏览器收到公钥。

之后，浏览器生成一个会话密钥。

对称加密中客户端和服务器都只使用一个密钥。所以接下来，浏览器将生成一个本地会话密钥，是一个对称加密会话密钥。然后它将使用第一步中的非对称公钥对其进行加密。本地生成的会话密钥与公钥组合，发送到服务器。

然后，服务器将使用私钥解密它收到的加密会话密钥。在这个特定步骤中，服务器将使用非对称私钥来解密它收到的会话密钥。

现在，一旦解密发生，服务器和浏览器将使用会话密钥进行通信。会话密钥将仅用于这次特定会话。

假设你关闭了浏览器，并在第二天登录 —— 一切重新开始，会话密钥会再次被创建。

## 如何给我的网站申请SSL?

如果您是网站所有者，您可以从证书颁发机构获取SSL证书。

然后在托管网站的Web服务器上安装证书。大多数情况下，托管网站的托管公司会为您处理此过程。

## 在哪里申请SSL证书?

有些组织颁发安全证书，这些组织称为证书颁发机构。其中一些证书颁发机构包括：DigiCert、Comodo等。

许多开发人员从这些组织获得证书。由于这些组织办法的证书是使用最广泛，浏览器通常信任来自这些组织的证书。

## 可以免费获取SSL证书吗?

Cloudflare免费提供SSL证书。它是最早采取这一行动的互联网安全公司之一。

如果你想申请一个，[可以点击这里](https://www.cloudflare.com/ssl/)。

## HTTPS的用途

HTTPS在安全性方面起到了很大的作用。没有它，传递敏感信息将成为一个巨大的挑战，尤其是当你的企业需要一种安全的通信方式时。

接受在线支付的网站（如电子商务网站）通常需要HTTPS。这是为了避免信用卡详细信息和登录信息等被盗 (引用: [Tony Messer](https://www.entrepreneur.com/article/281633))。

## HTTPS和HTTP的主要区别

-   HTTPS中启用了加密层，而HTTP中没有加密层。
-   数据在HTTPS中受到保护，而在HTTP中则不受保护。
-   当使用HTTPS时，网站在Google中的排名会提高，而使用HTTP时，不会获得任何排名提升。
-   使用HTTPS可以防止网络钓鱼，而使用HTTP没有保护。
-   使用HTTPS符合支付行业规定，但是HTTP不合规。
-   在最初几秒钟内加载HTTPS可能比加载HTTP慢。
-   获得SSL证书可能需要花钱，而HTTP没有认证成本。
-   在chrome上使用HTTPS网站更方便，使用HTTP网站会经常收到不安全提示。

## 总结

HTTP和HTTPS在开发者的日常生活中扮演了重要的角色，浏览器和服务器之间的通信是我们工作的动力。

尽可能地保护用户的数据，以防止他们的信息被盗，将获得用户的信任并提供更好的用户体验。

下篇文章见。
