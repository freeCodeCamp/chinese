> - 原文地址：[How to Start Unit Testing Your JavaScript Code](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/)
> - 原文作者：[Ondrej Polesny](https://www.freecodecamp.org/news/author/ondrej/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Start Unit Testing Your JavaScript Code](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg)

我们都知道我们应该写单元测试。但是，很难知道从哪里开始，也很难知道与实际的实现相比，应该在测试上投入多少时间。那么，该从哪里开始呢？而且，仅仅是测试代码，还是单元测试还有其他好处？

在这篇文章中，我将解释不同类型的测试，以及单元测试给开发团队带来哪些好处。我将展示Jest - 一个JavaScript测试框架。

## Different types of testing

在我们深入了解单元测试的具体内容之前，我想对不同类型的测试做一个快速浏览。围绕着它们经常有一些混淆，我并不感到惊讶。有时它们之间的界限很小。

### Unit tests

单元测试只测试你实现的单一部分。一个单元。没有依赖关系或集成，没有框架的具体内容。他们就像一个方法，在一个特定的语言中返回一个链接:

```js
export function getAboutUsLink(language){
  switch (language.toLowerCase()){
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return '/acerca-de';
  }
  return '';
}
```

### Integration tests

在某些时候，你的代码与数据库、文件系统或其他第三方进行通信。它甚至可能是你应用程序中的另一个模块。

这一块的实现应该由集成测试来测试。他们通常有一个更复杂的设置，包括准备测试环境，初始化依赖关系，等等。

### Functional tests

单元测试和集成测试让你相信你的应用程序可以正常工作。功能测试从用户的角度来观察应用程序，并测试系统是否按预期工作。

![presentation](https://www.freecodecamp.org/news/content/images/2020/03/presentation.jpg)

在上图中，你看到单元测试构成了你的应用程序测试套件的最基础的东西。通常情况下，它们很小，有很多，而且是自动执行的。

所以现在让我们更详细地了解一下单元测试。

## Why Should I Bother Writing Unit Tests?

每当我问开发者是否为他们的应用程序写了测试，他们总是告诉我："我没有时间写" 或者 "我不需要，我知道它能用"。

所以我礼貌地笑了笑，告诉他们我想告诉你的事情。单元测试不仅仅是为了测试。它们也在其他方面帮助你，所以你可以:

**要对你的代码工作有信心。** 你上次提交代码修改，构建失败，一半的应用程序停止工作是什么时候？我的是上周。

但那还是可以的。真正的问题是，当构建成功，改变被部署，你的应用程序开始不稳定。

当这种情况发生时，你开始对你的代码失去信心，最终只是祈祷应用程序能够正常工作。单元测试将帮助你更快地发现问题并获得信心 

**做出更好的架构决定。**代码会发生变化，但关于平台、模块、结构等的一些决定需要在项目的早期阶段做出。

当你在一开始就开始考虑单元测试时，它将帮助你更好地架构你的代码，实现适当的关注点分离。你将不会被诱惑为单一的代码块分配多个功能，因为这些将是单元测试的恶梦。

**在编码之前**，你写下函数方法的签名，并立即开始实现它。哦，但是如果一个参数是空的，应该怎么办？如果它的值超出了预期范围或者包含了太多的字符怎么办？你是抛出一个异常还是返回null？

单元测试将帮助你发现所有这些情况。再看一下这些问题，你会发现这正是定义你的单元测试案例的内容。

我相信写单元测试还有很多好处。这些只是我从我的经验中回忆起来的。那些是我通过艰苦的方式学到的。

## How to Write Your First JavaScript Unit Test

但是，让我们回到JavaScript上来。我们将从[Jest](https://jestjs.io/) 开始，它是一个JavaScript测试框架。它是一个能够实现自动单元测试的工具，提供代码覆盖率，并让我们轻松地模拟对象。Jest也有一个Visual Studio Code的扩展 [可在此获得](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)。

还有其他的框架，如果你感兴趣，你可以在 [本文](https://www.browserstack.com/guide/top-javascript-testing-frameworks) 中查看它们。

```js
npm i jest --save-dev
```

Let's use the previously mentioned method `getAboutUsLink` as an implementation we want to test:

```js
const englishCode = "en-US";
const spanishCode = "es-ES";
function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}
module.exports = getAboutUsLink;
```

我把它放在`index.js`文件中。我们可以在同一个文件中写测试，但一个好的做法是将单元测试分离到一个专门的文件中。

常见的命名模式包括`{filename}.test.js`和`{filename}.spec.js`。我使用了第一种，`index.test.js`:

```js
const getAboutUsLink = require("./index");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});
```

首先，我们需要导入我们要测试的函数。每个测试都被定义为对 `test` 函数的调用。第一个参数是测试的名称，供你参考。另一个是一个箭头函数，我们在这里调用我们要测试的函数，并指定我们期望的结果。

在这个例子中，我们调用 `getAboutUsLink` 函数，语言参数为 `en-US`。我们期望的结果是 "/about-us"。

现在我们可以全局安装Jest CLI并运行测试:

```js
npm i jest-cli -g
jest
```

如果你看到一个与配置有关的错误，确保你有 `package.json` 文件。如果你没有，可以用 `npm init` 生成一个。

你应该看到类似这样的东西:

```js
 PASS  ./index.test.js
  √ Returns about-us for english language (4ms)
  console.log index.js:15
    /about-us
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.389s
```

伟大的工作! 这是第一个从头到尾的简单JavaScript单元测试。如果你安装了Visual Studio Code扩展，一旦你保存一个文件，它就会自动运行测试。让我们用这一行扩展测试来试试吧:

```js
expect(getAboutUsLink("cs-CZ")).toBe("/o-nas");
```

一旦你保存文件，Jest就会通知你测试失败。这有助于你在提交修改之前就发现潜在的问题。

## Testing Advanced Functionality and Mocking Services

在现实生活中，getAboutUsLink方法的语言代码不会在同一个文件中成为常量。它们的值通常会在整个项目中使用，所以它们会被定义在自己的模块中，并被导入到所有使用它们的函数中。

```js
import { englishCode, spanishCode } from './LanguageCodes'
```

你可以用同样的方法将这些常量导入测试中。但是如果你要处理对象而不是简单的常量，情况会变得更加复杂。看看这个方法吧:

```js
import { UserStore } from './UserStore'
function getUserDisplayName(){
  const user = UserStore.getUser(userId);
  return `${user.LastName}, ${user.FirstName}`;
}
```

这个方法使用了导入 `UserStore`:

```js
class User {
    getUser(userId){
        // logic to get data from a database
    }
    setUser(user){
        // logic to store data in a database
    }
}
let UserStore = new User();
export { UserStore }
```

为了正确的单元测试这个方法，我们需要 mock(模拟) `UserStore`。 mock 是原始对象的一个替代品。它允许我们将依赖关系和真实数据与测试方法的实现分开，就像假人帮助汽车的碰撞测试而不是真人一样。

如果我们不使用mock，我们就会同时测试这个函数和商店。这将是一个集成测试，我们很可能需要对使用的数据库进行 mock（模拟）。

### Mocking a Service

为了 mock(模拟) 对象，你可以提供一个 mock 函数或一个手动 mock。我将专注于后者，因为我有一个简单的用例。但你可以自由地[查看Jest其他的提供者（provides）](https://jestjs.io/docs/en/mock-functions.html)。

```js
jest.mock('./UserStore', () => ({
    UserStore: ({
        getUser: jest.fn().mockImplementation(arg => ({
            FirstName: 'Ondrej',
            LastName: 'Polesny'
        })),
        setUser: jest.fn()
    })
}));
```

First, we need to specify what are we mocking - the `./UserStore` module. Next, we need to return the mock that contains all exported objects from that module.

In this sample, it's only the `User` object named `UserStore` with the function `getUser`. But with real implementations, the mock may be much longer. Any functions you don't really care about in the scope of unit testing can be easily mocked with `jest.fn()`.

The unit test for the `getUserDisplayName` function is similar to the one we created before:

```js
test("Returns display name", () => {
    expect(getUserDisplayName(1)).toBe("Polesny, Ondrej");
})
```

As soon as I save the file, Jest tells me I have 2 passing tests. If you're executing tests manually, do so now and make sure you see the same result.

### Code Coverage Report

Now that we know how to test JavaScript code, it's good to cover as much code as possible with tests. And that is hard to do. In the end, we're just people. We want to get our tasks done and unit tests usually yield an unwanted workload that we tend to overlook. Code coverage is a tool that helps us fight that.

Code coverage will tell you how big a portion of your code is covered by unit tests. Take for example my first unit test checking the `getAboutUsLink` function:

```js
test("Returns about-us for english language", () => {
   expect(getAboutUsLink("en-US")).toBe("/about-us");
});
```

It checks the English link, but the Spanish version stays untested. The code coverage is 50%. The other unit test is checking the `getDisplayName` function thoroughly and its code coverage is 100%. Together, the total code coverage is 67%. We had 3 use cases to test, but our tests only cover 2 of them.

To see the code coverage report, type the following command into the terminal:

```js
jest --coverage
```

Or, if you're using Visual Studio Code with the Jest extension, you can run the command (CTRL+SHIFT+P) _Jest: Toggle Coverage Overlay_. It will show you right in the implementation which lines of code are not covered with tests.

![code-coverage-inline](https://www.freecodecamp.org/news/content/images/2020/03/code-coverage-inline.jpg)

By running the coverage check, Jest will also create an HTML report. Find it in your project folder under `coverage/lcov-report/index.html`.

![code-coverage](https://www.freecodecamp.org/news/content/images/2020/03/code-coverage.jpg)

Now, I don't have to mention that you should strive for 100% code coverage, right? :-)

## Summary

In this article, I showed you how to start with unit testing in JavaScript. While it's nice to have your code coverage shine at 100% in the report, in reality, it's not always possible to (meaningfully) get there. The goal is to let unit tests help you maintain your code and ensure it always works as intended. They enable you to:

- clearly define implementation requirements,
- better design your code and separate concerns,
- discover issues you may introduce with your newer commits,
- and give you confidence that your code works.

The best place to start is the [Getting started](https://jestjs.io/docs/en/getting-started) page in the Jest documentation so you can try out these practices for yourself.

Do you have your own experience with testing code? I'd love to hear it, let me know on [Twitter](https://twitter.com/ondrabus) or join one of my [Twitch streams](https://twitch.tv/ondrabus).
