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

## The HTML Form

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

## The Backend Overview

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

## Step 1: How to Set Up SES

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

## Step 2: How to Set Up Lambda

Now this is the most fun part. We are going to create a function that is going to receive the form data and call SES.

The beauty of Lambda functions is that you don't have to worry about running your backend code on a server 24/7 and maintaining that server. It's *serverless*.

But that doesn't mean there are no servers involved. AWS is going to take care of that under the hood so you can only focus on writing code, not maintaining servers. Additionally, you only get billed for the number of times your function gets called and the amount of time it takes to execute, and it's [incredibly cheap](https://aws.amazon.com/lambda/pricing/)!

### Create an IAM Role and Configure it

Before we start writing our lambda function, we need to create an IAM *role* to attach it to the function and grant it permissions (referred to as policies in AWS) to invoke the SES service.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-68.png)

From your AWS console, go to the IAM service —> click on Policies in the side menu —> then click on the "Create Policy" button.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-69.png)

In the policy creation page, go to the JSON tab and paste the following permissions, then click Next.

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

In the third screen, name the policy and click the "Create Policy" button.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-70.png)

Now we create an IAM *role* which will be attached to the lambda and link it to the permissions policy which we just created.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-71.png)

From the IAM side menu, click Roles then click the "Create role" button.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-72.png)

In the role creation screen, make sure the type selected is "AWS service" and select the Lambda case then click on the "Next:Permissions" button.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-73.png)

On the next screen, search for the policy we created earlier by its name and select it, then click next.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-74.png)

On the review screen, give the role a name you can remember then click on "Create role".

Now we can create a new lambda function. Go to the Lambda service dashboard and click the "Create Function" button.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-75.png)

In the function creation screen, name your function, select the "Author from scratch" option, and choose Node.js as the runtime.

Under "Change default execution role" choose the "Use an existing role" option then choose the name of the role you created in the previous step from the "Existing role" drop down.

Finally, click the "Create function" button to create the function.

### Write the Code and Test it

![](https://www.freecodecamp.org/news/content/images/2021/03/image-76.png)

In the editor, open the index.js file (this is the file that will be executed when your lambda is called), and replace its content with the following code:

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

Notice that on line 2 we are using the AWS SDK and creating an SES instance. The reason I chose **us\-east\-1** as the region is because that's *where I registered & verified my email*. Be sure to replace the email and use the AWS region where you registered your email.

Now to test this function, click on the "Deploy" button. Then click on the Test button —> Configure test event which should open up a test configuration dialogue where you can create a new test event.

In the test event body editor, enter the following JSON which mimics what will eventually come from our browser request. Then click create.

```json
{
  "body": {
        "senderName": "Namo",
        "senderEmail": "namo@trains.com",
        "message": "I love trains!"
    }
}

```

Now clicking the test button will run the test we just created. It should open a new tab in the editor to show us the logs created from running the function, which should look like this:

![](https://www.freecodecamp.org/news/content/images/2021/03/image-77.png)

Notice the event object we logged out shows here under Function logs with the body data we used in the test event.

This test should have sent an email to my inbox as well – let's see if that happened.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-78.png)

Yep, just as expected. And that happened almost immediately after running the test.

Now let's modify our function code to get a more meaningful message from the test data.

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

It's important to note that when API Gateway calls our function it will pass a string to the event body. This is why I use `JSON.parse` on event.body, to turn it into JSON and extract our sender's email, name, and message. Then I use those variables in the email body text and subject using string interpolation.

If you try the test it, the code will return an error. This is because the test is passing a JSON object to event.body and we are using JSON.parse on JSON, which causes an error in JavaScript.

Sadly, the test editor doesn't allow us to pass strings to the event, so we'll have to test that later from somewhere else.

## Step 3: How to Set Up API Gateway

Next, the last AWS service we are going to use is API Gateway, which will enable our browser to send HTTP requests to the Lambda function we created.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-79.png)

Without leaving your lambda function page, expand the "Function overview" section and click on "Add trigger".

![](https://www.freecodecamp.org/news/content/images/2021/03/image-80.png)

Next, choose API Gateway from the dropdown, HTTP API as the API type, "Open" as the security mechanism, and check the CORS checkbox option. Then click "Add".

![](https://www.freecodecamp.org/news/content/images/2021/03/image-81.png)

You should be redirected to the "Configuration" tab of your function, showing you the new API Gateway trigger you just created. From there, note the **API endpoint**. This is the URL we are going to be calling from our browser with the form data.

## Back to the HTML

We can finally test the form to see if it sends emails or not.

Let's modify our JavaScript to handle sending the request when the form is submitted.

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

Now, the moment of truth: fill in the form and click submit. If you see the success message, that means the email was sent.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-82.png)

Since I own the email the message was sent to, I take a quick look at my inbox to see that I received an email from myself with the details I used in the form!

![](https://www.freecodecamp.org/news/content/images/2021/03/image-83.png)

If you've followed along, you now have a functioning "Contact Us" form that you can plug into any website. And you'll only get billed for when it is actually used.

I don't know about you, but I think this is pretty awesome and almost magical! And it's a nice, practical way to use cloud computing/services in your workflow.

Of course you can customize this flow in terms of using a framework on the frontend like React or Vue or a different programming language for the Lambda like Python or Go.

## Before you go

Thank you for reading this far! I write posts about JavaScript, cloud development, and my personal educational & professional experiences as a self\-taught developer. So feel free to follow me on twitter [@adham\_benhawy](https://twitter.com/adham_benhawy) where I tweet about them too!

### Resources

- [https://aws.amazon.com/premiumsupport/knowledge\-center/lambda\-send\-email\-ses/](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/)
- [https://docs.aws.amazon.com/lambda/latest/dg/lambda\-invocation.html](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html)
- [https://docs.aws.amazon.com/lambda/latest/dg/services\-apigateway.html?icmpid=docs\_lambda\_console](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html?icmpid=docs_lambda_console)
