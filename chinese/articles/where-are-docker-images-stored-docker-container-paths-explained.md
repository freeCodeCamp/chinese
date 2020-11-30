> * 原文地址：[Where are Docker Images Stored? Docker Container Paths Explained Docker 教程——理解 Docker 容器路径和图像储存](https://www.freecodecamp.org/news/where-are-docker-images-stored-docker-container-paths-explained/)
> * 原文作者：Sebastian Barthel
> * 译者：
> * 校对者：

![Where are Docker Images Stored? Docker Container Paths Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/example-of-examples-word-embeddings_grey.jpg)

Docker has been widely adopted and is used to run and scale applications in production. Additionally, it can be used to start applications quickly by executing a single Docker command.

Companies also are investing more and more effort into improving development in local and remote Docker containers, which comes with a lot of advantages as well.

You can get the basic information about your Docker configuration by executing:

```shell
$ docker info


```

The output contains information about your storage driver and your docker root directory.

## The storage location of Docker images and containers

A Docker container consists of network settings, volumes, and images. The location of Docker files depends on your operating system. Here is an overview for the most used operating systems:  

-   Ubuntu:  `/var/lib/docker/`
-   Fedora:  `/var/lib/docker/`
-   Debian:  `/var/lib/docker/`
-   Windows:  `C:\ProgramData\DockerDesktop`
-   MacOS:  `~/Library/Containers/com.docker.docker/Data/vms/0/~`

In macOS and Windows, Docker runs Linux containers in a virtual environment. Therefore, there are some additional things to know.

### Docker for Mac

Docker is not natively compatible with macOS, so  [Hyperkit][1]  is used to run a virtual image. Its virtual image data is located in:

`/Library/Containers/com.docker.docker/Data/vms/0`

Within the virtual image, the path is the default Docker path  `/var/lib/docker`.

You can investigate your Docker root directory by creating a shell in the virtual environment:

```shell
$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty 
```

You can kill this session by pressing  **Ctrl+a**, followed by pressing  **k**  and  **y**.

### Docker for Windows

On Windows, Docker is a bit fractioned. There are native Windows containers that work similarly to Linux containers. Linux containers are run in a minimal Hyper-V based virtual environment.

The configuration and the virtual image to execute linux images are saved in the default Docker root folder.

`C:\ProgramData\DockerDesktop`

If you inspect regular images then you will get linux paths like:

```shell
$ docker inspect nginx

```

You can connect to the virtual image by:

```shell
docker run -it --privileged --pid=host debian nsenter -t 1 -m -u -i sh
```

There, you can go to the referenced location:

```shell
$ cd /var/lib/docker/overlay2/585...9eb/
$ ls -lah

```

## The internal structure of the Docker root folder

Inside  `/var/lib/docker`, different information is stored. For example, data for containers, volumes, builds, networks, and clusters.

```shell
$ ls -la /var/lib/docker

```

### Docker images

The heaviest contents are usually images. If you use the default storage driver overlay2, then your Docker images are stored in  `/var/lib/docker/overlay2`. There, you can find different files that represent read-only layers of a Docker image and a layer on top of it that contains your changes.

Let’s explore the content by using an example:

```shell
$ docker image pull nginx
$ docker image inspect nginx

```

The  **LowerDir**  contains the read-only layers of an image. The read-write layer that represents changes are part of the  **UpperDir**. In my case, the NGINX  **UpperDir**  folder contains the log files:

```shell
$ ls -la /var/lib/docker/overlay2/585...9eb/diff

```

The  **MergedDir**  represents the result of the  **UpperDir**  and  **LowerDir**  that is used by Docker to run the container. The  **WorkDir**  is an internal directory for overlay2 and should be empty.

### Docker Volumes

It is possible to add a persistent store to containers to keep data longer than the container exists or to share the volume with the host or with other containers. A container can be started with a volume by using the  **\-v**  option:

```shell
$ docker run --name nginx_container -v /var/log nginx
```

We can get information about the connected volume location by:

```shell
$ docker inspect nginx_container

```

The referenced directory contains files from the location  `/var/log`  of the NGINX container.

```shell
$ ls -lah /var/lib/docker/volumes/1e4...d9c/_data

```

## Clean up space used by Docker

It is recommended to use the Docker command to clean up unused containers. Container, networks, images, and the build cache can be cleaned up by executing:

```shell
$ docker system prune -a
```

Additionally, you can also remove unused volumes by executing:

```shell
$ docker volumes prune
```

## **Summary**

Docker is an important part of many people’s environments and tooling. Sometimes, Docker feels a bit like magic by solving issues in a very smart way without telling the user how things are done behind the scenes. Still, Docker is a regular tool that stores its heavy parts in locations that can be opened and changed.

Sometimes, storage can fill up quickly. Therefore, it’s useful to inspect its root folder, but it is not recommended to delete or change any files manually. Instead, the prune commands can be used to free up disk space.

---

I hope you enjoyed the article. If you like it and feel the need for a round of applause,  [follow me on Twitter][2].

I am a co-founder of our revolutionary journey platform called  [Explore The World][3]. We are a young startup located in Dresden, Germany and will target the German market first. Reach out to me if you have feedback and questions about any topic.

Happy Docker exploring :)

---

## References

-   Docker storagediver documentation  
    [https://docs.docker.com/storage/storagedriver/][4]
-   Documentation Overlay filesystem  
    [https://www.kernel.org/doc/Documentation/filesystems/overlayfs.txt][5]

[1]: https://github.com/moby/hyperkit
[2]: https://twitter.com/Journerist
[3]: https://www.urlaubsbaron.de/
[4]: https://docs.docker.com/storage/storagedriver/
[5]: https://www.kernel.org/doc/Documentation/filesystems/overlayfs.txt
