> -  原文地址：[How to Write Your First Technical Book: Tools, Techniques, and Resources for First-time Developer Authors](https://www.freecodecamp.org/news/how-to-write-your-first-technical-book/)
> -  原文作者：[Shubham Chadokar](https://www.freecodecamp.org/news/author/schadokar/)
> -  译者：Narcissus91
> -  校对者：

![开发人员如何写自己的第一本技术类书籍——工具、技术和资源](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/writing-cover.jpg)

最近，我写完了我的第一本技术类书籍——是的，我终于写完了。？

写书这件事已经躺在我的待办事项清单里很久了。现在我终于把它完成了，想要跟大家分享一下我的经验。

在这篇帖子里，我会尽量记录我的整个写作历程。所有我都会谈到，包括我的动机、遇到的难关以及用到的工具、技术和资源。

我的书重点讲的是[Hyperledger Composer区块链](https://schadokar.dev/ebooks/)工具。这个工具是完全免费的，目前仅支持PDF格式。

帖子里提到的所有要点也同样有助于技术博客写作。所以，咱们开始吧，一起深入了解我到底学到了什么。

# 动机

从2018年年底我就开始写技术文章和教程了。到现在，我已经对写文章或教程的流程得心应手了。我知道自己该如何写好一篇文章，以及应该使用哪种工具来写作。

但，如果说到写一本书—尤其是技术书—这是很不同以往的。

我写这本书的动机是好奇心。我想知道那些作者是如何写书的。他们的思考过程是怎样的？他们会用到什么工具？当然，我还想知道写一本书是什么样的体验？？

我是一名软件工程师，从2018年起我就一直从事区块链相关工作。我了解过不同的区块链，比如Ethereum和Hyperledger Fabric。我也用过很多工具，比如[truffle](https://www.trufflesuite.com/)、[remix](https://remix.ethereum.org/)和[hyperledger composer](https://hyperledger.github.io/composer/)。

有好多不同的东西我都想写，像**Ethereum**或者**Hyperledger Fabric**。

但因为这是我的第一本书，这些主题对我来说都不太适合。它们会占据我过多的时间和精力。所以，我选择了一个简单的主题：Hyperledger Composer。

# 第一道难关

在开始之前，我犹豫该用哪种工具或编辑器来写书。

我应该用Word、Google Docs还是其它什么工具呢？ 
主要的问题是如何正确排版代码片段。这些编辑器都不是为技术写作设计的。

有不同的添加代码方法，但那需要额外的排版工作。

我读了很多关于**有哪些技术书籍写作工具好用**的文章。我试用了很多工具，但都没有让我满意的。我浪费了很多时间去寻找完美的工具。

最后，我意识到，编辑器只是让写作过程更简便，让书籍管理更简化。但真正重要的是内容。所以，我不再寻找完美的编辑器，而是转向了基础的工具。

## 基础工具：VS Code

我用我最喜欢的代码编辑器来写书。是的，**VS Code**？。

我花了几天时间在网上搜索，没有一篇文章建议说你需要任何特定的工具或编辑器来写技术书籍。VS Code或者Atom就足够了。

我在**VS Code**里用我最喜欢的Markdown格式写完了整本书。为了让写作更容易，我用到了一些Markdown插件，比如：**Markdown All in One**和**Markdown Preview Enhanced**。

第一个插件帮助写作，第二个插件帮助预览。可以看到Markdown转换为HTML或其它格式后是什么样子，以及会有什么变化。

**Markdown All in One**也有预览模式，但**Markdown Preview Enhanced**有多个主题和选项，可以将Markdown文件以HTML、PDF和其它可读格式如epub或Mobi导出。

提醒一下—想导出其它文档格式需要你在电脑上安装**Pandoc**。

> 我是Windows系统用户，对于Mac系统用户，我发现还可以选择很多很棒的编辑器，比如[bear](https://bear.app/)和[ulysses](https://ulysses.app/)等等。

最近，我发现了很多在**Windows系统**和**MacOS系统**都能用来写书的Markdown编辑器。搜一搜[Notion](https://www.notion.so/)、[Typora](https://typora.io/)、[iA Writer](https://ia.net/writer)和[SimpleNote](https://simplenote.com/)。

划重点：**不要浪费太多时间去寻找完美的编辑器**。选择了一款编辑器就开始写作。慢慢你就会懂得的。

# 第二道难关

然后，我开始问自己，我应该从哪儿开始写呢？我应该怎么写呢？我应该怎么做呢？

简而言之，我想知道我到底该如何写这本书，这样读者就能从书中得到最大的收获。

这些问题让我抓耳挠腮了很久。一开始，我改了有4、5次办法。

在这一点上，我的建议是花一点时间真正思考你的方法。因为一旦你写到中途，想要做更改就不容易了。

### 问问题

关于这本书，我问了自己这些问题，并记下了我的想法。

1.  我的目标读者是谁？他们是小白、中级选手还是大神？
2.  他们需要一些主题背景知识吗？
3.  我该如何组织这本书？
4.  我该如何为文件或者章节命名，便于查找每个主题？
5.  我该如何跟踪自己的进展？
6.  我该如何维护书中各章节和草稿的版本？很多时候，上一版内容其实比当前版本好得多。

以上就是我问自己的一些基本问题，这些问题很有用。

## 我的方法

现在我要讲讲我在写这本书时用到的方法。

### 创建一个待办事项清单（to-do list）

首先，我建了一个待办事项清单。在清单上我记下了所有的要点、主题、副主题、参考文献、序言、封面、书名等等。

我把所有想到的关于这本书的想法都尽可能加到清单里。

我建议创建2份同样的待办事项清单：一份纸质档，一份电子档。

首先，在纸上记下所有要点。所有内容都记下后，再阅读2至3遍。然后，不管脑子里闪现什么新的点子，都记到纸上。

例如，如果你想到了将如何解释某个特殊的主题，就把想法记下来。这会让你的写作变得更容易。后面在你开始写这个主题时，你就可以参考这些笔记。

有了纸质版**待办事项**清单后，你就再创建一个电子版，并按时间顺序保存所有要点。

这就是我以前做的**待办事项** 清单：

#### 任务

-   \[x\] 索引
-   \[x\] 封面
-   \[x\] 标题
-   \[x\] 副标题
-   \[x\] 前言
-   \[x\] 什么是Blockchain和Hyperledger Fabric？
-   \[x\] 介绍Hyperledger Composer
-   \[x\] 环境要求和设置
    -   \[x\] Azure
    -   \[x\] AWS
    -   \[x\] GCP
-   \[x\] 项目目标
-   \[x\] Composer中的项目设置
-   \[x\] 模型文件
    -   \[x\] 定义
    -   \[x\] 建模语言
    -   \[x\] 项目代码
-   \[x\] 脚本文件
    -   \[x\] 定义
    -   \[x\] 语法
    -   \[x\] 项目代码
-   \[x\] 查询文件
    -   \[x\] 定义
    -   \[x\] 查询语言
    -   \[x\] 项目代码
-   \[x\] ACL文件
    -   \[x\] 定义
    -   \[x\] 语法
    -   \[x\] 项目代码
-   \[x\] 在Composer Playground中部署
-   \[x\] 在Composer Playground中测试
-   \[x\] 导出.bna
-   \[x\] Composer Rest服务器
-   \[x\] 前端
-   \[x\] 总结
-   \[x\] 参考文献
-   \[x\] 关于我
-   \[x\] 一查语法
-   \[x\] 复查语法
-   \[x\] 阅读草稿
-   \[x\] 阅读最后的草稿
-   \[x\] PDF格式
-   \[x\] 在PDF中添加页码
-   \[x\] 新章节另起一页
-   \[x\] 感谢信
-   \[x\] 许可协议
-   \[x\] 封底

我是用的Markdown格式写的**待办事项**你可以选择任何自己觉得最方便的格式来写。

## 从小处着手，但一定要开始

记住，你不必按顺序写每个主题。有很多主题可能要依赖于之前的主题，但其余主题并不依赖。

另外，你也不必一次性写完所有主题。哪个主题你觉得写来顺畅，就从哪个主题开始写。

你的目标应该是开始行动起来写书。计划在几周内写10%-20%的量。一旦开始了，就会有声音不断提醒你，你必须写完这本书。久而久之，你就会发现，这变成了一个巨大的动力。

如果主题不熟悉，不用担心。尽管去互联网上寻求帮助。读一读别人是怎么阐述的，从中获得灵感，然后用你自己的方式写出来。

请记住—如果你要使用他人作品中的任何内容，一定要通知原作者。在你的书里做适当引用，并在最后的参考文献中，列出原作者的作品。

> 将此视为一种专业的礼节。--约翰威克？

## 编排顺序

我花了一段时间才懂得文件命名规范的重要性。

最开始，每个主题我都用 _第一章_、_第二章_ 这种命名规范来命名。结果发现这种方式很糟糕。

这种命名方案的问题是你必须维护一个单独的说明性文件。或者你必须打开每个文件来确认里面写的是什么。

另一个问题是如果你在章节之间新增了一个章节，你就不得不给后面所有的章节重新命名。

我发现了2种有用的命名规范，但也各有缺点。

一种选择是使用**章节编号-主题**：文件命名为一个章节编号跟上该章节的主题。比如这样**第10章-区块链介绍**。

章节编号用2位数。这有助于在不同文件中为同一章节增加子章节。比如这样**第11章-区块链的历史**。

这种命名方式的另一个好处是它将按你书籍章节的顺序显示所有文件。

**缺点：** 在章节之间新增一个章节时，你需要给后面所有的章节重新命名。

第二个选择是使用**文件名作为主题**：将所有文件以主题名命名。这样你可以按任意顺序写主题。而且你可以保持书中的顺序与你待办事项清单中的顺序一致。

**缺点：** 所有文件都将按字母顺序排列。文件数达10至15个之后，就会变得难以追踪所有文件，而且也更难将这些文件组合在一起形成草稿。

最后，我选择了第二种方式。对我来说还效果还不错。

为了创建草稿，我创建了一个Node.js脚本。在这个脚本里，我将所有主题输入一个数组中。然后我创建了一个草稿文件，并在其中追加了所有主题。当然，要先通过阅读主题？。作为一名软件工程师的一些优势？

这个脚本是我编辑时的一个救星。很多次，我都是在脚本里更新主题或图片，以及修改语法错误。这里要说Grammarly（译者注：Grammarly是一种在线语法纠正和校对工具）真的拯救了我……但并没能完全拯救，因为我用的是免费版。？

## 书籍之旅记录

写书不是一场短跑赛，而是一场马拉松。每当写完一个主题或完成当日写作时，总要记得保存。

第二天，你可能会对已完成的同一主题产生新的想法。你可能会花上一个小时都不能得到满意结果。这个时候，好的做法是撤销还原（UNDO）。但编辑器也有撤销次数极限（不同的编辑器极限各有不同）。 **不要过多测试它的极限**。

我用**Git**来做版本控制，而不是依赖编辑器或制作重复的副本。不要以为**Git**只能用来管理代码。它是一个多功能的工具，它的可应用范围超乎你的想象。

对于不知道**Git**是什么的读者可看以下释义：

> Git是一个分布式版本控制系统，用于记录软件开发过程中的源码变更。Git为程序员之间协同工作而设计，但也能用于记录所有文件变更。--[维基百科](https://en.wikipedia.org/wiki/Git)

你不必等学完**Git**的一切才开始用它来写作。掌握基础的命令，如**init**、**add**、**commit**、**logs**和**checkout**就远远足够你维护文档版本以及保证文本的可访问性和安全性了。

可用的Git代码托管平台有很多，比如：[GitHub](https://github.com/)和[GitLab](https://about.gitlab.com/) 等。要将你的书籍托管在这些平台上，可采用以下步骤：

1.  创建一个账号。我个人选择的是用**GitHub**平台。
2.  创建一个私人仓库，保持默认选项。你可以在将来把这个仓库可见性设置为公共。
3.  仓库创建完毕后，根据提示进行操作。基本上，这一步是将你本地**Git**连接到你的托管仓库。
4.  再学习2条命令：**push**和**pull**。**push**命令是将本地变更上传至云仓库，**pull**命令是从云端获取内容。

之后，无论何时你做任何变更，只需**add**、**commit**和**push**3条命令搞定。是不是很简单？？

提交几次之后，你就会对**Git**运用自如了。

> 阅读这篇精彩文章[一小时掌握Git和版本控制](https://www.freecodecamp.org/news/learn-git-and-version-control-in-an-hour/)，学习更多Git知识。

# 我用到的工具和资源

在写作、编辑、排版和设计这本书时，我用过许多工具和资源。

## 写作

对于写作，如我前文所述，我用的是VS Code编辑器和几个Markdown插件。

表情符号，我用的是[复制粘贴emojis](https://getemoji.com/)。

## 编辑

我用的是免费版Grammarly来纠正语法错误。免费版可以纠正所有的基础错误，比如错误的或遗漏的冠词、介词、逗号等等。

我用的是[在线PDF编辑器](https://www.ilovepdf.com/add_pdf_page_number) 给书籍添加页码。

## 排版

在VS Code中，我用Preview插件将Markdown生成PDF格式。我用的是默认的Git Markdown样式，你也可以在设置里更改样式。

### PDF中的分页符

因为我是用Markdown格式进行写作的，在输出为PDF格式时会产生差异。比如，新建的主题是接着上一页排版的，而没有另起一页。

为解决这个问题，我在每个主题最后都使用了用于分页的HTML代码。

```html
<div style="page-break-after:always;"></div>
```

这个代码可以让其后的内容另起一页。 
你也可以添加页面序列的结尾，像这样\***\*\*\*\***。

```html
<div style="page-break-after:always; display:block; text-align:center; border:none">*****</div>
```

### 关于我的页面

在我的书中 **关于我**部分，我把内容分为了两栏：一栏是关于我的简介，另一栏是一张个人照片。

我花了一段时间才了解Markdown格式的全部功能。我们可以在Markdown里添加普通的`html`代码。下面是我的 "关于我 "页面的内容：

```html
<div >
  <img align="right" style="padding-left:65px" src="../images/profilepic.JPEG" width="400px" height="450px" />
</div>

Hello, I am **_Shubham Kumar Chadokar_**.

I am a Software Engineer and in my short career of almost 4 years, I've had the opportunity to work on Blockchain, Nodejs, Golang, and Docker.

I've learned about other tech as well, but these are my primary focus. I love to write articles and tutorials on new tech by following a hands-on approach. This is my first book.

Front end development isn't my specialty, and that's why I didn't include it in the book.

If you have any queries or questions, please feel free to drop me an email.

:e-mail: [hello@schadokar.dev](hello@schadokar.dev)
:globe_with_meridians: [schadokar.dev](https://schadokar.dev)
<img src="https://github.githubassets.com/images/icons/emoji/octocat.png" style="width:20px;" />[github.com/schadokar](https://github.com/schadokar)
```

对于Octocat（译者注：GitHub的吉祥物章鱼猫），我用的是`img`标签。

看起来像这样。

![about-me-3](https://www.freecodecamp.org/news/content/images/2020/09/about-me-3.PNG)

### 感谢页

我添加了一个感谢页，以此感谢**Hyperledger Composer社区**的工作付出。我试着将内容加在页面中间位置。

```html
<div style="padding-top:40%; text-align: center; font-size:35px;">
Thank You <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/person-with-folded-hands_1f64f.png" style="width:40px" />
</div>
<div style="text-align: center; font-size:25px;">
I especially want to thanks the entire
<a href="https://github.com/hyperledger/composer/graphs/contributors">Hyperledger Composer Community</a> for creating such
an amazing tool. Many developers entered into the blockchain domain because of the simplicity of the composer. <br />
It is unfortunate that it is deprecated but it sets a great example of easy automation,
wrapping a complex Hyperledger Fabric into the easy to use Hyperledger Composer.
</div>
```

看起来像这样。

![thanks-note](https://www.freecodecamp.org/news/content/images/2020/09/thanks-note.PNG)

## 书的标题和副标题

书的标题应该用几个词或一个短句就表明书的内容。

在写书的时候，记下你使用的所有关键词。这将有助于你想出一个好标题。你要抓住这本书的本质，并让读者也知道，例如，它是偏理论性的还是偏实践性的。

副标题应该向读者提供更多细节，让读者知道自己将从书中获得什么或者他们即将学到什么。

副标题用一句话是合适的，不应超过两句。不要过长—让读者自己阅读书里的内容。副标题的目的是让读者通过一句话了解整本书的格调，但仍觉语意未尽？。

我的书的标题是 **《玩转Hyperledger Composer》**，副标题是 **《使用Hyperledger Composer在区块链中创建一个供应链管理项目》**。

在开始写书时，不要花太多时间在书的标题上。当你写完了，你能站在一个更好的视角去想标题。所有内容都写完了，你知道写了些什么，读者能从中收获什么。

就我而言，我在书籍出版前的最后一秒更改了书的标题和封面。在这之前，它是如此的无聊？。

## 设计书籍封面

你可能听说过习语**不要以封面评价一本书（不要以貌取人）**。 
但残酷的现实是，一本书的封面非常重要。它是一本书的脸。

封面尽量保持简单且信息翔实。不要过度设计。一个简单的标题和一个简短的副标题加上一两张图片就足够了。

我开始设计书的封面时，参考了其他书，并试着Paint中进行编辑。结果完全是一场灾难，我想不出什么好的设计了。

然后我意识到，设计不是我的长处。我决定找一个自由职业者来做这件事，所以我查看了**UpWork**和**Fiverr**等自由职业网站。

然后，我发现了[**Canva**](https://canva.com)。这真是一个很棒的工具。太神奇了！？? ? ? ?

> Canva是一个图形设计平台，支持用户创建社交媒体图形、演示文稿、海报和其他视觉内容。它可以在网页端和移动端使用，并集成了数百万张图片、字体、模板和插图。[维基百科](https://en.wikipedia.org/wiki/Canva)

我通过Canva上书籍封面版块中的一个模板，创建了我的书籍封面。还不错吧？？

![book-cover](https://www.freecodecamp.org/news/content/images/2020/09/book-cover.png)

## 许可协议

我写这本书是出于好奇心和乐趣。所以，我希望它是免费的，而且是开源的，但我不希望有人利用这本书来谋利。没有许可协议，就没有约束。

我搜索了一段时间，在StackOverflow上发现了一个关于免费许可协议的很好回答，即[知识共享版权许可协议（Creative Commons Licenses）](https://creativecommons.org/licenses/)。

> **知识共享基金会（Creative Commons）是一个非营利组织，帮助解决知识分享和创造力有关的法律困境，应对世界上（译者注：版权方面的）紧迫的挑战。**

他们会提供一个[表格](https://creativecommons.org/choose/)，表格上面会问几个与你想要申请的许可协议类型相关的问题。填写表格，然后就可以了，你的许可证就准备好了。你可以复制粘贴或通过嵌入的链接获得许可证。

![license](https://www.freecodecamp.org/news/content/images/2020/09/license.PNG)

# 出版你的书

可选的书籍出版方式有很多。你可以找一家出版社，把你的草稿送过去。如果他们想出版，你就可以着手处理然后与其达成协议。

达成协议后，出版社负责其它过程，比如书籍的排版和编辑、吸引人的书籍封面设计、所有的协议许可、出版过程，以及最重要的市场营销。

简而言之，如果你想通过你的书获得稿费，而且你期待一个好的收益，那么出版社是最佳选择。

另一个选择是自助出版。是的，我们可以自行出版自己的书。亚马逊的自行出版系统[Kindle Direct Publishing](https://kdp.amazon.com/en_US/)（KDP）提供了一个很好的平台。它是免费的，而且可以在全世界范围内出版书籍。

你将从每笔销售中获得70%的利润。KDP负责所有的出版过程。你只需将书籍写好、上传并排版。

你只需填写你想收取的价格，以及你的书和你自己的一些基本信息。你可以阅读他们的教程了解更多信息—他们的教程写得非常棒。

但我希望我的书是免费的，而且我没有耐心操作上述过程。所以，我并没有依靠任何第三方就自行出版了我的书。

我只是把书转换成PDF格式，并把它存在AWS S3 Bucket上，这样任何人都可以下载。然后我把这本书托管在我的网站上。简单吧。?

# 分享你的作品

完成你的杰作后，就该向世界展示它了。  
如果你没有与出版商合作，或者即使你有，你也必须推广自己的作品。

这些是我使用的几个平台，但你不必局限于这几个。

## 领英（LinkdeIn）

LinkedIn是一个专业平台，上面有许多技术领域不同专业的开发人员。凡是你能说得出来的职业，在LinkedIn上你也都能找到从事该职业的人。

与他们分享你的作品，并询问反馈。90%的可能你都会得到回复。我向Dan Selmon分享了我的书，他是Hyperledger Composer的一名贡献者。还有Srinivas Mahankali，他写了很多关于区块链的书。

他们都非常乐于助人，并给出了他们真诚的反馈。我很感谢Dan，他甚至提出会在他的社交网络LinkedIn和Twitter上分享我的书。?

## Reddit

Reddit是一个社区枢纽。你会发现这里有许多关于各种主题的活跃社区。你只需加入与你工作相关的社区，然后在那里分享你的作品。

你会发现Reddit上有很多活跃的成员，在这些群体中，他们并不羞于分享自己的观点。如果你的作品有提升空间，他们中的一些人可能会提供帮助。

_但在分享你的作品之前，请务必阅读指南。如果你违反了其中任何一条规则，他们将删除你的帖子_。

## 推特（Twitter）

推特不仅仅是一个人们分享自己观点的社交平台。所以不要低估它。

如果你喜欢事实和数字，可以看到：Twitter上有13亿多个账户，3.3亿月活跃用户，1.52亿日活跃用户，每天有5亿条推文。这个数字是很庞大的。

你只需要在有限的280个字符内，精心设计你的信息，选择合适的关键词，你就有可能接触到大量的受众。

## 博客

做一些研究，弄清楚哪些出版物或电子杂志会发布你图书类别的文章。与他们分享你的书中摘要和细节。

询问他们是否可以写一篇关于你的书籍的文章。或者你可以写一篇关于你的书的文章，然后把文章初稿发给他们。

还有很多其它的平台你也可以试一试————只要你去深入了解一下。

# 总结

这就是我第一次写书的经历。写书花了一些时间，但是值得的。现在，我的作品集上又多了一个徽章。?

我从这次经历中学到了很多东西。这篇文章可以作为我所有学习的记录，供任何想写第一本书或下一本书的人参考。

下面是到目前为止我用过的工具最终清单。  
若有我未列出的工具，也欢迎你推荐。

谢谢你的阅读，别忘了与我分享你的第一本书。?

# 我所使用工具的最终清单

-   **编辑器**：[Visual Studio Code](https://code.visualstudio.com/)及2个Markdown插件
-   **版本控制工具**：Git和[GitHub](https://github.com)
-   **表情符号**：[复制粘贴emojis](https://getemoji.com/)
-   **语法检查**：[Grammarly](https://app.grammarly.com/)
-   **许可协议**：[Creative Commons Licenses](https://creativecommons.org/licenses/)
-   **封面设计**：[Canva](https://www.canva.com/)
-   **PDF页码编辑器**：[在线PDF编辑器](https://www.ilovepdf.com/add_pdf_page_number)
-   **电子书存储**：[AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html).
-   **书籍托管**：[我的博客](https://schadokar.dev/ebooks/)

## 感谢你的阅读

如果你有任何反馈或建议帮助我改进这篇文章，请在[推特](https://twitter.com/schadokar1)上与我联系或给我发[电子邮件](https://www.freecodecamp.org/news/how-to-write-your-first-technical-book/hello@schadokar.dev)。
-   [阅读我的其它文章](https://schadokar.dev)
-   订阅[我的简报](https://schadokar.dev/newsletter/)

封面照片：来自 [Unsplash](https://unsplash.com/s/photos/writers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)上的[Thought Catalog](https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
