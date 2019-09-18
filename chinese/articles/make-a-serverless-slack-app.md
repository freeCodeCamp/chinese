> * 原文地址：[Learn Serverless by Building your own Slack App](https://www.freecodecamp.org/news/make-a-serverless-slack-app/)
> * 原文作者：Lekha Surasani
> * 译者：[Zhicheng](https://github.com/ZhichengChen)
> * 校对者：

![Learn Serverless by Building your own Slack App](https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/serverless-1.jpg)

Serverless architecture is the industry's latest buzzword and many of the largest tech companies have begun to embrace it.

In this article, we'll learn what it is and why you should use it. We'll also set up AWS, create our serverless app, and create a slack app!

---

## What is Serverless?

Serverless is a cloud computing paradigm in which the developer no longer has to worry about maintaining a server – they just focus on the code.

Cloud providers, such as AWS or Azure, are now responsible for executing code and maintaining servers by dynamically allocating their resources. A variety of events can trigger code execution, including cron jobs, http requests, or database events.

The code that developers send to the cloud is usually just a function so, many times, serverless architecture is implemented using Functions-as-a-Service, or FaaS. The major cloud providers provide frameworks for FaaS, such as AWS Lambda and Azure Functions.

## Why Serverless?

Not only does serverless allow developers to just focus on code, but it has many other benefits as well.

Since cloud providers are now responsible for executing code and dynamically allocate resources based on event triggers, you typically only pay per request, or when your code is being executed.

Additionally, since cloud providers are handling your servers, you don't have to worry about scaling up – the cloud provider will handle it. This makes serverless apps lower cost, easier to maintain, and easier to scale.

---

## Setting up AWS Lambda

For this tutorial, I will be using AWS Lambda, so first, we'll create an  [AWS account][1]. I find AWS's UI hard to understand and difficult to navigate, so I will be adding screenshots for each step.

Once you log in, you should see this:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-17.png)

Main screen

Next, we'll set up an IAM user. An  [IAM][2]  (Identity and Access Management) user interacts with AWS and its resources on your behalf. This allows you to create different IAM users with different permissions and purposes, without compromising the security of your root user account.

Click on the "services" tab at the top of the page, and type "IAM" into the bar:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-27.png)

Click on the first result, and you'll see, on the left-hand sidebar, that you're at the dashboard. Click on the "Users" option to get to create our new IAM user.

![](https://www.freecodecamp.org/news/content/images/2019/08/image-28.png)

Click on the "Add user" button to create a new user. Fill in the details as follows:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-29.png)

You can name your user anything you'd like, but I went with  `serverless-admin`. Be sure that your user has "Programmatic access" to AWS,  **not**  "AWS Management Console Access". You'd use the latter for teammates, or other  _humans_  who need access to AWS. We just need this user to interact with AWS Lambda, so we can just give them programmatic access.

For permissions, I've chosen to attach existing policies since I don't have any groups, and I don't have any existing users that I want to copy permissions for. In this example, I will create the user with Administrator access since it's just for a personal project; however, if you were to use a serverless app in an actual production environment, your IAM user should be scoped to only access Lambda-necessary parts of AWS. (Instructions can be found  [here][3]).

![](https://www.freecodecamp.org/news/content/images/2019/08/image-58.png)

I didn't add any tags and created the user. It's vital to save the information given to you on the next screen - the Access ID and Secret Access Key.

![](https://www.freecodecamp.org/news/content/images/2019/08/Screenshot_2019-08-04-IAM-Management-Console.png)

Don't leave this screen without copying down both! You won't be able to see the Secret access key again after this screen.

Finally, we'll add these credentials to command line AWS. Use this  [guide][4]  to get aws cli setup.

Make sure you have it installed by running  `aws --version`. You should see something like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-04-at-2.02.27-PM.png)

Then run  `aws configure`  and fill in the prompts:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-04-at-5.42.53-PM.png)

I have the default region as  `us-east-2`  already set up, but you can use  [this][5]  to determine what your region is.

To make sure that you have your credentials set up correctly, you can run  `cat ~/.aws/credentials`  in your terminal.

If you want to configure a profile other than your default, you can run the command as follows:  `aws configure --profile [profile name]`.

If you had trouble following the steps, you can also check out  [AWS's documentation][6].

---

## Set up serverless

Go to your terminal and install the  `serverless`  package globally using  `npm`:  `npm i -g serverless`. ([More info on serverless here][7])  
and your terminal should look something like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-04-at-1.55.12-PM.png)

Next, navigate to the directory where you want to create the app, then run  `serverless`and follow the prompts:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-04-at-5.55.03-PM.png)

For this application, we'll be using Node.js. You can name your app anything you want, but I've called mine  `exampleSlackApp`.

Open your favorite code editor to the contents in  `exampleSlackApp`  (or whatever you've called your application).

First, we'll take a look at  `serverless.yml`. You'll see there's a lot of commented code here describing the different options you can use in the file. Definitely give it a read, but I've deleted it down to just:

```
service: exampleslackapp

provider:
  name: aws
  runtime: nodejs10.x
  region: us-east-2

```

serverless.yml

I've included  `region`  since the default is  `us-east-1`  but my aws profile is configured for  `us-east-2`.

Let's deploy what we already have by running  `serverless deploy`  in the directory of the app that  `serverless`  just created for us. The output should look something like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-05-at-12.07.10-AM.png)

And if you run  `serverless invoke -f hello`  in your terminal, it'll run the app, and you should see:

```
{
    "statusCode": 200,
    "body": "{\n  "message": "Go Serverless v1.0! Your function executed successfully!",\n  "input": {}\n}"
}
```

For further proof that our slack app is live, you can head back to AWS console. Go to the services dropdown, search for "Lambda", and click on the first option ("Run code without thinking about servers").

![](https://www.freecodecamp.org/news/content/images/2019/08/image-32.png)

And here's your app!

![](https://www.freecodecamp.org/news/content/images/2019/08/image-33.png)

Next, we'll explore actually using serverless by building our slack app. Our slack app will post a random  [Ron Swanson][8]  quote to slack using a  [slash command][9]  like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-07-at-10.23.40-PM.png)

The following steps don't necessarily have to be done in the order that I've done them, so if you want to skip around, feel free!

---

## Adding the API to our code

I'm using  [this API][10]  to generate Ron Swanson quotes since the docs are fairly simple (and of course, it's free). To see how requests are make and what gets returned, you can just put this URL in your browser:

[`https://ron-swanson-quotes.herokuapp.com/v2/quotes`][11]

You should see something like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-59.png)

So, we can take our initial function and modify it as such:

```
module.exports.hello = (event) => {
  getRon();
};
```

Note: I've removed the async portion

and  `getRon`  looks like:

```
function getRon() {
  request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
  })
}
```

Now, let's check if it works. To test this code locally, in your terminal:  `serverless invoke local -f hello`. Your output should look something like:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-07-at-9.41.53-PM.png)

Spoiler: There was a wrong way to consume alcohol

`serverless invoke -f hello`  would run the code that you've deployed, as we saw in previous sections.  `serverless invoke local -f hello`, however, runs your local code, so it's useful for testing. Go ahead and deploy using  `serverless deploy`!

---

## Create your Slack App

To create your slack app, follow this  [link][13]. It'll make you sign into a slack workspace first, so be sure you're a part of one that you can add this app to. I've created a testing one for my purposes. You'll be prompted with this modal. You can fill in whatever you want, but here's what I have as an example:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-61.png)

From there, you'll be taken to the homepage for your app. You should definitely explore these pages and the options. For example, I've added the following customization to my app:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-62.png)

Display information can be found from the "Basic Information" tab on the app

Next, we need to add some permissions to the app:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screenshot_2019-08-07-Slack-API-Applications-lekha_test-Slack.png)

To get an OAuth Access Token, you have to add some scope and permissions, which you can do by scrolling down:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-64.png)

I've added "Modify your public channels" so that the bot could write to a channel, "Send messages as Ron Swanson" so when the message gets posted, it looks like a user called Ron Swanson is posting the message, and slash commands so the user can "request" a quote as shown in the screenshot at the beginning of the article. After you save the changes, you should be able to scroll back up to OAuths & Permissions to see:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-65.png)

Click the button to Install App to Workspace, and you'll have an OAuth Access Token! We'll come back to this in a second, so either copy it down or remember it's in this spot.

---

## Connect Code and Slack App

In AWS Lambda, find your slack app function. Your Function Code section should show our updated code with the call to our Ron Swanson API (if it does not, go back to your terminal and run  `serverless deploy`).

Scroll below that to the section that says "[Environment Variables][14]", and put your Slack OAuth Access Token here (you can name the key whatever you'd like):

![](https://www.freecodecamp.org/news/content/images/2019/08/Screenshot_2019-08-07-Lambda-Management-Console.png)

Let's go back to our code and add Slack into our function. At the top of our file, we can declare a  `const`  with our new OAuth Token:

`const SLACK_OAUTH_TOKEN = process.env.OAUTH_TOKEN`.

`process.env`  just grabs our environment variables ([additional reading][15]). Next, let's take a look at the  [Slack API][16]  to figure out how to post a message to a channel.

![](https://www.freecodecamp.org/news/content/images/2019/08/image-67.png)

![](https://www.freecodecamp.org/news/content/images/2019/08/image-76.png)

The two pictures above I've taken from the API are the most relevant to us. So, to make this API request, I'll use  `request`  by passing in an object called  `options`:

```
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
    form: {
      token: SLACK_OAUTH_TOKEN,
      channel: 'general', // hard coding for now
      text: 'I am here',
    }
  }
```

and we can make the request:

```
  request(options, function(err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
  })
```

Finally, I'll wrap the whole thing in a function:

```
function postRon(quote) {
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
    form: {
      token: SLACK_OAUTH_TOKEN,
      channel: 'general',
      text: quote,
    }
  }

```

and we can call it from  `getRon`  like this:

```
function getRon() {
  request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
    postRon(body.substring(2, body.length - 2)) // here for parsing, remove if you want to see how/why I did it
  })
}
```

So our code should all in all look like this:

```
'use strict';
let request = require('request');
const SLACK_OAUTH_TOKEN = process.env.OAUTH_TOKEN
module.exports.hello = (event) => {
  getRon();
};
function getRon() {
  request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
    postRon(body.substring(2, body.length - 2))
  })
}
function postRon(quote) {
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
    form: {
      token: SLACK_OAUTH_TOKEN,
      channel: 'general',
      text: quote,
    }
  }

```

Now let's test! Unfortunately, our environment variable in AWS Lambda isn't available to us when we run  `serverless invoke local -f hello`. There are a few ways you can approach this, but for our purposes, you can just replace the value for  `SLACK_OAUTH_TOKEN`  with your actual OAuth Token (make sure it's a string). But be sure you switch it back before you push it up to version control!

Run  `serverless invoke local -f hello`, and hopefully you should see a message like this in your #general channel:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-69.png)

_Please note that I put down my channel name as 'general' since it's my test workspace; however, if you're in an actual workspace, you should create a separate channel for testing apps, and put the message there instead while you're testing._

And in your terminal, you should see something like:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screen-Shot-2019-08-07-at-10.48.38-PM.png)

If that works, go ahead and deploy it using  `serverless deploy`. If it does not, the best way to debug this is to adjust code and run  `serverless invoke local -f hello`.

---

## Adding slash command

The last and final part is adding a slash command! Go back to your function's home page in AWS Lambda and look for the button that says "Add trigger":

![](https://www.freecodecamp.org/news/content/images/2019/08/image-70.png)

We're going to add an API Gateway (as I already have).

Click on the button to get to the "Add trigger" page, and select "API Gateway" from the list:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-71.png)

I've filled in the information based on defaults mostly:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-72.png)

I've also left this API open for use – however, if you're using this in production, you should discuss what standard protocol would be with your team. "Add" the API, and you should receive an API endpoint. Hold on to this, because we'll need it for the next step.

Let's switch back over to our slack app and add a slash command:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-73.png)

Click on "Create New Command" and it should pop up with a new window to create a command. Here's how I filled mine out:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screenshot_2019-08-07-Slack-API-Applications-lekha_test-Slack-1-.png)

You can enter anything you want for "command" and "short description" but for "request URL", you should put your API endpoint.

Finally, we'll go back to our code to make some final adjustments. If you try to use the slash command, you should receive some kind of error back – this is because slack expects a response and AWS expects you to give a response when the endpoint is hit. So, we'll change our function to allow a  `callback`  ([for reference][22]):

```
module.exports.hello = (event,context,callback) => {
  getRon(callback);
};
```

and then we'll change  `getRon`  to do something with the  `callback`:

```
function getRon(callback) {
  request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
    callback(null, SUCCESS_RESPONSE)
    postRon(body.substring(2, body.length - 2))
  })
}
```

where  `SUCCESS_RESPONSE`  is at the top of the file:

```
const SUCCESS_RESPONSE = {
  statusCode: 200,
  body: null
}
```

You can put the callback here or in  `postRon`  – it just depends on what your purposes are with the callback.

Our code at this point now looks something like:

```
'use strict';
let request = require('request');
const SLACK_OAUTH_TOKEN = OAUTH_TOKEN
const SUCCESS_RESPONSE = {
  statusCode: 200,
  body: null
}
module.exports.hello = (event,context,callback) => {
  getRon(callback);
};
function getRon(callback) {
  request('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (err, resp, body) {
    console.log('error:', err)
    console.log('statusCode:', resp && resp.statusCode)
    console.log('body', body)
    callback(null, SUCCESS_RESPONSE)
    postRon(body.substring(2, body.length - 2))
  })
}
function postRon(quote) {
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
    form: {
      token: SLACK_OAUTH_TOKEN,
      channel: 'general',
      text: quote,
    }
  }

```

You should be able to use the  `/ron`  command in slack now and get a Ron Swanson quote back. If you don't, you can use Cloudwatch logs to see what went wrong:

![](https://www.freecodecamp.org/news/content/images/2019/08/Screenshot_2019-08-07-Lambda-Management-Console-1-.png)

The way our code works now, we've hardcoded in the channel name. But, what we actually want is for the quote to get posted in the message where you used  `/ron`.

So, we can now use the  `event`  portion of our function.

```
module.exports.hello = (event,context,callback) => {
  console.log(event)
  getRon(callback);
};
```

Use  `/ron`  to run the function, and then check your Cloudwatch logs to see what gets logged to the console (you may need to refresh). Check on the most recent logs and you should see something like this:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-74.png)

The first item in this list (where it says "resource", "path", etc.) is the event, so if you expand that, you'll see a long list of things, but what we're looking for is 'body' all the way down at the bottom:

![](https://www.freecodecamp.org/news/content/images/2019/08/image-75.png)

where's waldo: spot the param edition

Body is a string with some relevant information in it, one of them being "channel\_id". We can use channel\_id (or channel\_name) and pass it into the function that creates our slack message. For your convenience, I've already parsed this string:  `event.body.split("&")[3].split("=")[1]`  should give you the channel\_id. I hardcoded in which entry (3) the channel\_id was for simplicity.

Now, we can alter our code to save that string as a variable:

`let channel = 'general'`  (as our fallback)

```
module.exports.hello = (event,context,callback) => {
  console.log(event)
  channel = event.body.split("&")[3].split("=")[1]
  console.log(context)
  getGoat(callback);
};
```

and in  `postRon`:

```
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    headers: {
      'Accept': 'application/json',
    },
    method: 'POST',
    form: {
      token: SLACK_OAUTH_TOKEN,
      channel: channel,
      text: quote,
    }
  }
```

options var in postRon

Finally, if you use a slack command in any channel in your workspace, you should be able to see a Ron Swanson quote pop up! If not, as I mentioned before, the most common tools I use to debug serverless apps are  `serverless invoke local -f <function name>`and Cloudwatch logs.

---

Hopefully you were successfully able to create a functioning Slack application! I've included resources and background reading dispersed throughout the article and I'm happy to answer any questions you may have!

_Final Repo with code:_ [https://github.com/lsurasani/ron-swanson-slack-app/][27]

[1]: https://aws.amazon.com/
[2]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
[3]: https://serverless.com/blog/abcs-of-iam-permissions/
[4]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
[5]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html
[6]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
[7]: https://serverless.com/
[8]: https://en.wikipedia.org/wiki/Ron_Swanson
[9]: https://api.slack.com/slash-commands
[10]: https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api?ref=public-apis
[11]: https://ron-swanson-quotes.herokuapp.com/v2/quotes
[12]: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
[13]: https://api.slack.com/apps?new_app=1
[14]: https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html
[15]: https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
[16]: https://api.slack.com/methods/chat.postMessage
[17]: https://slack.com/api/chat.postMessage'
[18]: https://slack.com/api/chat.postMessage'
[19]: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
[20]: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
[21]: https://slack.com/api/chat.postMessage'
[22]: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
[23]: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
[24]: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
[25]: https://slack.com/api/chat.postMessage'
[26]: https://slack.com/api/chat.postMessage'
[27]: https://github.com/lsurasani/ron-swanson-slack-app/
