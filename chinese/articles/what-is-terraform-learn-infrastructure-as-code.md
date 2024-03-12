> -  原文地址：[What is Terraform? Learn Terraform and Infrastructure as Code](https://www.freecodecamp.org/news/what-is-terraform-learn-infrastructure-as-code/)
> -  原文作者：[Sumeet NinaweSumeet Ninawe](https://www.freecodecamp.org/news/author/letsdotech/)
> -  译者：luojiyin
> -  校对者：

![什么是Terraform？学习Terraform和基础设施即代码](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/terraform-article.jpeg)

Terraform 使用一个帮助你以代码形式管理各种云基础设施服务的工具。你把你的基础设施代码化，所以它也被称为基础设施即代码(IaC)。

云对越来越多的公司来说已经非常重要。它不仅有助于减少花销和节省时间，还能让客户专注于他们的核心业务。

## 为什么要基础设施即代码?

随着云服务商数量的增加和他们的他们的服务更加灵活，能够管理你的云基础设施变的越来越重要。

Terraform 的出于基础设施即代码（IaC）的概念。简单来说，laC 是通过代码来管理你的基础设施。

让我们以某个云上的任何计算资源为例，比如 AWS 的 EC2。向 AWS 申请一个 EC2 实例，只需要在 AWS 注册，提供一堆数值，然后点击 `Launch`(启动)按键。该资源将会在几分钟内准备好。

只要我们向 AWS 提供这些值，它们就会在 AWS 上生成。当然，这样是传统的方式。

Terraform 提供了一种方法，使用这些`credentials`完成认证和以  _configurations_ 的输入信息，在目标云上创建一个资源。

这些配置以 Terraform 的语法进行资源的描述。 配置化是你声明你的基础设施的理想状态的方法--基本上是声明式的语法。

Terraform 使用云服务商提供的 API 来创建资源。

## Terraform 的好处

Terraform 是[Hashicorp](https://www.hashicorp.com/)的一个产品, 使用 [Hashicorp 配置语法](https://github.com/hashicorp/hcl) (HCL)来表示配置 .

在下面的例子中，你可以看到 EC2 实例的最简单的形式的描述:

```
provider “aws” {
	region = “us-west-1”
}

resource “aws_instance” “myec2” {
	ami = “ami-12345qwert”
	instance_type = “t2.micro”
}
```

这个简单的例子足以让我们了解 Terraform 的能力。

这个代码包含两个部分`provider`和`resource`。`provider` 是 Terraform 告诉 AWS，我们想在`us-west-1`区使用 AWS 的服务。

 `resource` 让 Terraform 告诉 AWS，在 AWS 提供的所有基础设施资源中，我们想创建一个实例(EC2)。

`resource`第一个参数为 `aws_instance`,第二个参数资源的命名,在本例中是`myec2`。

`resource`有几个参数，说明 AWS 机器镜像和用于创建该资源的实例类型。

在这里，我们已经用代码的形式来表示我们的基础设施，让我们看 laC 的一些优势。

1.  由于基础设施的创建现在被浓缩在配置/代码文件中， 它 **更容易维护**， 因为我们现在可以利用 Git 等版本控制软件来进行协作和维护。
2.  基础设施的规划阶段所需的时间减少了，因为可以在 **短时间内** 编写配置。这些配置很容易被 Terraform 使用，几分钟就可以创建云资源。
3.  **改变** 基础设施 **是更容易了** 和 改代码一样了.
4.  软件开发中的应用管理生命周期的优势也适用于基础设施。这让它 **更有效率**.

## Terraform 的功能

### 协调工作

当部署各种端到端服务事，涉及到创建云资源时，Terraform 作为协调过程的核心。

### 不与特定云服务商绑定

由于 Terraform 支持大多数云，包括 AWS、MS Azure 和 GCP，所以你不必担心厂商的锁定问题。Terraform 的`registry provides` 提供了所支持的云服务商的文档。

在各种云上的描述基础设施的语法是相同的，因此与云服务商的特定的 API 的学习曲线是一样的，但不会被遗忘。

### 声明式语法

Terraform 文件中基础设施是声明性的--所以作为开发者，我们不需要担心让 Terraform 理解创建资源所需的步骤，相反，我们需要让 Terraform 知道所需的状态，Terraform 会在内部处理这些步骤。

### 模块化

Terraform 提供的模块可以帮助我们重复使用 Terraform 的代码。一个复杂的基础设施被分解成多个模块，每个模块都可以在不同的项目中重复使用。

将给定的 Terraform 配置转换为模块是非常容易的，Terraform 有它的预建模块的生态体系。

### 状态管理

在 Terraform 创建和规划基础设施的同时，维护状态。这可以与其他团队成员分享，以达到协作的目的。

Terraform 让你可以远程管理状态，这有助于防止团队成员在尝试重新创建基础设施时出现混乱。

###  提供者

Terraform 不是一个完整的配置工具，但它有助于`provisioning`活动。Terraform 的 _local-exec_ 和 _remote-exec_ 模块让你运行内联脚本。内联脚本有助于在成功创建资源后安装软件组件。

这在 Chef、Ansible 和 Salt Stack 等配置管理工具安装它们各自的代理时特别有用。当它们安装成功，就直接发送一个`UP`信号。

### 开源

Terraform 是开源软件。 当然它也有一个企业版.

## Terraform 的工作流程 \[初始化 - 执行计划 - 投入使用 - 销毁\]

你需要采取一些简单的步骤来运行你的 Terraform 代码。这些步骤与云平台上的资源的生命周期密切相关。

同样，这些步骤跟云平台无关，这意味着同样的步骤/命令可以在任何给定的云平台上 **创建,更新，和销毁** 资源都是有效的。

**注意:**，本文不涉及 Terraform 的安装步骤，我假设你已经在系统中安装了 Terraform CLI。

### 运行 `init` 命令

当我们准备好了配置文件，我们需要运行的第一个命令是 `terraform init`。Terraform 的安装二进制并不包含对所有云服务商的支持。

相反，根据云供应商，在 Terraform 运行代码前，会下载适当的插件。在我们的例子中，运行`terraform init`将下载`AWS`提供插件。这个命令帮助 _initialize_ 这个给定的 Terraform 目录。

### 生成一个执行计划

`terraform plan`，命令 **生成一个执行计划**。根据你提供的配置，Terraform 会生成一个执行计划。在这个阶段，Terraform 会在语法错误、API 认证、状态验证等方面进行可行性检查。

`plan` 在实际执行前高亮显示 Terraform 脚本中的任何修改。如果它成功了，它会输出基础设施中潜在变化的摘要。你应该在 _apply_ 命令之前运行它。因为它能让你在修改基础设施之前意识到风险。

### `Apply` 让改变生效

`terraform apply`命令将 **执行对基础设施的任何改变**。你应该在运行`terraform apply`之前运行`plan`命令，会创建一个`plan`文件，在`apply`阶段提供参考消息。

如果直接运行 `terraform apply` , 一个新的 `plan`文件会自动创建。

### 销毁资源

最后，`terraform destroy`命令销毁属于当前配置/状态的任何资源。

## Terraform 实战

这篇文件理论已经讲足够了。让我们试着通过在 AWS 上实际创建一个 EC2 实例，来实践我们目前学到的东西。

首先，如果你还没安装 Terraform CLI。其实安装非常简单，你可以找到你的操作系统的[安装步骤](https://learn.hashicorp.com/tutorials/terraform/install-cli)。

在你的系统中创建一个目录/文件夹，并创建第一个 Terraform 文件类型，讲其命名为`main.tf`。默认情况下，只要它的扩展名为`.tf`，我们可以给它起任何名字。

Terraform CLI 会识别存在特定的目录下的所有扩展名为`.tf`的文件，然后执行。

将上述代码粘贴在该文件中并保存。**请注意**，你需要根据你的区域(region) 使用正确的 AMI。

由于这是第一次执行 Terraform 代码，我们需要在这个目录中 _初始化_ Terraform，运行`terraform init`，将安装`AWS`所需的插件。

启动一个终端，进入到我们的 Terraform 所在的目录，并运行以下命令。

`terraform init`

这应该产生如下输出，非常清楚，我们可以看到安装的`AWS`插件的安装版本是 V3.22.0

```
Initializing the backend...
Initializing provider plugins...
- Reusing previous version of hashicorp/aws from the dependency lock file
- Installing hashicorp/aws v3.22.0...
- Installed hashicorp/aws v3.22.0 (signed by HashiCorp)
Terraform has been successfully initialized!
You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.
If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

接下来，我们将运行`terraform plan`命令参看一个暂定的执行计划。这也会对任何语法或引用错误进行验证。`plan`命令检查`main.tf`文件中所声明的资源的可行性。在同一个终端上运行这个命令。

`terraform plan`

如果一切工作顺利，会产生以下输出。

```
An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_instance.example will be created
  + resource "aws_instance" "myec2" {
      + ami                          = "ami-12345qwert"
      + arn                          = (known after apply)
      + associate_public_ip_address  = (known after apply)
. . .
Plan: 1 to add, 0 to change, 0 to destroy.

------------------------------------------------------------------------

Note: You didn't specify an "-out" parameter to save this plan, so Terraform
can't guarantee that exactly these actions will be performed if
"terraform apply" is subsequently run.
```

`plan`命令指出哪些资源将被创建。在我们的例子中，它计划用给定的配置创建一个`myec2`实例。它显示了用于创建的 AMI ID

此外，它还表明其他的属性，如`arn`和`associate_public_ip_addres`是已知的，当实例创建。

上面的虚线上的表示最终的一组变化--增加 1 种资源，没有任何变化或者销毁。

所以，到现在为止，一切看起来很好。让我们继续并配置应用。在终端运行下面的命令并观察输出。

`terraform apply`

一旦确认，需要几秒时间来完成 AWS 上的 EC2 实例的创建，这可以从`terraform apply`产生的输出看到。

正如下面的输出所示，在我的情况下，创建 EC2 实例需要 51 秒，而且实例的 ID 也是可用的。

通过登录你的 AWS 控制台并搜索具有以下的 ID 的 EC2 实例，来验证这一点。如果这一切运作良好，你应该能找到它。

```
Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_instance.myec2: Creating...
aws_instance.myec2: Still creating... [10s elapsed]
aws_instance.myec2: Still creating... [20s elapsed]
aws_instance.myec2: Still creating... [30s elapsed]
aws_instance.myec2: Still creating... [40s elapsed]
aws_instance.myec2: Still creating... [50s elapsed]
aws_instance.myec2: Creation complete after 51s [id=i-04ef3120a0006a153]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

因此，我们已经成功地使用 IaC 来定义/声明和创建我们在 AWS 上的虚拟机的配置。

如果我不需要这个虚拟机了，我们可以用相同的配置来销毁它。

请注意，如果我们对配置做了任何修改，但不打算应用这些修改，然后我们试图销毁以前的配置，我们可能会遇到错误。

这是因为 Terraform 在状态文件中维护了配置和现实世界资源之间的关系。改变配置会影响它的应用关系。Terraform 将把这视为要创建新的资源。

Terraform 状态是一个值得单独讨论的话题，所以我们将在后面介绍。现在，要销毁 EC2 实例，在终端运行以下命令。

`terraform destroy`

在销毁资源之前，Terraform 通过输出一个计划，要求我们进行确认。它表明，运行`destroy`命令将销毁 1 个资源，这是我们所期望的。

```
Terraform destroy
Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

aws_instance.myec2: Destroying... [id=i-04ef3120a0006a153]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 10s elapsed]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 20s elapsed]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 30s elapsed]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 40s elapsed]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 50s elapsed]
aws_instance.myec2: Still destroying... [id=i-04ef3120a0006a153, 1m0s elapsed]
aws_instance.myec2: Destruction complete after 1m5s

Destroy complete! Resources: 1 destroyed.
```

同样，销毁资源也需要几秒钟，Terraform 不会让你一直悬着，因为它会每 10 秒更新状态。

一旦资源被销毁，它就会确认它已经完成。 请登录 AWS 控制台，验证资源是否被终止。

### 多谢你的阅读！

我希望你能从这个基本介绍中理解 Terraform 的工作原理。我将在后面的文章中写更多的文章，涵盖更深的概念，如状态、语法、CLI，后端等等

如果你喜欢这些内容，请考虑订阅，关注和分享这篇博文[Let'sDoTech](https://letsdotech.dev/), [Instagram](https://www.instagram.com/letsdotech/), [Twitter](https://twitter.com/letsdotech_dev), [LinkedIn](https://www.linkedin.com/company/letsdotech).