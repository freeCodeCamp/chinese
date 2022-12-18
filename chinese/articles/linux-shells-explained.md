> - 原文地址：[Linux Shells for Beginners – Bash, Zsh, and Fish Explained](https://www.freecodecamp.org/news/linux-shells-explained/)
> - 原文作者：[Anthony Behery](https://www.freecodecamp.org/news/author/anthonybehery/)
> - 译者：Papaya HUANG
> - 校对者：

![Linux Shells for Beginners – Bash, Zsh, and Fish Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/pexels-oleksandr-pidvalnyi-320260.jpg)

当你打开终端时，很可能发现终端使用 Bash 作为其 [UNIX shell](https://zh.m.wikipedia.org/zh-hans/Unix_shell) 环境。当然除了 Bash，还存在其他“shell”环境。

例如 [C Shell](https://zh.wikipedia.org/wiki/C_Shell)、[Korn Shell](https://zh.wikipedia.org/wiki/KornShell)、[Z Shell](https://zh.wikipedia.org/zh-tw/Z_shell)，甚至 Fish Shell。不同的 shell 环境各有千秋，在你选择自己系统的 shell 之前，你应该评估一下。

我将在本文中介绍一些流行的 shell 及主要功能，帮助你做选择。

## Bash Shell

Bash Shell（或 Bourne Again Shell）是一种 UNIX shell 和命令语言。它是由 Brain Fox 为 GNU 项目编写的，目的是作为 Bourne Shell (sh) 的免费软件替代品。

Bash 于 1989 年首次发布，它是大多数 Linux 发行版的默认 Shell 环境。其他发行版，如 Kali Linux，使用 Z Shell 作为默认 shell。

Bash 是 Linus Torvalds（Linux 的创建者）移植到 Linux 的首批程序之一。

![Bash](https://media.geeksforgeeks.org/wp-content/uploads/cli_example.png)

[图片来源](https://www.geeksforgeeks.org/introduction-linux-shell-shell-scripting/)

你应该记住 Bash 也是一种编程语言。所以它即是一个“Shell”，同时你也可以使用 Bash 对行为进行编程。例如：

```
#!/bin/bash
echo "Hello World"
```

Bash 中的"Hello World"程序

### Bash 的关键点

- 因为 Bash 是大多数系统上的默认 shell 环境，大多数用户使用它。
- Bash 没有内联通配符表达式。通配符表达式是当你想要在 Shell 中搜索模式（pattern）的时候使用，类似于正则表达式（Regex）。三个主要的通配符是 `*`、`?` 和 `[]`。
- 不能自动更改目录名称。
- `#` 在脚本中被视为注释。
- 它有`shopt`（shell option 缩写）设置。
- 提示符（prompt）有反斜杠转义。
- 用户配置设置在 `.bashrc` 中。

## Z Shell

Z Shell 又称 Zsh， 是一个与 Bash 非常相似的 UNIX shell。你还可以使用 Zsh 编写脚本并将 shell 用作命令解释器。

Zsh 是 Bourne shell 的扩展，因此在此之上很多改进。 Zsh 于 1990 年由 Paul Falstad 发布，它具有 Bash、Korn Shell 和 C Shell 共有的一些功能。

macOS 默认使用 Zsh Shell。

![Zsh Shell](https://ohmyz.sh/img/themes/nebirhos.jpg)

[图片来源](https://ohmyz.sh/)

### Zsh 的关键点

- 在终端使用时，Zsh 带有自动补全功能。因此，当你按下`Tab↹`以自动补全你想运行的任何命令时，它不仅为你自动补全，而且弹出下拉菜单，包含所有其他可能的文件和目录。

![Zsh Toggle](https://i.ibb.co/bswYkn0/0f8c8e1a6016.gif)

- 支持内联通配符表达式
- 比 Bash 可配置度更高
- 支持插件和主题。这里是 Zsh 的[插件清单](https://github.com/unixorn/awesome-zsh-plugins)

同时，还有围绕 Z Shell 构建的框架。最受欢迎的框架之一是[Oh My Zsh](https://ohmyz.sh/)，它是一个社区驱动的开源框架，用于管理 Zsh 配置。 （我用 Oh My Zsh😄)

![Oh My Zsh](https://cdn.osxdaily.com/wp-content/uploads/2021/11/oh-my-zsh-mac.jpg)

[图片来源](https://osxdaily.com/2021/11/15/how-install-oh-my-zsh-mac/)

Zsh 和 Oh My Zsh 很相似，但并不完全相同。重申一下，Oh My Zsh 是一种管理 Zsh 配置的方式，它不是 Shell 本身。

## Fish Shell

Fish 是一个强调交互性和可用性的 UNIX shell 环境。与 Zsh 不同，Fish 旨在为用户提供交互性，而不是信任用户实现自己的配置。

它由 Axel Liljencrantz 于 2005 年创建。由于不符合 POSIX shell 标准，Fish 被认为是“奇异的 shell”。 \[[资料来源](https://en.wikipedia.org/wiki/Fish_(Unix_shell)\]

![Fish Shell](http://blog.sudobits.com/wp-content/uploads/2015/06/fish-shell-screenshot.png)

[图片来源](https://blog.sudobits.com/2015/06/05/fish-a-user-friendly-command-line-shell-for-ubuntulinux/)

### Fish 的关键点

- Fish 根据您的命令历史记录和所在目录提供“键入时搜索”自动建议。与 Bash 的历史搜索类似，Fish Shell 的搜索历史**始终**处于打开状态。这样，用户终端工作时能够获得交互式反馈。

![Fish autocomplete](https://taskwarrior.org/images/fish.gif)

[图片来源](https://taskwarrior.org/news/news.20140906/)

- Fish 还倾向将功能作为命令而不是语法。这使得功能的选项和帮助文本可见。
- 由于默认情况下 Fish 已经预置了很多配置，因此它被认为比 Zsh 等其他 `sh` 选项更适合初学者。
- Fish 的脚本语言不同于 Zsh 和 Bash。 Zsh 使用更多简化指令(alias)，而 Fish 避免在脚本语言中使用简化指令。

如果您只是使用基本命令（如 `cd`、 `cp`、 `vim`、 `ssh` 等）编写脚本，你将不会注意到 Fish 和 Bash 的脚本语言的工作方式有何不同。

两者最大的区别之一是当你尝试捕获命令的输出时。在 Bash 中你可能习惯于这样：

```bash
todays_date=$(date)
echo "Todays date is $todays_date"
```

![Output](https://i.ibb.co/0hrF0Y3/fa71b0032fba.gif)

```
Todays Date is Tue Dec 13 15:29:28 CST 2022
```

而在 Fish 中，捕获输出的方式不同。 Fish 脚本等价物如下：

```bash
set date (date)
echo "Todays Date $date"
```

![ezgif.com-gif-maker](https://www.freecodecamp.org/news/content/images/2022/12/ezgif.com-gif-maker.gif)

```bash
todays date is Tue Dec 13 21:35:03 UTC 2022
```

## 总结

Bash、Z Shell 和 Fish Shell 各有优点，也有一些相似之处。既然对它们有了更多的了解，你就可以在工作中更有效地使用它们。

如果你想要更可配置的 shell，你可以使用 Zsh（甚至安装 Oh My Zsh）。如果你想要更多交互的终端体验，同时不需要大量配置，你可以使用 Fish Shell。如果你想要经典的感觉，你可以保留 Bash。

选择取决于你作为开发人员的偏好 - 所以只需选择最适合你的 shell。

_希望这对篇文章对你有所帮助！感谢阅读_ 🐚🐚🐚
