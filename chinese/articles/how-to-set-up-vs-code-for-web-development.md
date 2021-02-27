> - 原文地址：[How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/how-to-set-up-vs-code-for-web-development/)
> - 原文作者：Thu Nghiem
> - 译者：tianheg
> - 校对者：

---

- [介绍 VS Code](#介绍-vs-code)
- [VS Code 欢迎标签](#vs-code-欢迎标签)
- [VS Code File Explorer](#vs-code-file-explorer)
- [VS Code Extensions](#vs-code-extensions)
- [Conclusion](#conclusion)

---

![How to Set Up VS Code for Web Development in A Few Simple Steps](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/ep11-vscode-1.jpg)

VS Code 已经成为当今最受欢迎的代码编辑器。它虽然轻量但却很强大，它无疑是我的最爱。

在这篇文章，我会教你如何开始使用 VS Code。

这里有一个视频，作为文章的补充。

VS Code 安装视频

## 介绍 VS Code

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.22.57.png)

下载 VS Code

If you don't yet have VS Code installed on your computer, head to  [code.visualstudio.com][1]  to download it. You can open the dropdown to choose the versions you want to download, but usually, the big button should do the work.

如果你还没有安装 VS Code，去 [code.visualstudio.com][1] 下载。你可以在下拉菜单上选择你想下载的版本，但一般情况下，直接点击下载按钮就行。

## VS Code 欢迎标签

在你安装并打开后，你第一眼看到的是欢迎标签。这会在这儿发现 5 个部分：

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.26.12.png)

欢迎标签

**开始**：你可以选择新建文件或打开文件夹。

**最近**：你能够找到最近打开的所有文件夹。

**帮助**：你能够找到一些有用的信息。比如，可打印的键盘清单或一系列介绍视频。

**Customize**: You can see that you can install settings and keyboard shortcuts from other code editors like Vim or Atom. So in case you are used to using these editors at the moment, you can go ahead and check it out.

But what we want to look into is the  **color theme**. If you select it you can see that there is a list of themes to choose from. You can also use the up and down arrow keys to preview the themes. But my favorite theme is the default one, so I am gonna stick with it.

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.59.13.png)

Color Theme

**Learn**: Here you'll find 3 selections. The first selection on the list is  **Find and run all commands.**  With this, we can find and run all the available commands. We are going to use this a lot, so I recommend that you to memorize the short-cut, which is  `Command/Control + Shift + P`.

The second selection is  **Interface Overview**. If we select it, we can see the most common elements on the user interface and we can also see the shortcut to toggle the elements:

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.30.16.png)

Interface Overview

The last selection is the  **Interactive Editor Playground**. Here, you can find the highlight features from VS Code with instructions and examples.

Let's select  **Emmet**, for instance. With  **Emmet**, we can write shortcuts and then expand them into a piece of code.

So let's say, for example, that we want to create an unordered list element with 3 items inside and each item has a class name of "fruit". We can type  `ul>li.fruit*3`  and press  `tab`.

![](https://www.freecodecamp.org/news/content/images/2021/01/emmet.gif)

Emmet in Interactive Editor Playground

You can also see that in the existing example (`ul>li.item$*5`), they tried to create an unordered list element and 5 items with a class name of  `item`  inside. But the class name also comes with  _numbering:_

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

Alright, I recommend that you check out all of these features. There are a lot of them, and it's okay if you don't understand it all now. You can always come back in the future.

## VS Code File Explorer

Next, let's go to  **File Explorer**  by selecting the first tab on the side navigation or  `Command/Control + Shift + E`.

Here you can open an existing folder, but let's create a new folder and a new file. Instead of opening a new window, let's open the terminal in VS Code. You can select the  **error and warning**  button on the status bar and then select the  `Terminal`  tab or you can use the shortcut `Control +`.

Right now I am in my home directory. Let's create a new folder by typing  `mkdir vscode-tutorials`  and let's go inside it with  `cd vscode-tutorials`.

Now we want to open this folder, so we can select the  `open folder`  button and navigate to the folder directory – but that's a lot of work. So instead, in the terminal, we can say  `code .`. Now, you might face an error:  `bash: code: command not found`.

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.52.42.png)

Terminal In VS Code

To fix this, we can open the  **Command Palette**  and search for  `Shell Command: Install code command in Path`, and select it. Now if we go back to the terminal and type  `code .`, the new VS Code window will be opened with the created folder.

Alright, next, we want to create a new file. In the folder section, we can click the new file icon or right-click and select  `new file`. Let's name the file  `index.html`, and inside it let's type the exclamation mark (!) and press tab or enter. With  **Emmet**, it will generate an HTML template.

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.55.20.png)

Generating HTML with Emmet in VS Code

Now let's open the  **Command Palette**  again, and search for  **Format Document**  and select it. You can see that it add spacings between different sections and cleans up our code.

This is a super useful feature from VS Code. But we don't want to search for  **Format Documen**t all the time and we want it to format whenever we save the file.

You also notice here that the indention is now equal to  **4 spaces**, which in my opinion is a bit much. So let's change it to 2. And to do that, we can go to settings or use the shortcut `Command/Control + ,`.

In the  **Commonly Used**  tab, we can change the Tab size to be 2 and under  **Text Editor/Formatting**, we can select  **Format on Save**. Now whenever we save, the files will be properly formatted.

## VS Code Extensions

The last thing I want to show you how to use is  **Extensions**. You can select the extensions tab from the side navigation or with the shortcut:  `Command/Control + Shift + X`.

Here we can filter the extensions by, for example,  **Most Popular**  or  **Recommended**.

There are many extensions to choose from. But the first extension that we need to install is  [Live Server][3]. With this, we can have a local server reload static web pages.

![](https://www.freecodecamp.org/news/content/images/2021/01/Screenshot-2021-01-20-at-17.56.38.png)

Live Server Extension

For example, if we go to our  `index.html`  and open the Command Palette and search for  **Live Server: Open with Live Server**  you can see that a new tab on the browser is opened.

And if we create a new element on our HTML, for example  `<h1>VScode Introduction<h1/>`, after we save the page will automatically be reloaded and we can see the changes. In  `index.html`, you can also open the live server with the  **go live**  button on the status bar.

## Conclusion

There are many other useful extensions, but I will cover them in another article and video.

For now, with this introduction and setup guide, I am sure that you are ready to start your Web Development Journey.

That concludes the article. You can follow me on social media for future updates. Otherwise, stay happy coding and see you in future posts.  
  
\_\_\_\_\_\_\_\_\_\_ 🐣 About me \_\_\_\_\_\_\_\_\_\_

- I am the founder of  [DevChallenges][4]
- Subscribe to  [my Channel][5]
- Follow  [my Twitter][6]
- Join  [Discord][7]

[1]: https://code.visualstudio.com/
[2]: https://docs.emmet.io/cheat-sheet/
[3]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[4]: https://devchallenges.io/
[5]: https://www.youtube.com/c/thunghiem
[6]: https://twitter.com/thunghiemdinh
[7]: https://discord.com/invite/3R6vFeM
