> * 原文地址：[Where are Docker Images Stored? Docker Container Paths Explained Docker 教程——理解 Docker 容器路径和图像储存](https://www.freecodecamp.org/news/where-are-docker-images-stored-docker-container-paths-explained/)
> * 原文作者：Sebastian Barthel
> * 译者：
> * 校对者：

Where are Docker Images Stored? Docker Container Paths Explained
Docker has been widely adopted and is used to run and scale applications in production. Additionally, it can be used to start applications quickly by executing a single Docker command.

Companies also are investing more and more effort into improving development in local and remote Docker containers, which comes with a lot of advantages as well.

You can get the basic information about your Docker configuration by executing:

$ docker info

...
 Storage Driver: overlay2
 Docker Root Dir: /var/lib/docker
...
The output contains information about your storage driver and your docker root directory.

The storage location of Docker images and containers
A Docker container consists of network settings, volumes, and images. The location of Docker files depends on your operating system. Here is an overview for the most used operating systems:

Ubuntu: /var/lib/docker/
Fedora: /var/lib/docker/
Debian: /var/lib/docker/
Windows: C:\ProgramData\DockerDesktop
MacOS: ~/Library/Containers/com.docker.docker/Data/vms/0/
In macOS and Windows, Docker runs Linux containers in a virtual environment. Therefore, there are some additional things to know.

Docker for Mac
Docker is not natively compatible with macOS, so Hyperkit is used to run a virtual image. Its virtual image data is located in:  

~/Library/Containers/com.docker.docker/Data/vms/0

Within the virtual image, the path is the default Docker path /var/lib/docker.

You can investigate your Docker root directory by creating a shell in the virtual environment:

$ screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty 
You can kill this session by pressing Ctrl+a, followed by pressing k and y.

Docker for Windows
On Windows, Docker is a bit fractioned. There are native Windows containers that work similarly to Linux containers. Linux containers are run in a minimal Hyper-V based virtual environment.

The configuration and the virtual image to execute linux images are saved in the default Docker root folder.

C:\ProgramData\DockerDesktop

If you inspect regular images then you will get linux paths like:

$ docker inspect nginx

...
"UpperDir": "/var/lib/docker/overlay2/585...9eb/diff"
...
You can connect to the virtual image by:

docker run -it --privileged --pid=host debian nsenter -t 1 -m -u -i sh
There, you can go to the referenced location:

$ cd /var/lib/docker/overlay2/585...9eb/
$ ls -lah

drwx------    4 root     root        4.0K Feb  6 06:56 .
drwx------   13 root     root        4.0K Feb  6 09:17 ..
drwxr-xr-x    3 root     root        4.0K Feb  6 06:56 diff
-rw-r--r--    1 root     root          26 Feb  6 06:56 link
-rw-r--r--    1 root     root          57 Feb  6 06:56 lower
drwx------    2 root     root        4.0K Feb  6 06:56 work
The internal structure of the Docker root folder
Inside /var/lib/docker, different information is stored. For example, data for containers, volumes, builds, networks, and clusters.

$ ls -la /var/lib/docker

total 152
drwx--x--x   15 root     root          4096 Feb  1 13:09 .
drwxr-xr-x   13 root     root          4096 Aug  1  2019 ..
drwx------    2 root     root          4096 May 20  2019 builder
drwx------    4 root     root          4096 May 20  2019 buildkit
drwx------    3 root     root          4096 May 20  2019 containerd
drwx------    2 root     root         12288 Feb  3 19:35 containers
drwx------    3 root     root          4096 May 20  2019 image
drwxr-x---    3 root     root          4096 May 20  2019 network
drwx------    6 root     root         77824 Feb  3 19:37 overlay2
drwx------    4 root     root          4096 May 20  2019 plugins
drwx------    2 root     root          4096 Feb  1 13:09 runtimes
drwx------    2 root     root          4096 May 20  2019 swarm
drwx------    2 root     root          4096 Feb  3 19:37 tmp
drwx------    2 root     root          4096 May 20  2019 trust
drwx------   15 root     root         12288 Feb  3 19:35 volumes
Docker images
The heaviest contents are usually images. If you use the default storage driver overlay2, then your Docker images are stored in /var/lib/docker/overlay2. There, you can find different files that represent read-only layers of a Docker image and a layer on top of it that contains your changes.

Let’s explore the content by using an example:

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
The LowerDir contains the read-only layers of an image. The read-write layer that represents changes are part of the UpperDir. In my case, the NGINX UpperDir folder contains the log files:

$ ls -la /var/lib/docker/overlay2/585...9eb/diff

total 8
drwxr-xr-x    2 root     root    4096 Feb  2 08:06 .
drwxr-xr-x    3 root     root    4096 Feb  2 08:06 ..
lrwxrwxrwx    1 root     root      11 Feb  2 08:06 access.log -> /dev/stdout
lrwxrwxrwx    1 root     root      11 Feb  2 08:06 error.log -> /dev/stderr
The MergedDir represents the result of the UpperDir and LowerDir that is used by Docker to run the container. The WorkDir is an internal directory for overlay2 and should be empty.

Docker Volumes
It is possible to add a persistent store to containers to keep data longer than the container exists or to share the volume with the host or with other containers. A container can be started with a volume by using the -v option:

$ docker run --name nginx_container -v /var/log nginx
We can get information about the connected volume location by:

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
The referenced directory contains files from the location /var/log of the NGINX container.

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
Clean up space used by Docker
It is recommended to use the Docker command to clean up unused containers. Container, networks, images, and the build cache can be cleaned up by executing:

$ docker system prune -a
Additionally, you can also remove unused volumes by executing:

$ docker volumes prune
Summary
Docker is an important part of many people’s environments and tooling. Sometimes, Docker feels a bit like magic by solving issues in a very smart way without telling the user how things are done behind the scenes. Still, Docker is a regular tool that stores its heavy parts in locations that can be opened and changed.

Sometimes, storage can fill up quickly. Therefore, it’s useful to inspect its root folder, but it is not recommended to delete or change any files manually. Instead, the prune commands can be used to free up disk space.

I hope you enjoyed the article. If you like it and feel the need for a round of applause, follow me on Twitter.

I am a co-founder of our revolutionary journey platform called Explore The World. We are a young startup located in Dresden, Germany and will target the German market first. Reach out to me if you have feedback and questions about any topic.

Happy Docker exploring :)

References
Docker storagediver documentation
https://docs.docker.com/storage/storagedriver/
Documentation Overlay filesystem
https://www.kernel.org/doc/Documentation/filesystems/overlayfs.txt
