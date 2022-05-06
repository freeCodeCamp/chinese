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

`update_encouragements()`函数接受一个鼓励信息作为参数。

首先，它检查 `encouragements` 是否是数据库中的一个键（key）。如果是，它将获得已经在数据库中的鼓励信息列表，将新的鼓励信息添加到列表中，并将更新的列表存储在数据库中的 `encouragements` 键下。

如果数据库中还没有 `encouragements`，就用这个名字创建一个新的键，并将新的鼓励信息作为列表中的第一个元素加入。

`delete_encouragement()` 函数接受一个索引作为参数。

它从数据库中获取存储在 `encouragements` 键下的鼓励信息列表。如果鼓励列表中的项目数量大于索引，则删除该索引处的列表项。

最后，更新后的列表被存储在数据库的 `encouragements` 键下。

下面是 `on_message()` 函数的更新代码。在代码之后，我将解释新的部分。

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

上面的第一行新代码是 `options = starter_encouragements`。我们复制了变量 `starter_encouragements`的值，因为我们要把用户提交的信息添加到该列表中，然后再为机器人选择一条随机信息来发送。

我们检查 `encouragements` 是否已经在数据库键中（意味着用户已经提交了至少一条自定义消息）。如果是的话，我们就把用户信息添加到启动器的鼓励信息中。

然后，机器人现在不是从 `starter_encouragements` 中随机发送消息，而是从 `options` 中随机发送消息。

下一段新的代码是将用户提交的新消息添加到数据库中。如果一条 Discord 信息以 `$new`开头，那么 `$new` 之后的文字将被用作新的鼓励信息。

代码`msg.split("$new",1)[1]`从 `$new` 命令中分离出信息，并将该信息存储在一个变量中。在这行代码中，注意"$new "中的空格。我们要的是空格之后的所有内容。

我们调用 `update_encouragements` 辅助函数处理新消息，然后机器人向 discord 聊天室发送一条消息，确认消息被添加。

第三个新部分（在上面代码的末尾）检查新的 discord 消息是否以`$del` 开头。这是删除数据库中 `encouragements` 列表中的一个项目的命令。

首先，一个名为 `encouragements` 的新变量被初始化为一个空数组。这样做的原因是，如果数据库中不包括 `encouragement` 键，这部分代码将发送一个空数组的信息。

如果 `encouragement` 键在数据库中，索引将从以 `$del` 开始的 Discord 消息中分离出来。然后，调用`delete_encouragement()`函数，传入要删除的索引。更新的鼓励列表被加载到 `encouragements` 变量中，然后机器人向 Discord 发送一条带有当前列表的消息。

## Final Bot Features

该机器人应该可以工作，所以现在是测试它的好时机。我们现在将添加一些最后的功能。

我们将增加从 Discord 中直接获得用户提交的信息列表的功能，并且我们将增加关闭和开启机器人是否对伤心话做出反应的功能。

我将给你们提供程序的全部最终代码，然后我将在下面讨论更新的代码。

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

添加到代码中的第一个部分就在 `starter_encouragements` 列表下面:

```python
if "responding" not in db.keys():
  db["responding"] = True
```

我们在数据库中创建一个名为 `responding` 的新键，并将其设置为 `true`。我们将用它来决定机器人是否应该对悲伤的话语做出反应。由于数据库即使在程序停止运行后也会被保存，所以我们只在新键不存在的情况下创建它。

代码的下一个新部分是，对伤心话做出反应的部分现在在这个 if 语句里面：`if db["responding"]:`。只有当`db["responing"] = True`时，机器人才会对悲伤的词语做出反应。更新这个值的动作是在下一节之后。

接下来，在使机器人响应 `$del` 命令的代码之后，有新的代码来响应作为 Discord 消息发送的 `$list` 命令。

这一部分首先是创建一个名为 `encouragements` 的空列表。然后，如果数据库中已经有鼓励语(encouragements)，这些鼓励语将取代刚刚创建的空列表。

最后，机器人将  鼓励（encouragements）列表作为 Discord 消息发送出去。

接下来是最后的新部分。这段代码使机器人对 `$responding` 命令作出反应。这个命令的参数是 `true` 或 `false`。下面是一个使用例子。`$responding true`。

代码首先用`value = msg.split("$responding",1)[1]` 获得一个值（和前面一样，注意`"$responding"`的空格）。然后有一个 if/else 语句，适当地设置数据库中的 `responding` 键，并向 Discord 发送一个通知信息。如果参数不是 `true`，代码就假定为 `false`。

该机器人的代码已经完成！你现在可以运行机器人并试用它了。但还有一个重要的步骤，我们接下来会讨论。

## How to Set Up the Bot to Run Continuously

如果你在 repl.it 中运行你的机器人，然后关闭它所运行的标签，你的机器人将停止运行。

但有两种方法可以让你的机器人持续运行，即使在你关闭你的网络浏览器之后。

第一个方法和最简单的方法是在 Repl.it 注册付费计划。他们最便宜的付费计划被称为黑客计划，它包括五个永远在线的 repls 项目。

You can get three months free using this link (limited to first 1000 people):  <https://repl.it/claim?code=tryalwayson2103>

当你注册了该计划，打开你的 Repl，点击顶部的项目名字。然后选择 `Always On` (永久在线) 选项。

![image-35-1](https://www.freecodecamp.org/news/content/images/2021/06/image-35-1.png)

还有一种方法可以使你的代码保持运行，即使是在免费计划，但它有点复杂。Repl.it 在标签关闭之后。但即使是网络服务器，也只能在没有任何使用的情况下运行一个小时。

下面是 repl.it 文档中的内容:

> 当部署完，服务器将继续在后台运行，甚至在你关闭浏览器标签之后。服务器将保持运行和活跃，直到最后一次请求后一个小时，之后它将进入睡眠阶段。睡眠中的 Repls 一旦收到一个请求就会被唤醒；不需要重新运行。然而，如果你对你的服务器做了修改，你将需要重新启动 repl，以便看到这些修改反映在新版本中。

为了保持机器人的持续运行，我们将使用另一项免费的服务，叫做 [Uptime Robot](https://uptimerobot.com/)。

Uptime Robot 可以被设置为每 5 分钟 ping 一次在 repl.it 上机器人的网络服务器。有了持续的 ping，机器人将永远不会进入睡眠阶段，而会一直运行。

因此，我们必须再做两件事来使我们的机器人持续运行:

1. 在 repl.it 中创建一个网络服务器，然后
2. 设置 Uptime Robot，以持续地 ping 该 Web 服务器。

### How to Create a Web Server in repl.it

创建一个网络服务器比你想象的要简单。

要做到这一点，在你的项目中创建一个新的文件，叫做 `keep_alive.py`。

然后添加以下代码:

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

在这段代码中，我们使用 Flask 来启动一个网络服务器。该服务器向访问它的人返回 "Hello. I am alive." 给任何访问它的人。该服务器将在与我们的机器人分开的线程上运行。我们不会在这里讨论所有的东西，因为其他的东西与我们的机器人并不相关。

现在我们只需要机器人来运行这个网络服务器。

在 `main.py` 的顶部添加以下一行来导入服务器。

```python
from keep_alive import keep_alive
```

要在运行 `main.py` 时启动网络服务器，请在机器人运行前的倒数第二行添加以下一行。

`keep_alive()`

当你加入这段代码后在 repl.it 上运行机器人时，一个新的网络服务器窗口将被打开。这里有一个网络服务器的 URL。复制这个 URL，这样你就可以在下一节中使用它。

![image-20-1](https://www.freecodecamp.org/news/content/images/2021/06/image-20-1.png)

### How to Set Up Uptime Robot

现在，我们需要设置 Uptime Robot，使其每隔 5 分钟就对网络服务器进行一次 ping。这将使机器人持续运行。

在 [https://uptimerobot.com/](https://uptimerobot.com/) 上创建一个免费账户。

一旦你登录到你的账户，点击 "Add New Monitor"。

![image-21-1](https://www.freecodecamp.org/news/content/images/2021/06/image-21-1.png)

对于新的监控器（monitor），选择 "HTTP(s) "作为监控器类型，并命名为你喜欢的任何名字。然后，从 repl.it 中粘贴你的网络服务器的 URL。最后，点击 "Create Monitor"。

![image-22-1](https://www.freecodecamp.org/news/content/images/2021/06/image-22-1.png)

我们完成了! 现在，这个机器人将持续运行，所以人们可以一直在 Repl.it 上 与它互动。

## 结语

你现在知道如何用 Python 创建一个 Discord 机器人，并在云上持续运行。

discord.py 库还可以做很多其他的事情。因此，如果你想让 Discord 机器人拥有更多的功能，你的下一步是查看 [discord.py 文档](https://discordpy.readthedocs.io/en/latest/index.html)
