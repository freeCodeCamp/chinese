> * 原文地址：[A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://www.freecodecamp.org/news/20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal/)
> * 原文作者：Pierre
> * 译者：FENGJIAJUN
> * 校对者：

![A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

大家好 :) 今天我将开启一个新的针对Python初学者系列的文章。简言之，我会使用尽可能少的代码去完成一个有趣的项目，并且会试使用更多新的工具。

例如，我们将要在今天学习使用Twilio API、Twitch API，以及如何在Heroku上发布项目。我将会教会你如何在每月只花费10美分的情况下，只是用30行代码完成你自己的“Twitch直播” 短信通知。

**前提**: 你只需要了解基本的git命令行（commit & push）以及在你的机器上执行Python程序。如果你需要这些知识点的帮助，我可以建议你看如下两篇文章:

[Python 3 Installation & Setup Guide][1]

[The Ultimate Git Command Tutorial for Beginners][2]  from  [Adrian Hajdin][3].

**你将会学到的东西**:

-   Twitch API
-   Twilio API
-   在Heroku发布项目
-   在Heroku上启动调度程序

**你将要构建的东西:**

要求很简单：我们想要在一个特定的主播正在直播的时候接收到一条消息，想知道此人何时上线以及何时退出直播，想要这个程序全天都在运行。

我们将把项目分成3个部分。首先，我们将会了解到如何以编程的方式获悉一个特定的主播上线了。之后我们会了解如何去接收到一条上线短信。最终我们将学习到如何让这段代码执行X分钟，因此我们将不会再错过我们喜欢的主播的其他生活时刻。

# 这个主播是否正在直播？

如何知道一个主播正在直播，我们可以有两种方式：第一种方式，到直播间里去查找是否有“Live”徽章

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-14-a--15.49.31.png)

主播直播时候的截图

这个过程涉及到网络爬虫，想要使用Python程序在少于20行代码去完成这个功能是不可行的。Twitch程序跑着许多JS脚本代码，一个简单的request.get()是不足以达到要求的

对于上述这种情况，使用爬虫去爬取信息，我们想要获得到截图所示信息将会使用Chrome浏览器抓取这个网页。这种方式是可行的，但是这将会产生超过30行代码。如果你想要了解更多相关，别迟疑，可以参考我最近的  [网页抓取指南][4].

除了抓取Twitch网页外，我们将使用Twitch的API。对于不熟悉API词语的人做出解释：API是应用程序编程接口，允许网站向任何人（主要是针对开发人员）公开他们的功能和数据。对于Twitch的API而言，主要通过HTTP请求公开，我们可以仅仅发起一个HTTP请求去获取到许多的信息和做许多的事情

## 获得你自己的API KEY 

为此，你需要去创建一个Twitch的API Key。许多API服务需要对API的访问者进行身份认证，以确保某些人不会频繁的发起访问或者限制某些人访问某些的功能。

请按照以下步骤获取你的API Key:

-   创建一个Twitch账号
-   创建一个Twitch  [开发者账号][5]  \-> 右上角"通过Twitch注册"
-   登录后跳转到信息中心
-   "注册你自己的应用"
-   名称 -> 无所谓, Oauth 重定向 URL -> http://localhost, 类别 -> 无所谓

你现在就能看到在你屏幕底端，你的client-id。请保留好client-id以备后面的使用。

## Is that Twitcher streaming now?

With your API key in hand, we can now query the Twitch API to have the information we want, so let's begin to code. The following snippet just consumes the Twitch API with the correct parameters and prints the response.

```python
# requests is the go to package in python to make http request
# https://2.python-requests.org/en/master/
import requests

# This is one of the route where Twich expose data, 
# They have many more: https://dev.twitch.tv/docs
endpoint = "https://api.twitch.tv/helix/streams?"
# In order to authenticate we need to pass our api key through header
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
# The previously set endpoint needs some parameter, here, the Twitcher we want to follow
# Disclaimer, I don't even know who this is, but he was the first one on Twich to have a live stream so I could have nice examples
params = {"user_login": "Solary"}

```

The output should look like this:

```json
{
   'data':[
      {
         'id':'35289543872',
         'user_id':'174955366',
         'user_name':'Solary',
         'game_id':'21779',
         'type':'live',
         'title':"Wakz duoQ w/ Tioo - GM 400LP - On récupère le chall après les -250LP d'inactivité !",
         'viewer_count':4073,
         'started_at':'2019-08-14T07:01:59Z',
         'language':'fr',
         'thumbnail_url':'https://static-cdn.jtvnw.net/previews-ttv/live_user_solary-{width}x{height}.jpg',
         'tag_ids':[
            '6f655045-9989-4ef7-8f85-1edcec42d648'
         ]
      }
   ],
   'pagination':{
      'cursor':'eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MX19'
   }
}
```

This data format is called JSON and is easily readable. The  `data`  object is an array that contains all the currently active streams. The key  `type`  ensures that the stream is currently  `live`. This key will be empty otherwise (in case of an error, for example).

So if we want to create a boolean variable in Python that stores whether the current user is streaming, all we have to append to our code is:

```python
json_response = response.json()
# We get only streams
streams = json_response.get('data', [])
# We create a small function, (a lambda), that tests if a stream is live or not
is_active = lambda stream: stream.get('type') == 'live'
# We filter our array of streams with this function so we only keep streams that are active
streams_active = filter(is_active, streams)
# any returns True if streams_active has at least one element, else False
at_least_one_stream_active = any(streams_active)

```

At this point,  `at_least_one_stream_active`  is True when your favourite Twitcher is live.

Let's now see how to get notified by SMS.

# Send me a text, NOW!

So to send a text to ourselves, we will use the Twilio API. Just go over  [there][8]  and create an account. When asked to confirm your phone number, please use the phone number you want to use in this project. This way you'll be able to use the $15 of free credit Twilio offers to new users. At around 1 cent a text, it should be enough for your bot to run for one year.

If you go on the  [console][9], you'll see your  `Account SID`  and your  `Auth Token`  , save them for later. Also click on the big red button "Get My Trial Number", follow the step, and save this one for later too.

Sending a text with the Twilio Python API is very easy, as they provide a package that does the annoying stuff for you. Install the package with  `pip install Twilio`  and just do:

```python
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
client.messages.create(
    body='Test MSG',from_=<Your Trial Number>,to=<Your Real Number>)

```

And that is all you need to send yourself a text, amazing right?

# Putting everything together

We will now put everything together, and shorten the code a bit so we manage to say under 30 lines of Python code.

```python
import requests
from twilio.rest import Client
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
if at_least_one_stream_active:
    client = Client(<Your Account SID>, <Your Auth Token>)
    client.messages.create(body='LIVE !!!',from_=<Your Trial Number>,to=<Your Real Number>)
```

Still have 16 lines left!

# Avoiding double notifications

This snippet works great, but should that snippet run every minute on a server, as soon as our favorite Twitcher goes live we will receive an SMS every minute.

We need a way to store the fact that we were already notified that our Twitcher is live and that we don't need to be notified anymore.

The good thing with the Twilio API is that it offers a way to retrieve our message history, so we just have to retrieve the last SMS we sent to see if we already sent a text notifying us that the twitcher is live.

Here what we are going do to in pseudocode:

```
if favorite_twitcher_live and last_sent_sms is not live_notification:
    send_live_notification()
if not favorite_twitcher_live and last_sent_sms is live_notification:
    send_live_is_over_notification()
```

This way we will receive a text as soon as the stream starts, as well as when it is over. This way we won't get spammed - perfect right? Let's code it:

```python
# reusing our Twilio client
last_messages_sent = client.messages.list(limit=1)
last_message_id = last_messages_sent[0].sid
last_message_data = client.messages(last_message_id).fetch()
last_message_content = last_message_data.body
```

Let's now put everything together again:

```py
import requests
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
last_messages_sent = client.messages.list(limit=1)
if last_messages_sent:
    last_message_id = last_messages_sent[0].sid
    last_message_data = client.messages(last_message_id).fetch()
    last_message_content = last_message_data.body
    online_notified = "LIVE" in last_message_content
    offline_notified = not online_notified
else:
    online_notified, offline_notified = False, False

```

And voilà!

You now have a snippet of code, in less than 30 lines of Python, that will send you a text a soon as your favourite Twitcher goes Online / Offline and without spamming you.

We just now need a way to host and run this snippet every X minutes.

# The quest for a host

To host and run this snippet we will use Heroku. Heroku is honestly one of the easiest ways to host an app on the web. The downside is that it is really expensive compared to other solutions out there. Fortunately for us, they have a generous free plan that will allow us to do what we want for almost nothing.

If you don't already, you need to create a  [Heroku account][12]. You also need to  [download and install the Heroku client][13].

You now have to move your Python script to its own folder, don't forget to add a  `requirements.txt`  file in it. The content of the latter begins:

```
requests
twilio
```

This is to ensure that Heroku downloads the correct dependencies.

`cd`  into this folder and just do a `heroku create --app &lt;app name&gt;`.

If you go on your  [app dashboard][14]  you'll see your new app.

We now need to initialize a git repo and push the code on Heroku:

```
git init
heroku git:remote -a <app name>
git add .
git commit -am 'Deploy breakthrough script'
git push heroku master
```

Your app is now on Heroku, but it is not doing anything. Since this little script can't accept HTTP requests, going to  `<app name>.herokuapp.com`  won't do anything. But that should not be a problem.

To have this script running 24/7 we need to use a simple Heroku add-on call "Heroku Scheduler". To install this add-on, click on the "Configure Add-ons" button on your app dashboard.

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.40.png)

Then, on the search bar, look for Heroku Scheduler:

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.53.12.png)

Click on the result, and click on "Provision"

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.59.png)

If you go back to your App dashboard, you'll see the add-on:

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.54.16.png)

Click on the "Heroku Scheduler" link to configure a job. Then click on "Create Job". Here select "10 minutes", and for run command select `python &lt;name_of_your_script&gt;.py`. Click on "Save job".

While everything we used so far on Heroku is free, the Heroku Scheduler will run the job on the $25/month instance, but prorated to the second. Since this script approximately takes 3 seconds to run, for this script to run every 10 minutes you should just have to spend 12 cents a month.

# Ideas for improvements

I hope you liked this project and that you had fun putting it into place. In less than 30 lines of code, we did a lot, but this whole thing is far from perfect. Here are a few ideas to improve it:

-   Send yourself more information about the current streaming (game played, number of viewers ...)
-   Send yourself the duration of the last stream once the twitcher goes offline
-   Don't send you a text, but rather an email
-   Monitor multiple twitchers at the same time

Do not hesitate to tell me in the comments if you have more ideas.

# Conclusion

I hope that you liked this post and that you learned things reading it. I truly believe that this kind of project is one of the best ways to learn new tools and concepts, I recently launched a  [web scraping API][15]  where I learned a lot while making it.

Please tell me in the comments if you liked this format and if you want to do more.

I have many other ideas, and I hope you will like them. Do not hesitate to share what other things you build with this snippet, possibilities are endless.

Happy Coding.

Pierre

## Don't want to miss my next post:

You can subscribe  [here][16] to my newsletter.

[1]: https://realpython.com/installing-python/
[2]: https://www.freecodecamp.org/news/git-commands/
[3]: https://www.freecodecamp.org/news/author/adrianhajdin/
[4]: https://www.daolf.com/posts/avoiding-being-blocked-while-scraping-ultimate-guide/
[5]: https://dev.twitch.tv/
[6]: https://dev.twitch.tv/docs
[7]: https://api.twitch.tv/helix/streams?%22
[8]: https://www.twilio.com/try-twilio
[9]: https://www.twilio.com/console
[10]: https://api.twitch.tv/helix/streams?%22
[11]: https://api.twitch.tv/helix/streams?%22
[12]: https://www.heroku.com/
[13]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
[14]: https://dashboard.heroku.com/apps
[15]: https://www.scrapingninja.co/
[16]: https://www.daolf.com/stay_updated/
