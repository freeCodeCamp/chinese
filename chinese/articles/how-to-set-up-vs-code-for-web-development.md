> - 原文地址：[How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/how-to-set-up-vs-code-for-web-development/)
> - 原文作者：Thu Nghiem
> - 译者：tianheg
> - 校对者：

![How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/ep11-vscode-1.jpg)

Visual Studio Code has become the most popular source code editor out there. It is lightweight but powerful, and it is no doubt my favorite.

VS Code 已经成为当今最受欢迎的代码编辑器。它虽然轻量但却很强大，它无疑是我的最爱。

In this article, I am going to walk you through how to get started and set up VS Code for Web Developers.

在这篇文章，我会教你如何开始使用 VS Code。

Here's a video you can watch if you want to supplement this article:

这里有一个视频，作为文章的补充。

VS Code Setup Video

VS Code 安装视频

## Introduction to VS Code

## 介绍 VS Code

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.22.57.png)

Download Visual Studio Code

下载 VS Code

If you don't yet have VS Code installed on your computer, head to  [code.visualstudio.com][1]  to download it. You can open the dropdown to choose the versions you want to download, but usually, the big button should do the work.

如果你还没有安装 VS Code，去 [code.visualstudio.com][1] 下载。你可以在下拉菜单上选择你想下载的版本，但一般情况下，直接点击下载按钮就行。

## VS Code Welcome Tab

## VS Code 欢迎标签

Once you have it installed and opened, the first thing you will see is a Welcome tab. Here, you'll find 5 sections:

在你安装并打开后，你第一眼看到的是欢迎标签。这会在这儿发现 5 个部分：

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.26.12.png)

Welcome Tab

欢迎标签

**Start**: You can choose to either create a new file or open a folder.

**开始**：你可以选择新建文件或打开文件夹。

**Recent**: You can find any recently opened folders.

**最近**：你能够找到最近打开的所有文件夹。

**Help**: You can find some handy information. For example, the printable keyboard cheatsheet or a series of introduction videos.

**帮助**：你能够找到一些有用的信息。比如，可打印的键盘清单或一系列介绍视频。

**Customize**: You can see that you can install settings and keyboard shortcuts from other code editors like Vim or Atom. So in case you are used to using these editors at the moment, you can go ahead and check it out.

**自定义**：如你所见，你能够从像 Vim 或 Atom 之类的代码编辑器上为 VS Code 安装设置和键盘快捷键。所以在你目前已经习惯使用这些编辑器的情况下，你可以去看看。

But what we want to look into is the **color theme**. If you select it you can see that there is a list of themes to choose from. You can also use the up and down arrow keys to preview the themes. But my favorite theme is the default one, so I am gonna stick with it.

但我们将要看的是 **色彩主题**。你能看到有一系列如果你想选择。你也可以通过上下箭头预览主题。但我最喜欢默认主题，所以我不会修改。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.59.13.png)

Color Theme

色彩主题

**Learn**: Here you'll find 3 selections. The first selection on the list is **Find and run all commands**.  With this, we can find and run all the available commands. We are going to use this a lot, so I recommend that you to memorize the short-cut, which is  `Command/Control + Shift + P`.

**学习**：这儿你会发现 3 个选项。表中的第一个选项是 **寻找并运行全部命令**。我们可以通过它找到并运行全部的可用的命令。我们会经常使用，所以我推荐你记住这一快捷键——`Command/Control + Shift + P`。

The second selection is **Interface Overview**. If we select it, we can see the most common elements on the user interface and we can also see the shortcut to toggle the elements:

第二部分是 **界面预览**。如果我们选择它，我们能看到用户界面上大部分常用的元素，我们还能看到切换元素的快捷键：

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.30.16.png)

Interface Overview

界面预览

The last selection is the  **Interactive Editor Playground**. Here, you can find the highlight features from VS Code with instructions and examples.

最后一个部分是 **交互编辑区**。你能在发现高亮的特性，来自 VS Code 的指导和例子。

Let's select  **Emmet**, for instance. With  **Emmet**, we can write shortcuts and then expand them into a piece of code.

比如，选择 **Emmet**。我们能用 **Emmet** 写快捷键然后扩展成代码片段。

So let's say, for example, that we want to create an unordered list element with 3 items inside and each item has a class name of "fruit". We can type  `ul>li.fruit*3`  and press  `tab`.

例如，我们假设自己想创造一个有三个项目的无序列表，每个项目的类名字是 “fruit”。我们可以打出 `ul>li.fruit*3` 然后按下 `tab`。

![](https://www.freecodecamp.org/news/content/images/2021/01/emmet.gif)

Emmet in Interactive Editor Playground

交互编辑区中 Emmet

You can also see that in the existing example (`ul>li.item$*5`), they tried to create an unordered list element and 5 items with a class name of  `item`  inside. But the class name also comes with  _numbering:_

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

In this section, you can also find a link to the  [Emmet Cheat Sheet][2], which is super useful.

在这部分，你还可以找到非常有用的 [Emmet 清单][2]。

Alright, I recommend that you check out all of these features. There are a lot of them, and it's okay if you don't understand it all now. You can always come back in the future.

好了，我推荐你尝试这些特性。它们有很多，所以现在不理解也没关系，以后你可以时常看看这些。

## VS Code File Explorer

## VS Code 文件浏览器

Next, let's go to  **File Explorer**  by selecting the first tab on the side navigation or  `Command/Control + Shift + E`.

下面，一起来到 **文件浏览器**，通过点击侧导航的第一个标签或者快捷键 `Command/Control + Shift + E` 显示。

Here you can open an existing folder, but let's create a new folder and a new file. Instead of opening a new window, let's open the terminal in VS Code. You can select the  **error and warning**  button on the status bar and then select the  `Terminal`  tab or you can use the shortcut `Control +`.

你可以在这打开一个已存在的文件夹，但是让我们新建一个文件夹和文件。打开 VS Code 的终端而不是打开一个新窗口。你可以选择状态栏的错误和警告按钮，然后选择终端标签或者你可以使用快捷键 `Control +`.

Right now I am in my home directory. Let's create a new folder by typing  `mkdir vscode-tutorials`  and let's go inside it with  `cd vscode-tutorials`.

现在我在自己的家目录。通过输入 `mkdir vscode-tutorials` 新建文件夹，通过输入 `cd vscode-tutorials` 进入文件夹。

Now we want to open this folder, so we can select the  `open folder`  button and navigate to the folder directory – but that's a lot of work. So instead, in the terminal, we can say  `code .`. Now, you might face an error:  `bash: code: command not found`.

现在我们想在 VS Code 中打开这个文件夹，所以我们可以选择 `open folder` 导航到文件夹目录——但这样会麻烦很多。倒不如在终端输入 `code .`。你可能会遇到错误：`bash: code: command not found`。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.52.42.png)

Terminal In VS Code

VS Code 的终端

To fix this, we can open the  **Command Palette**  and search for  `Shell Command: Install code command in Path`, and select it. Now if we go back to the terminal and type  `code .`, the new VS Code window will be opened with the created folder.

为了修正它，我们可以打开 **命令面板** 并寻找 `Shell Command: Install code command in Path`，选择它。现在如果我们回到终端并输入 `code .`，创建的文件夹会在新的 VS Code 窗口里。

Alright, next, we want to create a new file. In the folder section, we can click the new file icon or right-click and select  `new file`. Let's name the file  `index.html`, and inside it let's type the exclamation mark (!) and press tab or enter. With  **Emmet**, it will generate an HTML template.

下一步，我们想创建一个新文件。在文件夹区域，我们能够点击新建文件图标或者在文件夹右键选择 `新文件`。取名 `index.html`，输入感叹号（!）按下 <kbd>tab</kbd> 或回车。因为 `Emmet` 的存在它会生成一个 HTML 模板。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.55.20.png)

Generating HTML with Emmet in VS Code

在 VS Code 里使用 Emmet 生成 HTML

Now let's open the  **Command Palette**  again, and search for  **Format Document**  and select it. You can see that it add spacings between different sections and cleans up our code.

现在让我们再一次打开 **命令面板**，搜索 `格式化文档` 并选择它。你能看到在不同的部分添加了空格，我们的代码也变整洁了。

This is a super useful feature from VS Code. But we don't want to search for  **Format Document** all the time and we want it to format whenever we save the file.

这是 VS Code 里非常有用的特性。但是我们不想总是搜索 `格式化文档`，我们想在无论何时保存文件都会格式文档。

You also notice here that the indention is now equal to  **4 spaces**, which in my opinion is a bit much. So let's change it to 2. And to do that, we can go to settings or use the shortcut `Command/Control + ,`.

你也会注意到：在这里缩进和 **四个空格** 的效果是相等的。在我看来这有点多。所以，把它改成 2 个空格的缩进。为了能改变空格的缩进数目，我们可以去打开设置，可以使用快捷键 `Command/Control + ,` 打开。

In the  **Commonly Used**  tab, we can change the Tab size to be 2 and under  **Text Editor/Formatting**, we can select  **Format on Save**. Now whenever we save, the files will be properly formatted.

在 **常用** 标签栏，我们可以改变标签大小；在 **文本编辑或格式化** 区域，我们可以选择 **在保存时格式化**。现在无论我们什么时候保存，文件都会正确地格式化。

## VS Code Extensions

## VS Code 扩展

The last thing I want to show you how to use is  **Extensions**. You can select the extensions tab from the side navigation or with the shortcut:  `Command/Control + Shift + X`.

我想教你使用的最后一个事物是 **扩展**。你可以直接点击侧边导航打开扩展标签或者使用快捷键 `Command/Control + Shift + X` 打开。

Here we can filter the extensions by, for example,  **Most Popular**  or  **Recommended**.

在这里我们可以通过一些设置过滤扩展，比如，**最受欢迎的** 或 **推荐的**。

There are many extensions to choose from. But the first extension that we need to install is  [Live Server][3]. With this, we can have a local server reload static web pages.

有很多扩展供你选择。但是我们第一个要下载的扩展是 [Live Server][3]。有了它我们就有了一个能够加载静态网页的本地服务器。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.56.38.png)

Live Server Extension

Live Server 扩展

For example, if we go to our  `index.html`  and open the Command Palette and search for  **Live Server: Open with Live Server**  you can see that a new tab on the browser is opened.

例如，我们要预览 `index.html` 打开命令面板搜索 **Live Server: 用 Live Server 打开**，点击它，你会看到一个新的标签页在浏览器上。

And if we create a new element on our HTML, for example  `<h1>VScode Introduction<h1/>`, after we save the page will automatically be reloaded and we can see the changes. In  `index.html`, you can also open the live server with the  **go live**  button on the status bar.

在我们的 HTML 文件里新建一个元素，比如，`<h1>VScode Introduction<h1/>`，在我们保存页面后，网页会自动加载，我们就可以看到改变。活动页面在 `index.html` 时，可以直接点击状态栏的 **Go Live** 打开 Live Server。

## Conclusion

## 总结

There are many other useful extensions, but I will cover them in another article and video.

还有其他的很多的有用的扩展，不过我们会在另一篇文章和视频里说明它们。

For now, with this introduction and setup guide, I am sure that you are ready to start your Web Development Journey.

现在，在这份介绍和安装指南的帮助下，我可以肯定你准备好开始你的 Web 开发之旅了。

That concludes the article. You can follow me on social media for future updates. Otherwise, stay happy coding and see you in future posts.

文章到此结束。为了未来的更新，你可以关注我的社交媒体。否则，请继续愉快地编写代码，在以后的帖子中再见。
  
\_\_\_\_\_\_\_\_\_\_ 🐣 About me \_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_ 🐣 关于我 \_\_\_\_\_\_\_\_\_\_

- I am the founder of  [DevChallenges][4]
- Subscribe to  [my Channel][5]
- Follow  [my Twitter][6]
- Join  [Discord][7]

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
