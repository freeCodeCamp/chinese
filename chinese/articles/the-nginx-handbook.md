> -  原文地址：[NGINX 完全手册](https://www.freecodecamp.org/news/the-nginx-handbook/)
> -  原文作者：[Farhan Hasin ChowdhuryFarhan Hasin Chowdhury](https://www.freecodecamp.org/news/author/farhanhasin/)
> -  译者：ZhichengChen
> -  校对者：

![The NGINX Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/Copy-of-docker-1280x612.png)

因为传统 Web 服务器无法处理超过 1 万个并发请求，一位名叫 [Igor Sysoev](https://en.wikipedia.org/wiki/Igor_Sysoev) 的年轻俄罗斯开发人员很沮丧。这就是著名的 [C10k 问题](https://en.wikipedia.org/wiki/C10k_problem) 。沮丧之余，他于 2002 年开始研发新的 Web 服务器。

[NGINX](https://nginx.org/) 于 2004 年基于 [2-clause BSD](https://en.wikipedia.org/wiki/2-clause_BSD) 许可条款首次向公众发布。根据 [2021 年 3 月 Web 服务器调查](https://news.netcraft.com/archives/2021/03/29/march-2021-web-server-survey.html)，NGINX 拥有 35.3% 的市场份额，大约有 4.196 亿个站点在使用它。

由于有了 [NGINXConfig](https://www.digitalocean.com/community/tools/nginx) 这样的的工具以及 [DigitalOcean](https://digitalocean.com/) 等互联网上大量线程的配置文件 ，人们倾向于做大量的复制粘贴，却并不理解这些配置的含义。

![](https://www.freecodecamp.org/news/content/images/2021/04/177962736_1410222585999736_5618677227291897851_n.jpg)

相信我，搞懂它并不难……

我并不是说复制代码不好，但在千万不要在不理解的情况下复制代码。

此外，NGINX 是一种软件，应该根据要提供服务的应用程序的要求和主机上的可用资源进行精确配置。

这就是为什么你应该理解并修改你正在复制的内容而不是盲目地复制——这就是本手册存在的意义。

通读整本书后，你应该能够：

-  能够理解流行工具生成的配置文件以及各种文档中的配置文件。
-  从头开始将 NGINX 配置为 Web 服务器、反向代理服务器和负载均衡器。
-  优化 NGINX 以获得最大的服务器性能。

## 先决条件

- 熟悉 Linux 终端和常用 Unix 程序，如 `ls`、`cat`、`ps`、`grep`、`find`、`nproc`、`ulimit` 和 `nano`。
- 一台可以以运行虚拟机的计算机或 5 美元的虚拟专用服务器。
- 了解 Web 应用程序和编程语言，如 JavaScript 或 PHP。

## 目录

-   [NGINX 简介](#introduction-to-nginx)
-   [如何安装 NGINX](#how-to-install-nginx)
    -   [如何配置本地虚拟机](#how-to-provision-a-local-virtual-machine)
    -   [如何配置虚拟专用服务器](#how-to-provision-a-virtual-private-server)
    -   [如何在配置的虚拟机或服务器上安装 NGINX](#how-to-install-nginx-on-a-provisioned-server-or-virtual-machine)
-   [NGINX 配置文件介绍](#introduction-to-nginx-s-configuration-files)
-   [如何配置基本的 Web 服务器](#how-to-configure-a-basic-web-server)
    -   [如何编写你的第一个配置文件](#how-to-write-your-first-configuration-file)
    -   [如何校验并重新加载配置文件](#how-to-validate-and-reload-configuration-files)
    -   [如何理解 NGINX 中的指令和上下文](#how-to-understand-directives-and-contexts-in-nginx)
    -   [如何使用 NGINX 提供静态内容](#how-to-serve-static-content-using-nginx)
    -   [NGINX 中的静态文件处理](#static-file-type-handling-in-nginx)
    -   [如何引入部分配置文件](#how-to-include-partial-config-files)
-   [NGINX 的动态路由](#dynamic-routing-in-nginx)
    -   [位置匹配](#location-matches)
    -   [NGINX 中的变量](#variables-in-nginx)
    -   [Redirects 和 Rewrites](#redirects-and-rewrites)
    -   [如何尝试多个文件](#how-to-try-for-multiple-files)
-   [NGINX 日志](#logging-in-nginx)
-   [如何使用 NGINX 作为反向代理](#how-to-use-nginx-as-a-reverse-proxy)
    -   [使用 NGINX 的 Node.js](#node-js-with-nginx)
    -   [使用 NGINX 的 PHP](#php-with-nginx)
-   [如何使用 NGIXN 做为负载均衡器](#how-to-use-nginx-as-a-load-balancer)
-   [如何优化 NGXIN 以获得最大性能](#how-to-optimize-nginx-for-maximum-performance)
    -   [如何配置工作进程和工作连接](#how-to-configure-worker-processes-and-worker-connections)
    -   [如何缓存静态内容](#how-to-cache-static-content)
    -   [如何压缩响应](#how-to-compress-responses)
-   [如何理解主配置文件](#how-to-understand-the-main-configuration-file)
-   [高级 NGINX 概念系列](#a-series-on-advanced-nginx-concepts)
-   [表达您的支持](#show-your-support)
-   [尾声](#conclusion)

## 项目代码

你可以在以下存储库中找到示例项目的代码：

[

fhsinchy/nginx-handbook-projects

“NGINX 手册”中使用的项目代码。 通过在 GitHub 上创建一个帐户来为 fhsinchy/nginx-handbook-projects 开发做出贡献。

![](https://github.githubassets.com/favicons/favicon.svg)fhsinchyGitHub

![](https://repository-images.githubusercontent.com/359833599/0449f980-a212-11eb-915d-fa3507571af3)

](https://github.com/fhsinchy/nginx-handbook-projects)

留一个⭐让我保持动力

`master` 分支包含本书中使用的所有代码。

## NGINX 简介

[NGINX](https://nginx.org/) 是一种高性能网络服务器，旨在满足现代网络日益增长的需求。它专注于高性能、高并发和低资源使用。尽管它通常被称为 Web 服务器，但 NGINX 的核心是一个[反向代理](https://en.wikipedia.org/wiki/Reverse_proxy) 服务器。

不过，NGINX 并不是市场上唯一的 Web 服务器。 它最大的竞争对手之一是 [Apache HTTP Server (httpd)](https://httpd.apache.org/)，它于 1995 年首次发布。尽管 Apache HTTP Server 更灵活，但服务器管理员通常更喜欢 NGINX ，有两个主要原因：

-  它可以处理更多的并发请求。
-  它可以更低资源消耗前提下更快的交付静态内容。

我不会深入讨论整个 Apache 与 NGINX 的争论。但是，如果您想详细了解它们之间的差异，请参阅来自 [Justin Ellingwood] 的这篇出色的[文章](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-lookingations) （https://www.digitalocean.com/community/users/jellingwood）可能会有所帮助。

事实上，为了解释 NGINX 的请求处理技术，我想在这里引用 Justin 的文章中的两段：

> Nginx 在 Apache 之后出现，更针对的解决大规模站点将面临的并发问题。利用这些知识，Nginx 从头开始设计为使用异步、非阻塞、事件驱动的连接处理算法。
>
> Nginx 产生工作进程，每个进程可以处理数千个连接。工作进程通过实现一个快速轮询机制来实现这一点，该机制不断地检查和处理事件。将实际工作与连接解耦，这允许每个工作进程仅在触发新事件时才关注连接。

如果这看起来有点难以理解，请不要担心。 现在对内部工作原理有一个基本的了解就足够了。

![](https://www.freecodecamp.org/news/content/images/2021/04/wQszK2rvq-1.png)

NGINX 在静态内容交付方面更快，同时资源相对较少，因为它没有嵌入动态编程语言处理器。当对静态内容的请求到来时，NGINX 只响应文件而不运行任何额外的进程。

这并不意味着 NGINX 不能处理需要动态编程语言处理器的请求。接收到需要动态处理的请求时，NGINX 只是将任务委托给单独的进程，例如 [PHP-FPM](https://www.php.net/manual/en/install.fpm.php)、[Node.js](https:/ /nodejs.org/) 或 [Python](https://python.org/)。 一旦该进程完成其工作，NGINX 会将响应反向代理回客户端。

![](https://www.freecodecamp.org/news/content/images/2021/04/_nT7rcdjG.png)

NGINX  配置文件语法参考了脚本语言语法，因此很容易配置，可以生成紧凑、易于维护的配置文件。

## 如何安装 NGINX

在基于 [Linux](https://en.wikipedia.org/wiki/Linux)\ 的系统上安装 NGINX 非常简单。可以使用运行 [Ubuntu](https://ubuntu.com/) 的虚拟专用服务器作为你的训练场，也可以使用 Vagrant 在本地系统上配置虚拟机。

大多数情况下，配置本地虚拟机就足够了，这也是我将在本文中使用的方式。

### 如何配置本地虚拟机

[Vagrant](https://vagrantup.com/) 是 [Hashicorp](https://www.hashicorp.com/) 的一个开源工具，它可以使用简单的配置文件配置虚拟机。

要使用这种方式，需要 [VirtualBox](https://www.virtualbox.org/wiki/Downloads/) 和 [Vagrant](https://www.vagrantup.com/downloads/)，所以提前先安装它们。如果你需要对该主题进行一些了解，此[教程](https://learn.hashicorp.com/collections/vagrant/getting-started/) 可能会有所帮助。

在系统中的某处创建一个具有适当名称的工作目录。 我的是 `~/vagrant/nginx-handbook` 目录。

在工作目录中创建一个名为 `Vagrantfile` 的文件并输入以下内容：

```vagrantfile
Vagrant.configure("2") do |config|

    config.vm.hostname = "nginx-handbook-box"
  
    config.vm.box = "ubuntu/focal64"
  
    config.vm.define "nginx-handbook-box"
  
    config.vm.network "private_network", ip: "192.168.20.20"
  
    config.vm.provider "virtualbox" do |vb|
      vb.cpus = 1
      vb.memory = "1024"
      vb.name = "nginx-handbook"
    end
  
  end
```

这个 `Vagrantfile` 就是我之前讲的配置文件。它包含虚拟机名称、CPU 数量、RAM 大小、IP 地址等信息。

要使用此配置启动虚拟机，请在工作目录中打开终端并执行以下命令：

```shell
vagrant up

# Bringing machine 'nginx-handbook-box' up with 'virtualbox' provider...
# ==> nginx-handbook-box: Importing base box 'ubuntu/focal64'...
# ==> nginx-handbook-box: Matching MAC address for NAT networking...
# ==> nginx-handbook-box: Checking if box 'ubuntu/focal64' version '20210415.0.0' is up to date...
# ==> nginx-handbook-box: Setting the name of the VM: nginx-handbook
# ==> nginx-handbook-box: Clearing any previously set network interfaces...
# ==> nginx-handbook-box: Preparing network interfaces based on configuration...
#     nginx-handbook-box: Adapter 1: nat
#     nginx-handbook-box: Adapter 2: hostonly
# ==> nginx-handbook-box: Forwarding ports...
#     nginx-handbook-box: 22 (guest) => 2222 (host) (adapter 1)
# ==> nginx-handbook-box: Running 'pre-boot' VM customizations...
# ==> nginx-handbook-box: Booting VM...
# ==> nginx-handbook-box: Waiting for machine to boot. This may take a few minutes...
#     nginx-handbook-box: SSH address: 127.0.0.1:2222
#     nginx-handbook-box: SSH username: vagrant
#     nginx-handbook-box: SSH auth method: private key
#     nginx-handbook-box: Warning: Remote connection disconnect. Retrying...
#     nginx-handbook-box: Warning: Connection reset. Retrying...
#     nginx-handbook-box: 
#     nginx-handbook-box: Vagrant insecure key detected. Vagrant will automatically replace
#     nginx-handbook-box: this with a newly generated keypair for better security.
#     nginx-handbook-box: 
#     nginx-handbook-box: Inserting generated public key within guest...
#     nginx-handbook-box: Removing insecure key from the guest if it's present...
#     nginx-handbook-box: Key inserted! Disconnecting and reconnecting using new SSH key...
# ==> nginx-handbook-box: Machine booted and ready!
# ==> nginx-handbook-box: Checking for guest additions in VM...
# ==> nginx-handbook-box: Setting hostname...
# ==> nginx-handbook-box: Configuring and enabling network interfaces...
# ==> nginx-handbook-box: Mounting shared folders...
#     nginx-handbook-box: /vagrant => /home/fhsinchy/vagrant/nginx-handbook

vagrant status

# Current machine states:

# nginx-handbook-box           running (virtualbox)
```

`vagrant up` 命令的输出在你的系统上可能会有所不同，但只要 `vagrant status` 表示机器正在运行，就可以开始了。

鉴于虚拟机现在正在运行，应该能够通过 SSH 进入它。为此，请执行以下命令：

```shell
vagrant ssh nginx-handbook-box

# Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-72-generic x86_64)
# vagrant@nginx-handbook-box:~$
```

如果一切正常，应该登录到虚拟机上，这可以通过终端上的 `vagrant@nginx-handbook-box` 行看出。

此虚拟机可在本地计算机上的 **http://192.168.20.20** 上访问。 你甚至可以通过在你的 **hosts** 文件中添加一个条目来为虚拟机分配一个像 **http://nginx-handbook.test** 这样的自定义域：

```shell
# on mac and linux terminal
sudo nano /etc/hosts

# on windows command prompt as administrator
notepad c:\windows\system32\drivers\etc\hosts
```

现在在文件末尾追加以下行：

```
nginx-handbook.test    192.168.20.20
```

现在你应该可以在浏览器中通过 **http://nginx-handbook.test** URI 访问虚拟机。

可以通过在工作目录中执行以下命令来停止或销毁虚拟机：

```shell
# to stop the virtual machine
vagrant halt

# to destroy the virtual machine
vagrant destroy
```

如果你想了解更多 Vagrant 命令，这个[备忘单](https://gist.github.com/wpscholar/a49594e2e2b918f4d0c4) 可能会派上用场。

现在系统上有一个正常运行的 Ubuntu 虚拟机，接下来要做的就是 [安装 NGINX](#how-to-install-nginx-on-a-provisioned-server-or-virtual-machine)。

### 如何配置虚拟专用服务器

对于本演示，我将使用 [Vultr](https://vultr.com/) 作为我的供应商，但你可以使用 [DigitalOcean](https://digitalocean.com/) 或你喜欢的任何供应商。

假设你已经拥有提供商的帐户，请登录该帐户并部署新服务器：

![](https://www.freecodecamp.org/news/content/images/2021/04/ZUAu_Tpxx-2.jpg)

在 DigitalOcean 上，它通常被称为 droplet。 在下一个屏幕上，选择靠近你的节点。 我住在孟加拉国，所以我选择新加坡：

![](https://www.freecodecamp.org/news/content/images/2021/04/zH08EnmGq.jpg)

在下一步中，必须选择操作系统和服务器配置。 选择 Ubuntu 20.04 和尽可能小的服务器配置：

![](https://www.freecodecamp.org/news/content/images/2021/04/G8mEC13pp.jpg)

尽管生产服务器往往比这更大更强大，但对于本文来说，一台小型服务器就足够了。

最后，在最后一步，将类似 **nginx-handbook-demo-server** 之类的东西作为服务器主机和标签。 如果必要，甚至可以将它们留空。

一旦对自己的选择感到满意，请继续并按下 **Deploy Now** 按钮。

部署过程可能需要一些时间才能完成，一旦完成，将在仪表板上看到新创建的服务器：

![](https://www.freecodecamp.org/news/content/images/2021/04/server-list.png)

还要注意 **Status –** 它应该是 **Running** 而不是 **Preparing** 或 **Stopped**。 要连接到服务器，还需要用户名和密码。

![](https://www.freecodecamp.org/news/content/images/2021/04/server-overview.png)

进入服务器的概览页面，应该会看到服务器的 IP 地址、用户名和密码：

使用 SSH 登录服务器的命令如下：

```shell
ssh <username>@<ip address>
```

所以就我的服务器而言，它将是：

```shell
ssh root@45.77.251.108

# Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
# Warning: Permanently added '45.77.251.108' (ECDSA) to the list of known hosts.

# root@45.77.251.108's password: 
# Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-65-generic x86_64)

# root@localhost:~#
```

系统会询问是否要继续连接到此服务器。输入“yes”，然后系统会要求输入密码。从服务器概览页面复制密码并将其粘贴到终端中。

如果做的一切顺利，会成功登录到你的服务器——终端上会看到 `root@localhost` 行。 这里的“localhost”是服务器主机名，你的显示可能会有所不同。

可以通过其 IP 地址直接访问该服务器。 或者，如果拥有任何自定义域名，也可以使用它。

在整篇文章中，将看到我将测试域名添加到我的操作系统的 `hosts` 文件中。如果是真实服务器，则必须使用 DNS 提供商配置这些服务器。

请记住，只要此服务器正在使用，就会被收费。虽然收费应该很少，但我还是要警告你。可以通过点击服务器概览页面上的垃圾桶图标随时销毁服务器：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-90.png)

如果拥有自定义域名，则可以为此服务器分配一个子域名。现在已进入服务器，剩下的就是 [安装 NGINX](#how-to-install-nginx-on-a-provisioned-server-or-virtual-machine)。

### 如何在配置的服务器或虚拟机上安装 NGINX

假设已登录到服务器或虚拟机，第一件应该做的事就是执行更新。执行以下命令来执行此操作：

```shell
sudo apt update && sudo apt upgrade -y
```

更新后，通过执行以下命令安装 NGINX：

```shell
sudo apt install nginx -y
```

安装完成后，NGINX 应自动注册为 `systemd` 服务并运行。 要检查，请执行以下命令：

```shell
sudo systemctl status nginx

# ● nginx.service - A high performance web server and a reverse proxy server
#      Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
#      Active: active (running)
```

如果状态显示 `running`，那么就可以开始了。否则，可以通过执行以下命令来启动服务：

```shell
sudo systemctl start nginx
```

最后，为了直观地验证一切是否正常，请使用喜欢的浏览器访问服务器/虚拟机，应该会看到 NGINX 的默认欢迎页面：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-89.png)

NGINX 通常安装在 `/etc/nginx` 目录中，我们接下来的大部分工作都将在这里完成。

恭喜！ 已经在服务器/虚拟机上启动并运行了 NGINX。 现在是时候先进入 NGINX 了。

## NGINX 的配置文件介绍

作为 Web 服务器，NGINX 的工作是为客户端提供静态或动态内容。但是如何提供这些内容通常由配置文件控制。

NGINX 的配置文件以`.conf` 扩展名结尾，通常位于`/etc/nginx/` 目录中。让我们先通过 `cd` 进入这个目录并获取所有文件的列表：

```shell
cd /etc/nginx

ls -lh

# drwxr-xr-x 2 root root 4.0K Apr 21  2020 conf.d
# -rw-r--r-- 1 root root 1.1K Feb  4  2019 fastcgi.conf
# -rw-r--r-- 1 root root 1007 Feb  4  2019 fastcgi_params
# -rw-r--r-- 1 root root 2.8K Feb  4  2019 koi-utf
# -rw-r--r-- 1 root root 2.2K Feb  4  2019 koi-win
# -rw-r--r-- 1 root root 3.9K Feb  4  2019 mime.types
# drwxr-xr-x 2 root root 4.0K Apr 21  2020 modules-available
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 modules-enabled
# -rw-r--r-- 1 root root 1.5K Feb  4  2019 nginx.conf
# -rw-r--r-- 1 root root  180 Feb  4  2019 proxy_params
# -rw-r--r-- 1 root root  636 Feb  4  2019 scgi_params
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 sites-available
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 sites-enabled
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 snippets
# -rw-r--r-- 1 root root  664 Feb  4  2019 uwsgi_params
# -rw-r--r-- 1 root root 3.0K Feb  4  2019 win-utf
```

在这些文件中，应该有一个名为 **nginx.conf** 的文件。这是 NGINX 的主要配置文件。可以使用 `cat` 程序查看此文件的内容：

```shell
cat nginx.conf# user www-data;# worker_processes auto;# pid /run/nginx.pid;# include /etc/nginx/modules-enabled/*.conf;# events {#     worker_connections 768;#     # multi_accept on;# }# http {#     ###     # Basic Settings#     ###     sendfile on;#     tcp_nopush on;#     tcp_nodelay on;#     keepalive_timeout 65;#     types_hash_max_size 2048;#     # server_tokens off;#     # server_names_hash_bucket_size 64;#     # server_name_in_redirect off;#     include /etc/nginx/mime.types;#     default_type application/octet-stream;#     ###     # SSL Settings#     ###     ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE#     ssl_prefer_server_ciphers on;#     ###     # Logging Settings#     ###     access_log /var/log/nginx/access.log;#     error_log /var/log/nginx/error.log;#     ###     # Gzip Settings#     ###     gzip on;#     # gzip_vary on;#     # gzip_proxied any;#     # gzip_comp_level 6;#     # gzip_buffers 16 8k;#     # gzip_http_version 1.1;#     # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;#     ###     # Virtual Host Configs#     ###     include /etc/nginx/conf.d/*.conf;#     include /etc/nginx/sites-enabled/*;# }# #mail {# #    # See sample authentication script at:# #    # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript# # # #    # auth_http localhost/auth.php;# #    # pop3_capabilities "TOP" "USER";# #    # imap_capabilities "IMAP4rev1" "UIDPLUS";# # # #    server {# #        listen     localhost:110;# #        protocol   pop3;# #        proxy      on;# #    }# # # #    server {# #        listen     localhost:143;# #        protocol   imap;# #        proxy      on;# #    }# #}
```

哇！东西很多。试图在当前状态下理解这个文件将是一场噩梦。 因此，让我们备份文件并创建一个新的空文件：

```shell
# renames the filesudo mv nginx.conf nginx.conf.backup# creates a new filesudo touch nginx.conf
```

我**强烈不鼓励**你编辑原始的 `nginx.conf` 文件，除非你完全知道你在做什么。出于学习目的，可以重命名以备份它，但是[稍后](#understanding-the-main-configuration-file)，我将向你展示在真实场景中应该如何配置服务器。

## 如何配置基本 Web 服务器

在本书的这一部分中，将最终通过从头开始配置一个基本的静态 Web 服务器来动手实践。本节的目的是向你介绍 NGINX 配置文件的语法和基本概念。

### 如何编写你的第一个配置文件

首先使用 [nano](https://www.nano-editor.org/) 文本编辑器打开新创建的 `nginx.conf` 文件：

```shell
sudo nano /etc/nginx/nginx.conf
```

在整本书中，我将使用 nano 作为我的文本编辑器。如果你愿意，可以使用更流行的编辑器，但在现实生活场景中，你最有可能在服务器上使用 [nano](https://www.nano-editor.org/) 或 [vim](https: //www.vim.org/) ，而不是其他任何东西。因此，请以本书为契机，提高你的 Nano 技能。此外，官方[备忘单](https://www.nano-editor.org/dist/latest/cheatsheet.html) 随时供你参考。

打开文件后，将其内容更新为：

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        return 200 "Bonjour, mon ami!\n";    }}
```

如果你有构建 REST API 的经验，那么你可能会从 `return 200 "Bonjour, mon ami!\n";` 行已经看出来服务器已配置状态代码 200 的消息“Bonjour, mon ami ！”。

如果你目前一头雾水，请不要担心。 我将逐行解释这个文件，但首先让我们看看这个配置的实际效果。

### 如何校验并重新加载配置文件

编写新配置文件或更新旧配置文件后，首先要做的是检查文件是否存在语法错误。`nginx` 二进制文件包含一个选项 `-t` 来做到这一点。

```shell
sudo nginx -t# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

如果有任何语法错误，此命令将会展示错误信息以及出错的行号。

虽然配置文件没问题，但 NGINX 配置并不会立即生效。NGINX 的工作方式是它读取一次配置文件并在此基础上持续工作。

如果更新配置文件，则必须明确指示 NGINX 重新加载配置文件。有两种方法可以做到这一点。

- 可以通过执行 `sudo systemctl restart nginx` 命令来重启 NGINX 服务。
- 可以通过执行 `sudo nginx -s reload` 命令向 NGINX 发送 `reload` 信号。

`-s` 选项用于向 NGINX 发送各种信号。可用的信号是 `stop`、`quit`、`reload` 和 `reopen`。在我刚刚提到的两种方式中，我更喜欢第二种方式，因为它打字较少。

一旦通过执行 `nginx -s reload` 命令重新加载了配置文件，就可以通过向服务器发送一个简单的 get 请求来查看它的运行情况：

```shell
curl -i http://nginx-handbook.test# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 10:03:33 GMT# Content-Type: text/plain# Content-Length: 18# Connection: keep-alive# Bonjour, mon ami!
```

服务器响应状态代码 200 以及预期的消息。恭喜你走到这一步！现在是解释的时候了。

### 如何理解 NGINX 中的指令和上下文

在这里编写的几行代码虽然看似简单，但却介绍了 NGINX 配置文件的两个最重要的术语。 它们是**指令**和**上下文**。

从技术上讲，NGINX 配置文件中的所有内容都是 ** 指令**。 指令有两种类型：

- 简单指令
- 块指令

一个简单的指令由指令名称和空格分隔的参数组成，如 `listen`、`return` 等。简单指令以分号结束。

块指令类似于简单指令，不同之处在于它们不是以分号结尾，而是以一对花括号 `{}` 括起的附加指令。

能够在其中包含其他指令的块指令称为上下文，即 `events`、`http` 等。NGINX 中有四个核心上下文：

- `events { }` – `events` 上下文用于设置关于 NGINX 如何在一般级别处理请求的全局配置。一个有效的配置文件中只能有一个 `events` 上下文。
- `http { }` – 顾名思义，`http` 上下文用于定义有关服务器将如何处理 HTTP 和 HTTPS 请求的配置，特别是。一个有效的配置文件中只能有一个 `http` 上下文。
- `server { }` – `server` 上下文嵌套在 `http` 上下文中，用于在单个主机内配置特定的虚拟服务器。在嵌套在 `http` 上下文中的有效配置文件中可以有多个 `server` 上下文。每个“服务器”上下文都被认为是一个虚拟主机。
- `main` – `main` 上下文是配置文件本身。在前面提到的三个上下文之外编写的任何内容都在 `main`上下文中。

可以将 NGINX 中的上下文视为其他编程语言中的作用域。他们之间也有一种继承关系。可以在官方 NGINX 文档中找到[指令的字母索引](https://nginx.org/en/docs/dirindex.html)。

我已经提到在一个配置文件中可以有多个 `server` 上下文。但是当请求到达服务器时，NGINX 如何知道哪一个上下文中应该处理请求？

`listen` 指令是在配置中识别正确的 `server` 上下文的方法之一。 考虑以下场景：

```
http {    server {        listen 80;        server_name nginx-handbook.test;        return 200 "hello from port 80!\n";    }    server {        listen 8080;        server_name nginx-handbook.test;        return 200 "hello from port 8080!\n";    }}
```

现在，如果向 http://nginx-handbook.test:80 发送请求，那么将收到“hello from port 80!” 响应。 如果向 http://nginx-handbook.test:8080 发送请求，将收到“hello from port 8080!” 响应：

```
curl nginx-handbook.test:80# hello from port 80!curl nginx-handbook.test:8080# hello from port 8080!
```

这两个服务器块就像两个人拿着电话听筒，等待指定电话号码呼入时响应。它们的电话号码由 `listen` 指令指示。

除了`listen` 指令，还有 `server_name` 指令。考虑以下虚构图书馆管理应用程序的场景：

```
http {    server {        listen 80;        server_name library.test;        return 200 "your local library!\n";    }    server {        listen 80;        server_name librarian.library.test;        return 200 "welcome dear librarian!\n";    }}
```

这是虚拟主机思想的一个基本例子。正在同一台服务器中以不同的服务器名称运行两个单独的应用程序。

如果向 http://library.test 发送请求，那么将获得“your local library!” 响应。 如果向 http://librarian.library.test 发送请求，将收到“welcome dear librarian!” 响应。

```shell
curl http://library.test

# your local library!

curl http://librarian.library.test

# welcome dear librarian!
```

为了让这个演示在你的系统上运行，你必须更新你的 `hosts` 文件使其包含这两个域名：

```hosts
192.168.20.20   library.test
192.168.20.20   librarian.library.test
```

最后，`return` 指令负责向用户返回一个有效的响应。该指令包含两个参数：状态代码和要返回的字符串消息。

### 如何使用 NGINX 提供静态内容

现在已经很好地了解了如何为 NGINX 编写基本配置文件，让我们升级配置以提供静态文件而不是纯文本响应。

为了提供静态内容，首先必须将它们存储在服务器上的某个位置。如果你使用 `ls` 列出服务器根目录下的文件和目录，会在那里找到一个名为 `/srv` 的目录：

```shell
ls -lh /

# lrwxrwxrwx   1 root    root       7 Apr 16 02:10 bin -> usr/bin
# drwxr-xr-x   3 root    root    4.0K Apr 16 02:13 boot
# drwxr-xr-x  16 root    root    3.8K Apr 21 09:23 dev
# drwxr-xr-x  92 root    root    4.0K Apr 21 09:24 etc
# drwxr-xr-x   4 root    root    4.0K Apr 21 08:04 home
# lrwxrwxrwx   1 root    root       7 Apr 16 02:10 lib -> usr/lib
# lrwxrwxrwx   1 root    root       9 Apr 16 02:10 lib32 -> usr/lib32
# lrwxrwxrwx   1 root    root       9 Apr 16 02:10 lib64 -> usr/lib64
# lrwxrwxrwx   1 root    root      10 Apr 16 02:10 libx32 -> usr/libx32
# drwx------   2 root    root     16K Apr 16 02:15 lost+found
# drwxr-xr-x   2 root    root    4.0K Apr 16 02:10 media
# drwxr-xr-x   2 root    root    4.0K Apr 16 02:10 mnt
# drwxr-xr-x   2 root    root    4.0K Apr 16 02:10 opt
# dr-xr-xr-x 152 root    root       0 Apr 21 09:23 proc
# drwx------   5 root    root    4.0K Apr 21 09:59 root
# drwxr-xr-x  26 root    root     820 Apr 21 09:47 run
# lrwxrwxrwx   1 root    root       8 Apr 16 02:10 sbin -> usr/sbin
# drwxr-xr-x   6 root    root    4.0K Apr 16 02:14 snap
# drwxr-xr-x   2 root    root    4.0K Apr 16 02:10 srv
# dr-xr-xr-x  13 root    root       0 Apr 21 09:23 sys
# drwxrwxrwt  11 root    root    4.0K Apr 21 09:24 tmp
# drwxr-xr-x  15 root    root    4.0K Apr 16 02:12 usr
# drwxr-xr-x   1 vagrant vagrant   38 Apr 21 09:23 vagrant
# drwxr-xr-x  14 root    root    4.0K Apr 21 08:34 var
```

这个`/srv` 目录旨在包含由该系统提供的特定于站点的数据。现在 `cd` 进入这个目录并克隆本书附带的代码库：

```
cd /srvsudo git clone https://github.com/fhsinchy/nginx-handbook-projects.git
```

在 `nginx-handbook-projects` 目录中应该有一个名为 `static-demo` 的目录，总共包含四个文件：

```shell
ls -lh /srv/nginx-handbook-projects/static-demo# -rw-r--r-- 1 root root 960 Apr 21 11:27 about.html# -rw-r--r-- 1 root root 960 Apr 21 11:27 index.html# -rw-r--r-- 1 root root 46K Apr 21 11:27 mini.min.css# -rw-r--r-- 1 root root 19K Apr 21 11:27 the-nginx-handbook.jpg
```

现在有了要提供的静态内容，请按如下方式更新配置：

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;    }}
```

代码几乎相同，除了 `return` 指令现在已被替换为 `root` 指令。 该指令用于声明站点的根目录。

通过编写 `root /srv/nginx-handbook-projects/static-demo` 告诉 NGINX 在有任何请求时在这个服务器的 `/srv/nginx-handbook-projects/static-demo` 目录中查找要提供的文件。由于 NGINX 是一个 Web 服务器，它非常聪明，可以默认为 `index.html` 文件提供服务。

让我们看看这是否有效。 测试并重新加载更新的配置文件并访问服务器。应该会看到一个不完整的 HTML 站点：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-91.png)

尽管 NGINX 已正确提供 index.html 文件，但从三个导航链接的外观来看，似乎 CSS 代码不起作用。

你可能认为 CSS 文件中有问题。但实际上，问题出在配置文件中。

### NGINX 中的静态文件类型处理

要调试现在面临的问题，向服务器发送 CSS 文件的请求：

```shell
curl -I http://nginx-handbook/mini.min.css

# HTTP/1.1 200 OK
# Server: nginx/1.18.0 (Ubuntu)
# Date: Wed, 21 Apr 2021 12:17:16 GMT
# Content-Type: text/plain
# Content-Length: 46887
# Last-Modified: Wed, 21 Apr 2021 11:27:06 GMT
# Connection: keep-alive
# ETag: "60800c0a-b727"
# Accept-Ranges: bytes
```

注意 **Content-Type** 并查看展示 **text/plain** 而不是 **text/css**。这意味着 NGINX 将此文件作为纯文本而不是样式表提供。

尽管 NGINX 足够聪明，默认情况下可以找到 `index.html` 文件，但在解释文件类型时它非常愚蠢。要解决此问题，再次更新配置：

```conf
events {

}

http {

    types {
        text/html html;
        text/css css;
    }

    server {

        listen 80;
        server_name nginx-handbook.test;

        root /srv/nginx-handbook-projects/static-demo;
    }
}
```

我们对代码所做的唯一更改是嵌套在 `http` 块中的新 `types` 上下文。可能已经从名称中猜到，此上下文用于配置文件类型。

通过在此上下文中编写 `text/html html`，你告诉 NGINX 将任何以 `html` 扩展名结尾的文件解析为 `text/html`。

可能认为配置 CSS 文件类型就足够了，因为 HTML 已经被很好地解析——但并非如此。

如果在配置中引入 `types` 上下文，NGINX 会变得更加笨拙，只会解析你配置的文件。因此，如果只在此上下文中定义了 `text/css css`，那么 NGINX 将开始将 HTML 文件解析为纯文本。

验证并重新加载新更新的配置文件并再次访问服务器。再次发送对 CSS 文件的请求，这次文件应该被解析为 **text/css** 文件了：

```shell
curl -I http://nginx-handbook.test/mini.min.css

# HTTP/1.1 200 OK
# Server: nginx/1.18.0 (Ubuntu)
# Date: Wed, 21 Apr 2021 12:29:35 GMT
# Content-Type: text/css
# Content-Length: 46887
# Last-Modified: Wed, 21 Apr 2021 11:27:06 GMT
# Connection: keep-alive
# ETag: "60800c0a-b727"
# Accept-Ranges: bytes
```

访问服务器进行视觉验收，这次站点应该看起来更好：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-92.png)

如果已正确更新并重新加载配置文件，但仍看到旧站点，请执行强制刷新。

### 如何引入部分配置文件

在 `types` 上下文中映射文件类型可能适用于小型项目，但对于较大的项目，它可能很麻烦且容易出错。

NGINX 为这个问题提供了解决方案。如果你再次列出 `/etc/nginx` 目录中的文件，会看到一个名为 `mime.types` 的文件。

```shell
ls -lh /etc/nginx

# drwxr-xr-x 2 root root 4.0K Apr 21  2020 conf.d
# -rw-r--r-- 1 root root 1.1K Feb  4  2019 fastcgi.conf
# -rw-r--r-- 1 root root 1007 Feb  4  2019 fastcgi_params
# -rw-r--r-- 1 root root 2.8K Feb  4  2019 koi-utf
# -rw-r--r-- 1 root root 2.2K Feb  4  2019 koi-win
# -rw-r--r-- 1 root root 3.9K Feb  4  2019 mime.types
# drwxr-xr-x 2 root root 4.0K Apr 21  2020 modules-available
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 modules-enabled
# -rw-r--r-- 1 root root 1.5K Feb  4  2019 nginx.conf
# -rw-r--r-- 1 root root  180 Feb  4  2019 proxy_params
# -rw-r--r-- 1 root root  636 Feb  4  2019 scgi_params
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 sites-available
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 sites-enabled
# drwxr-xr-x 2 root root 4.0K Apr 17 14:42 snippets
# -rw-r--r-- 1 root root  664 Feb  4  2019 uwsgi_params
# -rw-r--r-- 1 root root 3.0K Feb  4  2019 win-utf
```

我们来看看这个文件的内容：

```shell
cat /etc/mime.types

# types {
#     text/html                             html htm shtml;
#     text/css                              css;
#     text/xml                              xml;
#     image/gif                             gif;
#     image/jpeg                            jpeg jpg;
#     application/javascript                js;
#     application/atom+xml                  atom;
#     application/rss+xml                   rss;

#     text/mathml                           mml;
#     text/plain                            txt;
#     text/vnd.sun.j2me.app-descriptor      jad;
#     text/vnd.wap.wml                      wml;
#     text/x-component                      htc;

#     image/png                             png;
#     image/tiff                            tif tiff;
#     image/vnd.wap.wbmp                    wbmp;
#     image/x-icon                          ico;
#     image/x-jng                           jng;
#     image/x-ms-bmp                        bmp;
#     image/svg+xml                         svg svgz;
#     image/webp                            webp;

#     application/font-woff                 woff;
#     application/java-archive              jar war ear;
#     application/json                      json;
#     application/mac-binhex40              hqx;
#     application/msword                    doc;
#     application/pdf                       pdf;
#     application/postscript                ps eps ai;
#     application/rtf                       rtf;
#     application/vnd.apple.mpegurl         m3u8;
#     application/vnd.ms-excel              xls;
#     application/vnd.ms-fontobject         eot;
#     application/vnd.ms-powerpoint         ppt;
#     application/vnd.wap.wmlc              wmlc;
#     application/vnd.google-earth.kml+xml  kml;
#     application/vnd.google-earth.kmz      kmz;
#     application/x-7z-compressed           7z;
#     application/x-cocoa                   cco;
#     application/x-java-archive-diff       jardiff;
#     application/x-java-jnlp-file          jnlp;
#     application/x-makeself                run;
#     application/x-perl                    pl pm;
#     application/x-pilot                   prc pdb;
#     application/x-rar-compressed          rar;
#     application/x-redhat-package-manager  rpm;
#     application/x-sea                     sea;
#     application/x-shockwave-flash         swf;
#     application/x-stuffit                 sit;
#     application/x-tcl                     tcl tk;
#     application/x-x509-ca-cert            der pem crt;
#     application/x-xpinstall               xpi;
#     application/xhtml+xml                 xhtml;
#     application/xspf+xml                  xspf;
#     application/zip                       zip;

#     application/octet-stream              bin exe dll;
#     application/octet-stream              deb;
#     application/octet-stream              dmg;
#     application/octet-stream              iso img;
#     application/octet-stream              msi msp msm;

#     application/vnd.openxmlformats-officedocument.wordprocessingml.document    docx;
#     application/vnd.openxmlformats-officedocument.spreadsheetml.sheet          xlsx;
#     application/vnd.openxmlformats-officedocument.presentationml.presentation  pptx;

#     audio/midi                            mid midi kar;
#     audio/mpeg                            mp3;
#     audio/ogg                             ogg;
#     audio/x-m4a                           m4a;
#     audio/x-realaudio                     ra;

#     video/3gpp                            3gpp 3gp;
#     video/mp2t                            ts;
#     video/mp4                             mp4;
#     video/mpeg                            mpeg mpg;
#     video/quicktime                       mov;
#     video/webm                            webm;
#     video/x-flv                           flv;
#     video/x-m4v                           m4v;
#     video/x-mng                           mng;
#     video/x-ms-asf                        asx asf;
#     video/x-ms-wmv                        wmv;
#     video/x-msvideo                       avi;
# }
```

该文件包含一长串文件类型及其扩展名。 要在配置文件中使用此文件，请将配置更新为如下所示：

```conf
events {

}

http {

    include /etc/nginx/mime.types;

    server {

        listen 80;
        server_name nginx-handbook.test;

        root /srv/nginx-handbook-projects/static-demo;
    }

}
```

旧的 `types` 上下文现在已替换为新的 `include` 指令。顾名思义，该指令允许包含来自其他配置文件的内容。

验证并重新加载配置文件并再次发送对 `mini.min.css` 文件的请求：

```shell
curl -I http://nginx-handbook.test/mini.min.css

# HTTP/1.1 200 OK
# Server: nginx/1.18.0 (Ubuntu)
# Date: Wed, 21 Apr 2021 12:29:35 GMT
# Content-Type: text/css
# Content-Length: 46887
# Last-Modified: Wed, 21 Apr 2021 11:27:06 GMT
# Connection: keep-alive
# ETag: "60800c0a-b727"
# Accept-Ranges: bytes
```

在下面关于如何理解主配置文件的部分中，我将演示如何使用 `include` 来模块化虚拟服务器配置。

## NGINX 中的动态路由

在上一节中编写的配置是一个非常简单的静态内容服务器配置。它所做的只是匹配来自与客户端访问的 URI 相对应的站点根目录的文件并进行响应。

因此，如果客户端请求根目录中存在文件，例如 `index.html`、`about.html` 或 `mini.min.css`，NGINX 将返回该文件。 但是，如果访问诸如 http://nginx-handbook.test/nothing 之类的路由，它将以默认的 404 页面响应：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-93.png)

在本书的这一部分，将了解 `location` 上下文、变量、重定向、重写和 `try_files` 指令。本节中不会有新项目，但在此处学习的概念将在接下来的部分中必不可少。

此外，本节中的配置更改非常频繁，因此请不要忘记在每次更新后验证并重新加载配置文件。

### 位置匹配

我们将在本节中讨论的第一个概念是 `location`  上下文。 更新配置如下：

```conf
events {

}

http {

    server {

        listen 80;
        server_name nginx-handbook.test;

        location /agatha {
            return 200 "Miss Marple.\nHercule Poirot.\n";
        }
    }
}
```

我们已经用新的 `location` 上下文替换了 `root` 指令。这个上下文通常嵌套在 `server` 块中。`server` 上下文中可以有多个 `location` 上下文。

如果向 http://nginx-handbook.test/agatha 发送请求，将获得 200 响应代码和 [Agatha Christie](https://en.wikipedia.org/wiki/Agatha_Christie) 创建的字符列表。

```shell
curl -i http://nginx-handbook.test/agatha

# HTTP/1.1 200 OK
# Server: nginx/1.18.0 (Ubuntu)
# Date: Wed, 21 Apr 2021 15:59:07 GMT
# Content-Type: text/plain
# Content-Length: 29
# Connection: keep-alive

# Miss Marple.
# Hercule Poirot.
```

现在，如果向 http://nginx-handbook.test/agatha-christie 发送请求，将得到相同的响应：

```shell
curl -i http://nginx-handbook.test/agatha-christie# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 15:59:07 GMT# Content-Type: text/plain# Content-Length: 29# Connection: keep-alive# Miss Marple.# Hercule Poirot.
```

发生这种情况是因为，通过编写 `location /agatha`，告诉 NGINX 匹配任何以“agatha”开头的 URI。 这种匹配称为**前缀匹配**。

要执行**完全匹配**，必须按如下方式更新代码：

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        location = /agatha {            return 200 "Miss Marple.\nHercule Poirot.\n";        }    }}
```

在位置 URI 之前添加一个 `=` 符号将指示 NGINX 只有在 URL 完全匹配时才响应。 现在，如果向除 `/agatha` 之外的任何内容发送请求，都将收到 404 响应。

```shell
curl -I http://nginx-handbook.test/agatha-christie# HTTP/1.1 404 Not Found# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:14:29 GMT# Content-Type: text/html# Content-Length: 162# Connection: keep-alivecurl -I http://nginx-handbook.test/agatha# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:15:04 GMT# Content-Type: text/plain# Content-Length: 29# Connection: keep-alive
```

NGINX 中的另一种匹配是 **regex 匹配**。 使用此匹配，可以根据复杂的正则表达式检查 URL location。

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        location ~ /agatha[0-9] {        	return 200 "Miss Marple.\nHercule Poirot.\n";        }    }}
```

通过将之前使用的 `=` 符号替换为 `~` 符号，来告诉 NGINX 执行正则表达式匹配。将 location 设置为 `~ /agatha[0-9]` 意味着 NIGINX 只有在单词“agatha”后面有数字时才会响应：

```shell
curl -I http://nginx-handbook.test/agatha# HTTP/1.1 404 Not Found# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:14:29 GMT# Content-Type: text/html# Content-Length: 162# Connection: keep-alivecurl -I http://nginx-handbook.test/agatha8# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:15:04 GMT# Content-Type: text/plain# Content-Length: 29# Connection: keep-alive
```

默认情况下，正则表达式匹配区分大小写，这意味着如果将任何字母大写，则该 location 将不起作用：

```shell
curl -I http://nginx-handbook.test/Agatha8# HTTP/1.1 404 Not Found# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:14:29 GMT# Content-Type: text/html# Content-Length: 162# Connection: keep-alive
```

要将其转换为不区分大小写，必须在 `~` 符号后添加一个 `*`。

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        location ~* /agatha[0-9] {        	return 200 "Miss Marple.\nHercule Poirot.\n";        }    }}
```

这将告诉 NGINX 大小写不敏感匹配 location。

```shell
curl -I http://nginx-handbook.test/agatha8# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:15:04 GMT# Content-Type: text/plain# Content-Length: 29# Connection: keep-alivecurl -I http://nginx-handbook.test/Agatha8# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Wed, 21 Apr 2021 16:15:04 GMT# Content-Type: text/plain# Content-Length: 29# Connection: keep-alive
```

NGINX 为这些匹配分配优先级值，正则匹配比前缀匹配具有更高的优先级。

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;		location /Agatha8 {        	return 200 "prefix matched.\n";        }                location ~* /agatha[0-9] {        	return 200 "regex matched.\n";        }    }}
```

现在，如果向 http://nginx-handbook.test/Agatha8 发送请求，将得到以下响应：

```shell
curl -i http://nginx-handbook.test/Agatha8# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Thu, 22 Apr 2021 08:08:18 GMT# Content-Type: text/plain# Content-Length: 15# Connection: keep-alive# regex matched.
```

但是这个优先级可以稍微改变。NGINX 中的最后一种匹配类型是**优先前缀匹配**。要将前缀匹配转换为优先匹配，需要在位置 URI 之前包含 `^~` 修饰符：

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;		location ^~ /Agatha8 {        	return 200 "prefix matched.\n";        }                location ~* /agatha[0-9] {        	return 200 "regex matched.\n";        }    }}
```

现在，如果向 http://nginx-handbook.test/Agatha8 发送请求，将得到以下响应：

```shell
curl -i http://nginx-handbook.test/Agatha8# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Thu, 22 Apr 2021 08:13:24 GMT# Content-Type: text/plain# Content-Length: 16# Connection: keep-alive# prefix matched.
```

这一次，前缀匹配优先。所以按优先级降序排列的所有匹配列表如下：

| Match               | Modifier    |
| ------------------- | ----------- |
| Exact               | `=`         |
| Preferential Prefix | `^~`        |
| REGEX               | `~` or `~*` |
| Prefix              | `None`      |

### NGINX 中的变量

NGINX 中的变量和其他编程语言中的变量类似。 `set` 指令可用于在配置文件中的任何位置声明新变量：

```conf
set $<variable_name> <variable_value>;# set name "Farhan"# set age 25# set is_working true
```

变量可以是三种类型

-   字符串
-   整数
-   布尔值

除了声明的变量之外，NGINX 模块中还有内置的变量。 [变量的字母索引](https://nginx.org/en/docs/varindex.html) 可在官方文档中找到。

要查看一些正在运行的变量，按如下方式更新配置：

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;        return 200 "Host - $host\nURI - $uri\nArgs - $args\n";    }}
```

现在向服务器发送请求后，会得到如下响应：

```shell
# curl http://nginx-handbook.test/user?name=Farhan# Host - nginx-handbook.test# URI - /user# Args - name=Farhan
```

如你所见，`$host` 和 `$uri` 变量分别保存根地址和相对于根的请求 URI。如你所见，`$args` 变量包含所有查询字符串。

可以使用 `$arg` 变量访问各个值，而不是打印查询字符串的文字字符串形式。

```conf
events {}http {    server {        listen 80;        server_name nginx-handbook.test;                set $name $arg_name; # $arg_<query string name>        return 200 "Name - $name\n";    }}
```

现在来自服务器的响应应该如下所示：

```shell
curl http://nginx-handbook.test?name=Farhan# Name - Farhan
```

我在这里演示的变量嵌入在 [ngx\_http\_core\_module](https://nginx.org/en/docs/http/ngx_http_core_module.html) 中。要在配置中访问变量，必须使用嵌入变量的模块构建 NGINX。从源代码构建 NGINX 并使用动态模块稍微超出了本文的范围。 但我肯定会在我的博客中写到这一点。

### Redirects 和 Rewrites

NGINX 中的重定向与任何其他平台中的重定向相同。 要演示重定向的工作原理，请将配置更新为如下所示：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;        location = /index_page {                return 307 /index.html;        }        location = /about_page {                return 307 /about.html;        }    }}
```

现在，如果向 http://nginx-handbook.test/about\_page 发送请求，将被重定向到 http://nginx-handbook.test/about.html：

```shell
curl -I http://nginx-handbook.test/about_page# HTTP/1.1 307 Temporary Redirect# Server: nginx/1.18.0 (Ubuntu)# Date: Thu, 22 Apr 2021 18:02:04 GMT# Content-Type: text/html# Content-Length: 180# Location: http://nginx-handbook.test/about.html# Connection: keep-alive
```

如你所见，服务器响应状态码为 307，位置指示 http://nginx-handbook.test/about.html。如果您从浏览器访问 http://nginx-handbook.test/about\_page，会看到 URL 将自动更改为 http://nginx-handbook.test/about.html。

然而，`rewrite` 指令的工作方式略有不同。 它在内部更改 URI，而不让用户知道。 要查看它的实际效果，请按如下方式更新配置：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;        rewrite /index_page /index.html;        rewrite /about_page /about.html;    }}
```

现在，如果向 http://nginx-handbook/about\_page URI 发送请求，将响应 200 响应码的 about.html 文件：

```shell
curl -i http://nginx-handbook.test/about_page# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Thu, 22 Apr 2021 18:09:31 GMT# Content-Type: text/html# Content-Length: 960# Last-Modified: Wed, 21 Apr 2021 11:27:06 GMT# Connection: keep-alive# ETag: "60800c0a-3c0"# Accept-Ranges: bytes# <!DOCTYPE html># <html lang="en"># <head>#     <meta charset="UTF-8">#     <meta http-equiv="X-UA-Compatible" content="IE=edge">#     <meta name="viewport" content="width=device-width, initial-scale=1.0">#     <title>NGINX Handbook Static Demo</title>#     <link rel="stylesheet" href="mini.min.css">#     <style>#         .container {#             max-width: 1024px;#             margin-left: auto;#             margin-right: auto;#         }# #         h1 {#             text-align: center;#         }#     </style># </head># <body class="container">#     <header>#         <a class="button" href="index.html">Index</a>#         <a class="button" href="about.html">About</a>#         <a class="button" href="nothing">Nothing</a>#     </header>#     <div class="card fluid">#         <img src="./the-nginx-handbook.jpg" alt="The NGINX Handbook Cover Image">#     </div>#     <div class="card fluid">#         <h1>this is the <strong>about.html</strong> file</h1>#     </div># </body># </html>
```

如果使用浏览器访问 URI，将看到 about.html 页面，而 URL 保持不变：

![](https://www.freecodecamp.org/news/content/images/2021/04/rewrite.png)

除了处理 URI 更改的方式之外，重定向和重写之间还有另一个区别。当重写发生时，NGINX 会重新评估 `server` 上下文。 因此，重写是比重定向更昂贵的操作。

### 如何尝试多个文件

本节要展示的最后一个概念是 `try_files` 指令。`try_files` 指令不是响应单个文件，而是一次检查存在的多个文件。

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;        try_files /the-nginx-handbook.jpg /not_found;        location /not_found {                return 404 "sadly, you've hit a brick wall buddy!\n";        }    }}
```

如你所见，添加了一个新的 `try_files` 指令。 通过编写`try_files /the-nginx-handbook.jpg /not_found;`，可以指示 NGINX 在收到请求时在根目录中查找名为 the-nginx-handbook.jpg 的文件。如果它不存在，则转到 `/not_found` 位置。

所以现在如果你访问服务器，你会看到图像：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-94.png)

但是，如果更新配置以尝试使用不存在的文件（例如 blackhole.jpg），将收到 404 响应并显示消息“sadly, you've hit a brick wall buddy!”。

现在用这种方式写一个 `try_files` 指令的问题是，无论你访问什么 URL，只要服务器收到一个请求并且在磁盘上找到了 -nginx-handbook.jpg 文件，NGINX 就会返回它。

![](https://www.freecodecamp.org/news/content/images/2021/04/try-files.png)

这就是为什么 `try_files` 经常与 `$uri` NGINX 变量一起使用的原因。

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;        try_files $uri /not_found;        location /not_found {                return 404 "sadly, you've hit a brick wall buddy!\n";        }    }}
```

通过编写 `try_files $uri /not_found;`，在指示 NGINX 首先尝试获取客户端请求的 URI。如果它没有找到，则尝试下一个。

所以现在如果你访问 http://nginx-handbook.test/index.html 应该得到旧的 index.html 页面。about.html 页面也是如此：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-95.png)


但是如果你请求一个不存在的文件，会得到 `/not_found` location 的响应：

```shell
curl -i http://nginx-handbook.test/nothing# HTTP/1.1 404 Not Found# Server: nginx/1.18.0 (Ubuntu)# Date: Thu, 22 Apr 2021 20:01:57 GMT# Content-Type: text/plain# Content-Length: 38# Connection: keep-alive# sadly, you've hit a brick wall buddy!
```

可能已经注意到的一件事是，如果访问服务器根目录 http://nginx-handbook.test，会收到 404 响应。

这是因为当访问服务器根目录时，`$uri` 变量不对应任何现有文件作为 NGINX 备选 location。如果要解决此问题，请按如下方式更新配置：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        root /srv/nginx-handbook-projects/static-demo;        try_files $uri $uri/ /not_found;        location /not_found {                return 404 "sadly, you've hit a brick wall buddy!\n";        }    }}
```

通过写 `try_files $uri $uri//not_found;`，指示 NGINX 首先尝试请求 URI。如果不存在，则尝试将请求的 URI 作为目录，并且每当 NGINX 最终进入目录时，它会自动开始查找 index.html 文件。

现在如果访问服务器，应该得到 index.html 文件：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-95.png)

`try_files` 是一种可用于多种变体的指令。 在接下来的部分中，会遇到一些其他变体，但我建议在 Internet 上自行研究该指令的不同用法。

## NGINX 日志

默认情况下，NGINX 的日志文件位于`/var/log/nginx` 中。 如果列出这个目录的内容，可能会看到如下内容：

```shell
ls -lh /var/log/nginx/# -rw-r----- 1 www-data adm     0 Apr 25 07:34 access.log# -rw-r----- 1 www-data adm     0 Apr 25 07:34 error.log
```

让我们先清空这两个文件。

```shell
# delete the old filessudo rm /var/log/nginx/access.log /var/log/nginx/error.log# create new filessudo touch /var/log/nginx/access.log /var/log/nginx/error.log# reopen the log filessudo nginx -s reopen
```

如果不向 NGINX 发送 `reopen` 信号，它将继续将日志写入先前打开的流，而新文件将保持为空。

现在要在访问日志中创建一个条目，向服务器发送一个请求。

```
curl -I http://nginx-handbook.test# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Sun, 25 Apr 2021 08:35:59 GMT# Content-Type: text/html# Content-Length: 960# Last-Modified: Sun, 25 Apr 2021 08:35:33 GMT# Connection: keep-alive# ETag: "608529d5-3c0"# Accept-Ranges: bytessudo cat /var/log/nginx/access.log # 192.168.20.20 - - [25/Apr/2021:08:35:59 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.68.0"
```

如你所见，access.log 文件中添加了一个新条目。默认情况下，对服务器的任何请求都将记录到此文件中。我们可以使用 `access_log` 指令来改变这种行为。

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;                location / {            return 200 "this will be logged to the default file.\n";        }                location = /admin {            access_log /var/logs/nginx/admin.log;                        return 200 "this will be logged in a separate file.\n";        }                location = /no_logging {            access_log off;                        return 200 "this will not be logged.\n";        }    }}
```

/admin location 块中的第一个 `access_log` 指令指示 NGINX 将此 URI 的任何访问日志写入 `/var/logs/nginx/admin.log` 文件。 第二个 /no\_logging location 中的完全关闭此 location 的访问日志。

验证并重新加载配置。 现在，如果向这些位置发送请求并检查日志文件，应该会看到如下内容：

```shell
curl http://nginx-handbook.test/no_logging# this will not be loggedsudo cat /var/log/nginx/access.log# emptycurl http://nginx-handbook.test/admin# this will be logged in a separate file.sudo cat /var/log/nginx/access.log# emptysudo cat /var/log/nginx/admin.log # 192.168.20.20 - - [25/Apr/2021:11:13:53 +0000] "GET /admin HTTP/1.1" 200 40 "-" "curl/7.68.0"curl  http://nginx-handbook.test/# this will be logged to the default file.sudo cat /var/log/nginx/access.log # 192.168.20.20 - - [25/Apr/2021:11:15:14 +0000] "GET / HTTP/1.1" 200 41 "-" "curl/7.68.0"
```

另一方面，error.log 文件保存失败日志。 要进入 error.log，必须使 NGINX crash。为此，请按如下方式更新配置：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;        return 200 "..." "...";    }}
```

如你所知，`return` 指令只接受两个参数——但我们在这里给出了三个。 现在尝试重新加载配置，将看到一条错误消息：

```shell
sudo nginx -s reload# nginx: [emerg] invalid number of arguments in "return" directive in /etc/nginx/nginx.conf:14
```

检查错误日志的内容，消息也应该出现在那里：

```shell
sudo cat /var/log/nginx/error.log # 2021/04/25 08:35:45 [notice] 4169#4169: signal process started# 2021/04/25 10:03:18 [emerg] 8434#8434: invalid number of arguments in "return" directive in /etc/nginx/nginx.conf:14
```

错误消息有级别。 错误日志中的 `notice` 条目是代表日志记录的信息是无关紧要的，但必须立即处理 `emerg` 或 `crit` 条目。

有八个级别的错误消息：

- `debug` – 有助于确定问题所在的有用调试信息。
- `info` - 不需要阅读但可能很好了解的信息性消息。
- `notice` - 发生了一些值得注意的正常现象。
- `warn` - 发生了意外，但不必担心。
- `error` - 某些事情不成功。
- `crit` - 存在急需解决的问题。
- `alert` - 需要迅速采取行动。
- `emerg` - 系统处于无法使用的状态，需要立即关注。

默认情况下，NGINX 记录所有级别的消息。 可以使用 `error_log` 指令覆盖此行为。如果要将消息的最低级别设置为`warn`，请按如下方式更新配置文件：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx-handbook.test;	    	error_log /var/log/error.log warn;        return 200 "..." "...";    }}
```

验证并重新加载配置，从现在开始，只会记录级别为 `warn` 或更高级别的消息。

```shell
cat /var/log/nginx/error.log# 2021/04/25 11:27:02 [emerg] 12769#12769: invalid number of arguments in "return" directive in /etc/nginx/nginx.conf:16
```

与之前的输出不同，这里没有“通知”条目。`emerg` 是比 `warn` 更高级别的错误，这就是它被记录的原因。

对于大多数项目，保留错误配置应该没问题。我唯一的建议是将最小错误级别设置为 `warn`。 这样就不必查看错误日志中不必要的条目。

但是，如果想了解有关在 NGINX 中自定义日志记录的更多信息，此官方文档的 [链接](https://docs.nginx.com/nginx/admin-guide/monitoring/logging/) 可能会有所帮助。

## 如何使用 NGINX 作为反向代理

当配置为反向代理时，NGINX 位于客户端和后端服务器之间。客户端向 NGINX 发送请求，然后 NGINX 将请求传递给后端。

后端服务器处理完请求后，将其发送回 NGINX。反过来，NGINX 将响应返回给客户端。

在整个过程中，客户端不知道谁在实际处理请求。写起来听起来很复杂，但一旦你自己动手，你就会发现 NGINX 让反向代理变的多么容易。

让我们看一个非常基本且不切实际的反向代理示例：

```conf
events {}http {    include /etc/nginx/mime.types;    server {        listen 80;        server_name nginx.test;        location / {                proxy_pass "https://nginx.org/";        }    }}
```

除了验证和重新加载配置之外，还必须将此地址添加到的 `hosts` 文件中，以使此演示在你的系统上运行：

```hosts
192.168.20.20   nginx.test
```

现在，如果访问 http://nginx.test，将看到原始的 [https://nginx.org](https://nginx.org) 站点，而 URI 保持不变。

![](https://www.freecodecamp.org/news/content/images/2021/04/nginx-org-proxy.png)

甚至能够在一定程度上浏览网站。如果访问 http://nginx.test/en/docs/ 应该得到 [http://nginx.org/en/docs/](http://nginx.org/en/docs/) 页面的响应 .

如你所见，在基本层面上，`proxy_pass` 指令只是将客户端的请求传递给第三方服务器，并将响应反向代理到客户端。

### 使用 NGINX 的 Node.js

现在已经知道如何配置基本的反向代理服务器，可以为 NGINX 反向代理的 Node.js 应用程序提供服务。我在本文附带的代码仓库中添加了一个演示应用程序。

> 我假设你有使用 Node.js 的经验并且知道如何使用 PM2 启动 Node.js 应用程序。

如果你已经在 `/srv/nginx-handbook-projects` 中克隆了存储库，那么 `node-js-demo` 项目应该在 `/srv/nginx-handbook-projects/node-js-demo` 目录中。

为了运行这个 demo，需要在你的服务器上安装 Node.js。 可以按照 [此处](https://github.com/nodesource/distributions#debinstall) 找到的说明执行此操作。

演示应用程序是一个简单的 HTTP 服务器，它响应 200 状态代码和 JSON 有效负载。可以通过简单地执行 `node app.js` 来启动应用程序，但更好的方法是使用 [PM2](https://pm2.keymetrics.io)。

PM2 是一个守护进程管理器，广泛用于 Node.js 应用程序的生产。如果想了解更多信息，此[链接](https://pm2.keymetrics.io/docs/usage/quick-start/) 可能会有所帮助。

通过执行 `sudo npm install -g pm2` 全局安装 PM2。安装完成后，在`/srv/nginx-handbook-projects/node-js-demo`目录下执行以下命令：

```shell
pm2 start app.js# [PM2] Process successfully started# ┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐# │ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │# ├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤# │ 0  │ app                │ fork     │ 0    │ online    │ 0%       │ 21.2mb   │# └────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

或者，也可以从服务器上的任何位置执行 `pm2 start /srv/nginx-handbook-projects/node-js-demo/app.js`。 可以通过执行 `pm2 stop app` 命令来停止应用程序。

应用程序现在应该正在运行，但不应从服务器外部访问。 要验证应用程序是否正在运行，请从服务器内部向 http://localhost:3000 发送 get 请求：

```shell
curl -i localhost:3000# HTTP/1.1 200 OK# X-Powered-By: Express# Content-Type: application/json; charset=utf-8# Content-Length: 62# ETag: W/"3e-XRN25R5fWNH2Tc8FhtUcX+RZFFo"# Date: Sat, 24 Apr 2021 12:09:55 GMT# Connection: keep-alive# Keep-Alive: timeout=5# { "status": "success", "message": "You're reading The NGINX Handbook!" }
```

如果收到 200 响应，则服务器运行成功。现在要将 NGINX 配置为反向代理，请打开配置文件并按如下方式更新其内容：

```conf
events {}  http {    listen 80;    server_name nginx-handbook.test    location / {        proxy_pass http://localhost:3000;    }}
```

这里没啥需要解释的。只是将接收到的请求传递给在端口 3000 上运行的 Node.js 应用程序。现在，如果从外部向服务器发送请求，应该得到如下响应：

```shell
curl -i http://nginx-handbook.test# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Sat, 24 Apr 2021 14:58:01 GMT# Content-Type: application/json# Transfer-Encoding: chunked# Connection: keep-alive# { "status": "success", "message": "You're reading The NGINX Handbook!" }
```

尽管这适用于像这样的基本服务器，但可能需要添加更多指令才能使其在实际场景中工作，具体取决于应用程序的要求。

例如，如果应用程序处理 Web socket 连接，那么应该按如下方式更新配置：

```conf
events {}  http {    listen 80;    server_name nginx-handbook.test    location / {        proxy_pass http://localhost:3000;        proxy_http_version 1.1;        proxy_set_header Upgrade $http_upgrade;        proxy_set_header Connection 'upgrade';    }}
```

`proxy_http_version` 指令设置服务器的 HTTP 版本。 默认情况下它是 1.0，但 web socket 要求它至少是 1.1。 `proxy_set_header` 指令用于在后端服务器上设置标头。该指令的通用语法如下：

```conf
proxy_set_header <header name> <header value>
```

因此，通过编写`proxy_set_header Upgrade $http_upgrade;`，是在指示 NGINX 将`$http_upgrade` 变量的值作为名为`Upgrade` 的标头传递——与`Connection` 标头相同。

如果你想了解更多关于 web socket 代理的信息，这个指向官方 NGINX 文档的 [链接](https://nginx.org/en/docs/http/websocket.html) 可能会有所帮助。

根据的应用程序所需的标头，可能需要设置更多标头。但是上面提到的配置在配置 Node.js 应用程序时非常常见。

### 使用 NGINX 的 PHP

PHP 和 NGINX 就像面包和黄油一样。 毕竟 LEMP 技术栈中的 E 和 P 就代表 NGINX 和 PHP。

> 这里假设你有使用 PHP 的经验并且知道如何运行 PHP 应用程序。

我已经在本文附带的代码仓库中包含了一个演示 PHP 应用程序。如果你已经在`/srv/nginx-handbook-projects` 目录中克隆了它，那么应用程序应该在`/srv/nginx-handbook-projects/php-demo` 中。

为了让这个演示运行，你必须安装一个名为 PHP-FPM 的包。 要安装软件包，可以执行以下命令：

```shell
sudo apt install php-fpm -y
```

要测试应用程序，请通过在 /srv/nginx-handbook-projects/php-demo` 目录中执行以下命令来启动 PHP 服务：

```shell
php -S localhost:8000# [Sat Apr 24 16:17:36 2021] PHP 7.4.3 Development Server (http://localhost:8000) started
```

或者，也可以从服务器上的任何位置执行 `php -S localhost:8000 /srv/nginx-handbook-projects/php-demo/index.php`。

该应用程序应该在端口 8000 上运行，但无法从服务器外部访问它。 要进行验证，请从服务器内部向 http://localhost:8000 发送 get 请求：

```shell
curl -I localhost:8000# HTTP/1.1 200 OK# Host: localhost:8000# Date: Sat, 24 Apr 2021 16:22:42 GMT# Connection: close# X-Powered-By: PHP/7.4.3# Content-type: application/json# {"status":"success","message":"You're reading The NGINX Handbook!"}
```

如果你收到 200 响应，则服务器运行成功。就像 Node.js 配置一样，现在可以简单地将请求 `proxy_pass` 发送到 localhost:8000 – 但是对于 PHP，有更好的方法。

PHP-FPM 中的 FPM 部分代表 FastCGI Process Module。FastCGI 是一种类似于 HTTP 的协议，用于交换二进制数据。 此协议比 HTTP 稍快，并提供更好的安全性。

To use FastCGI instead of HTTP, update your configuration as follows:

要使用 FastCGI 而不是 HTTP，请按如下方式更新配置：

```conf
events {}http {      include /etc/nginx/mime.types;      server {          listen 80;          server_name nginx-handbook.test;          root /srv/nginx-handbook-projects/php-demo;          index index.php;          location / {              try_files $uri $uri/ =404;          }          location ~ \.php$ {              fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;              fastcgi_param REQUEST_METHOD $request_method;              fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;      }   }}
```

让我们从新的 `index` 指令开始。 如你所知，NGINX 默认会查找 index.html 文件来提供服务。但在演示项目中，它是 index.php。 因此，编写 `index index.php`，指示 NGINX 以 root 用户身份使用 index.php 文件。

该指令可以接受多个参数。对于 `index index.php index.html`，NGINX 会首先寻找 index.php。如果它没有找到这个文件，它会寻找 index.html 文件。

第一个 `location` 上下文中的 `try_files` 指令与在上一节中看到的相同。最后的 `=404` 表示如果没有找到任何文件则抛出错误。

第二个 `location` 块是魔法发生的地方。如你所见，我们已经用新的 `fastcgi_pass` 替换了 `proxy_pass` 指令。顾名思义，它用于将请求传递给 FastCGI 服务。

PHP-FPM 服务默认运行在主机的 9000 端口上。因此，可以直接将请求传递给 `http://localhost:9000`，而不是像我在这里所做的那样使用 Unix 套接字。但是使用 Unix 套接字更安全。

如果安装了多个 PHP-FPM 版本，则可以通过执行以下命令简单地列出所有套接字文件位置：

```shell
sudo find / -name *fpm.sock# /run/php/php7.4-fpm.sock# /run/php/php-fpm.sock# /etc/alternatives/php-fpm.sock# /var/lib/dpkg/alternatives/php-fpm.sock
```

`/run/php/php-fpm.sock` 文件是指系统上安装的最新版本的 PHP-FPM。我更喜欢使用带有版本号的那个。这样即使 PHP-FPM 得到更新，我也可以知道我正在使用的版本。

与通过 HTTP 传递请求不同，通过 FPM 传递请求需要我们传递一些额外的信息。

将额外信息传递给 FPM 服务的一般方法是使用 `fastcgi_param` 指令。至少，必须将请求方法和脚本名称传递给后端服务才能使代理工作。

`fastcgi_param REQUEST_METHOD $request_method;` 将请求方法传递给后端，`fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;` 行传递要运行的 PHP 脚本的确切位置。

在这种状态下，配置应该可以工作。 要测试它，请访问服务器，应该会看到如下内容：

![](https://www.freecodecamp.org/news/content/images/2021/04/500-on-fastcgi.png)

嗯，这很奇怪。 500 错误意味着 NGINX 由于某种原因崩溃了。这是错误日志可以派上用场的地方。让我们看看 error.log 文件中的最后一个条目：

```shell
tail -n 1 /var/log/nginx/error.log# 2021/04/24 17:15:17 [crit] 17691#17691: *21 connect() to unix:/var/run/php/php7.4-fpm.sock failed (13: Permission denied) while connecting to upstream, client: 192.168.20.20, server: nginx-handbook.test, request: "GET / HTTP/1.1", upstream: "fastcgi://unix:/var/run/php/php7.4-fpm.sock:", host: "nginx-handbook.test"
```

似乎 NGINX 进程没有访问 PHP-FPM 进程的权限。

获得权限被拒绝错误的主要原因之一是用户不匹配。 查看拥有 NGINX 工作进程的用户。

```shell
ps aux | grep nginx# root         677  0.0  0.4   8892  4260 ?        Ss   14:31   0:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;# nobody     17691  0.0  0.3   9328  3452 ?        S    17:09   0:00 nginx: worker process# vagrant    18224  0.0  0.2   8160  2552 pts/0    S+   17:19   0:00 grep --color=auto nginx
```

如你所见，该进程当前归 `nobody` 所有。 现在检查 PHP-FPM 进程。

```shell
# ps aux | grep php# root       14354  0.0  1.8 195484 18924 ?        Ss   16:11   0:00 php-fpm: master process (/etc/php/7.4/fpm/php-fpm.conf)# www-data   14355  0.0  0.6 195872  6612 ?        S    16:11   0:00 php-fpm: pool www# www-data   14356  0.0  0.6 195872  6612 ?        S    16:11   0:00 php-fpm: pool www# vagrant    18296  0.0  0.0   8160   664 pts/0    S+   17:20   0:00 grep --color=auto php
```

另一方面，此进程由 `www-data` 用户拥有。 这就是 NGINX 被拒绝访问此进程的原因。

要解决此问题，请按如下方式更新配置：

```conf
user www-data;events {}http {      include /etc/nginx/mime.types;      server {          listen 80;          server_name nginx-handbook.test;          root /srv/nginx-handbook-projects/php-demo;          index index.php;          location / {              try_files $uri $uri/ =404;          }          location ~ \.php$ {              fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;              fastcgi_param REQUEST_METHOD $request_method;              fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;      }   }}
```

`user` 指令负责设置 NGINX 工作进程的所有者。 现在再次检查 NGINX 进程：

```shell
# ps aux | grep nginx# root         677  0.0  0.4   8892  4264 ?        Ss   14:31   0:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;# www-data   20892  0.0  0.3   9292  3504 ?        S    18:10   0:00 nginx: worker process# vagrant    21294  0.0  0.2   8160  2568 pts/0    S+   18:18   0:00 grep --color=auto nginx
```

毫无疑问，该进程现在归 `www-data` 用户所有。 向服务器发送请求以检查它是否正常工作：

```shell
# curl -i http://nginx-handbook.test# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Sat, 24 Apr 2021 18:22:24 GMT# Content-Type: application/json# Transfer-Encoding: chunked# Connection: keep-alive# {"status":"success","message":"You're reading The NGINX Handbook!"}
```

如果收到带有 JSON 有效负载的 200 状态代码，那么就可以开始了。

这种简单的配置适用于演示应用程序，但在实际项目中，必须传递一些额外的参数。

出于这个原因，NGINX 包含一个名为 `fastcgi_params` 的部分配置。该文件包含最常见的 FastCGI 参数列表。

```shell
cat /etc/nginx/fastcgi_params# fastcgi_param  QUERY_STRING       $query_string;# fastcgi_param  REQUEST_METHOD     $request_method;# fastcgi_param  CONTENT_TYPE       $content_type;# fastcgi_param  CONTENT_LENGTH     $content_length;# fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;# fastcgi_param  REQUEST_URI        $request_uri;# fastcgi_param  DOCUMENT_URI       $document_uri;# fastcgi_param  DOCUMENT_ROOT      $document_root;# fastcgi_param  SERVER_PROTOCOL    $server_protocol;# fastcgi_param  REQUEST_SCHEME     $scheme;# fastcgi_param  HTTPS              $https if_not_empty;# fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;# fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;# fastcgi_param  REMOTE_ADDR        $remote_addr;# fastcgi_param  REMOTE_PORT        $remote_port;# fastcgi_param  SERVER_ADDR        $server_addr;# fastcgi_param  SERVER_PORT        $server_port;# fastcgi_param  SERVER_NAME        $server_name;# PHP only, required if PHP was built with --enable-force-cgi-redirect# fastcgi_param  REDIRECT_STATUS    200;
```

如你所见，此文件还包含 `REQUEST_METHOD` 参数。 可以在配置中包含此文件，而不是手动传递它：

```conf
user www-data;events {}http {      include /etc/nginx/mime.types;      server {          listen 80;          server_name nginx-handbook.test;          root /srv/nginx-handbook-projects/php-demo;          index index.php;          location / {              try_files $uri $uri/ =404;          }          location ~ \.php$ {              fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;              fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;              include /etc/nginx/fastcgi_params;      }   }}
```

服务应该表现得一样。除了 `fastcgi_params` 文件，可能还会遇到包含一组稍微不同的参数的 `fastcgi.conf` 文件。 我建议你避免这种情况发生，因为它与它的行为有些不一致。

## 如何使用 NGINX 作为负载均衡器

由于 NGINX 的反向代理设计，可以轻松地将其配置为负载均衡器。

我已经在本文附带的代码仓库库中添加了一个演示。如果你已经在 `/srv/nginx-handbook-projects/` 目录中克隆了代码仓库，那么演示应该在 `/srv/nginx-handbook-projects/load-balancer-demo/` 目录中。

在现实生活中，分布在多个服务器上的大型项目可能需要负载均衡。但是对于这个简单的演示，我创建了三个非常简单的 Node.js 服务，响应服务编号和 200 状态代码。

为了让这个演示工作，你需要在服务器上安装 Node.js。可以在此[链接](https://github.com/nodesource/distributions#debinstall) 中找到说明以帮助你安装它。

除此之外，还需要 [PM2](https://pm2.keymetrics.io/) 来守护本演示中提供的 Node.js 服务。

如果还没有安装，请通过执行 `sudo npm install -g pm2` 来安装 PM2。 安装完成后，执行以下命令启动三个 Node.js 服务：

```shell
pm2 start /srv/nginx-handbook-projects/load-balancer-demo/server-1.jspm2 start /srv/nginx-handbook-projects/load-balancer-demo/server-2.jspm2 start /srv/nginx-handbook-projects/load-balancer-demo/server-3.jspm2 list# ┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐# │ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │# ├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤# │ 0  │ server-1           │ fork     │ 0    │ online    │ 0%       │ 37.4mb   │# │ 1  │ server-2           │ fork     │ 0    │ online    │ 0%       │ 37.2mb   │# │ 2  │ server-3           │ fork     │ 0    │ online    │ 0%       │ 37.1mb   │# └────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

三个 Node.js 服务应该分别运行在 localhost:3001、localhost:3002、localhost:3003 上。

现在更新配置如下：

```conf
events {}http {    upstream backend_servers {        server localhost:3001;        server localhost:3002;        server localhost:3003;    }    server {        listen 80;        server_name nginx-handbook.test;        location / {            proxy_pass http://backend_servers;        }    }}
```

`server` 上下文中的配置与已经看到的相同。但是，`upstream`上下文是新的。NGINX 中的 upstream 是一组可以被视为单个后端的服务器。

所以你开始使用 PM2 启动的三台服务器可以放在一个 upstream，可以让 NGINX 均衡它们之间的负载。

要测试配置，必须向服务器发送大量请求。 可以使用 bash 中的 `while` 循环自动执行该过程：

```shell
while sleep 0.5; do curl http://nginx-handbook.test; done# response from server - 2.# response from server - 3.# response from server - 1.# response from server - 2.# response from server - 3.# response from server - 1.# response from server - 2.# response from server - 3.# response from server - 1.# response from server - 2.
```

可以通过按键盘上的 `Ctrl + C` 来取消循环。从服务器的响应中可以看出，NGINX 正在自动对服务器进行负载均衡。

当然，更大的项目规模，负载均衡可能比这复杂得多。但本文的目的是让你入门，相信你现在对 NGINX 负载均衡有了基本的了解。 你可以通过执行 `pm2 stop server-1 server-2 server-3` 命令来停止三个正在运行的服务器（建议如此）。

## 如何优化 NGINX 以获得最大性能

在本文的这一部分中，将了解使服务器获得最大性能的多种方法。

其中一些方法是特定于应用程序的，这意味着它们可能需要根据你的应用程序要求进行调整。但其中一些是普适的优化手段。

就像前几节一样，在这一节中配置更改会很频繁，所以不要忘记每次验证和重新加载配置文件。

### 如何配置工作进程和工作连接

正如我在上一节中已经提到的，NGINX 可以产生多个工作进程，每个进程能够处理数千个请求。

```shell
sudo systemctl status nginx# ● nginx.service - A high performance web server and a reverse proxy server#      Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)#      Active: active (running) since Sun 2021-04-25 08:33:11 UTC; 5h 45min ago#        Docs: man:nginx(8)#    Main PID: 3904 (nginx)#       Tasks: 2 (limit: 1136)#      Memory: 3.2M#      CGroup: /system.slice/nginx.service#              ├─ 3904 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;#              └─16443 nginx: worker process
```

如你所见，现在系统上只有一个 NGINX 工作进程。 但是，可以通过对配置文件更改此数字。

```conf
worker_processes 2;events {}http {    server {        listen 80;        server_name nginx-handbook.test;        return 200 "worker processes and worker connections configuration!\n";    }}
```

在 `main` 上下文中编写的 `worker_process` 指令负责设置要生成的工作进程的数量。 现在再次检查 NGINX 服务，你应该会看到两个工作进程：

```shell
sudo systemctl status nginx# ● nginx.service - A high performance web server and a reverse proxy server#      Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)#      Active: active (running) since Sun 2021-04-25 08:33:11 UTC; 5h 54min ago#        Docs: man:nginx(8)#     Process: 22610 ExecReload=/usr/sbin/nginx -g daemon on; master_process on; -s reload (code=exited, status=0/SUCCESS)#    Main PID: 3904 (nginx)#       Tasks: 3 (limit: 1136)#      Memory: 3.7M#      CGroup: /system.slice/nginx.service#              ├─ 3904 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;#              ├─22611 nginx: worker process#              └─22612 nginx: worker process
```

设置工作进程的数量很容易，但确定工作进程的最佳数量需要更多的工作。

工作进程本质上是异步的。 这意味着它们将尽可能快地处理传入的请求。

现在假设你的服务器在单核处理器上运行。 如果将工作进程数设置为 1，则该单个进程将使用 100% 的 CPU 容量。 但是如果将其设置为 2，则两个进程将能够分别使用 50% 的 CPU。 所以增加工作进程的数量并不意味着更好的性能。

确定最佳工作进程数的经验法则是 **工作进程数 = CPU 内核数**。

如果你在具有双核 CPU 的服务器上运行，则应将工作进程数设置为 2。在四核中，应将其设置为 4...明白了吧。

在 Linux 上可以用如下命令确定服务器上的 CPU 数量。

```shell
nproc# 1
```

我在单 CPU 虚拟机上运行，所以 `nproc` 检测到有一个 CPU。既然已经知道了 CPU 的数量，剩下要做的就是在配置中设置数量。

这一切都很好，但是每次升级服务器并且 CPU 数量发生变化时，都必须手动更新服务器配置。

NGINX 提供了一种更好的方法来处理这个问题。 可以简单地将工作进程的数量设置为 `auto`，NGINX 将根据 CPU 的数量自动设置进程的数量。

```conf
worker_processes auto;events {}http {    server {        listen 80;        server_name nginx-handbook.test;        return 200 "worker processes and worker connections configuration!\n";    }}
```

再次检查 NGINX 进程：

```shell
sudo systemctl status nginx# ● nginx.service - A high performance web server and a reverse proxy server#      Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)#      Active: active (running) since Sun 2021-04-25 08:33:11 UTC; 6h ago#        Docs: man:nginx(8)#     Process: 22610 ExecReload=/usr/sbin/nginx -g daemon on; master_process on; -s reload (code=exited, status=0/SUCCESS)#    Main PID: 3904 (nginx)#       Tasks: 2 (limit: 1136)#      Memory: 3.2M#      CGroup: /system.slice/nginx.service#              ├─ 3904 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;#              └─23659 nginx: worker process
```

工作进程的数量又恢复为 1，因为这是该服务器的最佳选择。

除了工作进程之外，还有工作连接，表示单个工作进程可以处理的最大连接数。

就像工作进程的数量一样，这个数字也与 CPU 核心数量以及操作系统每个核心允许打开的文件数量有关。

在 Linux 上用这个命令查看这个数字：

```shell
ulimit -n# 1024
```

现在有了这个数字，接下来在配置中设置它：

```conf
worker_processes auto;

events {
    worker_connections 1024;
}

http {

    server {

        listen 80;
        server_name nginx-handbook.test;

        return 200 "worker processes and worker connections configuration!\n";
    }
}
```

`worker_connections` 指令负责设置配置中的工作连接数。 这也是第一次使用 `events` 上下文。

在上一节中，我提到此上下文用于设置 NGINX 在一般级别上使用的值。工作连接配置就是这样的一个例子。

### 如何缓存静态内容

优化服务器的第二种技术是缓存静态内容。 无论使用哪种应用程序，总会提供一定数量的静态内容，例如样式表、图像等。

考虑到这些内容不太可能经常更改，最好将它们缓存一段时间。NGINX 实现起来很简单。

```conf
worker_processes auto;

events {
    worker_connections 1024;
}

http {

    include /env/nginx/mime.types;

    server {

        listen 80;
        server_name nginx-handbook.test;

        root /srv/nginx-handbook-demo/static-demo;
        
        location ~* \.(css|js|jpg)$ {
            access_log off;
            
            add_header Cache-Control public;
            add_header Pragma public;
            add_header Vary Accept-Encoding;
            expires 1M;
        }
    }
}
```

通过编写`location ~* .(css|js|jpg)$`，指示 NGINX 匹配请求以 `.css`、`.js` 和 `.jpg` 结尾的文件。

在我的应用程序中，即使用户提交不同的格式，我通常也以 [WebP](https://developers.google.com/speed/webp) 格式存储图像。这样，配置静态缓存对我来说变得更加容易。

可以使用 `add_header` 指令在对客户端的响应中包含一个标头。之前你已经看到了 `proxy_set_header` 指令，用于在对后端服务器的持续请求中设置标头。另一方面，`add_header` 指令仅将给定的标头添加到响应中。

通过将 `Cache-Control` 标头设置为 public，告诉客户端这个内容可以以任何方式缓存。`Pragma` 标头只是一个旧版本的 `Cache-Control` 标头并且或多或少地做了相同的事情。

下一个标头 `Vary` 负责让客户端知道这个缓存的内容可能会有所不同。

`Accept-Encoding` 的值意味着内容可能会根据客户端接受的内容编码而有所不同。这将在下一节中进一步阐明。

最后，`expires` 指令可以方便地设置 `Expires` 标头 `expires` 指令占用此缓存有效的持续时间。通过将其设置为“1M”，告诉 NGINX 将内容缓存一个月。 还可以将其设置为 `10m` 10 minutes、`24h` 24 hours，等等。

现在要测试配置，从服务器发送对 nginx-handbook.jpg 文件的请求：

```shell
curl -I http://nginx-handbook.test/the-nginx-handbook.jpg

# HTTP/1.1 200 OK
# Server: nginx/1.18.0 (Ubuntu)
# Date: Sun, 25 Apr 2021 15:58:22 GMT
# Content-Type: image/jpeg
# Content-Length: 19209
# Last-Modified: Sun, 25 Apr 2021 08:35:33 GMT
# Connection: keep-alive
# ETag: "608529d5-4b09"
# Expires: Tue, 25 May 2021 15:58:22 GMT
# Cache-Control: max-age=2592000
# Cache-Control: public
# Pragma: public
# Vary: Accept-Encoding
# Accept-Ranges: bytes
```

如你所见，标头已添加到响应中，任何主流浏览器都应该能够解释它们。

### 如何压缩响应

要展示的最后一种优化技术非常简单：压缩响应以减小其大小。

```conf
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    include /env/nginx/mime.types;

    gzip on;
    gzip_comp_level 3;

    gzip_types text/css text/javascript;

    server {

        listen 80;
        server_name nginx-handbook.test;

        root /srv/nginx-handbook-demo/static-demo;
        
        location ~* \.(css|js|jpg)$ {
            access_log off;
            
            add_header Cache-Control public;
            add_header Pragma public;
            add_header Vary Accept-Encoding;
            expires 1M;
        }
    }
}
```

[GZIP](https://www.gnu.org/software/gzip/) 是一种流行的文件格式，被应用程序用于文件压缩和解压缩。NGINX 可以使用 `gzip` 指令利用这种格式压缩响应。

通过在 `http` 上下文中编写 `gzip on`，可以指示 NGINX 压缩响应。 `gzip_comp_level` 指令设置压缩级别。可以将其设置为非常高的数字，但这并不能保证更好的压缩。设置 1 - 4 之间的数字可提供有效的结果。例如，我喜欢将其设置为 3。

默认情况下，NGINX 压缩 HTML 响应。 要压缩其他文件格式，必须将它们作为参数传递给 `gzip_types` 指令。 通过编写`gzip_types text/css text/javascript;`，告诉 NGINX 使用 text/css 和 text/javascript 的 mime 类型压缩任何文件。

在 NGINX 中配置压缩是不够的。客户端必须请求压缩响应而不是未压缩响应。我希望你记得上一节关于缓存的 `add_header Vary Accept-Encoding;` 行。 此标头让客户端知道响应可能会根据客户端接受的内容而有所不同。

例如，如果想从服务器请求未压缩版本的 mini.min.css 文件，可以执行以下操作：

```shell
curl -I http://nginx-handbook.test/mini.min.css# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Sun, 25 Apr 2021 16:30:32 GMT# Content-Type: text/css# Content-Length: 46887# Last-Modified: Sun, 25 Apr 2021 08:35:33 GMT# Connection: keep-alive# ETag: "608529d5-b727"# Expires: Tue, 25 May 2021 16:30:32 GMT# Cache-Control: max-age=2592000# Cache-Control: public# Pragma: public# Vary: Accept-Encoding# Accept-Ranges: bytes
```

如你所见，没有开启压缩的。 现在，如果你想请求文件的压缩版本，则必须发送额外的标头。

```shell
curl -I -H "Accept-Encoding: gzip" http://nginx-handbook.test/mini.min.css# HTTP/1.1 200 OK# Server: nginx/1.18.0 (Ubuntu)# Date: Sun, 25 Apr 2021 16:31:38 GMT# Content-Type: text/css# Last-Modified: Sun, 25 Apr 2021 08:35:33 GMT# Connection: keep-alive# ETag: W/"608529d5-b727"# Expires: Tue, 25 May 2021 16:31:38 GMT# Cache-Control: max-age=2592000# Cache-Control: public# Pragma: public# Vary: Accept-Encoding# Content-Encoding: gzip
```

正如你在响应头中看到的，`Content-Encoding` 现在被设置为 `gzip`，这意味着这是文件的压缩版本。

现在，如果要比较文件大小的差异，可以执行以下操作：

```shell
cd ~mkdir compression-test && cd compression-testcurl http://nginx-handbook.test/mini.min.css > uncompressed.csscurl -H "Accept-Encoding: gzip" http://nginx-handbook.test/mini.min.css > compressed.cssls -lh# -rw-rw-r-- 1 vagrant vagrant 9.1K Apr 25 16:35 compressed.css# -rw-rw-r-- 1 vagrant vagrant  46K Apr 25 16:35 uncompressed.css
```

该文件的未压缩版本为“46K”，压缩版本为“9.1K”，几乎小六倍。线上的站点样式表会的更大，压缩可以使响应文件更小、响应速度更快。

## 如何理解主配置文件

我希望你记得你在前面部分重命名的原始 `nginx.conf` 文件。 根据 [Debian wiki](https://wiki.debian.org/Nginx/DirectoryStructure)，这个文件应该由 NGINX 维护者而不是服务器管理员来更改，除非他们确切地知道他们在做什么。

是在整篇文章中，我已经教你在这个文件中配置服务器。在本节中，我将介绍如何在不更改 `nginx.conf` 文件的情况下配置服务器。

首先，首先删除或重命名修改后的 `nginx.conf` 文件并恢复原来的文件：

```shell
sudo rm /etc/nginx/nginx.confsudo mv /etc/nginx/nginx.conf.backup /etc/nginx/nginx.confsudo nginx -s reload
```

现在 NGINX 应该回到它的原始状态。让我们通过执行 `sudo cat /etc/nginx/nginx.conf` 文件再次查看该文件的内容：

```conf
user www-data;worker_processes auto;pid /run/nginx.pid;include /etc/nginx/modules-enabled/*.conf;events {	worker_connections 768;	# multi_accept on;}http {	##	# Basic Settings	##	sendfile on;	tcp_nopush on;	tcp_nodelay on;	keepalive_timeout 65;	types_hash_max_size 2048;	# server_tokens off;	# server_names_hash_bucket_size 64;	# server_name_in_redirect off;	include /etc/nginx/mime.types;	default_type application/octet-stream;	##	# SSL Settings	##	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE	ssl_prefer_server_ciphers on;	##	# Logging Settings	##	access_log /var/log/nginx/access.log;	error_log /var/log/nginx/error.log;	##	# Gzip Settings	##	gzip on;	# gzip_vary on;	# gzip_proxied any;	# gzip_comp_level 6;	# gzip_buffers 16 8k;	# gzip_http_version 1.1;	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;	##	# Virtual Host Configs	##	include /etc/nginx/conf.d/*.conf;	include /etc/nginx/sites-enabled/*;}#mail {#	# See sample authentication script at:#	# http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript# #	# auth_http localhost/auth.php;#	# pop3_capabilities "TOP" "USER";#	# imap_capabilities "IMAP4rev1" "UIDPLUS";# #	server {#		listen     localhost:110;#		protocol   pop3;#		proxy      on;#	}# #	server {#		listen     localhost:143;#		protocol   imap;#		proxy      on;#	}#}
```

现在应该能够看懂此文件。在主上下文 `user www-data;` 中，`worker_processes auto;` 行已经介绍过，不在赘述。

`pid /run/nginx.pid;` 行设置 NGINX 进程的进程 ID，`include /etc/nginx/modules-enabled/*.conf;` 引入 `/etc/nginx/ modules-enabled/` 目录的配置文件。

该目录用于存放 NGINX 动态模块。 我在本文中没有涉及动态模块，所以我将跳过它。

现在在 `http` 上下文中，在基本设置下，可以看到一些常用的优化技术。以下是这些技术的作用：

- `sendfile on;` 禁用静态文件的缓冲。
- `tcp_nopush on;` 允许在一个数据包中发送响应头。
- `tcp_nodelay on;` 禁用 [Nagle's Algorithm](https://en.wikipedia.org/wiki/Nagle's_algorithm) 导致更快的静态文件传输。

`keepalive_timeout` 指令指示保持连接打开的时间，`types_hash_maxsize` 指令设置类型哈希映射的大小。 默认情况下，它还包括 `mime.types` 文件。

我将跳过 SSL 设置，因为我不打算在本文介绍它们。我们已经讨论了日志记录和 gzip 设置。 可能会看到一些关于 gzip 的指令的注释内容。只要你了解自己在做什么，就可以自定义这些设置。

可以使用 `mail` 上下文将 NGINX 配置为邮件服务器。 到目前为止，我们只讨论了 NGINX 作为 Web 服务器，所以我也将跳过这一点。

现在在虚拟主机设置下，应该看到如下两行：

```conf
### Virtual Host Configs##include /etc/nginx/conf.d/*.conf;include /etc/nginx/sites-enabled/*;
```

这两行指示 NGINX 引入在 `/etc/nginx/conf.d/` 和 `/etc/nginx/sites-enabled/` 目录中找到的所有配置文件。

看到这两行后，人们往往会把这两个目录作为放置配置文件的理想位置，但这是不对的。

还有另一个目录 `/etc/nginx/sites-available/` 用于存储虚拟主机的配置文件。`/etc/nginx/sites-enabled/` 目录用于存储指向 `/etc/nginx/sites-available/` 目录中文件的符号链接。

实际上有一个示例配置：

```shell
ln -lh /etc/nginx/sites-enabled/# lrwxrwxrwx 1 root root 34 Apr 25 08:33 default -> /etc/nginx/sites-available/default
```

如你所见，该目录包含指向 `/etc/nginx/sites-available/default` 文件的符号链接。

思路是在 `/etc/nginx/sites-available/` 目录中写入多个虚拟主机，并通过给他们创建到 `/etc/nginx/sites-enabled/` 目录的符号链接来激活它。

为了演示这个概念，让我们配置一个简单的静态服务器。 首先，删除默认的虚拟主机符号链接，在进程中停用这个配置：

```shell
sudo rm /etc/nginx/sites-enabled/defaultls -lh /etc/nginx/sites-enabled/# lrwxrwxrwx 1 root root 41 Apr 25 18:01 nginx-handbook -> /etc/nginx/sites-available/nginx-handbook
```

通过执行 `sudo touch /etc/nginx/sites-available/nginx-handbook` 创建一个新文件，并将输入以下内容：

```
server {    listen 80;    server_name nginx-handbook.test;    root /srv/nginx-handbook-projects/static-demo;}
```

`/etc/nginx/sites-available/` 目录中的文件包含在 main `http` 上下文中，因此它们应该只包含 `server` 块。

现在通过执行以下命令在 `/etc/nginx/sites-enabled/` 目录中创建一个指向此文件的符号链接：

```shell
sudo ln -s /etc/nginx/sites-available/nginx-handbook /etc/nginx/sites-enabled/nginx-handbookls -lh /etc/nginx/sites-enabled/# lrwxrwxrwx 1 root root 34 Apr 25 08:33 default -> /etc/nginx/sites-available/default# lrwxrwxrwx 1 root root 41 Apr 25 18:01 nginx-handbook -> /etc/nginx/sites-available/nginx-handbook
```

在验证和重新加载配置文件之前，必须重新打开日志文件。 否则，可能会收到权限拒绝错误。发生这种情况的原因是因为这次交换旧的 `nginx.conf` 文件导致进程 ID 不同。

```shell
sudo rm /var/log/nginx/*.logsudo touch /var/log/nginx/access.log /var/log/nginx/error.logsudo nginx -s reopen
```

最后，验证并重新加载配置文件：

```
sudo nginx -t# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok# nginx: configuration file /etc/nginx/nginx.conf test is successfulsudo nginx -s reload
```

访问服务器，应该会看到最初的 The NGINX 手册页面：

![](https://www.freecodecamp.org/news/content/images/2021/04/image-100.png)


如果已经正确配置了服务器并且仍然看到旧的 NGINX 欢迎页面，请执行硬刷新。浏览器通常会缓存旧的静态资源，需要做进行一些清理。

## 高级 NGINX 概念系列

服务器配置是一个很大的话题，本文的目的是让你了解 NGINX 的基础知识。还有一些重要和高级的主题没讲。

我计划在我的博客上写一些文章来解释诸如配置 HTTP2 协议、FastCGI 微缓存、速率限制、SSL 证书签名、动态模块等主题。

这样，该系列将成为易于参考且面向对基础有适当了解的人的文章集合。

所以请密切关注 [https://farhan.info/](https://farhan.info/)。 我希望在 2 或 3 周内发布第一篇文章。

## 表达您的支持

除了这本手册之外，我还编写了一些复杂主题的手册，例如 [Docker 容器化](/news/the-docker-handbook/) 和 [Kubernetes 的服务器编排](/news/the-kubernetes-handbook/) 都可以在 [freeCodeCamp News](/news/author/farhanhasin/) 上免费获得。

这些手册是我以简化晦涩技术为使命的成果。每本手册都需要花费大量的时间和精力来编写。

如果你喜欢我的写作并想让我保持动力，可以考虑在 [GitHub](https://github.com/fhsinchy/) 上 star，并在 [LinkedIn](https://www. linkedin.com/in/farhanhasin/）认可我的相关技能。

我也愿意接受建议和讨论。在 [Twitter](https://twitter.com/frhnhsin) 上关注我，并通过社交软件或 [电子邮件](mailto:mail@farhan.info) 联系我。

最后，考虑与他人分享资源，因为

> 分享知识是友谊最基本的行为。因为这是一种你可以给予一些东西而不会失去一些东西的方式。 — 理查德·斯托曼

## 尾声

我衷心感谢您花时间阅读本文。 我希望你享受你的学习时间并学习了 NGINX 的所有基本知识。

如果你喜欢我的作品，你可以在 [https://www.freecodecamp.org/news/author/farhanhasin/](/news/author/farhanhasin/) 上找到我的其他书籍，个人博客 [https://www.farhan.info/](https://www.farhan.info/blogs/) 同步更新。

你可以在 Twitter 上关注我 [@frhnhsin](https://twitter.com/frhnhsin) 或在 LinkedIn 上与我联系 [/in/farhanhasin](https://www.linkedin.com/in/farhanhasin/) 。
