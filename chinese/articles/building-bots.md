> -   原文地址：[How to Build a Bot and Automate your Everyday Work Python 基础教程：这个自动化程序让你的工作更高效](https://www.freecodecamp.org/news/building-bots/)
> -   作者：Tim Grossmann
> -   译者：pjwok
> -   校对者：

![How to Build a Bot and Automate your Everyday Work](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/freecodecamp_cover.png)
![自动化你的日常工作](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/freecodecamp_cover.png)

Most jobs have repetitive tasks that you can automate, which frees up some of your valuable time. This makes automation a key skill to acquire.
很多日常工作你可以通过自动化的方式来节省一点宝贵的时间。这也使得掌握自动化技术成为关键。

A small group of skilled automation engineers and domain experts may be able to automate many of the most tedious tasks of entire teams.
只需要一小部分熟练的自动化工程师和领域专家就有可能将整个团队中的最繁琐的工作实现自动化。

In this article, we'll explore the basics of workflow automation using Python – a powerful and easy to learn programming language. We will use Python to write an easy and helpful little automation script that will clean up a given folder and put each file into its according folder.
在这篇文章中，我们将探讨基于 Python（一种强大的且简单易学的编程语言）来实现自动化工作流程的一些基础知识。我们将使用 Python 来编写一个简单有用的小型自动化脚本，这个脚本能够整理指定文件夹中的文件，并将其放到对应的文件夹中。

Our goal won't be to write perfect code or create ideal architectures in the beginning.  
我们的目标不是在一开始就编写完美的代码以及构建一套理想的自动化体系。
We also won't build anything "illegal". Instead we'll look at how to create a script that automatically cleans up a given folder and all of its files.
当然我们也不会构建任何“非法”的东西。相反的，我们将研究如何创建一个能够自动整理文件夹中文件内容的脚本。

# Table of contents
# 目录

1.  [Areas of Automation and Where to Start][1]
1.  [确定自动化的领域，从哪里开始编写][1]
    -   Simple Automation
    -   简单的自动化
    -   Public API Automation
    -   公共 API（Application Program Interface 应用程序接口）自动化
    -   API Reverse Engineering
    -   API 的逆向工程 反编译
2.  [Ethical Considerations of Automation][2]
2.  [自动化的道德考量][2]
3.  [Creating a Directory Clean-Up Script][3]
3.  [创建文件夹清理脚本][3]
4.  [A Complete Guide to Bot Creation and Automating Your Everyday Work][4]
4.  [自动化程序的完整指南][4]

## Areas of Automation and Where to Start
## 自动化领域和从哪开始

Let's start with defining what kind of automations there are.
让我们从定义哪种自动化开始。

The art of automation applies to most sectors. For starters, it helps with tasks like extracting email addresses from a bunch of documents so you can do an email blast. Or more complex approaches like optimizing workflows and processes inside of large corporations.
自动化技术适用于大多数领域。从初级的，它可以帮你从一堆文件中提取邮箱地址，这样你就可以群发邮件了。到复杂一点的，优化大型公司的内部工作流程。

Of course, going from small personal scripts to large automation infrastructure that replaces actual people involves a process of learning and improving. So let's see where you can start your journey.
当然，从小型的个人脚本到可以替代人工的大型自动化架构这中间需要一个学习的过程。所以让我们来看看适合从哪个领域开始你的自动化之旅。


### Simple Automations
### 简单的自动化

Simple automations allow for a quick and straightforward entry point. This can cover small independent processes like project clean-ups and re-structuring of files inside of directories, or parts of a workflow like automatically resizing already saved files.
直接针对工作中的某一点流程实现简单的自动化。这其中可以包括某些小型的独立的任务，例如整理项目并重新编排目录中的文件，或者是整个工作流程中一部分，例如自动调整已经保存文件的大小。

### Public API Automations
### 公共 API 自动化

Public API automations are the most common form of automation since we can access most functionality using HTTP requests to APIs nowadays. For example, if you want to automate the watering of your self-made smart garden at home.
现如今我们可以通过 HTTP（Hypertext transfer protocol 超文本传输协议）请求对应的 API 来实现绝大部分程序的功能，因此自动化调用公共 API 是最常见的自动化程序。例如，如果你需要给你家的花园实现自动化灌溉。

To do that, you want to check the weather of the current day to see whether you need to water or if there is rain incoming.
为此，你需要根据当天天气来决定是要浇水还是有雨要来。

### API Reverse Engineering
### API 的逆向工程

API reverse engineering-based automation is more common in actual bots and the "Bot Imposter" section of the chart in the "Ethical Considerations" section below.
// TODO 在实际的程序中，基于 API 逆向工程的自动化更为常见。机器人冒名顶替 在自动化道德中也有讨论。

By reverse-engineering an API, we understand the user flow of applications. One example could be the login into an online browser game.
通过对一个 API 进行逆向工程，我们可以了解一个应用的用户操作流程。例如登录一个网页游戏。

By understanding the login and authentication process, we can duplicate that behaviour with our own script. Then we can create our own interface to work with the application even though they don't provide it themselves.
通过理解登录和身份验证的逻辑，我们可以通过脚本来复制这一动作。然后即使他们不对外提供应用，我们也可以创建自己的接口来使用他们的应用。

Whatever approach you're aiming at, always consider whether it's legal or not.
无论你采用那种方法，请考虑一下它是否合法。

You don't want to get yourself into trouble, do you? 😁
你也不想惹麻烦，对吧？😁

## Ethical Considerations
## 道德考量

Some guy on GitHub once contacted me and told me this:
GitHub 上有个人联系到我说：

> “Likes and engagement are digital currency and you are devaluing them.”
> “点赞数和订阅数是数字货币，但是你在让他们贬值”

This stuck with me and made me question the tool I've built for exactly that purpose.
// TODO 这让我感到困惑，并开始质疑我构建应用的目的。

The fact that these interactions and the engagement can be automated and “faked” more and more leads to a distorted and broken social media system.
事实是，这些互动和点赞可以通过自动化的方式进行伪造，这种伪造越来越多，导致扭曲和破坏了社交媒体的价值。

People who produce valuable and good content are invisible to other users and advertisement companies if they don’t use bots and other engagement systems.
如果不使用机器人或者其他的点赞系统，用户和广告公司将看不到那些真正产出好内容创造价值的人

A friend of mine came up with the following association with Dante’s “Nine Circles of Hell” where with each step closer to becoming a social influencer you get less and less aware of how broken this whole system actually is.
我的一个朋友借助但丁《神曲》中《地狱篇》的“九层地狱”的情景，来向我解释随着你社会影响力的一步步扩大，你越来越难以意识到这个系统实际的破败之处。

I want to share this with you here since I think it's an extremely accurate representation of what I witnessed while actively working with Influencers with InstaPy.
我想和你分享这个观点，因为我认为这能非常准确的描述在我使用 InstaPy 工具与网红合作期间所看到的一切。

**Level 1: Limbo -** If you don’t bot at all  
**第一层：灵薄狱**

假如你不使用机器人。

**Level 2: Flirtation** \- When you manually like and follow as many people as you can to get them to follow you back / like your posts  
**第二层：纵欲**

当你手动的开始点赞和关注尽可能多的人，并让他们也点赞和关注你的文章。

**Level 3: Conspiracy** \- when you join a Telegram group to like and comment on 10 photos so the next 10 people will like and comment on your photo  
**第三层：暴食**

当你加入一个 Telegram 群，大家点赞并评论10张照片，那么接下来的10个人也会点赞并评论你的照片。

**Level 4: Infidelity** \- When you use a low-cost Virtual Assistant to like and follow on your behalf  
**第四层：贪婪**

当你使用低成本的虚拟助手帮你点赞和关注。

**Level 5: Lust -** When you use a bot to give likes, and don’t receive any likes back in return (but you don’t pay for it - for example, a Chrome extension)
**第五层：愤怒**  

当你使用机器人去点赞，但是没有任何点赞的回馈（但是你不用付费，例如 Chrome 游览器中的扩展程序）。

**Level 6: Promiscuity -** When you use a bot to Give 50+ likes to Get 50+ likes, but you don’t pay for it - for example, a Chrome extension  
**第六层：异端**

当你使用机器人给出50+个点赞并获得50+个点赞（但是你不用付费，例如 Chrome 游览器中的扩展程序）。

**Level 7: Avarice or Extreme Greed** \- When you use a bot to Like / Follow / Comment on between 200–700 photos, ignoring the chance of getting banned
**第七层：施暴**  

当你使用机器人点赞、关注、评论200-700张照片，并无视可能会被禁言。

**Level 8: Prostitution** \- When you pay an unknown 3rd party service to engage in automated reciprocal likes / follows for you, but they use your account to like / follow back  
**第八层：欺诈**

当你使用未知的第三方服务去自动的帮你获得点赞和关注，同时也用你的账号去点赞和关注别人。

**Level 9: Fraud / Heresy** \- When you buy followers and likes and try to sell yourself to brands as an influencer
**第九层：背叛者**

当你付费购买点赞和关注数，视图去包装自己成为一个网红。

The level of botting on social media is so prevalent that **if you don’t bot, you will be stuck in Level 1, Limbo**, with no follower growth and low engagement relative to your peers.
在社交媒体上面使用机器人非常常见，以致于**如果你不包装，你会被卡在第一层，灵薄狱**，相对于你的同行比起来你的关注人数没有增长，订阅量也低。

In economic theory, this is known as a **prisoner's dilemma and zero-sum game**. If I don’t bot and you bot, you win. If you don’t bot and I bot, I win. If no one bots, everyone wins. But since there is no incentive for everyone not to bot, everyone bots, so no one wins.
从经济型理论看，这叫**囚徒困境和零和博弈**。如果我不使用机器人，但是你使用机器人了，你就赢了。如果你没有使用机器人，我使用机器人了，我就赢了。如果我们都不使用机器人，那么我们就能共赢。但是对于没有使用机器人的人没有奖励，大家都在使用机器人，那么没有人会赢。

> Be aware of this and never forget the implications this whole tooling has on social media.
> 请关注这一点，不要忘记整个工具对社交媒体的影响。

![](https://www.freecodecamp.org/news/content/images/2020/07/spectrum-bot-intent-ebook.png)

Source: SignalSciences.com

We want to avoid dealing with ethical implications and still work on an automation project here. This is why we will create a simple directory clean-up script that helps you organise your messy folders.
我们想要规避道德伦理的问题，并继续开展一个自动化的项目。这就是我们为什么只是创建一个简单的目录整理脚本来帮祝你整理乱糟糟的文件。


## Creating a Directory Clean-Up Script
## 创建整理目录脚本

We now want to look at a quite simple script. It automatically cleans up a given directory by moving those files into according folders based on the file extension.
现在让我们来看一个非常简单的脚本。它会自动整理指定的目录，将其中的文件根据文件后缀名移动到对于的文件夹。

So all we want to do is this:
这是我们将要做的事情：

![](https://www.freecodecamp.org/news/content/images/2020/06/directory_clean_img.png)

### Setting up the Argument Parser
### 设置参数解析器

Since we are working with operating system functionality like moving files, we need to import the `os` library. In addition to that, we want to give the user some control over what folder is cleaned up. We will use the `argparse` library for this.
由于我们会用到操作系统的功能，比如移动文件，我们需要导入 `os` 库。除此之外，我们还希望用户能够控制整理能够文件夹，因此我们还会用 `argparse` 库。

```python
import os
import argparse
```

After importing the two libraries, let's first set up the argument parser. Make sure to give a description and a help text to each added argument to give valuable help to the user when they type `--help`.
导入了这两个库之后，我们首先要设置参数解析器。同时确保为每个参数添加对应的描述和帮助文本，以便用户在输入 `--help` 时提供帮助。

Our argument will be named `--path`. The double dashes in front of the name tell the library that this is an optional argument. By default we want to use the current directory, so set the default value to be `"."`.
我们的参数会被命名为 `--path`。 参数名前面的双破折号告诉库这是一个可选参数。默认情况下，我们使用当前目录，因此将默认值设为 `.`。

```python
parser = argparse.ArgumentParser(
    description="Clean up directory and put files into according folders."
)

parser.add_argument(
    "--path",
    type=str,
    default=".",
    help="Directory path of the to be cleaned directory",
)
# parse the arguments given by the user and extract the path
args = parser.parse_args()
path = args.path

```

This already finishes the argument parsing section – it's quite simple and readable, right?
这就完成了参数解析的部分，非常简单易读，对吧？

Let's execute our script and check for errors.
让我们执行一下脚本，检查是否有报错。

```bash
python directory_clean.py --path ./test

```

Once executed, we can see the directory name being printed to the console, perfect.  
Let's now use the `os` library to get the files of the given path.
一旦执行，我们可以在控制台中看到目录名称被打印出来，完美。

### Getting a list of files from the folder
### 从文件夹中获取文件列表

By using the `os.listdir(path)` method and providing it a valid path, we get a list of all the files and folders inside of that directory.
通过使用 `os.listdir(path)`，并提供一个有效的路径，我们就能获得该目录内所有文件和文件夹的列表。 

After listing all elements in the folder, we want to differentiate between files and folders since we don't want to clean up the folders, only the files.
在列出了文件夹内所有的元素后，我们需要对文件和文件夹进行区分，因为我们只需要整理文件而不是文件夹。

In this case, we use a Python list comprehension to iterate through all the elements and put them into the new lists if they meet the given requirement of being a file or folder.
在这种情况下，我们使用 Python 的列表来遍历所有元素，根据是文件还是文件夹的条件的条件将他们放到新的列表中。

```python
# get all files from given directory
# 获取目录中的所有文件
dir_content = os.listdir(path)
# create a relative path from the path to the file and the document name
# 根据文件和文档名创建相对路径
path_dir_content = [os.path.join(path, doc) for doc in dir_content]
# filter our directory content into a documents and folders list
# 
docs = [doc for doc in path_dir_content if os.path.isfile(doc)]
folders = [folder for folder in path_dir_content if os.path.isdir(folder)]
# counter to keep track of amount of moved files
# and list of already created folders to avoid multiple creations
moved = 0
created_folders = []

```

As always, let's make sure that our users get feedback. So add a print statement that gives the user an indication about how many files will be moved.

```bash
python directory_clean.py --path ./test

```

After re-executing the python script, we can now see that the `/test` folder I created contains 60 files that will be moved.

### Creating a folder for every file extension

The next and more important step now is to create the folder for each of the file extensions. We want to do this by going through all of our filtered files and if they have an extension for which there is no folder already, create one.

The `os` library helps us with more nice functionality like the splitting of the filetype and path of a given document, extracting the path itself and name of the document.

```python
# go through all files and move them into according folders
for doc in docs:
    # separte name from file extension
    full_doc_path, filetype = os.path.splitext(doc)
    doc_path = os.path.dirname(full_doc_path)
    doc_name = os.path.basename(full_doc_path)
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>filetype<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>full_doc_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>doc_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>doc_name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">break</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">The break statement at the end of the code above makes sure that our terminal does not get spammed if our directory contains dozens of files.</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">Once we've set this up, let's execute our script to see an output similar to this:</p><pre class=" language-bash" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: var(--gray85); background: var(--gray05); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-bash" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">python directory_clean.py --path ./test
```

We can now see that the implementation above splits off the filetype and then extracts the parts from the full path.

Since we have the filetype now, we can check if a folder with the name of this type already exists.

Before we do that, we want to make sure to skip a few files. If we use the current directory `"."` as the path, we need to avoid moving the python script itself. A simple if condition takes care of that.

In addition to that, we don't want to move [Hidden Files][5], so let's also include all files that start with a dot. The `.DS_Store` file on macOS is an example of a hidden file.

```python
    # skip this file when it is in the directory
    if doc_name == "directory_clean" or doc_name.startswith('.'):
        continue
<span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(112, 128, 144);"># get the subfolder name and create folder if not exist</span>
subfolder_path <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> os<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>join<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> filetype<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span><span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 0, 85);">1</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>lower<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> subfolder_path <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">not</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">in</span> folders<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(112, 128, 144);"># create the folder</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">Once we've taken care of the python script and hidden files, we can now move on to creating the folders on the system.</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">In addition to our check, if the folder already was there when we read the content of the directory, in the beginning, we need a way to track the folders we've already created. That was the reason we declared the<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15); word-break: break-all;">created_folders = []</code><span> </span>list. It will serve as the memory to track the names of folders.</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">To create a new folder, the<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15); word-break: break-all;">os</code><span> </span>library provides a method called<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15); word-break: break-all;">os.mkdir(folder_path)</code><span> </span>that takes a path and creates a folder with the given name there.</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">This method may throw an exception, telling us that the folder already exists. So let's also make sure to catch that error.</p><pre class=" language-python" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: var(--gray85); background: var(--gray05); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-python" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> subfolder_path <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">not</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">in</span> folders <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">and</span> subfolder_path <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">not</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">in</span> created_folders<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">try</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
        os<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>mkdir<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>subfolder_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
        created_folders<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>append<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>subfolder_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
        <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string-interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">f"Folder </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>subfolder_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);"> created."</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">except</span> FileExistsError <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">as</span> err<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
        <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string-interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">f"Folder already exists at </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>subfolder_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">... </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>err<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">"</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">After setting up the folder creation, let's re-execute our script.</p><pre class=" language-bash" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: var(--gray85); background: var(--gray05); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-bash" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">python directory_clean.py --path ./test
```

On the first run of execution, we can see a list of logs telling us that the folders with the given types of file extensions have been created.

### Moving each file into the right subfolder

The last step now is to actually move the files into their new parent folders.

An important thing to understand when working with os operations is that sometimes operations can not be undone. This is, for example, the case with deletion. So it makes sense to first only log out the behavior our script would achieve if we execute it.

This is why the `os.rename(...)` method has been commented here.

```python
# get the new folder path and move the file
    new_doc_path = os.path.join(subfolder_path, doc_name) + filetype
    # os.rename(doc, new_doc_path)
    moved += 1
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string-interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">f"Moved file </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>doc<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);"> to </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>new_doc_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">"</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">After executing our script and seeing the correct logging, we can now remove the comment hash before our<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15); word-break: break-all;">os.rename()</code><span> </span>method and give it a final go.</p><pre class=" language-python" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: var(--gray85); background: var(--gray05); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-python" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(112, 128, 144);"># get the new folder path and move the file</span>
new_doc_path <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> os<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>join<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>subfolder_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> doc_name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span> filetype
os<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>rename<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>doc<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> new_doc_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
moved <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">+=</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 0, 85);">1</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string-interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">f"Moved file </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>doc<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);"> to </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>new_doc_path<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">"</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

```bash
python directory_clean.py --path ./test

```

This final execution will now move all the files into their appropriate folders and our directory will be nicely cleaned up without the need for manual actions.

In the next step, we could now use the script we created above and, for example, schedule it to execute every Monday to clean up our Downloads folder for more structure.

**That is exactly what we are creating as a follow-up inside of [our Bot Creation and Workflow Automation Udemy course][6].**

## [A Complete Guide to Bot Creation and Automating Your Everyday Work][7]

Felix and I built an **online video course to teach you how to create your own bots** based on what we've learned building **InstaPy** and his **Travian-Bot**. In fact, he **was even forced to take down since it was too effective.**

[1]: https://www.freecodecamp.org/news/building-bots/#areas-of-automation-and-where-to-start
[2]: https://www.freecodecamp.org/news/building-bots/#ethical-considerations
[3]: https://www.freecodecamp.org/news/building-bots/#creating-a-directory-clean-up-script
[4]: https://www.freecodecamp.org/news/building-bots/#a-complete-guide-to-bot-creation-and-automating-your-everyday-work
[5]: https://www.lifewire.com/what-is-a-hidden-file-2625898
[6]: https://www.udemy.com/course/the-complete-guide-to-bot-creation/?referralCode=7418EBB47E11E34D86C9
[7]: https://www.udemy.com/course/the-complete-guide-to-bot-creation/?referralCode=7418EBB47E11E34D86C9
