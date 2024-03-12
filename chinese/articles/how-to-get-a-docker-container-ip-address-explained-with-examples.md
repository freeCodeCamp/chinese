> * 原文地址：[How to Get A Docker Container IP Address - Explained with Examples 如何获取 Docker 容器的 IP 地址](https://www.freecodecamp.org/news/how-to-get-a-docker-container-ip-address-explained-with-examples/)
> * 原文作者：Marcelo Costa
> * 译者：ZhichengChen
> * 校对者：

![How to Get A Docker Container IP Address - Explained with Examples](https://images.unsplash.com/photo-1545935950-b7a28791ad7a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Docker 提供了在隔离环境（容器）中打包和运行应用的能力。

你一定会想 - 得了吧，解释 Docker 的文章随处可见。

![](https://www.freecodecamp.org/news/content/images/2020/06/docker-i-see.jpg)

别担心，我们会跳过基础知识。本文的目标人群需要对 Docker 和容器有一定的了解。

但是你是否也曾好奇过应该怎样获得 Docker 容器的 IP 地址呢？

## Docker 网络解释
 
首先来了解一下 Docker 的网络是如何工作的。首先是默认的`bridge` 网络。当使用 Docker 时，如果没有指定其它驱动默认会使用桥接网络。

![](https://www.freecodecamp.org/news/content/images/2020/06/docker-network.png)

Docker 网络图摘自[了解 Docker 网络驱动程序及其用例][1]

 `bridge` 网络是主机内部的专用网络，容器可以通过它进行通信。也可暴漏端口在外部访问。

单独容器中的应用通过桥接网络互相通讯时。

在上图中 `db`  和  `web` 可以通过用户创建的桥接网络 `mybridge` 互相通讯。

如果还没有在 Docker 中添加网络过，可以看到类似下面的信息：

```bash

$ docker network ls

NETWORK ID          NAME                  DRIVER              SCOPE
c3cd46f397ce        bridge                bridge              local
ad4e4c24568e        host                  host                local
1c69593fc6ac        none                  null                local


```

默认的  `bridge` 网络显示在列表中，下面还有 `host`  和  `none`。我们会暂时忽略这两个网络，在接下来的例子使用  `bridge` 网络。

## Docker 容器的 IP 地址

默认情况下，会为连接到容器的每个 Docker 网络分配一个 IP 地址，并为每个网络分配一个默认的子网掩码，用作稍后分配 IP 的地址池。

通常 Docker 默认使用 **172.17. 0.0/16** 作为容器网络的子网。

为了便于理解，运行一个真实的用例。

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/flamenco-done.png)

### Docker 例子
 
作为说明，我们会使用 Hive 和 Hadoop 环境，一共 5 个 Docker 容器。

检查将要执行的 `docker-compose.yml` 如下文件：

```
version: "3"
services:
  namenode:
    image: bde2020/hadoop-namenode:2.0.0-hadoop2.7.4-java8
    volumes:
      - namenode:/hadoop/dfs/name
    environment:
      - CLUSTER_NAME=test
    env_file:
      - ./hadoop-hive.env
    ports:
      - "50070:50070"
  datanode:
    image: bde2020/hadoop-datanode:2.0.0-hadoop2.7.4-java8
    volumes:
      - datanode:/hadoop/dfs/data
    env_file:
      - ./hadoop-hive.env
    environment:
      SERVICE_PRECONDITION: "namenode:50070"
    ports:
      - "50075:50075"
  hive-server:
    image: bde2020/hive:2.3.2-postgresql-metastore
    env_file:
      - ./hadoop-hive.env
    environment:
      HIVE_CORE_CONF_javax_jdo_option_ConnectionURL: "jdbc:postgresql://hive-metastore/metastore"
      SERVICE_PRECONDITION: "hive-metastore:9083"
    ports:
      - "10000:10000"
  hive-metastore:
    image: bde2020/hive:2.3.2-postgresql-metastore
    env_file:
      - ./hadoop-hive.env
    command: /opt/hive/bin/hive --service metastore
    environment:
      SERVICE_PRECONDITION: "namenode:50070 datanode:50075 hive-metastore-postgresql:5432"
    ports:
      - "9083:9083"
  hive-metastore-postgresql:
    image: bde2020/hive-metastore-postgresql:2.3.0

```

[代码源自  **docker-hive**  GitHub][2]

没人想要阅读**这么长**的配置文件对吗？这是图解：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-21-at-2.48.18-PM.png)

好多了，来启动这些容器吧：

```bash
docker-compose up -d

```

可以看到 5 个容器：

```bash

$ docker ps --format \
"table {{.ID}}\t{{.Status}}\t{{.Names}}"

CONTAINER ID        STATUS                   NAMES
158741ba0339        Up 1 minutes             dockerhive_hive-metastore-postgresql
607b00c25f29        Up 1 minutes             dockerhive_namenode
2a2247e49046        Up 1 minutes             dockerhive_hive-metastore
7f653d83f5d0        Up 1 minutes (healthy)   dockerhive_hive-server
75000c343eb7        Up 1 minutes (healthy)   dockerhive_datanode

```

接下来检查一下 Docker 的网络：

```bash

$ docker network ls

NETWORK ID          NAME                  DRIVER              SCOPE
c3cd46f397ce        bridge                bridge              local
9f6bc3c15568        docker-hive_default   bridge              local
ad4e4c24568e        host                  host                local
1c69593fc6ac        none                  null                local

```

等一下，怎么有一个没见过的 `docker-hive_default` 网络。

默认情况下，docker compose 会为应用设置一个网络。 应用的网络会根据 “project name” 来命名，该名称源自其所在目录的名称。

由于项目目录是 `docker-hive`，这就解释了新出现的网络。

接下来的例子解释如何获取容器的 IP 地址。

## 如何获得容器的 IP 地址 - 例子

接下来，就是见证奇迹的时刻。

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/bermuda-logged-out-1.png)

### 1\. 使用 Docker Inspect

Docker inspect 是检索 Docker 对象底层信息的很棒的方式。可以以非常简单的方式在返回的 JSON 里找出想要的字段。

所以 `dockerhive_datanode` 里面有我们想要的 IP 地址吗？

```bash
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 75000c343eb7

172.18.0.5
```

之前不是说 Docker 使用容器网络默认的  **172.17. 0.0/16** 的子网吗？为什么和返回的 IP 地址 **172.18.0.5** 并不在一个网段呢？

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-22-at-3.25.07-PM.png)

图片截自 [IP address in CIDR range][3]

需要查看一下网络设置才能解答它：

```bash
$ docker network inspect -f '{{range .IPAM.Config}}{{.Subnet}}{{end}}'  9f6bc3c15568

172.18.0.0/16

```

我们在虚拟计算引擎里执行了这个例子，在这个测试里，docker 网络分配了一个不同的子网  **172.18.0.0/16**。原来如此。

另外，我们可以找到在 `docker-hive_default` 网络内所有的 IP 地址。

也就是不必去每个容器里找它的 IP：

```bash
$ docker network inspect -f '{{json .Containers}}' 9f6bc3c15568 | jq '.[] | .Name + ":" + .IPv4Address'

"dockerhive_hive-metastore-postgresql:172.18.0.6/16"
"dockerhive_hive-metastore:172.18.0.2/16"
"dockerhive_namenode:172.18.0.3/16"
"dockerhive_datanode:172.18.0.5/16"
"dockerhive_hive-server:172.18.0.4/16"

```

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/cherry-success.png)

上面使用了[**jq**][4] 来解析 `Containers` 映射对象。

### 2\. 使用 Docker exec

在接下来的例子里会用到 `dockerhive_namenode`。

```bash
$ docker exec dockerhive_namenode cat /etc/hosts

127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.18.0.3      607b00c25f29

```
### 3\.  在 Docker Container 内部

```bash
$ docker exec -it dockerhive_namenode /bin/bash
# running inside the dockerhive_namenode container
ip -4 -o

7: eth0    inet 172.18.0.3/16 brd 172.18.255.255 scope global eth0

```

我们甚至可以在容器内部找到同一网络下的其他容器的 IP 地址：

**Data node**

```bash
# running inside the dockerhive_namenode container
ping dockerhive_datanode

PING dockerhive_datanode (172.18.0.5): 56 data bytes
64 bytes from 172.18.0.5: icmp_seq=0 ttl=64 time=0.092 ms

```

**Hive mestastore**

```bash
# running inside the dockerhive_namenode container
ping dockerhive_hive-metastore

PING dockerhive_hive-metastore_1 (172.18.0.2): 56 data bytes
64 bytes from 172.18.0.2: icmp_seq=0 ttl=64 time=0.087 ms

```

**Hive server**

```bash
# running inside the container
ping dockerhive_hive-server

PING dockerhive_hive-server (172.18.0.4): 56 data bytes
64 bytes from 172.18.0.4: icmp_seq=0 ttl=64 time=0.172 ms

```

## **拓展**

所有的例子都是在 Linux 的 VM 计算引擎下执行，如果你用的是 macOS 或者 Windows 例子里的命令可能会有些区别。 

另外请记住，例子中所有的 IP 地址都是针对 `docker-hive_default` 网络内部的。如果需要在外部连接这些容器，则需要主机的外部 IP（假设容器正确暴漏了端口）。
  
或者你用的是 kubernetes 来管理 Docker 容器，可以让它来为你搞定 IP 地址  [kubernetes-expose-external-ip-address][5]。

**\* 插图由  [icons8.com][6]  的  [Murat Kalkavan][7] 提供**

[1]: https://www.docker.com/blog/understanding-docker-networking-drivers-use-cases/
[2]: https://github.com/mesmacosta/docker-hive
[3]: https://tehnoblog.org/ip-tools/ip-address-in-cidr-range/
[4]: https://github.com/stedolan/jq
[5]: https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/
[6]: https://icons8.com/
[7]: https://dribbble.com/muratkalkavan
