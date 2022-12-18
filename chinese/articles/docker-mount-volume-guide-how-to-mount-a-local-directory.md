> - 原文地址：[Docker Mount Volume – How To Mount a Local Directory](https://www.freecodecamp.org/news/docker-mount-volume-guide-how-to-mount-a-local-directory/)
> - 原文作者：[Sebastian Sigl](https://www.freecodecamp.org/news/author/sesigl/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Docker Mount Volume – How To Mount a Local Directory](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/Docker-mount-volume-guide.png)

容器使软件工程更容易、更有效，[Docker](https://www.docker.com/) 容器很受欢迎，也很容易使用。

容器对于本地开发来说是必不可少的。它们让你在本地环境中测试你的应用程序，并开始建立所需的基础设施。

Docker容器在是不变的。这意味着重新启动一个容器会删除你在容器中存储的所有数据。但是Docker提供了卷和绑定挂载，这是两种在Docker容器中持久保存数据的机制。

本教程将教你如何将本地目录绑定到你的Docker容器上，并交替使用docker管理的卷。了解了这两点，你就能在更多的用例中使用Docker容器，从而提高你的工作效率。

## 使用 `docker run -v` 进行本地目录挂载

> `docker run`命令首先在指定的镜像上创建一个可写的容器层，然后使用指定的命令启动。(来源 [docker.com](https://www.bing.com/search?form=MOZLBR&ptag=MOZZ0000000011&pc=MOZD&q=docker+run+)) 
使用参数`-v`允许你绑定一个本地目录。

`-v`或`--volume`允许你挂载本地目录和文件到你的容器。例如，你可以启动一个MySQL数据库并挂载数据目录，将实际数据存储在你挂载的目录中。

```shell
# run mysql container in the background

$ docker run --name mysql-db -v $(pwd)/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.28-debian

# show content of data directory
$ ls -la datadir
total 383848
-rw-r-----    1 sebarthel  staff    196608 Mar 26 22:47 #ib_16384_0.dblwr
-rw-r-----    1 sebarthel  staff   8585216 Mar 26 22:47 #ib_16384_1.dblwr
drwxr-x---   12    sebarthel  staff       384 Mar 26 22:47 #innodb_temp
drwxr-xr-x@  27 sebarthel  staff       864 Mar 26 22:47 .
drwxr-xr-x    3 sebarthel  staff        96 Mar 26 22:47 ..
-rw-r-----    1 sebarthel  staff        56 Mar 26 22:47 auto.cnf
-rw-r-----    1 sebarthel  staff       913 Mar 26 22:47 binlog.000001
(more directories)

# stop mysql container
docker rm -f mysql-db
```

绑定目录是一种双向的同步。你在主机上改变的每个文件都会在容器中改变，而容器中改变的每个文件都会在主机上改变。因此，如果你停止和启动数据库，你可以挂载同一个目录，你的配置和存储的数据将是可用的。

这种方法的优点是使用起来很直接，而且容易访问。你应该使用绑定的本地目录来存放你想在主机上改变或观察的文件，如配置文件和日志文件。

## 如何使用Docker Volumes来保存变化

你可以使用Docker卷，而不是绑定你的本地目录。Docker卷是你的Docker存储目录中的某个地方的一个目录，可以挂载到一个或许多容器上。它们是完全可管理的，不依赖于某些操作系统。

让我们创建一个Docker卷并挂载它来保存MySQL数据:

```shell
# create volume
docker volume create mysql-data

# run mysql container in the background
$ docker run --name mysql-db -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest

# stop mysql container
docker rm -f mysql-db

# remove volume
docker volume remove mysql-data
```

在删除Docker卷之前，你可以打开你的Docker GUI，通过点击`data`标签来检查卷。

![docker-ui-volume](https://www.freecodecamp.org/news/content/images/2022/03/docker-ui-volume.png)

你可以看到这些文件，但它们被隔离在一个Docker卷中。建议使用它们来保存那些你不需要从主机系统观察或改变的文件。众所周知，这种方法比本地目录绑定有更好的性能。

# 总结

当你知道如何持久化你的数据，并且在停止容器时不丢失它们时，Docker容器会变得更加强大。

你通过提供Docker运行`-v`参数将本地目录和卷绑定到一个容器。你需要给出绝对的本地路径或卷的名称，并将其映射到容器内的目录`-v <source>:<target>`。

我希望你喜欢这篇文章。

如果你喜欢它，觉得有必要给我鼓掌，或者只是想联系我，[在Twitter上关注我](https://twitter.com/sesigl)。

我在eBay Kleinanzeigen工作，这是全球最大的分类公司之一。顺便说一下，[我们正在招聘](https://www.ebay-kleinanzeigen.de/careers)!

## 参考资料

- [如何在Docker容器内挂载一个目录](https://towardsdatascience.com/how-to-mount-a-directory-inside-a-docker-container-4cee379c298b)
- [使用MySql的Docker镜像](https://hub.docker.com/_/mysql/)
- [Docker-Compose卷或绑定挂载语法](https://maximorlov.com/docker-compose-syntax-volume-or-bind-mount/)
- [如何暂停和恢复Docker容器](https://www.thegeekdiary.com/how-to-pause-and-resume-docker-containers/)
- [Docker卷与绑定挂载](https://blog.logrocket.com/docker-volumes-vs-bind-mounts/)
- [Docker文档：卷创建的命令](https://docs.docker.com/engine/reference/commandline/volume_create/)
- [Docker文档：卷的备份和恢复](https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes)
- [Docker容器桌面管理端](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
