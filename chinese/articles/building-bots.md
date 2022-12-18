> -   原文地址：[How to Build a Bot and Automate your Everyday Work Python 基础教程：这个自动化程序让你的工作更高效](https://www.freecodecamp.org/news/building-bots/)
> -   作者：Tim Grossmann
> -   译者：pjwok
> -   校对者：

![自动化你的日常工作](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/freecodecamp_cover.png)

很多日常工作可以通过自动化的方式来帮你节省一点宝贵的时间。这也使得掌握自动化技术成为关键。

只需要一小部分熟练的自动化工程师和领域专家就有可能将整个团队中的最繁琐的工作实现自动化。

在这篇文章中，我们将探讨基于 Python（一种强大的且简单易学的编程语言）来实现自动化工作流程的一些基础知识。我们将使用 Python 来编写一个简单有用的小型自动化脚本，这个脚本能够整理指定文件夹中的文件，并将其放到对应的文件夹中。

我们的目标不是在一开始就编写完美的代码以及构建一套理想的自动化体系。

当然我们也不会创建任何“非法”的脚本。相反的，我们将研究如何创建一个能够自动整理文件夹内容的脚本。

# 目录

1.  [自动化的领域][1]
    -   简单的自动化
    -   公共 API（Application Program Interface 应用程序接口）的自动化
    -   API 的逆向工程
1.  [自动化的道德考量][2]
1.  [创建整理文件夹脚本][3]
1.  [一份自动化程序的完整指南][4]

## 自动化的领域

让我们从定义哪种类型的自动化开始。

自动化技术适用于大多数领域。从初级的，它可以帮你从一堆文档中提取邮箱地址，这样你就可以群发邮件了。到复杂一点的，优化大型公司的内部工作流程。

当然，从小型的个人脚本到可以替代人工的大型自动化系统，这中间需要一个学习的过程。所以让我们来看看你适合从哪个领域开始自动化之旅。

### 简单的自动化

直接针对工作中的某一点流程实现简单的自动化。这其中可以是某些小型的独立的步骤，例如整理项目并重新编排目录中的文件，也可以是整个工作流程中一部分，例如自动调整已经保存文件的大小。

### 公共 API 的自动化

现如今我们可以通过 HTTP（Hypertext transfer protocol 超文本传输协议）请求对应的 API 来实现绝大部分程序的功能，因此自动调用公共 API 是最常见的自动化程序。例如，如果你需要给你家的花园实现自动化灌溉。

为此，你需要根据当天天气来决定是要浇水还是有雨要来。

### API 的逆向工程

在实际的程序中，基于 API 逆向工程的自动化程序更为常见。在下文的“自动化的道德考量”中也会探讨机器人冒名顶替真是人类的问题

通过对一个 API 进行逆向工程，我们可以了解用户在某个应用中的操作流程。例如登录一个网页游戏的步骤。

通过理解登录和身份验证的逻辑，我们可以使用脚本来复制这一动作。然后即使他们不对外提供应用界面，我们也可以创建自己的接口脚本来使用他们的应用。

无论你是出什么目的，请考虑一下它是否合法。

你也不想惹麻烦，对吧？😁

## 道德考量

GitHub 上有个人联系到我说：

> “点赞数和订阅数就是数字时代的货币，但是你们正在让它贬值。”

This stuck with me and made me question the tool I've built for exactly that purpose.
我一直思考着这个问题，并开始质疑我构建程序真正的目的是什么。

事实是，这些互动和点赞可以通过自动化的方式进行伪造，这种伪造越来越多，导致扭曲和破坏了社交媒体的正常运行。

如果不使用机器人或者其他的刷赞系统，用户和广告公司将看不到那些真正产出好内容并创造价值的人

我的一个朋友借助但丁《神曲》中《地狱篇》的“九层地狱”的情景，来向我解释随着你社会影响力的一步步扩大，你越来越难以意识到这个系统实际的破败之处。

我想和你分享这个观点，因为我认为这能非常准确的描述在我使用 InstaPy 工具与网红合作期间所看到的一切。

**第一层：灵薄狱**

假如你不使用机器人。

**第二层：纵欲**

当你手动的开始点赞和关注尽可能多的人，并让他们也点赞和关注你的文章。

**第三层：暴食**

当你加入一个 Telegram 群，大家点赞并评论 10 张照片，那么接下来的 10 个人也会点赞并评论你的照片。

**第四层：贪婪**

当你使用低成本的虚拟助手帮你点赞和关注。

**第五层：愤怒**

当你使用机器人去点赞，但是没有任何点赞的回馈（但是你不用付费，例如 Chrome 游览器中的扩展程序）。

**第六层：异端**

当你使用机器人给出 50+个点赞并获得 50+个点赞（但是你不用付费，例如 Chrome 游览器中的扩展程序）。

**第七层：施暴**

当你使用机器人点赞、关注、评论 200-700 张照片，并无视禁言的警告。

**第八层：欺诈**

当你付费给未知的第三方服务去自动的帮你获得点赞和关注，同时也用你的账号去点赞和关注别人。

**第九层：背叛者**

当你付费购买点赞和关注数，试图去包装自己成为一个网红。

在社交媒体上面使用机器人非常常见，以致于**如果你不包装，你会被卡在第一层，即灵薄狱**，与你的同行比起来你的关注人数没有增长，订阅量也低。

从经济型理论看，这叫**囚徒困境和零和博弈**。如果我不使用机器人，但是你用了，你就赢了。如果你没有用，但我用了，我就赢了。如果我们都不用，那么我们就能共赢。但是对于那些没有使用机器人的人是没有奖励的，大家就都在用，那么没有人会赢。

> 请警惕这点，不要忘记整个工具对社交媒体的影响。

![](https://www.freecodecamp.org/news/content/images/2020/07/spectrum-bot-intent-ebook.png)

来源：SignalSciences.com

我们希望规避道德问题，并继续开展一个自动化的项目。这就是我们为什么只是创建一个简单的目录整理脚本来帮祝你整理乱糟糟的文件。

## 创建整理目录脚本

现在让我们来看一个非常简单的脚本。它会自动整理指定的目录，将其中的文件根据文件后缀名移动到对于的文件夹。

下图就是我们将要做的事情：

![](https://www.freecodecamp.org/news/content/images/2020/06/directory_clean_img.png)

### 设置参数解析器

由于我们会用到操作系统的功能，比如移动文件，所以我们需要导入 `os` 库。除此之外，我们还希望用户能够控制要整理的文件夹，因此我们还会用到 `argparse` 库。

```python
import os
import argparse
```

导入了这两个库之后，我们首先要设置参数解析器。确保为每个参数有对应的描述和帮助文本，以便用户在输入 `--help` 时得到帮助。

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
# 解析用户提供的path参数的值
args = parser.parse_args()
path = args.path

print(f"Cleaning up directory {path}")
```

这就完成了参数解析的部分，非常简单易读，对吧？

让我们执行一下脚本，检查是否有报错。

```bash
python directory_clean.py --path ./test

=> Cleaning up directory ./test

```

一旦执行，我们可以在控制台中看到目录名称被打印出来，完美。

现在让我们来使用 `os` 库来获取给定路径下的文件。

### 从文件夹中获取文件列表

通过给 `os.listdir(path)` 方法提供一个有效的路径，我们就能获得该目录内所有文件和文件夹的列表。

在列出了文件夹内所有的元素后，我们需要对文件和文件夹进行区分，因为我们只需要整理文件而不是文件夹。

我们使用 Python 的列表来遍历所有元素，根据是否满足是文件还是文件夹的条件将他们放到新的列表中。

```python
# 获取目录中的所有文件
dir_content = os.listdir(path)
# 根据文件和文件名创建相对路径
path_dir_content = [os.path.join(path, doc) for doc in dir_content]
# 过滤目录内容到文档或文件夹列表
docs = [doc for doc in path_dir_content if os.path.isfile(doc)]
folders = [folder for folder in path_dir_content if os.path.isdir(folder)]
# 记录文件移动的数量
# 列出已经创建的文件夹以免出现重复
moved = 0
created_folders = []

print(f"Cleaning up {len(docs)} of {len(dir_content)} elements.")
```

和之前一样，让我们确保用户能够得到反馈。所以需要打印一个告知用户多少文件被移动的信息。

```bash
python directory_clean.py --path ./test

=> Cleaning up directory ./test
=> Cleaning up 60 of 60 elements.
```

当我们再次执行 python 脚本之后，我们可以看到在 `/test` 文件夹下将会出现 60 个被移动的文件。

### 根据文件后缀名创建文件夹

接下来也是最重要的一步是根据每个文件的后缀名创建文件夹。我们希望通过遍历所有已经过滤好的文件，如果没有创建对应后缀名的文件夹，就创建一个。

`os` 库能给我们提供非常友好的功能，例如拆分给定文件的类型和路径，提取文件路径和文件名。

```python
# 遍历所有的文件，并移动到对应的文件夹中
for doc in docs:
    # 提取文件后缀名
    full_doc_path, filetype = os.path.splitext(doc)
    doc_path = os.path.dirname(full_doc_path)
    doc_name = os.path.basename(full_doc_path)

    print(filetype)
    print(full_doc_path)
    print(doc_path)
    print(doc_name)

    break
```

如果我们的目录包含成堆的文件，那么上面代码末尾的 break 语句用于确保我们的终端不会列满所有的文件信息。

我们设置好这一步之后，让我们执行一下脚本，看到的内容可能类似这样的：

```python
python directory_clean.py --path ./test

=> ...
=> .pdf
=> ./test/test17
=> ./test
=> test17
```

我们可以通过上面的实现，分离文件类型，然后从完整路径中提取部分内容。

现在我们有了文件类型，我们就能检查拥有这个文件类型的同名文件夹是否已经存在。

在开始这一步之前，我们需要跳过一些文件。如果我们使用当前目录 `.` 作为路径，我们需要避免 python 脚本也被移动。可以通过一个简单的 if 条件语句来解决这个问题。

另外，我们也不希望移动[隐藏文件][5]，所有 `.` 开头的文件也要跳过。 macOS 上的 `.DS_Store` 就是一个例子。

```python
    # 当在目录中存在 名为 directory_clean 的文件或 . 开头的文件在时跳过
    if doc_name == "directory_clean" or doc_name.startswith('.'):
        continue
    # 获得子文件夹的名称，创建其中不存在的文件夹名
    subfolder_path = os.path.join(path, filetype[1:].lower())

    if subfolder_path not in folders:
        # 创建文件夹

```

处理完 python 脚本路径和隐藏文件后，我们可以继续在系统中创建文件夹了。

除了我们的判断之外，如果一开始读取目录时发现同名文件夹已经存在，我们需要一种能够检测已创建文件夹的方法。这就是我们要声明数组变量 `create_folders = []` 的原因。它将用来存储已被检测过的文件名。

`os` 库中提供了一个 `os.mkdir(folder_path)` 的方法用于根据路径创建新文件夹。

这个方法可能会抛出异常，告诉我们文件夹已经存在。所以我们需要确保异常被捕获。

```python
if subfolder_path not in folders and subfolder_path not in created_folders:
    try:
        os.mkdir(subfolder_path)
        created_folders.append(subfolder_path)
        print(f"Folder {subfolder_path} created.")
    except FileExistsError as err:
        print(f"Folder already exists at {subfolder_path}... {err}")

```

在编写完创建文件夹的代码后，让我们重新运行一遍脚本。

```python
python directory_clean.py --path ./test 

=> ...
=> Folder ./test/pdf created.
```

在第一次执行时，我们从日志列表看到，我们已经创建了以文件后缀名命名的文件夹。


最后一步就是移动文件到它们对应的父文件夹中。

当使用 `os` 库时需要明白的最重要的一点是，有些操作无法撤销。例如，删除文件的情况。因此，在执行脚本前我们需要先注释掉部分内容

这也是为什么我们的 `os.rename(...)` 方法会在这里被注释掉。

```python
# 获取新文件路径，移动文件
    new_doc_path = os.path.join(subfolder_path, doc_name) + filetype
    # os.rename(doc, new_doc_path)
    moved += 1

    print(f"Moved file {doc} to {new_doc_path}")
```

运行完我们的脚本并看到正确的日志之后，我们可以撤销 `os.rename()` 方法的注释，并最终写成这样的。

```python
# 获取新文件路径，移动文件
    new_doc_path = os.path.join(subfolder_path, doc_name) + filetype
    os.rename(doc, new_doc_path)
    moved += 1

    print(f"Moved file {doc} to {new_doc_path}")

print(f"Renamed {moved} of {len(docs)} files.")
```

```bash
python directory_clean.py --path ./test

=> ...
=> Moved file ./test/test17.pdf to ./test/pdf/test17.pdf
=> ...
=> Renamed 60 of 60 files.
```

最后的这个运行结果会将所有文件移动到对应的文件夹中，我们的目录不需要手动操作也能很好的被整理。

下一步，我们可以利用我们上面创建好的脚本去做更多是事情，例如，安排脚本在每个星期一定时清理 Downloads 文件夹，以便让其看起来更整洁有序。

**这也是我们在 Udemy 中创建的名为[创建自动化程序][6]的后续课程**
## [一份完整的日常自动化程序指南][7]

Felix 和我在学习 **InstaPy** 库和他的 **Travian-Bot** 库的基础上创建了一个**教你如何创建自己的机器人**的在线视频。实际上，他也因为这个库太火爆导致想关闭这个项目。

[1]: https://www.freecodecamp.org/news/building-bots/#areas-of-automation-and-where-to-start
[2]: https://www.freecodecamp.org/news/building-bots/#ethical-considerations
[3]: https://www.freecodecamp.org/news/building-bots/#creating-a-directory-clean-up-script
[4]: https://www.freecodecamp.org/news/building-bots/#a-complete-guide-to-bot-creation-and-automating-your-everyday-work
[5]: https://www.lifewire.com/what-is-a-hidden-file-2625898
[6]: https://www.udemy.com/course/the-complete-guide-to-bot-creation/?referralCode=7418EBB47E11E34D86C9
[7]: https://www.udemy.com/course/the-complete-guide-to-bot-creation/?referralCode=7418EBB47E11E34D86C9
