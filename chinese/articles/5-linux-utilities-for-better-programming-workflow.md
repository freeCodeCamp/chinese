> - 原文地址：[5 Linux Utilities to Improve Your Programming Workflow in 2022](https://www.freecodecamp.org/news/5-linux-utilities-for-better-programming-workflow/)
> - 原文作者：[Rishabh Rawat](https://www.freecodecamp.org/news/author/rishabh570/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![5 Linux Utilities to Improve Your Programming Workflow in 2022](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/linux-shell-utilities-cover.jpeg)

作为一个软件开发人员，总是有新的工具和框架出现，可以完全改变你的工作流程——为了更好（或更糟？）

无论怎样，总是有可能优化你日常工作的方式。

这篇文章包含了一些 Linux 工具，这些工具最近取代了我过度使用和生产力不足的日常编程工作流程。

你将了解到这些实用程序，以及它们是如何更好地替代它们的同行的。

让我们开始吧。

## 如何使用 Mcfly

你是否无情地终端上的输入 `上箭头键`，直到得到你之前运行的命令？我也有过这样的经历。我不知道我可以优化这个，所以我在相当长的一段时间里虔诚地使用它。

然后我被介绍到 `ctrl + r`。它允许你搜索你的命令历史，并且有通配符搜索。哇！！！

结果呢？我的手指敲击练习从第一天开始就结束了。我再次认为，对于这样一个小工具来说，这一定是 DX 的峰值。我大错特错了。

所以呢？嗯，有一个更好的`ctrl-r`给你。介绍一下 Mcfly 🦋。

除了常规的`ctrl+r`功能外，它还有一些额外的优点:

1. 这些建议是使用神经网络定制的，该网络考虑了你当前的工作目录和最近执行的命令。
2. 它跟踪命令的退出状态（你可能不想再次运行一个失败的命令）、时间戳和其他有用的信息。
3. 你可以使用`%`作为通配符来匹配多个字符。

以下是我在两个不同的存储库中得到的建议，基于我的 `shell` 输入历史:

![mcfly giving context aware suggestions in the shell](https://www.freecodecamp.org/news/content/images/2022/08/mcfly-in-git-project.png)

建议使用包括一个专门针对这个项目的构建脚本。

![mcfly giving context aware suggestions in the shell](https://www.freecodecamp.org/news/content/images/2022/08/mcfly-in-different-git-project.png)

项目有一个不同的构建脚本

你可以从[这里](https://github.com/cantino/mcfly#installation) 安装 Mcfly .

## 如何使用 Cheat.sh

谁喜欢看 `man`信息？我不喜欢。当我在纠结一个命令的时候，我最不想看的就是手册页。不是因为它没有帮助，而是因为它让人不知所措。

我经常只是需要简明的例子，可以快速上手。当我发现 [TLDR pages](https://tldr.sh/) 时，我是最高兴的人。现在有了 Cheat（表），我就更高兴了。

Cheat 让你可以访问 [cheatsheets](https://github.com/cheat/cheatsheets/)，这可能是你所需要的每个命令，只有例子，没有百科全书。

如果你不想安装这个工具，你可以像这样用 CURL 获得手册:

```bash
curl cheat.sh/uptime
```

获取 sed 的手册

因此，你不是在你的机器上安装手册，而是只为你需要的命令获取信息。你可以访问 [cheat.sh](https://cheat.sh/)，也可以在你的浏览器上使用它

以下是上述命令的输出情况:

![Cheatsheet output for uptime command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-13-56.png)

下面是上述命令的输出情况

你会在 [codebase](https://github.com/cheat/cheat) 中找到很多的例子。

## 如何使用 Git Open

我经常需要在浏览器中打开我正在做的项目的 GitHub 仓库。这可能是为了检查我提出的 Pull Request 的评论更新，改变仓库的设置，或者任何需要 GitHub 仓库页面的事情。

好吧，我们甚至有一个实用的工具来解决这个问题!

运行 `git open` 会在你的浏览器上打开你当前的工作仓库。默认情况下，它打开的是你所在分支的远程页面。你甚至可以为这些命令创建一个别名，以避免输入全部内容。

这里有一些别名设置供你参考（译者注：golang 开发者要改成别的）:

```bash
alias go="git open"
alias blog="git open https://github.com/<username>/blog <branch>"
```

使用 zsh 别名打开远程 Github 资源库

在 Github 上查看 Git Open [这里](https://github.com/paulirish/git-open)。

## 如何使用 Bat

我们都使用过`cat`，对吗？Bat 就是这样，但它有语法高亮，漂亮的格式化和风格化选项，并支持 git diff。它非常通用，很容易与其他工具集成，并提供自定义主题选项。

让我们来看看。这是我们使用 `cat` 的 Express 服务器文件:

![output of cat command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-16-26.png)

cat 命令的输出

上面的输出没有语法高亮，降低了代码的可读性。让我们用`bat`做同样的事情:

![output of bat command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-16-27.png)

bat 命令的输出

这显然更具可读性。它自动应用了适当的语法高亮（无需任何配置），提供了文件名和行号。

请随意开始使用它[这里](https://github.com/sharkdp/bat)。

## 如何使用 Jq

Jq 是一个 JSON 的命令行处理工具。你可以对你的 JSON 进行切片和切块，进行投影以只显示某些字段，并从（巨大的）JSON 中只提取所需的信息。不再有满屏的终端输出了。

```javascript
[
  {"value": 1, "rating": 2 },
  {"value": 2, "rating": 4 },
  {"value": 3, "rating": 5 }
]
```

输入数组样本

从一个数组中访问一个键看起来像这样:

```shell
jq '.[0] | { value }'
```

我们要求的是数组中的第一个元素，并且只获取 `value` 字段:

```javascript
{
  "value": 1
}
```

要了解更多，请前往他们的 [官方教程](https://stedolan.github.io/jq/tutorial/)。

他们也有一个方便的在线网站。我已经创建了一个片段[这里](https://jqplay.org/s/E2-xscbiHba)。你可以自由地调整它，玩一玩。

你甚至可以用 [jid](https://github.com/simeji/jid) 更进一步。它是一个利用 Jq 的交互式 JSON 提取器。它为你提供非常方便的建议和自动完成功能。

## 总结

这些都是一些扩大我视野的实用工具，使我认识到总有更好的方法来做事情。你只需要不断上网搜索。从 `如何做X(how to do X)` 和 `X的更好替代品(better alternatives to X)` 开始。

在我的日常编程工作流程中，我经常使用这些实用工具。我希望其中至少有一个会对你有用。

我很想知道哪些工具对你的日常工作流程至关重要,你是否使用本文中提到的任何工具？

喜欢这篇文章吗？[获得关于后端网络开发的双周改进丸](https://rrawat.com/newsletter) 💌。
