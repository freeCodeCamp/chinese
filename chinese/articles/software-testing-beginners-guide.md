> -  原文地址：[What is Software Testing? A Beginner's Guide](https://www.freecodecamp.org/news/software-testing-beginners-guide/)
> -  原文作者：[Sophia Iroegbu](https://www.freecodecamp.org/news/author/sophia-iroegbu/)
> -  译者：JunoWei
> -  校对者：

![What is Software Testing? A Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/Tech-Blog-Cover--4-.png)

Software testing is essential to development. It saves you time and money in production mode.
软件测试在软件开发全流程中占据重要地位，协助生产过程降本增效。
But software testing is a complex topic and can be a bit difficult to understand.
同时软件测试又是一个复杂且难懂的话题。
In this article, I'll explain the major topics in software testing and how this practice can help you.
在本文中，我将介绍软件测试的主要环节，以及这些环节如何协助开发。
### Table of Contents:

-   [什么是软件测试?](#what-is-software-testing)
-   [软件测试分类](#types-of-software-testing)
-   [功能测试类型](#different-types-of-functional-software-testing)
-   [Software Testing Principles](#software-testing-principles)
-   [Why is Software Testing needed?](#why-is-software-testing-needed)
-   [Conclusion](#conclusion)

ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

## 什么是软件测试？What is Software Testing?

Software testing is the process of making sure your software/app works as it should. There are various methods you can use to test your code, and each testing method has different requirements.
确保软件或者应用程序正常运行的步骤就是软件测试，测试方法种类繁多，不同方法需求也不同。
For instance, unit testing involves writing test cases to ensure the code works as it should, and Beta testing consists of testing the preview version of the software or app to make sure users can use the product.
例如，单元测试需要编写测试用例验证代码是否存在缺陷；β测试需要回测历史版本确保既有功能的正常使用。
Software testing is integral to the process of building good software that works as it should. It also helps improve productivity and performance. Testing is an important part of the _Software Development Life Cycle_ (SDLC).
软件测试是软件开发生命周期的重要组成部分，协助提升开发效率和产品性能，打造符合要求的优质产品。
Other benefits of testing your code include preventing bugs, reducing cost, and reducing time of development.
此外，测试还能降低缺陷率，降低开发成本投入，缩短开发时间。
## 软件测试分类Types of Software Testing

There are two general types of software testing:
软件测试主要有两类：
### 功能测试Functional Testing:

Functional Testing is a software testing method that validates the system against the customer's requirements or specifications.
功能测试是验证系统是否按照客户需求或者规范运行。
This type of testing aims to test each function of the software by providing the correct input and ensuring the output is right.
这类测试旨在验证每个功能正确输入后会有对应的正确输出。
For examples, let's say you write a test case to test creating a user. The test case provides the correct input (email, first name, last name and password) and ensures the output (success message) is accurate, as well.
例如，编写一条测试创建用户的测试用例，用例中包含邮箱地址、姓名和密码等格式正确的输入内容，验证成功创建用户。
Functional testing checks that everything is functioning properly by emulating business scenarios based on applicable requirements.
功能测试就是根据功能需求，模拟业务场景，验证功能的正常使用。
### 非功能测试Non-functional Testing:

Non-functional testing is a software testing method that tests for end-user experiences, such as performance and reliability under load. This could either make or break a user experience.
非功能测试是验证终端用户的使用体验，如压力测试下的性能表现与稳定性，这对用户体验至关重要。
When your code fails at non-functional testing, it may not cause an issue that user would note but it can flag a problem in the system.
用户可能无法直观感知到非功能测试发现的代码问题，但却是系统中的重点问题。
Non-functional testing is just about testing the software to know how it responds to load on the system.
非功能测试就是测试加压后软件会如何响应。
In this guide, we will focus on Functional Software Testing.
本文中，我们将聚焦阐述功能测试的内容。
## 功能测试类型Different Types of Functional Software Testing

There are different types of software testing, and each has a specific aim. We'll look at each one quickly now.
功能测试有很多类型，每一个都对应具体的目标，下文会简要介绍所有的类型。
ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

### 单元测试Unit Testing:

Unit testing is a type of software testing that validates how each software unit performs and whether that specific piece of code does what it should. A unit is the smallest testable component of an application.
最小可测试代码称为一个单元，单元测试是验证每一个可独立运行的代码块如何运行及运行的准确性。
The aim is to confirm that each unit of software code works as expected. You do unit testing during the coding (development) stage or phase. Developers write these tests as they go.
目的是测试软件中的每一单元准确运行出所需要的结果。单元测试由开发人员在软件开发过程中自主完成。
Unit tests isolate possible bugs in your code and help you correct them. A unit could be a single function, method, procedure, module, or object.
单元测试可以发现独立代码模块内可能存在的各种缺陷。独立的函数、方法、过程、模块及对象都可作为一个单元。
![image-404](https://www.freecodecamp.org/news/content/images/2022/09/image-404.png)

Code Snippet of a unit test case in Python
使用Python编写的单元测试的代码片段
![image-403](https://www.freecodecamp.org/news/content/images/2022/09/image-403.png)

Code Snippet of a unit test case in Java
使用Python编写的单元测试的代码片段
### 集成测试Integration Testing:

Integration Testing is software testing which helps ensure that software components or functions work together properly. This is the second phase of the software testing process that comes after unit testing.
软件测试的第二阶段，即完成单元测试后，需要进行集成测试，验证软件中的各个组件或者功能可以准确地联动运行。
In this type of testing, units or individual software components are tested in groups. This testing method mainly focuses on exposing defects in interactions between integrated components and units.
测试独立单元或者组件组合成的完整功能，主要关注各单元或组件的交互中是否存在缺陷。
### 系统测试System Testing:

System testing involves the process of testing integrated software. The aim is to evaluate the system's compliance with specify requirements.
系统测试是测试整个完整的系统，旨在验证软件是否按照具体需求运行。
In system testing, the quality assurance team evaluates how each component of the application or software work together in a full, integrated environment.
系统测试时，质量保证（QA）团队在真实的集成环境中验证APP或软件的每个部分运行是否正常。
### 验收测试Acceptance Testing:

Acceptance testing is a software testing method where a system is tested or checked for acceptability. It evaluates the system's compatibility with the business requirements and assesses whether it is acceptable for delivery.
验收测试是测试软件是否已达到可验收的标准，验证已完成的功能是否符合业务需求并且评估是否可交付。
It is also known as formal testing performed to fit user needs, requirements, and business processes. It determines if a system satisfies the standard business criteria and if users or customers will be able to accept it.
在正式环境测试系统功能是否符合用户的需求、要求以及业务流程，目的是判断软件是否满足验收标准，用户或者客户是否愿意使用。
Acceptance testing is the last stage of software testing done after system testing and before making the system available for public use.
验收测试是在完成系统测试后，在产品发布之前的测试步骤，是软件测试的最后一项流程。
### 回归测试Regression Testing:

Regression testing ensures that a component continues working as it should, after including additional components in the program. You perform regression testing when something changes, such as adding a new module to the program.
回归测试是软件增加新功能后，验证现有功能按照既定需求运行。当相关代码产生变动，如在项目中新增一个模块后，需要回归测试。
This type of testing represents the complete testing of executed test cases that are re-executed to ensure the current functionalities still work just fine.
回归测试使用所有已执行的历史测试用例再次测试，验证现有功能依然能够准确运行。
ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

### α测试与β测试Alpha Testing and Beta Testing:

Alpha testing is also known as initial validation testing. It is an aspect of acceptance testing done before the product is given to the consumers or users. QA (Quality Assurance) testers usually do this. Alpha testing is done internally by the QA team.
α测试
Beta testing is also known as second phase of validation testing. But this type of testing is done externally, which means the public does it.

The version of the code/software for this phase of testing is released to a limited number of users for testing in a real-time scenario. For instance, freeCodeCamp's math curriculum is available for beta testing [here](https://www.freecodecamp.org/news/freecodecamp-foundational-math-curriculum/).

## 软件测试原则Software Testing Principles

Everything in tech has principles. These are guidelines to help you build better software and avoid errors.

Here are some software testing principles you should follow when writing tests for your code:

### Testing aims to show the presence of defects, not the absence:

Software testing aims to spot software failures. This reduces the presence of faults and errors.

Software testing ensures defects are visible to the developer but doesn't guarantee defect-free software. Multiple types of testing can't even ensure error-free software. Testing can only decrease the number of errors.

### Exhaustive testing is not possible:

Exhaustive Testing is the process of testing software for all valid and invalid inputs and pre-conditions.

This method of testing is not realistic because test cases presume that the software is correct and it produces the correct output in every test case. If you truly try to test every aspect and test case in your software, it will take too much time and effort, and it's not practical.

### Perform early testing:

Testing your software at an early phase helps avoid minor bugs or errors. When you can spot errors at an early stage of the Software Development Life Cycle(SDLC), it's always less expensive. It is best to start software testing from the beginning of the project.

ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

### Defect clustering:

Defect clustering refers to when most of the problems you find occur in just a few parts of the application or software. If you can identify the modules or areas where these defects occur, you can focus most of your testing efforts on them.

Keep the Pareto Principle in mind when testing your code: 80% of software defects tend to come from 20% of the modules.

### Beware of the Pesticide paradox:

This principle is based on a theory – "the more you use pesticide on a crop, the more immune the crop will eventually grow, and the pesticide will not be effective."

When you repeat particular test cases over and over, you will see fewer and fewer new bugs. So to find new bugs, update your test cases and run them once you add new test cases.

### Testing is context-dependent:

Testing is context-dependent, which means that you should test your software based on its needs, functionalities, and requirements.

Your test approach should depend on what your software does. Not every software needs the same type/method of testing because every application has its unique functionalities.

For instance, when testing an eCommerce web app, you will focus on its functionality to display products, so you will test how it shows products to end-users. When dealing with an API, you will focus on the response the API returns when an endpoint is called.

You wouldn't necessarily use the same test cases for both – that is what it means that testing is context-dependent.

### The absence of errors is a fallacy:

If you build software that is 99% bug-free, but it doesn't follow user requirements, it is not usable for end-users.

Know that it is very much necessary that your 99% bug-free software still meets or fulfills your user requirements. It is important to write test cases to find errors in the code, but you also need to test your software for your end-users (with them and how they'll use it in mind). The best way to do this is to carry out beta testing.

## 为什么需要软件测Why is Software Testing Needed?

Besides making sure your software is bug-free and meets user requirements, software testing has other advantages.
软件测试既可以确保软件无缺陷以及达到用户需求，还有另外的优势。
ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

### 优化安全性能Software testing improves security:

When building software, security is a crucial part of your planning. This is because vulnerable software could jeopardize you users and their information, as hackers can use stolen info for malicious purposes.

As a product undergoes testing, the end-user can count on the fact that they will be getting a reliable product and their details will be secured and safe. So users are more likely to get a product that is free from vulnerabilities with the help of software testing.

### 改善产品质量Software testing improves product quality:

You want your software or product to be bug-free, low-risk, and effective at what it should do. And you can achieve this by including test cases and other testing methods when building out the code.
在构建软件产品代码时就使用测试用例和其他无缺陷、低风险
In addition, you won't know how good your product is until you test it. This helps you provide the best product version before it gets released (and discover any inconsistencies or pain points along the way – so you can improve them).
此外
### 提高客户满意度Software testing improves customer satisfaction:

For instance, let's say you download a new app and try to use some of its functionality – but it shows an error. This will probably frustrate you, and you might not want to use the app again, right?

This is exactly why software testing is important. It can help you discover such errors and detect them before you release the product to the user, and gives the developers a chance to prevent the error.

By investing in software testing early in the development stage, you are letting the users know that you care about their experience. It could also help you create a solid long-term customer relationship.

### 节省成本Software testing saves money:

Software testing can save you a lot of money – but how?

Each stage of development involves many things, such as clear communication and coordination between multiple teams, and each step has a laundry list of things that could go awry.

Catching those errors when the product is live is a horrible experience because you may have to handle PR, retasking fixes, and trying to sort the problem in real time.

In addition, your users won't be able to access the app while you're fixing it, which defeats the app's purpose and provides a bad user experience in the meantime. Software testing helps resolve this stress, and once live, your user can enjoy your app/product to the fullest.

## Conclusion

In conclusion, software testing is a crucial part of development. It can help save your team a lot of trouble, and it feels great to create a usable, bug-free product that users enjoy and recommend.

If software testing interests you, you can check freeCodeCamp's QA certificate course [here](https://www.freecodecamp.org/learn/quality-assurance/#quality-assurance-and-testing-with-chai) to learn more about QA testing. QA testers are techies that focus on testing softwares and apps for errors.
