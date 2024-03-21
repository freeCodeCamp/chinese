> -  原文地址：[How to Pass the Certified Kubernetes Security Specialist Exam – Cheat sheet and Study Guide](https://www.freecodecamp.org/news/how-to-pass-the-certified-kubernetes-security-specialist-exam/)
> -  原文作者：[
                    
                        Faizan Bashir
                    
                ](https://www.freecodecamp.org/news/author/faizanbashir/)
> -  译者：Irenia111
> -  校对者：

![How to Pass the Certified Kubernetes Security Specialist Exam – Cheat sheet and Study Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/cks.jpeg)

This article is based on my experience studying for and passing the Certified Kubernetes Security Specialist exam. I passed the exam on my first attempt in Sep 2021.
本文基于我学习并通过认证 Kubernetes 安全专家考试的经验。 我在 2021 年 9 月的第一次尝试中通过了考试。

I passed the Certified Kubernetes Application Developer exam back in Feb 2020, followed by Certified Kubernetes Administrator in March 2020.
我于 2020 年 2 月通过了认证 Kubernetes 应用程序开发人员考试，随后于 2020 年 3 月通过了认证 Kubernetes 管理员。

The Certified Kubernetes Security Specialist or CKS exam was released around November, 2020, but I didn't have a chance to take that exam before Sep 2021.
认证 Kubernetes 安全专家或 CKS 考试于 2020 年 11 月左右发布，但我在 2021 年 9 月之前没有机会参加该考试。

As a bit of background information, I have been working with Kubernetes for the past 3 years almost on a day-to-day basis and that experience was an added advantage in helping me pass the CKS.
作为一些背景信息，在过去的 3 年里，我几乎每天都在使用 Kubernetes，这种经验是帮助我通过 CKS 的额外优势。

In this article, I'll share some resources that should help you study for and pass the exam, along with a helpful cheatsheet you can use while preparing. I'll also share some advice that should help you along the way.
在本文中，我将分享一些可以帮助您学习和通过考试的资源，以及可以在准备时使用的有用备忘单。 我还将分享一些建议，这些建议应该对您有所帮助。

### What is Kubernetes?
### 什么是 Kubernetes?

Kubernetes is the most evolved and feature-rich Container Orchestration system out there, and it keeps getting better.
Kubernetes 是目前最先进、功能最丰富的容器编排系统，并且它一直在变得更好。

It has an enormous community to support, and it's always building new features and resolving issues. Kubernetes is certainly evolving at a breakneck pace, and it becomes a challenge to keep up with its pace of development. This makes it the best bet for a container orchestration solution.
它有一个庞大的社区需要支持，它总是在构建新功能并解决问题。 Kubernetes 无疑正在以惊人的速度发展，要跟上其发展速度成为一项挑战。 这使其成为容器编排解决方案的最佳选择。
* * *

## Table of Contents

-   [Resources for the CKS Exam](#resourcesfortheexam)
-   [Aliases](#aliases)
    -   [vi defaults for ~/.vimrc](#videfaultsforvimrc)
    -   [kubectl defaults for ~/.bashrc](#kubectldefaultsforbashrc)
-   [Shortcuts](#shortcuts)
-   [Kubernetes Cheat Sheet](#kubernetescheatsheet)
    -   [kubectl run command](#kubectlruncommand)
    -   [How to generate yaml spec from an existing pod](#howtogenerateyamlspecfromanexistingpod)
    -   [kubectl pod commands](#kubectlpodcommands)
    -   [How to print logs and export them](#howtoprintlogsandexportthem)
    -   [How to create configmaps and secrets](#howtocreateconfigmapsandsecrets)
    -   [Helpful commands for debugging](#helpfulcommandsfordebugging)
    -   [Rolling updates and rollouts](#rollingupdatesandrollouts)
    -   [Scale and autoscale command](#scaleandautoscalecommand)
    -   [Network policy](#networkpolicy)
    -   [Static analysis using Kubesec](#staticanalysisusingkubesec)
    -   [Vulnerability scanning using Trivvy](#vulnerabilityscanningusingtrivvy)
    -   [How to remove unwanted services](#howtoremoveunwantedservices)
    -   [Runtime classes](#runtimeclasses)
    -   [RBAC commands](#rbaccommands)
    -   [Cluster maintenance](#clustermaintenance)
-   [CKS Exam Tips](#cksexamtips)
    -   [JSON and JSONPath](#jsonandjsonpath)
-   [CKS Exam Topics](#cksexamtopics)
    -   [How to secure and harden container images](#howtosecureandhardencontainerimages)
    -   [How to minimise OS footprint](#howtominimiseosfootprint)
        -   [Conatiner layers](#conatinerlayers)
        -   [Multi stage builds](#multistagebuilds)
    -   [How to limit node access](#howtolimitnodeaccess)
    -   [SSH hardening](#sshhardening)
        -   [How to disable SSH](#howtodisablessh)
        -   [How to remove obsolete packages and services](#howtoremoveobsoletepackagesandservices)
        -   [How to restrict kernel modules](#howtorestrictkernelmodules)
        -   [How to identify and disable open ports](#howtoidentifyanddisableopenports)
    -   [How to restrict network access](#howtorestrictnetworkaccess)
        -   [How to identity a service running on port](#howtoidentityaservicerunningonport)
        -   [UFW firewall](#ufwfirewall)
    -   [Linux syscalls](#linuxsyscalls)
        -   [How to trace Syscalls using Strace](#howtotracesyscallsusingstrace)
    -   [AquaSec tracee](#aquasectracee)
    -   [How to restrict syscalls with Seccomp](#howtorestrictsyscallswithseccomp)
        -   [Seccomp in Kubernetes](#seccompinkubernetes)
    -   [AppArmor](#apparmor)
        -   [How to use AppArmor in Kubernetes](#howtouseapparmorinkubernetes)
    -   [Linux capabilities](#linuxcapabilities)
-   [How to Prepare for the Exam](#howtopreparefortheexam)
-   [Practice, practice, and practice!](#practicepracticeandpractice)

* * *

## Resources for the Exam
## 备考资料

The following are a few awesome resources available on passing the CKS exam:
以下是通过 CKS 考试的一些很棒的资源：

1.  [Certified Kubernetes Security Specialist by Killer.sh](https://www.udemy.com/course/certified-kubernetes-security-specialist/)
2.  [Certified Kubernetes Security Specialist (CKS) by KodeKloud](https://kodekloud.com/courses/certified-kubernetes-security-specialist-cks/)
3.  [Walid Shaari has gathered some indispensable materials for the CKS exam](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)
4.  [Abdennour's References for CKS Exam Objectives](https://github.com/abdennour/certified-kubernetes-security-specialist)
5.  [Ibrahim Jelliti's collection of resources to prepare for the Certified Kubernetes Security Specialist (CKSS) exam](https://github.com/ibrahimjelliti/CKSS-Certified-Kubernetes-Security-Specialist)

The courses for KodeKloud and Killer.sh provide mock exam simulators which are very helpful in preparing for the exam, and provide a pretty good idea of what the exam looks like. I strongly suggest enrolling in one or both courses.
KodeKloud 和 Killer.sh 的课程提供了模拟考试模拟器，这对准备考试很有帮助，并且可以很好地了解考试的样子。 我强烈建议注册一门或两门课程。

Purchasing the exam from the Linux Foundation gives you 2 free attempts at the exam simulator from killer.sh. That way if you are well-versed with the contents of the curriculum you can skip the courses and directly go for the exam simulator provided with the exam.
从 Linux Foundation 购买考试后，您可以免费尝试 2 次来自 kill.sh 的考试模拟器。 这样，如果您精通课程内容，您可以跳过课程并直接进入考试提供的考试模拟器。

The exam costs $375 but there are offers and deals available, and if you look for them you might be able to get a better price. The duration of the exam is 2 hours and is valid for 2 years, unlike the CKA and CKAD which are valid for 3 years.
考试费用为 375 美元，但有优惠和优惠，如果您寻找它们，您可能可以获得更好的价格。 考试时间为 2 小时，有效期为 2 年，与 CKA 和 CKAD 的有效期为 3 年不同。

## Aliases

The CKS is a performance-based exam where you are provided with an exam simulator in which you have to work out the problems. You are allowed to open only one tab apart from the exam tab.
CKS 是一项基于表现的考试，您将获得一个考试模拟器，您必须在其中解决问题。 除了考试选项卡外，您只能打开一个选项卡。

Since this exam requires you to write a lot of commands, I figured early on that I'd have to rely on aliases to reduce the number of keystrokes to save time.
因为这个考试需要你写很多命令，所以我很早就想到我必须依靠别名来减少击键次数以节省时间。

I used the **vi** editor during the exam, so here I will share some useful tips for this editor.
我在考试时使用了**vi**编辑器，所以在这里我将分享一些对这个编辑器有用的提示。

### vi defaults for ~/.vimrc

```
vi ~/.vimrc
---
:set number
:set et
:set sw=2 ts=2 sts=2
---
^: Start of word in line
0: Start of line
$: End of line
w: End of word
GG: End of file
```

### kubectl defaults for ~/.bashrc

```
vi ~/.bashrc
---
alias k='kubectl'
alias kg='k get'
alias kd='k describe'
alias kl='k logs'
alias ke='k explain'
alias kr='k replace'
alias kc='k create'
alias kgp='k get po'
alias kgn='k get no'
alias kge='k get ev'
alias kex='k exec -it'
alias kgc='k config get-contexts'
alias ksn='k config set-context --current --namespace'
alias kuc='k config use-context'
alias krun='k run'
export do='--dry-run=client -oyaml'
export force='--grace-period=0 --force'

source <(kubectl completion bash)
source <(kubectl completion bash | sed 's/kubectl/k/g' )
complete -F __start_kubectl k


alias krp='k run test --image=busybox --restart=Never'
alias kuc='k config use-context'
---
```

## Shortcuts
## 一些捷径

The `kubectl get` command provides short catchy names for accessing resources and like `pvc` for `persistentstorageclaim`. These can help save a lot of keystrokes and valuable time during the exam.
`kubectl get` 命令为访问资源提供了简短易懂的名称，例如 `pvc` 用于 `persistentstorageclaim`。 这些可以帮助在考试期间节省大量击键和宝贵的时间。

-   **po** for `pods`
-   **rs** for `replicasets`
-   **deploy** for `deployments`
-   **svc** for `services`
-   **ns** for `namespace`
-   **netpol** for `networkpolicy`
-   **pv** for `persistentstorage`
-   **pvc** for `persistentstorageclaim`
-   **sa** for `serviceaccounts`

## Kubernetes Cheat Sheet

### kubectl run command

The `kubectl run` command provides a flag `--restart` which allows you to create different kinds of Kubernetes objects from a Deployment to CronJob.
`kubectl run` 命令提供了一个标志 `--restart`，它允许您创建从 Deployment 到 CronJob 的不同类型的 Kubernetes 对象。

The below snippet shows the different options available for the `--restart` flag.
下面的代码片段显示了可用于 `--restart` 标志的不同选项。

```
k run:
--restart=Always                             #Creates a deployment
--restart=Never                              #Creates a Pod
--restart=OnFailure                          #Creates a Job
--restart=OnFailure --schedule="*/1 * * * *" #Creates a CronJob
```

### How to generate yaml spec from an existing pod
### 如何从现有的 pod 生成 yaml 规范

Sometimes it's easier to generate a spec from an existing pod and make changes to it than to create a new one from scratch. The `kubectl get pod` command provides us with the required flags to output the pod spec in the format we want.
有时，从现有 pod 生成规范并对其进行更改比从头开始创建新的更容易。 `kubectl get pod` 命令为我们提供了所需的标志，以我们想要的格式输出 pod 规范。

```
kgp <pod-name> -o wide

# Generating YAML Pod spec
kgp <pod-name> -o yaml
kgp <pod-name> -o yaml > <pod-name>.yaml

# Get a pod's YAML spec without cluster specific information
kgp my-pod -o yaml --export > <pod-name>.yaml
```

### kubectl pod commands
### kubectl pod 命令

The `kubectl run` command provides a lot of options, like specifying requests and the limits a pod is supposed to use or the commands a container should run once created.
`kubectl run` 命令提供了很多选项，例如指定请求和 Pod 应该使用的限制，或者容器在创建后应该运行的命令。

```
# Output YAML for a nginx pod running an echo command
krun nginx --image=nginx --restart=Never --dry-run -o yaml -- /bin/sh -c 'echo Hello World!'
# Output YAML for a busybox pod running a sleep command
krun busybox --image=busybox:1.28 --restart=Never --dry-run -o yaml -- /bin/sh -c 'while true; do echo sleep; sleep 10; done'
# Run a pod with set requests and limits
krun nginx --image=nginx --restart=Never --requests='cpu=100m,memory=512Mi' --limits='cpu=300m,memory=1Gi'
# Delete pod without delay
k delete po busybox --grace-period=0 --force
```

### How to print logs and export them
### 如何打印日志并导出

Logs are the fundamental source of information when it comes to debugging an application. The `kubectl logs` command provides the functionality to check the logs of a given pod. You can use the below commands to check the logs of a given pod.
在调试应用程序时，日志是信息的基本来源。 `kubectl logs` 命令提供了检查给定 pod 日志的功能。 您可以使用以下命令检查给定 pod 的日志。

```
kubectl logs deploy/<podname>
kubectl logs deployment/<podname>
#Follow logs
kubectl logs deploy/<podname> --tail 1 --follow
```

Apart from just looking at logs, we can also export logs to a file for further debugging of sharing the same with anyone.
除了查看日志外，我们还可以将日志导出到文件中，以便进一步调试与任何人共享相同的内容。

```
kubectl logs <podname> --namespace <ns> > /path/to/file.format
```

### How to create config maps and secrets
### 如何创建配置映射和机密

The `kubectl create` command lets us create ConfigMaps and Secrets from the command line. We can also use the YAML file to create the same resources and by using `kubectl apply -f <filename>` we can apply the commands.
`kubectl create` 命令让我们可以从命令行创建 ConfigMap 和 Secret。 我们还可以使用 YAML 文件来创建相同的资源，并通过使用 `kubectl apply -f <filename>` 我们可以应用命令。

```
kc cm my-cm --from-literal=APP_ENV=dev
kc cm my-cm --from-file=test.txt
kc cm my-cm --from-env-file=config.env

kc secret generic my-secret --from-literal=APP_SECRET=sdcdcsdcsdcsdc
kc secret generic my-secret --from-file=secret.txt
kc secret generic my-secret --from-env-file=secret.env
```

### Helpful commands for debugging
### 有用的调试命令

Debugging is a very important skill when you're facing issues and errors both in our day jobs and while solving problems in the CKS exam.
当您在日常工作中以及在 CKS 考试中解决问题时遇到问题和错误时，调试是一项非常重要的技能。

Apart from the ability to output logs from a container, the `kubectl exec` commands lets you log in to a running container and debug issues. While inside the container you can also use utilities like `nc` and `nslookup` to diagnose networking-related issues.
除了能够从容器输出日志外，`kubectl exec` 命令还允许您登录到正在运行的容器并调试问题。 在容器内，您还可以使用 nc 和 nslookup 等实用程序来诊断与网络相关的问题。

```
# Run busybox container
k run busybox --image=busybox:1.28 --rm --restart=Never -it sh
# Connect to a specific container in a Pod
k exec -it busybox -c busybox2 -- /bin/sh
# adding limits and requests in command
kubectl run nginx --image=nginx --restart=Never --requests='cpu=100m,memory=256Mi' --limits='cpu=200m,memory=512Mi'
# Create a Pod with a service
kubectl run nginx --image=nginx --restart=Never --port=80 --expose
# Check port
nc -z -v -w 2 <service-name> <port-name>
# NSLookup
nslookup <service-name>
nslookup 10-32-0-10.default.pod
```

### Rolling updates and rollouts
### 滚动更新和推出

The `kubectl rollout` command provides the ability to check for the status of updates and, if required, roll back to a previous version.
`kubectl rollout` 命令提供了检查更新状态的能力，如果需要，还可以回滚到以前的版本。

```
k set image deploy/nginx nginx=nginx:1.17.0 --record
k rollout status deploy/nginx
k rollout history deploy/nginx
# Rollback to previous version
k rollout undo deploy/nginx
# Rollback to revision number
k rollout undo deploy/nginx --to-revision=2
k rollout pause deploy/nginx
k rollout resume deploy/nginx
k rollout restart deploy/nginx
kubectl run nginx-deploy --image=nginx:1.16 --replias=1 --record
```

### Scale and autoscale command
### 缩放和自动缩放命令

The `kubectl scale` command provides the functionality to scale up or scale down pods in a given deployment.
`kubectl scale` 命令提供了在给定部署中扩大或缩小 pod 的功能。

Using the `kubectl autoscale` command we can define the minimum number of pods that should be running for a given deployment and the maximum numbers of pods the deployment can scale to along with the scaling criteria like CPU percentage.
使用“kubectl autoscale”命令，我们可以定义给定部署应该运行的最小 pod 数量，以及部署可以扩展到的最大 pod 数量以及 CPU 百分比等扩展标准。

```
k scale deploy/nginx --replicas=6
k autoscale deploy/nginx --min=3 --max=9 --cpu-percent=80
```

### Network policy
### 网络策略

In a Kubernetes cluster, all pods can communicate with all pods by default, which can be a security issue in some implementations.
在 Kubernetes 集群中，默认情况下所有 pod 都可以与所有 pod 通信，这在某些实现中可能是一个安全问题。

To get around this issue, Kubernetes introduced Network Policies to allow or deny traffic to and from pods based on pod labels which are part of the pod spec.
为了解决这个问题，Kubernetes 引入了网络策略来允许或拒绝基于 pod 标签的流量，这些标签是 pod 规范的一部分。

The below example denies both the Ingress and Egress traffic for pods running in all namespaces.
下面的示例拒绝在所有命名空间中运行的 Pod 的 Ingress 和 Egress 流量。

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: example
  namespace: default
spec:
  podSelector: {}
  policyTypes:
  - Egress
  - Ingress
```

The below example denies both the Ingress and Egress traffic for pods running in all namespaces. But it allows access to DNS resolution services running on port 53.
下面的示例拒绝在所有命名空间中运行的 Pod 的 Ingress 和 Egress 流量。 但它允许访问在端口 53 上运行的 DNS 解析服务。

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny
  namespace: default
spec:
  podSelector: {}
  policyTypes:
  - Egress
  - Ingress
  egress:
  - to:
    ports:
      - port: 53
        protocol: TCP
      - port: 53
        protocol: UDP
```

The below example denies Egress access to the metadata server running on IP address `169.256.169.256` in AWS EC2 Instances.
以下示例拒绝对 AWS EC2 实例中 IP 地址“169.256.169.256”上运行的元数据服务器的 Egress 访问。

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name:cloud-metadata-deny
  namespace: default
spec:
  podSelector: {}
  policyTypes:
  - Egress
  egress:
  - to:
      - ipBlock: 
          cidr: 0.0.0.0/0
          except:
          - 169.256.169.256/32
```

The below example allows Egress access to the metadata server running on IP address `169.256.169.256` in AWS EC2 Instances.
下面的示例允许 Egress 访问 AWS EC2 实例中在 IP 地址“169.256.169.256”上运行的元数据服务器。

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cloud-metadata-accessor
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: metadata-accessor
  policyTypes:
  - Egress
  egress:
  - to:
    - ipBlock:
        cidr: 169.256.169.256/32
```

### Static analysis using Kubesec
### 使用 Kubesec 进行静态分析

Kubesec is a Static Analysis tool for analyzing the YAML files to find issues with the files.
Kubesec 是一个静态分析工具，用于分析 YAML 文件以查找文件问题。

```
kubesec scan pod.yaml

# Using online kubesec API
curl -sSX POST --data-binary @pod.yaml https://v2.kubesec.io/scan

# Running the API locally
kubesec http 8080 &

kubesec scan pod.yaml -o pod_report.json -o json
```

### Vulnerability scanning using Trivvy
### 使用 Trivvy 进行漏洞扫描

Trivvy is a Vulnerability Scanning tool that scans container images for security issues.
Trivvy 是一种漏洞扫描工具，可扫描容器映像以查找安全问题。

```
trivy image nginx:1.18.0
trivy image --severity CRITICAL nginx:1.18.0
trivy image --severity CRITICAL, HIGH nginx:1.18.0
trivy image --ignore-unfixed nginx:1.18.0

# Scanning image tarball
docker save nginx:1.18.0 > nginx.tar
trivy image --input archive.tar

# Scan and output results to file
trivy image --output python_alpine.txt python:3.10.0a4-alpine
trivy image --severity HIGH --output /root/python.txt python:3.10.0a4-alpine

# Scan image tarball
trivy image --input alpine.tar --format json --output /root/alpine.json
```

### How to remove unwanted services
### 如何删除不需要的服务

The `systemctl` exposes the capabilities to start, stop, enable, disable and list services running on a Linux Virtual Machine.
`systemctl` 公开了启动、停止、启用、禁用和列出在 Linux 虚拟机上运行的服务的功能。

List services:
列出服务：

```
systemctl list-units --type service
```

Stop Service:
停止服务：

```
systemctl stop apache2
```

Disable Service:
禁用服务：

```
systemctl disable apache2
```

Remove Service:
删除服务：

```
apt remove apache2
```

### Runtime classes
### 运行时类

Kubernetes introduced the RuntimeClass feature in version `v1.12` for selecting the container runtime configuration. The container runtime configuration is used to run a pod's underlying containers.
Kubernetes 在 `v1.12` 版本中引入了 RuntimeClass 功能，用于选择容器运行时配置。 容器运行时配置用于运行 pod 的底层容器。

Most Kubernetes clusters use the `dockershim` as the Runtime class for the running containers, but you can use different container Runtimes.
大多数 Kubernetes 集群使用 `dockershim` 作为运行容器的运行时类，但您可以使用不同的容器运行时。

The `dockershim` has been deprecated in Kubernetes version `v1.20`, and will be removed in `v1.24`.
`dockershim` 在 Kubernetes 版本 `v1.20` 中已被弃用，并将在 `v1.24` 中删除。

How to create a Runtime Class:
如何创建运行时类：

```
apiversion: node.k8s.io/v1beta1
kind: RuntimeClass
metadata:
  name: gvisor
handler: runsc
```

How to use a runtime class for any given pod:
如何为任何给定的 pod 使用运行时类：

```
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: nginx
  name: nginx
spec:
  runtimeClassName: gvisor
  containers:
  - name: nginx
    image: nginx 
```

### RBAC commands
### RBAC 命令

In Kubernetes,
在 Kubernetes 中，
> Role-based access control (RBAC) commands provide a method of regulating access to Kubernetes resources based on the roles of individual users or service accounts. ([Source](https://kubernetes.io/docs/reference/access-authn-authz/rbac/))
> 基于角色的访问控制 (RBAC) 命令提供了一种基于单个用户或服务帐户的角色来调节对 Kubernetes 资源的访问的方法。 ([来源](https://kubernetes.io/docs/reference/access-authn-authz/rbac/))

Here's how to create a role:
以下是创建角色的方法：

```
kubectl create role developer --resource=pods --verb=create,list,get,update,delete --namespace=development
```

How to create a role binding:
如何创建角色绑定：

```
kubectl create rolebinding developer-role-binding --role=developer --user=faizan --namespace=development
```

How to validate:
如何验证：

```
kubectl auth can-i update pods --namespace=development --as=faizan
```

How to create a cluster role:
如何创建集群角色：

```
kubectl create clusterrole pvviewer-role --resource=persistentvolumes --verb=list
```

And how to create a Clusterrole Binding association with a service account:
以及如何创建与服务帐户的 Clusterrole 绑定关联：

```
kubectl create clusterrolebinding pvviewer-role-binding --clusterrole=pvviewer-role --serviceaccount=default:pvviewer
```

### Cluster maintenance
###集群维护

You use the `kubectl drain` command to remove all running workloads (pods) from a given Node.
您可以使用 `kubectl drain` 命令从给定节点中删除所有正在运行的工作负载（pod）。

You use the `kubectl cordon` command to cordon a node to mark it as schedulable.
您使用 `kubectl cordon` 命令来封锁节点以将其标记为可调度。

Ands you use the `kubectl uncordon` command to set the node as schedulable, meaning the Controller Manager can schedule new pods to the given node.
并且您使用 `kubectl uncordon` 命令将节点设置为可调度，这意味着控制器管理器可以将新 pod 调度到给定节点。

How to drain a node of all pods:
如何排空所有 pod 的节点：

```
kubectl drain node-1
```

How to drain a node and ignore daemonsets:
如何排空节点并忽略守护程序集：

```
kubectl drain node01 --ignore-daemonsets
```

How to force drain:
如何强制排空节点：

```
kubectl drain node02 --ignore-daemonsets --force
```

How to mark a node un-schedulable, so that no new pods can be scheduled on this node:
如何将一个节点标记为不可调度，这样就不能在这个节点上调度新的 Pod：

```
kubectl cordon node-1
```

Mark a node schedulable
标记节点可调度

```
kubectl uncordon node-1
```

## CKS Exam Tips
## CKS 考试技巧

The Kubernetes `kubectl get` command provides the user with an output flag, `-o` or `--output`, which helps us format the output in the form of JSON, yaml, wide, or custom-columns.
Kubernetes `kubectl get` 命令为用户提供了一个输出标志，`-o` 或 `--output`，这有助于我们以 JSON、yaml、wide 或 custom-columns 的形式格式化输出。

### JSON and JSONPath
### JSON 和 JSONPath

How to output the contents of all the pods in the form of a JSON Object:
如何以 JSON Object 的形式输出所有 pod 的内容：

```
kubectl get pods -o json
```

The JSONPath outputs a specific key from the JSON Object:
JSONPath 从 JSON 对象输出一个特定的键：

```
kubectl get pods -o=jsonpath='{@}'
kubectl get pods -o=jsonpath='{.items[0]}'
```

The `.items[*]` is used where we have multiple objects, for instance multiple containers with a pod config:
`.items[*]` 用于我们有多个对象的地方，例如具有 pod 配置的多个容器：

```
# For list of items use .items[*]
k get pods -o 'jsonpath={.items[*].metadata.labels.version}'
# For single item
k get po busybox -o jsonpath='{.metadata}'
k get po busybox -o jsonpath="{['.metadata.name', '.metadata.namespace']}{'\n'}"
```

The command returns the internal IP of a Node using JSONPath:
该命令使用 JSONPath 返回节点的内部 IP：

```
kubectl get nodes -o=jsonpath='{.items[*].status.addresses[?(@.type=="InternalIP")].address}'
```

The command checks for equality on a specific key:
该命令检查特定键的相等性：

```
kubectl get pod api-stag-765797cf-lrd8q -o=jsonpath='{.spec.volumes[?(@.name=="api-data")].persistentVolumeClaim.claimName}'
kubectl get pod -o=jsonpath='{.items[*].spec.tolerations[?(@.effect=="NoSchedule")].key}'
```

Custom Columns are helpful in order to output specific fields:
自定义列有助于输出特定字段：

```
kubectl get pods -o='custom-columns=PODS:.metadata.name,Images:.spec.containers[*].image'
```

## CKS Exam Topics
## CKS 考试题目

The CKS exam covers topics related to security in the Kubernetes ecosystem. Kubernetes security is a vast topic to cover in one article, so this article contains some of the topics covered in the exam.
CKS 考试涵盖与 Kubernetes 生态系统中的安全性相关的主题。 Kubernetes 安全性是一篇文章中涉及的一个广泛主题，因此本文包含了考试中涉及的一些主题。

### How to secure and harden container images
### 如何保护和强化容器镜像

While designing container images to run your code, pay special attention to securing and hardening measures in order to prevent hacks and privilege escalation attacks. Keep the below points in mind while building the container images:
在设计容器镜像以运行您的代码时，请特别注意保护和强化措施，以防止黑客攻击和特权升级攻击。 在构建容器镜像时请记住以下几点：

1.  Use specific package versions like `alpine:3.13`.
2.  使用特定的包版本，如`alpine:3.13`。
3.  Don't run as root – use the `USER <username>` to block root access.
4.  不要以 root 身份运行 - 使用 `USER <username>` 来阻止 root 访问。
5.  Make filesystem read-only in the `securityContext` using `readOnlyRootFilesystem: true`
6.  使用 `readOnlyRootFilesystem: true` 在 `securityContext` 中将文件系统设为只读
7.  Remove shell access using `RUN rm -rf /bin/*`
8.  使用 `RUN rm -rf /bin/*` 删除 shell 访问

### How to minimise OS footprint
### 如何最小化操作系统占用空间

#### Conatiner layers
#### 容器层

The instructions `RUN`, `COPY`, and `ADD` create container layers. Other instructions create temporary intermediate images and do not increase the size of the build. Instructions that create layers add to the size of the resulting image.
指令“RUN”、“COPY”和“ADD”创建容器层。 其他指令创建临时中间图像并且不增加构建的大小。 创建图层的说明会增加结果图像的大小。

A typical Dockerfile looks like the one given below. It adds a single layer using the `RUN` instruction.
典型的 Dockerfile 如下所示。 它使用“RUN”指令添加一个单层。

```
FROM ubuntu

RUN apt-get update && apt-get install -y golang-go

CMD ["sh"]
```

#### Multi-stage builds
#### 多阶段构建

Multi-Stage builds leverage multiple `FROM` statements in the Dockerfile. The `FROM` instruction marks a new stage in the build. It combines multiple `FROM` statements allow to leverage from the previous build in order to selectively copy binaries over to the new build stage omitting the unnecessary binaries. The resulting Docker image is considerably smaller in size with a drastically reduced attack surface.
多阶段构建利用 Dockerfile 中的多个“FROM”语句。 `FROM` 指令标志着构建的一个新阶段。 它结合了多个“FROM”语句，允许利用以前的构建，以便有选择地将二进制文件复制到新的构建阶段，省略不必要的二进制文件。 生成的 Docker 映像的大小要小得多，攻击面也大大减少。

```
FROM ubuntu:20.04 AS build
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y golang-go
COPY app.go .
RUN CGO_ENABLED=0 go build app.go

FROM alpine:3.13
RUN chmod a-w /etc
RUN addgroup -S appgroup && adduser -S appuser -G appgroup -h /home/appuser
RUN rm -rf /bin/*
COPY --from=build /app /home/appuser/
USER appuser
CMD ["/home/appuser/app"]
```

### How to limit node access
###如何限制节点访问

Access Control files contain sensitive information about users/groups in the Linux OS.
访问控制文件包含有关 Linux 操作系统中用户/组的敏感信息。

```
#Stores information about the UID/GID, user shell, and home directory for a user
/etc/passwd
#Stores the user password in a hashed format
/etc/shadow
#Stores information about the group a user belongs
/etc/group
#Stored information about the Sudoers present in the system
/etc/sudoers
```

Disabling a user account helps in securing access to a Node by disabling login to a given user account.
禁用用户帐户有助于通过禁用给定用户帐户的登录来保护对节点的访问。

```
usermod -s /bin/nologin <username>
```

Disabling the `root` user account is of special significance, as the root account has all the capabilities.
禁用“root”用户帐户具有特殊意义，因为 root 帐户具有所有功能。

```
usermod -s /bin/nologin root
```

Here's how to add a user with a home directory and shell:
以下是如何添加具有主目录和 shell 的用户：

```
adduser --home /opt/faizanbashir --shell /bin/bash --uid 2328 --ingroup admin faizanbashir
useradd -d /opt/faizanbashir -s /bin/bash -G admin -u 2328 faizanbashir
```

How to delete the user account:
如何删除用户帐户：

```
userdel <username>
```

How to delete a group:
如何删除群组：

```
groupdel <groupname>
```

How to add a user to a group:
如何将用户添加到组：

```
adduser <username> <groupname>
```

How to remove a user from a group:
如何从组中删除用户：

```
#deluser faizanbashir admin
deluser <username> <groupname>
```

How to set a password for a user:
如何为用户设置密码：

```
passwd <username>
```

How to elevate a user to sudoer:
如何将用户提升为 sudoer：

```
vim /etc/sudoers
>>>
faizanbashir ALL=(ALL:ALL) ALL
```

How to enable sudo with no password:
如何在没有密码的情况下启用 sudo：

```
vim /etc/sudoers
>>>
faizanbashir ALL=(ALL) NOPASSWD:ALL

visudo
usermod -aG sudo faizanbashir
usermod faizanbashir -G admin
```

### SSH hardening
### SSH加固

#### How to disable SSH
####如何禁用SSH

The configuration given in the `/etc/ssh/sshd_config` can be leveraged to secure SSH access to Linux nodes. Setting the `PermitRootLogin` to `no` disables the root login on a node.
`/etc/ssh/sshd_config` 中给出的配置可用于保护对 Linux 节点的 SSH 访问。 将 `PermitRootLogin` 设置为 `no` 会禁用节点上的 root 登录。

To enforce using a key to login and disabling login using passwords to nodes, you can set the `PasswordAuthentication` to `no`.
要强制使用密钥登录并禁用使用密码登录节点，您可以将“PasswordAuthentication”设置为“no”。

```
vim /etc/ssh/sshd_config
>>
PermitRootLogin no
PasswordAuthentication no
<<
# Restart SSHD Service
systemctl restart sshd
```

How to set no login for the root user:
如何设置root用户不登录：

```
usermod -s /bin/nologin root
```

SSH Copy user key / Passwordless SSH:
SSH 复制用户密钥/无密码 SSH：

```
ssh-copy-id -i ~/.ssh/id_rsa.pub faizanbashir@node01
ssh faizanbashir@node01
```

### How to remove obsolete packages and services
### 如何删除过时的包和服务

Here's how you can list all services running on an Ubuntu machine:
以下是列出在 Ubuntu 机器上运行的所有服务的方法：

```
systemctl list-units --type service
systemctl list-units --type service --state running
```

How to stop, disable, and remove a service:
如何停止、禁用和删除服务：

```
systemctl stop apache2
systemctl disable apache2
apt remove apache2
```

### How to restrict kernel modules
### 如何限制内核模块

In Linux, Kernel modules are pieces of code that can be loaded and unloaded into the kernel upon demand. They extend the functionality of the kernel without the need to reboot the system. A module can be configured as built-in or loadable.
在 Linux 中，内核模块是可以根据需要加载和卸载到内核中的代码片段。 它们无需重新启动系统即可扩展内核的功能。 模块可以配置为内置或可加载的。

How to list all Kernel Modules:
如何列出所有内核模块：

```
lsmod
```

How to manually load modules into a Kernel:
如何手动将模块加载到内核中：

```
modprobe pcspkr
```

How to blacklist a module: (Reference: CIS Benchmarks -> 3.4 Uncommon Network Protocols)
如何将模块列入黑名单：（参考：CIS Benchmarks -> 3.4 Uncommon Network Protocols）

```
cat /etc/modprobe.d/blacklist.conf
>>>
blacklist sctp
blacklist dccp

# Shutdown for changes to take effect
shutdown -r now

# Verify
lsmod | grep dccp
```

### How to identify and disable open ports
### 如何识别和禁用开放端口

How to check for open ports:
如何检查开放端口：

```
netstat -an | grep -w LISTEN
netstat -natp | grep 9090

nc -zv <hostname|IP> 22
nc -zv <hostname|IP> 10-22

ufw deny 8080
```

How to check port usage:
如何检查端口使用情况：

```
/etc/services | grep -w 53
```

Here's the reference doc for a [list of open ports](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#control-plane-node-s).
这是[开放端口列表]的参考文档（https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#control-plane-node-s）。

### How to restrict network access
### 如何限制网络访问

#### How to identity a service running on port:
#### 如何识别端口上运行的服务：

```
systemctl status ssh
cat /etc/services | grep ssh
netstat -an | grep 22 | grep -w LISTEN
```

#### UFW firewall
#### UFW防火墙

Uncomplicated Fire Wall (UFW) is a tool for managing firewall rules in Arch Linux, Debian, or Ubuntu. UFW lets you allow and block traffic on a given port and from a given source.
Uncomplicated Fire Wall (UFW) 是一个在 Arch Linux、Debian 或 Ubuntu 中管理防火墙规则的工具。 UFW 允许您允许和阻止给定端口和来自给定来源的流量。

Here's how to install UFW Firewall:
以下是安装 UFW 防火墙的方法：

```
apt-get update
apt-get install ufw
systemctl enable ufw
systemctl start ufw
ufw status
ufw status numbered
```

How to allow all outbound and inbound connections:
如何允许所有出站和入站连接：

```
ufw default allow outgoing
ufw default allow incoming
```

How to allow rules:
如何允许规则：

```
ufw allow 22
ufw allow 1000:2000/tcp
ufw allow from 172.16.238.5 to any port 22 proto tcp
ufw allow from 172.16.238.5 to any port 80 proto tcp
ufw allow from 172.16.100.0/28 to any port 80 proto tcp
```

How to deny rules:
如何拒绝规则：

```
ufw deny 8080
```

How to enable and activate the Firewall:
如何启用和激活防火墙：

```
ufw enable
```

How to delete rules:
如何删除规则：

```
ufw delete deny 8080
ufw delete <rule-line>
```

How to reset rules:
如何重置规则：

```
ufw reset
```

### Linux Syscalls
### Linux 系统调用

Linux Syscalls are used to make requests from user space into the Linux kernel. For instance, while creating a file, the userspace makes a request to the Linux Kernel to create the file.
Linux 系统调用用于从用户空间向 Linux 内核发出请求。 例如，在创建文件时，用户空间向 Linux 内核发出创建文件的请求。

Kernel Space has the following:
内核空间有以下内容：

-   Kernel Code
-   Kernel Extensions
-   Device Drivers

#### How to trace Syscalls using Strace
#### 如何使用 Strace 跟踪系统调用

Here's how you can trace syscalls using strace:
以下是使用 strace 跟踪系统调用的方法：

```
which strace
strace touch /tmp/error.log
```

How to get the PID of a service:
如何获取服务的PID：

```
pidof sshd
strace -p <pid>
```

How to list all syscalls made during an operation:
如何列出操作期间进行的所有系统调用：

```
strace -c touch /tmp/error.log
```

How to consolidate listing syscalls: (Count and summarise)
如何合并列出的系统调用：（计数和总结）

```
strace -cw ls /
```

How to follow a PID and consolidate:
如何遵循 PID 并进行整合：

```
strace -p 3502 -f -cw
```

### AquaSec Tracee

AquaSec Tracee was created by Aqua Security which uses eBPF to trace events in containers. Tracee uses eBPF (Extended Berkeley Packet Filter) at runtime directly in the kernel space without interfering with the kernel source or loading any kernel modules.
AquaSec Tracee 由 Aqua Security 创建，它使用 eBPF 来跟踪容器中的事件。 Tracee 在运行时直接在内核空间中使用 eBPF（Extended Berkeley Packet Filter），而不会干扰内核源代码或加载任何内核模块。

-   Binary stored at `/tmp/tracee`
-   二进制存储在`/tmp/tracee`
-   Needs access to the following, in read-only mode if run using a container with `--privileged` capability:
-   如果使用具有 `--privileged` 能力的容器运行，则需要以只读模式访问以下内容：
    -   `/tmp/tracee` -> Default workspace
    -   `/tmp/tracee` -> 默认工作区
    -   `/lib/modules` -> Kernel Headers
    -   `/lib/modules` -> 内核头文件
    -   `/usr/src` -> Kernel Headers
    -   `/usr/src` -> 内核头文件

How to fun Tracee in a Docker container:
如何让 Docker 容器中的 Tracee 变得有趣：

```
docker run --name tracee --rm --privileged --pid=host \
  -v /lib/modules/:/lib/modules/:ro -v /usr/src/:/usr/src/ro \
  -v /tmp/tracee:/tmp/tracee aquasec/tracee:0.4.0 --trace comm=ls

# List syscalls made by all the new process on the host
# 列出主机上所有新进程的系统调用
docker run --name tracee --rm --privileged --pid=host \
  -v /lib/modules/:/lib/modules/:ro -v /usr/src/:/usr/src/ro \
  -v /tmp/tracee:/tmp/tracee aquasec/tracee:0.4.0 --trace pid=new

# List syscalls made from any new container
# 列出来自任何新容器的系统调用
docker run --name tracee --rm --privileged --pid=host \
  -v /lib/modules/:/lib/modules/:ro -v /usr/src/:/usr/src/ro \
  -v /tmp/tracee:/tmp/tracee aquasec/tracee:0.4.0 --trace container=new
```

### How to restrict Syscalls with Seccomp
### 如何使用 Seccomp 限制系统调用

**SECCOMP** – Secure Computing Mode – is a Linux Kernel level feature that you can use to sandbox applications to only use the syscalls they need.
**SECCOMP** – 安全计算模式 – 是一种 Linux 内核级别的功能，您可以将其用于沙箱应用程序以仅使用它们需要的系统调用。

How to check support for seccomp:
如何检查对 seccomp 的支持：

```
grep -i seccomp /boot/config-$(uname -r)
```

How to test to change system time:
如何测试更改系统时间：

```
docker run -it --rm docker/whalesay /bin/sh
# date -s '19 APR 2013 22:00:00'

ps -ef
```

How to check seccomp status for any PID:
如何检查任何 PID 的 seccomp 状态：

```
grep -i seccomp /proc/1/status
```

Seccomp modes:
Seccomp 模式：

-   Mode 0: Disabled
-   模式 0：禁用
-   Mode 1: Strict
-   模式一：严格
-   Mode 2: Filtered
-   模式2：过滤

The following configuration is used to whitelist syscalls. The whitelist profile is secure but syscalls have to be selectively enabled as it blocks all syscalls by default.
以下配置用于将系统调用列入白名单。 白名单配置文件是安全的，但必须有选择地启用系统调用，因为它默认阻止所有系统调用。

```
{
  "defaultAction": "SCMP_ACT_ERRNO",
  "architectures": [
    "SCMP_ARCH_X86_64",
    "SCMP_ARCH_X86",
    "SCMP_ARCH_X32"
  ],
  "syscalls": [
    {
      "names": [
        "<syscall-1>",
        "<syscall-2>",
        "<syscall-3>"
      ],
      "action": "SCMP_ACT_ALLOW"
    }
  ]
}
```

The following configuration is used to blacklist syscalls. The blacklist profile has a greater attack surface than the whitelist.
以下配置用于将系统调用列入黑名单。 黑名单配置文件比白名单具有更大的攻击面。

```
{
  "defaultAction": "SCMP_ACT_ALLOW",
  "architectures": [
    "SCMP_ARCH_X86_64",
    "SCMP_ARCH_X86",
    "SCMP_ARCH_X32"
  ],
  "syscalls": [
    {
      "names": [
        "<syscall-1>",
        "<syscall-2>",
        "<syscall-3>"
      ],
      "action": "SCMP_ACT_ERRNO"
    }
  ]
}
```

The Docker seccomp profile blocks 60 of the 300+ syscalls on the x86 architecture.
Docker seccomp 配置文件阻止了 x86 架构上 300 多个系统调用中的 60 个。

How to use seccomp profiles with Docker:
如何在 Docker 中使用 seccomp 配置文件：

```
docker run -it --rm --security-opt seccomp=/root/custom.json docker/whalesay /bin/sh
```

How to allow all syscalls with the container:
如何允许容器的所有系统调用：

```
docker run -it --rm --security-opt seccomp=unconfined docker/whalesay /bin/sh

# Verify
grep -i seccomp /proc/1/status

# Output should be:
Seccomp:         0
```

How to use Docker container to get container runtime related information:
如何使用 Docker 容器获取容器运行时相关信息：

```
docker run r.j3ss.co/amicontained amicontained
```

#### Seccomp in Kubernetes
#### Kubernetes 中的 Seccomp

Secure computing mode (SECCOMP) is a Linux kernel feature. You can use it to restrict the actions available within the container. [Seccomp documentation](https://kubernetes.io/docs/tutorials/clusters/seccomp)
安全计算模式 (SECCOMP) 是 Linux 内核的一项功能。 您可以使用它来限制容器内可用的操作。 [Seccomp 文档](https://kubernetes.io/docs/tutorials/clusters/seccomp)

How to run amicontained in Kubernetes:
如何在 Kubernetes 中运行 amicontained：

```
kubectl run amicontained --image r.j3ss.co/amicontained amicontained -- amicontained
```

As of version `v1.20` Kubernetes does not implement seccomp by default.
从 `v1.20` 版本开始，Kubernetes 默认不实现 seccomp。

Seccomp 'RuntimeDefault' docker profile in Kubernetes:
Kubernetes 中的 Seccomp 'RuntimeDefault' docker 配置文件：

```
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: amicontained
  name: amicontained
spec:
  securityContext:
    seccompProfile:
      type: RuntimeDefault
  containers:
  - args:
    - amicontained
    image: r.j3ss.co/amicontained
    name: amicontained
    securityContext:
      allowPrivilegeEscalation: false
```

Default seccomp location in kubelets
kubelets 中的默认 seccomp 位置

```
/var/lib/kubelet/seccomp
```

How to create a seccomp profile in node:
如何在节点中创建 seccomp 配置文件：

```
mkdir -p /var/lib/kubelet/seccomp/profiles

# Add a profile for audit
# 添加配置文件进行审计
vim /var/lib/kubelet/seccomp/profiles/audit.json
>>>
{
  defaultAction: "SCMP_ACT_LOG"
}

# Add a profile for violations (Blocks all syscalls by default, will let nothing run)
# 添加违规配置文件（默认阻止所有系统调用，不会让任何东西运行）

vim /var/lib/kubelet/seccomp/profiles/violation.json

>>>
{
  defaultAction: "SCMP_ACT_ERRNO"
}
```

Local seccomp profile – this file should exist locally on a node to be able to work:

```
...
securityContext:
  seccompProfile:
    type: Localhost
    localhostProfile: profiles/audit.json
...
```

The above profile will enable syscalls to be saved to a file.
上述配置文件将使系统调用能够保存到文件中。

```
grep syscall /var/log/syslog
```

How to map syscall numbers to syscall name:
如何将系统调用号映射到系统调用名称：

```
grep -w 35 /usr/include/asm/unistd_64.h

# OR
grep -w 35 /usr/include/asm-generic/unistd.h
```

### AppArmor

AppArmor is a Linux security module that is used to confine a program to a limited set of resources.
AppArmor 是一个 Linux 安全模块，用于将程序限制在一组有限的资源中。

How to install AppArmor utils:
如何安装 AppArmor 工具：

```
apt-get install apparmor-utils
```

How to check if AppArmor is running and enabled:
如何检查 AppArmor 是否正在运行和启用：

```
systemctl status apparmor

cat /sys/module/apparmor/parameters/enabled
Y
```

The AppArmor profiles are stored at:
AppArmor 配置文件存储在：

```
cat /etc/apparmor.d/root.add_data.sh
```

How to list AppArmor profiles:
如何列出 AppArmor 配置文件：

```
cat /sys/kernel/security/apparmor/profiles
```

How to deny all file write profiles:
如何拒绝所有文件写入配置文件：

```
profile apparmor-deny-write flags=(attach_disconnected) {
  file,
  # Deny all file writes.
  deny /** w,
}
```

How to deny write to `/proc` files:
如何拒绝写入 `/proc` 文件：

```
profile apparmor-deny-proc-write flags=(attach_disconnected) {
  file,
  # Deny all file writes.
  deny /proc/* w,
}
```

How to deny remount root FS:
如何拒绝重新挂载根 FS：

```
profile apparmor-deny-remount-root flags=(attach_disconnected) {

  # Deny all file writes.
  deny mount options=(ro, remount) -> /,
}
```

How to check profile status:
如何查看个人资料状态：

```
aa-status
```

Profile load modes
配置文件加载模式

-   `Enforce`, monitor and enforce the rules
-   `Enforce`，监控和执行规则
-   `Complain`, will not enforce the rules but logs them as events
-   `Complain`，不会强制执行规则，但会将它们记录为事件
-   `Unconfined`, will not enforce or log events
-   `Unconfined`，不会强制执行或记录事件

How to check if a profile is valid:
如何检查配置文件是否有效：

```
apparmor_parser /etc/apparmor.d/root.add_data.sh
```

How to disable a profile:
如何禁用配置文件：

```
apparmor_parser -R /etc/apparmor.d/root.add_data.sh
ln -s /etc/apparmor.d/root.add_data.sh /etc/apparmor.d/disable/
```

How to generate a profile and answer the series of questions that follow:
如何生成个人资料并回答以下一系列问题：

```
aa-genprof /root/add_data.sh
```

How to generate a profile for a command:
如何为命令生成配置文件：

```
aa-genprof curl
```

How to disable profile from logs:
如何从日志中禁用配置文件：

```
aa-logprof
```

#### How to use AppArmor in Kubernetes
#### 如何在 Kubernetes 中使用 AppArmor

To use AppArmor with Kubernetes, the following prerequisites must be met:
要将 AppArmor 与 Kubernetes 一起使用，必须满足以下先决条件：

-   Kubernetes version should be greater than `1.4`
-   Kubernetes 版本应该大于 `1.4`
-   AppArmor Kernel module should be enabled
-   应启用 AppArmor 内核模块
-   AppArmor profile should be loaded in the kernel
-   AppArmor 配置文件应该加载到内核中
-   Container runtime should be supported
-   应支持容器运行时

Sample usage in Kubernetes:
Kubernetes 中的示例用法：

```
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-sleeper
  annotations:
    container.apparmor.security.beta.kubernetes.io/<container-name>: localhost/<profile-name>
spec:
  containers:
  - name: ubuntu-sleeper
    image: ubuntu
    command: ["sh", "-c", "echo 'Sleeping for an hour!' && sleep 1h"]
```

**Note**: The container should run in a node containing the AppArmor profile.
**注意**：容器应在包含 AppArmor 配置文件的节点中运行。

### Linux capabilities
### Linux 功能

The Linux capabilities feature breaks up the privileges available to processes run as the `root` user into smaller groups of privileges. This way a process running with `root` privilege can be limited to get only the minimal permissions it needs to perform its operation.
Linux 功能特性将可用于以“root”用户身份运行的进程的权限分解为更小的权限组。 这样，以“root”权限运行的进程可以被限制为仅获得执行其操作所需的最小权限。

Docker supports the Linux capabilities as part of the Docker run command: with `--cap-add` and `--cap-drop`. By default, a container is started with several capabilities that are allowed by default and can be dropped. Other permissions can be added manually.
Docker 支持 Linux 功能作为 Docker 运行命令的一部分：使用 `--cap-add` 和 `--cap-drop`。 默认情况下，容器启动时具有默认允许且可以删除的多个功能。 其他权限可以手动添加。

Both `--cap-add` and `--cap-drop` support the ALL value, to allow or drop all capabilities. By default Docker containers run with 14 capabilities.
`--cap-add` 和 `--cap-drop` 都支持 ALL 值，以允许或删除所有功能。 默认情况下，Docker 容器运行 14 种功能。

-   Kernel < 2.2
    -   Privileged Process
    -   Unprivileged Process
-   Kernel >= 2.2
    -   Privileged Process
        -   `CAP_CHOWN`
        -   `CAP_SYS_TIME`
        -   `CAP_SYS_BOOT`
        -   `CAP_NET_ADMIN`

[Refer to this document for the full list of Linux Capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html).
[有关 Linux 功能的完整列表，请参阅此文档](https://man7.org/linux/man-pages/man7/capabilities.7.html)。

How to check what capabilities a command needs:
如何检查命令需要哪些功能：

```
getcap /usr/bin/ping
```

How to get process capabilities:
如何获得进程能力：

```
getpcaps <pid>
```

How to add security capabilities:
如何添加安全功能：

```
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-sleeper
spec:
  containers:
  - name: ubuntu-sleeper
    image: ubuntu
    command: ["sleep", "1000"]
    securityContext:
      capabilities:
        add: ["SYS_TIME"]
        drop: ["CHOWN"]
```

## How to Prepare for the Exam
## 如何准备考试

CKS is considered a pretty tough exam. But based on my experience I think that, given good enough practice and if you understand the concepts the exam covers, it'll be pretty manageable within two hours.
CKS 被认为是一项非常艰难的考试。 但根据我的经验，我认为，只要练习足够好，并且如果你理解考试涵盖的概念，两小时内就会很容易掌握。

You definitely need to understand the underlying Kubernetes concepts. And since a prerequisite for CKS is to pass the CKA exam, you should have a strong understanding of Kubernetes and how it functions before attempting the CKS.
你肯定需要了解底层的 Kubernetes 概念。 由于 CKS 的先决条件是通过 CKA 考试，因此在尝试 CKS 之前，您应该对 Kubernetes 及其运作方式有深入的了解。

In addition, to pass the CKS, you need to understand the threats and security implications introduced by container orchestration.
此外，要通过 CKS，您需要了解容器编排带来的威胁和安全隐患。

The introduction of the CKS exam is an indication that the security of containers should not be taken lightly. Security mechanisms should always be in place to thwart attacks on Kubernetes clusters.
CKS 考试的引入表明容器的安全性不应掉以轻心。 安全机制应始终到位，以阻止对 Kubernetes 集群的攻击。

The [Tesla cryptocurrency hack](https://www.wired.com/story/cryptojacking-tesla-amazon-cloud/) that was thanks to an unprotected Kubernetes dashboard brings to light the risks associated with Kubernetes or any other container orchestration engine. [Hackerone has a Kubernetes bounty page](https://hackerone.com/kubernetes?type=team) listing the source code repos used in a standard Kubernetes cluster.
[特斯拉加密货币黑客](https://www.wired.com/story/cryptojacking-tesla-amazon-cloud/) 得益于未受保护的 Kubernetes 仪表板，揭示了与 Kubernetes 或任何其他容器编排引擎相关的风险 . [Hackerone 有一个 Kubernetes 赏金页面](https://hackerone.com/kubernetes?type=team) 列出了标准 Kubernetes 集群中使用的源代码仓库。

## Practice, Practice, and Practice!
## 练习，练习，再练习！

Practice is the key to cracking the exam, I personally found that the exam simulators by KodeKloud and Killer.sh were immensely helpful for me.
练习是破解考试的关键，我个人发现 KodeKloud 和 Killer.sh 的考试模拟器对我帮助很大。

I didn't have as much time to prepare for the CKS exam as I had for the CKA exam, but I was working on Kubernetes in my day job so I'd become really comfortable with it.
我没有像准备 CKA 考试那样多的时间来准备 CKS 考试，但是我在日常工作中正在研究 Kubernetes，所以我会变得非常适应它。

Practice is the key to success. Best of luck with the exam!
实践是成功的关键。 祝考试顺利！

_You can read this and other articles at [faizanbashir.me](https://faizanbashir.me/rough-guide-to-qualifying-the-cks-exam-in-a-hurry)_
_您可以在 [faizanbashir.me](https://faizanbashir.me/rough-guide-to-qualifying-the-cks-exam-in-a-hurry)阅读这篇文章和其他文章_
