> - 原文地址：[How to View Your Linux Processes](https://www.freecodecamp.org/news/linux-top/)
> - 原文作者：[Anthony Behery](https://www.freecodecamp.org/news/author/anthonybehery/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to View Your Linux Processes](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/Screenshot-2022-12-05-235534.png)

你可能习惯于使用 MacOS 中的 `Activity Monitor(活动监视器)` 或 Windows 中的 `Task Manager(任务管理器)` 来查看你系统中当前运行的进程。

但是对于那些运行 Linux 的人来说，如果包括双启动、虚拟盒，甚至是 WSL2，你可以使用一个有用的 Linux 命令来检查和查看你的操作系统中正在进行的所有进程。

![image-8](https://www.freecodecamp.org/news/content/images/2022/12/image-8.png)

MacOS `Activity Monitor(活动监视器)`

![image-7](https://www.freecodecamp.org/news/content/images/2022/12/image-7.png)

Windows `Task Manager(任务管理器)`

## 怎样显示 Linux 内部?

Linux 中的`top`（进程表）命令将显示所有的系统进程。如果你在你的终端尝试这个命令，你会看到这个:

![30fps](https://www.freecodecamp.org/news/content/images/2022/12/30fps.gif)

这很整洁, `top` 程序显示了你的 Linux 系统中所有正在运行的进程的动态列表。

通常情况下，这个命令显示的是你的系统中当前被 Linux 内核运行/管理的信息摘要。

要离开`top`，请按键盘上的 `q` 退出交互式 shell。

### 栏的含义

- **PID:**显示任务的唯一进程 ID。
- **USER:**显示哪个用户正在运行什么任务

例如，你看到 `root` 和 `brandgrim`。Root 是运行该进程的系统的根，而 "brandgrim"（我）是运行该进程的用户。

- **PR:** \*这个数字显示进程的优先级--数字越小，优先级越高。(从直觉上讲是有道理的，对吗？)
- **VIRT:** 该任务使用的总虚拟内存
- **RES:** 该进程实际使用了多少 RAM，以 KB 为单位
- **SHR:** 这个数字代表特定任务使用的共享内存大小
- **%CPU:** 代表 CPU 的使用情况
- **%MEM:** 代表内存使用情况
- **+TIME:** 描述了任务开始后所使用的总 CPU 时间。
- **COMMAND:** 实际启动该进程的命令的名称

当你在 `top` 的交互式 shell 中时，你可以按 `h` 键调出 `Summary of Less Commands`，这是一个 `top` 所提供的所有命令的列表。

![image-9](https://www.freecodecamp.org/news/content/images/2022/12/image-9.png)

在 `top` 中显示命令摘要。

## 有用的标志和命令

`top` 有许多独特的标志和命令，要知道使用哪一个可能会让人不知所措，尽管有一些标志一开始就很有用。

### 怎么过滤用户

`-u`标志指定哪些进程应该被列出，取决于你指定的用户。

例如，我们看到在 **USER** 栏下有 `root` 和 `brandgrim`，所以如果我们尝试这样做:

```bash
top -u root
```

我们会看到以下情况:

![image-10](https://www.freecodecamp.org/news/content/images/2022/12/image-10.png)

它列出了在 `root`用户下正在运行的进程。另一方面，如果我们要尝试这个命令:

```bash
top -u brandgrim
```

我们会得到以下结果（显示在 `brandgrim` 用户下运行的进程）:

![image-11](https://www.freecodecamp.org/news/content/images/2022/12/image-11.png)

### 如何改变刷新间隔

默认情况下，top 的屏幕刷新时间间隔被设置为 3.0 秒。如果你想增加或减少这个时间间隔，你可以在 `top` 交互式外壳中按下 `d`，以设置一个理想的时间。

![281f04fc75ba](https://i.ibb.co/d0PYmJ3/281f04fc75ba.gif)

显示如何改变刷新间隔时间

### 如何按 CPU 利用率对进程进行排序

为了按照 CPU 的使用量对所有的 Linux 进程进行排序，你需要按 `SHIFT+P` 键，以便将它们排序到 `top`。现在你知道是什么占用了你的 CPU 了,那个讨厌的小的 while 循环一直在无限地运行！这就是为什么你的 CPU 会被占用。

例如，当我打开 VSCode 时过滤我的进程，这是我看到的:

![Processes](https://i.ibb.co/3YwQhbf/88368a8fe195.gif)

你可以看到，CPU 的利用率最初非常高，尽管随着 VSCode 加载我所有的扩展(extensions)和智能补全(Intellisense)，它开始下降。

### 如何在一个文件中保存 top 中的进程信息

要把所有正在运行的 top 命令的结果保存到一个文件中，可以使用这些命令:

```bash
top -n 1 -b > top-processes.txt
```

## `top` 的替代品

有很多 `top` 的替代品，如 `Htop`、`Vtop`、`Gtop`、`Gotop`等等，尽管我不会在这篇文章中介绍所有这些。

`Htop`是目前最流行的`top`替代品，这要归功于它的交互式菜单和垂直和水平滚动的能力。更不用说 `Htop` 还允许你以树状结构查看你的进程，这更容易可视化。

![image-12](https://www.freecodecamp.org/news/content/images/2022/12/image-12.png)

Htop (看起来很酷!)

# 总结

`top`是一个交互式的 shell，允许你以实时的方式查看所有的 Linux 进程。它显示系统信息以及 Linux 内核目前正在使用的进程或线程的列表。

`top`有自己有用的命令，如`-u`标志和`d`命令。还有一些更现代的`top`替代品，如`Htop`，它允许更多的色彩和互动的 shell。

来源: https://tenor.com/view/how-linux-users-install-a-web-browser-linux-linux-users-gif-20223386

希望这对你有帮助! 谢谢你的阅读 :)


