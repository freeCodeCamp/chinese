> - 原文地址：[How to Remove All Docker Images – A Docker Cleanup Guide](https://www.freecodecamp.org/news/how-to-remove-all-docker-images-a-docker-cleanup-guide/)
> - 原文作者：[Sebastian Sigl](https://www.freecodecamp.org/news/author/sesigl/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Remove All Docker Images – A Docker Cleanup Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/docker-cleanup-guide.png)

容器在当今的技术世界中无处不在。最流行的容器管理技术是 [Docker](https://www.docker.com/)。它使使用容器变得简单，并帮助你轻松地让应用程序启动和运行。

不幸的是，这可能会占用大量的磁盘空间，最终你将会有一个完整的磁盘。

如果你在设备或服务器上使用Docker，这并不重要。本指南告诉你如何分析已使用的磁盘空间和清理不同的Docker资源。

你所需要的只是一个正在运行的Docker守护进程和一个终端。

## 如何分析Docker使用了多少空间

你可以通过运行下面的命令来查看有多少空间被使用:

```sh
$ docker system df

TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          61        16        21.1GB    15.25GB (72%)
Containers      69        0         12.26MB   12.26MB (100%)
Local Volumes   3         2         539.1MB   50.04MB (9%)
Build Cache     76        0         1.242GB   1.242GB
```

你可以通过使用verbose选项 `-v` 获得更多信息:

```sh
$ docker system df -v

REPOSITORY        TAG   IMAGE ID     CREATED       SIZE      SHARED 
teamatldocker/jira    e50b8390945c   4 weeks ago     842.3MB   0B       
vw                    ed9e125a8925   2 months ago    1.659GB   134.8MB 

Containers space usage:

CONTAINER ID   IMAGE                    COMMAND                   SIZE 
94e03a4a17d0   teamatldocker/jira       "/sbin/tini -- /usr/…"    1.4MB 

Local Volumes space usage:

VOLUME NAME                     LINKS     SIZE
play-with-jira_postgresqldata   1         84.19MB   
play-with-jira_jiradata         1         404.8MB

Build cache usage: 1.242GB

CACHE ID       CACHE TYPE     SIZE      CREATED        LAST USED 
oxil5sdicb91   regular        135MB     2 months ago   2 months ago  
kxz13fmdbodg   regular        13B       2 months ago   2 months ago 
nysus21ej7pf   regular        0B        2 months ago   2 months ago
```

正如你所看到的，你可以得到以下信息:

- 镜像空间的使用,
- 图像空间的使用,
- 本地卷的空间使用，以及
- 构建缓存的使用情况。

## 如何在Docker中清理一切

你可以清理一切，也可以清理Docker中的特定资源，如镜像、容器卷或构建缓存。

要尽可能地清理，不包括正在使用的组件，请运行这个命令:

```sh
docker system prune -a
```

`-a` 包括未使用的和悬空的容器。不提供`-a'将只删除悬空的镜像，这些镜像是没有标记的镜像，与任何其他镜像没有关系。

如果你想清理大部分Docker资源，但仍然保留有标签的镜像，你可以执行这个命令:

```sh
docker system prune
```

这就是你快速释放磁盘空间所需要的一切。此外，你还可以单独清理组件。

这里有几个更有用的命令:

### 清理未使用和悬空的镜像

```sh
docker image prune
```

### 只清理悬空的镜像

```sh
docker image prune -a
```

### 清理停止运行的容器

```sh
docker container prune
```

### 清理未使用的卷宗

```sh
docker volume prune
```

## 如何持续有效地管理你已使用的Docker空间

你可以在日常或启动时运行一些东西。要跳过通常的提示，你需要在你想自动运行的命令中添加`-f`。

请记住，这将导致你更频繁地下载镜像，因为你定期删除Docker资源。

如果你没有磁盘空间问题，那么不用担心。一旦Docker磁盘使用量过大引起你的注意，就立即清理。

## 结语

如今，有很多方法可以使用`docker`命令来清理Docker磁盘空间。如果你想定期清理Docker资源，你甚至可以自动执行这些命令。

我希望你喜欢这篇文章。

如果你喜欢它，觉得有必要给我点赞，或者只是想联系我，[在Twitter上关注我](https://twitter.com/sesigl)。

我在eBay Kleinanzeigen工作，这是全球最大的分类公司之一。顺便说一下，[我们正在招聘](https://jobs.ebayclassifiedsgroup.com/ebay-kleinanzeigen)!
