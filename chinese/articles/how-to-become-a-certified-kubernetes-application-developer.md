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

It tells Prometheus to override the default values for _scrape_ and _port_ with `true` and `9102` respectively.

## Beyond Pods and Deployments

As you know by now, a **pod** is the basic unit in Kubernetes. In most cases, you can think of it as a container but a pod can consist of multiple containers. Since pods are ephemeral in nature, we need a mechanism to make sure new pods are created when our existing pods die.

With deployments you can define a desired state, for example having 3 replicas of your application always running. Kubernetes will work towards achieving and keeping this state in the cluster at all times.

Deployments can also be used to easily manage the number of replicas running at any time, perform rolling updates, roll back to previous versions, and so on.

However, there are many more workloads.

### Multi-container pods

A pod can run more than one container. Containers can talk to each other seamlessly, because they are in the same network and they can use _volumes_ to share data.

For now, let's dive into some common design patterns for multi-container pods. Later in this guide we'll see volumes in detail and how to deploy some of these patterns.

#### Sidecar

In this pattern we have a container that runs your main application along with another container that **runs secondary tasks to enhance your main container**.

A classical example is running a web server (main container) along with a side container that handles tasks like logging, monitoring, refreshing data in the pod volume, terminating TLS, and so on.

#### Adapter

Similarly, you can have your main container and a secondary container that **transforms the output of the main one**.

For example, imagine your main container runs a service that outputs a lot of complex logs. You can use an adapter container to simplify this output before it gets sent to your logging service, offloading the main container (and the developers of the service) from this task.

#### Ambassador

Another common option is to use a secondary container **to act as a proxy** between your main container and the external world.

For instance, you probably have different databases for different environments, like testing and production. When your main container needs a connection to a database, it can offload to the ambassador container the task of figuring out the appropriate database depending on the environment.

### Services

Pods can connect other pods using their IP addresses. However, pods are ephemeral by nature. When they die, assuming you have a replication controller, a new pod will be created with a new IP address. This makes it hard use IPs to connect to pods directly.

Kubernetes offers an abstraction called Service that creates **a resource with a fixed IP address** and send requests to the appropriate pods.

Instead of connecting to the pods directly, you can reach their service via its IP address or even better using its fully qualified name thanks to the DNS service. Furthermore, some types of services expose you application outside the cluster too.

#### Types of Services

The main type of services you can create are:

-   **ClusterIP –** To expose your application inside the cluster. This is the default service that Kubernetes creates if you don't specify a type.
-   **NodePort –** It opens a port on every node in the cluster to expose your applications to the world.
-   **LoadBalancer –** Exposes a service externally using a cloud provider load balancer.

#### How to expose your application inside the cluster

Let's say you want to expose your application `my-app` to other nodes in the cluster on port 80. You could you create a _deployment_ that deploys your application with this command:

```bash
kubectl create deploy my-app --image=my-app --port=80
```

This will create pods that can only be accessed from other resources inside the cluster by their IP, which will change if the pods restart.

The next step is to create a ClusterIP service for these pods. The following command creates a service that can be reached at port 80 and will forward the requests to your application (also at port 80).

```bash
kubectl expose deploy my-app --port=80
```

#### How to expose your application outside the cluster

If you wanted to expose you application to the world instead, you could use this configuration to create a NodePort service:

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
    	port: 80 # The port where you can reach this service
    	targetPort: 80 # The port that you opened in the pod
```

### [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

Services are not the only way to expose your applications to the world. You can also use an **Ingress object** as an entry point for your cluster.

In addition to this, you need an **Ingress Controller**, like Nginx, to implement the rules defined in the Ingress object.

Since ingresses are out of the scope of the CKAD, we will move onto other topics.

### [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

A Job will create one or several pods that will **not be restarted if they complete successfully**. You can use a them to perform batch jobs, that is, **one-off tasks** like carrying out a calculation, backing up some files, transforming and exporting some data, and so on.

Unless stated otherwise, the pod will run once. You can specify how many times a job needs to be run to be considered COMPLETED, using the parameter `completions`. By default, pods will run sequentially but you can set up the Job so that they run in parallel.

In case they don't complete successfully, you can configure them to either `Never` restart (try again) or to restart `OnFailure` up to `backoffLimit` times before Kubernetes considers that the job has failed.

Here's how to create a simple job from the command line:

```bash
 kubectl create job my-job --image=busybox -- echo "Hello World"
```

If they job ran successfully, its state will be COMPLETED and its pod(s) won't be deleted so that you can access their logs. You can see them using:

```bash
kubectll get pods --show-all
```

since by default they won't be visible in they default list of pods after 2 minutes.

### [Cronjobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

Kubernetes offers Conjobs to create jobs that need to run periodically or at a specific time in the future: periodical cleanup and backup tasks, renewal of TLS certificates, and so on.

Kubernetes will try its best to run only one Job to perform the task you specified in the Cronjob configuration. However, there are 3 common issues that you should be aware of:

-   It is not guaranteed that the job will run **exactly at the desired time**. Imagine you need your job to run at 09:00:00. You can set the `startingDeadlineSeconds` property to X seconds so that, if the job has not started by 09:00:00 + X seconds, it will be marked as failed and not run.
-   **2 Jobs might be scheduled at the same time** to perform the task. In this case, you need to make sure that the tasks are _idempotent_, this is, the result of executing the task won't change if the task is carried out multiple times.
-   **No jobs might be scheduled**. To overcome this issue, make sure the Cronjob picks up any work undone by the previous run.

This is how you create a simple cronjob that prints "Hello World" every minute:

```bash
kubectl create cronjob my-job --image=busybox --schedule="*/1 * * * *" -- echo "Hello World"
```

I recommend this [website](https://crontab.guru/) to get your cron schedule expressions right.

The next 3 resources are not part of the CKAD exam, but I think you should have a basic understanding of them at least.

### [Daemon sets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

Daemon sets ensure that a pod is scheduled in every **node** of your cluster. In addition to this, the pod is always up and running: if it dies or if someone deletes it, the pod will be recreated.

A common use case for Daemon sets is to collect logs and metrics that come from each node. But even if you don't create any, they are already some daemon sets running in your cluster: Kubernetes creates a daemon set to run a component called `kube-proxy` in every node!

If you remove a node from the cluster, Kubernetes will not recreate its daemon in another node, because this node will already be running the daemon set. If you add a new node to the cluster, it will automatically run the daemon set.

### [Stateful set](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

So far, we have seen tools to deploy stateless applications or pods that have their own persistent storage that will outlive them. To deploy stateful applications you can use stateful sets.

Since this is not part of the CKAD exam, we will not get into more details.

### [Static pods](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)

Static pods are pods managed by `kubelet`, not by the Kubernetes API.

To create them, you just need to create a regular pod configuration file and configure kubelet to scan that directory. After you restart `kubelet` , it will create the pod and restart it if it fails.

Kubernetes will create a mirror pod, this is, a copy of the pod in the Kubernetes API server. You can see that this pod appears when you run `kubectl get pods`, but if you try to delete it using `kubectl delete podName` it will show up in the pod list immediately, created by the `kubelet` that runs in the node where you created the static pod.

## How to Configure Pods and Containers

We have just seen different workloads that you can deploy on your Kubernetes cluster. Let's spend some time now learning how to configure the pods and containers that run these workloads.

### [Init Containers](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/)

You can use _init containers_ to set the initial state your pod: by writing some data to the pod's volume, downloading some files, and so on.

You can define one or more init containers for the same pod. They will be executed sequentially and the pod will only start running after all containers are done. Therefore, init containers can also be used to make the pod wait for a certain condition before it is executed.

For instance, you can make a pod wait for another service to be up and running before it can start.

You can define an init container by add the something like this under the `spec` section of your pod description:

```yaml
spec:
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', "until nslookup myservice.$(cat /var/run/secrets/kubernetes.io/serviceaccount/namespace).svc.cluster.local; do echo waiting for myservice; sleep 2; done"]
 ...
```

### [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)

Keeping you application configuration separate from the source code is a practice you should follow. ConfigMaps allow you to do this in Kubernetes.

ConfigMaps are used to **store key-value pairs of non-confidential data**. We will see how to store confidential data (for example, passwords) in _Secrets_ in the next section.

You can create a ConfigMap from the command line:

```bash
# Passing the values as arguments
kubectl create configmap my-map --from-literal=db_url=my-url --from-literal=username=username

# Passing the values from a file
kubectl create configmap another-map --from-file=my-file
```

Once created, your application can use it in a pod that is in the same namespace in multiple ways:

-   As command line arguments
-   As environment variables
-   From a file in a read-only volume

Let's see a pod definition that reads values from a ConfigMap using these approaches:

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

Secrets are very similar to ConfigMaps, but you use them to store **confidential data**. Creating and managing secrets is a sensitive topic. Be sure to read the documentation. Here we'll see the basics.

The simplest way to create a secret is:

```bash
#To create a secret from a literal
kubectl create secret generic secret-name --from-literal=password=password
#To create a secret from the content of a file
kubectl create secret generic secret-name --from-file=path-to-file
```

Then, you can mount your secrets into the pod as environment variables or files:

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

Probes allow you set rules to decide if a pod is healthy, if it is ready to serve traffic and if it is ready to start. At the end of this section I will present a sample descriptor with these some probes.

#### Liveness probes

Kubernetes will automatically restart _crashed containers_. However, this will not account for situations like bugs (imagine an infinite loop in your application), deadlocks, and so on. You can define liveness probes to **detect whether your application is healthy**. Kubernetes uses this probe to decide if it needs to restart the container.

There are three types of liveness probes you can define:

-   HTTP Get, where you define an endpoint in your application (for example /health) that Kubernetes can hit to determine if the application is healthy.
-   TCP socket probe, that tries to establish a TCP connection to a specific port. If the connection cannot be established, the applications is restarted.
-   Exec probe, that runs a command inside the container and restarts it if the exit status code is different from 0.

#### Readiness probes

Imagine a service that needs to load a large configuration file during startup. The container itself might be healthy (this can be checked using liveness probes described above) but not ready to start accepting requests.

Kubernetes uses readiness probes to determine if your application is ready to start serving traffic.

Many of the ideas discussed for liveness probes apply to readiness probes too:

-   They can be configured with an initial delay, timeout, threshold, period, and so on
-   They can be based on HTTP get calls, TCP socket connections, or Execution of commands inside the container

However, while liveness probes tell Kubernetes to restart the container if it is not healthy, readiness probes are used to remove the container from the pool of containers that can accept requests. Once the container is ready, it can start serving requests.

#### Startup probes

Startup probes are used only during startup, for example for applications that are slow to start. If the startup probe succeeds, the liveness and readiness probes (if configured) will start running periodically.

### Example

This pod is going to execute the following commands:

-   sleep 20
-   touch /tmp/healthy
-   sleep 30
-   rm -rf /tmp/healthy
-   sleep 600

The most basic parameters you should be aware of when configuring your probes are:

-   **initialDelaySeconds** before starting to probe
-   **periodSeconds** to define how often to probe
-   **timeoutSeconds** after which the probe times out
-   **failureThreshold** to determine the number of tries after which Kubernetes gives up

With our configuration, the probes will start 10 seconds after the pod is created. During the first 20 seconds, the file `/tmp/healthy` does not exist. Therefore, the readiness probe will fail. We'll then create that file and for the next 30 seconds the readiness probe will succeed, until we remove the file again.

The liveness probe is a simple `echo "I'm healthy"` command. If it can be run, the pod is healthy. Otherwise, it needs to be restarted.

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

Execute this command to see the pod going through these states:

```bash
kubectl get pods --watch
```

See how the `Ready` column goes from `0/1`, to `1/1` and back to `0/.1`?

Run this command to get a list of events and see how the probes were failing, as we expected.

```bash
kubectl describe pods my-pod
```

### [Container Resources](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

When you create a pod, you can define:

-   The minimum amount of resources it needs to run, known as _requests_.
-   The maximum amount of resources the pod should use, known as _limits_.

Kubernetes will take into account the resources you requested when it tries to schedule the pod. It will not schedule the pod in a node that hasn't got enough capacity, regardless of the current resource consumption.

For instance, if pods A and B are running in node N, Kubernetes will calculate if the new pod C can fit in N by doing something like:

`Total capacity of N - (resources requested by A + resources requested by B) <= resources requested by C`

Even if pods A and B are not using all the resources they requested, Kubernetes **promised** they would have those resources available on that pod. That's why the current resource usage is not part of the previous formula.

If a pod goes over its resource limits, two things can happen:

-   If it goes over its CPU limits, it will get throttled
-   If it goes over its memory limits, it will be restarted

Let's now create a pod that requests some memory and CPU and limits the resources it is allowed to use:

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

As an exercise, set some ridiculously high values for the requested memory (and or CPU) and _try_ to create the pod. You'll see that the pod never becomes ready. The output of

```bash
kubectl describe pods resource-limited-pod
```

will tell you why.

## [How to Schedule Pods in Kubernetes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)

This section is not part of the curriculum for the CKAD exam. But I believe you should have at least some basic understanding of the concepts I'll expose here because they're likely to come up as you work with Kubernetes.

Kubernetes allows you to specify in which nodes you want your pods to be scheduled via multiple mechanisms.

The simplest one is to use the **nodeSelector** field to pick a node based on a label. However, other features have been introduced to allow for more complex setups.

### [Taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

You can **taint a node to prevent pods from being scheduled in it**, without modifying the pods themselves. When you taint a node, the only pods that Kubernetes will schedule in that node will be the pods that **tolerate** that taint.

You can see this in action if you run:

```bash
kubectl describe node master.Kubernetes
```

In the output of the previous command, you will see the line:

```bash
Taints: node-role.kubernetes.io/master:NoSchedule
```

This taint prevents pods from being scheduled in the master node (unless the pods tolerate this taint).

There are three types of taint:

-   NoSchedule: Kubernetes will not schedule pods in a node if they cannot tolerate the taint.
-   PreferNoSchedule: pods that don't tolerate the taint won't be scheduled in a node unless they cannot be scheduled somewhere else.
-   NoExecute: if the pods _already running in the node_ cannot tolerate the taint, evict them from the node.

**Taints don't guarantee that pods will be scheduled in specific nodes**. To achieve that, you need the concept of _Node affinity_ that we will explore now.

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