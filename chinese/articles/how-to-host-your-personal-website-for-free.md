> * 原文地址：[How To Host Your Personal Website for Free](https://medium.com/better-programming/how-to-host-your-personal-website-for-free-3101c4ab2e49)
> * 原文作者：[Joey Colon](https://medium.com/@joey_colon)
> * 译者：ZhichengChen
> * 校对者：


# 通过亚马逊 S3 和 Cloudflare 免费托管网站

![https://miro.medium.com/max/1000/1*qpOIeHOF-U0XuODBODQLCQ.jpeg](https://miro.medium.com/max/1000/1*qpOIeHOF-U0XuODBODQLCQ.jpeg)

图片来自https://unsplash.com/@kevnbhagat

在过去的五年左右时间里，web 变化很大，曾经 dev-op 实践被奉为圭臬，如今却略显过时。

发布网站到线上，过去的标准做法是给服务商支付费用，比如 NameCheap 或者 GoDaddy。现在虚拟主机仍然是一个不错的选择，不过已经有一些更简便的方法。接下来会介绍我免费部署[个人网站](http://joey.dev/)到线上的方法。

## 开始的开始

需要准备网站的静态文件（HTML/CSS/JS）。这个教程讲述的是托管静态站。

还需要一个域名。域名价格一般是一年 15 美元左右，不同的顶级域名价格不同。如果你想要打造个人品牌，那么购买一个域名还是很有必要的。

此外还需要在 [Cloudflare](https://www.cloudflare.com/) 和 [AWS](https://aws.amazon.com/) 注册账号。如果没用过这两个服务，没关系---我会一步步讲解每个平台的操作步骤。干就完了。

## 设置 AWS S3 文件桶

登录 AWS 控制台，进入 [S3 管理控制台](https://console.aws.amazon.com/s3/home)。

点击创建存储桶按钮。弹出一个存储桶信息表单的对话框。 

![](https://miro.medium.com/max/1398/1*SQ-ze3rTSlM8M4FtHhm7vQ.png)

*AWS S3 管理控制台*

在“存储桶名称”栏，填写完整的域名。在这个教程里，我会使用 tutorial.joey.dev。“区域”栏，选择离我比较近的州，US East (N.Virginia)。当然你可以选择离你比较近的地区。选好后点击下一步。

![](https://miro.medium.com/max/1093/1*8hN5P5cU0e2xR73btV3P0w.png)

*AWS S3 创建存储桶 步骤一*

在步骤二，直接点击下一步。在步骤三，取消*阻止所有公共访问*选项，我们也用不到 S3 日志传输服务，直接点击下一步。

![https://miro.medium.com/max/1099/1*6Dqwkgk5dUglp2fZAmZ94Q.png](https://miro.medium.com/max/1099/1*6Dqwkgk5dUglp2fZAmZ94Q.png)

*AWS S3 创建存储桶 步骤三*

在步骤四，直接单击创建存储桶按钮。在 S3 管理控制台会看见新创建的存储桶。点击新创建的存储桶，会出现下面的界面：

![](https://miro.medium.com/max/1251/1*DAws-OGBVHZrNKh0oAEZWQ.png)

*AWS S3 新创建的存储桶*

点击屏幕顶部的*属性*选项卡，然后选择第一行的*静态网站托管*卡片。选中*使用此存储桶托管网站*选项。索引文档，直接填写 `idnex.html`然后点击保存。

**留意一下卡片顶部终端节点的值，记下来。**

![](https://miro.medium.com/max/1905/1*H_O_F82gTDOnmNjfYMYEag.png)

*AWS S3 静态网站托管配置*

漂亮。最后一步就是上传网站文件到存储桶里了。点击*概述*标签页然后点击*上传*按钮。出现下面的弹窗，开始上传吧。

![](https://miro.medium.com/max/1094/1*QZkDDVQGmYh6UaXNNnhP5w.png)

*AWS S3 上传文件 步骤一*

在选择上传的文件后，点击下一步按钮。在第二步，点击*管理公共权限下拉框*选择*为此对象授予公共读取访问权限*选项。点击下一步。

![](https://miro.medium.com/max/1095/1*k8j04DlNIT4XLZuCQVHFiQ.png)

第三步，所有选项都不用更改，直接点击下一步。在第四步点击*上传*按钮。上传完成后，通过访问终端节点地址就可以访问网站了。

厉害了，接下来设置 Cloudflare。

![](https://miro.medium.com/max/1272/1*TyrD5ejxnz0E0d2Sl201HQ.png)

## 设置 Cloudflare

这里假设你是第一次使用 Cloudflare 服务，Cloudflare 并没有绑定任何域名。在 Cloudflare 控制台，点击*Add a Site* 按钮，输入网站地址，点击 Next。再点击 Next，选择 Free plan。

进入 DNS 查询结果页面后，删除扫描到的所有记录。结果看起来如下：

![](https://miro.medium.com/max/1076/1*AOzFHjCSQ-6j12L84XHJ1A.png)

这里需要两个不同的`CNAME`记录。

第一个记录，*name*，输入`www`，*Domain name*，输入不包含 http:// 的域名，如`tutorial.joey.dev`。

第二个记录，*name*  输入域名，*Domain name*，输入我们之前提到的 S3 存储桶的终端节点。确保添加这些记录的时候橙色的云是可用的。

![](https://miro.medium.com/max/1074/1*a1FiP8wLTfhBRkxi5iK-rQ.png)

*Cloudflare DNS 记录配置*

对照着上图，如果确定设置没有问题，点击*Continue*。现在需要把你的域名的 nameservers 从域名注册商指向 Cloudflare 的 nameservers。这涉及到域名注册商网站的一些操作，可以阅读一下相关的文档。

修改完 nameservers，还需要设置一些页面规则。在这之前，先确保 SSL 证书设置正确。在 Cloudflare 控制台，点击域名进入到域名控制台，点击 *Crypto* 选项卡确保 SSL 的设置是 *Flexible*。

![](https://miro.medium.com/max/1196/1*lpTdVq6okXGcga07TeSNhQ.png)

好事将近。点击 Page Rules 选项卡。这里需要创建两个页面规则，把非 SSL 的流量跳转到 SSL，把 www.joey.dev 跳转到更简短的 joey.dev，在这里合并成了一条规则（按需配置）。

![](https://miro.medium.com/max/797/1*QT9LXp3wPcsrQap_4jb56w.png)

至此，.dev 域名自动跳转到了 SSL，当有人访问 www.domain.dev 时，也会跳转，一箭双雕。

如果你的顶级域名不是 .dev，需要额外配置下面的规则：

![](https://miro.medium.com/max/793/1*ngy4I0l-fe5JGBzyESUH9w.png)

访问域名。哈哈哈，现在可以访问 SSL 加密版部署在 AWS S3 存储桶集成 cdn 的网站啦。
