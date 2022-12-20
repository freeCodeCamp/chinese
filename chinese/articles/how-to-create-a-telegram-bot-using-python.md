> -  原文地址：[How to Create a Telegram Bot using Python](https://www.freecodecamp.org/news/how-to-create-a-telegram-bot-using-python/)
> -  原文作者：[Ashutosh Krishna](https://www.freecodecamp.org/news/author/ashutoshkrris/)
> -  译者：songyp0505
> -  校对者：

![How to Create a Telegram Bot using Python](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/Telegram-Bot.png)

自动化的聊天机器人可以有效地促进互动，Slack、Discord和其他平台都支持创建机器人。

在这篇文章里，笔者会教你做一个能告诉你星座运势的Telegram聊天机器人，话不多说，马上开始！

## 如何获取你的机器人Token值

在Telegram上创建一个机器人之前，你需要先跟 BotFather说一声，顾名思义，BotFather就是所有Bot的Father，但它并不是一个真实的人，也是一个机器人。

1\.  在Telegram上搜索 @botfather。

![Screenshot-2022-12-16-092357](https://www.freecodecamp.org/news/content/images/2022/12/Screenshot-2022-12-16-092357.png)

BotFather机器人

2\.  点击Start按钮与BotFather聊天.

![Screenshot-2022-12-16-092531](https://www.freecodecamp.org/news/content/images/2022/12/Screenshot-2022-12-16-092531.png)

点击Start按钮

3\.  输入 `/newbot`，然后输入你的机器人名字，再输入你的机器人ID，接着BotFather就会给你一个token值，后面我们会用这个token值来访问Telegram的API。

![Screenshot-2022-12-16-093337](https://www.freecodecamp.org/news/content/images/2022/12/Screenshot-2022-12-16-093337.png)

获取访问token

**注意：**一定要安全的存放上述申请到的token，因为这个token可以直接操控的你机器人。


## 如何初始化你的代码环境

现在需要准备一下本地的代码环境。在Python中，很多库可以创建Telegram机器人，这里我们用的是[pyTelegramBotAPI](https://pypi.org/project/pyTelegramBotAPI/)。这是一个简单但是扩展性很强的库，并且有着很好的同步和异步处理能力。

用pip命令安装pyTelegramBotAPI：

```bash
pip install pyTelegramBotAPI
```

然后用你常用的代码编辑器创建一个 `.env` 文件，并在其中写下这一行来存储你的token：

```bash
export BOT_TOKEN=your-bot-token-here
```

然后，Linux/Mac系统下可以直接用终端在当前文件夹内使用 `source .env`命令，让BOT_TOKEN的值生效，而在Windows系统中，需要在终端中输入以下命令来设置环境变量：

```bash
set BOT_TOKEN=your-bot-token-here
```


## 如何创建第一个机器人

TeleBot类里面存储了所有的API接口，其中有很多方法可以用来监听收到的消息，同时也有像`send_message()`, `send_document()`这类方法来发送消息。

新建一个 `bot.py` 文件，然后把下面的代码粘贴到文件中：

```python
import os

import telebot

BOT_TOKEN = os.environ.get('BOT_TOKEN')

bot = telebot.TeleBot(BOT_TOKEN)
```

在上面的代码中，我们使用 os 库的目的是读取我们系统中的环境变量。

如果还记得的话，之前我们设置了一个 `BOT_TOKEN` 的环境变量，这里我们把它读取出来并将其值赋给变量`BOT_TOKEN`。然后，我们使用 `TeleBot`这个类，来创建一个机器人实例，并把`BOT_TOKEN`的值赋给它。

然后我们需要注册消息处理器，消息处理器包括消息必须通过的过滤器。在消息通过过滤器的时候，装饰器修改过的函数就会被调用，同时，此条消息会作为一个参数传入函数中。

让我们定义一个能处理 `/start` 和 `/hello` 命令的消息处理器。

```python
@bot.message_handler(commands=['start', 'hello'])
def send_welcome(message):
    bot.reply_to(message, "Howdy, how are you doing?")
```

对于装饰器修改过的消息处理函数，任何名称都行，但是只能接受一个参数，也就是消息。

下面实现另一个消息处理器，能返回任意一条收到的消息。

```python
@bot.message_handler(func=lambda msg: True)
def echo_all(message):
    bot.reply_to(message, message.text)
```

上面用到了一个` lambda` 函数，如果我们需要回应所有的消息，那我们就需要从`lambda`函数中返回一个 `True`。

你现在有了一个简单的机器人，它可以对`/start` 和 `/hello `命令做出回应，并且可以返回其他发给它的消息。把下面这条代码放在`bot.py`的末尾，然后就可以启动机器人了。

```python
bot.infinity_polling()
```

好啦！这样我们就完成了一个Telegram机器人，运行这个Python文件，然后就可以通过Telegram与机器人进行交互了。

如果你没保存机器人的联系方式，你可以通过之前设置的用户名来搜索。你可以尝试发送`/hello` 和 `/start` 以及其他消息感受一下。

![Screenshot-2022-12-16-101334](https://www.freecodecamp.org/news/content/images/2022/12/Screenshot-2022-12-16-101334.png)

测试机器人

注意：所有的消息处理器都按照它们在源文件中声明的顺序进行测试。

获取更多如何使用pyTelegramBotAPI库的学习资料，你可以去他们的[官方文档](https://github.com/eternnoir/pyTelegramBotAPI)了解。

## 如何写一个星座运势机器人

现在让我们把注意力放在星座运势机器人上。我们会在机器人中使用消息链。机器人会先问你是什么星座，然后会问你需要哪天的运势，接着就会返回那一天对应的星座运势。

往程序内部分析，这个机器人主要是通过API来获取星座运势数据的。

我们将会使用一个笔者在另一个教程中写的[星座运势API](https://horoscope-app-api.vercel.app/)来进行后续的工作。如果你想学一下如何做一个相同的API，你可以看一下这份[教程](https://ashutoshkrris.hashnode.dev/how-to-create-a-horoscope-api-with-beautiful-soup-and-flask)。请确保在开始之前你已经在[网站](https://horoscope-app-api.vercel.app/)上探索了API的用法。

## 如何抓取运势数据

我们来创建一个实用的函数以抓取到某个特定日期的星座运势。

```python
import requests

def get_daily_horoscope(sign: str, day: str) -> dict:
    """通过特定的星座获取运势。

    关键字解释:
    sign:str - 星座
    day:str - 格式化的日期 (YYYY-MM-DD) 或 TODAY 或 TOMORROW 或 YESTERDAY
    Return:dict - JSON data
    """
    url = "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily"
    params = {"sign": sign, "day": day}
    response = requests.get(url, params)

    return response.json()
```

在上面的Python代码中，我们创建了一个函数，它能接收`sign` 和`day`两个字符串参数，然后返回 JSON数据。我们需要向API链接发送一个GET请求，并且把`sign` 和`day` 作为参数加在请求里。

如果你测试一下上面的函数，你会得到一个跟下面类似的返回值：

```json
{
   "data":{
      "date": "Dec 15, 2022",
      "horoscope_data": "Lie low during the day and try not to get caught up in the frivolous verbiage that dominates the waking hours. After sundown, feel free to speak your mind. You may notice that there is a sober tone and restrictive sensation today that leaves you feeling like you will never be able to break free from your current situation. Don't get caught in this negative mindset."
   },
   "status": 200,
   "success": true
}
```

注意：你可以通过这个[教程](https://ashutoshkrris.hashnode.dev/how-to-interact-with-web-services-using-python)来探索更多关于 `requests `库的内容

## 如何添加一个消息处理器


现在我们有了一个能返回运势数据的函数，下一步让我们创建一个消息处理器，以让我们的机器人能向用户询问他们的星座。

```python
@bot.message_handler(commands=['horoscope'])
def sign_handler(message):
    text = "你的星座是什么?\\n选一个: *Aries*, *Taurus*, *Gemini*, *Cancer,* *Leo*, *Virgo*, *Libra*, *Scorpio*, *Sagittarius*, *Capricorn*, *Aquarius*, and *Pisces*."
    sent_msg = bot.send_message(message.chat.id, text, parse_mode="Markdown")
    bot.register_next_step_handler(sent_msg, day_handler)
```

上面的函数跟我们之前定义的有一些不同，机器人的运势查询功能需要被 `/horoscope` 命令调用。这个函数在我们给用户发消息时执行，你会发现有个参数`parse_mode`，我们把它的值设置为了**Markdown**，这是为了消息向用户发送时更规范。

因为我们要使用消息链，所以我们使用了 `register_next_step_handler()` 方法。这个方法接收两个参数：**sent_msg** 和 **day_handler**，所以我们把 `sent_msg` 变量和一个新的 `day_handler` 函数作为参数传递给它。

Let’s define the `day_handler()` function that accepts the message.
让我们定义一个能接收消息的`day_handler()`函数。

```python
def day_handler(message):
    sign = message.text
    text = "你想知道哪天的呀？\\n选一个吧: *TODAY*, *TOMORROW*, *YESTERDAY*, 或其他 YYYY-MM-DD 格式的日期。"
    sent_msg = bot.send_message(message.chat.id, text, parse_mode="Markdown")
    bot.register_next_step_handler(sent_msg, fetch_horoscope, sign.capitalize())
```

我们从`message.text`中获取到星座信息，跟之前的函数类似，机器人会问你想知道哪天的运势。

最后，我们同样再把`sent_msg`和 `fetch_horoscope` 输入到 `register_next_step_handler()` 方法，不过需要给 `fetch_horoscope` 再加一个`sign`参数。

让我们创建`fetch_horoscope()`函数来接收消息和星座。

```python
def fetch_horoscope(message, sign):
    day = message.text
    horoscope = get_daily_horoscope(sign, day)
    data = horoscope["data"]
    horoscope_message = f'*运势:* {data["horoscope_data"]}\\n*星座:* {sign}\\n*日期:* {data["date"]}'
    bot.send_message(message.chat.id, "你的运势来啦!")
    bot.send_message(message.chat.id, horoscope_message, parse_mode="Markdown")
```

这是我们写的最后一个函数，在这里，我们从传入函数的`sign`参数获取星座名称、从`message.text`获取日期。

然后，我们用`get_daily_horoscope()` 函数抓取运势信息并构建我们的消息。最后，我们把含有星座运势的数据以对话消息的形式发送给用户。

## 机器人示例

如果你运行Python文件的话，你可以测试这些功能，这里是一个示例：


## 推荐下一步

到目前为止，一旦我们停止Python应用程序，机器人就会停止工作。为了让它一直运行，你可以把机器人部署在Heroku、Render等平台上。

这是本文代码的[GitHub仓库链接](https://github.com/ashutoshkrris/Telegram-Horoscope-Bot) - 欢迎随时查看.

在探索[Telegram APIs](https://core.telegram.org/)后，你可以向这个机器人添加更多的功能。

感谢阅读！你可以在[Twitter](https://twitter.com/ashutoshkrris)[.](https://ireadblog.com/)关注我。
