> * 原文地址：[How to Get A Docker Container IP Address - Explained with Examples 如何获取 Docker 容器的 IP 地址](https://www.freecodecamp.org/news/how-to-get-a-docker-container-ip-address-explained-with-examples/)
> * 原文作者：Marcelo Costa
> * 译者：Raman.L
> * 校对者：

![How to Get A Docker Container IP Address - Explained with Examples](https://images.unsplash.com/photo-1545935950-b7a28791ad7a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Docker provides the ability to package and run an application in a loosely isolated environment called a container.

I know what you might be thinking – come on, not another post explaining what Docker is, it's everywhere these days!

![](https://www.freecodecamp.org/news/content/images/2020/06/docker-i-see.jpg)

But don't worry, we are skipping that basic introduction. The target audience for this article should already have a basic understanding of what Docker and Containers are.

But have you ever wondered how to get a Docker Container IP Address?

## Docker network explained

  
First, let's understand how the Docker network works. For that we are going to focus on the default  `bridge`  network. When you are using Docker, if you don’t specify a driver this is the type of network you are using.

![](https://www.freecodecamp.org/news/content/images/2020/06/docker-network.png)

Docker network from:  [understanding-docker-networking-drivers-use-cases][1]

The  `bridge`  network works as a private network internal to the host so containers on it can communicate. External access is granted by exposing ports to containers.

Bridge networks are used when your applications run in standalone containers that need to communicate.

In the picture above  `db`  and  `web`  can communicate with each other on a user created bridge network called  `mybridge`.

If you’ve never added a network in Docker you should see something similar to this:

```bash
$ docker network ls


```

The default  `bridge`  network is listed, along with  `host`  and  `none`. We will ignore the other two, and use the  `bridge`  network when we get to the examples.

## Docker Container IP Address

  
By default, the container is assigned an IP address for every Docker network it connects to. And each network is created with a default subnet mask, using it as a pool later on to give away the IP addresses.

Usually Docker uses the default  **172.17. 0.0/16**  subnet for container networking.

Now to better understand it, we will execute a real use case.

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/flamenco-done.png)

### Docker Example

  
To illustrate this, we will use a Hive and Hadoop environment, containing 5 Docker Containers.

Check out the  `docker-compose.yml`  file we are about to execute:

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

[From  **docker-hive**  GitHub][2]

No one wants to read a  **HUGE**  config file, right? So here's a picture:

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-21-at-2.48.18-PM.png)

Much better! Now let's start up those containers:

```bash
docker-compose up -d

```

We can see 5 containers:

```bash
$ docker ps --format "table {{.ID}}\t{{.Status}}\t{{.Names}}"

```

Next let's check our Docker networks:

```bash
$ docker network ls

```

Wait a minute... there's a new network called  `docker-hive_default`!

By default docker compose sets up a single network for your app. And your app’s network is given a name based on the “project name”, originated from the name of the directory it lives in.

So since our directory is named  `docker-hive`, this explains the new network.

Next some examples on how to get the Docker IP Address.

## How to Get A Docker Container IP Address - examples  

And now that I have your attention, we are going to unveil the mystery.

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/bermuda-logged-out-1.png)

### 1\. Using Docker Inspect

  
Docker inspect is a great way to retrieve low-level information on Docker objects. You can pick out any field from the returned JSON in a fairly straightforward manner.

So shall we use it to get the IP Address from the  `dockerhive_datanode`?

```bash
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 75000c343eb7

```

Didn't you say that Docker uses the default  **172.17. 0.0/16**  subnet for container networking? Why is the returned IP Address:  **172.18.0.5**  outside it?

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-22-at-3.25.07-PM.png)

Image created on  [ip-address-in-cidr-range][3]

To answer that we have to look at our network settings:

```bash
$ docker network inspect -f '{{range .IPAM.Config}}{{.Subnet}}{{end}}'  9f6bc3c15568

```

We executed this example in a Compute Engine VM, and in this test, the docker network was assigned a different subnet:  **172.18.0.0/16**. That explains it!

Furthermore, we can also lookup all IP Addresses inside the  `docker-hive_default`  network.

So we don't need to look up each Container's IP individually:

```bash
$ docker network inspect -f '{{json .Containers}}' 9f6bc3c15568 | jq '.[] | .Name + ":" + .IPv4Address'

```

![drawing](https://www.freecodecamp.org/news/content/images/2020/06/cherry-success.png)

If you didn't notice, we used  [**jq**][4]  help to parse the  `Containers`  map object.

### 2\. Using Docker exec

In the following example we will work with the  `dockerhive_namenode`.

```bash
$ docker exec dockerhive_namenode cat /etc/hosts

```

### 3\. Inside the Docker Container

```bash
$ docker exec -it dockerhive_namenode /bin/bash
# running inside the dockerhive_namenode container
ip -4 -o address

```

We can even find other containers' IP Addresses that are inside a container in the same network:

**Data node**

```bash
# running inside the dockerhive_namenode container
ping dockerhive_datanode

```

**Hive mestastore**

```bash
# running inside the dockerhive_namenode container
ping dockerhive_hive-metastore

```

**Hive server**

```bash
# running inside the container
ping dockerhive_hive-server

```

## **Wrap up**

All examples were executed in a linux distribution Compute Engine VM. If you execute them in macOS or Windows environments the sample commands might change a bit.

Also bear in mind that those IP Addresses in the examples given are internal to the sample  `docker-hive_default`  network. So if you have a use case to connect to those containers externally, you would need to use the host machine's external IP (assuming that you are exposing the containers ports correctly).  
  
Or if you are using kubernetes, for instance, to manage your Docker containers, let it handle the IP Addresses for you  [kubernetes-expose-external-ip-address][5]  ?.

**\* Illustrations from  [icons8.com][6]  by  [Murat Kalkavan][7].**

[1]: https://www.docker.com/blog/understanding-docker-networking-drivers-use-cases/
[2]: https://github.com/mesmacosta/docker-hive
[3]: https://tehnoblog.org/ip-tools/ip-address-in-cidr-range/
[4]: https://github.com/stedolan/jq
[5]: https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/
[6]: https://icons8.com/
[7]: https://dribbble.com/muratkalkavan
