> -  原文地址：[How to Remove All Docker Images – A Docker Cleanup Guide](https://www.freecodecamp.org/news/how-to-remove-all-docker-images-a-docker-cleanup-guide/)
> -  原文作者：[
                    
                        Sebastian Sigl
                    
                ](https://www.freecodecamp.org/news/author/sesigl/)
> -  译者：
> -  校对者：

![How to Remove All Docker Images – A Docker Cleanup Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/docker-cleanup-guide.png)

Containers are everywhere in today’s tech world. The most popular technology for container management is [Docker](https://www.docker.com/). It makes using containers easy and helps you easily get applications up and running.

Unfortunately, this can take a lot of disk space, and you will eventually end up with a full disk.

It doesn't matter if you use Docker on your device or server. This guide shows you how you analyze used disk space and clean up different Docker resources.

All you need is a running Docker daemon and a terminal.

## How to analyze how much space Docker is using

You can look up how much space is used by running the following command:

```sh
$ docker system df

TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          61        16        21.1GB    15.25GB (72%)
Containers      69        0         12.26MB   12.26MB (100%)
Local Volumes   3         2         539.1MB   50.04MB (9%)
Build Cache     76        0         1.242GB   1.242GB
```

You can get more information by using the verbose option `-v`:

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

As you can see, you get information about:

-   Images space usage,
-   Containers space usage,
-   Local Volumes space usage, and
-   Build cache usage.

## How to Clean Up Everything in Docker

You can clean up everything or clean up specific resources in Docker like images, container volumes, or the build cache.

To clean up as much as possible excluding components that are in use, run this command:

```sh
$ docker system prune -a
```

`-a` includes unused and dangling containers. Not providing `-a` would only delete dangling images, which are untagged images that have no relationship to any other images.

If you want to clean up most Docker resources but still keep tagged images, you can execute this command:

```sh
$ docker system prune
```

This is all you need to free up disk space quickly. Additionally, you can clean up components separately.

Here are a few more useful commands:

### Clean up unused and dangling images

```sh
$ docker image prune
```

### Clean up dangling images only

```sh
$ docker image prune -a
```

### Clean up stopped containers

```sh
$ docker container prune
```

### Clean up unused volumes

```sh
$ docker volume prune
```

## How to Continuously Manage Your Used Docker Space Efficiently

You can run something on a daily basis or at startup. To skip the usual prompt, you need to add `-f` to the command you want to run automatically.

Keep in mind that this will cause you to download images much more often because you regularly remove Docker resources.

If you don’t have a disk space issue, then don’t worry. Just clean things up as soon as heavy Docker disk usage catches your attention.

## Conclusion

Today, there are many ways of cleaning up Docker disk space using the `docker` command. You can even execute these commands automatically if you want to clean up Docker resources regularly.

I hope you enjoyed the article.

If you liked it and felt the need to give me a round of applause or just want to get in touch, [follow me on Twitter](https://twitter.com/sesigl).

I work at eBay Kleinanzeigen, one of the world’s biggest classified companies. By the way, [we are hiring](https://jobs.ebayclassifiedsgroup.com/ebay-kleinanzeigen)!