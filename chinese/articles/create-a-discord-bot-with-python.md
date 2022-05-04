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

Now click run button on the top to run your bot in repl.it.

If you are writing the bot locally, you can use these commands in the terminal to run the bot:

On Windows:

`py -3 main.py`

On other systems:

`python3 main.py`

Now go to your Discord room and type "$hello". Your bot should return "Hello!".

![image-141](https://www.freecodecamp.org/news/content/images/2021/06/image-141.png)

## How to Improve the Bot

Now that we have a basic bot working, we'll improve it. It is called "Encourage Bot" for a reason.

This bot will respond with a message of encouragement whenever someone sends a message containing a sad or depressing word.

Anyone will be able to add encouraging messages for the bot to use and the user-submitted messages will be stored in the Repl.it database.

The bot will also return a random inspirational quote from an API when someone types the message "$inspire" into the chat.

We'll start with adding the "$inspire" feature.

### How to Add Inspirational Quotes to the Bot

We will get inspirational quotes from an API called zenquotes.io. We need to import a couple more Python modules, add a `get_quote()` function, and update our bot code to call the function.

Here is the updated code. After the code, I'll explain the new parts.

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

We now have to import the `requests` module. This module allows our code to make an HTTP request to get data from the API. The API returns JSON, so the `json` module makes it easier to work with the data returned.

The `get_quote()` function is pretty straightforward. First, it uses the requests module to request data from the API URL. The API returns a random inspirational quote. This function could easily be rewritten to get quotes from a different API, if the current one stops working.

Next inside the function, we use `json.loads()` to convert the response from the API to JSON. Through trial and error I figured out how to get the quote from the JSON into the string format I wanted. The quote is returned from the function as a string.

The final part updated in the code is toward the end. Previously it looked for a message that started with "$hello". Now it looks for "$inspire". Instead of returning "Hello!", it gets the quote with `quote = get_quote()` and returns the quote.

At this point you can run your code and try it out.

## How to Add Encouraging Messages to the Bot

Now we will implement the feature where the bot responds with encouraging messages when a user posts a message with a sad word.

### How to Add Sad Words to the Bot

First we need to create a Python list that contains the sad words that the bot will respond to.

Add the following line after the `client` variable is created:

`sad_words = ["sad", "depressed", "unhappy", "angry", "miserable"]`

Feel free to add more words to the list.

### How to Add Encouraging Messages to the Bot

Now we'll add a list of encouraging messages that the bot will respond with.

Add the following list after the `sad_words` list you created:

```python
starter_encouragements = [
  "Cheer up!",
  "Hang in there.",
  "You are a great person / bot!"
]
```

Like before, feel free to add more phrases of your choice to the list. I'm just using three items for now because later we'll add the ability for users to add more encouraging phrases for the bot to use.

### How to Respond to Messages

Now we need to update our bot to use the two lists we created. First, import the random module because the bot will choose encouraging messages randomly. Add the following line to the import statements at the top of the code: `import random`.

Now we will update the `on_message()` function to check all messages to see if they contain a word from the `sad_words` list. If a sad word is found, the bot will send a random message of encouragement.

Here is the updated code:

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

This is a good time to test the bot. You know enough now to create your own bot. But next you'll learn how to implement more advanced features and store data using the Repl.it database.

### How to Enable User-submitted Messages

The bot is completely functional, but now let's make it possible to update the bot right from Discord. A user should be able to add more encouraging messages for the bot to use when it detects a sad word.

We are going to use Repl.it's built-in database to store user-submitted messages. This database is a key-value store that’s built into every repl.

At the top of the code, under the other import statements, add `from replit import db`. This will allow us to use the Repl.it database.

Users will be able to add custom encouraging messages for the bot to use directly from the Discord chat. Before we add new commands for the bot, let's create two helper functions that will add custom messages to the database and delete them.

Add the following code after the `get_quote()` function:

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
