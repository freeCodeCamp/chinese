> -  原文地址：[How to Become a Certified Kubernetes Application Developer](https://www.freecodecamp.org/news/how-to-become-a-certified-kubernetes-application-developer/)
> -  原文作者：[Sergio Fuentes NavarroSergio Fuentes Navarro](https://www.freecodecamp.org/news/author/serfuenav/)
> -  译者：luojiyin
> -  校对者：

![如何成为K8S认证开发者](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/kubernetes-ckad-color-1024x1003.png)

本指南是我对最近通过的 K8S 认证开发者考试的学习笔记总结。

即使你对认证不感兴趣，你可以把 K8S 看作`一站式商店`：你了解的主要技术概念的解释，已经无数的例子在集合在一起。


此外，它还有一些来自我准备和参加考试经验和附加内容。


在写本文时，CKAD 的课程(研究领域和每个领域的比重)如下：
-   13% – 核心概念
-   18% – 配置
-   10% – 多容器 Pods
-   18% – 可观察性
-   20% – Pod 设计
-   13% – 服务 & 网络
-   8% – 状态持久性

本指南涵盖了这些课程，只是顺序不同。

我假设你已经知道 K8S 的基础知识(基本的 containers 和 pods)，并希望将你的技能提高一个新的水平。通过这个考试将你的简历脱颖而出，因为它是一个非常抢手的认证。

## 内容

-   [Kubernetes 简介](#Kubernetes简介)
-   [如何管理 Kubernetes 的集群](#如何管理Kubernetes集群)
-   [超越 Pods 和 Deployments](#超越Pods和部署)
-   [如何配置 Pods 和 Containers](#如何配置Pods和Containers)
-   [如何在 Kubernetes 调度 Pods](#怎样在Kubernetes中调度Pods)
-   [Kubernetes 的存储](#Kubernetes的存储)
-   [Kubernetes 的网络和安全](#Kubernetes中的网络和安全)
-   [Kubernetes 中的观察性和调试](#Kubernetes中的可观察性和调试)
-   [技巧和窍门](#技巧和窍门)
-   [练习时间](#练习时间)
-   [结论](#结论)

## Kubernetes 简介

Kubernetes 是一项技术，允许在多个节点上轻松部署和管理容器化程序。它的一些最突出的特点是:

-   Container 配置和部署
-   系统监控
-   持久性存储
-   自动调度
-   自动扩展和自动修复

还有更多。

Kubernetes 的工作方式是声明式的：你在集群中定义你想要的状态，Kubernetes 是确保集群始终处于这种状态。

-   REST 调用
-   命令行工具`kubectl`。你可以通过这个教程，在你的机器上安装它[点击这里](https://kubernetes.io/docs/tasks/tools/).

如果你不能访问一个 Kubernetes 集群,我建议在你的本地机器上安装[minikube](https://minikube.sigs.k8s.io/docs/start/)。一旦完成安装并启动，允许以下命令来创建你的第一个 Pod。
```yaml
kubectl run --image=busybox --restart=Never --rm -it -- echo "Welcome to Kubernetes!!"
```

这个 pod 一旦打印出欢迎消息，它将被自动删除。

## 如何管理 Kubernetes 集群

管理集群不是成为 CKAD 的课程的一部分。就考试而言，你不需要知道如何如何创建一个集群，管理 nodes 等。

### Namespaces

Namespaces 允许你创建虚拟集群，也就是说将资源隔离在同一物理集群的不同部分。比如说:

-   将以下不同的环境隔开 development, stage, QA, and production
-   将一个复杂的系统分解成更小的子系统，你可以为前端组件创建一个 Namespace,也可以为后端组件创建另一个 Namespace，以此类推。
-   避免了名称冲突: 同一资源可以在不同的 Namespace 中以相同的名称创建。这使得创建不同的环境 (think stage and prod)，看起来相同。

你可以通过运行以下命令创建一个 Namespace:

```bash
kubectl create ns my-namespace
```

### 资源分配

如果你想限制开发者在 Namespace 中可以创建的资源数量(包括物理资源和 Kubernetes 对象，如 pods) [资源分配](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

例如，你可以通过`ResourceQuota`下的 Kubernetes _secrets_ 的数量来限制用户在集群上创建:

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

Labels(标签)允许你在 Kubernetes 集群组织资源，label 是一个键值对，你可以在创建资源时，添加到资源上，也可以添加到现有资源。你能使用 labels 过滤资源。

例如:

-   你想只显示 `backend` pods。你将 label `tier=backed`添加到 pods (键和值都是任意的，你可以使用任何你想的)，然后运行 `kubectl get pods -l tier=backend`去检索需要的 pods.
-   你想定义一个部署或服务的相关 pods。告诉 deployment/service，它需要关注通过 labels 选择 pods.

以下时一些常见的 label-related 的命令:

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

Annotations 和 labels 相似，都是键值对，但 Annotations 不能用于选择资源，它们的目的是不同的。

Annotations 通常为其他工具添加。比如，如果你运行 Prometheus 来收集指标，你可以把这个配置添加到你的描述符中。
```yaml
metadata:
	labels:
		name: fluentd-elasticsearch
	annotations:
        prometheus.io/scrape: 'true'
        prometheus.io/port: '9102'
```

它让 Prometheus 将 _scrape_ 和 _port_ 的默认值分别改为 `true`和 `9102`。

## 超越 Pods 和部署

 Multi-container pods 是 Kubernetes 的基本单元。在大多数情况下，你可以认为它是一个容器，但是一个 pod 可以由多个容器组成。由于 pod 是短暂的，我们需要一种机制确保当我们现有的 pod 死亡时，新的 pod 被创建。

 通过部署，你的可以定义一个理想的状态，例如，有三个应用程序的副本一直在运行，Kubernetes 将努力实现并在集群中保持这种状态。

也可以轻松管理任何时候运行的副本数量，执行滚动更新，回滚到以前的版本等等。

还有很多工作负荷。
### 多容器 pod

一个 pod 可以运行一个以上的容器。容器间可以无缝通讯，因为它们在同一网络和而且它们可以使用 _volumes_ 共享数据。

现在，让我们深入了解一些多容器 pod 设计模式，在本指南后面，我们将详细介绍 volumes(卷),以及如何部署这些模式中的一些。
#### Sidecar(边车)

在这个模式中，我们有一个运行主程序的容器，同时还有另一个容器，运行次要任务 ***以增强主容器的功能***。

一个经典的例子是，在运行 Web 服务(主容器)的同时，还有一个处理日志、监控、刷新 pod volume(卷)的数据，终端 TLS 等任务的`side` 容器
#### 适配器

同样，你可以有你的主容器和一个次要容器， **转换主容器的输出**

例如，想象一些你的主容器运行一个输出大量复杂日志的服务。你可以使用一个适配容器来简化这个输出，然后再发送给你的日志服务器，把主容器(以及服务的开发者)从这个服务中解放出来。
#### Ambassador

另外一个常见选择是使用以辅助容器， **作为一个代理**，在你的主容器和外部之间充当代理。

例如，你可能有不同的数据库用于不同的容器，比如测试和生产。当你的主容器需要连接到一个数据库时，它可以根据环境确定适合的数据库给 `ambassador`容器。

### 服务

Pods 可以通过其他的 Pods 的 IP 地址，连接其他的 Pods。然而，pods 是短暂的，当它们死亡时，假设你有个复控制器，一个新的 pod 将被创建，有一个新的 IP 地址。这使人们很难直接使用 IP 连接到 pods。

Kubernetes 提供了一个名为服务的抽象，**一个资源有固定的 IP 地址** ，并将请求发送到对应的 pod。

而不是直接连接到 pods，你可以通过它的 IP 地址到达它们的服务。或者通过 DNS 服务使用完整限定名称查找，这样会更好。此外，一些服务类型也将你的应用程序暴露在集群外面。
#### 服务类型

你可以创建的主要服务类型:

-   **ClusterIP –** 在集群内暴露你的应用。如果你不指定类型，这就是 Kubernetes 创建的默认服务。
-   **NodePort –**  它会在集群中的每一个 node 打开一个端口，将你的应用程序暴露给世界。
-   **LoadBalancer –**  使用云服务提供商的负载均衡器向外部暴露服务。

#### 如何在集群内部暴露你的应用程序

假设你想把你的应用程序`my-app`暴露给集群中的其他节点，端口为 80。你可以创建一个命令部署你的应用程序。

```bash
kubectl create deploy my-app --image=my-app --port=80
```

这将创建集群内部其他的 Pod 只能通过 IP 访问的 pod，如果 pod 重新启动，其 IP 将改变。

下一步是为这些 pod 创建一个 ClusterIP 服务。下面的命令创建一个可以通过 80 端口的服务，并将请求转发到的你的应用程序(80 端口)。

```bash
kubectl expose deploy my-app --port=80
```

#### 如何将你的应用程序暴露在集群之外

如果你想把你的应用服务暴露给世界，你可以使用这个配置创建一个 NodePort 服务。

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

服务并不是将你的应用程序给世界的唯一方法。你也可以用 **Ingress 对象**作为你的集群的一个入口点。

除此之外，你还需要一个 **Ingress 控制器**，比如 Nginx,来实现对 Ingress 对象中定义的规则。

由于 Ingresses 不在 CKAD 的范围内，我们将转到其他的主题。

### [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

一个 Job 将创建一个或多个 pods  **如果它们成功，将不会被重启启动**。你可以使用它们来执行批处理, **一次性任务** ，如并行计算，备份一些文件，转换和导出一些数据等等。

除非另有说明, pod 将运行一次。你可以使用参数 `completions`来指定一项工作需要运行多少次才能被认为已经完成。默认情况下, pods 将按照顺序运行，但你可以设置 job，使它们并行运行。

如果它们没有成功运行, 你将它们配置为 `Never` 重启 (重试)。或者重启失败最多的`backoffLimit` 次数，
然后 Kubernetes 认为 job 已经失败。

下面是如何从命令行中创建一个简单的 job:

```bash
 kubectl create job my-job --image=busybox -- echo "Hello World"
```

如果它们的 job 运行成功，其状态是`COMPLETED`,其 pod(s)不会被删除，这样你就可以访问它们的日志。你可以通过以下方式看到它们。

```bash
kubectll get pods --show-all
```

在默认情况下，2 分钟后它们在默认的 pod 列表中是不可见的。

### [Cronjobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

Kubernetes 提供了`Conjobs`来创建需要定期或者在未来特定时间运行的`jobs`：定时清理和备份任务，更新 TLS 证书等等。

Kubernetes 会尽力只运行另一个`job`来执行你在`Cronjob`配置中指定的任务。然而，有 3 个常见的问题你应该注意。

-   不能保证 job 会 **准确地在所需的时间运行**。想象一下，你需要你的工作在 上午 9 点运行，你可以将`startingDeadlineSeconds`属性设置为 x 秒。这样，如果 job 没在上午 9 点 x 秒之后开始， 它将标记为失败，不会再运行。
-  **2 个 job 可能被安排在同一时间** 执行任务。在这种情况下，你需要确保任务是 _idempotent_ ，如果任务被多次执行，执行的任务的结果也不会改变。
-  **没有 job 可以安排**。 为了克服这个问题，请确保 Cronjob 能运行前一次未完成的 job。

这是创建一个简单的 Cronjob，每分钟打印出"Hello World"

```bash
kubectl create cronjob my-job --image=busybox --schedule="*/1 * * * *" -- echo "Hello World"
```

我推荐这个 [网站](https://crontab.guru/) 帮助你写出正确的 cron 定时任务。

接下的 3 个资源不是 CKAD 考试的一部分，但我认为你至少应该对它们有一个基本的了解。

### [Daemon sets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

Daemon sets(守护设置)确保在你的集群的每一个 **node** 都有一个 pod 调度。除此以外，pod 总是在运行:如果 pod 死了或者有人删除了它，pod 将被重新创建。

一个常见的使用场景是，Daemon sets(守护设置)用来收集每个 node 的日志和指标。但是，即使你不创建任何东西，它们已经在你的集群中运行了一些 Daemo sets(守护设置): Kubernetese 创建一个 Daemon set(守护设置)，在每个 node 上运行`kube-proxy` 组件。

如果你从集群中移除一个 node，Kubernetes 不会在别的 node 上创建它的守护进程，因为这个这个 node 已经在运行 Daemon set(守护设置)。如果你在集群中添加一个 node，它会自动运行 Daemon set(守护设置)。

### [Stateful set](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

到目前为止，我们应该看到部署无状态的应用或者 pods 的工具，它们有自己的持久性储存，不随工具停止运行而消失。为了部署有状态的应用，你可以是使用 Stateful set(状态设置)

由于这不是 CKAD 考试的一部分，我们就不多讲了。

### [静态 pods](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)

静态 pods 是由`kubelet`管理的颇多，而不是由 Kubernetes API 管理的。

要创建它们，你只需要创建一个普通的 pod 的配置文件和配置 kubelet 扫描该目录。如何你重启`kubelet`后，它将创建 pod，并在失败时重启 pod。

Kubernetes 将创建 pod 的镜像，这是 Kubernetes API 服务器中的一个副本。当你运行`kubectl get pods`，这个 pod 会出现，但是如果你试图用`kubectl delete podName`删除它，通过`kubelet`创建的静态 pod 运行在这个 node 上，它将直接出现在 pod 列表中。

## 如何配置 Pods 和 Containers

我们刚刚看到在可以在 Kubernetes 集群上部署不同的工作负载。现在让我们花些时间学习如何配置工作负载中的 pods 和 containers(容器)。

### [初始化容器](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/)

你可以使用  _init containers_ 来设置你的 pod 初始状态: 向 pod 的卷写入一些数据，下载些文件等等。

你可以定义一个或者多个 init 容器，它们将按顺序执行，只在所有的容器完成后，pod 才会运行，因此，init 容器也可以用来让 pod 在执行前等待某个条件。

例如，你可以让一个 pod 在启动前等待另一个服务的容器完成启动和运行。

你可以通过在 pod 的定义的 `spec`部分添加类似的这样的内容定义 init 容器。

```yaml
spec:
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', "until nslookup myservice.$(cat /var/run/secrets/kubernetes.io/serviceaccount/namespace).svc.cluster.local; do echo waiting for myservice; sleep 2; done"]
 ...
```

### [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)

将你的应用程序与代码分开是你应该遵循的实践。ConfigMaps 允许你在 Kubernetes 这样做。

ConfigMaps 是使用 **存储非机密数据的键值对**， 我们将在下一节看到  _Secrects_ 存储机密数据(如密码)。

```bash
# 通过参数传递数值
kubectl create configmap my-map --from-literal=db_url=my-url --from-literal=username=username

# 通过文件获取数值
kubectl create configmap another-map --from-file=my-file
```

一旦创建，你的应用程序可以在同一个 namespace 的 pod 以多种方式使用 ConfigMaps。

-   作为命令行参数
-   作为环境变量
-   从只读卷中的一个文件

让我们看看一个 pod 的定义使用这些办法从 ConfigMap 中读取。

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

`Secrets`跟 ConfigMaps 很相似，但你用它们来存储 **机密数据**。创建和管理`Secrets`是一个敏感的话题。请务必阅读文档。在这里，我们将学习基础知识。

创建`Secrets`的最简单方法是:

```bash
#从一个字面量创建 secret
kubectl create secret generic secret-name --from-literal=password=password
#从文件内容来创建 secret
kubectl create secret generic secret-name --from-file=path-to-file
```

然后，你可以将你的 secrets 导入 pod，以环境变量或者文件的形式:

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

Probes(探针)允许你设置判断 pod 是否健康的规则，是否为服务流量做好准备，是否准备好启动。在本节的最后，我将介绍一个带有这些 Probes(探针)的样本。

#### Liveness probes(活性探针)

Kubernetes 会自动重启 _crashed containers_ (崩溃的容器)。然而,这不会考虑到下面的 bug (像你的应用程序的无限循环), 死锁等等。 你可以定义 `Liveness probes`(活性探针) **检测你的应用程序是否健康**。 Kubernetes 使用这探针来决定是否要重启容器。

你可以定义三种 Liveness probes(活性探针):

-   HTTP Get, 在你的应用程序中定义一个 HTTP 路由(如/health)，Kubernetes 可以通过 HTTP 请求获取应用程序是否健康
-   TCP socket 探针，尝试建立一个 TCP 连接到一个特定的端口。如果连接不能建立，应用程序将重启。
-   Exec 探针,  在容器内运行一个命令，如果退出状态码不是 0，将重启容器。

#### Readiness probes(准备就绪探针)

想象一下，一个服务在启动时需要加载一个大的配置文件。容器本身是健康的(这可以用上面的 Liveness probes 检查)，但是没有启动完，接收请求。

Kubernetes 使用 Readiness probes(准备就绪探针)来确定你的应用程序是否准备好，处理请求。

关于 Liveness probes(活性探针)的东西也适用于 Readiness probes(准备就绪探针):

-   它们可以被配置为初始延迟，超时，阈值，周期等等。
-   它们可以基于 HTTP get 调用，TCP socket 连接，或者在容器内执行命令。

然而，当 Liveness probes(活性探针)告诉 Kubernetes 信息，Kubernetes 让不健康的容器重启。Readiness probes(准备就绪探针)用来从可以接收请求的容器池移除没准备好的容器。一旦容器准备好了，它就可以为请求提供服务。

#### Startup probes(启动探针)

Startup probes(启动探针)只能在启动期间使用，例如应用程序启动缓慢。如果 Startup probes(启动探针)返回成功，liveness and readiness 探针(如果已经配置)，将定期运行。

### 例如

这个 pod 将执行以下命令:

-   sleep 20
-   touch /tmp/healthy
-   sleep 30
-   rm -rf /tmp/healthy
-   sleep 600

在配置探针时，你应该注意的最基本参数是:

-   **initialDelaySeconds** 开始探针延迟秒数
-   **periodSeconds** 探针频率
-   **timeoutSeconds**   探针的超时时间
-   **failureThreshold** Kubernetes 尝试次数，超过这个，将放弃尝试
根据我们的配置, 这些探针将在 pod 创建后 10 秒后开始。在前 20 秒内, 文件 `/tmp/healthy`是不存在。因此, readiness probe(准备就绪探针)返回失败。 在接下 30 秒内 readiness probe(准备就绪探针)返回成功，直到我们删除`/tmp/healthy`文件。

liveness probe(活性探针) 是简单的`echo "I'm healthy"`命令。如果它能运行，说明这个 pod 是健康的，否则，这个 pod 要重启。

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

执行这个命令可以看到 pods 的状态:

```bash
kubectl get pods --watch
```

看到`Ready` 列的值 从 `0/1`, 到 `1/1` 和回到 `0/.1`?

运行这个命令，以获得一个事件列表和探针如何失败的，正如我们期待的。

```bash
kubectl describe pods my-pod
```

### [容器资源](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

你可以通过定义创建一个 pod:

-   它运行所需的最小资源量，被称为 _requests_.
-   pod 可以使用的最大资源量，被称为 _limits_.

Kubernetes 在调度 pod 时，会考虑到你请求的资源。它不会在一个没有足够容量的节点上调度 pod，不管当前资源的消耗情况如何。

例如， pod A 和 podB 在 node N 上运行，Kubernetes 将通过下面的方法计算新的 pod C 是否可以在 node N 上运行:

`Total capacity of N - (resources requested by A + resources requested by B) <= resources requested by C`( node N 的总资源减去 A B 需要的最小资源后，是否少于 pod C 需要的最小资源量)

即使 pod A 和 B 没有使用它们请求的最小资源， Kubernetes **承诺** A 和 B 会有它们所请求的最小资源可使用。这是为什么当前的资源使用情况不在前面的公式表达。

如果一个 pod 超过它的资源限制(它可以使用的最大资源量时)，会发生两种情况:

-   如果它超过 CPU 限制，它将被杀掉
-   如果它超过内存限制，它将会被重新启动

现在让我们创建一个 pod，设置好它的最小内存和 cpu 和最大内存和 cpu 使用:

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

作为一个练习，设置分配的内存和 cpu 高得离谱一些的值，去创建 pod。你会看到 pod 从未准备好，将有输出

```bash
kubectl describe pods resource-limited-pod
```

会告诉你为什么.

## [怎样在 Kubernetes 中调度 Pods](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)

这一部分不是 CKAD 考试教程的一部分。但我相信，你应该对我在这样阐述的概念有一些基本的了解，因为你在使用 Kubernetes 的过程中，它们很可能会出现。

Kubernetes 允许你通过多种机制来指定你希望的 pods，被安排到哪个 nodes。

最简单的是使用 **nodeSelector** 字段，根据一个 label 选择一个 node。其他功能的使用，允许更复杂的设置。

### [Taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

你可以 **taint(污损) 一个 node 去防止在其中的 pods 被调度**, 不用去修改 pods 本身。 当你 taint(污损)一个 node,  Kubernetes 会调度 这个 node 中的 pods，**容忍** taint(污损)。

你可以看到这个动作，如果你运行:

```bash
kubectl describe node master.Kubernetes
```

在前一个命令的输出中，你会看到这样一行字:

```bash
Taints: node-role.kubernetes.io/master:NoSchedule
```

这种污损会阻止 pods 在 master node 中被调度 (除非 pods 能容忍这种 taint).

 有三种类型的 taint:

-   NoSchedule: 如果 node 不能容忍 taint，Kubernetes 不会在 node 中调度 pod。
-   PreferNoSchedule: pods 不能容忍 taint，不会调度在一个 node 中，除非 pods 不能调度到其他地方。
-   NoExecute: 如果已经在 node 中运行的 pods 不容忍 taint，就把 pods 从 node 中移除出去。

**Taints 并不保证 pods 会被调度到特定的 nodes**。 为了实现这一点,你需要探索 _Node affinity_ (node 亲和性) 概念.

### Node 亲和性

Node 亲和性 告诉 Kubernetes 去 **调度 pods 到特定的 nodes 上**.

想象一下，你有一个服务 S，需要特定硬件去运行。你像把专用硬件用于这个服务，并希望 S 的 pod 在上面运行。你怎样才能实现？

你可以 taint 这种设备上的 nodes，以便只有来自服务 S 的 pod 可以在这些 node 上被调度。但是，Kubernetes 可以在其他不不具备的所需硬件上的 nodes 部署这些 pods。

我们可以看到: 组合 taints 和 node 亲和性来确保只有来自服务 S 的 pod 在我们的专门的 nodes 运行。

-   Node 亲和性调度将 S 的 pods 安排到专门的 nodes(而不是其他节点)。
-   Taints 确保没有其他的 pod 会被安排在专门的 nodes，只有来自服务 S 的 pod。

## Kubernetes 的存储

默认情况下，当一个 pod 内的容器重启，容器内的数据会丢失，设计上是这样的(无状态)。

如果你想让数据比容器，pod，甚至是 node 都持久，你需要用 **卷**。另外，如果一个 pod 是由多个容器组成的，那么这个 pod 的卷可以被所有的容器使用。

### [卷](https://kubernetes.io/docs/concepts/storage/volumes/)

在你定义了卷后，在 pod 层，你需要在每个访问的容器装载它。

有很多类型的卷，以满足不同的使用情况(通常，取决于你想在 _pod_ 被销毁时发生什么)。一些常见的卷类型:

-   emptyDir: 创建一个初始是空的目录。这是在 pod 不同容器之间共享文件的简单方法。
-   hostPath: 将一个文件或者目录从 node 的文件系统挂载到 pod，在 pod 被删除后，这些文件将保留在主机种。
-   在 AWS, GCP, 或者 Azure 云上的卷.

关于这些和其他类型的卷的更多信息，请参考文档。

在容器种挂载一个卷，你的 pod 的描述符(我们把这个文件称为 `with-mounted-volume.yaml`),应该是这样的。

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

由于我们已经创建了一个`hostPath`的卷，它的内容寿命将超过 pod。让我们试一下。

```bash
# 创建一个 pod
kubectl apply -f with-mounted-volume.yaml
# 创建一个文件 并挂载到本地
kubectl exec -it with-mounted-volume -- sh -c "echo 'Inside the pod' > /tmp/my-volume-path/newfile"
# 尝试去读取一个文件
kubectl exec -it with-mounted-volume -- cat /tmp/my-volume-path/newfile
# 删除 pod
kubectl delete pods with-mounted-volume
# 创建一个pod
kubectl apply -f with-mounted-volume.yaml
# 查看 `/tmp/my-volume-path` 下的内容，看它是否存在
kubectl exec -it with-mounted-volume -- cat /tmp/my-volume-path/newfile
```

#### Revisiting 多容器的 pods

现在我们熟悉了卷，让我们创建一个多容器的 pod，它将用在一个挂载了卷的容器间共享日期。

-   我们的 pod 描述定义 在文件`communicating-containers.yaml`
-   我们将会一个带有 2 个 `busybox` 容器的 pod。
-   其中一个容器将"Hello World" 追加到一个文件中。
-   另一个容器可以访问这个文件的内容(以及放在这个共享卷的任何东西)。我们将查看这个共享文件夹，看另一个容器是如何将`Hello World`追加到文件里的。
这就是我们定义的 pod:

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

让我们创建 pod:

```bash
kubectl apply -f communicating-containers.yaml
```

 一旦 pod 运行起来，我们就可以 tail`container-2`文件，查看文件尾部内容:

```bash
kubectl exec -it communicating-containers -c container-2 -- tail -f /etc/a-different-location/log
```

尽管`container-1`写东西到 `log`,但由于`log`在一个共享卷中，`container-2`可以看到这个文件。

### [Persistent Volumes(持久化卷)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)

Persistent Volumes (PVs 持久化卷) 和 Persistent Volume Claims (PVCs  持久化卷声明) 通过存储技术跟 pod 解耦。 PVs 是通过集群管理员创建 或者动态根据 [存储类型](https://kubernetes.io/docs/concepts/storage/storage-classes/).

相对我们之前创建的卷，在 pod 层定义的，PV(持久化卷)有自己的生命周期，独立于任何 pod。

在创建 PVs 后, _用户_ 能创建 Persistent Volume Claims (持久化卷声明)来获得它们需要的存储, _而不需要关心其存储的实际基础设施_.

#### 例如

首先, 我们定义一个 Persistent Volume（持久化卷）在 pv.yaml 文件:

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

对于 Persistent Volume Claim(持久化卷声明), 在文件 pvc.yaml 描述:

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

现在, 让我们在集群中创建资源。

```bash
# 首先, 创建Persistent Volume(持久化卷)
kubectl apply -f pv.yaml
# 然后, 创建the Persistent Volume Claim(持久化卷声明)
kubectl apply -f pvc.yaml
```

我们可以从前面的例子获取 pod 的定义，稍作调整，开始使用这个持久化卷，代替我们定义的 hostPath，这是我们唯一要改的地方。

```yaml
volumes:
  - name: mypd # 当我们配置pod时，要参考这个卷
    persistentVolumeClaim: # 替换掉hostPath
      claimName: mypvc # 名称是我们刚才创建的pvc 
```

## Kubernetes 中的网络和安全

关于安全问题, 这些概念是你应该熟悉的最低限度，以便通过 CKAD 考试。

### [Network Policies(网络策略)](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

默认情况下，所有的 ingress 流量(即流入你的应用程序的流量)和 egress 流量(即你的应用程序流出的流量)都是允许的。如何 pod 都可以连接到其他的 pod，即使它们在不同的 namespaces。

你可以定义网络策略，根据不同的标准控制 ingress 流量和 egress 流量

为了说明这一点,我们创建一个网络策略，只允许带有 label `access: allowed`的 pod 访问的我们的数据库:

```yaml
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: access-db-policy # 起个名称
spec:
  podSelector:
    matchLabels:
      app: db # 数据库pods选择
  ingress: # 允许的 ingress 流量
  - from:
    - podSelector: 
        matchLabels: 
          access: allowed # 只有具有该label的pod才能向数据库发送流量
```

### [Security Context(安全背景)](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)

当配置一个 Security Context(安全背景), 你可以启用一些安全功能，比如防止容器以 root 身份运行, 选择什么用户运行 pod 等等，下面是一个例子:

```bash
spec:
  securityContext:
    runAsUser: 1000 #这将为这个pod层的每个容器设置用户，但可以被覆盖。
  containers:
  - name: my-container
     image: alpine
     securityContext:
     	runAsUser: 1001 #    这覆盖在pod层上的用户设置 	
  - name: another-container
	....
```

### [Services Accounts(服务账号)](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)

你的应用程序可以连接到 API 服务器进行数据交换。例如, 检索有关 pod 信息在一个 namespace。Service accounts(服务账号) 允许应用服务对 API 服务器进行认证，以便它们进行数据交互。

这是一个 _default service account_ (默认的服务账号), 但是这不一个好的实践，因为不是每个应用程序都需要在 API 服务器上执行相同的操作。

创建 service account(服务账号)的最简单的方法是通过命令行:

```bash
kubectl create serviceaccount my-sa
```

一旦创建, 你一个分配 `serviceAccountName` 字段 (pod 描述符)分配给一个 pod:

```bash
spec:
  serviceAccountName: my-sa
  containers:
  - name: web-server
  ...
```

一旦应用程序被认证,下一步看它是否有适当的权限来完成它所要的操作,也就是说, 查看应用程序是否被授权。

### [Role Based Access Control(基于角色的访问控制)](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

管理授权的一个常见办法是 **Role Based Access Control (RBAC)** (基于角色的访问控制)。 Service accounts(服务账号) 被链接到一个或者多个 role(角色)。 每个 role(角色)都有在某个资源上执行特定操作的权限。

RBAC 授权是通过两个独立的步骤来定义的:

-   Role 创建, 使用 Role 和 ClusterRole 资源, 以指定在某些资源上可以执行的操作。
-   绑定 roles 到账号上, 通过使用 RoleBinding 和 ClusterRoleBinding 。

正如你所想，包含前缀`Cluster`的资源在整个集群范围内可用，而其他的资源只在特定的 namespace 中定义。

由于这不属于 CKAD 考试的范围，我们将不讨论如何在你的集群中创建和配置 RBAC 的细节。

## Kubernetes 中的可观察性和调试

一旦你部署你的应用程序, 你如何知道你的集群发生了什么?

我们已经介绍了 Probes 作为一种机制决定是否重启 pod，以及 pod 是否为网络流量做好了准备。在这里，我们将看到更多的机制来更好地了解我们的集群状态，并对任何问题故障排除。

#### 获取 Pod 的基本信息

访问 pods 的当前状态，有两个基本选项。这是第一选项:

```bash
kubect get pods
```

这将显示你的 pods `STATUS`, `AGE`,  `RESTARTS`的数量和多少 pods 内的容器处于 `READY`状态. 你可以用这个命令去显示 pod 的 ip 地址、labels 等等。

第二个选项提供了更详细的信息:

```bash
kubectl describe pods my-pod
```

在这个命令的输出的最底部，你会发现一个事件列表，在出差的情况下会给你提示:

-   Liveness/readiness probes 失败
-   拉取镜像出现错误
-   没有足够的内存分配给 pod

等等。

### 如何获取容器的日志

如果一个 pod 正在运行，你可以使用以下命令访问它的日志。

```bash
kubectl logs pod-name [-c container-name] [-n namespace]
```

如果你的 pod 有不止一个容器，你只需传递容器名称。同样，从不同的 namespace 中检索日志要用 namespace 标志符(-n) 

你甚至 tail 日志 `-f` 标志符，看到日志尾部，获取最新的变化:

```
kubectl logs -f pod-name [-c container-name] [-n namespace]
```

这对认证来讲是足够了。然而, 在真实的生产环境中，手动检查日志是很麻烦和低效的。 如果你在用 GCP(谷歌云)，你会希望用其他技术来管理你的日志和服务，像 StackDriver 技术。如果你想了解更多的有关 StackDriver 和 GCP 的信息，请务必查看我的[GCP 指南](/news/google-cloud-platform-from-zero-to-hero/).

### 处理故障的小技巧

虽然在排除故障时没有灵丹妙药, 但从 pod 层开始通常是一个好注意，可以从可以找到问题的根本原因。

你的基本工具是我们上面提供的命令，除此之外，你可以随时在 pod 里打开一个终端。

```bash
# 假设你的容器镜像使用 sh
kubectl exec -it my-pod -c container -n namespace -- sh
```

**不建议** 用这种方式去解决 pod 的内部问题, 因为根据设计，pods 是短暂的，在 pods 重启后，你的修改会丢失, 问题会复现。 当然, 这是一个好的方法去很好地了解问题。

获取你的 pod 或者 node 的指标，你可以运行以下命令。

```bash
kubectl top pod pod-name
```

这些工具帮助你解决日常操作中最常见的问题。有太多的事件会出差，在这里不做解释了。如果你面对一些你无法解决的事情，我建议你访问这个，[调试你的应用程序](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/)

## 技巧和窍门

这是我发现的一些技巧，在我日常的 Kubernetes 工作中，特别是在通过 CKAD 考试时很有用。 **提高考试速度和效率部分** 。考虑到这点，让我们来看看可以做些什么来表现得更好。

### 设置别名

你将反复输入相同的命令。一旦开始考试，请创建以下别名。

```bash
# 重要的别名，我强烈建议设置它们
alias k='kubectl'
alias kg='k get'
alias kgpo='k get pods'
alias kdpo='k describe pod'
alias kd='k describe'

# 我还发现这个非常有用
alias kap='k apply -f'

# 我设置这个，只为工作需要
alias kgpoa='kgpo --all-namespaces'
alias kgpol='kgpo --show-labels'
alias kgpow='kgpo -o wide'
alias kgd='kg deploy'
alias kgs='kg svc'
alias kdd='kd deploy'
alias kds='kd svc'
```

### 更快搜索你的命令历史

我见过很多工程师，其中很多是高级工程师(seniors)，笨拙按了 20 次以上的箭头键，在他们的命令历史中找东西。

不同的是，确保你自如地使用`Ctrl + r`，只有按下它并开始输入你要输入的命令的某些部分。然后，继续按`Ctrl + r`，直到你找到它。现在你可以按`Enter`运行它，或者简单开始修改后再运行。

这是一个节省大量时间的方法，并不是每个人都知道的。
### 熟悉文档

你可以在考试期间查阅文档，然而，这不是学习新东西的时候。访问文档获得 yaml 的模板，检查特定的参数等等。

确保你对 **文档的结构** 很熟悉和知道去哪里找东西。 使用 **搜索功能** ，更快找到.

这份 [Kubectl cheat sheet(简明手册)](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) 是金子和 **在考试期间可以为你你所用**.

### 你不需要记住所有的东西

除了文档, `kubectl` 有 `--help` 关于大多数命令的查看 (`-h` 是简写)。大多数时候，你会在那里找到问题的答案。

事实上，我建议你在查阅文档之前这样做，因为这要快得多。

想象一下，你想创建一个资源配额对象。你不记得你需要写的 yaml 或者创建它的命令。你知道 `kubectl command` 和 `--help` 参数。那么在查阅文档之前，你应该先试一试这个:

```bash
# 我们可以创建得到创建资源配额对象所需要的东西
kubeclt create quota -h
# 例子
kubeclt create quota my-quota --hard="secrets=2"
```

你有大量的信息来源，因此你不需要记得住这么多的命令或者参数。

然而，考试期间时间非常有限，我认为值得熟记一些命令和任何使用它们。
### 快速生成一个基本的 pod

**这一点尤为重要**。与其每一次需要一个 pod 时从文档中复制和粘贴，不如使用下面的命令获得一个描述符，你可以在以后修改它以满足你的需求。

```bash
# 运行一个pod nginx，并将其参数写入一个pod.yaml文件中
kubectl run nginx --image=nginx --restart=Never --dry-run=client -o yaml > pod.yaml
# 可以指定一些参数写入pod.yaml文件中
kubectl run nginx --image=nginx --restart=Never  --port=80 --labels=key=val --dry-run=client -o yaml > pod.yaml
```

别的有用的参数:

```bash
--rm # 在运行完成后立即删除pod
-it # 进入交换式终端，直接在pod中有运行命令
```

例如，你可以用它创建一个临时的 pod，用它验证你的工作:

```bash
kubectl run tmp --image=busybox --restart=Never --rm -it -- /bin/sh
```

现在你可以运行命令 `wget -O- svc:port` ，看看你的服务是否在运行，网络策略是否在工作等等。

##### 注意

 `--dry-run=client -o yaml`不仅适用于 pod,也适用于很多资源。如果我们回到上一节，我们创建一个资源配额，我们可以得到这样描述符:

```bash
kubeclt create quota my-quota --hard="secrets=2" --dry-run=client -o yaml
```

### 使用 grep

你不需要深入了解正则表达式。只要使用关键词。例如，从冗长的`kubectl describe pods my-pod` 快速检索信息:

```bash
# -i 参数使搜索不区分大小写。有点慢，但对于非常短的文本来讲，这不会有什么影响。 
# -C 2 参数将显示匹配的最前2行和最后2行 (C 是 context的缩写)
kubectl describe pods my-pod | grep -i -C 2 labels
kubectl describe pods my-pod | grep -i -C 2 ip
...
```

### 观察 pods 的状态变化

与其每隔几秒手动运行`kubeclt get pods`来查看变化，不如通过`watch` 参数来查看你的 pods 是如何变化:

```bash
kubectl get pods --watch
```

### 快速删除 Pods

犯错是学习过程的一部分。在考试中你也会犯错。由于时间紧迫，我们需要确保在删除资源时不要等待很长时间，通过这些参数可以快速删除 pods:

```bash
k delete pods my-pod --force --grace-period=0
```

### 用一个特定命令运行 Pod

我发现学习如何用命令行想 pod、job、cronjobs 等传递命令很有用，比如这个例子:

```bash
kubectl run loop --image=busybox -o yaml --dry-run=client --restart=Never \
-- /bin/sh -c 'for i in {1..10}; do echo "Counting: $i"; done' \
> pod.yaml
```

这会产生一个文件 pod.yaml:

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

你可以运行一个命令，也可以运行多个命令链，就像一个小型的 bash 脚本一样:

```bash
# 运行一个特定的可执行文件
kubectl run busybox --image=busybox -it --restart=Never -- echo 'hello world'
# 在shell内运行(对运行多个命令很有用)
kubectl run busybox --image=busybox -it --restart=Never -- /bin/sh -c 'echo hello world'
```

这不是一个巨大的区别，但你不需要记住如何在 pod 的描述符中写，也不需要浪费时间去打开文档。 **你只需要使用你已经知道的东西**

### roll out(展开)

熟悉`rollout`命令，以获得关于你的部署状态的信息。

我总是使用 `--help` 参数，来记住如何做我想做的事。

```bash
kubectl rollout -h
```

### Bonus(奖励)

最后这些提示不是针对认证的，而是针对日常工作的:

-   这个[kube-ps1 模块](https://github.com/jonmosco/kube-ps1) 让你很容易知道你是在那个集群和 namespace 中操作的, 以防止犯错误，比如你不应该乱用 prod(生产环境)资源。
-  另外，我推荐你看一下[Helm](https://helm.sh/)。Helm 是一个软件包管理器，可以用来轻松部署应用程序 (像`npm`)。 Helm 还允许你编写模板，你可以根据不同的值 (name, resource requests and limits, and so on)重复使用，创建对象。

## 练习时间

**做事永远比读书学得多**。所以我在这里留下一些我在准备考试已经解决的问题，供你练习。 查看[项目地址](https://github.com/dgkanatsios/CKAD-exercises) 和 [这篇文章](https://medium.com/bb-tutorials-and-thoughts/practice-enough-with-these-questions-for-the-ckad-exam-2f42d1228552).

我建议在你先解决自己的所有问题，再看我上面提到资料。同时验证你做的东西: 检查日志，创建一个 pod 来连接你的服务等等。这也将有助建立你在考试中肌肉记忆。

尝试根据我的提示来练习这些练习，就像你真的在考试中一样，不分心，在浏览器里只打开一个标签--Kubernetes 的官方文档。

## 结论

本指南包含了将提高你的技能到新的水平，通过 CKAD 考试以及成为一名真正的 Kubernetes 开发者所需要的一切。这一切在你手中，你只需要付出一些努力，祝你好运！

你可以访问到我的博客[www.yourdevopsguy.com](https://www.yourdevopsguy.com/) 和 [在推特上关注我](https://twitter.com/CodingLanguages) 获得更多高质量的技术内容。

如果你喜欢这篇文章，请分享它，因为你可以帮助别人通过考试或者找到工作。