> -  原文地址：[How to Offer Custom APIs to Your Users with AWS API Gateway](https://www.freecodecamp.org/news/how-to-offer-custom-apis-to-your-users-aws-api-gateway/)
> -  原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> -  译者：Rhea-xiao
> -  校对者：

![How to Offer Custom APIs to Your Users with AWS API Gateway](https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/AWS-API-Gateway-Banner.png)

在云计算领域和 serverless 架构中，AWS API Gateway 是一款强大的工具，能帮助您搭建强大、安全且可拓展的 API。

在本教程中，首先我将介绍 API 网关是什么，并解释使用 API 网关的好处。接下来，我将展示如何创建、部署一个 Rest API, 并创建使用计划以提供 API 密钥。那么，我们现在就开始吧！

## 什么是 API 网关？

AWS API Gateway 是 Amazon Web Services (AWS) 提供的一项全托管服务，可帮助您轻松搭建、部署和管理任意规模的 API。

它充当应用程序的前门，允许您创建充当客户端和后端服务之间桥梁的 API，以便实现安全有效的通信。

## 为什么需要 API 网关？

AWS API Gateway 可为企业和开发者提供诸多好处，下方列出了一些使用 API 网关的好处。

### 可拓展性和高可用性

借助 AWS API Gateway，您可更轻松地进行 API 拓展。通过底层基础设施自动伸缩， AWS API Gateway 可以无缝处理流量高峰，以确保高可用性并避免服务中断。

### 安全与认证

API 网关提供强大的安全功能，包括内置的身份验证和授权机制。

它支持通过 IAM 角色对内部应用程序进行用户身份验证，通过 Cognito 对外部应用程序进行身份验证，并且支持自定义授权者。

### 与其他 AWS 服务集成

作为 AWS 生态系统的一部分， API 网关与一系列其他 AWS 服务无缝集成，这意味着您能利用 AWS Lambda 函数、用于用户管理的 AWS Cognito，以及用于监管和日志记录的 AWS CloudWatch 等其他功能。

### API 生命周期管理

利用 API 网关，您能轻松对不同阶段的 API 进行版本控制、部署及管理。这简化了发布更新、测试新功能以及管理不同环境（比如开发、预生产和生产）的过程。

我希望现在您已经了解了 API 网关是什么以及它为何如此重要。接下来让我们一起来创建自己的 API 网关吧！

## 如何创建 AWS API Gateway

在本节中，我们将:

-   采用 GET 方法创建 Rest API 
-   将其与简单的 hello world lambda 函数集成并进行部署

让我们从创建 lambda 函数开始吧

## 如何创建 AWS Lambda 函数

登录 AWS Management [控制台](https://console.aws.amazon.com/) 并在控制台搜索栏中搜索 "Lambda"。然后，单击 Create Function 按钮。

![image-145](https://www.freecodecamp.org/news/content/images/2023/06/image-145.png)

导航至 AWS Lambda 控制台

选择 "Author from scratch" 选项，输入 lambda function 名称，选择 "Python" 运行时，然后单击右下方的 Create Function 按钮。

![image-146](https://www.freecodecamp.org/news/content/images/2023/06/image-146.png)

创建一个 AWS Lambda Function

函数创建成功后，请更新下方代码并部署更改：

```Python
import json

def lambda_handler(event, context):
    body = "Hello from 5minslearn!"
    statusCode = 200
    return {
        "statusCode": statusCode,
        "body": json.dumps(body),
        "headers": {
            "Content-Type": "application/json"
        }
    }
```

![image-147](https://www.freecodecamp.org/news/content/images/2023/06/image-147.png)

部署 Lambda Function

恭喜! 您已成功创建 AWS Lambda 函数，接下来让我们来创建 Rest API。

## 如何创建 Rest API 并将其与 AWS Lambda 集成

在搜索栏搜索 API Gateway，然后再 REST API 模块中单击 Build 按钮。

![image-183](https://www.freecodecamp.org/news/content/images/2023/06/image-183.png)

创建 Rest API

选择协议为 Rest，并在 Create new API 选项中选择 New API。在设置中输入您选择的 API 名称，并保留 Endpoint Type 为默认项。然后，单击 Create API 按钮。

![image-148](https://www.freecodecamp.org/news/content/images/2023/06/image-148.png)

配置创建 Rest API

首先单击左上方的 Actions 按钮，然后单击 Method 并选择 GET 方法，再单击勾选图标。

![image-149](https://www.freecodecamp.org/news/content/images/2023/06/image-149.png)

创建 Method

![image-150](https://www.freecodecamp.org/news/content/images/2023/06/image-150.png)

选择 "GET" 方法

选择 Lambda Function 作为 Integration 类型，并输入已创建的 Lambda 函数名称。然后，保存此函数。

![image-151](https://www.freecodecamp.org/news/content/images/2023/06/image-151.png)

选择 Method 配置

单击保存后， 屏幕中将弹出 "Add Permission to Lambda Function"消息提示确认，这就意味着您将允许 API Gateway 调用 Lambda 函数。在本例中，它就是 "DemoFunction" Lambda 函数。请同意确认，并继续下一步。

![image-152](https://www.freecodecamp.org/news/content/images/2023/06/image-152.png)

同意授权通过 API 网关调用 Lambda Function

单击 Test，您将来到一个新页面。单击 "Test" 按钮，此时您能在右侧面板上看到 Lambda 函数做出的响应。

![image-153](https://www.freecodecamp.org/news/content/images/2023/06/image-153.png)

我们的 API 架构

![image-184](https://www.freecodecamp.org/news/content/images/2023/06/image-184.png)

测试我们的 API 网关

在成功测试 API 后，您就能部署 API 了。要部署 API，请再次单击 Actions 按钮，然后单击 Deploy API。

![image-185](https://www.freecodecamp.org/news/content/images/2023/06/image-185.png)

部署 API 网关

此时屏幕上将弹出 Deploy API 对话框，请选择 New Stage 作为部署阶段，并对其进行命名。然后，单击 Deploy 按钮。

![image-155](https://www.freecodecamp.org/news/content/images/2023/06/image-155.png)

配置 API 网关部署

单击页面顶部的 Invoke URL，您将看到 Lambda 做出的响应。

![image-156](https://www.freecodecamp.org/news/content/images/2023/06/image-156.png)

API 网关创建成功

![image-186](https://www.freecodecamp.org/news/content/images/2023/06/image-186.png)

测试我们的 API

真棒! 我们已经成功创建 Rest API，将其与 Lambda 函数集成，并且进行了部署。

但是，您可以通过市场中提供的多种服务来实现这个目标，那为什么要选择 AWS API Gateway 呢？

嗯，这是一个有趣的问题。首先，您可以利用 AWS API Gateway 为自己的 API 配置使用计划，而其中最突出的一点就是您无需为此编写任何代码。

现在就让我们来创建一个使用计划，生成一个 API 密钥，并仅通过在标头中传递 API 密钥来访问 Rest API。

## 如何创建 API Gateway 使用计划

在左侧边栏中单击 Usage Plans，然后单击 Create 按钮。输入您的计划名称，这里我选择了 "Basic"。根据您的需求在 Throttling 和 Quota 选项中输入相应数值，然后单击 Next。

![image-159](https://www.freecodecamp.org/news/content/images/2023/06/image-159.png)

创建 AWS API Gateway 使用计划

单击 Add API Stage 按钮，并选择相应的 API 及其阶段。然后，单击右上角的勾选图标，并选择 Next。

![Screenshot-from-2023-06-19-10-46-19](https://www.freecodecamp.org/news/content/images/2023/06/Screenshot-from-2023-06-19-10-46-19.png)

为我们的 API 创建一个阶段

![image-164](https://www.freecodecamp.org/news/content/images/2023/06/image-164.png)

为我们的 API 创建一个阶段

单击 "Create API Key and add to Usage Plan"，屏幕上将弹出一个对话框，请输入 API 密钥名称。而关于 API 密钥，我这里选择了 Auto Generate （自动生成），当然您也可以进行自定义。然后，单击 Save 按钮。

![image-160](https://www.freecodecamp.org/news/content/images/2023/06/image-160.png)

创建 API 密钥以访问服务

![image-161](https://www.freecodecamp.org/news/content/images/2023/06/image-161.png)

配置 API 密钥

从侧边栏选择 Resources，单击已创建的 GET API，然后单击 Method Request。

![image-162](https://www.freecodecamp.org/news/content/images/2023/06/image-162.png)

选择方法

在设置选项中，将 API Key Required 字段更新为 "true" 并单击勾选图标。更新后，务必点击 Action 下拉菜单以部署更改。否则，变更将不会更新。

![image-187](https://www.freecodecamp.org/news/content/images/2023/06/image-187.png)

启用 API Key Required 字段

![image-165](https://www.freecodecamp.org/news/content/images/2023/06/image-165.png)

部署 API

现在点击相同的 URL，你会发现神奇的事发生了。

Forbidden （禁止访问）！

因为现在我们的 API 层已受保护，您必须在标头中传递 API 密钥才能访问数据。

![image-163](https://www.freecodecamp.org/news/content/images/2023/06/image-163.png)

若未提供 API 密钥，则禁止访问。

现在单击侧边栏中的 Usage Plans，选择您的计划并导航至 API 密钥选项卡。

![image-166](https://www.freecodecamp.org/news/content/images/2023/06/image-166.png)

访问您的 API 密钥

单击您在步骤 3 中创建的 API 密钥，然后单击 Show， 并复制此 API 密钥。

![image-188](https://www.freecodecamp.org/news/content/images/2023/06/image-188.png)

API 密钥列表

![image-167](https://www.freecodecamp.org/news/content/images/2023/06/image-167.png)

显示您的 API 密钥

您必须在 'x-api-key' 标头中传递密钥。现在，让我们切换至终端来测试一下。

首先，测试一下在不传递 API 密钥的情况下 Rest API 的响应。打开终端，然后输入下方的 curl 命令。此时，您将再次看到“禁止访问”的消息。

```bash
curl --location --request GET '[enter your invoke url]'
--header 'Content-Type: application/json
```

![image-189](https://www.freecodecamp.org/news/content/images/2023/06/image-189.png)

终端中未提供 API 密钥的情况下禁止访问

现在再进行一次测试，在标头中传递 API 密钥，并运行下方 curl 命令：

```bash
curl --location --request GET '[your invoke url]' \
--header 'x-api-key: [your api key]' \
--header 'Content-Type: application/json' \
--data-raw ''
```

![image-190](https://www.freecodecamp.org/news/content/images/2023/06/image-190.png)

在 x-api-key 标头中传递 API 密钥时获取的数据

因为在标头中传递了 'x-api-key'，所以您能看到 Lambda 函数输出的结果。

真棒! 您已经成功创建使用计划，生成了 API 密钥，并将其附加到 Rest API 方法中以及验证了集成。

## 总结

In this tutorial, you learned what AWS API gateway is and how to create Usage Plans for the Rest API.

If you wish to learn more about AWS Services, subscribe to my [email newsletter](https://5minslearn.gogosoon.com/?ref=fcc_aws_api_gateway) ([https://5minslearn.gogosoon.com/](https://5minslearn.gogosoon.com/?ref=fcc_aws_api_gateway)) and follow me on social media.
