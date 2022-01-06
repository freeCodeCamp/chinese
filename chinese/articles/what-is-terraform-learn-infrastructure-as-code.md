> -  原文地址：[What is Terraform? Learn Terraform and Infrastructure as Code](https://www.freecodecamp.org/news/what-is-terraform-learn-infrastructure-as-code/)
> -  原文作者：[Sumeet NinaweSumeet Ninawe](https://www.freecodecamp.org/news/author/letsdotech/)
> -  译者：luojiyin
> -  校对者：

![什么是Terraform？学习Terraform和基础设施即代码](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/terraform-article.jpeg)

Terraform使用一个帮助你以代码形式管理各种云基础设施服务的工具。你把你的基础设施代码化，所以它也被称为基础设施即代码(IaC)。

云对越来越多的公司来说已经非常重要。它不仅有助于减少花销和节省时间，还能让客户专注于他们的核心业务。

## 为什么要基础设施即代码?

随着云服务商数量的增加和他们的他们的服务更加灵活，能够管理你的云基础设施变的越来越重要。

Terraform的出于基础设施即代码（IaC）的概念。简单来说，laC 是通过代码来管理你的基础设施。

让我们以某个云上的任何计算资源为例，比如AWS的EC2。向AWS申请一个EC2实例，只需要在AWS 注册，提供一堆数值，然后点击 `Launch`(启动)按键。该资源将会在几分钟内准备好。

只要我们向AWS提供这些值，它们就会在AWS上生成。当然，这样是传统的方式。

Terraform提供了一种方法，使用这些`credentials`完成认证和以  _configurations_ 的输入信息，在目标云上创建一个资源。

这些配置以Terraform的语法进行资源的描述。 配置化是你声明你的基础设施的理想状态的方法--基本上是声明式的语法。

Terraform使用云服务商提供的API来创建资源。

## Terraform的好处

Terraform 是[Hashicorp](https://www.hashicorp.com/)的一个产品, 使用 [Hashicorp 配置语法](https://github.com/hashicorp/hcl) (HCL)来表示配置 .

在下面的例子中，你可以看到EC2实例的最简单的形式的描述:

```
provider “aws” {
	region = “us-west-1”
}

resource “aws_instance” “myec2” {
	ami = “ami-12345qwert”
	instance_type = “t2.micro”
}
```

这个简单的例子足以让我们了解Terraform的能力。

这个代码包含两个部分`provider`和`resource`。`provider` 是Terraform告诉AWS，我们想在`us-west-1`区使用AWS的服务。

 `resource` 让Terraform告诉AWS，在AWS提供的所有基础设施资源中，我们想创建一个实例(EC2)。

`resource`第一个参数为 `aws_instance`,第二个参数资源的命名,在本例中是`myec2`。

`resource`有几个参数，说明AWS机器镜像和用于创建该资源的实例类型。

在这里，我们已经用代码的形式来表示我们的基础设施，让我们看laC的一些优势。

1.  由于基础设施的创建现在被浓缩在配置/代码文件中， 它 **更容易维护**， 因为我们现在可以利用Git等版本控制软件来进行协作和维护。
2.  基础设施的规划阶段所需的时间减少了，因为可以在 **短时间内** 编写配置。这些配置很容易被Terraform使用，几分钟就可以创建云资源。
3.  **改变** 基础设施 **是更容易了** 和 改代码一样了.
4.  软件开发中的应用管理生命周期的优势也适用于基础设施。这让它 **更有效率**.

## Terraform的功能

### 协调工作

当部署各种端到端服务事，涉及到创建云资源时，Terraform作为协调过程的核心。

### 不与特定云服务商绑定

由于Terraform支持大多数云，包括AWS、MS Azure和GCP，所以你不必担心厂商的锁定问题。Terraform的`registry provides` 提供了所支持的云服务商的文档。

在各种云上的描述基础设施的语法是相同的，因此与云服务商的特定的API的学习曲线是一样的，但不会被遗忘。
### 声明式语法

Terraform文件中基础设施是声明性的--所以作为开发者，我们不需要担心让Terraform理解创建资源所需的步骤，相反，我们需要让Terraform知道所需的状态，Terraform会在内部处理这些步骤。

### 模块化

Terraform 提供的模块可以帮助我们重复使用Terraform的代码。一个复杂的基础设施被分解成多个模块，每个模块都可以在不同的项目中重复使用。

将给定的Terraform配置转换为模块是非常容易的，Terraform有它的预建模块的生态体系。
### 状态管理

在Terraform创建和规划基础设施的同时，维护状态。这可以与其他团队成员分享，以达到协作的目的。

Terraform让你可以远程管理状态，这有助于防止团队成员在尝试重新创建基础设施时出现混乱。

###  提供者

Terraform不是一个完整的配置工具，但它有助于`provisioning`活动。Terraform的 _local-exec_ 和 _remote-exec_ 模块让你运行内联脚本。内联脚本有助于在成功创建资源后安装软件组件。

这在Chef、Ansible和Salt Stack等配置管理工具安装它们各自的代理时特别有用。当它们安装成功，就直接发送一个`UP`信号。
### 开源

Terraform 是开源软件。 当然它也有一个企业版.

## Terraform 的工作流程 \[初始化 - 执行计划 - 投入使用 - 销毁\]

你需要采取一些简单的步骤来运行你的Terraform代码。这些步骤与云平台上的资源的生命周期密切相关。

同样，这些步骤跟云平台无关，这意味着同样的步骤/命令可以在任何给定的云平台上 **创建,更新，和销毁** 资源都是有效的。

**注意:**，本文不涉及 Terraform的安装步骤，我假设你已经在系统中安装了Terraform CLI。

### 运行 `init` 命令

当我们准备好了配置文件，我们需要运行的第一个命令是 `terraform init`。Terraform的安装二进制并不包含对所有云服务商的支持。

相反，根据云供应商，在Terraform运行代码前，会下载适当的插件。在我们的例子中，运行`terraform init`将下载`AWS`提供插件。这个命令帮助 _initialize_ 这个给定的 Terraform目录。

### 生成一个执行计划

`terraform plan`，命令 **生成一个执行计划**。根据你提供的配置，Terraform会生成一个执行计划。在这个阶段，Terraform会在语法错误、API认证、状态验证等方面进行可行性检查。

`plan` 在实际执行前高亮显示Terraform 脚本中的任何修改。如果它成功了，它会输出基础设施中潜在变化的摘要。你应该在 _apply_ 命令之前运行它。因为它能让你在修改基础设施之前意识到风险。

### `Apply` the changes

`terraform apply` helps to **execute any changes to the infrastructure**. You should run the `plan` command before running `terraform apply`, as planning creates a plan file which is referred to during apply phase.

However, if in case `terraform apply` is executed directly, a new plan file will be created automatically.

### `Destroy` resources

Lastly, `terraform destroy` helps destroy any resources which are part of the current configuration/state.

## Terraform in Action

Okay, enough theory for this post. Let's try to implement what we have learned so far by actually creating an instance of EC2 on AWS.

First, install the Terraform CLI if you haven't already. Installation is pretty easy and you can find the steps [here](https://learn.hashicorp.com/tutorials/terraform/install-cli) for the OS of your choice.

Create a directory/folder on your system and create the first Terraform file. Name it `main.tf`. Ideally, we can name it anything as long as it has the extension `.tf`.

Terraform CLI recognizes all the files with a `.tf` extension saved in a particular directory for execution.

Paste the above code in this file and save it. **Please note** that you need to use the correct AMI based on your preferred region.

Since this will be the first time we are executing the Terraform code, we need to _initialize_ Terraform in this directory. Running `terraform init` will install the required `aws` plugin.

Fire up a terminal, navigate to the directory where our Terraform file resides, and run the below command.

`terraform init`

This should generate the output as below. The output is very clear and we can see that the `aws` plugin was installed with version v3.22.0.

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

Next, we will run the `terraform plan` command to see a tentative execution plan. This also validates against any syntactical or reference errors. The `plan` command checks the feasibility of the declared resources in the `main.tf` file. Run this in the same terminal.

`terraform plan`

If everything worked well, the following output is generated.

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

The `plan` command indicates which resources will be created. In our case, it plans to create a `myec2` instance with the given configuration. It shows the AMI ID being used to create the instance.

Additionally, it also indicates that other attributes like `arn` and `associate_public_ip_address` are known after `apply`, that is when the instance will be created.

The bottom line here indicates the final set of changes – to add 1 resource and nothing to change or destroy.

So, everything looks good as of now. Let's go ahead and apply the configuration. Run the below command in the terminal and observe the output.

`terraform apply`

Once confirmed, it takes a few seconds to complete the creation of the EC2 instance on AWS, and this is indicated by the output being generated by `terraform apply`.

As indicated by the output below, in my case it took 51 seconds to create an EC2 instance and the ID of the instance is made available as well.

Verify the same by logging into your AWS console and searching for an EC2 instance with the below ID. If everything has worked well, you should be able to find it.

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

Thus, we have successfully used IaC to define/declare and create our virtual machine configuration on AWS.

If we don't need this virtual machine anymore, we can use the same configuration to destroy it.

Please note that if we make any changes to the configuration without the intention of applying those changes – and then we try to destroy the same – we may run into errors.

This is because Terraform maintains the relationship between configuration and real-world resources in state files. Changing the configuration with its application will affect the alignment and Terraform will treat this as new resources to be created.

Terraform states is a topic that deserves its own post, so we shall cover that later. For now, to destroy the EC2 instance, run the below command in the terminal.

`terraform destroy`

Before destroying the resource, Terraform asks for our confirmation by providing a plan output. It indicates that running the destroy command will delete 1 resource, which is exactly what we expect.

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

Again, it takes a few seconds to destroy the resource. Terraform doesn't keep you hanging as it updates the status in a 10-second interval.

Once the resource is destroyed, it confirms that it's done. Feel free to log in to the AWS console and verify if the resource is terminated.

### Thanks for reading!

I hope you understand how Terraform works from this basic introduction. I will write more posts covering deeper concepts like states, syntax, the CLI, the back end, and so on in future posts.

If you like this content, do consider subscribing, following, and sharing this blog post! [Let'sDoTech](https://letsdotech.dev/), [Instagram](https://www.instagram.com/letsdotech/), [Twitter](https://twitter.com/letsdotech_dev), [LinkedIn](https://www.linkedin.com/company/letsdotech).