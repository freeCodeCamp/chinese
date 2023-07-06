> -  原文地址：[How to Offer Custom APIs to Your Users with AWS API Gateway](https://www.freecodecamp.org/news/how-to-offer-custom-apis-to-your-users-aws-api-gateway/)
> -  原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> -  译者：Rhea-xiao
> -  校对者：

![How to Offer Custom APIs to Your Users with AWS API Gateway](https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/AWS-API-Gateway-Banner.png)

在云计算领域和 serverless 架构中，AWS API 网关是一种有力的工具，能帮助您搭建强大、安全且可拓展的 API。

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

登录 AWS Management [控制台](https://console.aws.amazon.com/) 并在控制台搜索栏中搜索 "Lambda"。单击 Create Function（创建函数）。

![image-145](https://www.freecodecamp.org/news/content/images/2023/06/image-145.png)

导航至 AWS Lambda 控制台

选择"Author from scratch（从头开始创作）" 选项，输入 lambda function 名称，选择 "Python" 运行时，然后单击右下方的 Create Function 按钮。

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

恭喜! 您已成功创建 AWS Lambda 函数，接下来让我们来创建 Rest API.

## 如何创建 Rest API 并将其与 AWS Lambda 集成

在搜索栏搜索 API Gateway，然后再 REST API 模块中单击 Build 按钮。

![image-183](https://www.freecodecamp.org/news/content/images/2023/06/image-183.png)

创建 Rest API

Choose the Protocol as Rest and select New API in the Create new API section. In the settings section enter the API name of your choice and leave Endpoint Type as the default. Then click the Create API button.

![image-148](https://www.freecodecamp.org/news/content/images/2023/06/image-148.png)

Configure creating a Rest API

Click the Actions Button on the top left. Next, Click Method and select the method as GET and click the Tick icon.

![image-149](https://www.freecodecamp.org/news/content/images/2023/06/image-149.png)

Create a Method

![image-150](https://www.freecodecamp.org/news/content/images/2023/06/image-150.png)

Choose "GET" method

Select Lambda Function as the Integration type and enter the name of the Lambda function you created previously. Then save the function.

![image-151](https://www.freecodecamp.org/news/content/images/2023/06/image-151.png)

Select Method configuration

Once you click save, "Add Permission to Lambda Function" will prompt for confirmation. This basically means that you're allowing the API Gateway to invoke a Lambda function. In this case, it is "DemoFunction" Lambda function. Accept the confirmation and proceed to the next step.

![image-152](https://www.freecodecamp.org/news/content/images/2023/06/image-152.png)

Allow Permission to invoke Lambda Function from API Gateway

Click on Test. It will take you to a new page. Click on the "Test" button. You'll be able to see the response from the Lambda function on the right side panel.

![image-153](https://www.freecodecamp.org/news/content/images/2023/06/image-153.png)

Our API Architecture

![image-184](https://www.freecodecamp.org/news/content/images/2023/06/image-184.png)

Test our API Gateway

As you have successfully tested your API, you're ready to deploy the API. To deploy the API, click on the Actions button once again and click on Deploy API.

![image-185](https://www.freecodecamp.org/news/content/images/2023/06/image-185.png)

Deploy the API Gateway

The Deploy API dialogue will popup. Select New Stage for Deployment stage and name it whatever you want. Click the Deploy button.

![image-155](https://www.freecodecamp.org/news/content/images/2023/06/image-155.png)

Configure API Gateway deployment

Click on Invoke URL shown at the top. You can see the response from the Lambda function.

![image-156](https://www.freecodecamp.org/news/content/images/2023/06/image-156.png)

API Gateway Created

![image-186](https://www.freecodecamp.org/news/content/images/2023/06/image-186.png)

Test our API

Great! We successfully created the Rest API, integrated it with the Lambda function, and deployed it.

But you can do this with multiple services available on the market. Why would you choose AWS API Gateway?

Well. That's a interesting question. First of all, you can configure the usage plan for your API. The best part is you don't have to write any code for it.

Now let's create a Usage Plan, generate an API key, and make our Rest API accessible only by passing the API key in the Header.

## How to Create an API Gateway Usage Plan

In the left side bar click on Usage Plans and click the Create button. Enter the Name of your plan – I chose "Basic". Enter the Throttling and Quota sections as per your requirements and click Next.

![image-159](https://www.freecodecamp.org/news/content/images/2023/06/image-159.png)

Create AWS API Gateway usage plan

Click on the Add API Stage button. Select the API and its stage. Click on the tick icon at right corner and select Next.

![Screenshot-from-2023-06-19-10-46-19](https://www.freecodecamp.org/news/content/images/2023/06/Screenshot-from-2023-06-19-10-46-19.png)

Create a Stage for our API

![image-164](https://www.freecodecamp.org/news/content/images/2023/06/image-164.png)

Create a Stage for our API

Click on Create API Key and add to Usage Plan. A modal will pop up. Enter the Name for API Key. For the API key, I selected Auto Generate but if you want to give a custom key you can enter a custom key. Hit the Save button.

![image-160](https://www.freecodecamp.org/news/content/images/2023/06/image-160.png)

Create a API Key to access the service

![image-161](https://www.freecodecamp.org/news/content/images/2023/06/image-161.png)

Configure the API Key

Select Resources from the Sidebar, click on the GET API you just created, and click the Method Request.

![image-162](https://www.freecodecamp.org/news/content/images/2023/06/image-162.png)

Select the method

In the Settings section, update the API Key Required field to true and click the Tick icon. Once updated, don't forget to deploy the changes by hitting the Action dropdown. Your changes will not be updated otherwise.

![image-187](https://www.freecodecamp.org/news/content/images/2023/06/image-187.png)

Enable API Key Required field

![image-165](https://www.freecodecamp.org/news/content/images/2023/06/image-165.png)

Deploy the API

Hit the same URL now and see the magic.

Forbidden!

Because our API layer is protected now. You have to pass the API key in the header to access the data.

![image-163](https://www.freecodecamp.org/news/content/images/2023/06/image-163.png)

Forbidden access if no API Key is provided

Now Click on the Usage Plans from the Sidebar. Select your plan and navigate to the API Keys tab.

![image-166](https://www.freecodecamp.org/news/content/images/2023/06/image-166.png)

Access your API Key

Click on the API key you created in Step 3. Click Show. Copy the API key.

![image-188](https://www.freecodecamp.org/news/content/images/2023/06/image-188.png)

List of API Keys

![image-167](https://www.freecodecamp.org/news/content/images/2023/06/image-167.png)

Reveal your API Key

You have to pass the API Key in the 'x-api-key' header. Let's switch to the terminal to test this out.

Verify your Rest API without passing the API key at first. Open the terminal, and enter the following curl command. You will once again see the forbidden message.

```bash
curl --location --request GET '[enter your invoke url]'
--header 'Content-Type: application/json
```

![image-189](https://www.freecodecamp.org/news/content/images/2023/06/image-189.png)

Forbidden access without API Key in Terminal

Now pass the API key this time. Run the following curl command:

```bash
curl --location --request GET '[your invoke url]' \
--header 'x-api-key: [your api key]' \
--header 'Content-Type: application/json' \
--data-raw ''
```

![image-190](https://www.freecodecamp.org/news/content/images/2023/06/image-190.png)

Data received on passing API Key in x-api-key Header

You can see the output of the Lambda function because you passed 'x-api-key' in the header.

Awesome! You have successfully created the Usage plan, generated the API key, and attached it to the Rest API method and verified the integration.

## Conclusion

In this tutorial, you learned what AWS API gateway is and how to create Usage Plans for the Rest API.

If you wish to learn more about AWS Services, subscribe to my [email newsletter](https://5minslearn.gogosoon.com/?ref=fcc_aws_api_gateway) ([https://5minslearn.gogosoon.com/](https://5minslearn.gogosoon.com/?ref=fcc_aws_api_gateway)) and follow me on social media.
