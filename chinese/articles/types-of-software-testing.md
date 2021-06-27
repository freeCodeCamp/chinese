> -  原文地址：[What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/types-of-software-testing/)
> -  原文作者：[Nahla DaviesNahla Davies](https://www.freecodecamp.org/news/author/nahla/)
> -  译者：seanbei
> -  校对者：

![What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/pexels-thisisengineering-3861969.jpg)

软件开发和软件测试密不可分。在敏捷软件开发中，迭代小，释放快，你必须非常频繁的做测试。

如果你想更高效的做测试，就需要知道不同的测试类型，以及在什么时候使用它们。

在这篇文章中，我想谈谈其中的一些测试类型，它们能帮助你确保产品或者应用的可操作性，可集成性和安全性。

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

At the top of the pyramid is end-to-end (E2E) testing. As its name suggests, end-to-end testing [replicates the full operation of the application](/news/end-to-end-testing-tutorial/) in order to test all of the application’s connections and dependencies. This includes network connectivity, database access, and external dependencies.

You conduct E2E testing in an environment that simulates the actual user environment.

You can determine the success of an E2E test using several metrics, including a Status of Test (to be tracked with a visual, such as a graph), and a Status and Report (which must display the execution status and any vulnerabilities or defects discovered).

## Types of Software Testing

Within the levels of the testing pyramid are a wide variety of specific processes for testing various application functions and features, as well as application integrity and security.

### Application Security Testing Definition

One of the most important types of testing for applications is application security testing. Security testing helps you identify application vulnerabilities that could be exploited by hackers and correct them before you release your product or app.

There are a [range of application security tests](https://securityboulevard.com/2020/03/application-security-testing-trends-in-2020/) available to you with different tests that are applicable at different parts of the software development life cycle.

You can find different types of application security testing at different levels of the testing pyramid. Each test has its own strengths and weaknesses. You should use the different types of testing together to ensure their overall integrity.

### Static Application Security Testing (SAST) Definition

You should use static application security testing (SAST) early in the SDLC. This is an example of unit testing.

SAST reflects the developer’s knowledge, including the general design and implementation of the application, and it is therefore white box, or inside out, testing.

SAST analyzes the code itself rather than the final application, and you can run it without actually executing the code.

![](https://lh4.googleusercontent.com/R4aFSAcHZcrpNNzFnLlYk-vtXFq7QnjIJKzx_jvqmt-ycGE8CcMozgirFIxfXVXKkjYs1dV_nIQrhCFRC809_Kzp3FLvMqRw519XnDQHX8VEV0065Scw-SzxQlJg44xWeggZx2-e)

[Image source](https://www.seciq.in/static-application-security-testing/)

According to the security analysts at [Cloud Defense](https://www.clouddefense.ai/sast-static-application-security-testing),

> “SAST checks your code for violation of security rules and compares the found vulnerabilities between the source and target branches...you'll then get notified if your project’s dependencies are affected by newly disclosed vulnerabilities.”

Once you're aware of vulnerabilities, you can resolve them before the final application build.

You should apply SAST in the development phase of your software projects. A good approach for you will be to design and write your applications to include SAST scans into your development workflow.

### Dynamic Application Security Testing (DAST) Definition

On the other end of the spectrum is dynamic application security testing (DAST), which tests the fully compiled application. You design and run these tests without any knowledge of the underlying structures or code.

Because DAST applies the hacker’s perspective, it is known as black box, or outside in, testing.

DAST operates by attacking the running code and seeking to exploit potential vulnerabilities. DAST may employ such common attack techniques as cross-site scripting and SQL injection.

DAST is used late in the SDLC and is an example of integration security testing. While slow (a complete DAST test of a complete application can take five to seven days on average), it will reveal to you the most likely vulnerabilities in your applications that hackers would exploit.

### Interactive Application Security Testing Definition

Interactive application security testing (IAST) is a newer testing methodology that [combines the effectiveness of SAST and DAST](https://developer.ibm.com/recipes/tutorials/what-is-interactive-application-security-testing/) while overcoming the issues associated with these more established tests.

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
