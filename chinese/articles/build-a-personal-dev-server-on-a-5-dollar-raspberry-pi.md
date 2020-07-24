> * 原文地址：[How to Build a Personal Dev Server on a $5 Raspberry Pi 如何用树莓派搭建个人服务器](https://www.freecodecamp.org/news/build-a-personal-dev-server-on-a-5-dollar-raspberry-pi/)
> * 原文作者：Michael Yuan
> * 译者：Miley Fu & alabulei
> * 校对者：

![How to Build a Personal Dev Server on a $5 Raspberry Pi](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/IMG_8632.JPG)

> 本文你会学到如何通过安装 Git、Node.js、Rust 和 Docker 在树莓派上创建个人开发服务器。最便宜的树莓派版本只需5美金。 [点击这里免费赢取价值25美金的树莓派。][1].

树莓派个头很小，却是个强大的计算机。最便宜的版本[树莓派 Zero][2], 可以运行功能齐全的 Linux 发行版并驱动高清显示。大小为两个25美分的硬币，价格为5美元。

售价10美元的树莓派 [Zero W][3]  带有集成蓝牙和 WiFi.

![](https://www.freecodecamp.org/news/content/images/2020/07/img_8603.png)

售价10美元的树莓派 Zero W 具有强大的 CPU、WiFi、蓝牙和各种连接器

如果选择更加高配的版本，不到100美元的价格就可以购买[Raspberry Pi 4 desktop kit][4] 。 这个套件运行 1.5GHz 的4核 ARM CPU、GPU、2GB（最大8GB）的 RAM、MicroSD 卡、WiFi 、以太网接口、USB 端口、可驱动的 HDMI 端口、 16GB（最大2TB）的存储空间、4K显示器、键盘、鼠标。

树莓派不仅仅是标准计算机。树莓派非常有趣，又有多种玩法。树莓派表面有一排 GPIO（通用输入输出）引脚。你可以将简单的传感器（例如温度，湿度，光线）连接到这些引脚，通过运行在树莓派上的应用程序捕获这些数据。

例如，将 LED 灯和电机连接到这些引脚，然后使用树莓派应用程序驱动这些外围设备。

对于更复杂的传感器或设备，例如相机模块，还可以通过 USB 或 Wifi 连接到树莓派，并通过软件对其进行访问。树莓派是学习硬件的绝佳设备。因此，很多编程课用树莓派来做教学。

但是，乐趣和学习并非小孩子专属。 树莓派具有强大的计算能力和便捷的联网功能，因此可以轻松地成为个人应用服务器。

在树莓派上放置一个 Web 应用，比如协作笔记的应用或者一些用于共享的文档和视频，然后把树莓派拿到会议上，房间中的每个人都使用它。有了这个神器，连互联网都不需要。并且这个网络完全去中心化，不受任何审查。

个人服务器对开发者特别有用。它构成了一个单独的环境，可以部署和测试服务端应用程序，完全不会弄乱你的笔记本电脑。个人开发服务器就像打了兴奋剂的 Docker。

## 首先, 准备一个树莓派

如果之前你没用过树莓派，最简单也是最昂贵的方式是[花100美元买一个台式机套件][5]。这里面包含计算机里面的所有零件，除了显示器。

如果是将树莓派用作个人开发服务器，在初步的设置之后不需要显示器，只需要在开启的时候用笔记本电脑通过 SSH 链接它。

如何你想要参与[高性能 Web 学习][7]，点击[这里][6] 了解如何免费获取树莓派套件！  .


当然，如果你有备用的计算机零件，例如 MicroSD 卡、USB 电源、键盘和鼠标，那么只要购买最简易的树莓派主板就可以省下一笔钱。只需要花5美元买一个树莓派 Zero 主板，或者以35美元的价格买一个树莓派4主板。

但是有了主板，还缺少 MicroSD 卡。MicroSD 卡可以用作存储操作系统和数据的“硬盘”。因此还需要购买 16GB MicroSD 卡，MicroSD 读卡器，这大概需要10美元。使用树莓派 [Raspberry Pi Imager][8]  从笔记本电脑上将操作系统加载到 MicroSD 卡上。

一般大家都会选择 Raspberry Pi OS 和 Ubuntu Linux。两者都是基于 Debian 的 Linux 发行版。大多数入门工具包都在其 MicroSD 卡上预安装了 Raspberry Pi OS，称为 NOOBS。

接下来，我将详细介绍两种操作系统。

## 如何设置 Raspberry Pi OS

将带有 NOOBS 的 MicroSD 卡插入并连接显示器、键盘和鼠标后，打开电源。

然后，按照屏幕上的说明安装 Raspberry Pi OS（以前称为Raspbian OS）。接着为树莓派的用户设置密码以及 wifi 连接。

登录后，找到 Preference，然后来到 Raspberry Pi Configuration 菜单并启用 SSH，这样就可以从另一台计算机登录到树莓派。

**注意**：为了将树莓派用作 “headless” 服务器，可以从路由器请求一个静态 IP 地址。以后，只需打开电源，从其它计算机或电话通过 SSH 连接树莓派。

Raspberry Pi OS 源自 Debian Linux 发行版，附带一个完整的桌面 UI 环境、一个现代 Web 浏览器、一个命令行终端以及学习程序，例如类似 Python，Java 和 Scratch IDE 的学习教程。


![](https://www.freecodecamp.org/news/content/images/2020/07/IMG_8672.JPG)

我设置好的有 Raspberry Pi OS 的树莓派4，主机非常小。

一切准备就绪，我们要做的是通过命令行终端安装开发和服务器软件。

此时，还可以通过运行下面的命令在本地网络上找到树莓派的 IP 地址，然后用本地 IP 地址、用户名 Pi 、密码通过 SSH 连接到树莓派。

```
$ hostname -I
192.168.2.108 172.17.0.1
```

[这里是 Raspberry Pi OS 上安装的软件包的完整列表][9]. 建议更新和升级到最新软件包。运行以下命令，请耐心等待。升级更新可能要花一个小时。

```
$ sudo apt update && sudo apt upgrade
```

## 如何设置 Ubuntu 服务器 20.04

Raspberry Pi OS 主要面向台式机设计。对于只想将树莓派用作服务器或 IoT 设备的开发者，Ubuntu Linux 是更好的选择，带有最新的软件包和库。在没有桌面窗口、Web浏览器、Java、游戏和学习工具的情况下，Ubuntu Linux 效率可能更高。

你可以从网上下载用于树莓派的 [Ubuntu Server images][10]， 并将其加载到 MicroSD 卡上。但是，更简单的方法是使用 [Raspberry Pi Imager][11], 从菜单中选择 Ubuntu Server 20.04 TLS，然后将其写入空的 MicroSD 卡。

准备好 MicroSD 卡后，按照 [说明][12]  输入 WiFi 网络名称和密码。这样，树莓派设备一启动就能立即连接到网络。

基本上，将 MicroSD 卡放入 Raspberry Pi 中，连接 USB 电源，等待其上线。然后从 WiFi 路由器找到 `raspberrypi` 设备的 IP，就可以通过 SSH 连接到网络上的任一计算机。 

初始用户名和密码是 `ubuntu/ubuntu` 。甚至无需连接显示器或键盘。超级简单，这样就完成 headless 设置了！

**注意**: 如果莓派在启动时无法连接到WiFi，就需要连接 HDMI 显示器和 USB 键盘。然后按照 [说明][13]  在运行系统上调试和设置 WiFi。

接下来，让我们在树莓派上安装开发者工具堆栈。

## 安装 Git

我会在所有开发环境上安装 Git，因为大量的软件可以直接在 Git 的 repo 面获取，省去了下载和复制的麻烦。

Git 还允许在私有 repo 中保存和备份自己的工作。对于像树莓派这样的小型计算机，我建议在 Git 中保存所有工作，以防丢失设备或 MicroSD 卡。

以下命令可以安装Git：

```
$ sudo apt install git
```

## 安装 Node.js

要将树莓派变成用于 Web 应用的个人开发服务器，需要安装 Web 应用程序运行时。

对于当今的大多数开发者来说，最好从 Node.js 开始，有了它就可以用 JavaScript 编写服务器端应用。以下两个命令是在树莓派上安装 Node.js。

```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt install nodejs
```

通过运行以下两个命令来验证安装是否正确完成。Node 和 npm 都可用。

```
$ node -v
v10.19.0
$ npm -v
5.8.0
```

这里你可以使用 npm 安装模块，例如， 用 npm 安装一个常用的模块 express 框架，用于 Web 应用。

```
$ npm install express
```

现在，您可以运行一次  [ExpressJS hello world 例子][14]  在树莓派上创建一个Web服务器，并使用网络上任何计算机上的 Web 浏览器来访问应用！

## 安装 Rust

Rust 是一种快速成长的编程语言，用于编写系统和 Web 应用程序。Rust 接近硬件，性能高，内存安全性强。这使 Rust非常适合在资源受限的设备，例如树莓派，上编写应用。

而且，Rust 是 StackOverflow 上用户连续5年最喜欢的编程语言。非常值得花时间学习！

Rust 的一个重要用例是将 [ Rust 函数编译成 WebAssembly 并在 Node.js 程序运行][15]以实现[超强性能、安全性和代码可移植性][16]. 这是在小型 [Raspberry Pi device][17] 设备上运行计算密集型 Web 应用程序的绝佳选择。实际上，只要知道如何在 Node.js 运行 Rust 函数，就可以免费赢取一份[树莓派入门套件][18]。

注意：严格来说，不需要在树莓派上安装 Rust 工具。通常，只要在树莓派中运行 Rust 程序即可。我们可以在任何计算机上编译 Rust 程序，然后将编译好的二进制文件复制到树莓派。

但是，有了功能强大的 CPU，就可以在树莓派上编译 Rust 程序。何乐而不为呢！

以下命令是在树莓派上安装 Rust 编译器工具链。

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

运行下面的命令，无需注销和再次登录就能设置正确的路径。

```
$ source $HOME/.cargo/env
```

上面的命令还将安装名为 cargo 的 Rust 包管理器。大多数 Rust 开发者使用 cargo 创建和分享他们的工作。

```
$ cargo -V
cargo 1.44.1 (88ba85757 2020-06-11)
```

接下来，可以 clone 我们的 [Rust learning repository][19], 从示例中学习 Rust.

```
$ git clone https://github.com/second-state/wasm-learning.git
```

这是 [hello world 示例][20]. 玩得开心

```
$ cd wasm-learning/rust/hello
$ cargo build
   Compiling hello v0.1.0 (/home/pi/Dev/wasm-learning/rust/hello)
    Finished dev [unoptimized + debuginfo] target(s) in 4.35s
$ target/debug/hello
Hello, world!
```

查看  [Rust 官方网站][21]  以及 [Rust by Example][22]  书籍，获取更多学习资源。

## 学习 Docker

我们看到，Raspberry Pi OS 和 Ubuntu Server 都是非常强大的 Linux 发行版，带有许多软件包。

但是，如果我想在其他操作系统上测试应用程序怎么办？我需要格式化并在 MicroSD 卡上重新安装其他操作系统吗？答案是不。用 Docker 就可以完美解决！

以下两个命令是在树莓派上安装 Docker ：

```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

运行以下命令，以便可以将 Docker 作为树莓派用户使用：

```
$ sudo usermod -aG docker pi
```
Docker info 命令显示 Docker 现在已安装在具有 Raspberry Pi OS 的 ARM 系统上。

```
$ docker info
... ...
 Kernel Version: 4.19.118-v7l+
 Operating System: Raspbian GNU/Linux 10 (buster)
 OSType: linux
 Architecture: armv7l
 CPUs: 4
 Total Memory: 3.814GiB
 Name: raspberrypi
 ID: XERI:ZVVZ:XQVA:HXSH:KRPI:6GL2:5QRE:E7GZ:Z72Q:6SGF:CEI6:GKTC
 Docker Root Dir: /var/lib/docker
... ...
```

接下来，您可以获取最新的 Ubuntu 发行版的 Docker 映像，运行它，并以命令行用户的身份登录 Ubuntu。

```
$ docker pull ubuntu
... ...
$ docker run -it ubuntu bash
root# ... enter commands ...
```

## 接下来呢？

在本文中，我们介绍了基础知识，并学习了如何将 Raspberry Pi 4 设备变成软件开发者的个人开发服务器。

有关 Git、Node.js、Rust、WebAssembly 和 Docker 的知识很多。我们还可以在树莓派上安装许多其它开发者堆栈。

[免费获得树莓派][23]  别忘了告诉我们t!

[订阅 newsletter][24]，保持联系！

[1]: https://segmentfault.com/a/1190000023363546
[2]: https://www.raspberrypi.org/products/raspberry-pi-zero/
[3]: https://www.raspberrypi.org/products/raspberry-pi-zero-w/
[4]: https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/
[5]: https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/
[6]: hhttps://segmentfault.com/a/1190000023363546
[7]: hhttps://www.secondstate.io/articles/get-started-with-rust-functions-in-node-zh/
[8]: https://www.raspberrypi.org/downloads/
[9]: https://n8henrie.com/2019/08/list-of-default-packages-on-raspbian-buster-lite/
[10]: https://ubuntu.com/download/raspberry-pi
[11]: https://www.raspberrypi.org/downloads/
[12]: https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#3-wifi-or-ethernet
[13]: https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line
[14]: https://expressjs.com/en/starter/hello-world.html
[15]: https://www.secondstate.io/articles/get-started-with-rust-functions-in-node-zh/
[16]: https://www.secondstate.io/articles/why-webassembly-server/
[17]: https://www.secondstate.io/articles/get-started-with-rust-functions-in-node-zh/
[18]: https://segmentfault.com/a/1190000023363546
[19]: https://github.com/second-state/wasm-learning/
[20]: https://www.secondstate.io/articles/a-rusty-hello-world/
[21]: https://www.rust-lang.org/learn
[22]: https://rust-by-example-ext.com/
[23]: https://segmentfault.com/a/1190000023363546
[24]: https://webassemblytoday.substack.com/
