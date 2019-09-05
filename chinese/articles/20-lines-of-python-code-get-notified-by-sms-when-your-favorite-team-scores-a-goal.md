> * 原文地址：[A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://www.freecodecamp.org/news/20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal/)
> * 原文作者：Pierre
> * 译者：FENGJIAJUN
> * 校对者：

![A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

大家好 :) 今天我将开启一个新的针对Python初学者系列文章。简言之，我将会尝试更多新的工具、编写尽可能少的代码完成一个有趣的项目。

例如，我们将要在今天学习使用Twilio API、Twitch API、在Heroku上发布项目。我将会教会你如何在每月只花费10美分的情况下，用30行代码实现你的“Twitch直播”短信通知。

**前提**: 你至少需要具备基本的git命令行（commit & push）以及在机器上执行Python程序的能力。果你需要这些知识点的帮助，我想你推荐下面两篇文章：

[Python 3 Installation & Setup Guide][1]

[The Ultimate Git Command Tutorial for Beginners][2]  from  [Adrian Hajdin][3].

**将会学到的知识:**:

-   Twitch API
-   Twilio API
-   Heroku发布项目
-   Heroku启动调度程序

**将要构建的项目:**

要求很简单：我们想要在某个主播正在直播的时候接收到一条短信通知，我们想要知道主播何时上线以及何时退出直播，并且这个通知程序全天都在自动运行。

我们将把整个项目分成3个部分。首先，我们将会着手在代码层面获悉一个特定主播的上线。之后学习如何去接收到一条主播上线的短信。最终来学习如何让这段代码执行X分钟，因此我们将不会再错过我们喜欢的主播的直播时刻。

# 主播是否正在直播？

为了知道一个主播是否正在直播，我们可以有两种方式实现：第一种方式，到直播间里去查找是否有“Live”徽章。

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-14-a--15.49.31.png)

主播直播时候的截图

这个过程涉及到网络爬虫，而且这个功能不是20行左右的Python代码能完成的。Twitch使用了非常多的JS脚本代码，一个简单的request.get()是不足以达到我们要求的。

对于使用爬虫去爬取直播信息，我们将会借助Chrome浏览器抓取正如你在截图所看到的这个网页内容。这种方式是可行的，但是这将会产生超过30行以上代码。如果你想要了解更多相关，别迟疑，可以参考我最近的网页抓取指南文章[网页抓取指南][4]。

除了抓取Twitch网页这种方式外，我们还可以使用Twitch的API。对于不熟悉API这个术语的人做出解释：API是应用程序编程接口，允许网站向任何人（主要是针对开发人员）公开他们的功能和数据。Twitch的API主要通过HTTP协议对外开放，这说明我们可以用一个HTTP请求去获取到许多的信息，和做许多的事情。

## 获取你的API KEY 

首先，你需要去创建一个Twitch的API Key。许多API服务需要对访问者进行身份认证，以确保不会有人频繁的发起访问或者限制某些人访问某些的功能。

请按照以下步骤获取你的API Key:

-   创建一个Twitch账号
-   创建一个Twitch  [开发者账号][5]  \-> 右上角“通过Twitch注册”
-   登录后跳转到信息中心
-   “注册你自己的应用”
-   名称 -> 无所谓, Oauth 重定向 URL -> http://localhost, 类别 -> 无所谓

在屏幕底端，你现在就能看到你的client-id。请保留好client-id以备后面的使用。

## 主播正在直播么？

我们手上有了API key,我们现在就可以查询Twitch的API获取我们想要的信息，让我们开始用代码实现它吧。下面的代码给Twitch的API传递了正确的参数并且打印响应信息。

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

这个数据格式是一种易于阅读的JSON格式。`data`是一个包含所有当前直播的数组对象。`type`键表示这个直播间正在直播，此外`type`的值还可以为空。（比如，在报错的时候）

因此如果我们想要在Python里创建一个表示当前主播是否正在直播的布尔变量，我们需要去加上如下代码：

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

此时，`at_least_one_stream_active`变量是True的时候表示你喜欢的主播正在直播。

让我们现在看看如何获得短信通知。

# 给我现在发一条短信！

那么为了给我们自己发送一条短信，我们将使用Twilio API。访问[there][8] 并且创建一个账号。当需要你手机验证的时候，填入你想要在此项目中接受短信的手机号码。这样你就可以使用Twilio为新用户提供的15美元的免费信用额度。一条短信1美分，足以支撑你的机器运行一年了。

当你你访问[console][9]，你将会看到自己的`Account SID`和`Auth Token`。请保留好他们以备后用。同时点击红色按钮"Get My Trial Number"，进行下一步，将trial number也保存以备后用。

使用Python API发送短信是一件很容易的事，他们提供软件包帮你去完成发送短信的事。使用`pip install Twilio`导入相应的包并且执行下面的代码：

```python
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
client.messages.create(
    body='Test MSG',from_=<Your Trial Number>,to=<Your Real Number>)

```

这就是你需要发送一条短信的所有代码，惊奇么？

# 把所有的代码放到一起

我们将会把所有的Python代码压缩到只有30行

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

我们需要一个方法去存储我们的主播已经上线的事实并且不再去短信通知。

好的消息是Twilio API提供检索历史消息的方法，因此我们仅仅需要检索发送的历史消息中是否包含我们已经发送过的主播正在直播的消息。

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

你现在拥有一段不到30行的Python代码，可以在你喜欢的主播上线或者离线的时候发送短信通知给你而且不会重复发送信息给你。

我们现在需要一种方法去托管代码，并且每X分钟执行一次这个程序。

# 托管代码的需求

我们将使用Heroku去托管、执行该代码。Heroku是一种简便的托管app到web的方式。Heroku的缺点是比起其他的解决方案，价格方面会昂贵一些。幸运的是，他们有一个慷慨的免费计划允许我们做我们所有想做的事。

如果你没有准备好，你需要创建一个[Heroku 账户][12]. 你同时也需要 [下载并且安装Heroku客户端][13]。

现在你需要将你的Python脚本放到自己的文件夹内，记得加一个`requirements.txt`文件在里面。文件内容的开头如下：

```
requests
twilio
```

这样可以确保Heroku下载正确的依赖程序。

`cd`进入到该文件夹内同时执行`heroku create --app &lt;app name&gt;`。

如果你进入到你的[app dashboard][14] 你将会看到你的新APP。

我们现在需要去初始化一个git仓库并且push代码到Heroku：

```
git init
heroku git:remote -a <app name>
git add .
git commit -am 'Deploy breakthrough script'
git push heroku master
```

如今你的app已经传到Heroku，但是它还不可以干任何事。由于这个小脚本无法接受HTTP请求，访问`<app name>.herokuapp.com`没法做任何事。但是这并不是一个问题。

为了让这个脚本全天候执行。我们需要一个简单的Heroku附加操作"Heroku Scheduler"。为了安装这个附加操作，在你的app操作空间点击"Configure Add-ons"。

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.40.png)

接下来在搜索框输入Heroku Scheduler：

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.53.12.png)

点击搜索结果，并且按下"Provision"按钮

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.59.png)

如果你返回到你的APP主界面，你将会看到Heroku Scheduler：

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.54.16.png)

点击”Heroku Scheduler“链接去配置一个任务，点击”Create Job“按钮，在这里选择"10 minutes"的选项，之后选择执行命令`python &lt;name_of_your_script&gt;.py`，最终红点击"Save job"按钮。

虽然到目前为止我们在Heroku上使用的所有东西都是免费的，但是Heroku Scheduler将会花费25美元每个月。而我们的程序是要秒级执行的。因为该脚本需要每3秒执行一次，所以每10分钟运行该项目，一个月下来将会花费12美分。

# 建议

我希望你喜欢这个项目，并且感兴趣将它部署你的服务器上。在这不到30行代码里我们只做了一点事情，这整个事情想要达到完美级别还很远。这里我有一些改善的建议：

-   发送更多的关于当前直播的信息（正在打的游戏，围观者数等）
-   当主播下线的时候，发送直播时长
-   不仅仅去发送短信，还可以发送邮件
-   同时去监控多个主播

如果你有更好的意见，不要忘了去告诉我。

# 结论

我希望你喜欢上这篇文章并且通过这篇文章学到东西。我确切的希望这种项目是一种最好的方式去学习新的工具和概念，我最近浏览了一个网站[web scraping API][15]，通过它们我学习到了很多知识。

如果你喜欢这种学习方式并且你想要做更多的事情，请在评论区留言。

我有许多别的想法，并且我希望你将会喜欢上它们。不要犹豫去分享你使用这段代码构建的其他项目，这些项目可以去做更多的事。
编码快乐。

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
