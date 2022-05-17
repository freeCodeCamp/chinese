> - 原文地址：[How to Receive Emails from Your Site's "Contact Us" form Using AWS SES, Lambda, & API Gateway](https://www.freecodecamp.org/news/how-to-receive-emails-via-your-sites-contact-us-form-with-aws-ses-lambda-api-gateway/)
> - 原文作者：Adham El Banhawy
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Receive Emails from Your Site's "Contact Us" form Using AWS SES, Lambda, & API Gateway](https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGNvbnRhY3QlMjB1c3xlbnwwfHx8fDE2MTY1ODExNjc&ixlib=rb-1.2.1&q=80&w=2000)

我最近在为一个客户建立一个简单的登陆页面网站，该客户希望通过他们的网站接收电子邮件，而不需要分享他们的电子邮件。

说实话，我以前从未尝试过自己实现这一功能。我总是习惯于有一个简单的 "Contact Us""按钮，有一个锚标签(anchor)，在 *href* 属性里有一个 `mailto`，像这样。

```html
<button>
 <a href="mailto:myemail@example.com">Contact Me</a>
</button>

```

但这种方法有两个不便之处:

1. 它迫使双方，即想发送消息的用户和接收消息的网站所有者，彼此分享他们的电子邮件。虽然这对某些人来说是可以的，但对注重隐私的人来说，这并不理想。
2. 对于网站访问者来说，点击链接迫使他们打开他们设备上的默认邮件程序，这可能是令人沮丧的。如果他们使用的是一台公共电脑呢？如果他们没有登录呢？如果他们根本不想使用他们的邮件程序呢？
是的，从技术上讲，他们可以直接抓取收件人的电子邮件地址，并通过他们的浏览器或他们登录的地方发送消息。但这些都是额外的步骤和障碍，会使用户不愿意发送他们的信息，企业可能会失去潜在的反馈或机会。

出于这个原因，我们选择了一个电子邮件表格，用户可以简单地写下他们的信息并点击提交，在不离开网站的情况下向网站的主人发送电子邮件。

谷歌快速搜索显示，有一些第三方工具/小工具可以嵌入到网站中，但它们大多是品牌，需要付费订阅才能完全定制(译者注：免费版的，有功能上或者数量上的限制，或者有广告插入)。

除非你使用的是像 WordPress 这样的 CMS，有一个内置的/插件可以做到这一点，否则这就是一个不方便的日常性费用。

我选择了自己编写该功能的代码，这样我就可以完全控制了。

为了本指南的目的，我将重现我使用 HTML 和 AWS 服务实现该功能的步骤。

## HTML 表格

我将在这里保持超级简单，使用一个没有 CSS 的基本 HTML 表单，只是为了测试我们想要的功能。

```html
<h2>Contact Us</h2>
<form>
  <label for="name">Name:</label>
  <input name="name" type="text"/><br/><br/>
  <label for="email">Email:</label>
  <input name="email" type="email"/><br/><br/>
  <label for="name">Message:</label>
  <textarea name="message"></textarea><br/><br/>
  <input type="submit"/>
  <div>
    <p id="result-text"></p>
  </div>
</form>

```

![](https://www.freecodecamp.org/news/content/images/2021/03/image-61.png)

这里没有什么花哨的东西可看...

现在我们要用 JavaScript 来处理提交功能。

```js
const form = document.querySelector('form')
form.addEventListener('submit', event => {
  // prevent the form submit from refreshing the page
  event.preventDefault()

  const { name, email, message } = event.target
  console.log('Name: ', name.value)
  console.log('email: ', email.value)
  console.log('Message: ', message.value)

})

```

在这一点上，我们有一个从用户那里获得输入的表单，以及只是将结果显示在控制台(console) 的 JavaScript 代码。

我们现在可以先不考虑这个问题，而是开始处理后端服务，这些后端服务将接收表单数据，并将这些数据发送电子邮件。

## 后端简介

让我们深入了解 AWS，以及我们将使用哪些服务和如何使用。

正如标题中提到的，我们将使用 **AWS Lambda** 和 **Simple Email Service**（SES）。SES 是一个无服务器 (serverless) 的消息传递服务，允许你在调用时发送电子邮件。AWS Lambda 允许你编写服务器/端代码，以响应事件的发生而执行。

我们还将使用 **API 网关**，使我们能够通过 HTTP 调用 Lambda 函数。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-62.png)

在这种情况下，当我们的表单被提交时，将发生以下工作流程:

1. 我们的浏览器（JavaScript）将向 AWS API Gateway 指定的端点(endpoint) URL 发出一个 post 请求，请求体中包含表单数据
2. API 网关将验证这个请求。然后它将触发 Lambda 函数，该函数接受一个事件参数。API Gateway 将把表单数据放在事件参数的 body 属性中。
3. 我们的 Lambda 函数将从事件主体中提取数据，然后我们将使用这些数据来建立我们想要发送的电子邮件的主体以及它的收件人。然后，我们的函数将使用 AWS SDK 来调用 SES 的电子邮件数据。
4. 当 SES 收到 *sendMail* 请求，它就会将电子邮件数据变成实际的文本电子邮件，并通过 AWS 自己的邮件服务器将其发送给收件人。
一旦电子邮件被发送，我们的浏览器将收到一个状态代码为 200 的响应和一个成功信息。如果 AWS 云中的任何步骤失败，响应将有一个 500 状态代码。

## 第 1 步：如何建立 SES

实际上，我们将按照相反的顺序来设置每一个步骤，从 SES 开始，这将会更容易。

首先在你的 AWS 控制台，进入 `SES service` —> 然后点击侧面菜单中的 `Email Addresses` —> 然后点击 "Verify a New Email Address" 按钮。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-63.png)

在打开的对话框中，输入你希望 SES 服务在发送电子邮件时的发件人地址。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-64.png)

这将向你输入的电子邮件地址发送一封电子邮件，其中有一个链接，可以点击验证。AWS 将知道电子邮件的所有者同意将他们的电子邮件地址作为发件人地址。

在你验证电子邮件之前，SES 电子邮件仪表板将保持验证状态为待定（pendin verification）。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-65.png)

当电子邮件所有者打开他们从 AWS 收到的电子邮件，并点击其中的验证链接，验证状态应该变为已验证（verified ，刷新页面以看到变化）。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-66.png)

而这就是你为 SES 所要做的一切。你可以选择测试服务，在列表中选择你经过验证的电子邮件，然后点击 "Send a Test Email" 按钮。这将让你输入收件人的电子邮件地址、主题（subject）和信息(message)并发送。

发送的电子邮件将由 AWS 服务器签署，发件人应该是你输入的发件人地址。它应该看起来像这样。:

![](https://www.freecodecamp.org/news/content/images/2021/03/image-67.png)

## 第 2 步：如何设置 Lambda

现在这是最有趣的部分。我们将创建一个函数，用来接收表单数据并调用 SES。

Lambda 函数的好处是，你不必担心在服务器上 24/7 运行你的后端代码，也不必担心维护服务器。它是 *无服务器的(serverless)*。

但这并不意味着不涉及服务器。AWS 将幕后处理这些问题，因此你可以只专注于编写代码，而不是维护服务器。此外，你只需按你的函数被调用的次数和执行的时间来收费，而且是 [难以置信的便宜](https://aws.amazon.com/lambda/pricing/)!

### 创建一个 IAM 角色并进行配置

在我们开始编写 lambda 函数之前，我们需要创建一个 IAM *role（角色）*，将其附加到函数上，并授予它调用 SES 服务的权限（在 AWS 中被称为策略）。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-68.png)

从你的 AWS 控制台，进入 IAM service->点击侧面菜单中的 `service` ->然后点击 `Create Policy` 按钮。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-69.png)

在策略创建页面，进入 JSON 标签，粘贴以下权限，然后点击 `Next`。

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
            ],
            "Resource": "*"
        }
    ]
}

```

在第三个屏幕中，为政策命名，并点击 `Create Policy` 按钮。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-70.png)

现在我们创建一个 IAM *role(角色)*，它将被附加到 lambda 上，并将其与我们刚刚创建的权限策略联系起来。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-71.png)

从 IAM 侧面的菜单，点击角色，然后点击 `Create role` 按钮。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-72.png)

在角色创建界面，确保选择的类型是 "AWS service"，并选择 `Lambda case`，然后点击 "Next:Permissions"按钮。


![](https://www.freecodecamp.org/news/content/images/2021/03/image-73.png)

在下一个屏幕上，按名称搜索我们先前创建的 `policy` 并选择它，然后点击 `Next`。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-74.png)

查看屏幕，给这个角色起一个你能记住的名字，然后点击 "Create role"。

现在我们可以创建一个新的 lambda 函数。转到 Lambda 服务仪表板，点击 "Create Function" 按钮。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-75.png)

在函数创建界面，命名你的函数，选择 "Author from scratch" 选项，并选择 Node.js 作为运行时间。

在 "Change default execution role（改变默认执行角色）"下，选择 "Use an existing role（使用现有角色）"选项，然后从 "Existing role（现有角色）"下拉菜单中选择你在前一步创建的角色名称。

最后，点击 "Create function"按钮来创建函数。

### 编写代码并测试它

![](https://www.freecodecamp.org/news/content/images/2021/03/image-76.png)

在编辑器中，打开 index.js 文件（这是在你的 lambda 被调用时将被执行的文件），用以下代码替换它:

```js
const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
  console.log('EVENT: ', event)
  const params = {
    Destination: {
      ToAddresses: ["your@email.com"],
    },
    Message: {
      Body: {
        Text: {
            Data: `Hello from Lambda!`
        },
      },
      Subject: { Data: `Message from AWS Lambda` },
    },
    Source: "your@email.com",
  };

  return ses.sendEmail(params).promise()
};

```

请注意，在第 2 行，我们正在使用 AWS SDK 并创建一个 SES 实例。我之所以选择 **us-east\-1** 作为区域，是因为那是我注册和验证电子邮件的地方。请确保你的电子邮件使用你注册电子邮件的 AWS 地区。

现在要测试这个功能，点击 "Deploy" 按钮。然后点击 "Test" 按钮->配置测试事件，这将打开一个测试配置对话框，你可以创建一个新的测试事件。

在测试事件主体编辑器中，输入以下 JSON，模仿最终将来自我们的浏览器请求的内容。然后点击创建。

```json
{
  "body": {
        "senderName": "Namo",
        "senderEmail": "namo@trains.com",
        "message": "I love trains!"
    }
}

```

现在点击 `test` 按钮将运行我们刚刚创建的测试。它应该在编辑器中打开一个新的标签，向我们展示运行该函数所产生的日志，它应该是这样的:

![](https://www.freecodecamp.org/news/content/images/2021/03/image-77.png)

注意，我们登录的事件对象在这里显示在功能日志下，其中有我们在测试事件中使用的主体数据。

This test should have sent an email to my inbox as well – let's see if that happened.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-78.png)

是的，就像预期的那样。而这几乎是在运行测试后立即发生的。

现在让我们修改我们的函数代码，从测试数据中得到一个更有意义的信息。

```js
const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
  console.log('EVENT: ', event)
 // Extract the properties from the event body
  const { senderEmail, senderName, message } = JSON.parse(event.body)
  const params = {
    Destination: {
      ToAddresses: ["the.benhawy@gmail.com"],
    },
  // Interpolate the data in the strings to send
    Message: {
      Body: {
        Text: {
            Data: `You just got a message from ${senderName} - ${senderEmail}:
            ${message}`
        },
      },
      Subject: { Data: `Message from ${senderName}` },
    },
    Source: "the.benhawy@gmail.com",
  };

  return ses.sendEmail(params).promise();
};

```

需要注意的是，当 API Gateway 调用我们的函数时，它将传递一个字符串给事件主体（event body）。这就是为什么我在 event.body 上使用`JSON.parse`，把它变成 JSON 并提取我们发件人的电子邮件、姓名和信息。然后我在邮件正文文本和主题中使用这些变量，使用字符串插值。

如果你尝试测试它，代码将返回一个错误。这是因为测试将一个 JSON 对象传递给 event.body，而我们在 JSON 上使用 JSON.parse，这在 JavaScript 中会导致错误。

遗憾的是，测试编辑器不允许我们向事件传递字符串，所以我们必须在以后从别的地方测试。

## 第 3 步：如何设置 API 网关

接下来，我们要使用的最后一项 AWS 服务是 API 网关，它将使我们的浏览器能够向我们创建的 Lambda 函数发送 HTTP 请求。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-79.png)

不用离开你的 lambda 函数页面，展开 "Function overview" 部分并点击 "Add trigger（添加触发器）"。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-80.png)

接下来，从下拉菜单中选择 `API Gateway` ，`HTTP API` 作为 API 类型，"Open(开放)" 作为安全策略，并选中 `CORS` 复选框选项。然后点击 "Add"。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-81.png)

你应该被重定向到你的函数的 "Configuration" 标签，显示你刚刚创建的新的 API 网关触发器。在那里，注意**API endpoint**。这就是接收从浏览器中表单发出数据的 URL。

## 回到 HTML

我们最后可以测试一下这个表单，看看它是否发送了邮件。

让我们修改我们的 JavaScript 来处理表单提交时的发送请求。

```js
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, message } = event.target;

 // Use your API endpoint URL you copied from the previous step
  const endpoint =
    "<https://5ntvcwwmec.execute-api.us-east-1.amazonaws.com/default/sendContactEmail>";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
 const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});

```

现在，是关键时刻：填写表格并点击提交。如果你看到成功信息，这意味着电子邮件已经发送。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-82.png)

由于我向自己的邮箱发送电子邮件，因此我快速查看我的收件箱，以查看我收到了一封来自我自己的电子邮件，其中包含我在表单中使用的详细信息！

![](https://www.freecodecamp.org/news/content/images/2021/03/image-83.png)

跟着教程，你现在拥有一个功能正常的 "Contact Us" 的表单，你可以将其插入任何网站。 而且你只会在实际使用时才需要付费。

我不知道你怎么想的，但我认为这非常棒，几乎是神奇的！而且这是一个很好的、实用的方法。这是一种在你的工作流程中使用云计算/服务的好的、实用的方法。

当然，你可以定制这个流程，在前端使用 React 或 Vue 等框架，或使用 Python 或 Go 等不同的编程语言来实现 Lambda。

## 在你离开之前

感谢你读到这里! 我写的文章是关于 JavaScript、云计算开发，以及我作为一个自学成才的开发者的个人教育和职业经历。你可以在 twitter 上关注我 [@adham\_benhawy](https://twitter.com/adham_benhawy)，我也会在 twitter 上发表相关的文章!

### 资源

- [https://aws.amazon.com/premiumsupport/knowledge\-center/lambda\-send\-email\-ses/](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/)
- [https://docs.aws.amazon.com/lambda/latest/dg/lambda\-invocation.html](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html)
- [https://docs.aws.amazon.com/lambda/latest/dg/services\-apigateway.html?icmpid=docs\_lambda\_console](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html?icmpid=docs_lambda_console)
