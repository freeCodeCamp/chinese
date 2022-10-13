> - 原文地址：[How to Start Unit Testing Your JavaScript Code](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/)
> - 原文作者：[Ondrej Polesny](https://www.freecodecamp.org/news/author/ondrej/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Start Unit Testing Your JavaScript Code](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg)

我们都知道我们应该写单元测试。但是，很难知道从哪里开始，也很难知道与实际的实现相比，应该在测试上投入多少时间。那么，该从哪里开始呢？而且，仅仅是测试代码，还是单元测试还有其他好处？

在这篇文章中，我将解释不同类型的测试，以及单元测试给开发团队带来哪些好处。我将展示Jest - 一个JavaScript测试框架。

## 不同类型的测试

在我们深入了解单元测试的具体内容之前，我想对不同类型的测试做一个快速浏览。围绕着它们经常有一些混淆，我并不感到惊讶。有时它们之间的界限很小。

### 单元测试

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

### 集成测试

在某些时候，你的代码与数据库、文件系统或其他第三方进行通信。它甚至可能是你应用程序中的另一个模块。

这一块的实现应该由集成测试来测试。他们通常有一个更复杂的设置，包括准备测试环境，初始化依赖关系，等等。

### 功能测试

单元测试和集成测试让你相信你的应用程序可以正常工作。功能测试从用户的角度来观察应用程序，并测试系统是否按预期工作。

![presentation](https://www.freecodecamp.org/news/content/images/2020/03/presentation.jpg)

在上图中，你看到单元测试构成了你的应用程序测试套件的最基础的东西。通常情况下，它们很小，有很多，而且是自动执行的。

所以现在让我们更详细地了解一下单元测试。

## 我为什么要写单元测试？

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

## 如何编写你的第一个JavaScript单元测试

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

## 测试高级功能和 Mocking（模拟） 服务

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

### Mocking（模拟） 一个服务

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

首先，我们需要指定我们 mock(模拟) 的是什么 - `./UserStore` 模块。接下来，我们需要返回包含该模块所有导出对象的模拟。

在这个例子中，只有名为`UserStore` 的 `User` 对象和 `getUser` 函数。但在真正的实现中，模拟对象可能更长。在单元测试的范围内，任何你并不真正关心的函数都可以用 `jest.fn()` 轻松地 Mock(模拟)。

函数 `getUserDisplayName`的单元测试与我们之前创建的类似:

```js
test("Returns display name", () => {
    expect(getUserDisplayName(1)).toBe("Polesny, Ondrej");
})
```

当我保存文件时，Jest告诉我有两个通过的测试。如果你正在手动执行测试，现在就这样做，确保你看到同样的结果。

### Code Coverage Report

现在我们知道了如何测试JavaScript代码，用测试覆盖尽可能多的代码是很好的。而这是很难做到的。说到底，我们只是人。我们想完成我们的任务，而单元测试通常会产生一些无意义的工作量，我们往往会本能的忽略。代码覆盖率统计工具是一个帮助我们对抗这种情况。

代码覆盖率会告诉你，你的代码有多大一部分被单元测试所覆盖。以我的第一个单元测试为例，检查`getAboutUsLink` 函数:

```js
test("Returns about-us for english language", () => {
   expect(getAboutUsLink("en-US")).toBe("/about-us");
});
```

它检查了英文链接，但西班牙文版本仍未被测试。代码覆盖率为50%。另一个单元测试是彻底检查 `getDisplayName`函数，其代码覆盖率为100%。总之，总的代码覆盖率是67%。我们有3个用例需要测试，但我们的测试只覆盖了其中的两个。

要查看代码覆盖率报告，请在终端输入以下命令:

```js
jest --coverage
```

或者，如果你使用的是带有Jest扩展的Visual Studio Code，你可以运行命令（CTRL+SHIFT+P 组合快捷键调出，然后输入）_Jest。 触发执行 Coverage Overlay_。它将在实现中直接显示哪些代码行没有被测试覆盖。

![code-coverage-inline](https://www.freecodecamp.org/news/content/images/2020/03/code-coverage-inline.jpg)

通过运行覆盖率检查，Jest还将创建一个HTML报告。在你的项目文件夹中的`coverage/lcov-report/index.html`下找到它。

![code-coverage](https://www.freecodecamp.org/news/content/images/2020/03/code-coverage.jpg)

现在，我不用再提了，你应该争取100%的代码覆盖率，对吗？ :-)

## 总结

在这篇文章中，我向你展示了如何在JavaScript中开始单元测试。虽然在报告中让你的代码覆盖率达到100%是件好事，但在现实中，并不总是能够（有意义地）达到这个目标。我们的目标是让单元测试帮助你维护你的代码，并确保它总是按照预期工作。它们使你能够:

- 明确定义实现需求。
- 更好地设计你的代码和分离关注点。
- 发现你在较新的提交中尽早发现引入的问题。
- 并让你相信你的代码是正常工作的。

最好的开始是Jest文档中的 [Getting started（入门）](https://jestjs.io/docs/en/getting-started) 页面，这样你就可以自己尝试这些做法了。

你对测试代码有自己的经验吗？我很想听听，请在 [Twitter](https://twitter.com/ondrabus) 上告诉我，或者加入我的 [Twitch streams 直播频道](https://twitch.tv/ondrabus)。
