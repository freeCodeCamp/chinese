> -   原文地址：[The Docker Handbook – 2021 Edition Docker 入门教程 - 2021 最新版](https://www.freecodecamp.org/news/the-docker-handbook/)
> -   原文作者：[Farhan Hasin Chowdhury](https://www.freecodecamp.org/news/author/farhanhasin/)
> -   译者：ZhichengChen
> -   校对者：

![Docker 入门教程 - 2021 最新版](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/docker-1280x612-2021.png)

容器化的概念很早就有了。2013 年 [Docker 引擎](https://docs.docker.com/get-started/overview/#docker-engine)的出现使应用程序容器化变得更加容易。

根据 [Stack Overflow 开发人员调查-2020](https://insights.stackoverflow.com/survey/2020#overview)，[Docker](https://docker.com/) 是 [#1 最想要的平台](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-wanted5)，[#2 最喜欢的平台](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-loved5)，以及[#3 最流行的平台](https://insights.stackoverflow.com/survey/2020#technology-platforms)。

尽管 Docker 功能强大，但上手确并不容易。 因此，本书将介绍从基础知识到更高层次容器化的的所有内容。 读完整本书之后，你应该能够：

-   容器化（几乎）任何应用程序
-   将自定义 Docker 镜像上传到在线仓库
-   使用 Docker Compose 处理多个容器

## 先决条件

- 熟悉 Linux 终端操作
- 熟悉 JavaScript（稍后的的演示项目用到了 JavaScript）

## 目录

-   [容器化和 Docker 简介](https://www.freecodecamp.org/news/the-docker-handbook/#introduction-to-containerization-and-docker)
-   [怎样安装 Docker](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-install-docker)
    -   [怎样在 macOS 里安装 Docker](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-install-docker-on-macos)
    -   [怎样在 Windows 上安装 Docker](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-install-docker-on-windows)
    -   [怎样在 Linux 上安装 Docker](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-install-docker-on-linux)
-   [初识 Docker - Docker 基本知识介绍](https://www.freecodecamp.org/news/the-docker-handbook/#hello-world-in-docker-intro-to-docker-basics)
    -   [什么是容器？](https://www.freecodecamp.org/news/the-docker-handbook/#what-is-a-container)
    -   [什么是 Docker 镜像？](https://www.freecodecamp.org/news/the-docker-handbook/#what-is-a-docker-image)
    -   [什么是仓库？](https://www.freecodecamp.org/news/the-docker-handbook/#what-is-a-docker-registry)
    -   [Docker 架构概述](https://www.freecodecamp.org/news/the-docker-handbook/#docker-architecture-overview)
    -   [全景图](https://www.freecodecamp.org/news/the-docker-handbook/#the-full-picture)
-   [Docker 容器操作基础知识](https://www.freecodecamp.org/news/the-docker-handbook/#docker-container-manipulation-basics)
    -   [怎样运行容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-run-a-container)
    -   [怎样公开端口](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-publish-a-port)
    -   [如何使用分离模式](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-use-detached-mode)
    -   [怎样列表展示容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-list-containers)
    -   [怎样命名或者重命名一个容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-name-or-rename-a-container)
    -   [怎样停止或者杀死运行中的容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-stop-or-kill-a-running-container)
    -   [怎样重新启动容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-restart-a-container)
    -   [怎样创建而不运行容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-a-container-without-running)
    -   [怎样移除挂起的容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-remove-dangling-containers)
    -   [怎样以交互式模式运行容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-run-a-container-in-interactive-mode)
    -   [怎样在容器里执行命令](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-execute-commands-inside-a-container)
    -   [如何处理可执行镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-work-with-executable-images)
-   [Docker 镜像操作基础知识](https://www.freecodecamp.org/news/the-docker-handbook/#docker-image-manipulation-basics)
    -   [如何创建 Docker 镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-a-docker-image)
    -   [如何标记 Docker 镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-tag-docker-images)
    -   [如何删除、列表展示镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-list-and-remove-docker-images)
    -   [理解 Docker 镜像的分层](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-understand-the-many-layers-of-a-docker-image)
    -   [怎样从源码构建 NGINX](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-build-nginx-from-source)
    -   [怎样优化 Docker 镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-optimize-docker-images)
    -   [拥抱 Alpine Linux](https://www.freecodecamp.org/news/the-docker-handbook/#embracing-alpine-linux)
    -   [怎样创建可执行 Docker 镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-executable-docker-images)
    -   [怎样在线共享 Docker 镜像](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-share-your-docker-images-online)
-   [怎样容器化 JavaScript 应用](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-containerize-a-javascript-application)
    -   [如何编写开发 Dockerfile](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-write-the-development-dockerfile)
    -   [如何在 Docker 中使用绑定挂载](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-work-with-bind-mounts-in-docker)
    -   [如何在 Docker 中使用匿名卷](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-work-with-anonymous-volumes-in-docker)
    -   [如何在 Docker 中执行多阶段构建](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-perform-multi-staged-builds-in-docker)
    - [如何忽略不必要的文件](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-ignore-unnecessary-files)
-   [Docker 中的网络操作基础知识](https://www.freecodecamp.org/news/the-docker-handbook/#network-manipulation-basics-in-docker)
    -   [Docker 网络基础](https://www.freecodecamp.org/news/the-docker-handbook/#docker-network-basics)
    -   [如何在 Docker 中创建用户定义的桥接网络](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-a-user-defined-bridge-in-docker)
    -   [如何在 Docker 中将容器连接到网络](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-attach-a-container-to-a-network-in-docker)
    -   [如何在 Docker 中从网络分离容器](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-detach-containers-from-a-network-in-docker)
    -   [如何删除 Docker 中的网络](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-get-rid-of-networks-in-docker)
-   [如何容器化多容器 JavaScript 应用程序](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-containerize-a-multi-container-javascript-application)
    -   [如何运行数据库服务](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-run-the-database-server)
    -   [如何在 Docker 中使用命名卷](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-work-with-named-volumes-in-docker)
    -   [如何从 Docker 中的容器访问日志](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-access-logs-from-a-container-in-docker)
    -   [如何在 Docker 中创建网络并连接数据库服务](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-a-network-and-attaching-the-database-server-in-docker)
    -   [如何编写 Dockerfile](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-write-the-dockerfile)
    -   [如何在正在运行的容器中执行命令](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-execute-commands-in-a-running-container)
    -   [如何在 Docker 中编写管理脚本](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-write-management-scripts-in-docker)
-   [如何使用 Docker-Compose 组合项目](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-compose-projects-using-docker-compose)
    -   [Docker Compose 基础](https://www.freecodecamp.org/news/the-docker-handbook/#docker-compose-basics)
    -   [如何在 Docker Compose 中启动服务](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-start-services-in-docker-compose)
    -   [如何在 Docker Compose 中列表展示服务](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-list-services-in-docker-compose)
    -   [如何在 Docker Compose 正在运行的服务中执行命令](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-execute-commands-inside-a-running-service-in-docker-compose)
    -   [如何访问 Docker Compose 中正在运行的服务日志](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-access-logs-from-a-running-service-in-docker-compose)
    -   [如何在 Docker Compose 中停止服务](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-stop-services-in-docker-compose)
    -   [如何在 Docker Compose 中编写全栈应用程序](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-compose-a-full-stack-application-in-docker-compose)
-   [结论](https://www.freecodecamp.org/news/the-docker-handbook/#conclusion)

## Project Code 项目代码

Code for the example projects can be found in the following repository:
可以在以下仓库中找到示例项目的代码：

[

fhsinchy/docker-handbook-projects

Project codes used in “The Docker Handbook” :notebook: - fhsinchy/docker-handbook-projects

![](https://github.githubassets.com/favicons/favicon.svg)fhsinchyGitHub

![](https://repository-images.githubusercontent.com/277878515/d76adb00-c391-11ea-8ecb-718db51373b2)

](https://github.com/fhsinchy/docker-handbook-projects/)

欢迎 ⭐ 

完整代码在 [`containerized`](https://github.com/fhsinchy/docker-handbook-projects/tree/containerized) 分支

## 贡献

这本书是完全开源的，欢迎高质量的贡献。可以在以下仓库中找到完整的内容：

[

fhsinchy/the-docker-handbook

Open-source book on Docker. Contribute to fhsinchy/the-docker-handbook development by creating an account on GitHub.

![](https://github.githubassets.com/favicons/favicon.svg)fhsinchyGitHub

![](https://avatars.githubusercontent.com/u/22444207?s=400&v=4)

](https://github.com/fhsinchy/the-docker-handbook)

你的 ⭐ 是我进步的动力

我通常先在本书的 GitBook 版本上进行更改和更新，然后在将其发布在 freeCodeCamp 上。 你可以在以下链接中找到本书的最新编辑中版本：

[

The Docker Handbook

![](https://d1j8pt39hxlh3d.cloudfront.net/emoji/emojione/5.0/png/unicode/32/1f4d9.png)The Docker Handbook

![](https://app.gitbook.com/share/space/thumbnail/-MD_PXBw_anEnk5G-Lck.png)

](https://docker.farhan.info/)

别忘了评分支持

如果你正在寻找本书的完整稳定版本，freeCodeCamp 是最好的选择：
[

The Docker Handbook

The concept of containerization itself is pretty old, but the emergence of the Docker Engine \[https://docs.docker.com/get-started/overview/#docker-engine\] in2013 has made it much easier to containerize your applications. According to the Stack Overflow Developer Survey - 2020\[https://insights.stackoverflow.com/survey/2020#overview……

![](https://www.freecodecamp.org/news/favicon.png)Farhan Hasin ChowdhuryfreeCodeCamp.org

![](https://www.freecodecamp.org/news/content/images/2020/07/docker-handbook-preview.png)

](https://www.freecodecamp.org/news/the-docker-handbook/)

如果有所收获请分享给你的朋友

不管阅读本书的哪个版本，都不要忘记留下你的意见。 欢迎提出建设性的批评。

## 容器化和 Docker 简介

摘自 [IBM](https://www.ibm.com/cloud/learn/containerization#toc-what-is-co-r25Smlqq),

> 容器化意味着封装或打包软件代码及其所有依赖项，以便它可以在任何基础架构上统一且一致地运行。

换句话说，容器化可以将软件及其所有依赖项打包在一个自包含的软件包中，这样就可以省略麻烦的配置，直接运行。

举一个现实生活的场景。假设你已经开发了一个很棒的图书管理应用程序，该应用程序可以存储所有图书的信息，还可以为别人提供图书借阅服务。

如果列出依赖项，如下所示：

-   Node.js
-   Express.js
-   SQLite3

理论上应该是这样。但是实际上还要搞定其他一些事情。 [Node.js](https://nodejs.org/) 使用了 `node-gyp` 构建工具来构建原生加载项。根据[官方存储库](https://github.com/nodejs/node-gyp)中的[安装说明](https://github.com/nodejs/node-gyp#installation)，此构建工具需要 Python 2 或 3 和相应的的 C/C ++ 编译器工具链。

考虑到所有这些因素，最终的依赖关系列表如下：

-   Node.js
-   Express.js
-   SQLite3
-   Python 2 or 3
-   C/C++ tool-chain

无论使用什么平台，安装 Python 2 或 3 都非常简单。 在 Linux 上，设置 C/C ++ 工具链也非常容易，但是在 Windows 和 Mac 上，这是一项繁重的工作。

在 Windows 上，C++ 构建工具包有数 GB 之大，安装需要花费相当长的时间。在 Mac 上，可以安装庞大的 [Xcode](https://developer.apple.com/xcode/) 应用程序，也可以安装小巧的 [Xcode 命令行工具](https://developer.apple.com/download/)包。

不管安装了哪一种，它都可能会在 OS 更新时中断。实际上，该问题非常普遍，甚至连官方仓库都专门提供了 [macOS Catalina 的安装说明](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)。

这里假设你已经解决了设置依赖项的所有麻烦，并且已经准备好开始。这是否意味现在开始就一帆风顺了？ 当然不是。

如果你使用 Linux 而同事使用 Windows 该怎么办。现在，必须考虑如何处理这两个不同的操作系统不一致的路径，或诸如 [nginx](https://nginx.org/) 之类的流行技术在 Windows 上未得到很好的优化的事实，以及诸如 [Redis](https://redis.io/) 之类的某些技术甚至都不是针对 Windows 预先构建的。

即使你完成了整个开发，如果负责管理服务器的人员部署流程搞错了该怎么办？

所有这些问题都可以通过以下方式解决：

- 在与最终部署环境匹配的隔离环境（称为容器）中开发和运行应用程序。
- 将你的应用程序及其所有依赖项和必要的部署配置放入一个文件（称为镜像）中。
- 并通过具有适当授权的任何人都可以访问的中央服务器（称为仓库）共享该镜像。

然后，你的同事就可以从仓库中下载镜像，可以在没有平台冲突的隔离环境中运行应用，甚至可以直接在服务器上进行部署，因为该镜像也可以进行生产环境配置。

这就是容器化背后的想法：将应用程序放在一个独立的程序包中，使其在各种环境中都可移植且可回溯。

**现在的问题是“ Docker 在这里扮演什么角色？”**

正如我之前讲的，容器化是一种将一切统一放入盒子中来解决软件开发过程中的问题的思想。

这个想法有很多实现。 [Docker](https://www.docker.com/) 就是这样的实现。 这是一个开放源代码的容器化平台，可让你对应用程序进行容器化，使用公共或私有仓库共享它们，也可以[编排](https://docs.docker.com/get-started/orchestration/)它们。

目前，Docker 并不是市场上唯一的容器化工具，却是最受欢迎的容器化工具。我喜欢的另一个容器化引擎是 Red Hat 开发的 [Podman](https://podman.io/)。 其他工具，例如 Google 的 [Kaniko](https://github.com/GoogleContainerTools/kaniko)，CoreOS 的 [rkt](https://coreos.com/rkt/) 都很棒，但和 Docker 还是有差距。

此外，如果你想了解容器的历史，可以阅读 [A Brief History of Containers: From the 1970s Till Now](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016)，描述了该技术的很多重要节点。

## 怎样安装 Docker

Docker 的安装因使用的操作系统而异。 但这整个过程都非常简单。

Docker 可在 Mac、Windows 和 Linux 这三个主要平台上完美运行。在这三者中，在 Mac 上的安装过程是最简单的，因此我们从这里开始。

### 怎样在 macOS 里安装 Docker

在 Mac 上，要做的就是跳转到官方的[下载页面](https://www.docker.com/products/docker-desktop)，然后单击_Download for Mac(stable)_按钮。

你会看到一个常规的 _Apple Disk Image_ 文件，在该文件的内有 Docker 应用程序。所要做的就是将文件拖放到 Applications 目录中。

![](https://www.freecodecamp.org/news/content/images/2021/01/drag-docker-in-applications-directory.png)

只需双击应用程序图标即可启动 Docker。 应用程序启动后，将看到 Docker 图标出现在菜单栏上。

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-icon-in-menubar.png)

现在，打开终端并执行 `docker --version` 和 `docker-compose --version` 以验证是否安装成功。

### 怎样在 Windows 上安装 Docker

在 Windows 上，步骤几乎相同，当然还需要执行一些额外的操作。安装步骤如下：

1. 跳转到[此站点](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)，然后按照说明在 Windows 10 上安装 WSL2。
2. 然后跳转到官方[下载页面](https://www.docker.com/products/docker-desktop) 并单击 _Download for Windows(stable)_ 按钮。
3. 双击下载的安装程序，然后使用默认设置进行安装。

安装完成后，从开始菜单或桌面启动 _Docker Desktop_。 Docker 图标应显示在任务栏上。

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-icon-in-taskbar.png)

现在，打开 Ubuntu 或从 Microsoft Store 安装的任何发行版。 执行 `docker --version` 和 `docker-compose --version` 命令以确保安装成功。

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-and-compose-version-on-windows.png)

也可以从常规命令提示符或 PowerShell 访问 Docker。 只是我更喜欢使用 WSL2。

### 怎样在 Linux 上安装 Docker

在 Linux 上安装 Docker 的过程有所不同，具体操作取决于你所使用的发行版，它们之间差异可能更大。但老实说，安装与其他两个平台一样容易（如果不能算更容易的话）。

Windows 或 Mac 上的 Docker Desktop 软件包是一系列工具的集合，例如`Docker Engine`、`Docker Compose`、`Docker Dashboard`、`Kubernetes` 和其他一些好东西。

但是，在 Linux 上，没有得到这样的捆绑包。 可以手动安装所需的所有必要工具。 不同发行版的安装过程如下：

- 如果你使用的是 Ubuntu，则可以遵循官方文档中的[在 Ubuntu 上安装 Docker 引擎](https://docs.docker.com/engine/install/ubuntu/)部分。
- 对于其他发行版，官方文档中提供了 _不同发行版的安装指南_。
    - [在 Debian 上安装 Docker Engine](https://docs.docker.com/engine/install/debian/)
    - [在 Fedora 上安装 Docker Engine](https://docs.docker.com/engine/install/fedora/)
    - [在 CentOS 上安装 Docker Engine](https://docs.docker.com/engine/install/centos/)
- 如果你使用的发行版未在文档中列出，则可以参考[从二进制文件安装 Docker 引擎](https://docs.docker.com/engine/install/binaries/)指南。
- 无论参考什么程序，都必须完成一些非常重要的 [Linux 的安装后续步骤](https://docs.docker.com/engine/install/linux-postinstall/)。
- 完成 docker 安装后，必须安装另一个名为 Docker Compose 的工具。 可以参考官方文档中的 [Install Docker Compose](https://docs.docker.com/compose/install/) 指南。

安装完成后，打开终端并执行 `docker --version` 和 `docker-compose --version` 以确保安装成功。

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-and-compose-version-on-linux.png)

尽管无论使用哪个平台，Docker 的性能都很好，但与其他平台相比，我更喜欢 Linux。在整本书中，我将使用[Ubuntu 20.10](https://releases.ubuntu.com/20.10/) 或者 [Fedora 33](https://fedoramagazine.org/announcing-fedora-33/)。

一开始就需要阐明的另一件事是，在整本书中，我不会使用任何 GUI 工具操作 Docker。

我在各个平台用过很多不错的 GUI 工具，但是介绍常见的 docker 命令是本书的主要目标之一。

## 初识 Docker - 介绍 Docker 基本知识

已经在计算机上启动并运行了 Docker，现在该运行第一个容器了。打开终端并执行以下命令：

```
docker run hello-world

# Unable to find image 'hello-world:latest' locally
# latest: Pulling from library/hello-world
# 0e03bdcc26d7: Pull complete 
# Digest: sha256:4cf9c47f86df71d48364001ede3a4fcd85ae80ce02ebad74156906caff5378bc
# Status: Downloaded newer image for hello-world:latest
# 
# Hello from Docker!
# This message shows that your installation appears to be working correctly.
# 
# To generate this message, Docker took the following steps:
#  1. The Docker client contacted the Docker daemon.
#  2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
#     (amd64)
#  3. The Docker daemon created a new container from that image which runs the
#     executable that produces the output you are currently reading.
#  4. The Docker daemon streamed that output to the Docker client, which sent it
#     to your terminal.
#
# To try something more ambitious, you can run an Ubuntu container with:
#  $ docker run -it ubuntu bash
# 
# Share images, automate workflows, and more with a free Docker ID:
#  https://hub.docker.com/
#
# For more examples and ideas, visit:
#  https://docs.docker.com/get-started/
```

[hello-world](https://hub.docker.com/_/hello-world) 镜像是使用 Docker 进行最小化容器化的一个示例。它有一个从 [hello.c](https://github.com/docker-library/hello-world/blob/master/hello.c) 文件编译的程序，负责打印出终端看到的消息。

现在，在终端中，可以使用 `docker ps -a` 命令查看当前正在运行或过去运行的所有容器：

```
docker ps -a

# CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
# 128ec8ceab71        hello-world         "/hello"            14 seconds ago      Exited (0) 13 seconds ago                      exciting_chebyshev
```

在输出中，使用 `hello-world` 镜像运行了名为 `exciting_chebyshev` 的容器，其容器标识为 `128ec8ceab71`。它已经在 `Exited (0) 13 seconds ago`，其中 `(0)` 退出代码表示在容器运行时未发生任何错误。

现在，为了了解背后发生的事情，必须熟悉 Docker 体系结构和三个非常基本的容器化概念，如下所示：

-   [容器](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#container)
-   [镜像](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#image)
-   [仓库](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#registry)

我已经按字母顺序列出了这三个概念，并且将从列表中的第一个开始介绍。

### 什么是容器？

在容器化世界中，没有什么比容器的概念更基础的了。

官方 Docker [resources](https://www.docker.com/resources/what-container) 网站说 -

> 容器是应用程序层的抽象，可以将代码和依赖项打包在一起。 容器不虚拟化整个物理机，仅虚拟化主机操作系统。

可以认为容器是下一代虚拟机。

就像虚拟机一样，容器是与主机系统是彼此之间完全隔离的环境。它也比传统虚拟机轻量得多，因此可以同时运行大量容器，而不会影响主机系统的性能。

容器和虚拟机实际上是虚拟化物理硬件的不同方法。 两者之间的主要区别是虚拟化方式。

虚拟机通常由称为虚拟机监控器的程序创建和管理，例如 [Oracle VM VirtualBox](https://www.virtualbox.org/)，[VMware Workstation](https://www.vmware.com/)，[KVM](https://www.linux-kvm.org/)，[Microsoft Hyper-V](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/about/) 等等。 该虚拟机监控程序通常位于主机操作系统和虚拟机之间，充当通信介质。

![](https://www.freecodecamp.org/news/content/images/2021/01/virtual-machines.svg)

每个虚拟机都有自己的 guest 操作系统，该操作系统与主机操作系统一样消耗资源。

在虚拟机内部运行的应用程序与 guest 操作系统进行通信，该 guest 操作系统在与虚拟机监控器进行通信，后者随后又与主机操作系统进行通信，以将必要的资源从物理基础设施分配给正在运行的应用程序。

虚拟机内部运行的应用程序与物理基础设施之间存在很长的通信链。在虚拟机内部运行的应用程序可能只拥有少量资源，因为 guest 操作系统会占用很大的开销。

与虚拟机不同，容器以更智能的方式完成虚拟化工作。在容器内部没有完整的 guest 操作系统，它只是通过容器运行时使用主机操作系统，同时保持隔离 – 就像传统的虚拟机一样。

![](https://www.freecodecamp.org/news/content/images/2021/01/containers.svg)

容器运行时（即 Docker）位于容器和主机操作系统之间，而不是虚拟机监控器中。容器与容器运行时进行通信，容器运行时再与主机操作系统进行通信，以从物理基础设施中获取必要的资源。

由于消除了整个主机操作系统层，因此与传统的虚拟机相比，容器的更轻量，资源占用更少。

为了说明这一点，请看下面的代码片段：

```
uname -a
# Linux alpha-centauri 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux

docker run alpine uname -a
# Linux f08dbbe9199b 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 Linux
```

在上面的代码片段中，在主机操作系统上执行了 `uname -a` 命令以打印出内核详细信息。然后在下一行，我在运行 [Alpine Linux](https://alpinelinux.org/) 的容器内执行了相同的命令。

从输出中可以看到，该容器确实正在使用主机操作系统中的内核。这证明了容器虚拟化主机操作系统而不是拥有自己的操作系统这一点。

如果你使用的是 Windows 计算机，则会发现所有容器都使用 WSL2 内核。发生这种情况是因为 WSL2 充当了 Windows 上 Docker 的后端。在 macOS 上，默认后端是在  [HyperKit](https://github.com/moby/hyperkit) 虚拟机管理程序上运行的 VM。

### 什么是 Docker 镜像？

镜像是分层的自包含文件，充当创建容器的模板。它们就像容器的冻结只读副本。 镜像可以通过仓库进行共享。

过去，不同的容器引擎具有不同的镜像格式。但是后来，[开放式容器计划（OCI）](https://opencontainers.org/)定义了容器镜像的标准规范，该规范被主要的容器化引擎所遵循。这意味着使用 Docker 构建的映像可以与 Podman 等其他运行时一起使用，而不会有兼容性问题。

容器只是处于运行状态的镜像。当从互联网上获取镜像并使用该镜像运行容器时，实际上是在先前的只读层之上创建了另一个临时可写层。

在本书的后续部分中，这一概念将变得更加清晰。但就目前而言，请记住，镜像是分层只读文件，其中保留着应用程序所需的状态。

### 什么是仓库？

已经了解了这个难题的两个非常重要的部分，即 _Containers_ 和 _Images_ 。 最后一个是 _Registry_。

镜像仓库是一个集中式的位置，可以在其中上传镜像，也可以下载其他人创建的镜像。 [Docker Hub](https://hub.docker.com/) 是 Docker 的默认公共仓库。 另一个非常流行的镜像仓库是 Red Hat 的 [Quay](https://quay.io/)。

在本书中，我将使用 Docker Hub 作为首选仓库。

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-hub.png)

可以免费在 Docker Hub 上共享任意数量的公共镜像。供世界各地的人们下载免费使用。可在我的个人资料（[fhsinchy](https://hub.docker.com/u/fhsinchy)）页面上找到我上传的镜像。

![](https://www.freecodecamp.org/news/content/images/2021/01/my-images-on-docker-hub.png)

除了 Docker Hub 或 Quay，还可以创建自己的镜像仓库来托管私有镜像。计算机中还运行着一个本地仓库，该仓库缓存从远程仓库提取的镜像。

### Docker 架构概述

既然已经熟悉了有关容器化和 Docker 的大多数基本概念，那么现在是时候了解 Docker 作为软件的架构了。

该引擎包括三个主要组件：

1.  **Docker Daemon:** The daemon (`dockerd`) is a process that keeps running in the background and waits for commands from the client. The daemon is capable of managing various Docker objects.
2.  **Docker 守护程序：** 守护程序（`dockerd`）是一个始终在后台运行并等待来自客户端的命令的进程。守护程序能够管理各种 Docker 对象。
3.  **Docker Client:** The client  (`docker`) is a command-line interface program mostly responsible for transporting commands issued by users.
4.  **Docker 客户端：** 客户端（`docker`）是一个命令行界面程序，主要负责传输用户发出的命令。
5.  **REST API:** The REST API acts as a bridge between the daemon and the client. Any command issued using the client passes through the API to finally reach the daemon.
6. **REST API：** REST API 充当守护程序和客户端之间的桥梁。使用客户端发出的任何命令都将通过 API 传递，最终到达守护程序。

根据官方[文档](https://docs.docker.com/get-started/overview/#docker-architecture),

> “ Docker 使用客户端-服务器体系结构。Docker _client_ 与 Docker _daemon_ 对话，daemon 繁重地构建、运行和分发 Docker 容器”。

作为用户，通常将使用客户端组件执行命令。然后，客户端使用 REST API 来访问长期运行的守护程序并完成工作。

### 全景图

好吧，说的够多了。 现在是时候了解刚刚学习的所有这些知识如何和谐地工作了。在深入解释运行 `docker run hello-world` 命令时实际发生的情况之前，看一下下面的图片：

![](https://www.freecodecamp.org/news/content/images/2021/01/docker-run-hello-world.svg)

该图像是在官方[文档](https://docs.docker.com/engine/images/architecture.svg)中找到的图像的略微修改版本。 执行命令时发生的事件如下：

1. 执行 `docker run hello-world` 命令，其中 `hello-world` 是镜像的名称。
2. Docker 客户端访问守护程序，告诉它获取 `hello-world` 镜像并从中运行一个容器。
3. Docker 守护程序在本地仓库中查找镜像，并发现它不存在，所以在终端上打印 `Unable to find image 'hello-world:latest' locally`。
4. 然后，守护程序访问默认的公共仓库 Docker Hub，拉取 `hello-world` 镜像的最新副本，并在命令行中展示 `Unable to find image 'hello-world:latest' locally`。
5. Docker 守护程序根据新拉取的镜像创建一个新容器。 
6. 最后，Docker 守护程序运行使用 `hello-world` 镜像创建的容器，该镜像在终端上输出文本。

Docker 守护程序的默认行为是在 hub 中查找本地不存在的镜像。但是，一旦拉取了镜像，它将保留在本地缓存中。因此，如果再次执行该命令，则在输出中将看不到以下几行：

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:d58e752213a51785838f9eed2b7a498ffa1cb3aa7f946dda11af39286c3db9a9
Status: Downloaded newer image for hello-world:latest
```

如果公共仓库中有可用镜像的更新版本，则守护程序将再次拉取该镜像。那个 `:latest`  是一个标记。 镜像通常包含有意义的标记以指示版本或内部版本。稍后，将更详细地介绍这一点。

## Docker 容器操作基础知识

在前面的部分中，已经了解了 Docker 的构建模块，还使用 `docker run` 命令运行了一个容器。

在本节中，将详细介绍容器的操作。容器操作是每天要执行的最常见的任务之一，因此，正确理解各种命令至关重要。

但是请记住，这并不是可以在 Docker 上执行的所有命令的详尽列表。我只会介绍最常见的那些。当想知道某一命令的更多用法时，可以访问 Docker 命令行的官方[参考](https://docs.docker.com/engine/reference/commandline/container/)。

### 怎样运行容器

之前，已经使用 `docker run` 来使用 `hello-world` 镜像创建和启动容器。 此命令的通用语法如下：

```
docker run <image name>
```

尽管这是一个完全有效的命令，但是有一种更好的方式可以将命令分配给 `docker` 守护程序。

在版本 `1.13` 之前，Docker 仅具有前面提到的命令语法。后来，命令行经过了[重构](https://www.docker.com/blog/whats-new-in-docker-1-13/)具有了以下语法：

```
docker <object> <command> <options>
```

使用以下语法：

- `object` 表示将要操作的 Docker 对象的类型。 这可以是 `container`、`image`、`network` 或者 `volume` 对象。
-  `command` 表示守护程序要执行的任务，即 `run` 命令。
- `options` 可以是任何可以覆盖命令默认行为的有效参数，例如端口映射的 `--publish` 选项。

现在，遵循此语法，可以将 `run` 命令编写如下：

```
docker container run <image name>
```

`image name` 可以是在线仓库或本地系统中的任何镜像。例如，可以尝试使用[fhsinchy / hello-dock](https://hub.docker.com/r/fhsinchy/hello-dock) 镜像运行容器。 该镜像包含一个简单的 [Vue.js](https://vuejs.org/)应用程序，该应用程序在容器内部的端口 80 上运行。

请在终端上执行以下命令以使用此镜像运行容器：

```
docker container run --publish 8080:80 fhsinchy/hello-dock

# /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
# /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
# /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
# 10-listen-on-ipv6-by-default.sh: Getting the checksum of /etc/nginx/conf.d/default.conf
# 10-listen-on-ipv6-by-default.sh: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
# /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
# /docker-entrypoint.sh: Configuration complete; ready for start up
```

该命令不言自明。唯一需要说明的部分是 `--publish 8080:80` 部分，将在下一个小节中进行说明。

### 怎样公开端口

容器是隔离的环境。主机系统对容器内部发生的事情一无所知。因此，从外部无法访问在容器内部运行的应用程序。

要允许从容器外部进行访问，必须将容器内的相应端口发布到本地网络上的端口。`--publish` 或 `-p` 选项的通用语法如下：

```
--publish <host port>:<container port>
```

在上一小节中编写了 `--publish 8080:80` 时，这意味着发送到主机系统端口 8080 的任何请求都将转发到容器内的端口 80。

现在要在浏览器上访问该应用程序，只需访问  `http://127.0.0.1:8080`。

![](https://www.freecodecamp.org/news/content/images/2021/01/hello-dock.png)

可以在终端窗口按下 `ctrl + c` 组合键或关闭终端窗口来停止容器。

### 如何使用分离模式

`run` 命令的另一个非常流行的选项是 `---detach` 或 `-d` 选项。 在上面的示例中，为了使容器继续运行，必须将终端窗口保持打开状态。 关闭终端窗口会停止正在运行的容器。

这是因为，默认情况下，容器在前台运行，并像从终端调用的任何其他普通程序一样将其自身附加到终端。

为了覆盖此行为并保持容器在后台运行，可以在 `run` 命令中包含 `--detach` 选项，如下所示：

```
docker container run --detach --publish 8080:80 fhsinchy/hello-dock

# 9f21cb77705810797c4b847dbd330d9c732ffddba14fb435470567a7a3f46cdc
```

与前面的示例不同，这次不会看到很多文字。 而只获得新创建的容器的 ID。

提供选项的顺序并不重要。 如果将 `--publish` 选项放在 `--detach` 选项之前，效果相同。

使用 `run` 命令时必须记住的一件事是镜像名称必须最后出现。如果在镜像名称后放置任何内容，则将其作为参数传递给容器入口点（在[在容器内执行命令](https://www.freecodecamp.org/news/the-docker-handbook/#executing-commands-inside-a-container)小节做了解释），可能会导致意外情况。

### 怎样列表展示容器

`container ls` 命令可用于列出当前正在运行的容器。执行以下命令：

```
docker container ls

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   5 seconds ago       Up 5 seconds        0.0.0.0:8080->80/tcp   gifted_sammet
```

一个名为 `gifted_sammet` 的容器正在运行。它是在 `5 seconds ago` 前创建的，状态为 `Up 5 seconds`，这表明自创建以来，该容器一直运行良好。

 `CONTAINER ID` 为 `9f21cb777058`，这是完整容器 ID 的前 12 个字符。完整的容器 ID 是 `9f21cb77705810797c4b847dbd330d9c732ffddba14fb435470567a7a3f46cdc`，该字符长 64 个字符。在上一节中 `docker container run`  命令行的输的就是完整的容器 ID 。

列表的 `PORTS` 列下，本地网络的端口 8080 指向容器内的端口 80。name `gifted_sammet` 是由 Docker 生成的，可能与你的计算机的不同。

`container ls` 命令仅列出系统上当前正在运行的容器。为了列出过去运行的所有容器，可以使用 `--all` 或 `-a` 选项。

```
docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                     PORTS                  NAMES
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   2 minutes ago       Up 2 minutes               0.0.0.0:8080->80/tcp   gifted_sammet
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   3 minutes ago       Exited (0) 3 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 4 minutes ago       Exited (0) 4 minutes ago                          exciting_chebyshev
```

如你所见，列表 `reverent_torvalds` 中的第二个容器是较早创建的，并以状态代码 0 退出，这表明在容器运行期间未产生任何错误。

### 怎样命名或者重命名一个容器

默认情况下，每个容器都有两个标识符。 如下：

-  `CONTAINER ID` - 64 个字符的随机字符串。
-  `NAME` - 两个随机词的组合，下划线连接。

基于这两个随机标识符来引用容器非常不方便。如果可以使用自定义的名称来引用容器，那就太好了。

可以使用 `--name` 选项来命名容器。要使用名为 `hello-dock-container` 的 `fhsinchy/hello-dock` 镜像运行另一个容器，可以执行以下命令：

```
docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock

# b1db06e400c4c5e81a93a64d30acc1bf821bed63af36cab5cdb95d25e114f5fb
```

本地网络上的 8080 端口被 `gifted_sammet` 容器（在上一小节中创建的容器）占用了。这就是为什么必须使用其他端口号（例如 8888）的原因。要进行验证，执行 `container ls` 命令：

```
docker container ls

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   28 seconds ago      Up 26 seconds       0.0.0.0:8888->80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   4 minutes ago       Up 4 minutes        0.0.0.0:8080->80/tcp   gifted_sammet
```

一个名为 `hello-dock-container` 的新容器已经启动。

甚至可以使用 `container rename` 命令来重命名旧容器。 该命令的语法如下：

```
docker container rename <container identifier> <new name>
```

要将 `gifted_sammet` 容器重命名为 `hello-dock-container-2`，可以执行以下命令：

```
docker container rename gifted_sammet hello-dock-container-2
```

该命令不会产生任何输出，但是可以使用 `container ls` 命令来验证是否已进行更改。 `rename` 命令不仅适用于处于运行状态的容器和还适用于处于停止状态的容器。

### 怎样停止或者杀死运行中的容器

可以通过简单地关闭终端窗口或单击 `ctrl + c` 来停止在前台运行的容器。但是，不能以相同方式停止在后台运行的容器。

有两个命令可以完成此任务。 第一个是 `container stop` 命令。 该命令的通用语法如下：

```
docker container stop <container identifier>
```

其中 `container identifier` 可以是容器的 ID 或名称。

应该还记得上一节中启动的容器。它仍在后台运行。 使用 `docker container ls` 获取该容器的标识符（在本演示中，我将使用 `hello-dock-container` 容器）。现在执行以下命令来停止容器：

```
docker container stop hello-dock-container

# hello-dock-container
```

如果使用 name 作为标识符，则 name 将作为输出返回。`stop` 命令通过发送信号`SIGTERM` 来正常关闭容器。如果容器在一定时间内没有停止运行，则会发出 `SIGKILL` 信号，该信号会立即关闭容器。

如果要发送 `SIGKILL` 信号而不是 `SIGTERM` 信号，则可以改用 `container kill` 命令。`container kill` 命令遵循与 `stop` 命令相同的语法。

```
docker container kill hello-dock-container-2

# hello-dock-container-2
```

### 怎样重新启动容器

当我说重启时，我指的如下是两种情况：

- 重新启动先前已停止或终止的容器。
- 重新启动正在运行的容器。


正如上一小节中学到的，停止的容器保留在系统中。如果需要，可以重新启动它们。`container start`  命令可用于启动任何已停止或终止的容器。该命令的语法如下：

```
docker container start <container identifier>
```

可以通过执行 `container ls --all` 命令来获取所有容器的列表。 然后寻找状态为 `Exited` 的容器。

```
docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                        PORTS               NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   3 minutes ago       Exited (0) 47 seconds ago                         hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   7 minutes ago       Exited (137) 17 seconds ago                       hello-dock-container-2
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   7 minutes ago       Exited (0) 7 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 9 minutes ago       Exited (0) 9 minutes ago                          exciting_chebyshev
```

现在要重新启动 `hello-dock-container` 容器，可以执行以下命令：

```
docker container start hello-dock-container

# hello-dock-container
```

现在，可以使用 `container ls` 命令查看正在运行的容器列表，以确保该容器正在运行。

默认情况下，`container start` 命令以分离模式启动容器，并保留之前进行的端口配置。因此，如果现在访问 `http：//127.0.0.1：8080`，应该能够像以前一样访问 `hello-dock` 应用程序。

![](https://www.freecodecamp.org/news/content/images/2021/01/hello-dock.png)

现在，在想重新启动正在运行的容器，可以使用 `container restart` 命令。`container restart` 命令遵循与 `container start` 命令完全相同的语法。

```
docker container restart hello-dock-container-2

# hello-dock-container-2
```

这两个命令之间的主要区别在于，`container restart` 命令尝试停止目标容器，然后再次启动它，而 start 命令只是启动一个已经停止的容器。

在容器停止的情况下，两个命令完全相同。但是如果容器正在运行，则必须使用`container restart` 命令。

### 怎样创建而不运行容器

到目前为止，在本节中，已经使用 `container run` 命令启动了容器，该命令实际上是两个单独命令的组合。这两个命令如下：

-  `container create` 命令从给定的镜像创建一个容器。
-  `container start` 命令将启动一个已经创建的容器。

现在，要使用这两个命令执行[运行容器](https://www.freecodecamp.org/news/the-docker-handbook/#running-containers)部分中显示的演示，可以执行以下操作 ：

```
docker container create --publish 8080:80 fhsinchy/hello-dock

# 2e7ef5098bab92f4536eb9a372d9b99ed852a9a816c341127399f51a6d053856

docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS               NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   30 seconds ago      Created                                 hello-dock
```

通过 `container ls --all` 命令的输出可以明显看出，已经使用 `fhsinchy/hello-dock` 镜像创建了一个名称为 `hello-dock` 的容器。 容器的 `STATUS` 目前处于 `Created` 状态，并且鉴于其未运行，因此不使用  `--all` 选项就不会列出该容器。

一旦创建了容器，就可以使用 `container start` 命令来启动它。

```
docker container start hello-dock

# hello-dock

docker container ls

# CONTAINER ID        IMAGE                 COMMAND                  CREATED              STATUS              PORTS                  NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   About a minute ago   Up 29 seconds       0.0.0.0:8080->80/tcp   hello-dock
```

容器 `STATUS` 已从 `Created` 更改为 `Up 29 seconds`，这表明容器现在处于运行状态。端口配置也显示在以前为空的 `PORTS` 列中。

尽管可以在大多数情况下使用 `container run` 命令，但本书稍后还会有一些情况要求使用 `container create` 命令。

### 怎样移除挂起的容器

如你所见，已被停止或终止的容器仍保留在系统中。这些挂起的容器可能会占用空间或与较新的容器发生冲突。

可以使用 `container rm` 命令删除停止的容器。 通用语法如下：

```
docker container rm <container identifier>
```

要找出哪些容器没有运行，使用 `container ls --all` 命令并查找状态为 `Exited` 的容器。

```
docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                      PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   6 minutes ago       Up About a minute           0.0.0.0:8888->80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   10 minutes ago      Up About a minute           0.0.0.0:8080->80/tcp   hello-dock-container-2
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   10 minutes ago      Exited (0) 10 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 12 minutes ago      Exited (0) 12 minutes ago                          exciting_chebyshev
```

从输出中可以看到，ID 为 `6cf52771dde1` 和 `128ec8ceab71` 的容器未运行。 要删除 `6cf52771dde1`，可以执行以下命令：

```
docker container rm 6cf52771dde1

# 6cf52771dde1
```

可以使用 `container ls` 命令检查容器是否被删除。也可以一次删除多个容器，方法是将其标识符一个接一个地传递，每个标识符之间用空格隔开。

也可以使用 `container prune` 命令来一次性删除所有挂起的容器。

可以使用 `container ls --all` 命令检查容器列表，以确保已删除了挂起的容器：

```
docker container ls --all

# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   8 minutes ago       Up 3 minutes        0.0.0.0:8888->80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   12 minutes ago      Up 3 minutes        0.0.0.0:8080->80/tcp   hello-dock-container-2
```

如果按照本书的顺序进行操作，则应该只在列表中看到 `hello-dock-container` 和 `hello-dock-container-2`。 建议停止并删除两个容器，然后再继续进行下一部分。

`container run` 和 `container start` 命令还有 `--rm` 选项，它们表示希望容器在停止后立即被移除。 执行以下命令，使用 `--rm` 选项启动另一个 `hello-dock` 容器：

```
docker container run --rm --detach --publish 8888:80 --name hello-dock-volatile fhsinchy/hello-dock

# 0d74e14091dc6262732bee226d95702c21894678efb4043663f7911c53fb79f3
```

可以使用 `container ls` 命令来验证容器是否正在运行：

```
docker container ls

# CONTAINER ID   IMAGE                 COMMAND                  CREATED              STATUS              PORTS                  NAMES
# 0d74e14091dc   fhsinchy/hello-dock   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8888->80/tcp   hello-dock-volatile
```

现在，如果停止了容器，使用 `container ls --all` 命令再次检查：

```
docker container stop hello-dock-volatile

# hello-dock-volatile

docker container ls --all

# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

该容器已被自动删除。从现在开始，我将对大多数容器使用 `--rm` 选项。不需要的地方我会明确提到。

### 怎样以交互式模式运行容器

到目前为止，只运行了 [hello-world](https://hub.docker.com/_/hello-world) 镜像或 [fhsinchy/hello-dock](https//hub.docker.com/r/fhsinchy/hello-dock) 镜像。这些镜像用于执行非交互式的简单程序。

好吧，镜像并不是那么简单。镜像可以将整个 Linux 发行版封装在其中。

流行的发行版，例如 [Ubuntu](https://ubuntu.com/)，[Fedora](https://fedora.org/) 和 [Debian](https://debian.org/) 都在 hub 有官方的 Docker 镜像。编程语言，例如 [python](https://hub.docker.com/_/python)、[php](https://hub.docker.com/_/php)、[go](https：// hub.docker.com/_/golang) 或类似 [node](https://hub.docker.com/_/node) 和 [deno](https://hub.docker.com/r/hayd/deno) 都有其官方镜像。

这些镜像不但仅运行某些预配置的程序。还将它们配置为默认情况下运行的 shell 程序。在镜像是操作系统的情况下，它可以是诸如 `sh` 或 `bash` 之类的东西，在竟像是编程语言或运行时的情况下，通常是它们的默认语言的 shell。

正如可能从以前的计算机中学到的一样，shell 是交互式程序。被配置为运行这样的程序的镜像是交互式镜像。这些镜像需要在  `container run`  命令中传递特殊的 `-it` 选项。

例如，如果通过执行 `docker container run ubuntu` 使用 `ubuntu` 镜像运行一个容器，将不会发生任何事情。但是，如果使用 `-it` 选项执行相同的命令，会直接进入到 Ubuntu 容器内的 bash 上。

```
docker container run --rm -it ubuntu

# root@dbb1f56b9563:/# cat /etc/os-release
# NAME="Ubuntu"
# VERSION="20.04.1 LTS (Focal Fossa)"
# ID=ubuntu
# ID_LIKE=debian
# PRETTY_NAME="Ubuntu 20.04.1 LTS"
# VERSION_ID="20.04"
# HOME_URL="https://www.ubuntu.com/"
# SUPPORT_URL="https://help.ubuntu.com/"
# BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
# PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
# VERSION_CODENAME=focal
# UBUNTU_CODENAME=focal
```

从  `cat /etc/os-release`  命令的输出中可以看到，我确实正在与在 Ubuntu 容器中运行的 bash 进行交互。

`-it` 选项提供了与容器内的程序进行交互的场景。此选项实际上是将两个单独的选项混在一起。

- 选项  `-i` 或  `--interactive` 连接到容器的输入流，以便可以将输入发送到 bash。
- `-t` 或 `--tty`  选项可通过分配伪 tty 来格式化展示并提供类似本机终端的体验。

当想以交互方式运行容器时，可以使用 `-it` 选项。以交互式方式运行 `node` 镜像，如下：

```
docker container run -it node

# Welcome to Node.js v15.0.0.
# Type ".help" for more information.
# > ['farhan', 'hasin', 'chowdhury'].map(name => name.toUpperCase())
# [ 'FARHAN', 'HASIN', 'CHOWDHURY' ]
```

任何有效的 JavaScript 代码都可以在 node shell 中执行。除了输入 `-it`，还可以输入 `--interactive --tty`，效果一样，只不过更冗长。

### 怎样在容器里执行命令

在本书中[初识 Docker](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker) 部分中，已经了解了在 Alpine Linux 容器内执行命令。 它是这样的：

```
docker run alpine uname -a
# Linux f08dbbe9199b 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 Linux
```

在此命令中，在 Alpine Linux 容器中执行了 `uname -a` 命令。像这样的场景（要做的就是在特定的容器内执行特定的命令）非常常见。

假设想使用 `base64` 程序对字符串进行编码。几乎所有基于 Linux 或 Unix 的操作系统都可以使用此功能（但 Windows 则不可用）。

在这种情况下，可以使用 [busybox](https://hub.docker.com/_/busybox) 之类的镜像快速启动容器，然后执行命令。

使用 `base64` 编码字符串的通用语法如下：

```
echo -n my-secret | base64

# bXktc2VjcmV0
```

将命令传递到未运行的容器的通用语法如下：

```
docker container run <image name> <command>
```

要使用 busybox 镜像执行 base64  编码，可以执行以下命令：

```
docker container run --rm busybox echo -n my-secret | base64

# bXktc2VjcmV0
```

这里发生的是，在 `container run` 命令中，镜像名称后传递的任何内容都将传递到镜像的默认入口里。

入口点就像是通往镜像的网关。除可执行镜像外的大多数镜像（在[使用可执行镜像](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/container-manipulation-basics#working-with-executable-images)小节中说明）使用 shell 或 `sh` 作为默认入口点。因此，任何有效的 shell 命令都可以作为参数传递给它们。

### 如何处理可执行镜像

在上一节中，我简要提到了可执行镜像。这些镜像旨在表现得像可执行程序。

以的 [rmbyext](https://github.com/fhsinchy/rmbyext) 项目为例。 这是一个简单的 Python 脚本，能够递归删除给定扩展名的文件。 要了解有关该项目的更多信息，可以 checkout 仓库：

[

fhsinchy/rmbyext

Recursively removes all files with given extension(s). - fhsinchy/rmbyext

![](https://github.githubassets.com/favicons/favicon.svg)fhsinchyGitHub

![](https://avatars.githubusercontent.com/u/22444207?s=400&v=4)

](https://github.com/fhsinchy/rmbyext)

欢迎 ⭐ 

如果同时安装了 Git 和 Python，则可以通过执行以下命令来安装此脚本：

```
pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext
```

假设的系统上已经正确设置了 Python，则该脚本应该可以在终端的任何位置使用。使用此脚本的通用语法如下：

```
rmbyext <file extension>
```

要对其进行测试，请在一个空目录下打开终端，并在其中创建具有不同扩展名的一些文件。可以使用 `touch` 命令来做到这一点。现在，计算机上有一个包含以下文件的目录：

```
touch a.pdf b.pdf c.txt d.pdf e.txt

ls

# a.pdf  b.pdf  c.txt  d.pdf  e.txt
```

要从该目录删除所有 `pdf` 文件，可以执行以下命令：

```
rmbyext pdf

# Removing: PDF
# b.pdf
# a.pdf
# d.pdf
```

该程序的可执行镜像能够将文件扩展名用作参数，并像 `rmbyext` 程序一样删除它们。

[fhsinchy/rmbyext](https://hub.docker.com/r/fhsinchy/rmbyext) 镜像的行为类似。该镜像包含 `rmbyext` 脚本的副本，并配置为在容器内的目录 `/zone`上运行该脚本。

现在的问题是容器与本地系统隔离，因此在容器内运行的 `rmbyext` 程序无法访问本地文件系统。因此，如果可以通过某种方式将包含 pdf 文件的本地目录映射到容器内的 `/zone` 目录，则容器应该可以访问这些文件。

授予容器直接访问本地文件系统的一种方法是使用[绑定挂载](https://docs.docker.com/storage/bind-mounts/)。

绑定挂载可以在本地文件系统目录（源）与容器内另一个目录（目标）之间形成双向数据绑定。这样，在目标目录中进行的任何更改都将在源目录上生效，反之亦然。

让我们看一下绑定挂载的实际应用。 要使用此镜像而不是程序本身删除文件，可以执行以下命令：

```
docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf

# Removing: PDF
# b.pdf
# a.pdf
# d.pdf
```

已经在命令中看到了 `-v $(pwd):/zone`  部分，你可能已经猜到了 `-v`  或 `--volume` 选项用于为容器创建绑定挂载。该选项可以使用三个以冒号（`:`）分隔的字段。该选项的通用语法如下：

```
--volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>
```

第三个字段是可选的，但必须传递本地目录的绝对路径和容器内目录的绝对路径。

在这里，源目录是 `/home/fhsinchy/the-zone`。假设终端当前在目录中，则 `$(pwd)` 将替换为包含先前提到的 `.pdf` 和 `.txt` 文件的 `/home/fhsinchy/the-zone`。

可以在[command substitution here](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html) 上了解更多信息。

`--volume` 或  `-v`  选项对 `container run` 以及 `container create` 命令均有效。我们将在接下来的部分中更详细地探讨卷，因此，如果在这里不太了解它们，请不要担心。

常规镜像和可执行镜像之间的区别在于，可执行镜像的入口点设置为自定义程序而不是 `sh`，在本例中为 `rmbyext` 程序。 正如在上一小节中所学到的那样，在 `container run` 命令中在镜像名称之后编写的所有内容都将传递到镜像的入口点。

所以最后，`docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf` 命令转换为容器内的  `rmbyext pdf` 。 可执行镜像并不常见，但在某些情况下可能非常有用。

## Docker 镜像操作基础知识

现在，已经对如何使用公开可用的镜像运行容器有了深入的了解，是时候学习如何创建自己的镜像了。

在本部分中，将学习创建镜像，使用镜像运行容器以及在线共享镜像的基础知识。

我建议在 [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) 中安装官方的 [Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode) 。 这将提升开发效率。

### 怎样创建  Docker 镜像

正如我在[初识 Docker](https://www.freecodecamp.org/news/the-docker-handbook/#image) 部分中已经解释的那样，镜像是分层的自包含文件，它们充当用于创建 Docker 容器的模板。它们就像是容器的冻结的只读副本。

为了使用程序创建镜像，必须对要从镜像中获得什么有清晰的认识。以官方 [nginx](https://hub.docker.com/_/nginx) 镜像为例。 只需执行以下命令即可使用该镜像启动容器：

```
docker container run --rm --detach --name default-nginx --publish 8080:80 nginx

# b379ecd5b6b9ae27c144e4fa12bdc5d0635543666f75c14039eea8d5f38e3f56

docker container ls

# CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b379ecd5b6b9        nginx               "/docker-entrypoint.…"   8 seconds ago       Up 8 seconds        0.0.0.0:8080->80/tcp   default-nginx
```

现在，如果在浏览器中访问 `http://127.0.0.1:8080`，则会看到一个默认的响应页面。
![](https://www.freecodecamp.org/news/content/images/2021/01/nginx-default.png)

看起来不错，但是，如果想制作一个自定义的 NGINX 镜像，该镜像的功能与正式镜像完全一样，但是由你自己创建，可行吗？ 老实说，完全可行。 实际上，只需这样做。

为了制作自定义的 NGINX 镜像，必须清楚了解镜像的最终状态。我认为镜像应如下所示：

- 该镜像应预安装 NGINX，可以使用程序包管理器完成该镜像，也可以从源代码构建该镜像。
- 该镜像在运行时应自动启动 NGINX。

很简单如果你已经克隆了本书中链接的项目仓库，请进入项目根目录并在其中查找名为 `custom-nginx` 的目录。

现在，在该目录中创建一个名为 `Dockerfile` 的新文件。`Dockerfile` 是指令的集合，该指令会被守护程序生成镜像。`Dockerfile` 的内容如下：

```
FROM ubuntu:latest

EXPOSE 80

RUN apt-get update && \
    apt-get install nginx -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["nginx", "-g", "daemon off;"]
```

镜像是多层文件，在此文件中，编写的每一行（称为说明）都会为镜像创建一个层。

- 每个有效的 `Dockerfile` 均以 `FROM`  指令开头。 该指令为生成的镜像设置基本镜像。通过在此处将 `ubuntu：latest` 设置为基本镜像，可以在自定义镜像中使用 Ubuntu 的所有功能，因此可以使用 `apt-get` 命令之类的东西来轻松安装软件包。
- `EXPOSE` 指令表示需要发布的端口。使用此指令并不意味着不需要  `--publish`  端口。 仍然需要显式使用 `--publish` 选项。该 `EXPOSE` 指令的工作原理类似于文档，适用于试图使用你的镜像运行容器的人员。它还有一些其他用途，我将不在这里讨论。
- `Dockerfile` 中的 `RUN` 指令在容器 shell 内部执行命令。 `apt-get update && apt-get install nginx -y` 命令检查更新的软件包版本并安装 NGINX。 `apt-get clean && rm -rf /var/lib/apt/lists/*` 命令用于清除程序包缓存，因为不希望镜像中出现任何不必要的文件。这两个命令是简单的 Ubuntu 东西，没什么特别的。 此处的 `RUN` 指令以 `shell` 形式编写。这些也可以以 `exec` 形式编写。 可以查阅[官方参考](https://docs.docker.com/engine/reference/builder/#run)了解更多信息。
- 最后，`CMD`  指令为镜像设置了默认命令。该指令以 `exec` 形式编写，此处包含三个独立的部分。这里，`nginx`  是指 NGINX 可执行文件。 `-g` 和 `daemon off` 是 NGINX 的选项。 在容器内将 NGINX 作为单个进程运行是一种最佳实践，因此请使用此选项。`CMD` 指令也可以以 `shell` 形式编写。 可以查阅[官方参考](https://docs.docker.com/engine/reference/builder/#cmd)了解更多信息。

既然具有有效的 `Dockerfile`，可以从中构建镜像。就像与容器相关的命令一样，可以使用以下语法来执行与镜像相关的命令：

```
docker image <command> <options>
```

要使用刚刚编写的  `Dockerfile` 构建镜像，请在 `custom-nginx` 目录中打开终端并执行以下命令：

```
docker image build .

# Sending build context to Docker daemon  3.584kB
# Step 1/4 : FROM ubuntu:latest
#  ---> d70eaf7277ea
# Step 2/4 : EXPOSE 80
#  ---> Running in 9eae86582ec7
# Removing intermediate container 9eae86582ec7
#  ---> 8235bd799a56
# Step 3/4 : RUN apt-get update &&     apt-get install nginx -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> Running in a44725cbb3fa
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container a44725cbb3fa
#  ---> 3066bd20292d
# Step 4/4 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in 4792e4691660
# Removing intermediate container 4792e4691660
#  ---> 3199372aa3fc
# Successfully built 3199372aa3fc
```

为了执行镜像构建，守护程序需要两条非常具体的信息。Dockerfile 的名称和构建上下文。在上面执行的命令中：

-  `docker image build` 是用于构建镜像的命令。守护程序在上下文中找到任何名为 Dockerfile 的文件。
- 最后的 `.`  设置了此构建的上下文。上下文是指在构建过程中守护程序可以访问的目录。

现在要使用此镜像运行容器，可以将 `container run` 命令与在构建过程中收到的镜像 ID 结合使用。在我这里，通过上一个代码块中的 `Successfully built 3199372aa3fc` 行可以看到 id 为 `3199372aa3fc`。

```
docker container run --rm --detach --name custom-nginx-packaged --publish 8080:80 3199372aa3fc

# ec09d4e1f70c903c3b954c8d7958421cdd1ae3d079b57f929e44131fbf8069a0

docker container ls

# CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
# ec09d4e1f70c        3199372aa3fc        "nginx -g 'daemon of…"   23 seconds ago      Up 22 seconds       0.0.0.0:8080->80/tcp   custom-nginx-packaged
```

要进行验证，请访问 `http://127.0.0.1:8080` ，应该会看到默认的响应页面。

![](https://www.freecodecamp.org/news/content/images/2021/01/nginx-default.png)

### 如何标记 Docker 镜像

就像容器一样，可以为镜像分配自定义标识符，而不必依赖于随机生成的 ID。如果是镜像，则称为标记而不是命名。在这种情况下，使用 `--tag` 或  `-t` 选项。

该选项的通用语法如下：

```
--tag <image repository>:<image tag>
```

repository 通常指镜像名称，而 tag 指特定的构建或版本。

以官方 [mysql](https://hub.docker.com/_/mysql) 镜像为例。 如果想使用特定版本的 MySQL（例如 5.7）运行容器，则可以执行 `docker container run mysql:5.7`，其中 `mysql` 是镜像 repository，`5.7` 是 tag。

为了用  `custom-nginx:packaged` 标签标记自定义 NGINX 镜像，可以执行以下命令：

```
docker image build --tag custom-nginx:packaged .

# Sending build context to Docker daemon  1.055MB
# Step 1/4 : FROM ubuntu:latest
#  ---> f63181f19b2f
# Step 2/4 : EXPOSE 80
#  ---> Running in 53ab370b9efc
# Removing intermediate container 53ab370b9efc
#  ---> 6d6460a74447
# Step 3/4 : RUN apt-get update &&     apt-get install nginx -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> Running in b4951b6b48bb
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container b4951b6b48bb
#  ---> fdc6cdd8925a
# Step 4/4 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in 3bdbd2af4f0e
# Removing intermediate container 3bdbd2af4f0e
#  ---> f8837621b99d
# Successfully built f8837621b99d
# Successfully tagged custom-nginx:packaged
```

除了现在可以将镜像称为  `custom-nginx:packaged`（而不是一些较长的随机字符串）之外，什么都不会改变。

如果在构建期间忘记为镜像添加标记，或者你想更改标记，可以使用 `image tag` 命令执行此操作：

```
docker image tag <image id> <image repository>:<image tag>

## 或者 ##

docker image tag <image repository>:<image tag> <new image repository>:<new image tag>
```

### 如何删除、列表展示镜像

就像 `container ls` 命令一样，可以使用 `image ls` 命令列出本地系统中的所有镜像：

```
docker image ls

# REPOSITORY     TAG        IMAGE ID       CREATED         SIZE
# <none>         <none>     3199372aa3fc   7 seconds ago   132MB
# custom-nginx   packaged   f8837621b99d   4 minutes ago   132MB
```

可以使用  `image rm`  命令删除此处列出的镜像。 通用语法如下：

```
docker image rm <image identifier>
```

标识符可以是镜像 ID 或镜像仓库。 如果使用仓库，则还必须指定标记。要删除 `custom-nginx:packaged` 镜像，可以执行以下命令：

```
docker image rm custom-nginx:packaged

# Untagged: custom-nginx:packaged
# Deleted: sha256:f8837621b99d3388a9e78d9ce49fbb773017f770eea80470fb85e0052beae242
# Deleted: sha256:fdc6cdd8925ac25b9e0ed1c8539f96ad89ba1b21793d061e2349b62dd517dadf
# Deleted: sha256:c20e4aa46615fe512a4133089a5cd66f9b7da76366c96548790d5bf865bd49c4
# Deleted: sha256:6d6460a744475a357a2b631a4098aa1862d04510f3625feb316358536fcd8641
```

还可以使用 `image prune` 命令来清除所有未标记的挂起的镜像，如下所示：

```
docker image prune --force

# Deleted Images:
# deleted: sha256:ba9558bdf2beda81b9acc652ce4931a85f0fc7f69dbc91b4efc4561ef7378aff
# deleted: sha256:ad9cc3ff27f0d192f8fa5fadebf813537e02e6ad472f6536847c4de183c02c81
# deleted: sha256:f1e9b82068d43c1bb04ff3e4f0085b9f8903a12b27196df7f1145aa9296c85e7
# deleted: sha256:ec16024aa036172544908ec4e5f842627d04ef99ee9b8d9aaa26b9c2a4b52baa

# Total reclaimed space: 59.19MB
```

`--force`  或 `-f` 选项会跳过所有确认问题。 也可以使用 `--all` 或  `-a`  选项删除本地仓库中的所有缓存镜像。

### 理解 Docker 镜像的分层

从本书的开始，我就一直在说镜像是多层文件。 在本小节中，我将演示镜像的各个层，以及它们如何在该镜像的构建过程中发挥重要作用。

在本演示中，我将使用上一小节的 `custom-nginx:packaged` 镜像。

要可视化镜像的多个层，可以使用 `image history` 命令。`custom-nginx:packaged` 图像的各个层可以如下所示：

```
docker image history custom-nginx:packaged

# IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
# 7f16387f7307        5 minutes ago       /bin/sh -c #(nop)  CMD ["nginx" "-g" "daemon…   0B                             
# 587c805fe8df        5 minutes ago       /bin/sh -c apt-get update &&     apt-get ins…   60MB                
# 6fe4e51e35c1        6 minutes ago       /bin/sh -c #(nop)  EXPOSE 80                    0B                  
# d70eaf7277ea        17 hours ago        /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B                  
# <missing>           17 hours ago        /bin/sh -c mkdir -p /run/systemd && echo 'do…   7B                  
# <missing>           17 hours ago        /bin/sh -c [ -z "$(apt-get indextargets)" ]     0B                  
# <missing>           17 hours ago        /bin/sh -c set -xe   && echo '#!/bin/sh' > /…   811B                
# <missing>           17 hours ago        /bin/sh -c #(nop) ADD file:435d9776fdd3a1834…   72.9MB
```

此镜像有八层。最上面的一层是最新的一层，当向下移动时，这些层会变老。最顶层是通常用于运行容器的那一层。

现在，让我们仔细看看从镜像 `d70eaf7277ea` 到镜像 `7f16387f7307` 的所有镜像。我将忽略 `IMAGE` 是 `<missing>` 的最下面的四层，因为它们与我们无关。

-  `d70eaf7277ea`  是由 `/bin/sh -c #(nop)  CMD ["/bin/bash"]` 创建的，它指示 Ubuntu 内的默认 shell 已成功加载。
-  `6fe4e51e35c1` 是由 `/bin/sh -c #(nop)  EXPOSE 80` 创建的，这是代码中的第二条指令。
- `587c805fe8df` 是由 `/bin/sh -c apt-get update && apt-get install nginx -y && apt-get clean && rm -rf /var/lib/apt/lists/*` 创建的，这是代码中的第三条指令。如果在执行此指令期间安装了所有必需的软件包，可以看到该镜像的大小为  `60MB`。
- 最后，最上层的 `7f16387f7307` 是由 `/bin/sh -c #(nop)  CMD ["nginx", "-g", "daemon off;"]` 创建的，它为该镜像设置了默认命令。

如你所见，该镜像由许多只读层组成，每个层都记录了由某些指令触发的一组新的状态更改。当使用镜像启动容器时，会在其他层之上获得一个新的可写层。

每次使用 Docker 时都会发生这种分层现象，这是通过一个称为 union file system 的技术概念而得以实现的。 在这里，联合意味着集合论中的联合。 根据[Wikipedia]（https://en.wikipedia.org/wiki/UnionFS）-

> 它允许透明地覆盖独立文件系统（称为分支）的文件和目录，从而形成单个一致的文件系统。 合并分支内具有相同路径的目录的内容将在新的虚拟文件系统内的单个合并目录中一起看到。

通过利用这一概念，Docker 可以避免数据重复，并且可以将先前创建的层用作以后构建的缓存。这样便产生了可在任何地方使用的紧凑，有效的镜像。

### 怎样从源码构建 NGINX

在上一小节中，了解了 `FROM`、`EXPOSE`、`RUN` 和 `CMD` 指令。在本小节中，将学到更多有关其他指令的信息。

在本小节中，将再次创建一个自定义的 NGINX 镜像。但是，不同之处在于，将从源代码构建 NGINX，而不是像上一个示例那样使用诸如 `apt-get` 之类的软件包管理器进行安装。

从源代码构建 NGINX，首先需要 NGINX 的源代码。 如果克隆了我的项目仓库，则会在 `custom-nginx` 目录中看到一个名为 `nginx-1.19.2.tar.gz` 的文件。 将使用此归档文件作为构建 NGINX 的源。

在开始编写代码之前，先规划一下流程。 这次的镜像创建过程可以分七个步骤完成。 如下：

-  获得用于构建应用程序的基础镜像，例如 [ubuntu](https://hub.docker.com/_/ubuntu)。
-  在基础镜像上安装必要的构建依赖项。
-  复制  `nginx-1.19.2.tar.gz`  文件到镜像里。
-  解压缩压缩包的内容并删除压缩包。
- 使用  `make` 工具配置构建，编译和安装程序。
-  删除解压缩的源代码。
- 运行`nginx`可执行文件。

现在有了一个规划，让我们开始打开旧的 `Dockerfile` 并按如下所示更新其内容：

```
FROM ubuntu:latest

RUN apt-get update && \
    apt-get install build-essential\ 
                    libpcre3 \
                    libpcre3-dev \
                    zlib1g \
                    zlib1g-dev \
                    libssl-dev \
                    -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY nginx-1.19.2.tar.gz .

RUN tar -xvf nginx-1.19.2.tar.gz && rm nginx-1.19.2.tar.gz

RUN cd nginx-1.19.2 && \
    ./configure \
        --sbin-path=/usr/bin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --with-pcre \
        --pid-path=/var/run/nginx.pid \
        --with-http_ssl_module && \
    make && make install

RUN rm -rf /nginx-1.19.2

CMD ["nginx", "-g", "daemon off;"]
```

如你所见，`Dockerfile` 中的代码反映了我上面提到的七个步骤。

-   `FROM` 指令将 Ubuntu 设置为基本映像，从而为构建任何应用程序提供了理想的环境。
- `RUN`  指令安装了从源代码构建 NGINX 所需的标准软件包。
- 这里的  `COPY`  指令是新的东西。该指令负责在映像内复制 `nginx-1.19.2.tar.gz` 文件。 `COPY` 指令的通用语法是  `COPY <source> <destination>`，其中 source 在本地文件系统中，而 destination 在镜像内部。 作为目标的 `.` 表示镜像内的工作目录，除非另有设置，否则默认为 `/`。
- 这里的第二条 `RUN` 指令使用 `tar` 从压缩包中提取内容，然后将其删除。
- 存档文件包含一个名为 `nginx-1.19.2` 的目录，其中包含源代码。因此，下一步，将 `cd`  进入该目录并执行构建过程。 可以阅读 [How to Install Software from Source Code…… and Remove it Afterwards](https://itsfoss.com/install-software-from-source-code/) 文章，以了解有关该主题的更多信息。
- 构建和安装完成后，使用  `rm`  命令删除 `nginx-1.19.2` 目录。
- 在最后一步，像以前一样以单进程模式启动 NGINX。

现在，要使用此代码构建镜像，请执行以下命令：

```
docker image build --tag custom-nginx:built .

# Step 1/7 : FROM ubuntu:latest
#  ---> d70eaf7277ea
# Step 2/7 : RUN apt-get update &&     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> Running in 2d0aa912ea47
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 2d0aa912ea47
#  ---> cbe1ced3da11
# Step 3/7 : COPY nginx-1.19.2.tar.gz .
#  ---> 7202902edf3f
# Step 4/7 : RUN tar -xvf nginx-1.19.2.tar.gz && rm nginx-1.19.2.tar.gz
 ---> Running in 4a4a95643020
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 4a4a95643020
#  ---> f9dec072d6d6
# Step 5/7 : RUN cd nginx-1.19.2 &&     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &&     make && make install
#  ---> Running in b07ba12f921e
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container b07ba12f921e
#  ---> 5a877edafd8b
# Step 6/7 : RUN rm -rf /nginx-1.19.2
#  ---> Running in 947e1d9ba828
# Removing intermediate container 947e1d9ba828
#  ---> a7702dc7abb7
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in 3110c7fdbd57
# Removing intermediate container 3110c7fdbd57
#  ---> eae55f7369d3
# Successfully built eae55f7369d3
# Successfully tagged custom-nginx:built
```

这段代码还不错，但是我们可以在某些地方进行改进。

- 可以使用  `ARG`  指令创建自变量，而不是像 `nginx-1.19.2.tar.gz` 这样的文件名进行硬编码。 这样，只需更改参数即可更改版本或文件名。
- 可以让守护程序在构建过程中下载文件，而不是手动下载存档。 还有另一种类似于`COPY`  的指令，称为 `ADD`  指令，该指令能够从互联网添加文件。

打开 `Dockerfile` 文件，并按如下所示更新其内容：

```
FROM ubuntu:latest

RUN apt-get update && \
    apt-get install build-essential\ 
                    libpcre3 \
                    libpcre3-dev \
                    zlib1g \
                    zlib1g-dev \
                    libssl-dev \
                    -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"

ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .

RUN tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION}

RUN cd ${FILENAME} && \
    ./configure \
        --sbin-path=/usr/bin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --with-pcre \
        --pid-path=/var/run/nginx.pid \
        --with-http_ssl_module && \
    make && make install

RUN rm -rf /${FILENAME}}

CMD ["nginx", "-g", "daemon off;"]
```

该代码几乎与先前的代码块相同，除了在第 13、14 行有一条名为 `ARG` 的新指令，以及在第 16 行用法了 `ADD` 指令。有关更新代码的说明如下：

-  `ARG` 指令可以像其他语言一样声明变量。以后可以使用 `${argument name}` 语法访问这些变量或参数。在这里，我将文件名 `nginx-1.19.2` 和文件扩展名 `tar.gz` 放在了两个单独的参数中。这样，我只需在一个地方进行更改就可以在 NGINX 的较新版本或存档格式之间进行切换。在上面的代码中，我向变量添加了默认值。变量值也可以作为 `image build` 命令的选项传递。 您可以查阅[官方参考](https://docs.docker.com/engine/reference/builder/#arg)了解更多详细信息。
- 在 `ADD` 指令中，我使用上面声明的参数动态形成了下载 URL。 在 `https://nginx.org/download/${FILENAME}.${EXTENSION}`  行将在生成期间生成类似于 `https://nginx.org/download/nginx-1.19.2.tar.gz` 的内容。 构建过程。 可以通过一次更改文件版本或扩展名的方式来更改文件版本或扩展名，这要感谢 `ARG` 指令。
- 默认情况下，`ADD` 指令不会提取从互联网获取的文件，因此在第 18 行使用了 `tar`。

其余代码几乎不变。 现在应该可以自己理解参数的用法。 最后，让我们尝试从此更新的代码构建镜像。

```
docker image build --tag custom-nginx:built .

# Step 1/9 : FROM ubuntu:latest
#  ---> d70eaf7277ea
# Step 2/9 : RUN apt-get update &&     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> cbe1ced3da11
### LONG INSTALLATION STUFF GOES HERE ###
# Step 3/9 : ARG FILENAME="nginx-1.19.2"
#  ---> Running in 33b62a0e9ffb
# Removing intermediate container 33b62a0e9ffb
#  ---> fafc0aceb9c8
# Step 4/9 : ARG EXTENSION="tar.gz"
#  ---> Running in 5c32eeb1bb11
# Removing intermediate container 5c32eeb1bb11
#  ---> 36efdf6efacc
# Step 5/9 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================>]  1.049MB/1.049MB
#  ---> dba252f8d609
# Step 6/9 : RUN tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION}
#  ---> Running in 2f5b091b2125
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 2f5b091b2125
#  ---> 2c9a325d74f1
# Step 7/9 : RUN cd ${FILENAME} &&     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &&     make && make install
#  ---> Running in 11cc82dd5186
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 11cc82dd5186
#  ---> 6c122e485ec8
# Step 8/9 : RUN rm -rf /${FILENAME}}
#  ---> Running in 04102366960b
# Removing intermediate container 04102366960b
#  ---> 6bfa35420a73
# Step 9/9 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in 63ee44b571bb
# Removing intermediate container 63ee44b571bb
#  ---> 4ce79556db1b
# Successfully built 4ce79556db1b
# Successfully tagged custom-nginx:built
```

现在可以使用 `custom-nginx:built` 镜像来运行容器了。

```
docker container run --rm --detach --name custom-nginx-built --publish 8080:80 custom-nginx:built

# 90ccdbc0b598dddc4199451b2f30a942249d85a8ed21da3c8d14612f17eed0aa

docker container ls

# CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                  NAMES
# 90ccdbc0b598        custom-nginx:built   "nginx -g 'daemon of…"   2 minutes ago       Up 2 minutes        0.0.0.0:8080->80/tcp   custom-nginx-built
```

使用 `custom-nginx:built-v2` 映像的容器已成功运行。 现在可以从 `http://127.0.0.1:8080` 访问该容器。
![](https://www.freecodecamp.org/news/content/images/2021/01/nginx-default.png)

这是 NGINX 的默认响应页面。可以访问[官方参考](https://docs.docker.com/engine/reference/builder/)网站，以了解有关可用指令的更多信息。

### 怎样优化 Docker 镜像

在最后一个小节中构建的镜像具有功能，但是没有经过优化。为了证明我的观点，让我们使用  `image ls` 命令来查看镜像的大小：

```
docker image ls

# REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
# custom-nginx       built     1f3aaf40bb54   16 minutes ago   343MB
```

对于仅包含 NGINX 的镜像，这太大了。 如果拉取官方镜像并检查其大小，会看到它很小：

```
docker image pull nginx:stable

# stable: Pulling from library/nginx
# a076a628af6f: Pull complete 
# 45d7b5d3927d: Pull complete 
# 5e326fece82e: Pull complete 
# 30c386181b68: Pull complete 
# b15158e9ebbe: Pull complete 
# Digest: sha256:ebd0fd56eb30543a9195280eb81af2a9a8e6143496accd6a217c14b06acd1419
# Status: Downloaded newer image for nginx:stable
# docker.io/library/nginx:stable

docker image ls

# REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
# custom-nginx       built     1f3aaf40bb54   25 minutes ago   343MB
# nginx              stable    b9e1dc12387a   11 days ago      133MB
```

为了找出根本原因，让我们首先看一下 `Dockerfile`：

```
FROM ubuntu:latest

RUN apt-get update && \
    apt-get install build-essential\ 
                    libpcre3 \
                    libpcre3-dev \
                    zlib1g \
                    zlib1g-dev \
                    libssl-dev \
                    -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"

ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .

RUN tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION}

RUN cd ${FILENAME} && \
    ./configure \
        --sbin-path=/usr/bin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --with-pcre \
        --pid-path=/var/run/nginx.pid \
        --with-http_ssl_module && \
    make && make install

RUN rm -rf /${FILENAME}}

CMD ["nginx", "-g", "daemon off;"]
```

正如在第 3 行看到的那样，`RUN` 指令安装了很多东西。尽管这些软件包对于从源代码构建 NGINX 是必需的，但对于运行它而言则不是必需的。

在安装的 6 个软件包中，只有两个是运行 NGINX 所必需的。 即 `libpcre3` 和 `zlib1g`。 因此，一个更好的主意是在构建过程完成后，卸载其他软件包。

为此，请按如下所示更新的 `Dockerfile` ：

```
FROM ubuntu:latest

EXPOSE 80

ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"

ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .

RUN apt-get update && \
    apt-get install build-essential \ 
                    libpcre3 \
                    libpcre3-dev \
                    zlib1g \
                    zlib1g-dev \
                    libssl-dev \
                    -y && \
    tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION} && \
    cd ${FILENAME} && \
    ./configure \
        --sbin-path=/usr/bin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --with-pcre \
        --pid-path=/var/run/nginx.pid \
        --with-http_ssl_module && \
    make && make install && \
    cd / && rm -rfv /${FILENAME} && \
    apt-get remove build-essential \ 
                    libpcre3-dev \
                    zlib1g-dev \
                    libssl-dev \
                    -y && \
    apt-get autoremove -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["nginx", "-g", "daemon off;"]
```

如你所见，在第 10 行上，一条 `RUN`  指令正在执行所有必要的核心操作。确切的事件链如下：

-  从第 10 行到第 17 行，安装所有必需的软件包。
- 在第 18 行，将提取源代码，并删除下载的存档。
- 从第 19 行到第 28 行，NGINX 在系统上配置，构建和安装。
- 在第 29 行，从下载的档案中提取的文件将被删除。
- 从第 30 行到第 36 行，所有不必要的软件包都将被卸载并清除缓存。 运行 NGINX 需要 `libpcre3` 和 `zlib1g` 包，因此我们保留了它们。

你可能会问，为什么我要在一条  `RUN` 指令中做这么多工作，而不是像我们之前那样将它们很好地拆分成多个指令。 好吧，将它们拆分会是一个错误。

如果安装了软件包，然后按照单独的 `RUN` 说明将其删除，则它们将位于镜像的不同层中。尽管最终镜像不会包含已删除的包，但是由于它们存在于组成该图像的一层之一中，因此它们的大小仍将添加到最终镜像中。因此，请确保在单层上进行了此类更改。

让我们使用此 `Dockerfile` 来构建映像，并查看它们之间的区别。

```
docker image build --tag custom-nginx:built .

# Sending build context to Docker daemon  1.057MB
# Step 1/7 : FROM ubuntu:latest
#  ---> f63181f19b2f
# Step 2/7 : EXPOSE 80
#  ---> Running in 006f39b75964
# Removing intermediate container 006f39b75964
#  ---> 6943f7ef9376
# Step 3/7 : ARG FILENAME="nginx-1.19.2"
#  ---> Running in ffaf89078594
# Removing intermediate container ffaf89078594
#  ---> 91b5cdb6dabe
# Step 4/7 : ARG EXTENSION="tar.gz"
#  ---> Running in d0f5188444b6
# Removing intermediate container d0f5188444b6
#  ---> 9626f941ccb2
# Step 5/7 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================>]  1.049MB/1.049MB
#  ---> a8e8dcca1be8
# Step 6/7 : RUN apt-get update &&     apt-get install build-essential                     libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &&     tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION} &&     cd ${FILENAME} &&     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &&     make && make install &&     cd / && rm -rfv /${FILENAME} &&     apt-get remove build-essential                     libpcre3-dev                     zlib1g-dev                     libssl-dev                     -y &&     apt-get autoremove -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> Running in e5675cad1260
### LONG INSTALLATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container e5675cad1260
#  ---> dc7e4161f975
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in b579e4600247
# Removing intermediate container b579e4600247
#  ---> 512aa6a95a93
# Successfully built 512aa6a95a93
# Successfully tagged custom-nginx:built

docker image ls

# REPOSITORY         TAG       IMAGE ID       CREATED              SIZE
# custom-nginx       built     512aa6a95a93   About a minute ago   81.6MB
# nginx              stable    b9e1dc12387a   11 days ago          133MB
```

如你所见，镜像大小从 343MB 变为 81.6MB。 官方镜像是 133MB。 这是一个非常优化的构建，我们可以在下一部分中进一步介绍。

### 拥抱 Alpine Linux

如果之前了解过 Docker，可能已经听说了 [Alpine Linux](https://alpinelinux.org/)。 这是功能齐全的 [Linux](https://en.wikipedia.org/wiki/Linux) 发行版，就像 [Ubuntu](https://ubuntu.com/)、[Debian](https://www.debian.org/) 或 [Fedora](https://getfedora.org/)。

但是 Alpine 的好处是它是基于 `musl`，`libc` 和 `busybox` 构建的，并且是轻量级的。最新的 [ubuntu](https://hub.docker.com/_/ubuntu) 镜像大约为 28MB，而 [alpine](https://hub.docker.com/_/alpine) 仅为 2.8MB。

除了轻量之外，Alpine 还很安全，比其他发行版更适合创建容器。

尽管不像其他商业发行版那样用户友好，但是向 Alpine 的过渡仍然非常简单。在本小节中，将学习有关以 Alpine 镜像为基础重新创建 `custom-nginx` 镜像的信息。

打开的 `Dockerfile` 并更新其内容，如下所示：

```
FROM alpine:latest

EXPOSE 80

ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"

ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .

RUN apk add --no-cache pcre zlib && \
    apk add --no-cache \
            --virtual .build-deps \
            build-base \ 
            pcre-dev \
            zlib-dev \
            openssl-dev && \
    tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION} && \
    cd ${FILENAME} && \
    ./configure \
        --sbin-path=/usr/bin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --with-pcre \
        --pid-path=/var/run/nginx.pid \
        --with-http_ssl_module && \
    make && make install && \
    cd / && rm -rfv /${FILENAME} && \
    apk del .build-deps

CMD ["nginx", "-g", "daemon off;"]
```

除了几处更改外，代码几乎完全相同。 我将列出更改并在进行过程中进行解释：

- 我们不使用 `apt-get install` 来安装软件包，而是使用 `apk add`。`--no-cache` 选项意味着下载的软件包将不会被缓存。同样，我们将使用 `apk del` 代替 `apt-get remove` 来卸载软件包。
- `apk add` 命令的 `--virtual` 选项用于将一堆软件包捆绑到单个虚拟软件包中，以便于管理。仅用于构建程序所需的软件包被标记为  `.build-deps`，然后通过执行 `apk del .build-deps` 命令在第 29 行将其删除。 可以在官方文档中了解有关 [virtuals](https://docs.alpinelinux.org/user-handbook/0.1a/Working/apk.html#_virtuals) 的更多信息。
- 软件包名称在这里有些不同。通常，每个 Linux 发行版都有其软件包仓库，可供在其中搜索软件包的每个人使用。如果你知道某项任务所需的软件包，则可以直接转到指定发行版的仓库的并进行搜索。可以 [在此处了解 Alpine Linux 软件包](https://pkgs.alpinelinux.org/packages)。

现在使用此 `Dockerfile` 构建一个新镜像，并查看文件大小的差异：

```
docker image build --tag custom-nginx:built .

# Sending build context to Docker daemon  1.055MB
# Step 1/7 : FROM alpine:latest
#  ---> 7731472c3f2a
# Step 2/7 : EXPOSE 80
#  ---> Running in 8336cfaaa48d
# Removing intermediate container 8336cfaaa48d
#  ---> d448a9049d01
# Step 3/7 : ARG FILENAME="nginx-1.19.2"
#  ---> Running in bb8b2eae9d74
# Removing intermediate container bb8b2eae9d74
#  ---> 87ca74f32fbe
# Step 4/7 : ARG EXTENSION="tar.gz"
#  ---> Running in aa09627fe48c
# Removing intermediate container aa09627fe48c
#  ---> 70cb557adb10
# Step 5/7 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================>]  1.049MB/1.049MB
#  ---> b9790ce0c4d6
# Step 6/7 : RUN apk add --no-cache pcre zlib &&     apk add --no-cache             --virtual .build-deps             build-base             pcre-dev             zlib-dev             openssl-dev &&     tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION} &&     cd ${FILENAME} &&     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &&     make && make install &&     cd / && rm -rfv /${FILENAME} &&     apk del .build-deps
#  ---> Running in 0b301f64ffc1
### LONG INSTALLATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 0b301f64ffc1
#  ---> dc7e4161f975
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in b579e4600247
# Removing intermediate container b579e4600247
#  ---> 3e186a3c6830
# Successfully built 3e186a3c6830
# Successfully tagged custom-nginx:built

docker image ls

# REPOSITORY         TAG       IMAGE ID       CREATED         SIZE
# custom-nginx       built     3e186a3c6830   8 seconds ago   12.8MB
```

ubuntu 版本为 81.6MB，而 alpine  版本已降至 12.8MB，这是一个巨大的进步。 除了 `apk` 软件包管理器外，Alpine 和 Ubuntu 还有一些其他的区别，但是没什么大不了的。 遇到困难，可以搜索互联网。

### 怎样创建可执行 Docker 镜像

在上一节中，使用了 [fhsinchy/rmbyext](https://hub.docker.com/r/fhsinchy/rmbyext) 镜像。在本节中，将学习如何制作这样的可执行镜像。

首先，打开本书随附仓库的目录。`rmbyext` 应用程序的代码位于同名子目录中。

在开始使用 `Dockerfile` 之前，请花一点时间来规划最终的输出。 我认为应该是这样的：

- 该镜像应预安装 Python。
- 它应该包含 `rmbyext` 脚本的副本。
- 应该在将要执行脚本的地方设置一个工作目录。
- 应该将 `rmbyext` 脚本设置为入口点，以便镜像可以将扩展名用作参数。

要构建上面提到的镜像，请执行以下步骤：

-  获得可以运行 Python 脚本基础镜像，例如 [python](https://hub.docker.com/_/python)。
-  将工作目录设置为易于访问的目录。
- 安装 Git，以便可以从我的 GitHub 仓库中安装脚本。
-  使用 Git 和 pip 安装脚本。
- 删除不必要的构建软件包。
- 将 `rmbyext` 设置为该图像的入口点。

现在在 `rmbyext` 目录中创建一个新的 `Dockerfile`，并将以下代码放入其中：

```
FROM python:3-alpine

WORKDIR /zone

RUN apk add --no-cache git && \
    pip install git+https://github.com/fhsinchy/rmbyext.git
    apk del git

ENTRYPOINT [ "rmbyext" ]
```

该文件中的指令说明如下：

- `FROM` 指令将 [python](https://hub.docker.com/_/python) 设置为基本镜像，从而为运行 Python 脚本提供了理想的环境。`3-alpine` 标记表示需要 Python 3 的 Alpine 版本。
-  这里的 `WORKDIR` 指令将默认工作目录设置为 `/zone`。这里的工作目录名称完全是随机的。我发现 zone 是一个合适的名称，你也可以换成任何你想要的名称。
- 假设从 GitHub 安装了 `rmbyext` 脚本，则 `git` 是安装时的依赖项。第 5 行的 `RUN` 指令先安装 `git`，然后使用 Git 和 pip 安装  `rmbyext` 脚本。之后也删除了`git`。
- 最后，在第 9 行，`ENTRYPOINT` 指令将 `rmbyext` 脚本设置为该镜像的入口点。

在整个文件中，第 9 行是将这个看似正常的镜像转换为可执行镜像的关键。现在要构建镜像，可以执行以下命令：

```
docker image build --tag rmbyext .

# Sending build context to Docker daemon  2.048kB
# Step 1/4 : FROM python:3-alpine
# 3-alpine: Pulling from library/python
# 801bfaa63ef2: Already exists 
# 8723b2b92bec: Already exists 
# 4e07029ccd64: Already exists 
# 594990504179: Already exists 
# 140d7fec7322: Already exists 
# Digest: sha256:7492c1f615e3651629bd6c61777e9660caa3819cf3561a47d1d526dfeee02cf6
# Status: Downloaded newer image for python:3-alpine
#  ---> d4d4f50f871a
# Step 2/4 : WORKDIR /zone
#  ---> Running in 454374612a91
# Removing intermediate container 454374612a91
#  ---> 7f7e49bc98d2
# Step 3/4 : RUN apk add --no-cache git &&     pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext &&     apk del git
#  ---> Running in 27e2e96dc95a
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 27e2e96dc95a
#  ---> 3c7389432e36
# Step 4/4 : ENTRYPOINT [ "rmbyext" ]
#  ---> Running in f239bbea1ca6
# Removing intermediate container f239bbea1ca6
#  ---> 1746b0cedbc7
# Successfully built 1746b0cedbc7
# Successfully tagged rmbyext:latest

docker image ls

# REPOSITORY         TAG        IMAGE ID       CREATED         SIZE
# rmbyext            latest     1746b0cedbc7   4 minutes ago   50.9MB
```

这里在镜像名称之后没有提供任何标签，因此默认情况下该镜像已被标记为 `latest`。 应该能够像在上一节中看到的那样运行该镜像。 请记住，参考你设置的实际镜像名称，而不是这里的 `fhsinchy/rmbyext`。

现在知道如何制作镜像了，是时候与全世界分享它们了。在线共享镜像很容易。所需要做的就是在任何在线仓库中注册一个帐户。 在此处我将使用 [Docker Hub](https://hub.docker.com/)。

导航到 [Sign Up](https://hub.docker.com/signup) 页面并创建一个免费帐户。一个免费帐户可托管无限的公共仓库和一个私有仓库。

创建帐户后，需要使用 Docker CLI 登录。打开终端并执行以下命令：

```
docker login

# Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
# Username: fhsinchy
# Password: 
# WARNING! Your password will be stored unencrypted in /home/fhsinchy/.docker/config.json.
# Configure a credential helper to remove this warning. See
# https://docs.docker.com/engine/reference/commandline/login/#credentials-store
#
# Login Succeeded
```

系统将提示输入用户名和密码。如果输入正确，则应该成功登录到你的帐户。

为了在线共享镜像，必须对镜像进行标记。已经在上一小节中学习了有关标记的信息。只是为了加深记忆，`--tag` 或 `-t` 选项的通用语法如下：

```
--tag <image repository>:<image tag>
```

例如，让我们在线共享 `custom-nginx` 图像。 为此，请在 `custom-nginx` 项目目录中打开一个新的终端窗口。

要在线共享镜像，必须使用 `<docker hub username>/<image name>:<image tag>` 语法对其进行标记。 我的用户名是 `fhsinchy`，因此命令如下所示：

```
docker image build --tag fhsinchy/custom-nginx:latest --file Dockerfile.built .

# Step 1/9 : FROM ubuntu:latest
#  ---> d70eaf7277ea
# Step 2/9 : RUN apt-get update &&     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*
#  ---> cbe1ced3da11
### LONG INSTALLATION STUFF GOES HERE ###
# Step 3/9 : ARG FILENAME="nginx-1.19.2"
#  ---> Running in 33b62a0e9ffb
# Removing intermediate container 33b62a0e9ffb
#  ---> fafc0aceb9c8
# Step 4/9 : ARG EXTENSION="tar.gz"
#  ---> Running in 5c32eeb1bb11
# Removing intermediate container 5c32eeb1bb11
#  ---> 36efdf6efacc
# Step 5/9 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================>]  1.049MB/1.049MB
#  ---> dba252f8d609
# Step 6/9 : RUN tar -xvf ${FILENAME}.${EXTENSION} && rm ${FILENAME}.${EXTENSION}
#  ---> Running in 2f5b091b2125
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 2f5b091b2125
#  ---> 2c9a325d74f1
# Step 7/9 : RUN cd ${FILENAME} &&     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &&     make && make install
#  ---> Running in 11cc82dd5186
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 11cc82dd5186
#  ---> 6c122e485ec8
# Step 8/9 : RUN rm -rf /${FILENAME}}
#  ---> Running in 04102366960b
# Removing intermediate container 04102366960b
#  ---> 6bfa35420a73
# Step 9/9 : CMD ["nginx", "-g", "daemon off;"]
#  ---> Running in 63ee44b571bb
# Removing intermediate container 63ee44b571bb
#  ---> 4ce79556db1b
# Successfully built 4ce79556db1b
# Successfully tagged fhsinchy/custom-nginx:latest
```

在此命令中，`fhsinchy/custom-nginx` 是镜像仓库，而 `latest` 是标签。镜像名称可以是任何名称，上传镜像后即无法更改。 可以随时更改标签，该标签通常反映软件的版本或其他类型的内部版本。

以 `node` 镜像为例。`node:lts` 镜像是指 Node.js 的长期支持版本，而 `node:lts-alpine` 版本是指为 Alpine Linux 构建的 Node.js 版本，它比常规版本小得多。

如果您给镜像添加任何标签，则会将其自动标记为 `latest`。但这并不意味着 `latest` 标签将始终引用最新版本。如果出于某种原因，将镜像的较旧版本明确标记为 `latest`，则 Docker 将不会做出任何额外的工作来进行交叉检查。

生成镜像后，可以通过执行以下命令来上传镜像：

```
docker image push <image repository>:<image tag>
```

因此，在我这里，命令如下所示：

```
docker image push fhsinchy/custom-nginx:latest

# The push refers to repository [docker.io/fhsinchy/custom-nginx]
# 4352b1b1d9f5: Pushed 
# a4518dd720bd: Pushed 
# 1d756dc4e694: Pushed 
# d7a7e2b6321a: Pushed 
# f6253634dc78: Mounted from library/ubuntu 
# 9069f84dbbe9: Mounted from library/ubuntu 
# bacd3af13903: Mounted from library/ubuntu 
# latest: digest: sha256:ffe93440256c9edb2ed67bf3bba3c204fec3a46a36ac53358899ce1a9eee497a size: 1788
```

根据镜像大小，上传可能需要一些时间。 完成后，应该可以在中心配置文件页面中找到该镜像。

## 如何容器化 JavaScript 应用程序

现在，已经了解了创建镜像的知识，是时候做一些更相关的工作了。

在本小节中，将使用在之前小节上使用的 [fhsinchy/hello-dock](https://hub.docker.com/r/fhsinchy/hello-dock) 镜像的源代码。在容器化这个非常简单的应用的过程中，介绍了 volumes  和多阶段构建，这是 Docker 中两个很重要的概念。

### 如何编写开发 Dockerfile

首先，打开用来克隆本书随附仓库的目录。 `hello-dock` 应用程序的代码位于具有相同名称的子目录中。

这是一个非常简单的 JavaScript 项目，由 [vitejs/vite](https://github.com/vitejs/vite) 项目构建。不过，请不要担心，无需了解 JavaScript 或 vite 即可学习本小节。了解 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/) 就足够了。

与上一部分中完成的其他项目一样，将从制定如何运行该应用程序的规划开始。 如下：

- 获得可以运行 JavaScript 应用程序的基础镜像，例如 [node](https://hub.docker.com/_/node)。
- 在镜像内设置默认的工作目录。
- 将  `package.json` 文件复制到镜像中。
- 安装必要的依赖项。
- 复制其余的项目文件。
- 通过执行 `npm run dev` 命令来启动 `vite` 开发服务。

该规划应始终来由应用程序的开发人员制定。如果你是开发人员，那么应该已经对如何运行此应用程序有正确的了解。

现在，如果将上述计划放入 `Dockerfile.dev` 中，则该文件应如下所示：
```
FROM node:lts-alpine

EXPOSE 3000

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY ./package.json .
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
```

此代码的说明如下：

- 这里的 `FROM` 指令将官方的 Node.js 镜像设置为基础镜像，从而可以运行 JavaScript 应用。`lts-alpine` 标签代表镜像要使用针对 Alpine 的长期支持版本。 可以在 [node](https://hub.docker.com/_/node) 页面上找到该镜像的所有标签和其它必要的文档。
-  `USER` 指令将镜像的默认用户设置为 `node`。 默认情况下，Docker 以 root 用户身份运行容器。 但是根据 [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)，这有安全隐患。因此，最好是尽可能以非 root 用户身份运行。node 镜像附带一个名为 `node` 的非 root 用户，可以使用 `USER` 指令将其设置为默认用户。
- `RUN mkdir -p /home/node/app` 指令在 `node`  用户的主目录内创建一个名为 `app` 的目录。默认情况下，Linux 中任何非 root 用户的主目录通常是 `/home/<user name>`。
- 然后，`WORKDIR` 指令将默认工作目录设置为新创建的 `/home/node/app` 目录。 默认情况下，任何镜像的工作目录都是根目录。如果不希望在根目录中放置不必要的文件，可以将默认工作目录更改为更合理的目录，例如 `/home/node/app` 或你喜欢的任何目录。该工作目录将适用于任何连续的 `COPY`、`ADD`、`RUN` 和 `CMD` 指令。
- 此处的 `COPY` 指令复制了 `package.json`文件，该文件包含有关此应用程序所有必需依赖项的信息。`RUN` 指令执行 `npm install` 命令，这是在 Node.js 项目中使用 `package.json` 文件安装依赖项的默认命令。 最后的  `.`  代表工作目录。
- 第二条 `COPY` 指令将其余内容从主机文件系统的当前目录（`.`）复制到镜像内的工作目录（`.`）。
- 最后，这里的 `CMD` 指令为该镜像设置了默认命令，即以 `exec` 形式编写的 `npm run dev`。
- 默认情况下，`vite` 开发服务器在端口 `3000` 上运行，最好添加一个 `EXPOSE` 命令。

现在，要由此  `Dockerfile.dev` 构建像镜，可以执行以下命令：

```
docker image build --file Dockerfile.dev --tag hello-dock:dev .

# Step 1/7 : FROM node:lts
#  ---> b90fa0d7cbd1
# Step 2/7 : EXPOSE 3000
#  ---> Running in 722d639badc7
# Removing intermediate container 722d639badc7
#  ---> e2a8aa88790e
# Step 3/7 : WORKDIR /app
#  ---> Running in 998e254b4d22
# Removing intermediate container 998e254b4d22
#  ---> 6bd4c42892a4
# Step 4/7 : COPY ./package.json .
#  ---> 24fc5164a1dc
# Step 5/7 : RUN npm install
#  ---> Running in 23b4de3f930b
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 23b4de3f930b
#  ---> c17ecb19a210
# Step 6/7 : COPY . .
#  ---> afb6d9a1bc76
# Step 7/7 : CMD [ "npm", "run", "dev" ]
#  ---> Running in a7ff529c28fe
# Removing intermediate container a7ff529c28fe
#  ---> 1792250adb79
# Successfully built 1792250adb79
# Successfully tagged hello-dock:dev
```

如果文件名不是  `Dockerfile`，则必须使用 `--file` 选项显式传递文件名。 通过执行以下命令，可以使用此镜像运行容器：

```
docker container run \
    --rm \
    --detach \
    --publish 3000:3000 \
    --name hello-dock-dev \
    hello-dock:dev

# 21b9b1499d195d85e81f0e8bce08f43a64b63d589c5f15cbbd0b9c0cb07ae268
```

现在访问 `http://127.0.0.1:3000`，可以看到 `hello-dock` 应用程序。

![](https://www.freecodecamp.org/news/content/images/2021/01/hello-dock-dev.png)

恭喜你在容器内运行了你的第一个实际应用程序。刚刚编写的代码还可以，但是它存在一个大问题，可以在某些地方进行改进。让我们先从问题开始。

### 如何在 Docker 中使用 Bind Mounts

如果你以前使用过任何前端 JavaScript 框架，则应该知道这些框架中的开发服务器通常带有热重载功能。也就是说，如果对代码进行更改，服务器将重新加载，并自动反映立即进行的所有更改。

但是，如果现在对代码进行任何更改，将不会在浏览器中运行任何应用程序。这是因为正在更改本地文件系统中的代码，但是在浏览器中看到的应用程序位于容器文件系统中。

![](https://www.freecodecamp.org/news/content/images/2021/01/local-vs-container-file-system.svg)

要解决此问题，可以再次使用 [绑定挂载](https://docs.docker.com/storage/bind-mounts/)。 使用绑定挂载，可以轻松地在容器内安装本地文件系统目录。绑定挂载可以直接从容器内部引用本地文件系统，而无需复制本地文件。

![](https://www.freecodecamp.org/news/content/images/2021/01/bind-mounts.svg)

这样，对本地源代码所做的任何更改都会及时反映在容器内部，从而触发 `vite` 开发服务器的热重载功能。对容器内部文件系统所做的更改也将反映在本地文件系统上。

已经在[使用可执行镜像](https://www.freecodecamp.org/news/the-docker-handbook/#working-with-executable-images)小节中学习到，可以对  `container run` 或 `container start` 命令使用 `--volume` 或 `-v` 选项创建绑定挂载。 回顾一下，通用语法如下：

```
--volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>
```

停止先前启动的 `hello-dock-dev` 容器，并通过执行以下命令来启动新的容器：

```
docker container run \
    --rm \
    --publish 3000:3000 \
    --name hello-dock-dev \
    --volume $(pwd):/home/node/app \
    hello-dock:dev

# sh: 1: vite: not found
# npm ERR! code ELIFECYCLE
# npm ERR! syscall spawn
# npm ERR! file sh
# npm ERR! errno ENOENT
# npm ERR! hello-dock@0.0.0 dev: `vite`
# npm ERR! spawn ENOENT
# npm ERR!
# npm ERR! Failed at the hello-dock@0.0.0 dev script.
# npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
# npm WARN Local package.json exists, but node_modules missing, did you mean to install?
```

请记住，我省略了 `--detach` 选项，这只是说明一个非常重要的观点。如你所见，该应用程序现在根本没有运行。

这是因为尽管 volume 解决了热重载的问题，但它引入了另一个问题。如果你以前有过使用 Node.js 的经验，你可能会知道 Node.js 项目的依赖项位于项目根目录的 `node_modules` 目录中。

现在，将项目根目录作为容器中的 volume  安装在本地文件系统上，容器中的内容将被包含所有依赖项的 `node_modules` 目录替换。 这意味着 `vite` 软件包不见了。

### 如何在 Docker 中使用匿名卷

可以使用匿名卷解决此问题。匿名卷除了无需在此处指定源目录之外，与绑定挂载相同。 创建匿名卷的通用语法如下：

```
--volume <container file system directory absolute path>:<read write access>
```

因此，用两个卷启动 `hello-dock` 容器的最终命令应如下：

```
docker container run \
    --rm \
    --detach \
    --publish 3000:3000 \
    --name hello-dock-dev \
    --volume $(pwd):/home/node/app \
    --volume /home/node/app/node_modules \
    hello-dock:dev

# 53d1cfdb3ef148eb6370e338749836160f75f076d0fbec3c2a9b059a8992de8b
```

在这里，Docker 将从容器内部获取整个 `node_modules` 目录，并将其存放在主机文件系统上由 Docker 守护程序管理的其他目录中，并将该目录作为 `node_modules` 挂载在容器中。

### 如何在 Docker 中执行多阶段构建

到目前为止，在本节中，已经构建了用于在开发模式下运行 JavaScript 应用程序的镜像。现在，如果要在生产模式下构建镜像，会有一些新的挑战。

在开发模式下，`npm run serve` 命令启动一个开发服务器，该服务器将应用程序提供给用户。该服务器不仅提供文件，还提供热重载功能。

在生产模式下，`npm run build` 命令将所有 JavaScript 代码编译为一些静态 HTML、CSS 和 JavaScript 文件。要运行这些文件，不需要 node 或任何其他运行时依赖项。只需要一个像 `nginx`  这样的服务器。

要在应用程序以生产模式运行时创建镜像，可以执行以下步骤：

-  使用 `node` 作为基础镜像并构建应用程序。
- 在 node 镜像中安装 `nginx` 并使用它来提供静态文件。

这种方法是完全有效的。但是问题在于，`node` 镜像很大，并且它所承载的大多数内容对于静态文件服务而言都是不必要的。解决此问题的更好方法如下：

- 使用`node`图像作为基础并构建应用程序。
- 将使用 `node` 镜像创建的文件复制到 `nginx` 映像。
- 根据 `nginx` 创建最终镜像，并丢弃所有与 `node` 相关的东西。

这样，镜像仅包含所需的文件，变得非常方便。

这种方法是一个多阶段构建。要执行这样的构建，在 `hello-dock` 项目目录中创建一个新的 `Dockerfile`，并将以下内容放入其中：

```
FROM node:lts-alpine as builder

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine

EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
```

如你所见，`Dockerfile` 看起来很像以前的 Dockerfile，但有一些不同之处。该文件的解释如下：

- 第 1 行使用 `node:lts-alpine` 作为基础镜像开始构建的第一阶段。`as builder` 语法为此阶段分配一个名称，以便以后可以引用。
- 从第 3 行到第 13 行，以前已经看过很多次了。实际上，`RUN npm run build` 命令会编译整个应用程序，并将其存放在 `/app/dist` 目录中，其中 `/app` 是工作目录，`/dist`  是 `vite` 应用程序的默认输出目录。
- 第 15 行使用 `nginx:stable-alpine` 作为基础镜像开始构建的第二阶段。
- NGINX 服务器默认在端口 80 上运行，因此添加了 `EXPOSE 80` 行。
- 最后一行是 `COPY` 指令。`--from=builder` 部分表示要从 `builder` 阶段复制一些文件。之后，这是一条标准的复制指令，其中 `/app/dist` 是 source，而 `/usr/share/nginx/html`  是 destination。 这里使用的 destination 是 NGINX 的默认站点路径，因此放置在其中的任何静态文件都将自动提供。

如你所见，生成的镜像是基于 `nginx` 的镜像，仅包含运行应用程序所需的文件。要构建此镜像，请执行以下命令：

```
docker image build --tag hello-dock:prod .

# Step 1/9 : FROM node:lts-alpine as builder
#  ---> 72aaced1868f
# Step 2/9 : WORKDIR /app
#  ---> Running in e361c5c866dd
# Removing intermediate container e361c5c866dd
#  ---> 241b4b97b34c
# Step 3/9 : COPY ./package.json ./
#  ---> 6c594c5d2300
# Step 4/9 : RUN npm install
#  ---> Running in 6dfabf0ee9f8
# npm WARN deprecated fsevents@2.1.3: Please update to v 2.2.x
#
# > esbuild@0.8.29 postinstall /app/node_modules/esbuild
# > node install.js
#
# npm notice created a lockfile as package-lock.json. You should commit this file.
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules/chokidar/node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
# npm WARN hello-dock@0.0.0 No description
# npm WARN hello-dock@0.0.0 No repository field.
# npm WARN hello-dock@0.0.0 No license field.
#
# added 327 packages from 301 contributors and audited 329 packages in 35.971s
#
# 26 packages are looking for funding
#   run `npm fund` for details
#
# found 0 vulnerabilities
#
# Removing intermediate container 6dfabf0ee9f8
#  ---> 21fd1b065314
# Step 5/9 : COPY . .
#  ---> 43243f95bff7
# Step 6/9 : RUN npm run build
#  ---> Running in 4d918cf18584
#
# > hello-dock@0.0.0 build /app
# > vite build
#
# - Building production bundle...
#
# [write] dist/index.html 0.39kb, brotli: 0.15kb
# [write] dist/_assets/docker-handbook-github.3adb4865.webp 12.32kb
# [write] dist/_assets/index.eabcae90.js 42.56kb, brotli: 15.40kb
# [write] dist/_assets/style.0637ccc5.css 0.16kb, brotli: 0.10kb
# - Building production bundle...
#
# Build completed in 1.71s.
#
# Removing intermediate container 4d918cf18584
#  ---> 187fb3e82d0d
# Step 7/9 : EXPOSE 80
#  ---> Running in b3aab5cf5975
# Removing intermediate container b3aab5cf5975
#  ---> d6fcc058cfda
# Step 8/9 : FROM nginx:stable-alpine
# stable: Pulling from library/nginx
# 6ec7b7d162b2: Already exists 
# 43876acb2da3: Pull complete 
# 7a79edd1e27b: Pull complete 
# eea03077c87e: Pull complete 
# eba7631b45c5: Pull complete 
# Digest: sha256:2eea9f5d6fff078ad6cc6c961ab11b8314efd91fb8480b5d054c7057a619e0c3
# Status: Downloaded newer image for nginx:stable
#  ---> 05f64a802c26
# Step 9/9 : COPY --from=builder /app/dist /usr/share/nginx/html
#  ---> 8c6dfc34a10d
# Successfully built 8c6dfc34a10d
# Successfully tagged hello-dock:prod
```

生成镜像后，可以通过执行以下命令来运行新容器：

```
docker container run \
    --rm \
    --detach \
    --name hello-dock-prod \
    --publish 8080:80 \
    hello-dock:prod

# 224aaba432bb09aca518fdd0365875895c2f5121eb668b2e7b2d5a99c019b953
```

正在运行的应用程序应位于 `http://127.0.0.1:8080` 上：

![](https://www.freecodecamp.org/news/content/images/2021/01/hello-dock.png)

在这里，可以看到我所有的 `hello-dock` 应用程序。 如果要构建具有大量依赖关系的大型应用程序，那么多阶段构建可能会非常有用。如果配置正确，则可以很好地优化和压缩分多个阶段构建的镜像。

### 如何忽略不必要的文件

如果了解 `git`，你可能会知道项目中的 `.gitignore` 文件。 这些文件包含要从仓库中排除的文件和目录的列表。

嗯，Docker 也有类似的概念。`.dockerignore` 文件包含要从镜像构建中排除的文件和目录的列表。可以在 `hello-dock` 目录中有一个预先创建的 `.dockerignore` 文件。

```
.git
*Dockerfile*
*docker-compose*
node_modules
```

该 `.dockerignore` 文件必须位于构建上下文中。这里提到的文件和目录将被 `COPY` 指令忽略。但是，如果执行绑定挂载，则 `.dockerignore` 文件将对此无效。我已经在项目仓库中的必要位置添加了 `.dockerignore` 文件。

## Docker 中的网络操作基础知识

到目前为止，在本书中，仅处理了单个容器项目。但是在实际应用中，多数项目都具有多个容器。老实说，如果不了解容器隔离的细微差别，使用一堆容器可能会有些困难。

因此，在本书的这一部分中，将介绍 Docker 的基本网络，并涉及一个小型的多容器项目。

好了，已经在上一节中了解到容器是隔离的环境。现在考虑一个场景，其中有一个基于 [Express.js](https://expressjs.com/)  `notes-api` 应用程序和一个 [PostgreSQL](https://www.postgresql.org/) 数据库服务，他们在两个单独的容器中运行。

这两个容器彼此完全隔离，并且彼此无关。**那么如何连接两者？ 将是一个挑战。**

你可能会想到针对此问题的两种可能的解决方案。 它们如下：

- 使用暴露的端口访问数据库服务。
- 使用其 IP 地址和默认端口访问数据库服务。

第一个涉及从 `postgres` 容器暴露一个端口，`notes-api` 将通过该端口进行连接。假设来自 `postgres` 容器的暴露端口为 5432。现在，如果尝试从 `notes-api` 容器内部连接到 `127.0.0.1:5432`，会发现 `notes-api` 根本找不到数据库服务。

原因是，在 `notes-api` 容器内的 `127.0.0.1` 时，只是代表当前容器的 `localhost` 。`postgres` 服务根本不存在。结果是，`notes-api` 应用程序无法连接。

你可能想到的第二个解决方案找到  `postgres` 容器的确切 IP 地址，使用 `container inspect` 命令并将其与端口一起使用。 假设 `postgres`  容器的名称为 `notes-api-db-server` ，则可以通过执行以下命令轻松获得 IP 地址：

```
docker container inspect --format='{{range .NetworkSettings.Networks}} {{.IPAddress}} {{end}}' notes-api-db-server

#  172.17.0.2
```

现在假设 `postgres` 的默认端口是 `5432`，可以通过从 `notes-api` 容器连接到 `172.17.0.2:5432` 来非常容易地访问数据库服务。

这种方法也存在问题。 不建议使用 IP 地址来引用容器。另外，如果容器被破坏并重新创建，则 IP 地址可能会更改。跟踪这些不断变化的 IP 地址可能非常麻烦。

现在，我已经排除了对原始问题的可能错误答案，正确的答案是，**将它们放置在用户定义的桥接网络下即可将它们连接起来。**

### Docker 网络基础

Docker 中的网络是另一个逻辑对象，和容器和镜像一样。就像其他两个一样，在 `docker network` 组下有很多用于操纵网络的命令。

要列出系统中的网络，请执行以下命令：

```
docker network ls

# NETWORK ID     NAME      DRIVER    SCOPE
# c2e59f2b96bd   bridge    bridge    local
# 124dccee067f   host      host      local
# 506e3822bf1f   none      null      local
```

你应该在系统中看到三个网络。现在在这里查看表的 `DRIVER` 列。这些 drivers 可以视为网络类型。

默认情况下，Docker 具有五类网络驱动。它们如下：

- `bridge` - Docker 中的默认网络驱动程序。当多个容器以标准模式运行并且需要相互通信时，可以使用此方法。
- `host` -  完全消除网络隔离。在 `host`  网络下运行的任何容器基本上都连接到主机系统的网络。
-  `none` - 此驱动程序完全禁用容器的联网。 我还没有找到其应用场景。
-  `overlay` - 这用于跨计算机连接多个 Docker 守护程序，这超出了本书的范围。
- `macvlan` - 允许将 MAC 地址分配给容器，使它们的功能类似于网络中的物理设备。

也有第三方插件，可让你将 Docker 与专用网络堆栈集成。在上述五种方法中，本书仅使用 `bridge` 网络驱动程序。

### 如何在 Docker 中创建用户定义的桥接网络

在开始创建自己的桥接网络之前，我想花一些时间来讨论 Docker 随附的默认桥接网络。让我们首先列出系统上的所有网络：

```
docker network ls

# NETWORK ID     NAME      DRIVER    SCOPE
# c2e59f2b96bd   bridge    bridge    local
# 124dccee067f   host      host      local
# 506e3822bf1f   none      null      local
```

如你所见，Docker 随附了一个名为 `bridge` 的默认桥接网络。 运行的任何容器都将自动连接到此网桥网络：

```
docker container run --rm --detach --name hello-dock --publish 8080:80 fhsinchy/hello-dock
# a37f723dad3ae793ce40f97eb6bb236761baa92d72a2c27c24fc7fda0756657d

docker network inspect --format='{{range .Containers}}{{.Name}}{{end}}' bridge
# hello-dock
```

连接到默认桥接网络的容器可以使用我在上一小节中不鼓励使用的 IP 地址相互通信。

但是，用户定义的桥接网络比默认桥接网络多一些额外的功能。根据有关此主题的官方 [docs](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge)，一些值得注意的额外功能如下：

- **用户定义的网桥可在容器之间提供自动 DNS 解析：** 这意味着连接到同一网络的容器可以使用容器名称相互通信。 因此，如果你有两个名为 `notes-api` 和 `notes-db` 的容器，则 API 容器将能够使用 `notes-db` 名称连接到数据库容器。
- **用户定义的网桥提供更好的隔离性：** 默认情况下，所有容器都连接到默认桥接网络，这可能会导致它们之间的冲突。将容器连接到用户定义的桥可以确保更好的隔离。
- **容器可以即时与用户定义的网络连接和分离：** 在容器的生命周期内，可以即时将其与用户定义的网络连接或断开连接。要从默认网桥网络中删除容器，需要停止容器并使用其他网络选项重新创建它。

既然已经了解了很多有关用户定义的网络的知识，那么现在该为自己创建一个了。可以使用 `network create` 命令创建网络。该命令的通用语法如下：

```
docker network create <network name>
```

要创建名称为 `skynet` 的网络，请执行以下命令：

```
docker network create skynet

# 7bd5f351aa892ac6ec15fed8619fc3bbb95a7dcdd58980c28304627c8f7eb070

docker network ls

# NETWORK ID     NAME     DRIVER    SCOPE
# be0cab667c4b   bridge   bridge    local
# 124dccee067f   host     host      local
# 506e3822bf1f   none     null      local
# 7bd5f351aa89   skynet   bridge    local
```

如你所见，已经使用给定名称创建了一个新网络。当前没有容器连接到该网络。在下一小节中，将学习有关将容器连接到网络的信息。

### 如何在 Docker 中将容器连接到网络

将容器连接到网络的方式主要有两种。首先，可以使用 network connect 命令将容器连接到网络。该命令的通用语法如下：

```
docker network connect <network identifier> <container identifier>
```

要将 `hello-dock` 容器连接到 `skynet` 网络，可以执行以下命令：

```
docker network connect skynet hello-dock

docker network inspect --format='{{range .Containers}} {{.Name}} {{end}}' skynet

#  hello-dock

docker network inspect --format='{{range .Containers}} {{.Name}} {{end}}' bridge

#  hello-dock
```

从两个  `network inspect`  命令的输出中可以看到，`hello-dock` 容器现在已连接到 `skynet` 和默认的 `bridge` 网络。

将容器连接到网络的第二种方法是对 `container run`  或 `container create` 命令使用 `--network` 选项。 该选项的通用语法如下：

```
--network <network identifier>
```

要运行连接到同一网络的另一个 `hello-dock` 容器，可以执行以下命令：

```
docker container run --network skynet --rm --name alpine-box -it alpine sh

# lands you into alpine linux shell

/ # ping hello-dock

# PING hello-dock (172.18.0.2): 56 data bytes
# 64 bytes from 172.18.0.2: seq=0 ttl=64 time=0.191 ms
# 64 bytes from 172.18.0.2: seq=1 ttl=64 time=0.103 ms
# 64 bytes from 172.18.0.2: seq=2 ttl=64 time=0.139 ms
# 64 bytes from 172.18.0.2: seq=3 ttl=64 time=0.142 ms
# 64 bytes from 172.18.0.2: seq=4 ttl=64 time=0.146 ms
# 64 bytes from 172.18.0.2: seq=5 ttl=64 time=0.095 ms
# 64 bytes from 172.18.0.2: seq=6 ttl=64 time=0.181 ms
# 64 bytes from 172.18.0.2: seq=7 ttl=64 time=0.138 ms
# 64 bytes from 172.18.0.2: seq=8 ttl=64 time=0.158 ms
# 64 bytes from 172.18.0.2: seq=9 ttl=64 time=0.137 ms
# 64 bytes from 172.18.0.2: seq=10 ttl=64 time=0.145 ms
# 64 bytes from 172.18.0.2: seq=11 ttl=64 time=0.138 ms
# 64 bytes from 172.18.0.2: seq=12 ttl=64 time=0.085 ms

--- hello-dock ping statistics ---
13 packets transmitted, 13 packets received, 0% packet loss
round-trip min/avg/max = 0.085/0.138/0.191 ms
```

如你所见，从 `alpine-box` 容器内部运行 `ping hello-dock` 是可行的，因为这两个容器都在同一用户定义的网桥网络下，并且自动 DNS 解析有效。


但是请记住，为了使自动 DNS 解析正常工作，必须为容器分配自定义名称。使用随机生成的名称将不起作用。

### 如何在 Docker 中从网络分离容器

在上一小节中，了解了有关将容器连接到网络的信息。在本小节中，将学习如何分离它们。

可以使用 `network disconnect` 命令来执行此任务。该命令的通用语法如下：

```
docker network disconnect <network identifier> <container identifier>
```

要从 `skynet` 网络分离 `hello-dock` 容器，可以执行以下命令：

```
docker network disconnect skynet hello-dock
```

就像 `network connect` 命令一样，`network disconnect`  命令也不给出任何输出。

### 如何删除 Docker 中的网络

就像 Docker 中的其他逻辑对象一样，可以使用 `network rm` 命令删除网络。该命令的通用语法如下：

```
docker network rm <network identifier>
```

要从系统中删除 `skynet` 网络，可以执行以下命令：

```
docker network rm skynet
```

也可以使用 `network prune` 命令从系统中删除所有未使用的网络。该命令还具有 `-f` 或 `--force` 和 `-a` 或 `--all` 选项。

## 如何容器化多容器 JavaScript 应用程序

既然已经对 Docker 中的网络有了足够的了解，那么在本节中，将学习如何将成熟的多容器项目容器化。涉及的项目是一个基于 Express.js 和 PostgreSQL 的简单 `notes-api`。

在此项目中，需要使用网络连接两个容器。除此之外，还将学习诸如环境变量和命名卷之类的概念。因此，事不宜迟，让我们直接开始。

### 如何运行数据库服务

该项目中的数据库服务器是一个简单的 PostgreSQL 服务，使用官方的 [postgres](https://hub.docker.com/_/postgres) 镜像。

根据官方文档，为了使用此镜像运行容器，必须提供 `POSTGRES_PASSWORD` 环境变量。除此之外，还将使用 `POSTGRES_DB` 环境变量为默认数据库提供一个名称。默认情况下，PostgreSQL 监听 `5432` 端口，因此也需要公开它。

要运行数据库服务，可以执行以下命令：

```
docker container run \
    --detach \
    --name=notes-db \
    --env POSTGRES_DB=notesdb \
    --env POSTGRES_PASSWORD=secret \
    --network=notes-api-network \
    postgres:12

# a7b287d34d96c8e81a63949c57b83d7c1d71b5660c87f5172f074bd1606196dc

docker container ls

# CONTAINER ID   IMAGE         COMMAND                  CREATED              STATUS              PORTS      NAMES
# a7b287d34d96   postgres:12   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp   notes-db
```

`container run`  和 `container create` 命令的 `--env` 选项可用于向容器提供环境变量。如你所见，数据库容器已成功创建并且正在运行。

尽管容器正在运行，但是存在一个小问题。 PostgreSQL、MongoDB 和 MySQL 等数据库将其数据保留在目录中。 PostgreSQL 使用容器内的 `/var/lib/postgresql/data` 目录来持久化数据。

现在，如果容器由于某种原因被破坏怎么办？ 将丢失所有数据。为了解决此问题，可以使用命名卷。

### 如何在 Docker 中使用命名卷

之前，已经使用了绑定挂载和匿名卷。命名卷与匿名卷非常相似，不同之处在于可以使用其名称引用命名卷。

卷也是 Docker 中的逻辑对象，可以使用命令行进行操作。`volume create` 命令可用于创建命名卷。

该命令的通用语法如下：

```
docker volume create <volume name>
```

要创建一个名为 `notes-db-data` 的卷，可以执行以下命令：

```
docker volume create notes-db-data

# notes-db-data

docker volume ls

# DRIVER    VOLUME NAME
# local     notes-db-data
```

这个卷现在可以被安装到 `notes-db` 容器中的 `/var/lib/postgresql/data` 中。为此，请停止并删除 `notes-db` 容器：

```
docker container stop notes-db

# notes-db

docker container rm notes-db

# notes-db
```

现在运行一个新容器，并使用 `--volume` 或 `-v` 选项分配卷。

```
docker container run \
    --detach \
    --volume notes-db-data:/var/lib/postgresql/data \
    --name=notes-db \
    --env POSTGRES_DB=notesdb \
    --env POSTGRES_PASSWORD=secret \
    --network=notes-api-network \
    postgres:12

# 37755e86d62794ed3e67c19d0cd1eba431e26ab56099b92a3456908c1d346791
```

现在检查 `notes-db` 容器以确保安装成功：

```
docker container inspect --format='{{range .Mounts}} {{ .Name }} {{end}}' notes-db

#  notes-db-data
```

现在，这些数据将安全地存储在 `notes-db-data` 卷中，并且将来可以重复使用。在这里也可以使用绑定挂载代替命名卷，但是在这种情况下，我更喜欢使用命名卷。

### 如何从 Docker 中的容器访问日志

为了查看来自容器的日志，可以使用 `container logs`  命令。 该命令的通用语法如下：

```
docker container logs <container identifier>
```

要从 `notes-db` 容器访问日志，可以执行以下命令：

```
docker container logs notes-db

# The files belonging to this database system will be owned by user "postgres".
# This user must also own the server process.

# The database cluster will be initialized with locale "en_US.utf8".
# The default database encoding has accordingly been set to "UTF8".
# The default text search configuration will be set to "english".
#
# Data page checksums are disabled.
#
# fixing permissions on existing directory /var/lib/postgresql/data ... ok
# creating subdirectories ... ok
# selecting dynamic shared memory implementation ... posix
# selecting default max_connections ... 100
# selecting default shared_buffers ... 128MB
# selecting default time zone ... Etc/UTC
# creating configuration files ... ok
# running bootstrap script ... ok
# performing post-bootstrap initialization ... ok
# syncing data to disk ... ok
#
#
# Success. You can now start the database server using:
#
#     pg_ctl -D /var/lib/postgresql/data -l logfile start
#
# initdb: warning: enabling "trust" authentication for local connections
# You can change this by editing pg_hba.conf or using the option -A, or
# --auth-local and --auth-host, the next time you run initdb.
# waiting for server to start....2021-01-25 13:39:21.613 UTC [47] LOG:  starting PostgreSQL 12.5 (Debian 12.5-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
# 2021-01-25 13:39:21.621 UTC [47] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
# 2021-01-25 13:39:21.675 UTC [48] LOG:  database system was shut down at 2021-01-25 13:39:21 UTC
# 2021-01-25 13:39:21.685 UTC [47] LOG:  database system is ready to accept connections
#  done
# server started
# CREATE DATABASE
#
#
# /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
#
# 2021-01-25 13:39:22.008 UTC [47] LOG:  received fast shutdown request
# waiting for server to shut down....2021-01-25 13:39:22.015 UTC [47] LOG:  aborting any active transactions
# 2021-01-25 13:39:22.017 UTC [47] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
# 2021-01-25 13:39:22.017 UTC [49] LOG:  shutting down
# 2021-01-25 13:39:22.056 UTC [47] LOG:  database system is shut down
#  done
# server stopped
#
# PostgreSQL init process complete; ready for start up.
#
# 2021-01-25 13:39:22.135 UTC [1] LOG:  starting PostgreSQL 12.5 (Debian 12.5-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
# 2021-01-25 13:39:22.136 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
# 2021-01-25 13:39:22.136 UTC [1] LOG:  listening on IPv6 address "::", port 5432
# 2021-01-25 13:39:22.147 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
# 2021-01-25 13:39:22.177 UTC [75] LOG:  database system was shut down at 2021-01-25 13:39:22 UTC
# 2021-01-25 13:39:22.190 UTC [1] LOG:  database system is ready to accept connections
```

从第 57 行的文本可以看出，数据库已启动，并准备接受来自外部的连接。该命令还有 `--follow` 或 `-f` 选项，使可以将控制台连接到日志输出并获得连续的文本流。

### 如何在 Docker 中创建网络并连接数据库服务

如在上一节中所学，容器必须连接到用户定义的桥接网络，才能使用容器名称相互通信。为此，请在系统中创建一个名为 `notes-api-network` 的网络：

```
docker network create notes-api-network
```

现在，通过执行以下命令，将 `notes-db` 容器连接到该网络：

```
docker network connect notes-api-network notes-db
```

### 如何编写 Dockerfile

转到克隆项目代码的目录。在其中，进入 `notes-api/api` 目录，并创建一个新的 `Dockerfile`。 将以下代码放入文件中：

```
# stage one
FROM node:lts-alpine as builder

# install dependencies for node-gyp
RUN apk add --no-cache python make g++

WORKDIR /app

COPY ./package.json .
RUN npm install --only=prod

# stage two
FROM node:lts-alpine

EXPOSE 3000
ENV NODE_ENV=production

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .
COPY --from=builder /app/node_modules  /home/node/app/node_modules

CMD [ "node", "bin/www" ]
```

这是一个多阶段构建。第一阶段用于使用 `node-gyp` 构建和安装依赖项，第二阶段用于运行应用程序。我将简要介绍以下步骤：

- 阶段 1 使用 `node：lts-alpine` 作为基础，并使用 `builder` 作为阶段名称。
- 在第 5 行，安装了  `python`、`make` 和 `g++`。`node-gyp` 工具需要这三个软件包才能运行。
-  在第 7 行，我们将 `/app`  目录设置为 `WORKDIR`。
- 在第 9 和 10 行，将 `package.json` 文件复制到 `WORKDIR` 并安装所有依赖项。
- 第 2 阶段还使用 `node-lts：alpine` 作为基础镜像。
- 在第 16 行，将环境变量 `NODE_ENV` 设置为 `production`。 这对于 API 正常运行很重要。
- 从第 18 行到第 20 行，将默认用户设置为 `node`，创建 `/home/node/app` 目录，并将其设置为 `WORKDIR`。
- 在第 22 行，复制了所有项目文件，在第 23 行，从 `builder`  阶段复制了 `node_modules` 目录。此目录包含运行应用程序所需的所有已构建依赖关系。
- 在第 25 行，设置了默认命令。

要从此 `Dockerfile` 构建镜像，可以执行以下命令：

```
docker image build --tag notes-api .

# Sending build context to Docker daemon  37.38kB
# Step 1/14 : FROM node:lts-alpine as builder
#  ---> 471e8b4eb0b2
# Step 2/14 : RUN apk add --no-cache python make g++
#  ---> Running in 5f20a0ecc04b
# fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/main/x86_64/APKINDEX.tar.gz
# fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/community/x86_64/APKINDEX.tar.gz
# (1/21) Installing binutils (2.33.1-r0)
# (2/21) Installing gmp (6.1.2-r1)
# (3/21) Installing isl (0.18-r0)
# (4/21) Installing libgomp (9.3.0-r0)
# (5/21) Installing libatomic (9.3.0-r0)
# (6/21) Installing mpfr4 (4.0.2-r1)
# (7/21) Installing mpc1 (1.1.0-r1)
# (8/21) Installing gcc (9.3.0-r0)
# (9/21) Installing musl-dev (1.1.24-r3)
# (10/21) Installing libc-dev (0.7.2-r0)
# (11/21) Installing g++ (9.3.0-r0)
# (12/21) Installing make (4.2.1-r2)
# (13/21) Installing libbz2 (1.0.8-r1)
# (14/21) Installing expat (2.2.9-r1)
# (15/21) Installing libffi (3.2.1-r6)
# (16/21) Installing gdbm (1.13-r1)
# (17/21) Installing ncurses-terminfo-base (6.1_p20200118-r4)
# (18/21) Installing ncurses-libs (6.1_p20200118-r4)
# (19/21) Installing readline (8.0.1-r0)
# (20/21) Installing sqlite-libs (3.30.1-r2)
# (21/21) Installing python2 (2.7.18-r0)
# Executing busybox-1.31.1-r9.trigger
# OK: 212 MiB in 37 packages
# Removing intermediate container 5f20a0ecc04b
#  ---> 637ca797d709
# Step 3/14 : WORKDIR /app
#  ---> Running in 846361b57599
# Removing intermediate container 846361b57599
#  ---> 3d58a482896e
# Step 4/14 : COPY ./package.json .
#  ---> 11b387794039
# Step 5/14 : RUN npm install --only=prod
#  ---> Running in 2e27e33f935d
#  added 269 packages from 220 contributors and audited 1137 packages in 140.322s
#
# 4 packages are looking for funding
#   run `npm fund` for details
#
# found 0 vulnerabilities
#
# Removing intermediate container 2e27e33f935d
#  ---> eb7cb2cb0b20
# Step 6/14 : FROM node:lts-alpine
#  ---> 471e8b4eb0b2
# Step 7/14 : EXPOSE 3000
#  ---> Running in 4ea24f871747
# Removing intermediate container 4ea24f871747
#  ---> 1f0206f2f050
# Step 8/14 : ENV NODE_ENV=production
#  ---> Running in 5d40d6ac3b7e
# Removing intermediate container 5d40d6ac3b7e
#  ---> 31f62da17929
# Step 9/14 : USER node
#  ---> Running in 0963e1fb19a0
# Removing intermediate container 0963e1fb19a0
#  ---> 0f4045152b1c
# Step 10/14 : RUN mkdir -p /home/node/app
#  ---> Running in 0ac591b3adbd
# Removing intermediate container 0ac591b3adbd
#  ---> 5908373dfc75
# Step 11/14 : WORKDIR /home/node/app
#  ---> Running in 55253b62ff57
# Removing intermediate container 55253b62ff57
#  ---> 2883cdb7c77a
# Step 12/14 : COPY . .
#  ---> 8e60893a7142
# Step 13/14 : COPY --from=builder /app/node_modules  /home/node/app/node_modules
#  ---> 27a85faa4342
# Step 14/14 : CMD [ "node", "bin/www" ]
#  ---> Running in 349c8ca6dd3e
# Removing intermediate container 349c8ca6dd3e
#  ---> 9ea100571585
# Successfully built 9ea100571585
# Successfully tagged notes-api:latest
```

在使用该镜像运行容器之前，请确保数据库容器正在运行，并且已附加到 `notes-api-network` 上。

```
docker container inspect notes-db

# [
#     {
#         ...
#         "State": {
#             "Status": "running",
#             "Running": true,
#             "Paused": false,
#             "Restarting": false,
#             "OOMKilled": false,
#             "Dead": false,
#             "Pid": 11521,
#             "ExitCode": 0,
#             "Error": "",
#             "StartedAt": "2021-01-26T06:55:44.928510218Z",
#             "FinishedAt": "2021-01-25T14:19:31.316854657Z"
#         },
#         ...
#         "Mounts": [
#             {
#                 "Type": "volume",
#                 "Name": "notes-db-data",
#                 "Source": "/var/lib/docker/volumes/notes-db-data/_data",
#                 "Destination": "/var/lib/postgresql/data",
#                 "Driver": "local",
#                 "Mode": "z",
#                 "RW": true,
#                 "Propagation": ""
#             }
#         ],
#         ...
#         "NetworkSettings": {
#             ...
#             "Networks": {
#                 "bridge": {
#                     "IPAMConfig": null,
#                     "Links": null,
#                     "Aliases": null,
#                     "NetworkID": "e4c7ce50a5a2a49672155ff498597db336ecc2e3bbb6ee8baeebcf9fcfa0e1ab",
#                     "EndpointID": "2a2587f8285fa020878dd38bdc630cdfca0d769f76fc143d1b554237ce907371",
#                     "Gateway": "172.17.0.1",
#                     "IPAddress": "172.17.0.2",
#                     "IPPrefixLen": 16,
#                     "IPv6Gateway": "",
#                     "GlobalIPv6Address": "",
#                     "GlobalIPv6PrefixLen": 0,
#                     "MacAddress": "02:42:ac:11:00:02",
#                     "DriverOpts": null
#                 },
#                 "notes-api-network": {
#                     "IPAMConfig": {},
#                     "Links": null,
#                     "Aliases": [
#                         "37755e86d627"
#                     ],
#                     "NetworkID": "06579ad9f93d59fc3866ac628ed258dfac2ed7bc1a9cd6fe6e67220b15d203ea",
#                     "EndpointID": "5b8f8718ec9a5ec53e7a13cce3cb540fdf3556fb34242362a8da4cc08d37223c",
#                     "Gateway": "172.18.0.1",
#                     "IPAddress": "172.18.0.2",
#                     "IPPrefixLen": 16,
#                     "IPv6Gateway": "",
#                     "GlobalIPv6Address": "",
#                     "GlobalIPv6PrefixLen": 0,
#                     "MacAddress": "02:42:ac:12:00:02",
#                     "DriverOpts": {}
#                 }
#             }
#         }
#     }
# ]
```

已经缩短了输出，以便于在此处查看。在我的系统上，`notes-db` 容器正在运行，使用 `notes-db-data` 卷，并连接到 `notes-api-network` 桥接网络。

一旦确定一切就绪，就可以通过执行以下命令来运行新容器：

```
docker container run \
    --detach \
    --name=notes-api \
    --env DB_HOST=notes-db \
    --env DB_DATABASE=notesdb \
    --env DB_PASSWORD=secret \
    --publish=3000:3000 \
    --network=notes-api-network \
    notes-api
    
# f9ece420872de99a060b954e3c236cbb1e23d468feffa7fed1e06985d99fb919
```

应该理解这个长命令，因此只简要介绍下环境变量。

`notes-api` 应用程序需要设置三个环境变量。 它们如下：

- `DB_HOST` - 这是数据库服务的主机。假定数据库服务和 API 都连接到同一用户定义的桥接网络，则可以使用其容器名称（在这种情况下为 `notes-db`）引用数据库服务。
- `DB_DATABASE` - 此 API 将使用的数据库。 在[运行数据库服务](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS2MtB5zjVVjK3Ujaz4/containerizing-a-multi-container-javascript-application#running-the-database-server)小节，使用环境变量 `POSTGRES_DB` 将默认数据库名称设置为 `notesdb`。 将在这里使用它。
- `DB_PASSWORD` - 连接数据库的密码。 这也在[运行数据库服务](https://www.freecodecamp.org/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS2MtB5zjVVjK3Ujaz4/containerizing-a-multi-container- javascript-application#running-the-database-server)小节涉及，使用环境变量`POSTGRES_PASSWORD`。

要检查容器是否正常运行，可以使用 `container ls` 命令：

```
docker container ls

# CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
# f9ece420872d   notes-api     "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes   0.0.0.0:3000->3000/tcp   notes-api
# 37755e86d627   postgres:12   "docker-entrypoint.s…"   17 hours ago     Up 14 minutes   5432/tcp                 notes-db
```

容器正在运行。 可以访问 `http://127.0.0.1:3000/` 来查看正在使用的 API。

![](https://www.freecodecamp.org/news/content/images/2021/01/bonjour-mon-ami.png)

该 API 总共有五个路由，可以在 `/notes/api/api/api/routes/notes.js`  文件中看到。 它是用我的一个开源项目引导的：

[

fhsinchy/create-node-rocket-api

Project Initializer for node-rocket Project Template :rocket: - fhsinchy/create-node-rocket-api

![](https://github.githubassets.com/favicons/favicon.svg)fhsinchyGitHub

![](https://repository-images.githubusercontent.com/291652635/27b42b80-ebd2-11ea-8c08-45d8df75e875)

](https://github.com/fhsinchy/create-node-rocket-api)

欢迎 ⭐ 

尽管容器正在运行，但是在开始使用它之前，还有最后一件事要做。必须运行设置数据库表所必需的数据库迁移，并且可以通过在容器内执行 `npm run db:migrate` 命令来执行此操作。

### 如何在正在运行的容器中执行命令

已经了解了在停止的容器中执行命令的知识。另一种情况是在正在运行的容器内执行命令。

为此，必须使用 `exec` 命令在正在运行的容器内执行自定义命令。

`exec` 命令的通用语法如下：

```
docker container exec <container identifier> <command>
```

要执行 `notes-api` 容器内的 `npm run db:migrate`，可以执行以下命令：

```
docker container exec notes-api npm run db:migrate

# > notes-api@ db:migrate /home/node/app
# > knex migrate:latest
#
# Using environment: production
# Batch 1 run: 1 migrations
```

如果要在正在运行的容器中运行交互式命令，则必须使用 `-it`  标志。例如，如果要访问在 `notes-api` 容器中运行的 shell，可以执行以下命令：

```
docker container exec -it notes-api sh

# / # uname -a
# Linux b5b1367d6b31 5.10.9-201.fc33.x86_64 #1 SMP Wed Jan 20 16:56:23 UTC 2021 x86_64 Linux
```

### 如何在 Docker 中编写管理脚本

管理多容器项目以及网络，卷和内容意味着编写大量命令。为了简化过程，我通常会从简单的 [shell 脚本](https://opensource.com/article/17/1/getting-started-shell-scripting)和 [Makefile](https://opensource.com/article/18/8/what-how-makefile) 来提高效率。

可以在 `notes-api` 目录中找到四个 shell 脚本。 它们如下：

- `boot.sh` - 用于启动容器（如果已存在）。
- `build.sh` - 创建并运行容器。如果需要，它还会创建镜像，卷和网络。
- `destroy.sh` - 删除与此项目关联的所有容器，卷和网络。
-  `stop.sh` - 停止所有正在运行的容器。

还有一个 `Makefile`，其中包含名为`start`、`stop`、`build`和 `destroy` 的四个目标，每个目标都调用前面提到的 shell 脚本。

如果容器在系统中处于运行状态，执行 `make stop`  将停止所有容器。 执行 `make destroy` 应该停止容器并删除所有东西。 确保正在 `notes-api` 目录中运行脚本：

```
make destroy

# ./shutdown.sh
# stopping api container --->
# notes-api
# api container stopped --->

# stopping db container --->
# notes-db
# db container stopped --->

# shutdown script finished

# ./destroy.sh
# removing api container --->
# notes-api
# api container removed --->

# removing db container --->
# notes-db
# db container removed --->

# removing db data volume --->
# notes-db-data
# db data volume removed --->

# removing network --->
# notes-api-network
# network removed --->

# destroy script finished
```

如果遇到权限拒绝错误，请在脚本上执行 `chmod + x`：

```
chmod +x boot.sh build.sh destroy.sh shutdown.sh
```

这里不解释这些脚本，因为它们是简单的 `if-else`  语句以及一些已经看过很多次的  Docker 命令。如果对 Linux Shell 有所了解，那么也应该能够理解这些脚本。

## 如何使用 Docker-Compose 组合项目

在上一节中，了解了有关管理多容器项目的困难。除了编写许多命令之外，还有一种更简单的方法来管理多容器项目，该工具称为[Docker Compose](https://docs.docker.com/compose/)。

根据 Docker  的 [文档](https://docs.docker.com/compose/) -

> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，可以使用 YAML 文件来配置应用程序的服务。然后，使用一个命令，就可以从配置中创建并启动所有服务。


尽管 Compose 可在所有环境中使用，但它更专注于开发和测试。完全不建议在生产环境上使用 Compose。

### Docker Compose 基础

Go the directory where you've cloned the repository that came with this book. Go inside the `notes-api/api` directory and create a `Dockerfile.dev` file. Put the following code in it:

转至用来克隆本书随附仓库的目录。进入 `notes-api/api` 目录并创建 `Dockerfile.dev` 文件。将以下代码放入其中：

```

FROM node:lts-alpine as builder


RUN apk add --no-cache python make g++

WORKDIR /app

COPY ./package.json .
RUN npm install


FROM node:lts-alpine

ENV NODE_ENV=development

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .
COPY --from=builder /app/node_modules /home/node/app/node_modules

CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]
```

该代码与上一小节中使用的 `Dockerfile` 几乎相同。 此文件中的三个区别如下：

- 在第 10 行中，执行 `npm install` 而不是 `npm run install --only = prod`，因为还需要开发依赖项。
- 在第 15 行，将环境变量 `NODE_ENV` 设置为  `development` 而不是 `production`。
- 在第 24 行，使用名为 [nodemon](https://nodemon.io/) 的工具来获取 API 的热重载功能。

已经知道该项目有两个容器：

- `notes-db` - 一个基于 PostgreSQL 的数据库服务。
- `notes-api` - 一个基于 Express.js 的 REST API

在 Compose 的世界中，组成应用程序的每个容器都称为服务。组合多容器项目的第一步就是定义这些服务。

就像 Docker 守护进程使用 `Dockerfile` 构建映像一样，Docker Compose 使用 `docker-compose.yaml` 文件从中读取服务定义。

转到 `notes-api` 目录并创建一个新的 `docker-compose.yaml` 文件。 将以下代码放入新创建的文件中：

```
version: "3.8"

services: 
    db:
        image: postgres:12
        container_name: notes-db-dev
        volumes: 
            - notes-db-dev-data:/var/lib/postgresql/data
        environment:
            POSTGRES_DB: notesdb
            POSTGRES_PASSWORD: secret
    api:
        build:
            context: ./api
            dockerfile: Dockerfile.dev
        image: notes-api:dev
        container_name: notes-api-dev
        environment: 
            DB_HOST: db 
            DB_DATABASE: notesdb
            DB_PASSWORD: secret
        volumes: 
            - /home/node/app/node_modules
            - ./api:/home/node/app
        ports: 
            - 3000:3000

volumes:
    notes-db-dev-data:
        name: notes-db-dev-data
```

每个有效的 `docker-compose.yaml` 文件均通过定义文件版本开始。在撰写本文时，`3.8` 是最新版本。可以在[此处](https://docs.docker.com/compose/compose-file/)查找最新版本。

YAML 文件中的块由缩进定义。将仔细介绍每个块，并解释它们的作用。

-  `services` 块包含应用程序中每个服务或容器的定义。`db` 和 `api` 是构成该项目的两个服务。
- `db`  块在应用程序中定义了一个新服务，并保存了启动容器所需的信息。每个服务都需要一个预先构建的镜像或一个 `Dockerfile` 来运行容器。 对于 `db` 服务，我们使用的是官方 PostgreSQL 镜像。
- 与 `db` 服务不同的是，不存在 `api` 服务的预构建镜像。因此，将使用 `Dockerfile.dev` 文件。
-  `volumes`  块定义了任何服务所需的任何名称卷。当时，它仅登记 `db` 服务使用的是 `notes-db-dev-data` 卷。

既然已经对 `docker-compose.yaml` 文件有了一个高层次的概述，那么让我们仔细看一下各个服务。

`db` 服务的定义代码如下：

```
db:
    image: postgres:12
    container_name: notes-db-dev
    volumes: 
        - db-data:/var/lib/postgresql/data
    environment:
        POSTGRES_DB: notesdb
        POSTGRES_PASSWORD: secret
```

- `image` 键保存用于此容器的镜像仓库和标签。使用 `postgres:12` 镜像来运行数据库容器。
- `container_name` 指示容器的名称。默认情况下，容器使用 `<project directory name>_<service name>` 语法命名。可以使用 `container_name` 覆盖它。
- `volumes` 数组保存该服务的卷映射，并支持命名卷，匿名卷和绑定挂载。 语法 `<source>:<destination>` 与之前相同。
- `environment` map 包含服务所需的各种环境变量的值。

`api` 服务的定义代码如下：

```
api:
    build:
        context: ./api
        dockerfile: Dockerfile.dev
    image: notes-api:dev
    container_name: notes-api-dev
    environment: 
        DB_HOST: db 
        DB_DATABASE: notesdb
        DB_PASSWORD: secret
    volumes: 
        - /home/node/app/node_modules
        - ./api:/home/node/app
    ports: 
        - 3000:3000
```

- `api` 服务没有预构建的镜像。相反，它具有构建配置。在 `build` 块下，定义了用于构建镜像的上下文和 Dockerfile 的名称。到目前为止，应该已经了解了上下文和 Dockerfile，因此我不会花时间解释它们。
- `image` 键保存要构建的镜像的名称。如果未分配，则将使用 `<project directory name>_<service name>` 语法来命名镜像。
- 在 `environment` map 内部，`DB_HOST` 变量演示了 Compose 的功能。即，可以使用其名称引用同一应用程序中的另一服务。因此，此处的  `db`  将被 `api` 服务容器的 IP 地址代替。`DB_DATABASE` 和 `DB_PASSWORD`  变量必须分别与 `db` 服务定义中的 `POSTGRES_DB` 和 `POSTGRES_PASSWORD` 匹配。
- 在 `volumes` map 中，可以看到一个匿名卷和一个绑定挂载。语法与上一节中看到的相同。
- `ports` 映射定义了端口映射。 语法 `<host port>:<container port>` 与以前使用的 `--publish` 选项相同。

最后，`volumes` 的代码如下：

```
volumes:
    db-data:
        name: notes-db-dev-data
```

在此处定义服务中使用的命名卷。如果未定义名称，则将使用 `<project directory name>_<volume key>` 命名该卷，此处的密钥为 `db-data`。

You can learn about the different options for volume configuration in the official [docs](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes).

可以在官方[文档](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes)中了解有关卷配置的更多选项。

### 如何在 Docker Compose 中启动服务

有几种启动 YAML 文件中定义的服务的方法。将了解的第一个命令是 `up` 命令。`up` 命令可以构建所有丢失的镜像，创建容器，然后一次性启动它们。

在执行命令之前，请确保已在 `docker-compose.yaml` 文件所在的目录中打开了终端。 这对于执行的每个 `docker-compose` 命令都非常重要。

```
docker-compose --file docker-compose.yaml up --detach

# Creating network "notes-api_default" with the default driver
# Creating volume "notes-db-dev-data" with default driver
# Building api
# Sending build context to Docker daemon  37.38kB
#
# Step 1/13 : FROM node:lts-alpine as builder
#  ---> 471e8b4eb0b2
# Step 2/13 : RUN apk add --no-cache python make g++
#  ---> Running in 197056ec1964
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 197056ec1964
#  ---> 6609935fe50b
# Step 3/13 : WORKDIR /app
#  ---> Running in 17010f65c5e7
# Removing intermediate container 17010f65c5e7
#  ---> b10d12e676ad
# Step 4/13 : COPY ./package.json .
#  ---> 600d31d9362e
# Step 5/13 : RUN npm install
#  ---> Running in a14afc8c0743
### LONG INSTALLATION STUFF GOES HERE ###
#  Removing intermediate container a14afc8c0743
#  ---> 952d5d86e361
# Step 6/13 : FROM node:lts-alpine
#  ---> 471e8b4eb0b2
# Step 7/13 : ENV NODE_ENV=development
#  ---> Running in 0d5376a9e78a
# Removing intermediate container 0d5376a9e78a
#  ---> 910c081ce5f5
# Step 8/13 : USER node
#  ---> Running in cfaefceb1eff
# Removing intermediate container cfaefceb1eff
#  ---> 1480176a1058
# Step 9/13 : RUN mkdir -p /home/node/app
#  ---> Running in 3ae30e6fb8b8
# Removing intermediate container 3ae30e6fb8b8
#  ---> c391cee4b92c
# Step 10/13 : WORKDIR /home/node/app
#  ---> Running in 6aa27f6b50c1
# Removing intermediate container 6aa27f6b50c1
#  ---> 761a7435dbca
# Step 11/13 : COPY . .
#  ---> b5d5c5bdf3a6
# Step 12/13 : COPY --from=builder /app/node_modules /home/node/app/node_modules
#  ---> 9e1a19960420
# Step 13/13 : CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]
#  ---> Running in 5bdd62236994
# Removing intermediate container 5bdd62236994
#  ---> 548e178f1386
# Successfully built 548e178f1386
# Successfully tagged notes-api:dev
# Creating notes-api-dev ... done
# Creating notes-db-dev  ... done
```

这里的  `--detach` 或 `-d` 选项的功能与之前相同。仅当 YAML 文件未命名为 `docker-compose.yaml` 时才需要使用  `--file` 或  `-f` 选项（但我已在此处用于演示目的）。

除了 `up` 命令外，还有 `start` 命令。两者之间的主要区别在于，`start` 命令不会创建丢失的容器，而只会启动现有的容器。基本上与 `container start` 命令相同。

`up` 命令的 `--build` 选项强制重建镜像。可以在官方[文档](https://docs.docker.com/compose/reference/up/)中查阅 `up` 命令的更多选项。

### 如何在 Docker Compose 中列表展示服务

尽管可以使用 `container ls` 命令列出由 Compose 启动的服务容器，但是还可以用  `ps`  命令列出仅在 YAML 中定义的容器。

```
docker-compose ps

#     Name                   Command               State           Ports         
# -------------------------------------------------------------------------------
# notes-api-dev   docker-entrypoint.sh ./nod ...   Up      0.0.0.0:3000->3000/tcp
# notes-db-dev    docker-entrypoint.sh postgres    Up      5432/tcp
```

它不如 `container ls` 输出的信息丰富，但是当同时运行大量容器时，它很有用。

### 如何在 Docker Compose 正在运行的服务中执行命令

我希望你记得上一部分，必须运行一些迁移脚本来为此 API 创建数据库表。

就像 `container exec` 命令一样，`docker-compose` 也有 `exec` 命令。该命令的通用语法如下：

```
docker-compose exec <service name> <command>
```

要在 `api` 服务中执行 `npm run db:migrate` 命令，可以执行以下命令：

```
docker-compose exec api npm run db:migrate

# > notes-api@ db:migrate /home/node/app
# > knex migrate:latest
# 
# Using environment: development
# Batch 1 run: 1 migrations
```

与 `container exec` 命令不同，不需要为交互式会话传递 `-it` 标志。`docker-compose` 是自动完成的。

### 如何访问 Docker Compose 中正在运行的服务日志

也可以使用 `logs` 命令从正在运行的服务中检索日志。该命令的通用语法如下：

```
docker-compose logs <service name>
```

要从 `api` 服务访问日志，请执行以下命令：

```
docker-compose logs api

# Attaching to notes-api-dev
# notes-api-dev | [nodemon] 2.0.7
# notes-api-dev | [nodemon] reading config ./nodemon.json
# notes-api-dev | [nodemon] to restart at any time, enter `rs`
# notes-api-dev | [nodemon] or send SIGHUP to 1 to restart
# notes-api-dev | [nodemon] ignoring: *.test.js
# notes-api-dev | [nodemon] watching path(s): *.*
# notes-api-dev | [nodemon] watching extensions: js,mjs,json
# notes-api-dev | [nodemon] starting `node bin/www`
# notes-api-dev | [nodemon] forking
# notes-api-dev | [nodemon] child pid: 19
# notes-api-dev | [nodemon] watching 18 files
# notes-api-dev | app running -> http://127.0.0.1:3000
```

这只是日志输出的一部分。可以使用 `-f` 或 `--follow` 选项来钩住服务的输出流并实时获取日志。只要不按 `ctrl + c` 或关闭窗口退出，任何以后的日志都会立即显示在终端中。即使退出日志窗口，该容器也将继续运行。

### 如何在 Docker Compose 中停止服务

要停止服务，可以采用两种方法。第一个是 `down` 命令。`down` 命令将停止所有正在运行的容器并将其从系统中删除。它还会删除所有网络：

```
docker-compose down --volumes

# Stopping notes-api-dev ... done
# Stopping notes-db-dev  ... done
# Removing notes-api-dev ... done
# Removing notes-db-dev  ... done
# Removing network notes-api_default
# Removing volume notes-db-dev-data
```

`--volumes` 选项表示要删除 `volumes` 块中定义的所有命名卷。可以在官方[文档](https://docs.docker.com/compose/reference/down/) 中查阅有关 `down` 命令的更多选用法。

另一个停止服务的命令是 `stop` 命令，其功能与  `container stop`  命令相同。它停止应用程序的所有容器并保留它们。这些容器可以稍后使用 `start` 或 `up` 命令启动。

### 如何在 Docker Compose 中编写全栈应用程序

在本小节中，我们将在 Notes API 中添加一个前端，并将其转变为一个完整的全栈应用程序。在本小节中，我将不解释 `Dockerfile.dev` 文件内容（除了关于 `nginx` 服务的部分），因为它们与上一小节中已经看到的其他文件相同。 

如果已经克隆了项目代码仓库，进入 `fullstack-notes-application` 目录。项目根目录下的每个目录都包含每个服务的代码和相应的 `Dockerfile`。

在开始使用 `docker-compose.yaml` 文件之前，让我们看一下该应用程序的流程图：

![](https://www.freecodecamp.org/news/content/images/2021/01/fullstack-application-design.svg)

与其像以前那样直接接受请求，在此应用程序中，所有请求都将首先由 NGINX（我们称其为路由器）服务接收。

然后，路由器将查看所请求的路径中是否包含 `/api`。如果是，则路由器会将请求路由到后端，否则，路由器会将请求路由到前端。

这样做是因为在运行前端应用程序时，它不会在容器中运行。 它在浏览器上运行，并通过容器提供服务。结果，Compose 网络无法按预期工作，并且前端应用程序无法找到 `api` 服务。

另一方面，NGINX 在容器内运行，并且可以与整个应用程序中的不同服务进行通信。

在这里介绍不 NGINX 的配置。该主题有点超出了本书的范围。如果你想了解，请继续阅读 `/notes-api/nginx/development.conf` 和 `/notes-api/nginx/production.conf` 文件。`/notes-api/nginx/Deockerfile.dev` 的代码如下：

```
FROM nginx:stable-alpine

COPY ./development.conf /etc/nginx/conf.d/default.conf
```

它所做的只是将配置文件复制到容器内的 `/etc/nginx/conf.d/default.conf` 中。

让我们开始编写  `docker-compose.yaml` 文件。除了 `api` 和 `db` 服务之外，还有`client` 和 `nginx` 服务。还将很快介绍一些网络定义。

```
version: "3.8"

services: 
    db:
        image: postgres:12
        container_name: notes-db-dev
        volumes: 
            - db-data:/var/lib/postgresql/data
        environment:
            POSTGRES_DB: notesdb
            POSTGRES_PASSWORD: secret
        networks:
            - backend
    api:
        build: 
            context: ./api
            dockerfile: Dockerfile.dev
        image: notes-api:dev
        container_name: notes-api-dev
        volumes: 
            - /home/node/app/node_modules
            - ./api:/home/node/app
        environment: 
            DB_HOST: db 
            DB_PORT: 5432
            DB_USER: postgres
            DB_DATABASE: notesdb
            DB_PASSWORD: secret
        networks:
            - backend
    client:
        build:
            context: ./client
            dockerfile: Dockerfile.dev
        image: notes-client:dev
        container_name: notes-client-dev
        volumes: 
            - /home/node/app/node_modules
            - ./client:/home/node/app
        networks:
            - frontend
    nginx:
        build:
            context: ./nginx
            dockerfile: Dockerfile.dev
        image: notes-router:dev
        container_name: notes-router-dev
        restart: unless-stopped
        ports: 
            - 8080:80
        networks:
            - backend
            - frontend

volumes:
    db-data:
        name: notes-db-dev-data

networks: 
    frontend:
        name: fullstack-notes-application-network-frontend
        driver: bridge
    backend:
        name: fullstack-notes-application-network-backend
        driver: bridge
```

该文件与之前用到的文件几乎相同。唯一需要说明的是网络配置。`networks` 块的代码如下：

```
networks: 
    frontend:
        name: fullstack-notes-application-network-frontend
        driver: bridge
    backend:
        name: fullstack-notes-application-network-backend
        driver: bridge
```

我定义了两个桥接网络。默认情况下，Compose 创建一个桥接网络并将所有容器连接到该网络。但是，在这个项目中，我想要适当的网络隔离。 因此，我定义了两个网络，一个用于前端服务，一个用于后端服务。

我还在每个服务定义中添加了  `networks`  块。 这样，`api` 和 `db` 服务将被附加到同一个网络，而 `client` 服务将被附加到一个单独的网络。 但是 `nginx` 服务将同时连接到两个网络，因此它可以充当前端和后端服务之间的路由器。

通过执行以下命令来启动所有服务：

```
docker-compose --file docker-compose.yaml up --detach

# Creating network "fullstack-notes-application-network-backend" with driver "bridge"
# Creating network "fullstack-notes-application-network-frontend" with driver "bridge"
# Creating volume "notes-db-dev-data" with default driver
# Building api
# Sending build context to Docker daemon  37.38kB
# 
# Step 1/13 : FROM node:lts-alpine as builder
#  ---> 471e8b4eb0b2
# Step 2/13 : RUN apk add --no-cache python make g++
#  ---> Running in 8a4485388fd3
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 8a4485388fd3
#  ---> 47fb1ab07cc0
# Step 3/13 : WORKDIR /app
#  ---> Running in bc76cc41f1da
# Removing intermediate container bc76cc41f1da
#  ---> 8c03fdb920f9
# Step 4/13 : COPY ./package.json .
#  ---> a1d5715db999
# Step 5/13 : RUN npm install
#  ---> Running in fabd33cc0986
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container fabd33cc0986
#  ---> e09913debbd1
# Step 6/13 : FROM node:lts-alpine
#  ---> 471e8b4eb0b2
# Step 7/13 : ENV NODE_ENV=development
#  ---> Using cache
#  ---> b7c12361b3e5
# Step 8/13 : USER node
#  ---> Using cache
#  ---> f5ac66ca07a4
# Step 9/13 : RUN mkdir -p /home/node/app
#  ---> Using cache
#  ---> 60094b9a6183
# Step 10/13 : WORKDIR /home/node/app
#  ---> Using cache
#  ---> 316a252e6e3e
# Step 11/13 : COPY . .
#  ---> Using cache
#  ---> 3a083622b753
# Step 12/13 : COPY --from=builder /app/node_modules /home/node/app/node_modules
#  ---> Using cache
#  ---> 707979b3371c
# Step 13/13 : CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]
#  ---> Using cache
#  ---> f2da08a5f59b
# Successfully built f2da08a5f59b
# Successfully tagged notes-api:dev
# Building client
# Sending build context to Docker daemon  43.01kB
# 
# Step 1/7 : FROM node:lts-alpine
#  ---> 471e8b4eb0b2
# Step 2/7 : USER node
#  ---> Using cache
#  ---> 4be5fb31f862
# Step 3/7 : RUN mkdir -p /home/node/app
#  ---> Using cache
#  ---> 1fefc7412723
# Step 4/7 : WORKDIR /home/node/app
#  ---> Using cache
#  ---> d1470d878aa7
# Step 5/7 : COPY ./package.json .
#  ---> Using cache
#  ---> bbcc49475077
# Step 6/7 : RUN npm install
#  ---> Using cache
#  ---> 860a4a2af447
# Step 7/7 : CMD [ "npm", "run", "serve" ]
#  ---> Using cache
#  ---> 11db51d5bee7
# Successfully built 11db51d5bee7
# Successfully tagged notes-client:dev
# Building nginx
# Sending build context to Docker daemon   5.12kB
# 
# Step 1/2 : FROM nginx:stable-alpine
#  ---> f2343e2e2507
# Step 2/2 : COPY ./development.conf /etc/nginx/conf.d/default.conf
#  ---> Using cache
#  ---> 02a55d005a98
# Successfully built 02a55d005a98
# Successfully tagged notes-router:dev
# Creating notes-client-dev ... done
# Creating notes-api-dev    ... done
# Creating notes-router-dev ... done
# Creating notes-db-dev     ... done
```

现在访问 `http://localhost:8080`，瞧瞧！

![](https://www.freecodecamp.org/news/content/images/2021/01/notes-application.png)

尝试添加和删除注释，以查看应用程序是否正常运行。该项目还带有 shell 脚本和`Makefile`。研究一下他们，以了解如何像上一节中那样在没有 `docker-compose` 的帮助下运行该项目。

## 结论

衷心感谢你花了宝贵的时间阅读本书。我希望你喜欢它并学到 Docker 的相关知识。

如果你喜欢我的文笔，则可以在[这里找到更多的的书](https://books.farhan.info/)，我偶尔也写一些[博客](https://www.farhan.info/)。

可以在 Twitter [@frhnhsin](https://twitter.com/frhnhsin) 上关注我，也可以在 LinkedIn [/in/farhanhasin](https://www.linkedin.com/in/farhanhasin/ ) connect 我。

免费学编程。freeCodeCamp 的开源课程已帮助 40,000 多人获得了研发工作。[马上开始](https://www.freecodecamp.org/learn/)
