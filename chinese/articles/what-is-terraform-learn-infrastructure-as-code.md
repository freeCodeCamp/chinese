> -  原文地址：[What is Terraform? Learn Terraform and Infrastructure as Code](https://www.freecodecamp.org/news/what-is-terraform-learn-infrastructure-as-code/)
> -  原文作者：[Sumeet NinaweSumeet Ninawe](https://www.freecodecamp.org/news/author/letsdotech/)
> -  译者：
> -  校对者：

![What is Terraform? Learn Terraform and Infrastructure as Code](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/terraform-article.jpeg)

Terraform is a tool that helps you manage various cloud infrastructure services in the form of code. You codify your infrastructure, and so it's also known as Infrastructure as Code (IaC).

The cloud has become important to more and more companies. It not only helps reduce time and costs but also lets customers focus on their core business.

## Why Infrastructure as Code?

As the number of cloud providers increases and their services become more flexible, it's becoming more important to be able to manage your cloud infrastructure resources.

Terraform works on the concept of Infrastructure as Code (IaC). In simple terms, IaC is the ability to represent your infrastructure in the form code.

Let's take as an example any computing resource on a given cloud, like EC2 on AWS. Requesting an EC2 instance from AWS is a matter of signing up with AWS, providing a bunch of values, and clicking on the “Launch” button. The "resource" will be ready in a few minutes.

As long as we can provide those values to AWS, they'll live on that cloud provider. Of course, this is the traditional way to do this.

Terraform provides a way to take these credentials and inputs in the form of _configurations_ and process them to create a resource in the target cloud.

These configurations describe the resource in a language that Terraform understands. Configurations are how you can declare the desired state of your infrastructure – basically, "Declarative" syntax.

Terraform uses cloud provider APIs to create the resource.

## Advantages of Terraform

Terraform is a product from [Hashicorp](https://www.hashicorp.com/), and uses [Hashicorp Configuration Language](https://github.com/hashicorp/hcl) (HCL) syntax to represent the configurations.

In the example below, you can see the representation of the EC2 instance in its simplest form:

```
provider “aws” {
	region = “us-west-1”
}

resource “aws_instance” “myec2” {
	ami = “ami-12345qwert”
	instance_type = “t2.micro”
}
```

This simple example is enough for us to understand the capabilities of Terraform.

The code contains two blocks – the `provider` and `resource`.  The `provider` block lets Terraform know that we want to use `aws` provider in the region “us-west-1”.

The `resource` block lets Terraform know that out of all the infrastructure resources offered by AWS, we want to create a resource of type “instance” (EC2).

The first parameter represents this to the resource block as “aws\_instance”. The second parameter is what we've named the resource – in this case, “myec2”.

The resource block has a couple of arguments that state the AWS machine image and the type of instance used to create this resource.

Here, we have managed to express our infrastructure in the form of code. Let's go through some of the advantages of IaC.

1.  Since infrastructure creation is now condensed in config/code files, it is **easier to maintain** since we can now leverage version control systems like Git to collaborate and maintain it.
2.  The time required for the planning phase of the infrastructure is reduced as we can write the configurations in a **short amount of time**. These configs are readily consumed by Terraform to create cloud resources in the matter for few minutes.
3.  **Changes** to the infrastructure **are easier** and are comparable to application code changes.
4.  The advantages for application management lifecycle in the case of software development are also applicable for infrastructure. This makes it **more efficient**.

## Features of Terraform

### Orchestration

When deploying various end-to-end services, Terraform acts as the core of the orchestration process when it comes to creating cloud resources.

### Cloud agnostic

Since Terraform supports most of the clouds including AWS, MS Azure, and GCP, you don't have to worry as much about vendor lock-in issues. The Terraform registry provides the documentation for all the supported cloud providers.

Syntax patterns used to code infrastructure on various clouds are the same, so the learning curve related to provider-specific APIs is on a back burner, but not forgotten.

### Declarative syntax

Infrastructure expressed in Terraform files is declarative – so as developers, we don’t need to worry about making Terraform understand the steps required to create a resource. Rather, all we need to do is let Terraform know about the desired state and Terraform takes care of the steps internally.

### Modules

Terraform provides modules which help us reuse our Terraform code. A complex infrastructure is broken into multiple modules and each module is reusable in different projects.

It is very easy to convert a given Terraform configuration into modules and Terraform has its eco-system for pre-built modules.

### State management

While Terraform is creating and planning the infrastructure, state is maintained. This can be shared with other team members for collaboration purposes.

Terraform lets you manage state remotely, which helps prevent confusion amongst team members in case they attempt to recreate the infrastructure.

### Provisioning

Terraform is not a full-blown provisioning tool, but it helps with day one provisioning activities. Terraform’s _local-exec_ and _remote-exec_ blocks let you run inline scripts. Inline scripts help install software components upon the successful creation of the resource.

This is especially useful when helping configuration management tools like Chef, Ansible, and Salt Stack install their respective agents. They can just send an “UP” signal once they are installed successfully.

### Open Source

Terraform is available for use as open-source software. It also has an Enterprise version.

## Terraform Workflow \[init - plan - apply - destroy\]

There are some simple steps you need to take to execute your Terraform code. These steps are closely related to the lifecycle of resources on cloud platforms.

Again, these steps are cloud-agnostic, meaning the same steps/commands are valid to **create, update, and destroy** resources on any given cloud provider.

**Note:** This blog post doesn’t cover installation steps for Terraform, and I assume you already have the Terraform CLI installed on your system.

### Run the `init` command

Once we have the configuration files ready, the very first command we need to run is `terraform init`. The Terraform binary installation does not include support for all the cloud providers at once.

Instead, based on the provider, appropriate **plugins are downloaded** before Terraform executes the code. In our example, running `terraform init` would download the `aws` provider plugin. This command helps _initialize_ the backend for a given Terraform directory.

### Generate an execution plan

The `terraform plan` command helps **generate an execution plan**. Based on the configuration you provide, Terraform generates an execution plan. In this phase, Terraform performs **feasibility checks** in terms of syntax errors, API authentication, state verification, and more.

`plan` highlights any fixes in the Terraform script before actual execution. If it's successful, it outputs a **summary of potential changes** in the infrastructure. You should run this before _apply_, as it makes you aware of any risks before modifying the infrastructure.

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