> -  原文地址：[How to Become a Certified Kubernetes Application Developer](https://www.freecodecamp.org/news/how-to-become-a-certified-kubernetes-application-developer/)
> -  原文作者：[Sergio Fuentes NavarroSergio Fuentes Navarro](https://www.freecodecamp.org/news/author/serfuenav/)
> -  译者：luojiyin
> -  校对者：

![如何成为K8S认证开发者](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/kubernetes-ckad-color-1024x1003.png)

本指南是我对最近通过的K8S认证开发者考试的学习笔记总结。

即使你对认证不感兴趣，你可以把K8S看作`一站式商店`：你了解的主要技术概念的解释，已经无数的例子在集合在一起。


此外，它还有一些来自我准备和参加考试经验和附加内容。


在写本文时，CKAD的课程(研究领域和每个领域的比重)如下：
-   13% – 核心概念
-   18% – 配置
-   10% – 多容器 Pods
-   18% – 可观察性
-   20% – Pod 设计
-   13% – 服务 & 网络
-   8% – 状态持久性

本指南涵盖了这些课程，只是顺序不同。

我假设你已经知道K8S的基础知识(基本的containers和pods)，并希望将你的技能提高一个新的水平。通过这个考试将你的简历脱颖而出，因为它是一个非常抢手的认证。

## 内容

-   [Kubernetes简介](#intro-to-kubernetes)
-   [如何管理Kubernetes的集群](#how-to-manage-clusters-in-kubernetes)
-   [超越 Pods 和 Deployments](#beyond-pods-and-deployments)
-   [如何配置Pods和Containers](#how-to-configure-pods-and-containers)
-   [如何在Kubernetes调度Pods](#how-to-schedule-pods-in-kubernetes)
-   [Kubernetes的存储](#storage-in-kubernetes)
-   [Kubernetes的网络和安全](#network-and-security-in-kubernetes)
-   [Kubernetes中的观察性和调试](#observability-and-debugging-in-kubernetes)
-   [技巧和窍门](#tips-and-tricks)
-   [实践时间](#practice-time)
-   [结论](#conclusions)

## 介绍Kubernetes

Kubernetes是一项技术，允许在多个节点上轻松部署和管理容器化程序。它的一些最突出的特点是:

-   Container 配置和部署
-   系统监控
-   持久性存储
-   自动调度
-   自动扩展和自动修复

还有更多。

Kubernetes的工作方式是声明式的：你在集群中定义你想要的状态，Kubernetes是确保集群始终处于这种状态。

-   REST 调用
-   命令行工具`kubectl`。你可以通过这个教程，在你的机器上安装它[ 点击这里](https://kubernetes.io/docs/tasks/tools/).

如果你不能访问一个Kubernetes集群,我建议在你的本地机器上安装[minikube](https://minikube.sigs.k8s.io/docs/start/)。一旦完成安装并启动，允许以下命令来创建你的第一个Pod。
```yaml
kubectl run --image=busybox --restart=Never --rm -it -- echo "Welcome to Kubernetes!!"
```

这个pod一旦打印出欢迎消息，它将被自动删除。

## 如果管理Kubernetes集群

管理集群不是成为CKAD的课程的一部分。就考试而言，你不需要知道如何如何创建一个集群，管理nodes等。

### Namespaces

Namespaces 允许你创建虚拟集群，也就是说将资源隔离在同一物理集群的不同部分。比如说:

-   将以下不同的环境隔开 development, stage, QA, and production
-   将一个复杂的系统分解成更小的子系统，你可以为前端组件创建一个Namespace,也可以为后端组件创建另一个Namespace，以此类推。
-   避免了名称冲突: 同一资源可以在不同的Namespace中以相同的名称创建。这使得创建不同的环境 (think stage and prod)，看起来相同。

你可以通过运行以下命令创建一个Namespace:

```bash
kubectl create ns my-namespace
```

### 资源分配

如果你想限制开发者在Namespace中可以创建的资源数量(包括物理资源和Kubernetes对象，如pods) [资源分配](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

例如，你可以通过`ResourceQuota`下的Kubernetes _secrets_ 的数量来限制用户在集群上创建:

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-quota
spec:
  hard:
    secrets: "2"
```

在一个文件中，我们称之为`my-qouta.yaml`，可以简单运行`kubectl apply -f my-quota.yaml`

```bash
kubectl create quota my-quota --hard="secrets=2"
```

更多的 _秘密_ 在这个指南的后面。

### Labels

Labels(标签)允许你在Kubernetes集群组织资源，label是一个键值对，你可以在创建资源时，添加到资源上，也可以添加到现有资源。你能使用labels过滤资源。

例如:

-   你想只显示 `backend` pods。你将label `tier=backed`添加到pods (键和值都是任意的，你可以使用任何你想的)，然后运行 `kubectl get pods -l tier=backend`去检索需要的pods.
-   你想定义一个部署或服务的相关pods。告诉 deployment/service，它需要关注通过labels选择pods.

以下时一些常见的label-related的命令:

```bash
# 给Pods 添加一个label, 等等
kubectl label pods pod-name key=value
# 通过podname 删除pods上的label
kubectl label pods pod-name label_key-

# 删除一个pod，通过label选择器
kubectl label po -l app app-

# 显示 label
kubectl get pods --show-labels

# 通过lables选择pods
kubect get pods -l 'tier in (frontend,backend)'
kubect get pods -l tier=frontend,deployer=coolest-team
```

Annotations和labels相似，都是键值对，但Annotations不能用于选择资源，它们的目的是不同的。

Annotations通常为其他工具添加。比如，如果你运行Prometheus来收集指标，你可以把这个配置添加到你的描述符中。
```yaml
metadata:
	labels:
		name: fluentd-elasticsearch
	annotations:
        prometheus.io/scrape: 'true'
        prometheus.io/port: '9102'
```

它让Prometheus将 _scrape_ 和 _port_ 的默认值分别改为 `true`和 `9102`。

## 超越 Pods和部署

 Multi-container pods是Kubernetes的基本单元。在大多数情况下，你可以认为它是一个容器，但是一个pod可以由多个容器组成。由于pod是短暂的，我们需要一种机制确保当我们现有的pod死亡时，新的pod被创建。

 通过部署，你的可以定义一个理想的状态，例如，有三个应用程序的副本一直在运行，Kubernetes将努力实现并在集群中保持这种状态。

也可以轻松管理任何时候运行的副本数量，执行滚动更新，回滚到以前的版本等等。

还有很多工作负荷。
### 多容器 pod

一个pod可以运行一个以上的容器。容器间可以无缝通讯，因为它们在同一网络和而且它们可以使用 _volumes_ 共享数据。

现在，让我们深入了解一些多容器pod设计模式，在本指南后面，我们将详细介绍volumes(卷),以及如何部署这些模式中的一些。
#### Sidecar(边车)

在这个模式中，我们有一个运行主程序的容器，同时还有另一个容器，运行次要任务 ***以增强主容器的功能***。

一个经典的例子是，在运行Web服务(主容器)的同时，还有一个处理日志、监控、刷新pod volume(卷)的数据，终端TLS等任务的`side` 容器
#### 适配器

同样，你可以有你的主容器和一个次要容器， **转换主容器的输出**

例如，想象一些你的主容器运行一个输出大量复杂日志的服务。你可以使用一个适配容器来简化这个输出，然后再发送给你的日志服务器，把主容器(以及服务的开发者)从这个服务中解放出来。
#### Ambassador

另外一个常见选择是使用以辅助容器， **作为一个代理**，在你的主容器和外部之间充当代理。

例如，你可能有不同的数据库用于不同的容器，比如测试和生产。当你的主容器需要连接到一个数据库时，它可以根据环境确定适合的数据库给 `ambassador`容器。

### 服务

Pods 可以通过其他的Pods的IP地址，连接其他的Pods。然而，pods是短暂的，当它们死亡时，假设你有个复控制器，一个新的pod将被创建，有一个新的IP地址。这使人们很难直接使用IP连接到pods。

Kubernetes提供了一个名为服务的抽象，**一个资源有固定的IP地址** ，并将请求发送到对应的pod。

而不是直接连接到pods，你可以通过它的IP地址到达它们的服务。或者通过DNS服务使用完整限定名称查找，这样会更好。此外，一些服务类型也将你的应用程序暴露在集群外面。
#### 服务类型

你可以创建的主要服务类型:

-   **ClusterIP –** 在集群内暴露你的应用。如果你不指定类型，这就是Kubernetes创建的默认服务。
-   **NodePort –**  它会在集群中的每一个node打开一个端口，将你的应用程序暴露给世界。
-   **LoadBalancer –**  使用云服务提供商的负载均衡器向外部暴露服务。

#### 如何在集群内部暴露你的应用程序

假设你想把你的应用程序`my-app`暴露给集群中的其他节点，端口为80。你可以创建一个命令部署你的应用程序。

```bash
kubectl create deploy my-app --image=my-app --port=80
```

这将创建集群内部其他的Pod只能通过IP访问的pod，如果pod重新启动，其IP将改变。

下一步是为这些pod创建一个ClusterIP服务。下面的命令创建一个可以通过80端口的服务，并将请求转发到的你的应用程序(80端口)。

```bash
kubectl expose deploy my-app --port=80
```

#### 如何将你的应用程序暴露在集群之外

如果你想把你的应用服务暴露给世界，你可以使用这个配置创建一个NodePort服务。

```yaml
kind: Service
apiVersion: v1
metadata:
	name: my-svc
spec:
    type: NodePort
    selector:
	    app: nginx
    ports:
    - protocol: TCP
    	port: 80 # 你可以到达该服务的端口
    	targetPort: 80 # 你在pod打开的端口
```

### [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

服务并不是将你的应用程序给世界的唯一方法。你也可以用 **Ingress对象**作为你的集群的一个入口点。

除此之外，你还需要一个 **Ingress控制器**，比如Nginx,来实现对Ingress对象中定义的规则。

由于Ingresses不在CKAD的范围内，我们将转到其他的主题。

### [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

一个Job将创建一个或多个pods  **如果它们成功，将不会被重启启动**。你可以使用它们来执行批处理, **一次性任务** ，如并行计算，备份一些文件，转换和导出一些数据等等。

除非另有说明, pod 将运行一次。你可以使用参数 `completions`来指定一项工作需要运行多少次才能被认为已经完成。默认情况下, pods将按照顺序运行，但你可以设置job，使它们并行运行。

如果它们没有成功运行, 你将它们配置为 `Never` 重启 (重试)。或者重启失败最多的`backoffLimit` 次数，
然后Kubernetes认为job已经失败。

下面是如何从命令行中创建一个简单的job:

```bash
 kubectl create job my-job --image=busybox -- echo "Hello World"
```

如果它们的job运行成功，其状态是`COMPLETED`,其pod(s)不会被删除，这样你就可以访问它们的日志。你可以通过以下方式看到它们。

```bash
kubectll get pods --show-all
```

在默认情况下，2分钟后它们在默认的pod列表中是不可见的。

### [Cronjobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

Kubernetes提供了`Conjobs`来创建需要定期或者在未来特定时间运行的`jobs`：定时清理和备份任务，更新TLS证书等等。

Kubernetes会尽力只运行另一个`job`来执行你在`Cronjob`配置中指定的任务。然而，有3个常见的问题你应该注意。

-   不能保证job会 **准确地在所需的时间运行**。想象一下，你需要你的工作在 上午9点运行，你可以将`startingDeadlineSeconds`属性设置为x秒。这样，如果job没在上午9点x秒之后开始， 它将标记为失败，不会再运行。
-  **2个job可能被安排在同一时间** 执行任务。在这种情况下，你需要确保任务是 _idempotent_ ，如果任务被多次执行，执行的任务的结果也不会改变。
-  **没有job可以安排**。 为了克服这个问题，请确保Cronjob能运行前一次未完成的job。

这是创建一个简单的Cronjob，每分钟打印出"Hello World"

```bash
kubectl create cronjob my-job --image=busybox --schedule="*/1 * * * *" -- echo "Hello World"
```

我推荐这个 [网站](https://crontab.guru/) 帮助你写出正确的cron定时任务。

接下的3个资源不是CKAD考试的一部分，但我认为你至少应该对它们有一个基本的了解。

### [Daemon sets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

Daemon sets(守护设置)确保在你的集群的每一个 **node** 都有一个pod 调度。除此以外，pod总是在运行:如果pod死了或者有人删除了它，pod将被重新创建。

一个常见的使用场景是，Daemon sets(守护设置)用来收集每个node的日志和指标。但是，即使你不创建任何东西，它们已经在你的集群中运行了一些Daemo sets(守护设置): Kubernetese创建一个 Daemon set(守护设置)，在每个node上运行`kube-proxy` 组件。

如果你从集群中移除一个node，Kubernetes不会在别的node上创建它的守护进程，因为这个这个node已经在运行Daemon set(守护设置)。如果你在集群中添加一个node，它会自动运行 Daemon set(守护设置)。

### [Stateful set](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

到目前为止，我们应该看到部署无状态的应用或者pods的工具，它们有自己的持久性储存，不随工具停止运行而消失。为了部署有状态的应用，你可以是使用 Stateful set(状态设置)

由于这不是CKAD考试的一部分，我们就不多讲了。

### [静态 pods](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)

静态pods是由`kubelet`管理的颇多，而不是由Kubernetes API管理的。

要创建它们，你只需要创建一个普通的pod的配置文件和配置kubelet 扫描该目录。如何你重启`kubelet`后，它将创建pod，并在失败时重启pod。

Kubernetes将创建pod的镜像，这是Kubernetes API服务器中的一个副本。当你运行`kubectl get pods`，这个pod会出现，但是如果你试图用`kubectl delete podName`删除它，通过`kubelet`创建的静态pod 运行在这个node上，它将直接出现在pod列表中。

## 如何配置 Pods和Containers(容器)

我们刚刚看到在可以在Kubernetes集群上部署不同的工作负载。现在让我们花些时间学习如何配置工作负载中的pods和containers(容器)。

### [初始化容器](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/)

你可以使用  _init containers_ 来设置你的pod初始状态: 向pod的卷写入一些数据，下载些文件等等。

你可以定义一个或者多个init容器，它们将按顺序执行，只在所有的容器完成后，pod才会运行，因此，init容器也可以用来让pod在执行前等待某个条件。

例如，你可以让一个pod在启动前等待另一个服务的容器完成启动和运行。

你可以通过在pod的定义的 `spec`部分添加类似的这样的内容定义init容器。

```yaml
spec:
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', "until nslookup myservice.$(cat /var/run/secrets/kubernetes.io/serviceaccount/namespace).svc.cluster.local; do echo waiting for myservice; sleep 2; done"]
 ...
```

### [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)

将你的应用程序与代码分开是你应该遵循的实践。ConfigMaps 允许你在Kubernetes这样做。

ConfigMaps 是使用 **存储非机密数据的键值对**， 我们将在下一节看到  _Secrects_ 存储机密数据(如密码)。

```bash
# 通过参数传递数值
kubectl create configmap my-map --from-literal=db_url=my-url --from-literal=username=username

# 通过文件获取数值
kubectl create configmap another-map --from-file=my-file
```

一旦创建，你的应用程序可以在同一个namespace的pod以多种方式使用ConfigMaps。

-   作为命令行参数
-   作为环境变量
-   从只读卷中的一个文件

让我们看看一个pod的定义使用这些办法从ConfigMap中读取。

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  restartPolicy: Never
  containers:
    - name: busybox
      image: busybox
      args:
        - /bin/sh
        - -c
        - "echo $MY_VARIABLE" # This value comes from the configmap
      env:
      - name: MY_VARIABLE
        valueFrom:
          configMapKeyRef:
            name: another-map           
            key: my-key # To load individual keys from a map
      envFrom:
      - configMapRef:
          name: another-map # To import all values from a map as env variables
      volumeMounts:
      - name: config
        mountPath: "/config" # This will contain files with the data stored in my-map
        readOnly: true
  volumes:
    # Name to refer to this volume in the pod
    - name: config
      configMap:
        # Name of the ConfigMap
        name: my-map
```

### [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)

`Secrets`跟ConfigMaps很相似，但你用它们来存储 **机密数据**。创建和管理`Secrets`是一个敏感的话题。请务必阅读文档。在这里，我们将学习基础知识。

创建`Secrets`的最简单方法是:

```bash
#从一个字面量创建 secret
kubectl create secret generic secret-name --from-literal=password=password
#从文件内容来创建 secret
kubectl create secret generic secret-name --from-file=path-to-file
```

然后，你可以将你的secrets导入pod，以环境变量或者文件的形式:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: another-pod
spec:
  restartPolicy: Never
  containers:
    - name: busybox
      image: busybox
      args:
        - /bin/sh
        - -c
        - "echo $MY_VARIABLE"
      env:
      - name: MY_VARIABLE
        valueFrom:
          secretKeyRef:
            name: my-secret2
            key: username # To load individual keys from a map
      envFrom:
      - secretRef:
          name: yet-another-secret # To import all values from a map as env variables
      volumeMounts:
      - name: secret-volume
        mountPath: "/secrets" # This will contain files with the data stored in my-map
        readOnly: true
  volumes:
    # Name to refer to this volume in the pod
    - name: secret-volume
      secret:
        # Name of the Secret
        secretName: my-secret
```

### [Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

Probes(探针)允许你设置判断pod是否健康的规则，是否为服务流量做好准备，是否准备好启动。在本节的最后，我将介绍一个带有这些Probes(探针)的样本。

#### Liveness probes(活性探针)

Kubernetes 会自动重启 _crashed containers_ (崩溃的容器)。然而,这不会考虑到下面的bug (像你的应用程序的无限循环), 死锁等等。 你可以定义 `Liveness probes`(活性探针) **检测你的应用程序是否健康**。 Kubernetes 使用这探针来决定是否要重启容器。

你可以定义三种Liveness probes(活性探针):

-   HTTP Get, 在你的应用程序中定义一个HTTP路由(如/health)，Kubernetes可以通过HTTP请求获取应用程序是否健康
-   TCP socket 探针，尝试建立一个TCP连接到一个特定的端口。如果连接不能建立，应用程序将重启。
-   Exec 探针,  在容器内运行一个命令，如果退出状态码不是0，将重启容器。

#### Readiness probes(准备就绪探针)

想象一下，一个服务在启动时需要加载一个大的配置文件。容器本身是健康的(这可以用上面的Liveness probes检查)，但是没有启动完，接收请求。

Kubernetes使用Readiness probes(准备就绪探针)来确定你的应用程序是否准备好，处理请求。

关于Liveness probes(活性探针)的东西也适用于Readiness probes(准备就绪探针):

-   它们可以被配置为初始延迟，超时，阈值，周期等等。
-   它们可以基于HTTP get调用，TCP socket连接，或者在容器内执行命令。

然而，当Liveness probes(活性探针)告诉Kubernetes信息，Kubernetes让不健康的容器重启。Readiness probes(准备就绪探针)用来从可以接收请求的容器池移除没准备好的容器。一旦容器准备好了，它就可以为请求提供服务。

#### Startup probes(启动探针)

Startup probes(启动探针)只能在启动期间使用，例如应用程序启动缓慢。如果Startup probes(启动探针)返回成功，liveness and readiness 探针(如果已经配置)，将定期运行。

### 例如

这个pod 将执行以下命令:

-   sleep 20
-   touch /tmp/healthy
-   sleep 30
-   rm -rf /tmp/healthy
-   sleep 600

在配置探针时，你应该注意的最基本参数是:

-   **initialDelaySeconds** 开始探针延迟秒数
-   **periodSeconds** 探针频率
-   **timeoutSeconds**   探针的超时时间
-   **failureThreshold** Kubernetes尝试次数，超过这个，将放弃尝试
根据我们的配置, 这些探针将在pod创建后10秒后开始。在前20秒内, 文件 `/tmp/healthy`是不存在。因此, readiness probe(准备就绪探针)返回失败。 在接下30秒内readiness probe(准备就绪探针)返回成功，直到我们删除`/tmp/healthy`文件。

liveness probe(活性探针) 是简单的`echo "I'm healthy"`命令。如果它能运行，说明这个pod是健康的，否则，这个pod 要重启。

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - args:
    - /bin/sh
    - -c
    - "sleep 20; touch /tmp/healthy; sleep 30; rm -rf /tmp/healthy; sleep 600"
    image: busybox
    name: tmp
    livenessProbe:
     exec: # If this command can be run, the pod is healthy
       command:
       - echo
       - "I'm healthy"
     initialDelaySeconds: 5 # Only start probing after 5 seconds
     periodSeconds: 5 # Probe every 5 seconds
    readinessProbe:
     exec: # If this command can be run, the pod is ready to serve traffic
       command:
       - cat
       - /tmp/healthy
     initialDelaySeconds: 5 # Only start probing after 5 seconds
     periodSeconds: 10 # Probe every 10 seconds
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
```

执行这个命令可以看到pods的状态:

```bash
kubectl get pods --watch
```

看到`Ready` 列的值 从 `0/1`, 到 `1/1` 和回到 `0/.1`?

运行这个命令，以获得一个事件列表和探针如何失败的，正如我们期待的。

```bash
kubectl describe pods my-pod
```

### [容器资源](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

你可以通过定义创建一个pod:

-   它运行所需的最小资源量，被称为 _requests_.
-   pod可以使用的最大资源量，被称为 _limits_.

Kubernetes在调度pod时，会考虑到你请求的资源。它不会在一个没有足够容量的节点上调度pod，不管当前资源的消耗情况如何。

例如， pod A和podB 在node N上运行，Kubernetes将通过下面的方法计算新的pod C 是否可以在node N上运行:

`Total capacity of N - (resources requested by A + resources requested by B) <= resources requested by C`( node N的总资源减去 A B需要的最小资源后，是否少于pod C需要的最小资源量)

即使pod A和B没有使用它们请求的最小资源， Kubernetes **承诺** A和B会有它们所请求的最小资源可使用。这是为什么当前的资源使用情况不在前面的公式表达。

如果一个pod超过它的资源限制(它可以使用的最大资源量时)，会发生两种情况:

-   如果它超过CPU限制，它将被杀掉
-   如果它超过内存限制，它将会被重新启动

现在让我们创建一个pod，设置好它的最小内存和cpu和最大内存和cpu使用:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-limited-pod
spec:
  restartPolicy: Never
  containers:
    - name: busybox
      image: busybox
      args:
        - /bin/sh
        - -c
        - "echo Hello Kubernetes; sleep 3600"
      resources:
        requests:
          memory: "300Mi"
          cpu: 0.2
        limits:
          memory: "1Gi"
          cpu: 0.5
```

作为一个练习，设置分配的内存和cpu高得离谱一些的值，去创建pod。你会看到pod从未准备好，将有输出

```bash
kubectl describe pods resource-limited-pod
```

会告诉你为什么.

## [怎样在Kubernetes中调度Pods](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)

这一部分不是CKAD考试教程的一部分。但我相信，你应该对我在这样阐述的概念有一些基本的了解，因为你在使用Kubernetes的过程中，它们很可能会出现。

Kubernetes允许你通过多种机制来指定你希望的pods，被安排到哪个nodes。

最简单的是使用 **nodeSelector** 字段，根据一个label选择一个node。其他功能的使用，允许更复杂的设置。

### [Taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

你可以 **taint(污损) 一个node 去防止在其中的pods被调度**, 不用去修改pods本身。 当你 taint(污损)一个node,  Kubernetes 会调度 这个node 中的 pods，**容忍** taint(污损)。

你可以看到这个动作，如果你运行:

```bash
kubectl describe node master.Kubernetes
```

在前一个命令的输出中，你会看到这样一行字:

```bash
Taints: node-role.kubernetes.io/master:NoSchedule
```

这种污损会阻止pods在master node中被调度 (除非pods能容忍这种taint).

 有三种类型的taint:

-   NoSchedule: 如果node不能容忍taint，Kubernetes不会在node中调度pod。
-   PreferNoSchedule: pods不能容忍taint，不会调度在一个node中，除非pods不能调度到其他地方。
-   NoExecute: 如果已经在node中运行的pods不容忍taint，就把pods从node中移除出去。

**Taints 并不保证 pods 会被调度到特定的nodes**。 为了实现这一点,你需要探索 _Node affinity_ (node亲和性) 概念.

### Node affinity

Node affinity tells Kubernetes to **schedule pods to specific nodes**.

Imagine you have a service S that needs special hardware to run. You want to dedicate the hardware to this service and only want pods from S to run on it. How can you achieve this?

You can taint the nodes that have this type of equipment so that only pods from service S can be scheduled in these nodes. However, Kubernetes can still deploy these pods in other nodes that don't have the required hardware.

We can see how the combination of taints and node affinity ensures that only pods from service S run in our specialized nodes:

-   Node affinity schedules pods from S into the specialized nodes (and nowhere else).
-   Taints ensure that no other pods will be scheduled in the specialized nodes, only pods from service S.

## Storage in Kubernetes

By default, when the container inside a pod restarts, all the data inside the container is lost. This is by design.

If you want the data to outlive the container, pod, and even node, you need to use **volumes**. Also, if a pod is composed of multiple containers, then the pod's volumes can be used by all of the containers.

### [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)

After you define the volume, at the pod level, you need to mount it in each container that needs access to it.

There are many types of volumes to account for different use cases (usually, depending on what you want to happen when the _pod_ is destroyed). Some common types of volumes are:

-   emptyDir: creates a directory that is initially empty. Easy way to share files between different containers in a pod.
-   hostPath: mounts a file or directory from the node's filesystem into the pod. After the pod is deleted, the files will remain in the host.
-   Volumes that live on AWS, GCP, or Azure clouds.

For more information about these and other type of volumes, refer to the documentation.

To mount a volume in a container, your pod descriptor (let's call this file `with-mounted-volume.yaml`) should look something like this:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-mounted-volume
spec:
  volumes: # Volumes are defined at the pod level
  - name: my-volume # We'll use this name to mount the volume inside the pod
    hostPath: # Here we define the type of volume we want
      path: /var/my-k8s-volume
  containers:
  - args:
    - /bin/sh
    - -c
    - "sleep 3600"
    image: busybox
    name: bb
    volumeMounts:
    - name: my-volume
      mountPath: /tmp/my-volume-path
  restartPolicy: Never
```

Since we have created a `hostPath` volume, its content will outlive the pod. Let's test this:

```bash
# Create a pod
kubectl apply -f with-mounted-volume.yaml
# Create a file at the mounted location
kubectl exec -it with-mounted-volume -- sh -c "echo 'Inside the pod' > /tmp/my-volume-path/newfile"
# Try to read the file
kubectl exec -it with-mounted-volume -- cat /tmp/my-volume-path/newfile
# Delete the pod
kubectl delete pods with-mounted-volume
# Create a new pod
kubectl apply -f with-mounted-volume.yaml
# Explore the content of `/tmp/my-volume-path`  to see if it persisted
kubectl exec -it with-mounted-volume -- cat /tmp/my-volume-path/newfile
```

#### Revisiting multi-container pods

Now that we're familiar with volumes, let's create a multi-container pod that will use a mounted volume to share date between the containers.

-   Our pod descriptor will be called `communicating-containers.yaml`
-   We'll have a pod with 2 `busybox` containers.
-   One of them will append `Hello World` to a file every second.
-   The other container has access to the content of this file (and anything that is placed in this shared volume). We'll tail the shared file and see how the other container appends `Hello World` to it.

This is the definition of our pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: communicating-containers
spec:
  volumes:
  - name: vol
    emptyDir: {}
  containers:
  - args:
    - sh
    - -c
    - "while true;do echo 'Hello World' >> /etc/shared/log; sleep 1; done"
    image: busybox
    name: container-1
    volumeMounts:
    - name: vol
      mountPath: /etc/shared/ # The container can access the volume here
  - args:
    - sh
    - -c
    - "sleep 3600"
    image: busybox
    name: container-2
    volumeMounts:
    - name: vol
      mountPath: /etc/a-different-location # The volume can be mounted at different locations on each containers
  restartPolicy: Never
```

Let's create the pod:

```bash
kubectl apply -f communicating-containers.yaml
```

Once the pod is running, we can tail the file from `container-2`:

```bash
kubectl exec -it communicating-containers -c container-2 -- tail -f /etc/a-different-location/log
```

Even though it is `container-1` that writes to `log`, since it is in a shared volume, `container-2` can see this file too.

### [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)

Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) decouple pods from storage technology. PVs are created by cluster administrators or dynamically based on [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/).

As opposed to the volumes we created earlier, defined at the pod level, PVs that have their own life cycle, independent from any pod.

After creating PVs, _users_ can create Persistent Volume Claims to get the storage they need, _without needing to care about the actual infrastructure that is backing their storage_.

#### Example

First, we define a Persistent Volume in pv.yaml:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: myvolume
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
    - ReadWriteMany
  storageClassName: normal
  hostPath:
    path: /etc/foo
```

For the Persistent Volume Claim, this is the descriptor (in pvc.yaml):

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mypvc
spec:
  storageClassName: normal
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 4Gi
```

Now, let's create the resources in our cluster

```bash
# First, the Persistent Volume
kubectl apply -f pv.yaml
# Then, the Persistent Volume Claim
kubectl apply -f pvc.yaml
```

We can take the pod definition from the previous example and with a little tweak start using this Persistent Volume instead of the hostPath we had defined. This is the only thing we need to change:

```yaml
volumes:
  - name: mypd # To refer to this volume when we configure the pod
    persistentVolumeClaim: # Instead of hostPath
      claimName: mypvc # The name of the pvc we just created
```

## Network and Security in Kubernetes

Regarding security, these concepts are the bare minimum that you should be familiar with to be able to clear the CKAD exam.

### [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

By default, all ingress traffic (that is, traffic flowing into your application) and egress traffic (that is, traffic flowing from your application) is allowed. Any pod can connect to any other pod, even if they're in different namespaces.

You can define network policies to control ingress and egress traffic based on different criteria.

To illustrate this, let's create a Network policy that allows traffic to our database only from pods with the label `access: allowed`:

```yaml
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: access-db-policy # pick a name
spec:
  podSelector:
    matchLabels:
      app: db # selector for the databse pods
  ingress: # allow ingress traffic
  - from:
    - podSelector: 
        matchLabels: 
          access: allowed # Only the pods with this label will be able to send traffic to the database
```

### [Security Context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)

When configuring a Security Context, you can enable security features like preventing the container from running as root, choosing as what user the pod is running, and so on. Here's an example:

```bash
spec:
  securityContext:
    runAsUser: 1000 #This sets the user for every container in this pod, but can be overriden
  containers:
  - name: my-container
     image: alpine
     securityContext:
     	runAsUser: 1001 # This overrides the user set at the pod level     	
  - name: another-container
	....
```

### [Services Accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)

Your applications can connect to the API server and interact with it. For example, to retrieve information about the pods in a namespace. Service accounts allow applications to _authenticate_ against the API server so that they can operate on it.

There is a _default service account_, but it is not a good practice to have all pods use it since not every application needs to be able to perform the same operations on the API server.

The simplest way to create a service account is via the command line:

```bash
kubectl create serviceaccount my-sa
```

Once created, you can assign it to a pod using the `serviceAccountName` field in the pod descriptor:

```bash
spec:
  serviceAccountName: my-sa
  containers:
  - name: web-server
  ...
```

Once the application has been authenticated, the next step is to see if it has the appropriate permissions for the action it is trying to accomplish, that is, to see if the application is _authorized_.

### [Role Based Access Control](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

A common method to manage authorization is **Role Based Access Control (RBAC)**. Service accounts are linked to one or more roles. Each role has permissions to perform a specific action on a certain resource.

RBAC authorization is defined in two separate steps:

-   Role creation, using Role and ClusterRole resources, to specify the actions can be performed on certain resources
-   The binding of the roles to the accounts, using RoleBinding and ClusterRoleBinding resources.

As you can imagine, the resources that contain the prefix Cluster are available cluster-wide, whereas the others are only defined in a particular namespace.

Since this is out of the scope of the CKAD exam, we will not get into the details of how to create and configure RBAC in your cluster.

## Observability and Debugging in Kubernetes

Once you have deployed your applications, how do you know what's going on in your cluster?

We've already introduced Probes as a mechanism to decide if pods need to be restarted and if pods are ready to serve traffic. Here we will see more mechanisms to get a better understanding of the state of our cluster and troubleshoot any issues.

#### Getting Basic Pod information

To access the current state of the pods, there are two basic options. This is the first one:

```bash
kubect get pods
```

This will show you the pods' `STATUS`, `AGE`, number of `RESTARTS` and how many containers inside the pods are `READY`.  You can pass flags to this command so that it displays the pods' IP address, labels, and more.

The second option provides more detailed information:

```bash
kubectl describe pods my-pod
```

At the very bottom of the output of this command, you'll find a list of events that will give you hints in case something goes wrong:

-   Liveness/readiness probes are failing
-   There was an error pulling an image
-   Insufficient memory to schedule a pod

And so on.

### How to Get a Container's Logs

If a pod is running, you can access its logs using the following command:

```bash
kubectl logs pod-name [-c container-name] [-n namespace]
```

You only need to pass the container name if there's more than one container in your pod. Similarly, the namespace flag is only needed to retrieve logs from pods in a different namespace.

You can even tail the logs with the `-f` flag:

```
kubectl logs -f pod-name [-c container-name] [-n namespace]
```

This will be enough for the certification. However, manually checking logs is cumbersome and inefficient in a real production environment. You will want to user other technologies to manage your logs or services like StackDriver if you're on GCP. If you want to learn more about StackDriver and GCP in general, be sure to check out my [GCP guide](/news/google-cloud-platform-from-zero-to-hero/).

### Troubleshooting Tips

While there are no one-size-fit-all solutions when it comes to troubleshooting, it is usually a good idea to start at the pod level to get an idea of what might be the root cause of the issue.

You basic tools should be the commands we've covered above. In addition to this, you can always open a terminal inside the pod:

```bash
# Assuming you container image uses sh
kubectl exec -it my-pod -c container -n namespace -- sh
```

It is **not recommended** to solve problems inside the pod this way, since by design pods are ephemeral and after they are restarted, your changes will be lost and the problem will manifest itself again. However, it's a good idea to gain good insight into the problem.

To retrieve your pod or node metrics, you can run the following command:

```bash
kubectl top pod pod-name
```

These tools should help you solve the most common problems in your daily operations. There are too many things that can go wrong to cover here. If you face something you can't fix, I recommend that you visit this entry to get help [debugging your applications.](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/)

## Tips and Tricks

These are some "tricks" and I have found useful in my daily work with Kubernetes and especially to pass the CKAD exam. **The exam is about speed and efficiency**. With this in mind, let's see what we can do to perform better.

### Set Aliases

You will be typing the same commands over and over. As soon as you start the exam, create the following aliases:

```bash
# Essential aliases. I strongly recommend setting them
alias k='kubectl'
alias kg='k get'
alias kgpo='k get pods'
alias kdpo='k describe pod'
alias kd='k describe'

# I also found this one very useful
alias kap='k apply -f'

# I have this for work only
alias kgpoa='kgpo --all-namespaces'
alias kgpol='kgpo --show-labels'
alias kgpow='kgpo -o wide'
alias kgd='kg deploy'
alias kgs='kg svc'
alias kdd='kd deploy'
alias kds='kd svc'
```

### Search Your Command History Faster

I've seen a lot of engineers, many of them seniors, clumsily hitting the arrow up key 20 times to find something in their command history.

Instead, make sure you're comfortable using `Ctrl + r`. Just press it and start typing some part of the command you are looking for. Then, keep pressing `Ctrl + r` until you find it. Now you can press `Enter` to run it or simply start typing to modify it.

It is a huge time saver that not everyone is aware of.

### Familiarize Yourself With the Documentation

You can consult the documentation during the exam. However, it's not the time to learn new things. Visit the documentation to get templates for yaml, to check specific parameters, and so on.

Make sure you have a good idea of the **structure of the documentation** and where to find things. Use the **search functionality** to go even faster.

Finally, this [Kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) is gold and **will be available for you during the exam**.

### You Don't Need to Memorize Everything

In addition to the documentation, `kubectl` has a `--help` flag for most commands (`-h` is the short version). Most of the time you will find the answer to your question there.

In fact, I recommend that you do this before going to the documentation, since it is much faster.

Imagine that you want to create a resource quota object. You don't remember the yaml you need to write or the command to create it. However, you know the `kubectl command` and the `--help` flag. Then, you should try this before going to the docs:

```bash
# From this, we can get what we need to create our resource quota object
kubeclt create quota -h
# For example
kubeclt create quota my-quota --hard="secrets=2"
```

You have plenty of sources of information and therefore you don't need to memorize many commands or any descriptors.

However, given that time is very limited during the exam, I think it's worth knowing some of the following commands by heart and how to leverage them.

### Generate a basic pod specification quickly

**This is extremely important**. Instead of copying and pasting from the documentation every time you need a pod, use the following command to get a descriptor that you can modify later to meet your requirements:

```bash
# Run pod nginx and write its spec into a file called pod.yaml
kubectl run nginx --image=nginx --restart=Never --dry-run=client -o yaml > pod.yaml
# Some of these flags can be useful, depending on the problem
kubectl run nginx --image=nginx --restart=Never  --port=80 --labels=key=val --dry-run=client -o yaml > pod.yaml
```

Other useful parameters:

```bash
--rm # to remove the pod as soon as it's finished
-it # Enter the interactive terminal, to run commands directly inside the pod
```

For example, you can use this to create a temporary pod and use it to verify your work:

```bash
kubectl run tmp --image=busybox --restart=Never --rm -it -- /bin/sh
```

Now you could  `wget -O- svc:port` to see if your service is running, if network policies are working, and so on.

##### Note:

The `--dry-run=client -o yaml` is not just for pods, but for many resources. If we come back to the previous section where we created a resource quota, we could get a descriptor like this:

```bash
kubeclt create quota my-quota --hard="secrets=2" --dry-run=client -o yaml
```

### Use grep

You don't need to know regular expressions in depth. Just pass keywords. For instance, to retrieve information fast from the lengthy `kubectl describe pods my-pod`:

```bash
# -i makes the search case-insensitive. It's a bit slower but for very short texts it won't make a difference
# -C 2 will display the matched line as well as the 2 lines before and after the match (the "context")
kubectl describe pods my-pod | grep -i -C 2 labels
kubectl describe pods my-pod | grep -i -C 2 ip
...
```

### Watch Pods as Their Status Changes

Instead of manually running `kubeclt get pods` every few seconds to see changes, pass the `watch` flag to see how your pods are doing:

```bash
kubectl get pods --watch
```

### Delete Pods Fast

Making mistakes is part of the learning process. You'll make them also during the exam. Since the clock is ticking, we need to make sure we don't have to wait long when deleting resources. Add these flags to delete pods immediately:

```bash
k delete pods my-pod --force --grace-period=0
```

### Run a Pod With a Particular Command

I found it useful to learn how to pass commands to pods, jobs, cronjobs, and so on from the command line, like this example:

```bash
kubectl run loop --image=busybox -o yaml --dry-run=client --restart=Never \
-- /bin/sh -c 'for i in {1..10}; do echo "Counting: $i"; done' \
> pod.yaml
```

This would generate the file pod.yaml:

```bash
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: loop
  name: loop
spec:
  containers:
  - args:
    - /bin/sh
    - -c
    - 'for i in {1..10}; do echo "Counting: $i"; done'
    image: busybox
    name: loop
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
```

You can run a single command or chain multiple commands, like a mini bash script:

```bash
# Run a particular executable
kubectl run busybox --image=busybox -it --restart=Never -- echo 'hello world'
# Run commands inside a shell (useful to run multiple commands)
kubectl run busybox --image=busybox -it --restart=Never -- /bin/sh -c 'echo hello world'
```

It is not a huge difference but you don't need to remember how to write it in the pod descriptor or to waste time opening the documentation. **You just need to use what you already know.**

### Roll out

Familiarize yourself with the `rollout` command to get information about the status of your deployments.

I always start with the `--help` flag to remember how to do what I wanted to do.

```bash
kubectl rollout -h
```

### Bonus

These final tips are not for the certification, but for daily work:

-   This [kube-ps1 module](https://github.com/jonmosco/kube-ps1) makes it easy to always know in which cluster and namespace you're operating, to prevent mistakes like messing with prod resources when you're not supposed to.
-   Also, I recommend having a look at [Helm](https://helm.sh/). Helm is a package manager that can be used to deploy applications easily (think of it as `npm`). Helm also allows you to write templates that you can reuse to create objects based on different values (name, resource requests and limits, and so on).

## Practice Time

**You will always learn more by doing than by reading.** So I have left some problems here that I solved during my preparation for you to practice. Check out [this repo](https://github.com/dgkanatsios/CKAD-exercises) and [this article](https://medium.com/bb-tutorials-and-thoughts/practice-enough-with-these-questions-for-the-ckad-exam-2f42d1228552).

I recommend solving all of them on your own before you check the proposed solution. Also, verify your work: check logs, create a pod to connect to your services, and so on. This will also help build your muscle memory for the exam.

Try to follow my tips and solve the exercises as if you really were in the exam: no distractions, only one tab open - with the official Kubernetes documentation.

## Conclusions

This guide contains all you need to take your skills to the next level, to ace the CKAD exam, and to become an effective Kubernetes developer. It's all in your hands. You just need to put in some work. Good luck!

You can visit my blog [www.yourdevopsguy.com](https://www.yourdevopsguy.com/) and [follow me on Twitter](https://twitter.com/CodingLanguages) for more high-quality technical content.

If you liked this article, please share it because you could help someone pass their exam or get a job.