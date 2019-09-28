# 30 行 Python 代码实现 Twitch 主播上线实时通知
> * 原文地址：[A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://www.freecodecamp.org/news/20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal/)
> * 原文作者：Pierre
> * 译者：FENGJIAJUN
> * 校对者：

![A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

大家好 :) 今天我将开始写作一个新的文章系列，特别面向 Python 初学者。简言之，我将会尝试更多新的工具，编写尽可能少的代码，来完成一个有趣的项目。

例如，我们将要在今天学习使用 Twilio API、Twitch API、在 Heroku 上发布项目。我将会教你用 30 行代码写一个“Twitch 直播”短信通知工具，而且一个月只需要花费 12 美分。

**前提**: 你只需要懂得怎么运行 Python 程序，以及会操作基本的 git 命令行（commit & push）。如果你需要学习一下这些知识点，可以看看下面两篇文章：

[《Python 3 安装与设置指南》][1]

[《Git 最佳入门教程》][2]  from  [Adrian Hajdin][3].

**将会学到的知识:**:

-   Twitch API
-   Twilio API
-   Heroku 发布项目
-   安装 Heroku scheduler 插件

**将要构建的项目:**

要求很简单：我们想要在某个主播正在直播的时候接收到一条短信通知，我们想要知道主播何时上线以及何时退出直播，并且这个通知程序全天都在自动运行。

我们将把整个项目分成 3 个部分。首先，我们看看如何通过程序知晓一个特定主播上线了，然后看看如何接收一条主播上线的通知短信，最后我们需要让这段代码每隔 X 分钟执行一次，这样我们就不会错过喜欢的主播的动态啦。

# 主播是否正在直播？

我们可以这样了解主播是否正在直播：访问主播的 URL，看看是否有 'Live' 徽章

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-14-a--15.49.31.png)

主播直播时候的截图

这个过程涉及到网络爬虫，而且这个功能不是 20 行左右的 Python 代码能完成的。Twitch 使用了非常多的 JS 脚本代码，一个简单的 request.get() 是不足以达到我们要求的。

对于使用爬虫去爬取直播信息，我们将会借助 Chrome 浏览器抓取这个网页的内容，如截图所示。这种方式是可行的，但是代码需要 30 行以上。如果你想要了解更多，可以参考我最近的文章[网页抓取指南][4]。

除了抓取 Twitch 网页这种方式外，我们还可以使用 Twitch 的 API。有的读者可能不了解 API 这个术语，这里我们解释一下：API 是应用程序编程接口，允许网站向任何人（主要是开发者）公开网站的特性和数据。Twitch 的 API 是通过 HTTP 协议对外开放，也就是说我们可以通过一个简单的 HTTP 请求去获取到大量信息以及做许多事情。

## 获取你的 API KEY 

首先，你需要去创建一个 Twitch 的API Key。许多 API 服务需要对访问者进行身份认证，以避免有人滥用 API，或者以限制某些人访问某些功能。

请按照以下步骤获取你的 API Key:

-   创建一个Twitch账号
-   创建一个Twitch  [开发者账号][5]  \-> 右上角“通过Twitch注册”
-   登录后跳转到信息中心
-   “注册你自己的应用”
-   名称 -> 随便填一个, Oauth 重定向 URL -> http://localhost, 类别 -> 随便选一个

在屏幕底端，你可以看到你的 client-id，将它保存好，稍后会使用。

## 主播正在直播么？

我们手上有了 API key,我们现在就可以查询 Twitc h的 API 获取我们想要的信息，让我们开始用代码实现它吧。下面的代码给 Twitch 的 API 传递了正确的参数并且打印响应信息。

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

输出信息就像下面这样：

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

这个数据格式是一种易于阅读的 JSON 格式。`data` 是一个包含所有当前直播的数组对象。`type` 键表示这个直播间正在直播，此外 `type` 的值还可以为空。（比如，在报错的时候）

因此如果我们想要在 Python 里创建一个表示当前主播是否正在直播的布尔变量，我们需要去加上如下代码：

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

此时，`at_least_one_stream_active` 变量是 True 的时候表示你喜欢的主播正在直播。

让我们现在看看如何获得短信通知。

# 给我现在发一条短信！

那么为了给我们自己发送一条短信，我们将使用 Twilio API。访问[there][8] 并且创建一个账号。当需要你手机验证的时候，填入你想要在此项目中接受短信的手机号码。这样你就可以使用 Twilio 为新用户提供的 15 美元的免费信用额度。一条短信1美分，足以支撑你的机器运行一年了。

访问[console][9]，你将会看到自己的Account SID和Auth Token。请保留好它们以备后用。同时点击红色按钮"获得试用账号"，进行下一步，将试用账号也保存好以备后用。

使用 Python API 发送短信很简单，有软件包帮你一系列事情。使用 `pip install Twilio` 导入相应的包并且执行下面的代码：

```python
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
client.messages.create(
    body='Test MSG',from_=<Your Trial Number>,to=<Your Real Number>)

```

只需要这么点代码，你就可以给自己发一条通知短信了，是不是很棒？

# 整合所有代码

现在我们来整合所有代码，压缩到不到 30 行 Python 代码。

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

只留下了16行代码！

# 避免重复通知

这段代码的效果很好，但是如果这段代码在服务器上每分钟执行一次，我们喜欢的主播一开启直播，我们就会每分钟都收到一条短信。

我们需要让程序知道它已经给我们发了主播上线直播的短信通知，别再重复发短信了。

好的消息是 Twilio API 提供检索历史消息的方法，因此我们仅仅需要检索发送的历史消息中是否包含我们已经发送过的主播正在直播的消息。

如下是我们要做的伪代码：

```
if favorite_twitcher_live and last_sent_sms is not live_notification:
    send_live_notification()
if not favorite_twitcher_live and last_sent_sms is live_notification:
    send_live_is_over_notification()
```

使用这种方法，我们将会在直播开始和结束后都接收到短信。这样我们就不会收到重复信息了。- 现在完美了么？让我们继续编码吧：

```python
# reusing our Twilio client
last_messages_sent = client.messages.list(limit=1)
last_message_id = last_messages_sent[0].sid
last_message_data = client.messages(last_message_id).fetch()
last_message_content = last_message_data.body
```

现在让我们再一次将代码合起来：

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

完成了！

你现在拥有一段不到 30 行的 Python 代码，可以在你喜欢的主播上线或者离线的时候发送短信通知给你而且不会重复发送信息给你。

我们现在需要一种方法去托管代码，并且每X分钟执行一次这个程序。

# 托管代码的需求

我们将使用 Heroku 去托管、执行该代码。Heroku 是一种简便的托管 app 到 web 的方式。Heroku 的缺点是比起其他的解决方案，价格方面会昂贵一些。幸运的是，他们有一个慷慨的免费计划允许我们做我们所有想做的事。

如果你之前没有[Heroku 账户][12]，那就创建一个吧。你同时也需要 [下载并且安装Heroku客户端][13]。

现在你需要将你的 Python 脚本放到自己的文件夹内，记得加一个 `requirements.txt` 文件在里面。文件内容的开头如下：

```
requests
twilio
```

这样可以确保 Heroku 下载正确的依赖程序。

`cd` 进入到该文件夹内同时执行 `heroku create --app &lt;app name&gt;`。

如果你进入到你的[app dashboard][14] 你将会看到你的新 APP。

我们现在需要去初始化一个 git 仓库并且 push 代码到 Heroku：

```
git init
heroku git:remote -a <app name>
git add .
git commit -am 'Deploy breakthrough script'
git push heroku master
```

如今你的 app 已经传到 Heroku，但是它还不可以干任何事。由于这个小脚本无法接受 HTTP 请求，访问 `<app name>.herokuapp.com` 没法做任何事。但是这并不是一个问题。

为了让这个脚本全天候执行，我们需要使用一个简单的 Heroku 插件"Heroku Scheduler"。在你的 app 操作空间点击 "Configure Add-ons" 来安装插件。

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.40.png)

接下来在搜索框输入 Heroku Scheduler：

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.53.12.png)

点击搜索结果，并且按下 'Provision' 按钮

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.59.png)

如果你返回到你的 APP 主界面，你将会看到 Heroku Scheduler：

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.54.16.png)

点击 'Heroku Scheduler' 链接去配置一个任务，点击 'Create Job' 按钮，在这里选择 '10 minutes' 的选项，之后选择执行命令 `python &lt;name_of_your_script&gt;.py`，最终红点击 'Save job' 按钮。

虽然到目前为止我们在 Heroku 上使用的所有东西都是免费的，但是 Heroku Scheduler 将会花费 25 美元每个月。而我们的程序是要秒级执行的。因为该脚本需要每  3 秒执行一次，所以每 10 分钟运行该项目，一个月下来将会花费 12 美分。

# 建议

我希望你喜欢这个项目，并且喜欢自己动手操作的过程。我们通过这不到 30 行代码实现了很多功能。不过这个项目还不够完美，这里我有一些改善的建议：

-   发送更多的关于当前直播的信息（正在打的游戏，围观者数等）
-   当主播下线的时候，发送直播时长
-   不仅仅去发送短信，还可以发送邮件
-   同时去监控多个主播

如果你有其他好主意，欢迎留言告诉我

# 总结

我希望你喜欢上这篇文章并且通过这篇文章学到东西。我相信这样的项目是学习新工具和新概念的最好方式。最近我做了[web scraping API][15]，在做的过程中我也学到很多。

如果你喜欢这种学习方式并且你想要做更多的事情，请在评论区留言。

我有许多别的想法，并且我希望你将会喜欢上它们。如果你使用这段代码实现了别的东西，请一定分享给我啊。我相信这段代码有很多可能性。
Happy Coding.

Pierre

## 不要错过我下一篇文章：

你可以订阅我的[here][16]栏目。

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
