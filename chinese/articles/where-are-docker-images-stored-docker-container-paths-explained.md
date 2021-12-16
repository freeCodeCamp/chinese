> * 原文地址：[Where are Docker Images Stored? Docker Container Paths Explained Docker 教程——理解 Docker 镜像和容器的存储路径](https://www.freecodecamp.org/news/where-are-docker-images-stored-docker-container-paths-explained/)
> * 原文作者：Sebastian Barthel
> * 译者：Humilitas
> * 校对者：

![Where are Docker Images Stored? Docker Container Paths Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/example-of-examples-word-embeddings_grey.jpg)

Docker 已经被广泛用在生产环境中运行和扩展应用程序。此外，它还支持通过一条命令快速启动应用。

许多公司投入越来越多的精力来优化本地和远程 Docker 容器中的开发流程，由此也带来了诸多好处。

执行以下命令可以查看 Docker 的配置信息：

```shell
$ docker info
```

输出的内容包含了存储驱动和 docker 根目录的信息。

## Docker 镜像和容器的存储路径

Docker 容器由网络文件、卷和镜像组成。Docker 文件的存储路径取决于你的操作系统。常用操作系统中的路径如下：

-   Ubuntu:  `/var/lib/docker/`
-   Fedora:  `/var/lib/docker/`
-   Debian:  `/var/lib/docker/`
-   Windows:  `C:\ProgramData\DockerDesktop`
-   MacOS:  `~/Library/Containers/com.docker.docker/Data/vms/0/~`

在 macOS 和 Windows 系统中，Docker 在一个虚拟机中运行 Linux 容器。关于这两种情况，你需要了解一些额外信息。

### Mac 系统中的 Docker

Docker 在 Mac 系统中并不是原生兼容的，所以需要使用 [Hyperkit][1] 来运行虚拟机。虚拟机数据存储在：

`/Library/Containers/com.docker.docker/Data/vms/0`

在虚拟机内部，Docker 的路径是默认的 `/var/lib/docker`。

在虚拟机中创建一个 shell 窗口来查看 Docker 根目录：

```shell
$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty 
```

可以按下 **Ctrl+a**，**k**，**y** 组合键来结束会话。

### Windows 系统中的 Docker

Windows 系统中，Docker 比较复杂，因为有类似于 Linux 容器的原生 Windows 容器，也有运行在基于 Hyper-V 的最小虚拟机中的 Linux 容器。

配置信息和运行 linux 镜像的虚拟机存储在默认的 Docker 根目录。

`C:\ProgramData\DockerDesktop`

查看常规镜像的信息，会得到 linux 系统中的路径，如：

```shell
$ docker inspect nginx

...
"UpperDir": "/var/lib/docker/overlay2/585...9eb/diff"
...
```

连接镜像：

```shell
docker run -it --privileged --pid=host debian nsenter -t 1 -m -u -i sh
```

现在，可以进入指定路径：

```shell
$ cd /var/lib/docker/overlay2/585...9eb/
$ ls -lah
```

## Docker 根目录的内部结构

`/var/lib/docker` 目录中保存着各种信息，例如：容器数据、卷、构建文件、网络文件和集群数据。

```shell
$ ls -la /var/lib/docker
```

### Docker 镜像

最大的文件通常是镜像。如果使用默认的 overlay2 存储驱动，Docker 镜像会保存在 `/var/lib/docker/overlay2` 目录。

通过一个示例来查看它的内容：

```shell
$ docker image pull nginx
$ docker image inspect nginx

[
    {
        "Id": "sha256:207...6e1",
        "RepoTags": [
            "nginx:latest"
        ],
        "RepoDigests": [
            "nginx@sha256:ad5...c6f"
        ],
        "Parent": "",
 ...
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 126698063,
        "VirtualSize": 126698063,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/585...9eb/diff:
                             /var/lib/docker/overlay2/585...9eb/diff",
                "MergedDir": "/var/lib/docker/overlay2/585...9eb/merged",
                "UpperDir": "/var/lib/docker/overlay2/585...9eb/diff",
                "WorkDir": "/var/lib/docker/overlay2/585...9eb/work"
            },
...
```

**LowerDir** 包含镜像的只读层，表示变更的读写层包含在 **UpperDir** 中。示例中，NGINX 镜像的 **UpperDir** 文件夹包含以下文件：

```shell
$ ls -la /var/lib/docker/overlay2/585...9eb/diff

total 8
drwxr-xr-x    2 root     root    4096 Feb  2 08:06 .
drwxr-xr-x    3 root     root    4096 Feb  2 08:06 ..
lrwxrwxrwx    1 root     root      11 Feb  2 08:06 access.log -> /dev/stdout
lrwxrwxrwx    1 root     root      11 Feb  2 08:06 error.log -> /dev/stderr
```

**MergedDir** 表示 **UpperDir** 和 **LowerDir** 合并的结果，Docker 用它来运行容器。**WorkDir** 是 overlay2 的内部目录，应该是空的。

### Docker 卷（Volumes）

可以利用卷来持久化容器内的数据，容器和宿主机之间、容器和容器之间也可以通过共享卷来共享数据。使用 **\-v** 选项可以让容器以挂载卷的方式启动：

```shell
$ docker run --name nginx_container -v /var/log nginx
```

查看挂载的卷的位置：

```shell
$ docker inspect nginx_container

...
"Mounts": [
            {
                "Type": "volume",
                "Name": "1e4...d9c",
                "Source": "/var/lib/docker/volumes/1e4...d9c/_data",
                "Destination": "/var/log",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
...
```

相应目录中包含来自 NGINX 容器 `/var/log` 目录中的文件。

```shell
$ ls -lah /var/lib/docker/volumes/1e4...d9c/_data

total 88
drwxr-xr-x    4 root     root        4.0K Feb  3 21:02 .
drwxr-xr-x    3 root     root        4.0K Feb  3 21:02 ..
drwxr-xr-x    2 root     root        4.0K Feb  3 21:02 apt
-rw-rw----    1 root     43             0 Jan 30 00:00 btmp
-rw-r--r--    1 root     root       34.7K Feb  2 08:06 dpkg.log
-rw-r--r--    1 root     root        3.2K Feb  2 08:06 faillog
-rw-rw-r--    1 root     43         29.1K Feb  2 08:06 lastlog
drwxr-xr-x    2 root     root        4.0K Feb  3 21:02 nginx
-rw-rw-r--    1 root     43             0 Jan 30 00:00 w
```

## 清理 Docker 使用的空间

建议使用 Docker 命令来清理不再使用的容器。可以使用以下命令清理容器、网络文件、镜像和构建缓存：

```shell
$ docker system prune -a
```

此外，也可以清除不再使用的卷：

```shell
$ docker volumes prune
```

## **总结**

Docker 是很多人开发环境和工具集的一部分，有时候，Docker 能够像魔法一样巧妙地解决许多问题，而用户完全不需要关心内部细节。不过，Docker 也是一个常规的工具，它将庞大的文件保存在用户可以打开和编辑的目录中。

有时候，它可能很快就把磁盘占满了，所以要经常检查它的根目录（的磁盘占用情况），但是不建议手动删除或编辑 Docker 文件，最好使用 prune 命令来释放磁盘空间。

---

希望你喜欢这篇文章，欢迎关注我的 [Twitter][2] 以示鼓励。

我是革命性的旅游平台 [Explore The World][3] 的联合创始人，我们是位于德国 Dresden 的一家初创公司，初期目标市场是德国。如果有任何反馈或疑问，欢迎与我联系。

Happy Docker exploring :)

---

## 参考文献

-   Docker 存储驱动文档
    [https://docs.docker.com/storage/storagedriver/][4]
-   Overlay 文件系统文档
    [https://www.kernel.org/doc/Documentation/filesystems/overlayfs.txt][5]

[1]: https://github.com/moby/hyperkit
[2]: https://twitter.com/Journerist
[3]: https://www.urlaubsbaron.de/
[4]: https://docs.docker.com/storage/storagedriver/
[5]: https://www.kernel.org/doc/Documentation/filesystems/overlayfs.txt
