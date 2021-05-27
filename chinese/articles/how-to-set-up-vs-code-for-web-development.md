> - 原文地址：[How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/how-to-set-up-vs-code-for-web-development/)
> - 原文作者：Thu Nghiem
> - 译者：tianheg
> - 校对者：

![How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/ep11-vscode-1.jpg)

VS Code 已经成为当今最受欢迎的代码编辑器。它虽然轻量但却很强大，它无疑是我的最爱。

在这篇文章，我会教你如何开始使用 VS Code。

这里有一个视频，作为文章的补充。

VS Code 安装视频

## 介绍 VS Code

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.22.57.png)

下载 VS Code

如果你还没有安装 VS Code，去 [code.visualstudio.com][1] 下载。你可以在下拉菜单上选择你想下载的版本，但一般情况下，直接点击下载按钮就行。

## VS Code 欢迎标签

在你安装并打开后，你第一眼看到的是欢迎标签。这会在这儿发现 5 个部分：

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.26.12.png)

欢迎标签

**开始**：你可以选择新建文件或打开文件夹。

**最近**：你能够找到最近打开的所有文件夹。

**帮助**：你能够找到一些有用的信息。比如，可打印的键盘清单或一系列介绍视频。

**自定义**：如你所见，你能够从像 Vim 或 Atom 之类的代码编辑器上为 VS Code 安装设置和键盘快捷键。所以在你目前已经习惯使用这些编辑器的情况下，你可以去看看。

但我们将要看的是 **色彩主题**。你能看到有一系列如果你想选择。你也可以通过上下箭头预览主题。但我最喜欢默认主题，所以我不会修改。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.59.13.png)

色彩主题

**学习**：这儿你会发现 3 个选项。表中的第一个选项是 **寻找并运行全部命令**。我们可以通过它找到并运行全部的可用的命令。我们会经常使用，所以我推荐你记住这一快捷键——`Command/Control + Shift + P`。

第二部分是 **界面预览**。如果我们选择它，我们能看到用户界面上大部分常用的元素，我们还能看到切换元素的快捷键：

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.30.16.png)

界面预览

最后一个部分是 **交互编辑区**。你能在发现高亮的特性，来自 VS Code 的指导和例子。

比如，选择 **Emmet**。我们能用 **Emmet** 写快捷键然后扩展成代码片段。

例如，我们假设自己想创造一个有三个项目的无序列表，每个项目的类名字是 “fruit”。我们可以打出 `ul>li.fruit*3` 然后按下 `tab`。

![](https://www.freecodecamp.org/news/content/images/2021/01/emmet.gif)

交互编辑区中 Emmet

你也可以看那个已有的例子（`ul>li.item$*5`），它会创建一个无序列表，它的类名称也是按照顺序排列的：

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

在这部分，你还可以找到非常有用的 [Emmet 清单][2]。

好了，我推荐你尝试这些特性。它们有很多，所以现在不理解也没关系，以后你可以时常看看这些。

## VS Code 文件浏览器

下面，一起来到 **文件浏览器**，通过点击侧导航的第一个标签或者快捷键 `Command/Control + Shift + E` 显示。

你可以在这打开一个已存在的文件夹，但是让我们新建一个文件夹和文件。打开 VS Code 的终端而不是打开一个新窗口。你可以选择状态栏的错误和警告按钮，然后选择终端标签或者你可以使用快捷键 `Control +`.

现在我在自己的家目录。通过输入 `mkdir vscode-tutorials` 新建文件夹，通过输入 `cd vscode-tutorials` 进入文件夹。

现在我们想在 VS Code 中打开这个文件夹，所以我们可以选择 `open folder` 导航到文件夹目录——但这样会麻烦很多。倒不如在终端输入 `code .`。你可能会遇到错误：`bash: code: command not found`。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.52.42.png)

VS Code 的终端

为了修正它，我们可以打开 **命令面板** 并寻找 `Shell Command: Install code command in Path`，选择它。现在如果我们回到终端并输入 `code .`，创建的文件夹会在新的 VS Code 窗口里。

下一步，我们想创建一个新文件。在文件夹区域，我们能够点击新建文件图标或者在文件夹右键选择 `新文件`。取名 `index.html`，输入感叹号（!）按下 <kbd>tab</kbd> 或回车。因为 `Emmet` 的存在它会生成一个 HTML 模板。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.55.20.png)

在 VS Code 里使用 Emmet 生成 HTML

现在让我们再一次打开 **命令面板**，搜索 `格式化文档` 并选择它。你能看到在不同的部分添加了空格，我们的代码也变整洁了。

这是 VS Code 里非常有用的特性。但是我们不想总是搜索 `格式化文档`，我们想在无论何时保存文件都会格式文档。

你也会注意到：在这里缩进和 **四个空格** 的效果是相等的。在我看来这有点多。所以，把它改成 2 个空格的缩进。为了能改变空格的缩进数目，我们可以去打开设置，可以使用快捷键 `Command/Control + ,` 打开。

在 **常用** 标签栏，我们可以改变标签大小；在 **文本编辑或格式化** 区域，我们可以选择 **在保存时格式化**。现在无论我们什么时候保存，文件都会正确地格式化。

## VS Code 扩展

我想教你使用的最后一个事物是 **扩展**。你可以直接点击侧边导航打开扩展标签或者使用快捷键 `Command/Control + Shift + X` 打开。

在这里我们可以通过一些设置过滤扩展，比如，**最受欢迎的** 或 **推荐的**。

有很多扩展供你选择。但是我们第一个要下载的扩展是 [Live Server][3]。有了它我们就有了一个能够加载静态网页的本地服务器。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.56.38.png)

Live Server 扩展

例如，我们要预览 `index.html` 打开命令面板搜索 **Live Server: 用 Live Server 打开**，点击它，你会看到一个新的标签页在浏览器上。

在我们的 HTML 文件里新建一个元素，比如，`<h1>VScode Introduction<h1/>`，在我们保存页面后，网页会自动加载，我们就可以看到改变。活动页面在 `index.html` 时，可以直接点击状态栏的 **Go Live** 打开 Live Server。

## 总结

还有其他的很多的有用的扩展，不过我们会在另一篇文章和视频里说明它们。

现在，在这份介绍和安装指南的帮助下，我可以肯定你准备好开始你的 Web 开发之旅了。

文章到此结束。为了未来的更新，你可以关注我的社交媒体。否则，请继续愉快地编写代码，在以后的帖子中再见。

\_\_\_\_\_\_\_\_\_\_ 🐣 关于我 \_\_\_\_\_\_\_\_\_\_

- 我创建了 [DevChallenges][4]
- 订阅 [我的频道][5]
- 关注 [我的 Twitter][6]
- 加入 [Discord][7]

[1]: https://code.visualstudio.com/
[2]: https://docs.emmet.io/cheat-sheet/
[3]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[4]: https://devchallenges.io/
[5]: https://www.youtube.com/c/thunghiem
[6]: https://twitter.com/thunghiemdinh
[7]: https://discord.com/invite/3R6vFeM
