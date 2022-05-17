> -   原文地址：[What is End-to-End Testing and When Should You Use It?](https://www.freecodecamp.org/news/end-to-end-testing-tutorial/)
> -   原文作者：Stan Georgian
> -   译者：
> -   校对者：

![What is End-to-End Testing and When Should You Use It?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/iam_os-Gr7q7kqfnVU-unsplash.jpg)

Any serious application should be accompanied by a few test suites to validate its stability and performance.

There are many types of tests, each with their own purpose that cover specific aspects of the application. And so when you're testing your app, you should make sure that you have a good balance of various tests.

![](http://media.giphy.com/media/UsmcxQeK7BRBK/giphy.gif)

But one type of test is often favored by developers over all others, and therefore tends to be overused. This type of testing is [end\-to\-end testing](https://www.freecodecamp.org/news/end-to-end-tests-with-selenium-and-docker-the-ultimate-guide/) (E2E).

## What Is End\-To\-End Testing?

For those who are still exploring the world of Software Testing, E2E testing is when you validate your entire application from start to finish, along with any of its dependencies.

In E2E testing, you create an environment identical to the one that will be used by real users. Then you test all actions that your users might perform on your application.

With End\-To\-End testing, you test entire flows – like logging onto a website or buying a product from an online store.

![](https://paper-attachments.dropbox.com/s_EA4D61AC224EF8447071464ABC3123BDD99BABBB705D8D6423915F4DE15DDD1B_1603950228233_2_++1+.jpg)

But if you overuse E2E testing, you're [Inverting the Testing Pyramid](https://automationpanda.com/2018/08/01/the-testing-pyramid/). I was in a situation like this. In one of my projects, I was planning to cover most cases with E2E tests – or even worse, use only the E2E test. Fortunately, I changed my mind. So now I want to share with you what I learned.

## Why You Should Respect the Test Pyramid

Chaotically written tests look and feel normal at first, but they will always be painful in the end.

We write tests to gain more time, and we do that with test automation. Of course, we could open our applications ourselves and test them manually. If we only had to do this once, then there would be no problem. But that's rarely the case.

Software is always getting updated. So you need to perform continuous testing to stay on top of things. You can’t run all the tests manually each time the application gets updated. If you can write a test suite once and then run it every time you want to test an aspect of your application, you'll save a lot of time.

Each test has its own purpose. If you go beyond the boundaries of each type of test, your tests will start to harm rather than help you. This is because you will end up spending more time writing tests and maintaining them than developing the application itself. In other words, you'll lose one of the biggest benefits of automated testing.

A good starting point is to follow the Testing Pyramid. It helps you figure out the right balance of tests. It represents an industry\-standard guideline, and it has endured since the mid\-2000s because it continues to be practical.

So does that mean developers always follow its guidelines? Not really. A few times the pyramid will look like an inverted one, where most of the tests are E2E. Or it will look like an hourglass, where there are a lot of unit tests and E2E tests, but not many integration tests.

![](https://paper-attachments.dropbox.com/s_EA4D61AC224EF8447071464ABC3123BDD99BABBB705D8D6423915F4DE15DDD1B_1603950198553_02.jpg)

##
The Three Layers of the Testing Pyramid

A testing pyramid typically has three layers: Unit Tests, Integration Tests, and End\-to\-End Tests. Let's learn more about them now.

### 1\. Unit Tests

[Unit Tests](https://www.tutorialspoint.com/software_testing_dictionary/unit_testing.htm) focus on the smallest unit of code, like functions or classes.

They are short and don’t have any external dependencies. If they have an external dependency, you use mocks instead.

If a unit test fails, finding the issue is typically a simple process. They also have a reduced testing scope which makes them simple to write, fast to run, and easy to maintain.

### 2\. Integration Tests

[Integration Tests](https://www.tutorialspoint.com/software_testing_dictionary/integration_testing.htm) focus on the interaction between two distinct entities. They are typically slower to run because more things need to be set up.

If integration tests fail, finding the issue is a bit more challenging because the failure range is bigger.

They are also harder to write and maintain, mostly because they need more advanced mocking and increased testing scope.

### 3\. End\-To\-End tests

Lastly, E2E tests focus on flows, from the simplest up to the most complex. They can be viewed as a multi\-step integration test.

These tests are the slowest to run because they involve building, deploying, firing up a browser, and performing actions around the application.

If E2E tests fail, finding the issue is often difficult because now the failure range is expanded to the entire application. Basically, along the path, anything could have broken.

They are by far the hardest type of tests to write and maintain (from the three types considered here) because of the huge test scope and because they involve the entire application.

Hopefully you can now see why the testing pyramid has been designed in this way. From the bottom to the top, each layer of testing represents a decrease in **speed** and an increase in **scope, complexity** and **maintenance.**

That’s why one important thing to remember is that E2E testing cannot replace other methods – it is meant to extend them. The purpose of E2E testing is well\-defined, and the tests should not extend beyond that boundary.

Ideally, tests should catch bugs as close to the root of the pyramid as possible. E2E is here to validate buttons, forms, changes, links, external processes, and generally and entire workflow's function without problems.

## Testing with Code vs Codeless Testing

In general, there are two types of testing: manual testing and automated testing. This means that we do the testing either by hand or by using scripts.

The second method is the most commonly used. But automated testing can be further separated into two parts: **testing with** **code** and **codeless testing.**

### Testing with Code

When you're testing with code, you use frameworks that can automate browsers. One of the most popular tools is [Selenium](https://www.selenium.dev/), but I prefer and often use [Cypress](https://www.cypress.io/) in my projects (only for JavaScript). Still, they mostly work in the same way.

Basically, with tools like this, you mock up web browsers and instruct them to perform different actions on your target application. After that, you test to see if your application has responded to the corresponding actions.

This is a simple mock example taken from the Cypress documentation to help you better understand how this tool works:

![](https://paper-attachments.dropbox.com/s_EA8BC9D2CF83E24BF57AB3EC5A73F372F5ADA41ABD62DE1DA2D26BB58DE3CD82_1603530185695_carbon.png)

[Raw code from doc](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-4-Make-an-assertion)

Let's look at what's going on:

1.  Given a user visits https://example.cypress.io
2.  When they click the link labeled type, then the URL should include /commands/actions
3.  If they type “[fake@email.com](mailto:fake@email.com)“ into the .action\-email input then the .action\-email input has “[fake@email.com](mailto:fake@email.com)“ as its value

### Codeless Testing

In a **codeless** testing situation, you use frameworks powered by Artificial Intelligence that record your actions. Based on some additional information, they test if the target application responds as expected.

These tools often look like low code platforms, where you drag and drop different panels. One of these tools is [TestCraft](https://www.testcraft.io/) which is a **codeless** solution built upon Selenium.

![](https://paper-attachments.dropbox.com/s_EA8BC9D2CF83E24BF57AB3EC5A73F372F5ADA41ABD62DE1DA2D26BB58DE3CD82_1603531312592_ezgif-3-e3440d13da31.gif)

Because of the features they offer (like creating, maintaining, and running tests with simple drag\-and\-drop options and no coding knowledge), this kind of tool usually comes at a higher price. But I wanted to mention [TestCraft](https://www.perfecto.io/blog) because they have a free plan which basically includes everything.

Now, of course, a codeless solution can be an advantage if you want speed and money, but these solutions are still new. Therefore, they can’t yet reach the complexity of test suites that you can develop by writing the code yourself.

If the target application has some very complex flows that include multiple moving parts, then a classic testing situation is the way to go. But if you have simple flows, then a codeless solution is what you need.

## Wrapping up

Writing tests is a must for any application. If you follow solid principles and write your test suites according to their type, then your tests will only improve your application and will also be fairly easy to write and maintain.

You should only use end\-to\-end tests, like any other test, in the ways their meant to be used. They're created to test the application's workflow from beginning to end by replicating real user scenarios. But in the end, remember that most bugs should be caught as close to the root as possible.
