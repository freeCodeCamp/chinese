> -  原文地址：[What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/types-of-software-testing/)
> -  原文作者：[Nahla DaviesNahla Davies](https://www.freecodecamp.org/news/author/nahla/)
> -  译者：seanbei
> -  校对者：

![What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/pexels-thisisengineering-3861969.jpg)

软件开发和软件测试密不可分。在敏捷软件开发中，迭代小，释放快，你必须非常频繁的做测试。

如果你想更高效的做测试，就需要知道不同的测试类型，以及在什么时候使用它们。

在这篇文章中，我想谈谈其中的一些测试类型，它们能帮助你确保产品或者应用的可操作性，完整性和安全性。

## 软件测试金字塔

![The Software Testing Pyramid](https://www.freecodecamp.org/news/content/images/2021/05/Instagram-Square-Pyramid-Chart---CC.png)

（《软件测试金字塔》 如果觉得这张图片很赞，可以随意分享到你的博客或者推特。）

软件测试金字塔覆盖了整个[软件开发生命周期](/news/get-a-basic-understanding-of-the-life-cycles-of-software-development/) (SDLC)。它从底层的单元测试开始延伸，穿过集成测试，到顶部的功能性测试结束。

然而，这些测试类型并没有固定的套路，相反，你需要自己来决定哪种才最适合你的需求。为了决定选哪一种，你需要综合考虑使用它们所需的费用，时间以及资源。


敏捷软件开发者也常使用[软件测试四象限](https://www.kaizenko.com/what-is-the-agile-testing-quadrant/)，这个法则根据是面向业务还是面向技术，是评论产品还是支持团队这两个维度来对测试进行归类。

举例来说，单元测试就是一种面向技术、支持团队的测试，而可用性测试则是一种面向业务、评论产品的测试。

现在让我们一起来看看一些重要的测试类型。

## 单元测试定义

单元测试[是指测试单个代码组件](/news/unit-tests-explained/)，而不是整块代码。它验证所有组件逻辑的可操作性，以便在软件开发生命周期的早期阶段就发现缺陷，在进一步开发之前，对其进行修复。 

单元测试也叫做“白盒”测试，因为需要完全掌握应用程序的结构和环境才能进行。

下面这个单元测试的例子，创建了模拟对象用于测试代码块，如还未生成参数变量的函数。


```JavaScript
const mocha = require('mocha')
const chai = require('chai')  // It is an assertion library
describe('Test to check add function', function(){
  it('should add two numbers', function(){
    (add(2,3)).should.equal(5)  //Checking that 2+3 should equal 5 using the given add function
  });
});
```

单元测试范例 来自[Unit Tests Explained](/news/unit-tests-explained/)

## 集成测试定义

单元测试往上一步就是集成测试，它把各个组件联合起来，作为一个组来进行测试。集成测试用于识别各个组件之间交互时出现的问题，以检验代码是否符合功能说明书。

集成测试区别于单元测试的一个点是，它关注独立工作在整个组里面的模块和组件。而另外一边，单元测试关注于在测试前隔离模块或组件。

集成测试的关键是，在集成后的模块或组件之间，暴露任何软件缺陷或漏洞。

拿一个更为简单的例子来说，如果你正在对刚创建的邮箱服务进行一项集成测试，那么你需要测试各个组件，如撰写邮件、保存草稿、发件、移动到收件箱、登出等等。

在这之前，你得先对单个特性进行一次单元测试，主要是跟集成测试中相关的每个功能函数。

## 端到端测试定义

金字塔的顶部是端到端测试。如名所示，端到端测试[重复应用程序的所有操作](/news/end-to-end-testing-tutorial/)，以测试应用程序的连接性和依赖性的方方面面。这包括网络连接、数据访问和外部依赖。

端到端测试在模拟真实用户的环境下进行。

你可以通过某些指标来定义端到端测试是否成功，包括测试状态（用可视化图表来跟踪）和报告状态（用于展示测试执行的状态和已发现的漏洞或缺陷）。

## 软件测试类型

测试金字塔的每个层级都包含了各式各样的具体流程，用于测试各种应用程序功能和特性，也包括应用程序的完整性和安全性。

### 应用程序安全性测试定义

应用程序安全性测试是应用程序各种测试类型中最重要的一个。它帮助你识别应用程序漏洞，这些漏洞很有可能被黑客利用，所以要在释放产品或应用之前把它们修复掉。

有很多[应用程序安全性测试](https://securityboulevard.com/2020/03/application-security-testing-trends-in-2020/)供你使用，它们可应用于软件开发生命周期中的不同部分。

你可以在测试金字塔的不同层级找到不同类型的应用安全性测试。每种测试都有其自己的优点和缺点。你应该同时使用不同的测试类型，以确保它们整体上的完整性。

### 静态应用程序安全性测试（SAST）定义

你应该在软件开发生命周期早期使用静态应用程序安全性测试（SAST）。它是单元测试的一个例子。

SAST反映了开发人员的能力，包括应用程序的通用设计和实现，因此它是白盒测试，或者叫由内而外的测试。

SAST分析代码本身而不是最终的应用程序，你不需要执行代码就可以运行起来。

![](https://lh4.googleusercontent.com/R4aFSAcHZcrpNNzFnLlYk-vtXFq7QnjIJKzx_jvqmt-ycGE8CcMozgirFIxfXVXKkjYs1dV_nIQrhCFRC809_Kzp3FLvMqRw519XnDQHX8VEV0065Scw-SzxQlJg44xWeggZx2-e)

[图片来源](https://www.seciq.in/static-application-security-testing/)

[云防御](https://www.clouddefense.ai/sast-static-application-security-testing)的安全分析师说，

> “SAST检查你的代码是否违反安全性规则，同时在源分支和目标分支之间比较已发现的漏洞……一旦项目新发现的漏洞会影响项目依赖性，你就会被通知到。”

一旦发现漏洞，你就可以在最终应用程序构建之前把它们解决掉。

你应该在软件项目的开发阶段将SAST应用进去。在设计和编写应用程序时就将SAST扫描包含到开发流程中，不失为一个好方法。

### 动态应用程序安全性测试（DAST）定义

处于另一端的是动态应用程序安全性测试（DAST），它测试完整编译好的应用程序。你设计和运行这些测试时，不需要知道潜在的结构或代码。

因为DAST采用黑客视角，它被称为黑盒测试，或由外向内的测试。

DAST通过攻击运行中的代码以及寻找可利用的潜在漏洞来进行测试。DAST可能采用跨站点脚本和SQL注入等常见攻击技术。

DAST在软件开发生命周期后面才进行，它是集成安全性测试的一个例子。由于很慢（一整个完整的应用程序的DAST测试平均可能需要花5到7天），它会为你揭示应用程序中黑客最有可能攻击的漏洞。

### 交互式应用程序安全性测试定义

交互式应用程序安全性测试 (IAST) is a newer testing methodology that [combines the effectiveness of SAST and DAST](https://developer.ibm.com/recipes/tutorials/what-is-interactive-application-security-testing/) while overcoming the issues associated with these more established tests.

IAST conducts continuous real-time scanning of an application for errors and vulnerabilities using an inserted monitoring agent. Even though IAST operates in a running application, it is considered an early SDLC test process.

Regardless of what type of software you’re looking to test, IAST is best used in a QA (Quality Assurance) environment, or an environment that is designed to replicate production as closely as possible without your clients or customers actually accessing it.

### Compatibility Testing Definition

Compatibility testing assesses how your application operates and how secure it is on various devices and environments, including mobile devices and on different operating systems.

Compatibility testing can also assess whether a current version of software is compatible with other software versions. Version testing can be backward or forward facing.  

![](https://lh6.googleusercontent.com/SDElGdbGkactASCRfFSfWXcdOM36IiAQnDZ3uofeiYAeaxzvwvaQzB9cEqEcUFu7L6Z3GxjoC_nCMy0NhgANP8XdjP3s9MKcxvvMdrZsIsmq3kuIJMYbmViDsbAQpBrvyGZscgm0)

[Image Source](https://www.testrigtechnologies.com/service/compatibility-testing/)

Examples of compatibility testing include:

-   browser testing (checking to make sure your website or mobile site is fully compatible with different browsers)
-   mobile testing (making sure your application is compatible with iOS and Android)
-   or software testing (if you’re going to be creating multiple software applications that need to be interacting with one another, you’ll need to conduct compatibility testing to ensure that they actually do so).

## Beyond the Software Testing Pyramid

Modified versions of the testing pyramid can include a level that's next to or above end-to-end testing. This level consists of tests focused on the application user.

### Performance Testing Definition

You need to know how the application will work in a variety of different conditions, and this is the purpose of performance testing. Performance testing can model various loads and stresses to assess the robustness of the application. The type of performance testing is based on the applied conditions.

An example of performance sting is load testing, which [determines the maximum load](/news/practical-guide-to-load-testing/) applied to the system at the time of a crash.

Another example like scalability testing, on the other hand, applies a gradually increasing load to the system to assess ways to accommodate the added system stresses.

And spike testing assesses the effect of applying sudden large load changes to the system.

You should conduct performance testing on any software system before you put it to market. Test it against stability, scalability, and speed so you can identify what to fix before going live.

### Usability Testing Definition

Testing the actual use of the application interface is an important task. It is one thing to understand if the application functions as designed. It is another thing to understand if the design itself is acceptable to users. This is where usability testing comes in.

With usability testing, developers can assess user reactions to specific application features and functions. This includes features that you may know in advance will be less desirable from the user perspective but are [necessary for strong security](https://privacycanada.net/programming-security-for-beginners/) and proper operation (like strong password requirements).

Usability testing is not so much about cosmetic issues or fixing grammar errors in any written text (although both of those issues are certainly important in their own right). Instead it's about how easy the completed application is to use by the end user.

## Conclusion

Testing is not just something the QA division should do after you have finished developing an application. It's also important part of the [software development process](/news/software-quality-assurance-guide/).

Knowing what tests are available to you and how they work will help you ensure your application functions well, is secure, and is acceptable to the end user.
