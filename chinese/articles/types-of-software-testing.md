> -  原文地址：[What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/types-of-software-testing/)
> -  原文作者：[Nahla DaviesNahla Davies](https://www.freecodecamp.org/news/author/nahla/)
> -  译者：seanbei
> -  校对者：

![What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/pexels-thisisengineering-3861969.jpg)

Software development and testing go hand in hand. And in the era of agile software development, with quick releases of small iterations, you should do testing more and more frequently.

In order to perform effective testing, you need to know about the different types of testing and when you should use them.

In this article, I'll discuss some of the tests available to you to help you ensure the operability, integrity, and security of your products and apps.

## The Software Testing Pyramid

![The Software Testing Pyramid](https://www.freecodecamp.org/news/content/images/2021/05/Instagram-Square-Pyramid-Chart---CC.png)

The Software Testing Pyramid. Enjoy this free graphic and share it on your blog or Twitter.

The software testing pyramid covers all stages [of the software development life cycle](/news/get-a-basic-understanding-of-the-life-cycles-of-software-development/) (SDLC). It extends from unit testing at the base, through to integration testing, and concludes with functional testing at the apex.

There is no set distribution among these types of testing. Instead, you should determine which tests best suit your individual needs. In order to make these decisions about the types of testing you need, you should balance their cost, how long they'll take, and how many resources they'll require.

Agile software developers [also use software testing quadrants](https://www.kaizenko.com/what-is-the-agile-testing-quadrant/) that categorize tests based on whether they are business-facing or technology-facing, and whether they critique the product or support the team.

Unit testing, for example, is a technology-facing test that supports the team, whereas usability testing is a business-facing test that critiques the product.

Let's go over some important types of testing now.

## Unit Testing Definition

Unit testing [involves testing individual code components](/news/unit-tests-explained/) rather than the code as a whole. It verifies the operation of all your component logic to identify bugs early in the SDLC, which allows you to correct errors before further development.

Unit testing is known as “white box” testing, because testing occurs with full knowledge of the application's structure and environment.

One example of unit testing is to create mock objects for testing sections of code, such as functions with variables that have not yet been made.

```JavaScript
const mocha = require('mocha')
const chai = require('chai')  // It is an assertion library
describe('Test to check add function', function(){
  it('should add two numbers', function(){
    (add(2,3)).should.equal(5)  //Checking that 2+3 should equal 5 using the given add function
  });
});
```

Unit Test example from [Unit Tests Explained](/news/unit-tests-explained/)

## Integration Testing Definition

A step up from unit testing is integration testing, which combines individual components and tests them as groups. Integration testing identifies issues in how the individual components interact with each other to see if the code meets all its functional specifications.

Integration testing differs from unit testing in that it focuses on modules and components working independently in relation to the overall group. On the other hand, unit testing focuses on isolating the modules or components before testing.

The point of integration testing is to expose any issues or vulnerabilities in the software between integrated modules or components.

As a more simplified example, if you were to perform an integration test of an email service you’re building, you would need to test the individual components such as Composing Mail, Saving Drafts, Sending, Moving to Inbox, Logging Out, and so on.

You would perform a unit test of the individual features first, followed with the integration test for each of the functions that are related.

## End-to-end Testing Definition

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
