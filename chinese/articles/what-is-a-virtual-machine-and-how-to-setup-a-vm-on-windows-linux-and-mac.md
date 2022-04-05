> - 原文地址：[What is a Virtual Machine And How to Setup a VM on Windows, Linux, and Mac](https://www.freecodecamp.org/news/what-is-a-virtual-machine-and-how-to-setup-a-vm-on-windows-linux-and-mac/)
> - 原文作者：[Beau Carnes](https://www.freecodecamp.org/news/author/beau/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![What is a Virtual Machine And How to Setup a VM on Windows, Linux, and Mac](https://cdn-media-2.freecodecamp.org/w1280/5f9c9e98740569d1a4ca3df6.jpg)

虚拟机是一个你在计算机上运行的程序，它的行为就像一个独立的计算机。它基本上是一种在计算机中创建一个计算机的方法。

虚拟机在主机上的一个窗口中运行，为用户提供与他们使用完全不同的计算机相同的体验。虚拟机从主机上被沙盒化。这意味着，在虚拟机上运行的任何东西都不会影响主机。

虚拟机通常用于在操作系统上运行软件，而这些软件最初并不是为其设计的。例如，如果你使用的是一台Mac电脑，你可以在Mac电脑上的Windows虚拟机内运行Windows程序。虚拟机也被用来快速设置软件的镜像，访问被病毒感染的数据，以及测试其他操作系统。

一台物理计算机可以同时运行多个虚拟机。通常情况下，一台服务器会使用一个叫做管理程序的程序来管理同时运行的多个虚拟机。虚拟机有虚拟硬件，包括CPU、内存、硬盘等。每一块虚拟硬件都被映射到主机上的真实硬件。

虚拟机有一些缺点。由于硬件资源是间接的，它们不像物理计算机那样高效。此外，当许多虚拟机在一台计算机上同时运行时，性能可能变得不稳定。

## 虚拟机软件

你可以使用许多不同的虚拟机程序。一些选择是VirtualBox（Windows、Linux、Mac OS X），VMware Player（Windows、Linux），VMware Fusion（Mac OS X）和Parallels Desktop（Mac OS X）。

VirtualBox是最受欢迎的虚拟机程序之一，因为它是免费的、开源的，并且可以在所有流行的操作系统上使用。我们将告诉你如何使用VirtualBox设置虚拟机。

## 设置一个虚拟机(VirtualBox)

![Virtualbox_logo](https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png)

VirtualBox是甲骨文公司的一个开源的虚拟机程序。它允许用户在虚拟驱动器上虚拟安装许多操作系统，包括Windows、BSD、Linux、Solaris，等等。

由于VirtualBox可以在Windows、Linux和Mac上运行，因此在每个操作系统中设置虚拟机的过程都基本相同。

首先是下载和安装VirtualBox。你可以在这个链接上下载它: [VirtualBox 下载地址](https://www.virtualbox.org/wiki/Downloads)

你还需要为你想在虚拟机中运行的操作系统下载一个.iso文件。例如，你可以在这里下载一个Windows 10.iso文件:  [https://www.microsoft.com/en-us/software-download/windows10ISO](https://www.microsoft.com/en-us/software-download/windows10ISO)

当你运行了VirtualBox，点击 "new" 按钮

![image-68](https://www.freecodecamp.org/news/content/images/2019/10/image-68.png)

创建一个新的虚拟机。

接下来，你将选择你打算安装的操作系统。在 "Name" 框中，输入你要安装的操作系统的名称。VirtualBox将根据你输入的名称猜测类型和版本，但如果你需要，可以改变这些设置。

![image-69](https://www.freecodecamp.org/news/content/images/2019/10/image-69.png)

配置虚拟机。

该向导将根据你选择的操作系统类型和版本自动选择默认设置。当你通过向导时，你可以随时改变设置。只要不断点击 "Continue "和 "Create"，直到你通过向导。通常使用默认值就可以了

接下来，启动你刚刚创建的虚拟机，点击 "Start".

![image-71](https://www.freecodecamp.org/news/content/images/2019/10/image-71.png)

启动虚拟机。

一旦虚拟机启动，选择你想使用的.iso镜像文件。

![image-72](https://www.freecodecamp.org/news/content/images/2019/10/image-72.png)

在虚拟机上安装操作系统。

你的虚拟机现在将加载你选择的操作系统。该操作系统可能需要一些设置，但这与你在标准计算机上安装它所需要的设置相同。

![image-73](https://www.freecodecamp.org/news/content/images/2019/10/image-73.png)

Windows 10已成功在虚拟机内运行。

恭喜你！你已经在VirtualBox中运行了你的第一个虚拟机。
