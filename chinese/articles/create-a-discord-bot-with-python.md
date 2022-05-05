> - 原文地址：[Python Discord Bot Tutorial – Code a Discord Bot And Host it for Free](https://www.freecodecamp.org/news/create-a-discord-bot-with-python/)
> - 原文作者：[Beau Carnes](https://www.freecodecamp.org/news/author/beau/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Python Discord Bot Tutorial – Code a Discord Bot And Host it for Free](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/discordbot.png)

本教程将告诉你如何完全在云端建立你自己的 Discord 机器人。

你不需要在你的电脑上安装任何东西，也不需要支付任何费用来托管你的机器人。

我们将使用一些工具，包括 Discord API、Python 库和一个名为 [Repl.it](https://www.repl.it) 的云计算平台。

这个书面教程也有一个视频版本。视频嵌入在下面，书面版本在视频之后。

## How to Create a Discord Bot Account

为了使用 Python 库和 Discord API，我们必须首先创建一个 Discord Bot 账户。

以下是创建 Discord Bot 账户的步骤。

1. 确保你已经登录到[Discord 网站](https://discord.com)。

2. 进入 [应用程序页面](https://discord.com/developers/applications)。

3. 点击 `New Application` 按钮.

![image-117](https://www.freecodecamp.org/news/content/images/2021/06/image-117.png)

4. 给应用程序一个名称，然后点击 `Create` 按钮。

![image-118](https://www.freecodecamp.org/news/content/images/2021/06/image-118.png)

5. 进入  `Bot` 标签，然后点击 `Add Bot`。你必须点击 `Yes, do it!`.

![image-119](https://www.freecodecamp.org/news/content/images/2021/06/image-119.png)

保持默认设置 **Public Bot** (选中) 和 **Require OAuth2 Code Grant** (未选中).

你的机器人已经创建完毕。下一步是复制令牌（token）。

![image-122](https://www.freecodecamp.org/news/content/images/2021/06/image-122.png)

这个令牌是你的机器人的密码，所以不要与任何人分享它。它可以让别人登录到你的机器人并做各种坏事。

如果不小心被分享，你可以重新生成令牌。

## How to Invite Your Bot to Join a Server

现在你必须让你的机器人用户接入一个服务器。要做到这一点，你应该为它创建一个邀请 URL。

转到 `OAuth2` 标签。然后在 `scopes` 部分选择 `bot`。

![image-123](https://www.freecodecamp.org/news/content/images/2021/06/image-123.png)

现在为机器人选择你想要的权限。我们的机器人将主要使用文本信息，所以我们不需要很多的权限。你可能需要更多的权限，这取决于你希望你的机器人做什么。对 `Administrator` 的权限要小心。
![image-124](https://www.freecodecamp.org/news/content/images/2021/06/image-124.png)

选择适当的权限后，点击权限上方的 `copy` 按钮。这将复制一个 URL，可用于将机器人添加到一个服务器。

把这个 URL 粘贴到你的浏览器，选择一个服务器来接入机器人，然后点击 `Authorize`。

要添加机器人，你的账户需要 `Manage Server` 的权限。

现在你已经创建了机器人用户，我们将开始为机器人编写 Python 代码。

## How to Code a Basic Discord Bot with the discord.py Library

我们将使用 discord.py， 这个 Python 库来编写机器人的代码。discord.py 是 Discord 的一个 API 封装器，使在 Python 中更容易创建一个 Discord 机器人。

### How to Create a Repl and Install discord.py

你可以在你的本地电脑上用任何代码编辑器开发机器人。然而，在本教程中，我们将使用 Repl.it，因为它将使任何人都能更简单地跟随。Repl.it 是一个在线 IDE，你可以在你的网络浏览器中使用。

首先进入 [Repl.it](https://repl.it)。创建一个新的 Repl，选择 `Python` 作为语言。

要使用 discord.py 库，只要在 `main.py` 的顶部写上 `import discord`。当你按下 `run` 按钮时，Repl.it 会自动安装这个依赖。

如果你喜欢在本地编码机器人，你可以在 MacOS 上使用这个命令来安装 discord.py。:

`python3 -m pip install -U discord.py`

你可能需要使用 `pip3` 而不是 `pip`。

如果你使用的是 Windows，那么你应该使用以下一行来:

`py -3 -m pip install -U discord.py`

### How to Set Up Discord Events for Your Bot

discord.py 基于事件的概念。一个事件是你监听的东西，然后对其作出回应。例如，当一条消息发生时，你会收到一个关于它的事件，你可以对其作出回应。

让我们做一个机器人，回复一个特定的消息。这个简单的机器人代码，以及代码解释，来自于[the discord.py documentation](https://discordpy.readthedocs.io/en/latest/quickstart.html#a-minimal-bot)。我们将在以后为机器人添加更多的功能。

将这段代码添加到 main.py 中。(如果你愿意，你可以给这个文件起个别的名字，但不要叫 discord.py。)我很快会解释这些代码的作用。

```python
import discord
import os

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(os.getenv('TOKEN'))
```

当你在 Discord 上创建你的机器人用户时，你复制了一个令牌。现在我们要创建一个 `.env` 文件来存储该令牌。如果你在本地运行你的代码，你不需要 `.env` 文件。只要用令牌替换 `os.getenv('TOKEN')` 就可以了。

`.env` 文件是用来声明环境变量的。在 Repl.it 上，你创建的大多数文件对任何人都是可见的，但 `.env` 文件只对你可见。 其他人将无法看到公共 repl 里的`.env`文件的内容。

因此，如果你在 Repl.it 上开发，应该只在 `.env` 文件中存储私人信息，如令牌或密钥。

点击 `Add file`按钮，创建一个名为 `.env` 的文件。

![image-19-1](https://www.freecodecamp.org/news/content/images/2021/06/image-19-1.png)

在文件中添加以下一行，你的实际令牌（token）:

```python
TOKEN=[paste token here]
```

现在让我们来看看每一行代码在你的 Discord 机器人中的作用是什么。

1. 第一行是导入 discord.py 库。
2. 第二行导入 os 库，但这只是用于从 `.env` 文件中获取 `TOKEN` 变量。如果你不使用 `.env` 文件，你不需要这一行。
3. 接下来，我们创建一个 [`Client`](https://discordpy.readthedocs.io/en/latest/api.html#discord.Client) 的实例。这是与 Discord 的连接。
4. [@client.event()](https://discordpy.readthedocs.io/en/latest/api.html#discord.Client.event) 装饰器被用来注册一个事件。这是一个异步库，所以事情是通过回调完成的。回调是一个当其他事情发生时被调用的函数。在这段代码中，当机器人准备开始使用时，[on_ready()](https://discordpy.readthedocs.io/en/latest/api.html#discord.on_ready) 事件被调用。然后，当机器人收到一个消息时，[on_message()](https://discordpy.readthedocs.io/en/latest/api.html#discord.on_message) 事件被调用。
5. [on_message()](https://discordpy.readthedocs.io/en/latest/api.html#discord.on_message) 事件在每次收到消息时都会触发，但如果消息是来自我们自己，我们不希望它做任何事情。因此，如果[Message.author](https://discordpy.readthedocs.io/en/latest/api.html#discord.Message.author) 与 [Client.user](https://discordpy.readthedocs.io/en/latest/api.html#discord.Client.user) 相同，代码只是返回。

6. 接下来，我们检查 [`Message.content`](https://discordpy.readthedocs.io/en/latest/api.html#discord.Message.content) 是否以 `$hello` 开头。如果是，那么机器人就会向它所使用的频道回复 `Hello!`。
7. 现在机器人已经设置好了，最后一行是用登录令牌运行机器人。它从 `.env` 文件中获取令牌。

我们有了机器人的代码，现在我们只需要运行它。

### How to Run the Bot

现在点击上面的 `run` 按钮，在 repl.it 中运行你的机器人。

如果你是在本地编写机器人，你可以在终端使用这些命令来运行该机器人:

在 Windows 系统:

`py -3 main.py`

在别的系统:

`python3 main.py`

现在去你的 Discord 房间，输入`$hello`。你的机器人应该返回 `Hello`。

![image-141](https://www.freecodecamp.org/news/content/images/2021/06/image-141.png)

## How to Improve the Bot

现在我们有了一个基本的机器人工作，我们将改进它。它被称为 `鼓励机器人` 是有原因的。

每当有人发来含有悲伤或压抑字眼的信息时，这个机器人就会以鼓励的信息来回应。

任何人都可以为机器人添加鼓励信息，用户提交的信息将被储存在 Repl.it 数据库中。

当有人在聊天中输入 `$inspire` 信息时，机器人也会从 API 中随机返回一句鼓舞人心的话。

我们将从添加 `$inspire` 功能开始。

### How to Add Inspirational Quotes to the Bot

我们将从一个名为 zenquotes.io 的 API 中获得鼓舞人心的语录。我们需要再导入几个 Python 模块，添加一个`get_quote()`函数，并更新我们的机器人代码以调用该函数。

下面是更新后的代码。在代码之后，我将解释新的部分。

```python
import discord
import os
import requests
import json

client = discord.Client()

def get_quote():
  response = requests.get("https://zenquotes.io/api/random")
  json_data = json.loads(response.text)
  quote = json_data[0]['q'] + " -" + json_data[0]['a']
  return(quote)

@client.event
async def on_ready():
  print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
  if message.author == client.user:
    return

  if message.content.startswith('$inspire'):
    quote = get_quote()
    await message.channel.send(quote)

client.run(os.getenv('TOKEN'))
```

我们现在必须导入 `requests` 模块。这个模块允许我们的代码进行 HTTP 请求，从 API 获得数据。API 返回 JSON，所以 `json` 模块使我们更容易处理返回的数据。

`get_quote()` 函数是非常简单的。首先，它使用 requests 模块从 API URL 请求数据。API 会返回一个随机的鼓舞人心的报价。如果当前的 API 停止工作，这个函数可以很容易地被重写，以从不同的 API 获得报价。

接下来在这个函数中，我们使用 `json.load()` 将 API 的响应转换为 JSON。通过试验和错误，我找到了如何将 JSON 中的报价转换成我想要的字符串格式。报价被作为一个字符串从函数中返回。

代码中最后更新的部分是在最后。以前，它寻找以 `$hello` 开头的信息。现在它寻找的是 `$inspire`。它不再返回 `Hello!`，而是用 `quote = get_quote()` 来获取报价，并返回报价。

在这一点上，你可以运行你的代码并尝试一下。

## How to Add Encouraging Messages to the Bot

现在我们要实现的功能是，当用户发布带有悲伤字眼的信息时，机器人会以鼓励性的信息进行回应。

### How to Add Sad Words to the Bot

首先，我们需要创建一个 Python 列表，其中包含机器人将回应的悲伤的词语。

在创建`client`变量后添加以下一行:

`sad_words = ["sad", "depressed", "unhappy", "angry", "miserable"]`

Feel free to add more words to the list.

### How to Add Encouraging Messages to the Bot

现在我们将添加一个鼓励性的信息列表，机器人将用这些信息来回应。

在你创建的`sad_words`列表后面添加以下列表:

```python
starter_encouragements = [
  "Cheer up!",
  "Hang in there.",
  "You are a great person / bot!"
]
```

像以前一样，请随时在列表中添加更多你选择的短语。我现在只使用三个项目，因为以后我们会增加用户添加更多鼓励性短语的能力，供机器人使用。

### How to Respond to Messages

现在我们需要更新我们的机器人来使用我们创建的两个列表。首先，导入随机模块，因为机器人将随机选择鼓励信息。在代码顶部的导入语句中添加以下一行。`import random`。

现在我们将更新`on_message()`函数，以检查所有信息，看它们是否包含`sad_words`列表中的一个词。如果发现一个悲伤的词，机器人将发送一条随机的鼓励信息。

以下是更新后的代码:

```python
async def on_message(message):
  if message.author == client.user:
    return

  msg = message.content

  if msg.startswith('$inspire'):
    quote = get_quote()
    await message.channel.send(quote)
    
  if any(word in msg for word in sad_words):
    await message.channel.send(random.choice(starter_encouragements))
```

这是一个测试机器人的好时机。你现在知道的足够多，可以创建你自己的机器人。但接下来你将学习如何实现更高级的功能，并使用 Repl.it 数据库存储数据。

### How to Enable User-submitted Messages

这个机器人是完全正常的，但现在让我们有可能从 Discord 中直接更新机器人。用户应该能够添加更多的鼓励性信息，以便机器人在检测到一个悲伤的词时使用。

我们将使用 Repl.it 的内置数据库来存储用户提交的信息。这个数据库是一个键值存储，内置于每个 Repl.it 中。

在代码的顶部，在其他导入语句下，添加 `from replit import db`。这将使我们能够使用 Repl.it 数据库。

用户将能够直接从 Discord 聊天中为机器人添加自定义鼓励信息。在我们为机器人添加新的命令之前，让我们创建两个辅助函数，将自定义消息添加到数据库并删除它们。

在 `get_quote()` 函数后添加以下代码:

```python
def update_encouragements(encouraging_message):
  if "encouragements" in db.keys():
    encouragements = db["encouragements"]
    encouragements.append(encouraging_message)
    db["encouragements"] = encouragements
  else:
    db["encouragements"] = [encouraging_message]

def delete_encouragment(index):
  encouragements = db["encouragements"]
  if len(encouragements) > index:
    del encouragements[index]
  db["encouragements"] = encouragements
```

The `update_encouragements()` function accepts an encouraging message as an argument.

First it checks if "encouragements" is a key in the database. If so, it gets the list of encouragements already in the database, adds the new one to the list, and stores the updated list back in the database under the "encouragements" key.

If the database does not already contain "encouragements", a new key by that name is created and the new encouraging message is added as the first element in the list.

The `delete_encouragement()` function accepts an index as an argument.

It gets the list of encouragements from the database stored under the "encouragements" key. If the number of items in the encouragements list is greater than the index, then the list item at that index is deleted.

Finally, the updated list is stored back in the database under the "encouragements" key.

Here is the updated code for the `on_message()` function. After the code, I'll explain the new sections.

```python
async def on_message(message):
  if message.author == client.user:
    return

  msg = message.content
 
  if msg.startswith("$inspire"):
    quote = get_quote()
    await message.channel.send(quote)

  options = starter_encouragements
  if "encouragements" in db.keys():
    options = options + db["encouragements"]

  if any(word in msg for word in sad_words):
    await message.channel.send(random.choice(options))

  if msg.startswith("$new"):
    encouraging_message = msg.split("$new ",1)[1]
    update_encouragements(encouraging_message)
    await message.channel.send("New encouraging message added.")

  if msg.startswith("$del"):
    encouragements = []
    if "encouragements" in db.keys():
      index = int(msg.split("$del",1)[1])
      delete_encouragment(index)
      encouragements = db["encouragements"]
    await message.channel.send(encouragements)
```

The first new line of code from above is `options = starter_encouragements`. We are making a copy of `starter_encouragements` because we are going to add the user-submitted messages to that list before choosing a random message for the bot to send.

We check if "encouragements" is already in the database keys (meaning that a user has submitted at least one custom message). If so, we add the user messages to the starter encouragements.

Then, instead of sending a random message from `starter_encouragements`, the bot now sends a random message from `options`.

The next new section of code is used to add a new user-submitted message to the database. If a Discord message starts with "$new", then the text after "$new" will be used as a new encouraging message.

The code `msg.split("$new ",1)[1]` splits off the message from the "$new" command and stores the message in a variable. In that line of code, take note of the space in `"$new "`. We want everything _after_ the space.

We call the `update_encouragements` helper function with the new message, and then the bot sends a message to the discord chat confirming that the message was added.

The third new section (at the end of the code above) checks if a new Discord message starts with "$del". This is the command to delete an item from the "encouragements" list in the database.

First a new variable called `encouragements` is initialized as an empty array. The reason for this is that this section of code will send a message with an empty array if the database does not include an "encouragement" key.

If the "encouragement" key is in the database, the index will be split off from the Discord message starting with "$del". Then, the `delete_encouragement()` function is called passing in the index to delete. The updated list of encouragements is loaded into the `encouragements` variable, and then the bot sends a message to Discord with the current list.

## Final Bot Features

The bot should work so this is a good time to test it. We will now add a few final features.

We will add the ability to get a list of user-submitted messages right from Discord and we will add the ability to turn off and on whether the bot responds to sad words.

I will give you the full final code of the program, and then I'll discuss the updates below the code.

```python
import discord
import os
import requests
import json
import random
from replit import db

client = discord.Client()

sad_words = ["sad", "depressed", "unhappy", "angry", "miserable"]

starter_encouragements = [
  "Cheer up!",
  "Hang in there.",
  "You are a great person / bot!"
]

if "responding" not in db.keys():
  db["responding"] = True

def get_quote():
  response = requests.get("https://zenquotes.io/api/random")
  json_data = json.loads(response.text)
  quote = json_data[0]["q"] + " -" + json_data[0]["a"]
  return(quote)

def update_encouragements(encouraging_message):
  if "encouragements" in db.keys():
    encouragements = db["encouragements"]
    encouragements.append(encouraging_message)
    db["encouragements"] = encouragements
  else:
    db["encouragements"] = [encouraging_message]

def delete_encouragment(index):
  encouragements = db["encouragements"]
  if len(encouragements) > index:
    del encouragements[index]
  db["encouragements"] = encouragements

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))

@client.event
async def on_message(message):
  if message.author == client.user:
    return

  msg = message.content

  if msg.startswith("$inspire"):
    quote = get_quote()
    await message.channel.send(quote)

  if db["responding"]:
    options = starter_encouragements
    if "encouragements" in db.keys():
      options = options + db["encouragements"]

    if any(word in msg for word in sad_words):
      await message.channel.send(random.choice(options))

  if msg.startswith("$new"):
    encouraging_message = msg.split("$new ",1)[1]
    update_encouragements(encouraging_message)
    await message.channel.send("New encouraging message added.")

  if msg.startswith("$del"):
    encouragements = []
    if "encouragements" in db.keys():
      index = int(msg.split("$del",1)[1])
      delete_encouragment(index)
      encouragements = db["encouragements"]
    await message.channel.send(encouragements)

  if msg.startswith("$list"):
    encouragements = []
    if "encouragements" in db.keys():
      encouragements = db["encouragements"]
    await message.channel.send(encouragements)
    
  if msg.startswith("$responding"):
    value = msg.split("$responding ",1)[1]

    if value.lower() == "true":
      db["responding"] = True
      await message.channel.send("Responding is on.")
    else:
      db["responding"] = False
      await message.channel.send("Responding is off.")

client.run(os.getenv("TOKEN"))
```

The first section added to the code is right under the `starter_encouragements` list:

```python
if "responding" not in db.keys():
  db["responding"] = True
```

We create a new key in the database called "responding" and set it to "True". We'll use this to determine if the bot should respond to sad words or not. Since the database is saved even after the program stops running, we only create the new key if it doesn't already exist.

The next new part of the code is that the section that responds to sad words is now inside this if statement: `if db["responding"]:`. The bot will only respond to sad words if `db["responding"] = True`. The ability to update this value comes after this next section.

Next, after the code to make the bot respond to the "$del" command, there is new code to respond to the "$list" command when sent as a Discord message.

This section starts with creating an empty list called `encouragements`. Then, if there are already encouragements in the database, those encouragements replace the empty list that was just created.

Finally, the bot sends the list of encouragements as a Discord message.

The final new section comes next. This code makes the bot respond to the "$responding" command. This command takes an argument of either "true" or "false". Here is a usage example: "$responding true".

The code first pulls off the argument with `value = msg.split("$responding ",1)[1]` (like before, note the space in `"$responding "`). Then there is an if/else statement that appropriately sets the "responding" key in the database and sends a notification message back to Discord. If the argument is anything but "true", the code assumes "false".

The code for the bot is complete! You can now run the bot and try it out. But there is one more important step that we will discuss next.

## How to Set Up the Bot to Run Continuously

If you run your bot in repl.it and then close the tab it is running in, your bot will stop running.

But there are two ways you can keep your bot running continuously, even after you close your web bowser.

The first way and simplest way is to sign up for paid plan in Repl.it. Their cheapest paid plan is called the Hacker Plan and it includes five always-on repls.

You can get three months free using this link (limited to first 1000 people):  <https://repl.it/claim?code=tryalwayson2103>

Once you have signed up for that plan, open your Repl and click the name at the top. Then select the "Always On" option.

![image-35-1](https://www.freecodecamp.org/news/content/images/2021/06/image-35-1.png)

There is another way to keep your code running even on the free tier but it is a little more complicated. Repl.it will continue running a web server even after the tab is closed. But even a web server will only run for up to an hour without any use.

Here is what the repl.it docs say:

> Once deployed, the server will continue to run in the background, even after you close the browser tab. The server will stay awake and active until an hour after its last request, after which it will enter a sleeping stage. Sleeping repls will be woken up as soon as it receives another request; there is no need to re-run the repl. However, if you make changes to your server, you will need to restart the repl in order to see those changes reflected in the live version.

To keep the bot running continuously, we'll use another free service called Uptime Robot at [https://uptimerobot.com/](https://uptimerobot.com/).

Uptime Robot can be set up to ping the bot's web server on repl.it every 5 minutes. With constant pings, the bot will never enter the sleeping stage and will just keep running.

So we have to do two more things to get our bot to run continuously:

1. create a web server in repl.it and
2. set up Uptime Robot to continuously ping the web server.

### How to Create a Web Server in repl.it

Creating a web server is simpler than you may think.

To do it, create a new file in your project called `keep_alive.py`.

Then add the following code:

```python
from flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def home():
    return "Hello. I am alive!"

def run():
  app.run(host='0.0.0.0',port=8080)

def keep_alive():
    t = Thread(target=run)
    t.start()
```

In this code, we use Flask to start a web server. The server returns "Hello. I am alive." to anyone who visits it. The server will run on a separate thread from our bot. We won't discuss everything here since the rest is not really relevant to our bot.

Now we just need the bot to run this web server.

Add the following line toward the top of `main.py`  to import the server.

```python
from keep_alive import keep_alive
```

To start the web server when `main.py` is run, add the following line as the second-to-last line, right before the bot runs.

`keep_alive()`

When you run the bot on repl.it after adding this code, a new web server window will open up. There is a URL shown for the web server. Copy the URL so you can use it in the next section.

![image-20-1](https://www.freecodecamp.org/news/content/images/2021/06/image-20-1.png)

### How to Set Up Uptime Robot

Now we need to set up Uptime Robot to ping the web server every five minutes. This will cause the bot to run continuously.

Create a free account on [https://uptimerobot.com/](https://uptimerobot.com/).

Once you are logged in to your account, click "Add New Monitor".

![image-21-1](https://www.freecodecamp.org/news/content/images/2021/06/image-21-1.png)

For the new monitor, select "HTTP(s)" as the Monitor Type and name it whatever you like. Then, paste in the URL of your web server from repl.it. Finally, click "Create Monitor".

![image-22-1](https://www.freecodecamp.org/news/content/images/2021/06/image-22-1.png)

We're done! Now the bot will run continuously so people can always interact with it on Repl.it.

## Conclusion

You now know how to create a Discord bot with Python, and run it continuously in the cloud.

There are a lot of other things that the discord.py library can do. So if you want to give a Discord bot even more features, your next step is to check out [the docs for discord.py.](https://discordpy.readthedocs.io/en/latest/index.html)
