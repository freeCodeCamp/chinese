> -  原文地址：[The Arch Linux Handbook](https://www.freecodecamp.org/news/how-to-install-arch-linux/)
> -  原文作者：[Farhan Hasin Chowdhury](https://www.freecodecamp.org/news/author/farhanhasin/)
> -  译者：ZhichengChen
> -  校对者：

![The Arch Linux Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/Arch-Linux-Handbook-1280x612.png)

如果问开发人员 Linux 是什么，大多数人的回答可能是 Linux 是一个开源操作系统。也有人会站在技术角度称它为内核。

不过，对我来说，Linux 不仅仅是一个操作系统或内核。Linux 代表着自由。可以根据需求自由组合各个部分组成最适合自己的操作系统，这也是 Arch Linux 吸引人的地方。

摘自 arch [wiki](https://wiki.archlinux.org/title/Arch_Linux),

> Arch Linux 是通用 x86-64 [GNU](https://wiki.archlinux.org/title/GNU)/Linux 发行版。Arch采用滚动升级模式，尽全力提供最新的稳定版软件。
>
> 初始安装的 Arch 只是一个基本系统，随后用户可以根据自己的喜好安装需要的软件并配置成符合自己理想的系统.

换句话说，Arch Linux 是针对有经验 Linux 用户的基于 x86-64 架构的优化发行版。它让你对系统拥有完全的选择权和控制权。

可以自主选择所需要的软件包、内核（是的，内核有很多）、boot-loader、桌面环境等等。

你有没有听过有人说，

> 嗯——顺便说一句，我用的是 Arch Linux！

这是因为如果想要在机器上安装 Arch Linux，需要先了解 Linux 发行版的每个部分是如何工作的。所以如果使用的是 Arch Linux，证明已经很熟悉 Linux。

安装 Arch Linux 与安装 Fedora 或 Ubuntu 之类的系统并没有太大不同。区别是 Arch Linux 必须手动完成各个步骤，而不是交给安装程序。完成了这个过程，自然了解了其他发行版的安装步骤。

在本文中，将介绍在电脑上安装和配置 Arch Linux 的整个过程。最后，还会讨论一些常见任务操作和故障排除技巧。

跟我来，带你深入浅出了解 Arch Linux。

## 目录

-   [一些预设](./#some-assumptions-i-m-making)
-   [如何创建可引导的 Arch Linux U 盘](./#how-to-create-a-bootable-arch-linux-usb-drive)
-   [准备安装 Arch Linux](./#how-to-prepare-your-computer-for-installing-arch-linux)
-   [如何安装 Arch Linux](./#how-to-install-arch-linux)
    -   [如何设置控制台键盘布局和字体](./#how-to-set-the-console-keyboard-layout-and-font)
    -   [如何验证引导模式](./#how-to-verify-the-boot-mode)
    -   [如何连接到互联网](./#how-to-connect-to-the-internet)
    -   [如何更新系统时钟](./#how-to-update-the-system-clock)
    -   [如何对磁盘进行分区](./#how-to-partition-the-disks)
    -   [如何格式化分区](./#how-to-format-the-partitions)
    -   [如何挂载文件系统](./#how-to-mount-the-file-systems)
    -   [如何配置镜像源](./#how-to-configure-the-mirrors)
    -   [如何安装 Arch Linux 基础系统](./#how-to-install-arch-linux-base-system)
-   [如何配置 Arch Linux](./#how-to-configure-arch-linux)
    -   [如何生成 Fstab 文件](./#how-to-generate-the-fstab-file)
    -   [如何使用 Arch-Chroot 登录新安装的系统](./#how-to-login-to-the-newly-installed-system-using-arch-chroot)
    -   [如何配置时区](./#how-to-configure-the-time-zone)
    -   [如何配置本地化](./#how-to-configure-the-localization)
    -   [如何配置网络](./#how-to-configure-the-network)
    -   [如何设置 root 密码](./#how-to-set-the-root-password)
    -   [如何创建非 root 用户](./#how-to-create-a-non-root-user)
    -   [如何安装 Microcode](./#how-to-install-microcode)
    -   [如何安装和配置 Boot Loader](./#how-to-install-and-configure-a-boot-loader)
-   [如何安装 Xorg](./#how-to-install-xorg)
-   [如何安装图形驱动程序](./#how-to-install-graphics-drivers)
-   [如何安装桌面环境](./#how-to-install-a-desktop-environment)
    -   [如何安装 GNOME 桌面](./#how-to-install-gnome)
    -   [如何安装 Plasma 桌面](./#how-to-install-plasma)
-   [如何完成安装](./#how-to-finalize-the-installation)
-   [如何在桌面环境之间切换](./#how-to-switch-between-desktop-environments)
-   [使用 Pacman 管理包](./#how-to-manage-packages-using-pacman)
    -   [如何使用 Pacman 安装软件包](./#how-to-install-packages-using-pacman)
    -   [如何使用 Pacman 删除软件包](./#how-to-remove-packages-using-pacman)
    -   [如何使用 Pacman 升级软件包](./#how-to-upgrade-packages-using-pacman)
    -   [如何使用 Pacman 搜索软件包](./#how-to-search-for-packages-using-pacman)
-   [如何在 Arch Linux 使用 AUR](./#how-to-use-aur-in-arch-linux)
    -   [如何使用 Helper 安装软件包](./#how-to-install-packages-using-a-helper)
    -   [如何手动安装软件包](./#how-to-install-packages-manually)
-   [如何解决常见问题](./#how-to-troubleshoot-common-problems)
-   [如何使用 Live Arch ISO 作为恢复媒介](./#how-to-use-the-live-arch-iso-as-a-rescue-media)
-   [拓展阅读](./#further-reading)
-   [结论](./#conclusion)

## 一些预设

在进入本教程的核心之前，先澄清一些事情。为了使本文通俗易懂，我对你和你的系统做了以下假设：

-   对 Arch Linux 有基本的了解
    -   [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux)
    -   [常见问题](https://wiki.archlinux.org/title/Frequently_asked_questions)
    -   [Arch 与其他发行版的比较](https://wiki.archlinux.org/title/Arch_compared_to_other_distributions)
-   你的电脑使用的是 UEFI，而不是 BIOS
-   你有一个足够大（4GB）的 U 盘，可以用它来启动 Linux
-   有安装 Linux（Ubuntu/Fedora）的经验
-   有足够的空间在硬盘或 SSD上安装 linux

差不多就是这样。如果你具备以上所有条件，可以开始了。

## 如何创建可引导的 Arch Linux U 盘

要下载 Arch Linux，请访问 [https://archlinux.org/download/](https://archlinux.org/download/) 并下载最新版本（本文撰写时为 2022.01.01）。ISO的大小应该在870兆字节左右。

下载后，需要将其写入 U 盘。可以使用 [Fedora Media Writer](https://getfedora.org/en/workstation/download/)。在系统上下载并安装应用程序。连接 U 盘打开应用程序：

![](https://www.freecodecamp.org/news/content/images/2022/01/image-48.png)

单击“自定义镜像”，并使用文件浏览器选择下载的 Arch Linux ISO 文件。

![](https://www.freecodecamp.org/news/content/images/2022/01/image-49.png)

程序现在可以选择一个连接的 U 盘。如果电脑连接了多个 USB 存储设备，请务必小心选择正确的 U 盘。现在点击“写入磁盘”按钮，等待进程完成。

## 准备安装 Arch Linux

在此步骤中，必须对系统进行一些更改，否则 Arch Linux 可能无法启动或正常运行。

第一个要改的是禁用 UEFI 配置中的安全启动。此功能有助于启动期间防止恶意软件攻击，但也会阻止 Arch Linux 安装程序的启动。

如何禁用此功能的详细说明因主板或笔记本电脑品牌而异。需要你自己在互联网中搜索来找到相应的方法。

第二个操作仅在安装和 Windows 共存的 Arch Linux 双系统时才适用。Windows有一个名为“快速启动”的功能，它通过部分休眠来缩短计算机的启动时间。

通常这是一个很好的特性，它可以防止双引导配置中的任何其他操作系统在此过程中访问硬盘。

要禁用此功能，请打开“开始”菜单并搜索“选择电源计划”，如下所示：

![](https://www.freecodecamp.org/news/content/images/2022/01/choose-a-power-plan.png)

然后在下一个窗口中，单击左侧边栏中的“选择电源按钮的功能”：

![](https://www.freecodecamp.org/news/content/images/2022/01/image-54.png)

然后在下一个窗口中，将看到“关机设置”列表，“启用快速启动（推荐）”选项应显示为只读。

![](https://www.freecodecamp.org/news/content/images/2022/01/image-55.png)

单击顶部的“更改当前不可用的设置”，然后更改设置。

![](https://www.freecodecamp.org/news/content/images/2022/01/image-56.png)

取消勾选“启用快速启动（推荐）”选项，然后按下底部的“保存修改”按钮。从现在开始，启动过程可能需要一些额外的时间，但这一切都是值得的。

在本文中，我将安装 Arch Linux 作为默认操作系统。所以我将把我的整个磁盘空间分配给它。

如果想让 Arch Linux 和 Windows 并存，这里有一篇专门的[文章](https://www.freecodecamp.org/news/how-to-dual-boot-any-linux-distribution-with-windows/)介绍这个话题。在那篇文章中，有一个[章节](https://www.freecodecamp.org/news/how-to-dual-boot-any-linux-distribution-with-windows/)，详细讨论了分区过程。

## 如何安装 Arch Linux

假设已经准备好可启动的 U 盘并且计算机配置正确，就可以开始从 U 盘启动了。开启从 U 盘启动的方法因机器而异。

在我的机器上，在启动过程中按 F12 键会将会进入到可启动设备列表。从那里可以选择可启动 U 盘。可能你已经知道适合你的电脑的方式，或者可能需要进行一些研究。

进入所有的可启动设备列表，选择要启动的 U 盘，会显示以下菜单：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_12_01_2022_18_39_29.png)

从列表中选择第一个并等待 Arch 安装程序完成启动。完全启动后，会看到如下内容：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_12_01_2022_18_50_39.png)

就这样。与你熟悉的其他操作系统不同，Arch 安装程序没有任何可以自动安装的图形用户界面。

它需要你投入时间和精力并逐个配置每个部分。这听起来可能有点难，但老实说，如果弄清楚每一步，安装 Arch Linux 会很有趣。

### 如何设置控制台键盘布局和字体

正如我已经说过的，Arch 安装程序没有图形用户界面，因此需要输入大量指令。配置键盘布局和漂亮的字体可以使安装过程不那么令人沮丧。

默认情况下，控制台是标准的美式键盘布局。这对大多数人来说应该没问题，但如果碰巧你有一个不同的键盘，可以改变它。

所有可用的键盘映射通常以 `map.gz` 文件的形式保存在 `/usr/share/kbd/keymaps` 目录中。可以使用 `ls` 命令查看列表：

```
ls /usr/share/kbd/keymaps/**/*.map.gz
```

这将列出所有可用的键盘映射：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_15_58_28-1.png)

假如你的是 Mac-US 键盘布局，从该列表中找到相应的 `map.gz` 文件，即 `mac-us.map.gz` 文件。

可以使用 `loadkeys` 命令加载所需的键盘映射。要将 `mac-us.map.gz` 设置为默认值，请执行以下命令：

```
loadkeys mac-us
```

如果不喜欢默认字体，也可以更改控制台字体。就像键盘映射一样，控制台字体保存在 `/usr/share/kbd/consolefonts` 中，可以使用 `ls` 命令列出：

```
ls /usr/share/kbd/consolefonts
```

这将列出所有可用的字体：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_16_08_01.png)

可以使用 `setfont` 命令设置。例如，如果要将 `drdos8x16` 设置为默认值，请执行以下命令：

```
setfont drdos8x16
```

`loadkeys` 和 `setfont` 命令都是包含基本 Linux 键盘工具的 `kbd` 包的一部分。他们都有很棒的 [文档](https://kbd-project.org/#documentation)，所以如果想了解更多信息，请随时查看。

### 如何验证引导模式

现在已配置好控制台，下一步是确保已在 UEFI 模式下启动，而不是在 BIOS 模式下启动。

老实说，这一步对我来说似乎没有必要，因为它在实时启动菜单中字面意思是“x86_64 UEFI”。但是官方的 Arch [安装指南](https://wiki.archlinux.org/title/installation_guide#Verify_the_boot_mode)建议我们验证一下。

要验证引导模式，请执行以下命令：

```
ls /sys/firmware/efi/efivars
```

如果你处于 UEFI 模式，它会在你的屏幕上列出一堆文件：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_17_18_34.png)

在 BIOS 引导的情况下，`/sys/firmware` 目录中甚至不存在`efi` 目录。如果处于 UEFI 模式，（如果正确地遵循了一切，应该是）继续下一步。

### 如何连接到互联网

与许多其他实时发行版不同，Arch 实时环境并没有内置所有必要的软件包。它包含许多可用于安装系统其余部分的最低限度的软件包。所以，一个有效的互联网连接是必须的。

如果使用的是有线网络，那么从一开始应该就有了有效的互联网连接。要对其进行测试，请 ping 任何公共地址：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_17_40_04.png)

我正在使用 VirtualBox 制作这些屏幕截图，因此已经通过有线连接连接了互联网。但如果使用的是无线连接，事情会变得有点棘手。

实时环境带有 `iwd` 或 [iNet wireless daemon](https://wiki.archlinux.org/title/Iwd) 包。可以使用此软件包连接到附近的无线网络。

首先，执行以下命令：

```
iwctl
```

这将启动一个交互式提示，如下所示：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_17_59_34.png)

现在执行以下命令以查看可用无线设备的列表：

```
device list
```

这将打印出所有可用的无线设备列表。无线设备是指连接到你计算机的任何无线适配器。这里假设设备名称是 `wlan0` 。

要使用找到的设备扫描附近的无线网络，请执行以下命令

```
station wlan0 scan
```

你可能认为此命令将打印出所有附近网络的列表，但事实并非如此。要查看网络列表，请执行以下命令：

```
station wlan0 get-networks
```

现在假设你的 WI-FI 网络名称为“Skynet”，可以通过执行以下命令连接到它：

```
station wlan0 connect Skynet
```

`iwctl` 程序会提示输入 wi-fi 密码。输入密码，一旦连接到网络，输入`exit` 按 Enter 退出程序。再次尝试 ping 公共地址并确保 Internet 工作正常。

### 如何更新系统时钟

在 Linux 中，NTP 或网络时间协议用于通过网络同步计算机系统时钟。可以使用 `timedatectl` 命令在 Arch 实时环境中启用 NTP：

```
timedatectl set-ntp true
```

该命令将会卡住几秒。如果没有看到命令光标再次出现，请尝试按 Enter。过去我曾多次遇到过这种情况。

### 如何对磁盘进行分区

这可能是整个安装过程中最危险的一步——因为如果弄乱了分区，数据就会丢失。所以我建议不要立即执行本节内容。相反，请先阅读整个部分，然后再回到这里。

要开始分区，必须了解连接到计算机的磁盘。可以使用 `fdisk`，它是一个对话驱动的程序，用于创建和操作分区表。

```
fdisk -l
```

此命令将列出计算机上所有可用设备的分区表。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_19_53_34.png)

如你所见，有两个设备连接到我的计算机上（实际上是虚拟机）。根据你的设备数量，此列表可能会更长，在查看列表时忽略任何以`rom`、`loop` 或 `airoot` 结尾的设备。不能使用这些设备进行安装。

所以只剩下了 `/dev/sda` 设备。记住，在你的机器上可能完全不同。例如，如果你有 NVME 驱动器，可能会看到 `/dev/nvme0n1`。

一旦决定使用哪个设备，最好检查该设备内是否存在任何现有分区。可以使用 `fdisk` 命令：

```
fdisk /dev/sda -l
```

记得用你的设备名的替换`/dev/sda`。此命令将列出给定设备内的所有分区。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_13_14.png)

尽管此设备中没有分区，但在实际中，之前可能已经创建了分区。这些分区将显示为 `/dev/sda1`、`/dev/sda2` 或在有 NVME 驱动器的情况下显示为 `/dev/nvme0n1p1`、`/dev/nvme0n1p2` 等等。

`fdisk` 程序可以做的不仅仅是列出分区。查阅 [相应的 ArchWiki 页面](https://wiki.archlinux.org/title/Fdisk) 以了解可以使用该程序执行的操作。

还有另一个程序 `cfdisk`，它是一个基于 [curses- (programming library)](https://en.wikipedia.org/wiki/Curses_(programming_library)) 的 Linux 磁盘分区表操作工具。在功能上与 `fdisk` 相似，基于 curses 意味着它有一个界面，更易于使用。

执行以下命令在设备上启动 `cfdisk`：

```
cfdisk /dev/sda
```

记得用你的设备替换`/dev/sda`。如果设备有以前创建的分区表，那么 `cfdisk` 将直接显示分区列表。否则，将开始选择分区表类型：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_22_55.png)

为基于 UEFI 的系统选择 `gpt`。接下来，将显示设备上的分区和可用空间列表：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_24_09.png)

可以使用向上/向下箭头键沿设备列表上下移动，使用向左/向右箭头键沿不同操作左右移动。

要安装 Arch 或任何其他 Linux 发行版，需要三个独立的分区。如下：

-   EFI 系统分区——用于存储 UEFI 固件所需的文件。
-   ROOT – 用于安装发行版本身。
-   SWAP – 用作内存交换分区。

确保正确的分区/可用空间在列表中突出显示，然后选择 `[ New ]` 操作。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_37_04.png)

填写所需的分区大小。可以使用 M 表示兆字节，G 表示吉字节，T 表示太字节。

对于 EFI 系统分区，应该至少分配 500MB。输入所需空间后，按 Enter 完成。更新后的分区列表可能如下所示：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_37_29.png)

EFI 系统分区是一种特殊类型的分区。它必须采用特定的类型和格式。要更改默认类型，请保持新创建的分区突出显示并从操作列表中选择 `[ Type ]` 。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_39_24.png)

从这个长长的类型列表中，突出显示 `EFI System` 并按 Enter。列表中的分区类型会相应更新：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_40_37.png)

接下来是 root 分区。突出显示剩余的可用空间并再次选择 `[ New ]` 。这次分配 10GB 给这个分区。root 分区的理想大小取决于个人需要。就我而言，我为所有 Linux 安装的 root 分区分配了至少 100GB 的空间。

无需更改此分区的类型。默认的 `Linux filesystem` 就可以了。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_43_14.png)

使用剩余空间创建最后一个分区，并从菜单中将其类型更改为  `Linux swap`：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_45_57.png)

交换分区的理想大小是一个有争议的问题。就我个人而言，我的机器上没有交换分区。我的内存足够大。但如果以后有需要，可以使用 `swapfile` 来代替。无论如何，设备的最终状态应如下所示：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_20_48_49.png)

如果对设置感到满意，请从操作列表中突出显示 [ Write ]，然后按 Enter。该程序将询问是否要保留这些更改。如果同意，必须输入  `yes`  并按 Enter。更改分区表后，选择 `[ Quit ]` 退出程序。

对于那些尝试将 Arch Linux 与 Windows 一起安装的人，我想提一提的是，在这种情况下，EFI 系统分区应该已经存在于设备中。所以不要碰那个。只需创建其他分区并继续。

### 如何格式化分区

现在已经创建了分区，需要格式化它们。可以使用 `mkfs` 和 `mkswap` 程序。在格式化之前，执行以下命令查看分区列表：

```
fdisk /dev/sda -l
```

这次将看到三个新创建的分区及其详细信息：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_21_02_23.png)

记住设备名称，例如 `/dev/sda1`、`/dev/sda2`、`/dev/sda3` 等。EFI 系统分区必须为 FAT32 格式。执行以下命令将分区格式化为 FAT32 格式：

```
mkfs.fat -F32 /dev/sda1
```

下一个是 root 分区。它可以有多种格式，但我习惯使用 EXT4 。使用以下命令格式化为 EXT4 分区：

```
mkfs.ext4 /dev/sda2
```

此操作可能需要一些时间才能完成，具体取决于分区大小。最后是交换分区。使用以下命令对其进行格式化：

```
mkswap /dev/sda3
```

这样，就完成了为安装准备分区的过程。

### 如何挂载文件系统

现在已经创建并格式化了分区，可以挂载它们了。可以使用 `mount` 命令来挂载分区：

```
mount /dev/sda2 /mnt
```

希望记得之前 `/dev/sda2` 分区被创建为 root 分区。Linux 中的 `/mnt` 挂载点用于临时挂载存储设备。由于我们只需要挂载安装 Arch Linux 的分区，所以使用 `/mnt` 挂载点。

而对于交换分区，不能像其他分区一样挂载它。需要明确告诉 Linux 将此分区用作交换。执行以下命令：

```
swapon /dev/sda3
```

可能已经猜到了，`swapon` 命令告诉系统在此设备上进行交换。我们将在后面的部分中使用 EFI 系统分区。目前，安装这两个分区就足够了。

### 如何配置镜像源

在安装 Arch Linux 之前还有最后一步，那就是配置镜像源。镜像源是位于世界各地不同地点的服务器，用于为附近的人提供服务。

安装程序附带 Reflector，这是一个 Python 脚本，用于检索 [Arch Linux 镜像状态](https://archlinux.org/mirrors/status/) 页面的最新镜像列表。要打印出最新的镜像列表，执行以下命令：

```
reflector
```

如果网速较慢，可能会遇到如下错误消息：

```
failed to rate http(s) download (https://arch.jensgutermuth.de/community/os/x86_64/community.db): Download timed out after 5 second(s).
```

当下载信息的时间超过默认超时（5 秒）时，就会发生这种情况。

可以使用 `--download-timeout` 选项来解决此问题：

```
reflector --download-timeout 60
```

现在 reflector 将等待整整一分钟，才会失败。一长串镜像源地址会出现在屏幕上：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_21_36_15-1.png)

遍历整个列表以找到附近的 mirrors 会很麻烦。可以用 reflector 来搞定。

Reflector 可以根据的给定约束生成 mirrors 列表。例如，想要一个最近 12 小时内同步过的 mirrors 列表，这些 mirrors 位于印度或新加坡（这两个离我的位置最近），并按下载速度对镜像进行排序。

可以用 reflector 这样做：

```
reflector --download-timeout 60 --country India,Singapore --age 12 --protocol https --sort rate
```

找到的服务器将像以前一样列出：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_21_45_25.png)

像这样打印出 mirror 列表是不够的。必须将列表保存在 `/etc/pacman.d/mirrorlist` 位置。Pacman，是 Arch Linux 的默认包管理器，可以使用这个文件来查找 mirror。

在覆盖默认 mirror 列表之前，先对其进行复制：

```
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

现在使用 `--save` 选项执行 reflector 命令，如下所示：

```
reflector --download-timeout 60 --country India,Singapore --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

此命令将生成 mirror 列表并覆盖默认列表。现在已准备好安装基本的 Arch Linux 系统。

### 如何安装 Arch Linux 基础系统

在安装基础系统之前，最好根据新的 mirror 列表更新包缓存。请执行以下命令：

```
pacman -Sy
```

Arch Linux 的 pacman 程序就像 Ubuntu 的 `apt` 或 Fedora 的 `dnf` 程序。`-S` 选项表示同步，相当于 `apt` 或 `dnf` 包管理器中的 `install`。

更新过程完成后，可以使用 `pacstrap` 脚本安装 Arch Linux 系统。执行以下命令开始安装：

```
pacstrap /mnt base base-devel linux linux-firmware sudo nano ntfs-3g networkmanager
```

`pacstrap` 脚本可以将软件包安装到指定的新 root 目录。你可能还记得，root 分区被挂载在 `/mnt` 挂载点上，所以这个脚本使用了 `/mnt` 参数。然后，传入要安装的软件包名称：

-   `base` - 定义基本 Arch Linux 安装的最小软件包集。
-   `base-devel`——从源代码构建软件所需的软件包组。
-   `linux`——内核本身。
-   `linux-firmware`——通用硬件的驱动程序。
-   `sudo` - 以 root 身份运行命令
-   `nano` - 具有一些增强功能的 pico 编辑器克隆。
-   `ntfs-3g` – 使用 NTFS 驱动器所需的 NTFS 文件系统驱动程序和实用程序。
-   `networkmanager` - 为系统提供检测和配置以自动连接到网络。

我想澄清一下，这七个包的不是强制性的。要安装功能正常的 Arch Linux，只需要 `base`、`linux` 和 `linux-firmware` 包。但是考虑到其他包也是必需的，为什么不一起装完它们。

根据网速快慢，安装过程可能需要一段时间。坐下来放松一下，直到 pacstrap 完成它的工作。完成后，将看到如下内容：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_22_57_54.png)

恭喜，你已经成功地在你的电脑上安装了 Arch Linux。现在剩下要做的就是配置系统。

## 如何配置 Arch Linux

安装 Arch Linux 没那么难吧？ 事实上，在我看来，安装比配置更简单。这里有很多事情要做。所以让我们开始吧。

### 如何生成 Fstab 文件

根据 [ArchWiki](https://wiki.archlinux.org/title/Fstab),

> [fstab(5)](https://man.archlinux.org/man/fstab.5) 文件可用于定义磁盘分区，各种其他块设备或远程文件系统应如何装入文件系统。

在 Ubuntu 或 Fedora 等其他发行版中，它会在安装过程中自动生成。但是，在 Arch 上，必须手动完成。执行以下命令：

```
genfstab -U /mnt >> /mnt/etc/fstab
```

`genfstab` 程序可以检测给定挂载点以下的所有当前挂载，并以兼容 fstab 的格式将它们打印到标准输出。所以 `genfstab -U /mnt` 将输出 `/mnt` 挂载点下的所有当前挂载。可以使用 `>>` 操作符将该输出保存到 `/mnt/etc/fstab` 文件中。

### 如何使用 Arch-Chroot 登录新安装的系统

现在登录的是实时环境，而不是新安装的系统。

要继续配置新安装的系统，必须先登录。执行以下命令：

```
arch-chroot /mnt
```

`arch-chroot` bash 脚本是 `arch-install-scripts` 软件包的一部分，可以无需重新启动即可更改为新安装系统的 `root` 用户。酷！

### 如何配置时区

切换 root 后，首先要配置的是时区。要查看所有可用时区的列表，请执行以下命令：

```
ls /usr/share/zoneinfo
```

所有主要时区都在目录中。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_23_45_19.png)

我住在位于亚洲区的孟加拉国达卡。如果列出亚洲的内容，可以看到达卡：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_23_45_44.png)

在 `/etc/localtime` 位置创建文件的符号链接，将 Asia/Dhaka 设置为我的默认时区：

```
ln -sf /usr/share/zoneinfo/Asia/Dhaka /etc/localtime
```

`ln` 命令用于创建符号链接。`-sf` 选项分别表示软链接和强制执行。

### 如何配置本地化

现在需要配置语言。Arch Linux 也有一个简单的设置方法。

首先，根据本地化信息编辑 `etc/locale.gen` 文件。在 nano 文本编辑器中打开文件：

```
nano /etc/locale.gen
```

会看到一长串语言列表：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_23_46_29.png)

需要取消要启用的语言的注释。我通常只需要英语和孟加拉语。因此，我将找到 `en_US.UTF-8 UTF-8`、`bn_BD UTF-8` 和 `bn_IN UTF-8` 语言。按 Ctrl + O 保存文件，然后按 Ctrl + X 组合键退出 nano。

现在执行以下命令：

```
locale-gen
```

`locale-gen` 命令将读取 `/etc/locale.gen` 文件并生成相应地语言环境。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_13_01_2022_23_57_55.png)

现在已经启用了多种语言，需要告诉 Arch Linux 默认使用哪一种。打开 `/etc/locale.conf` 文件并向其中添加以下行：

```
LANG=en_US.UTF-8
```

至此，配置语言环境操作完毕。可以随时返回到 `/etc/locale.gen` 文件并从中添加或删除语言。只要记住在执行此操作时运行 `locale-gen` 即可。

如果在安装的第一步中对控制台键盘映射进行了更改，现在也需要保留它们。打开 `/etc/vconsole.conf` 文件并在其中添加你需要的键盘映射。

例如，如果在第一步中将默认键盘映射更改为 `mac-us`，那么需要将以下行添加到 `vconsole.conf` 文件中：

```
KEYMAP=mac-us
```

现在，每次使用虚拟控制台时，它都会有正确的键盘映射，而不必每次都对其进行配置。

### 如何配置网络

在任何 Linux 发行版中手动配置网络都非常棘手。这就是为什么我建议在系统安装过程中安装 `networkmanager` 软件包的原因。如果之前安装过了，就可以跳过安装步骤。否则，现在使用 `pacman` 安装软件包：

```
pacman -S networkmanager
```

Pacman 是一个包管理器。稍后将了解更多有关它的信息。现在让先为计算机设置主机名。主机名是为识别网络上的机器而创建的唯一名称，写入`/etc/hostname` 文件中。

使用 nano 打开文件并在其中写入主机名。可以使用任何字符来标识机器。我通常使用我的设备品牌或型号作为我的主机名，并且由于我使用的是 legion 笔记本电脑，所以我将简单地写下以下内容：

```
legion
```

本地主机名解析由 `nss-myhostname`（systemd 提供的 NSS 模块）提供，无需编辑 `/etc/hosts` 文件。已默认启用。

但有些软件可能仍会直接读取`/etc/hosts` 文件。在 nano 中打开文件并添加以下行：

```
127.0.0.1        localhost
::1              localhost
127.0.1.1        legion
```

确保将 `legion` 替换为你的主机名。现在可以安装上述软件包：

```
pacman -S networkmanager
```

通过执行以下命令启用 `NetworkManager` 服务：

```
systemctl enable NetworkManager
```

确保将 `NetworkManager` 而不是 `networkmanager` 作为服务名称。如果命令成功，网络管理器将从现在开始在启动时自动启动并执行其操作。

### 如何设置 root 密码

你可能想为 root 用户设置密码，执行以下命令：

```
passwd
```

`passwd` 命令允许更改用户的密码。默认情况下，它会更改当前用户的密码，即 `root`。

它会要求输入新密码和确认密码。仔细输入，确保密码不会被忘记。

### 如何创建非 root 用户

长期以 root 用户身份使用 Linux 系统并不是一个好主意。所以创建一个非 root 用户很重要。要创建新用户，请执行以下命令：

```
useradd -m -G wheel farhan
```

`useradd` 命令允许创建一个新用户。确保将 farhan 替换为你要使用的名字。`-m` 选项表示还希望它创建相应的主目录。`-G` 选项会将新用户添加到 Arch Linux 中的管理用户组 `wheel` 组。

现在可以再次使用 `passwd` 命令为新创建的用户设置密码：

```
passwd farhan
```

该程序将提示输入新密码和密码确认。再说一次，别忘了把 farhan 换成你用过的名字。

最后，需要为这个新用户启用 `sudo` 权限。使用 nano 打开 `/etc/sudoers` 文件。打开后，找到以下行并取消注释：

```
# %wheel ALL=(ALL) ALL
```

该文件实质上意味着 `wheel` 组中的所有用户都可以通过提供密码来使用 `sudo`。按 Ctrl + O 保存文件并按 Ctrl + X 退出 nano。现在新用户将能够在必要时使用 `sudo`。

### 如何安装 Microcode

摘自 [PCMag](https://www.pcmag.com/encyclopedia/term/microcode),

> 复杂指令集计算机 (CISC) 中的一组基本指令。Microcode 驻留在单独的高速存储器中，用作机器指令和计算机电路级之间的翻译层。Microcode 使计算机设计人员能够创建机器指令，而无需设计电子电路。

英特尔和 AMD 等处理器制造商经常会发布处理器的稳定性和安全性更新。这些更新对于系统的稳定性至关重要。

在 Arch Linux 中，Microcode 更新可以通过官方软件包获得，每个用户都应该在他们的系统上安装这些软件包。

```
pacman -S amd-ucode


pacman -S intel-ucode
```

仅仅安装这些软件包是不够的。必须确保你的引导加载程序正在加载它们。具体将在下一节中介绍。

### 如何安装和配置 Boot Loader

摘自[维基百科](https://en.wikipedia.org/wiki/Bootloader)，

> bootloader，也拼写为 boot loader 或称为 boot manager 和 bootstrap loader，是负责引导计算机的计算机程序。

bootloader 的细节超出了本文的范围，所以只涉及安装过程。如果过去使用过任何其他 Linux 发行版，可能了解过 GRUB 菜单。

GRUB 是目前最流行的 bootloaders 之一。尽管有很多功能，这里将只演示 GRUB 的安装，因为大多数人只需安装即可。

要安装 GRUB，必须首先安装如下两个软件包。

```
pacman -S grub efibootmgr
```

如果与其他操作系统一起安装，还需要 `os-prober` 包：

```
pacman -S os-prober
```

该程序将搜索系统上已安装的操作系统，并将它们作为 GRUB 配置文件的一部分。

现在，需要挂载之前创建的 EFI 系统分区。为此，首先创建一个 `efi` 目录：

```
mkdir /boot/efi
```

摘自维基百科，

> 在 Linux 和其他类 Unix 操作系统中，`/boot/` 目录包含用于引导操作系统的文件。

该目录存在于所有类 Unix 操作系统中。上面提到的命令在 `/boot` 目录中创建了一个名为 `efi` 的目录。创建目录后，需要在该目录中安装  EFI  系统分区。

```
mount /dev/sda1 /boot/efi
```

希望你还记得我们在分区阶段将`/dev/sda1`设备格式化为EFI系统分区。确保为你的设备使用正确的设备。

现在，我们将使用 `grub-install` 命令在新挂载的 EFI 系统分区中安装 GRUB：

```
grub-install --target=x86_64-efi --bootloader-id=grub
```

可以或多或少地逐字使用此命令。可以将 `--bootloader-id` 更改为你想要展示的任何更贴切的文字，例如 `arch` 或其他内容。如果安装完成且没有任何错误，则需要生成 GRUB 配置文件。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_18_34_01.png)

如果与其他操作系统一起安装，则必须在生成配置文件之前启用 `os-prober`。在 nano 文本编辑器中打开 `/etc/default/grub` 文件。找到以下行并取消注释：

```
#GRUB_DISABLE_OS_PROBER=false
```

这是上述文件中的最后一行，只需滚动到底部并取消注释即可。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_18_31_41.png)

现在执行以下命令生成配置文件：

```
grub-mkconfig -o /boot/grub/grub.cfg
```

`grub-mkconfig` 命令生成 GRUB 配置文件并将其保存到指定的目标位置。在这里，是 `/boot/grub/grub.cfg` 。

该命令还会检测之前安装的 microcode 以及机器上的任何其他现有操作系统。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_18_35_45.png)

恭喜，现在已经安装了 Arch Linux。此时，可以退出 Arch-Chroot 环境，卸载分区，然后重新启动。但我建议你多呆一会儿，一起设置好图形用户界面。

## 如何安装 Xorg

要在系统上运行带有图形用户界面的程序，需要安装 X Window System 实现。最常见的是 Xorg。

要安装 Xorg，请执行以下命令：

```
pacman -S xorg-server
```

等到安装完成，然后继续安装必要的图形驱动程序。

## 如何安装图形驱动程序

在 Arch Linux 上安装图形驱动程序非常简单。只需安装图形处理单元所需的软件包，然后就可以收工了。

```
pacman -S nvidia nvidia-utils


pacman -S xf86-video-amdgpu


pacman -S xf86-video-intel
```

如果需要进一步的帮助，请随时查看 [ArchWiki](https://wiki.archlinux.org/title/Xorg) 页面。

## 如何安装桌面环境

现在已经安装了 Xorg 和必要的图形驱动程序，可以继续安装桌面环境，如 GNOME、Plasma 或 XFCE。

Arch Linux 支持很多的桌面环境，但我只尝试过 GNOME 和 Plasma。我将演示如何安装这两个。

### 如何安装 GNOME 桌面

要安装 GNOME，需要安装 `gnome` 包。执行以下命令：

```
pacman -S gnome
```

在安装过程中，会提供 `pipwire-session-manager` 和 `emoji-font` 软件包的多种选择。在两个提示中按 Enter 接受默认值。安装可能需要一些时间才能完成。

`gnome` 软件包带有 GDM 或 Gnome 显示管理器。可以通过执行以下命令来启用该服务：

```
systemctl enable gdm
```

到这里，在 Arch 系统上启动和运行 GNOME 的准备工作已经全部完成。

### 如何安装 Plasma 桌面

KDE Plasma 安装与 GNOME 没有什么不同。需要安装 Plasma 相关的包而不是 GNOME。

```
pacman -S plasma plasma-wayland-session
```

如果电脑是 NVIDIA 显卡，请不要安装 `plasma-wayland-session`，使用普通的旧 X11。我拥有两台配备 NVIDIA GPU 的设备，并且在使用 Wayland 时它们都表现出不稳定。

在安装过程中，将出现 `ttf-font`、`pipwire-session-manager` 和 `phonon-qt5-backend` 包的多种选择。确保选择 `noto-fonts` 作为 `ttf-font` 并接受其他两个的默认值。

与 GNOME 中的 `gdm` 一样，Plasma 带有 `sddm` 作为默认显示管理器。执行以下命令启用服务：

```
systemctl enable sddm
```

到这里，在 Arch Linux 系统上启动和运行 Plasma 的准备工作已经全部完成。

## 如何完成安装

现在已经安装了 Arch Linux 并完成了所有必要的配置步骤，可以重新启动到新安装的系统。首先要退出 Arch-Chroot 环境：

```
exit
```

接下来，卸载 root 分区以确保没有挂起的操作：

```
umount -R /mnt
```

现在重新启动机器：

```
reboot
```

等到看到 GRUB 菜单。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_10_25.png)

从列表中选择 Arch Linux 并等待系统完成启动。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_11_15.png)

使用你的用户凭据登录，如下！

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_15_41.png)

全新 Arch Linux 系统已准备好。

## 如何在桌面环境之间切换

与其他与默认桌面环境紧密耦合的发行版不同，Arch 非常灵活。可以随时切换到另一个桌面环境。

为此，请先注销当前会话。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_11_15.png)

如你所见，我目前正在使用 Plasma。现在切换到 TTY2 按 Ctrl + Alt + F2 组合键。将看到控制台登录提示：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_18_54.png)

使用 root 凭据登录并禁用 `sddm` 显示管理器。

```
systemctl disable sddm
```

然后卸载之前安装的 Plasma 相关包：

```
sudo pacman -Rns plasma plasma-wayland-session
```

卸载软件包后，安装 GNOME 所需的软件包：

```
pacman -S gnome
```

然后根据你之前阅读的部分执行安装。安装 `gnome` 包后，启用 `gdm` 显示管理器：

```
systemctl enable gdm
```

重新启动计算机。

```
reboot
```

等到 Arch Linux 系统完成启动。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_20_24_11.png)

哇哦，漂亮的 Gnome 显示管理器。使用你的凭据登录。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_19_53_31.png)

可以根据需要在桌面环境之间切换，但建议在其中一个环境下安顿下来。另外，不建议同时安装多个。

## 使用 Pacman 管理包

已经使用 pacman 安装了许多软件包。它相当于 Ubuntu 中的 apt 和 Fedora 中的 dnf 等软件包管理器。

在本节中，将介绍一些每天都可能用到的常用 pacman 命令。

### 如何使用 Pacman 安装软件包

可以使用以下 pacman 命令语法安装软件包：

```
sudo pacman -S rust
```

可以按如下方式安装多个软件包：

```
sudo pacman -S rust golang
```

还可以指定软件包的位置，如下所示：

```
sudo pacman -S extra/rust
```

在此命令中，`-S` 选项表示同步，相当于在 apt 或 dnf 包管理器的安装。

### 如何使用 Pacman 删除软件包

可以使用以下 pacman 语法删除软件包：

```
sudo pacman -R rust
```

这将删除包，但会留下依赖项。如果其他包也不需要它们，则可以通过执行以下命令删除不在需要的包：

```
sudo pacman -Rs rust
```

Pacman 在删除某些应用程序时通常会保存重要的配置文件。可以使用以下语法覆盖此行为：

```
sudo pacman -Rn rust
```

当卸载某些包时，通常会使用`sudo pacman -Rns`。要展示的最后一件事是如何删除孤立包。

在 Ubuntu 中，`sudo apt autoremove` 命令会卸载任何不必要的软件包。Arch 中的等效命令是：

```
sudo pacman -Qdtq | pacman -Rs -
```

这将清除以前安装的软件包中的残余软件包。

### 如何使用 Pacman 升级软件包

可以使用以下语法升级系统中的所有软件包：

```
sudo pacman -Syu
```

在这个命令中，`S` 选项同步包，`y` 刷新本地包缓存，`u` 更新系统。这就像终极升级命令，我基本每天都会运行一次。

### 如何使用 Pacman 搜索软件包

要在数据库中搜索包，可以使用以下语法：

```
sudo pacman -Ss rust
```

这将打印出在数据库中找到的所有包含该搜索词的包，并且还会标识是否已经安装。

如果想检查一个包是否已经安装，可以使用以下命令：

```
sudo pacman -Qs rust
```

当想卸载软件包但不知道其确切名称时，这很有用。

## 如何在 Arch Linux 中使用 AUR

摘自 [It's FOSS](https://itsfoss.com/aur-arch-linux/)

> AUR 代表 Arch 用户存储库。它是基于 Arch 的 Linux 发行版用户的社区驱动存储库。它包含名为 PKGBUILDs 的包描述，允许使用 makepkg 从源代码编译包，然后通过 pacman（Arch Linux 中的包管理器）安装它。

AUR 是 Arch Linux 最吸引人的特性之一。有了 AUR，Arch Linux 的软件包数量几乎与 Debian 相当。之前使用 `pacman` 安装了各种软件包。遗憾的是，不能使用它从 AUR 安装软件包。

需要安装一个 AUR helper。Arch Linux 默认不支持这些 helpers，它更倾向让开发者自己手动构建包。在这里会介绍这两种技术。如果了解 helper 的工作原理，手动完成会很顺手。

### 如何使用 Helper 安装软件包

在可用且当前维护的 AUR helper 中，我喜欢 `yay` 或另一个 yogurt 包。它是用 Go 编写的，非常可靠。

不能像其他软件包一样安装`yay`。需要获取源代码并编译程序。需要 `git` 和 `base-devel` 包来执行此操作。这里假设在 Arch Linux 安装期间已经安装了 `base-devel`：

```
pacman -S git
```

从 GitHub 克隆 yay 仓库并 `cd` 进入到目录里：

```
git clone https://aur.archlinux.org/yay.git && cd yay
```

执行以下命令，从源代码构建和安装 yay：

```
makepkg -si
```

makepkg 脚本自动执行包的构建过程。`-si` 选项代表同步依赖项和安装。第一个选项将安装所需的依赖项（在本例中为 Golang），后一个选项将安装构建的包。

构建过程完成后，makepkg 将要求输入密码。输入密码，完成安装。

检查 yay 是否已正确安装：

```
yay --version
```

现在让我们使用 yay 安装一些东西。比较常见软件包如 [visual-studio-code-bin](https://aur.archlinux.org/packages/visual-studio-code-bin/) 软件包。要安装它，执行以下命令：

```
yay -S visual-studio-code-bin
```

与 pacman 不同，不应该使用 sudo 运行 yay。Yay 将查找给定的包并询问是否想查看差异：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_21_07_26.png)

AUR 上的所有仓库都带有一个 PKGBUILD 文件，其中包含构建此包的说明。Yay 有这个不错的功能，它可以显示自上次以来 PKGBUILD 文件中发生了什么变化。

现在，选择 `N` 表示无，然后按 Enter。Yay 现在将查找依赖项并输入密码来执行安装。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_21_19_58.png)

确认安装并提供密码。Yay 将安装依赖项并开始构建包。构建完成后，yay 将安装该软件包并在必要时提示输入密码。

安装完成后，在应用程序启动器中搜索 Visual Studio Code：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_14_01_2022_21_28_42.png)

恭喜你从 AUR 安装了你的第一个包。Yay 命令与 pacman 几乎相同，所以如果可以用 pacman 做某事，也可以用 yay 做。

事实上，yay 也可以安装来自 Arch Linux 官方仓库的软件包，比如 pacman。建议仅在必要时使用 yay 从 AUR 安装软件包，使用 pacman 安装其他所有软件包。

### 如何手动安装软件包

就像我在上一节中所说的，ArchWiki 建议避免使用任何 AUR helper，而是手动从 AUR 安装包。现在将展示如何做。

确保安装了 `git` 和 `base-devel` 包。如果没有，使用 pacman 安装它们。

做为演示，这次来安装 Spotify。首先访问 spotify 包的 AUR 页面 - [https://aur.archlinux.org/packages/spotify/](https://aur.archlinux.org/packages/spotify/) 并复制“Git Clone URL”。

![](https://www.freecodecamp.org/news/content/images/2022/01/image-68.png)

该页面甚至列出了需要的所有依赖项。将仓库克隆到计算机：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_16_01_2022_21_16_43.png)

每个 AUR 仓库都附带一个 PKGBUILD 文件，其中包含构建包的说明。当从 AUR 安装软件包时，可以使用类似 `cat` 命令检查 PKGBUILD 文件：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_16_01_2022_21_22_37.png)

确保文件中没有任何有害内容。使用 `makepkg` 安装任何依赖项，构建包并安装它。理想情况下不应该有任何问题，但有时，可能会出现异常情况。

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_16_01_2022_21_34_29.png)

这时，可以返回相应的 AUR 页面并查看用户评论。在这里，找到了以下固定评论：

![](https://www.freecodecamp.org/news/content/images/2022/01/image-69.png)

原来该软件包要求将 Spotify for Linux gpg 密钥添加到用户 kyechain。此命令使用 `curl` 下载 gpg 密钥并将其作为 `gpg --import` 命令的输入：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_16_01_2022_21_37_50.png)

尝试再次执行`makepkg -si`，这次一切都正常了：

![](https://www.freecodecamp.org/news/content/images/2022/01/VirtualBox_archlinux-2022.01.01-x86_64_16_01_2022_21_39_33.png)

看，事实上！ 手动安装软件包经常会出现此类故障，一般在评论里就可以找到解法。现在让我们来欣赏音乐吧。

## 如何解决常见问题

我多年来一直使用 Arch 作为我所有主力机的操作系统，但仍然会遇到一些问题。幸运的是，当遇到困难时，有一些很棒的地方可以寻求帮助：

-   [ArchWiki](https://wiki.archlinux.org/)
-   [Arch Linux Forum](https://bbs.archlinux.org/)
-   [r/archlinux](https://www.reddit.com/r/archlinux/)

在大多数情况下，wiki 可以找到想要找的内容。事实上，如果使用的是笔记本电脑，执行某些操作时卡住了，有一个完整的 wiki [类别](https://wiki.archlinux.org/title/Category:Laptops)专门按不同的笔记本型号分类。建议看看 wiki。

如果 wiki 未能解决你的问题，请在论坛和 subreddit 上询问其他用户。但是，无论何时，请务必先进行研究，并在帖子中包含尽可能多的描述。如果其他用户不得不不断地向你询问更多信息，这真的很烦人，这也会降低你得到答案的机会。

## 如何使用 Live Arch ISO 作为恢复媒介

不要理会别人怎么说，只要你知道自己在做什么，Arch Linux 就很少出问题。如果在 AUR 中安装较新的包，或者在不知道它们用途的情况下不断切换不同的内核，系统可能无法启动。

在这些情况下，可以将 Live U 盘用作应急媒介。为此，请将可启动 U 盘重新连接到计算机并启动到实时环境。在那里，如果愿意，可以配置时间、键盘映射和字体。

然后使用 `fdisk` 列出所有分区并找到保存 Arch Linux 安装的分区。在我的例子中，它是 `/dev/sda2` 分区。像以前一样挂载分区：

```
mount /dev/sda2 /mnt
```

现在使用 Arch-Chroot 以 root 用户身份登录。

```
arch-chroot /mnt
```

现在卸载安装的坏包或回到过去曾经工作的内核版本等等。完成后，退出 Arch-Chroot 环境，卸载分区，然后重新启动：

```
exit
umount -R /mnt
reboot
```

如果计算机启动正常，那么恭喜。否则，请尝试 wiki、论坛或 subreddit。如果没有任何效果，可能需要重新安装。

## 拓展阅读

如果已经走到了这一步，那么已经接触了很多资料——但这还不是全部。整本手册是通过结合来自 wiki、论坛和 subreddit 的信息编写的。我列出了一些拓展的 wiki 页面。

-   [Installation guide](https://wiki.archlinux.org/title/Installation_guide)
-   [Network configuration](https://wiki.archlinux.org/title/Network_configuration)
-   [General recommendation](https://wiki.archlinux.org/title/General_recommendations)
-   [Desktop environment](https://wiki.archlinux.org/title/Desktop_environment)
-   [pacman](https://wiki.archlinux.org/title/pacman)
-   [Arch Build System](https://wiki.archlinux.org/title/Arch_Build_System)
-   [makepkg](https://wiki.archlinux.org/title/makepkg)
-   [List of applications](https://wiki.archlinux.org/title/List_of_applications)

目前想到这些，我会更新这个列表。

## 结论

衷心感谢你花时间阅读本文。希望你享受学习过程，能学到一些关于 Arch 和 Linux 的知识。

除了本文，我还编写了关于其他复杂主题的手册，可在以下网站免费获得 [freeCodeCamp](https://www.freecodecamp.org/news/the-docker-handbook/freecodecamp.org/news/author/farhanhasin/)。

这些手册是我践行“为大家简化难以理解的技术”使命的一部分。每一本手册都花费了大量时间和精力。

如果你喜欢我的写作并想鼓励我，请考虑 star [GitHub](https://github.com/fhsinchy/) 并在 [LinkedIn](https://www. linkedin.com/in/farhanhasin/) 上关注我。

我总是乐于接受建议和讨论。欢迎在 [Twitter](https://twitter.com/frhnhsin) 或 [LinkedIn](https://www.linkedin.com/in/farhanhasin/) 上关注我，直接向我发送消息。

最后，欢迎分享给你的朋友，因为

> 在开源领域，我们强烈认为要真正做好某件事，就必须让更多人参与进来。—  Linus Torvalds

接下来，保持严谨并持续学习。
