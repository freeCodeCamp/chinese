> -  原文地址：[Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/)
> -  原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> -  译者：Papaya HUANG
> -  校对者：

![Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app-codesweetly-battlecreek-coffee-roasters-i22gbC3gFm4-unsplash.jpg)

了解测试是成为高产的软件开发者的重要一环，测试是创建可靠程序的基石。

这篇教程会帮助你在你的JavaScript和React应用中安装测试驱动的开发。 

## 目录

1.  [什么是测试驱动开发](#what-is-test-driven-development)
2.  [基于JavaScript的测试驱动开发工作流](#javascript-example-of-a-test-driven-development-workflow)
3.  [如何使用Jest来测试执行](#how-to-use-jest-as-a-test-implementation-tool)
4.  [在Jest中使用es6模块须知](#important-stuff-to-know-about-using-es6-modules-with-jest)
5.  [测试驱动的开发有什么好处？](#what-are-the-advantages-of-test-driven-development)
6.  [测试驱动开发中的单元测试是什么？](#what-is-a-unit-test-in-test-driven-development)?
7.  [测试驱动开发中的集成测试是什么？](#what-is-an-integration-test-in-test-driven-development)?
8.  [What is an End-to-End Test in Test-Driven Development](#what-is-an-end-to-end-test-in-test-driven-development)?
9.  [What are Test Doubles in Test-Driven Development](#what-are-test-doubles-in-test-driven-development)?
10.  [Quick Overview of Test-Driven Development So Far](#quick-overview-of-test-driven-development-so-far)
11.  [How to Test React Components](#how-to-test-react-components)
12.  [Test Runner vs. React Component Testing Tool: What's the Difference?](#test-runner-vs-react-component-testing-tool-what-s-the-difference)
13.  [Project: How React Testing Works](#project-how-react-testing-works)
14.  [Overview](#overview)

So, without any further ado, let's get started by discussing what test-driven development means.

<h2 id="what-is-test-driven-development">什么是测试驱动开发</h2>

**测试驱动开发(TDD)** 是一种编程实践，你可以先写出你预期的程序会产生的结果，再写程序。

也就是说，TDD需要你预先设定好程序的输出，来通过测试。

所以，一种高效实践TDD的方法是你首先编写测试你预期结果的程序。

然后，你创建可以通过测试的程序。

举个例子，假设你想要创建一个加法计算器，TDD方法如图：

![Test-driven development workflow diagram](https://www.freecodecamp.org/news/content/images/2022/07/test-driven-development-tdd-workflow-diagram-codesweetly.png)

测试驱动开发工作流示意图

1.  编写一个测试。指定你喜欢计算器产生的结果。
2.  开发计算器，然后通过预先写好的测试。
3.  执行测试，检查计算器是否通过。
4.  重构测试代码 (如有必要)。
5.  重构程序(如有必要)。
6.  重复循环，直至计算器符合你的预期。

让我们来看一个用JavaScript实现的例子

<h2 id="javascript-example-of-a-test-driven-development-workflow">基于JavaScript的测试驱动开发工作流</h2>

以下步骤拆解了使用一个简单的JavaScript程序实现测试驱动编程的工作流

### 1\. 编写测试

编写一个测试计算器产生指定输出的测试

```js
function additionCalculatorTester() {
  if (additionCalculator(4, 6) === 10) {
    console.log("✔ Test Passed");
  } else {
    console.error("❌ Test Failed");
  }
}
```

### 2\. 开发程序

编写一个计算器程序以通过编写好的测试

```js
function additionCalculator(a, b) {
  return a + b;
}
```

### 3\. 执行测试

只是测试，查看程序是否通过测试

```js
additionCalculatorTester();
```

[**在StackBlitz尝试**](https://stackblitz.com/edit/js-ciui1u?devToolsHeight=33&file=index.js)

### 4\. 重构测试

在确认程序通过测试之后，可以检查是否需要重构测试代码。

例如，你可以使用[三元运算符](https://codesweetly.com/javascript-statement/#what-is-a-conditional-ternary-operator-in-javascript)来重构`additionCalculatorTester()` ：

```js
function additionCalculatorTester() {
  additionCalculator(4, 6) === 10 
    ? console.log("✔ Test Passed") 
    : console.error("❌ Test Failed");
}
```

### 5\. 重构程序

让我们使用[箭头函数](https://codesweetly.com/javascript-function-object#arrow-function-expression-in-javascript)来重构程序：

```js
const additionCalculator = (a, b) => a + b;
```

### 6\. 执行测试

重新执行测试，确保程序仍然能够通过测试

```js
additionCalculatorTester();
```

[**在StackBlitz尝试**](https://stackblitz.com/edit/js-xp732h?devToolsHeight=33&file=index.js)

注意在以上例子中，我们没有使用任何第三方库。

其实你可以使用强大的第三方库来执行测试，如：[Jasmine](https://jasmine.github.io/)、 [Mocha](https://mochajs.org/)、 [Tape](https://github.com/substack/tape)和[Jest](https://jestjs.io/)，这些库可以使你的测试运行得更加快速、简洁并充满乐趣。

让我们一起看看如何使用Jest。

<h2 id="#how-to-use-jest-as-a-test-implementation-tool">如何使用Jest来测试执行</h2>

在使用Jest工具之前，你需要执行以下步骤：

### 第一步：使用正确的Node和NPM版本

确保你的系统上装有Node 10.16 (或者更高版本) 和 NPM 5.6 (或者更高版本)。

你可以在[Node.js](https://nodejs.org/en/)官网下载最新的LTS。

如果你更倾向于使用Yarn，确保你使用[Yarn 0.25 (或者更高版本)](https://yarnpkg.com/)。

### 第二步： 创建一个项目目录

为你的项目创建一个目录

```bash
mkdir addition-calculator-jest-project
```

### 第三步：导航到你的项目文件夹

使用命令行导航到你的项目文件夹

```bash
cd path/to/addition-calculator-jest-project
```

### 第四步：创建一个`package.json`文件

在项目中初始化 `package.json` 文件

```bash
npm init -y
```

如果你的[包管理器](https://codesweetly.com/package-manager-explained)是Yarn，执行：

```bash
yarn init -y
```

### 第五步：安装Jest

把Jest作为开发依赖包安装

```bash
npm install jest --save-dev
```

如果你使用的是Yarn，执行：

```bash
yarn add jest --dev
```

### 第六步：设置Jest为项目测试运行工具

打开`package.json`文件，并把Jest添加到`test`区域。

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 第七步：创建项目文件

创建一个文件，在这个文件上编写开发代码

```bash
touch additionCalculator.js
```

### 第八步： 创建测试文件

创建一个编写测试案例的文件

```bash
touch additionCalculator.test.js
```

**注意：** 测试文件的结尾必须是 `.test.js`，这样Jest才能够分辨出来这个文件是测试文件。

### 第九步：编写测试案例

打开测试文件，编写你喜欢程序产出的指定结果。

**例子:**

```js
// additionCalculator.test.js

const additionCalculator = require("./additionCalculator");

test("addition of 4 and 6 to equal 10", () => {
  expect(additionCalculator(4, 6)).toBe(10);
});
```

在上述代码块中：

1.  我们将`additionCalculator.js`项目文件导入到 `additionCalculator.test.js`测试文件。
2.  我们编写了一个测试案例，希望当用户提供的[参数](https://codesweetly.com/javascript-arguments)是`4`和`6`的时候，`additionCalculator()` 程序的输出是 `10`。

**注意:**

-   [`test()`](https://jestjs.io/docs/api#testname-fn-timeout) 是Jest的全局方法，接受三个参数：
    1.  测试名 (`"addition of 4 and 6 to equal 10"`)
    2.  包含你期望测试的函数
    3.  可选的timeout参数
-   [`expect()`](https://jestjs.io/docs/expect#expectvalue) 是一个让你测试代码输出的Jest方法
-   [`toBe()`](https://jestjs.io/docs/expect#tobevalue) 是一个[Jest matcher](https://jestjs.io/docs/using-matchers) 函数，使得你可以对比 `expect()`参数和初始值。

假设你现在执行这个测试，测试将不会通过，因为你还没有编写程序，让我们现在开始吧！

### 第十步：开发程序

打开项目文件，开发可以通过测试的程序。

**这里是例子:**

```js
// additionCalculator.js

function additionCalculator(a, b) {
  return a + b;
}

module.exports = additionCalculator;
```

上面的代码块创建了一个`additionCalculator()`程序，并且使用`module.exports`方法将程序导出。

### 第十一步：执行测试

执行测试，查看程序是否通过：

```bash
npm run test
```

也可以使用Yarn：

```bash
yarn test
```

假设你的项目有多个测试文件，你想执行其中一个，你可以通过以下代码实现：

```bash
npm run test additionCalculator.test.js
```

如果使用Yarn的话是这样：

```bash
yarn test additionCalculator.test.js
```

一旦你启动了测试，Jest会在你的编辑器控制台打印出通过或者不通过的消息，消息如下：

```bash
$ jest
 PASS  ./additionCalculator.test.js
  √ addition of 4 and 6 to equal 10 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.002 s
Ran all test suites.
Done in 7.80s.
```

如果你喜欢Jest自动执行测试，可以在`package.json`的`test`区域添加 `--watchAll` 选项。

**例子:**

```json
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
```

添加`--watchAll`后，重新执行`npm run test` (或 `yarn test`)命令，是的Jest在每次保存后重新执行测试。

**注意:** 你可以使用键盘上的**Q**键退出监视（watch）模式。

### 第十二步：重构测试代码

我们已经确认了程序可以如预期执行，是时候来检查是否需要重构测试代代码了。

例如，假设你意识到`additionalCalculator`可以让用户输入任意数量的数字。 你可以这样重构你的代码：

```js
// additionCalculator.test.js

const additionCalculator = require("./additionCalculator");

describe("additionCalculator's test cases", () => {
  test("addition of 4 and 6 to equal 10", () => {
    expect(additionCalculator(4, 6)).toBe(10);
  });

  test("addition of 100, 50, 20, 45 and 30 to equal 245", () => {
    expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
  });

  test("addition of 7 to equal 7", () => {
    expect(additionCalculator(7)).toBe(7);
  });

  test("addition of no argument provided to equal 0", () => {
    expect(additionCalculator()).toBe(0);
  });
});
```

注意上面的代码块中的[describe()](https://jestjs.io/docs/api#describename-fn)方法，是可选的。这个方法可以帮助将同类型的测试分门别类在一起。

`describe()`接受两个参数：

1.  你喜欢测试案例组的名字，如： `"additionCalculator's test cases"`.
2.  包含测试的函数

### 第十三步：重构程序

在重构了测试代码之后，让我们重构一下 `additionalCalculator`程序。

```js
// additionCalculator.js

function additionCalculator(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

module.exports = additionCalculator;
```

在代码块中我们做了这些事情：

1.  `...numbers`代码使用了JavaScript中的[展开操作符](https://codesweetly.com/javascript-rest-operator) (`...`) ，将函数的参数转化为一个数组。
2.  `numbers.reduce((sum, item) => sum + item, 0)`代码使用JavaScript的[reduce()](https://codesweetly.com/javascript-reduce-method)方法，求和了`numbers`数组中的所有元素。

### 第十四步：重新执行测试

重构程序之后，可以重新执行测试，查看是否通过。

### 结束

恭喜你！你成功的使用Jest来借助测试驱动开发的方法创建了一个计算器程序。 🎉

<h2 id="important-stuff-to-know-about-using-es6-modules-with-jest">在Jest中使用es6模块须知</h2>

目前，Jest不能识别ES6模块。

假设，你习惯使用ES6的import/export声明，你必须采取以下步骤：

### 1\. 安装Babel作为依赖包

```bash
npm install @babel/preset-env --save-dev
```

或者使用Yarn：

```bash
yarn add @babel/preset-env --dev
```

### 2\. 在项目的root创建 `.babelrc`文件：

```bash
touch .babelrc
```

### 3\. 打开 `.babelrc` 文件，并且复制以下代码：

```json
{ "presets": ["@babel/preset-env"] }
```

这样设置之后，上一章节中的第九步使用的 `require()`声明，可以从

```js
const additionCalculator = require("./additionCalculator");
```

...替换成：

```js
import additionCalculator from "./additionCalculator";
```

同样的，你也可以替换掉第十步的 `export`声明，从

```js
module.exports = additionCalculator;
```

到：

```js
export default additionCalculator;
```

**注意：** Jest在[using Babel](https://jestjs.io/docs/getting-started#using-babel)文档中，指定了类似说明。

### 4\. 重新执行测试

你可以重新执行测试，确保程序仍然通过测试。

现在你已经知道测试驱动的开发是什么，让我们来看看这一方法有什么好处。

<h2 id="what-are-the-advantages-of-test-driven-development">测试驱动的开发有什么好处？</h2>

在你的开发工作流中引入测试驱动开发（TDD）有以下两大好处：

### 1\. 理解程序的目的

测试驱动的开发可以帮助你理解程序的目的。

也就是说，因为你在编写实际的程序前已经编写了测试，所以TDD可以促使你去思考你想要程序做什么事。

在你通过一到两个测试记录下来你的程序的目的之后，你可以自信地去创建程序。

因此，TDD可以有效地帮助你记录下来你希望程序产生何种结果。

### 2\. 信心助推器

TDD是了解你的程序是否如预期工作的的一个基准。它给予你信心，相信自己的程序正确执行。

所以无论之后你的代码库会有什么变化，TDD都可以有效地确保你的程序能够执行。

让我们现在来讨论一下TDD的术语： "单元测试"、 "集成测试"、 "E2E"、和 "test doubles"。

<h2 id="what-is-a-unit-test-in-test-driven-development">测试驱动开发中的单元测试是什么</h2>

**单元测试**是用于评估程序独立功能的测试。换句话说，单元测试检查一个完全独立的程序单元是不是按照预期工作。

我们为`additionalCalculator`程序编写的第十步骤里的测试就是一个完美的例子。

第十步里的`additionalCalculator()`测试是一个独立的函数，不依赖任何外部代码。

注意单元测试首要目的并不是检查是否有bug，而是检查程序的一个独立片段（被称作单元）是否在不同的情况下按照预期工作。

<h2 id="what-is-an-integration-test-in-test-driven-development">测试驱动开发中的集成测试是什么？</h2>

An **integration test** assesses the functionality of a dependent piece of program. In other words, an integration test checks if a program—which depends on other code—is working as intended.

The test we wrote for step 13's `additionalCalculator` program is an excellent example of an integration test.

Step 13's `additionalCalculator()`'s test is an integration test because the program is a dependent function that depends on JavaScript's [reduce()](https://codesweetly.com/javascript-reduce-method) method.

In other words, we used the prewritten test case to assess the integration of `additionalCalculator()` and `reduce()`.

Therefore, suppose JavaScript makes `reduce()` an obsolete method. In such a case, `additionalCalculator` will fail its test because of the `reduce()` method.

## What is an End-to-End Test in Test-Driven Development?

An **End-to-End (E2E) test** assesses the functionality of a user interface. In other words, E2E checks if your user interface is working as intended.

Watch [Max's YouTube video](https://youtu.be/r9HdJ8P6GQI?t=1755) for a good illustration of an End-to-End test.

## What are Test Doubles in Test-Driven Development?

**Test doubles** are the imitation objects used to mimic real dependencies like databases, libraries, networks, and APIs.

A test double allows you to bypass the natural objects on which your program depends. They let you test your code independently of any dependencies.

For instance, suppose you need to verify if an error detected in your app originates from an external API or your code.

But suppose the API's service is available only in production—not in the development environment. In that case, you've got two options:

1.  Wait until your app goes live—which could take months.
2.  Clone the API so you can continue your test irrespective of the dependency's availability.

Test doubles provide a helpful way to clone your program's dependencies so that your testing activities won't encounter any disruptions.

Typical examples of test doubles are dummy objects, mocks, fakes, and stubs. Let's discuss them below.

### What is a dummy in test-driven development?

A **dummy** is a test double used to mimic the value of a specific dependency.

For instance, suppose your app depends on a third-party method that requires you to provide some arguments. In such a case, a dummy allows you to pass in pretend values to the parameters of that method.

### What is a mock in test-driven development?

**Mock** is a test double used to mimic an external dependency without considering the responses the dependency may return.

For instance, suppose your app depends on a third-party API (for example, Facebook)—which you cannot access in the development mode. Mock allows you to bypass the API so that you can focus on testing your code regardless of the Facebook API's availability.

### What is a stub in test-driven development?

A **stub** is a test double used to mimic an external dependency while returning hand-coded values. You can use the returned value to assess your program's behavior with various test case responses from the dependency.

For instance, suppose your app depends on a third-party API (for example, Facebook)—which you cannot access in the development mode. Stub allows you to bypass the API while mimicking the exact values Facebook will return.

Therefore, stub helps you assess your program's behavior with various response scenarios.

### What is a fake in test-driven development?

**Fake** is a test double used to create a working test implementation of an external dependency with dynamic values.

For instance, you can use fake to create a local database that allows you to test how a real database will work with your program.

## Quick Overview of Test-Driven Development So Far

We've learned that test-driven development helps you jot down your program's behavior before creating the program.

We also saw a simple JavaScript test and used Jest as a test implementation tool.

Let's now see how to test React components.

## How to Test React Components

The two main tools you need to test your React components are:

1.  A test runner tool
2.  A React component testing tool

But what exactly is the difference between a test runner and a React component testing tool? Let's find out.

## Test Runner vs. React Component Testing Tool: What's the Difference?

Below are the differences between a test runner and a React component testing tool.

### What is a test runner?

A **test runner** is a tool developers use to run a test script and print the test's results on the command line (CLI).

For instance, suppose you wish to run the test cases in your project's `App.test.js` test script. In such a case, you will use a test runner.

The test runner will execute `App.test.js` and print the test's results on the command line.

Typical examples of test runners are [Jasmine](https://jasmine.github.io/), [Mocha](https://mochajs.org/), [Tape](https://github.com/substack/tape), and [Jest](https://jestjs.io/).

### What is a React component testing tool?

A **React component testing tool** provides helpful APIs for defining a component's test cases.

For instance, suppose you need to test your project's `<App />` component. In such a case, you will use a React component testing tool to define the component's test cases.

In other words, a React component testing tool provides the APIs for writing your component's test cases.

Typical examples are [Enzyme](https://enzymejs.github.io/enzyme/) and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

So, now that we know what a test runner and React component testing tool are, let's use a mini-project to understand how React testing works.

## Project: How React Testing Works

In the following steps, we will use [Jest](https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)) and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (by Kent C. Dodds) to learn how React testing works.

**Note:** The React official docs [recommend](https://reactjs.org/docs/testing.html#tools) the Jest and React Testing Library combination for testing React components.

### Step 1: Get the right Node and NPM version

Make sure that you have [Node 10.16](https://codesweetly.com/package-manager-explained#how-to-check-the-installed-node-version) (或者更高版本) and NPM 5.6 (或者更高版本) installed on your system.

If you prefer to use Yarn, ensure you have Yarn 0.25 (或者更高版本).

### Step 2: Create a new React app

Use NPM's [create-react-app](https://create-react-app.dev/) package to create a new React app called `react-testing-project`.

```bash
npx create-react-app react-testing-project
```

Alternatively, you can use Yarn to configure your project like so:

```bash
yarn create react-app react-testing-project
```

### Step 3: Go inside the project directory

After the installation process, navigate into the project directory like so:

```bash
cd react-testing-project
```

### Step 4: Set up your test environment

Install the following test packages:

-   jest
-   @testing-library/react
-   @testing-library/jest-dom
-   @testing-library/user-event

**Note:** If you've initialized your React project with `create-react-app` (step 2), you do not need to install any of the above packages. They come preinstalled and preconfigured in your `package.json` file.

Now, let's discuss the purpose of each of the above test packages.

#### What is Jest?

[jest](https://www.npmjs.com/package/jest) is the test runner tool we will use to run this project's test scripts and print the test results on the command line.

#### What is @testing-library/react?

[@testing-library/react](https://www.npmjs.com/package/@testing-library/react) is the React Testing Library which gives you the APIs you need to write test cases for your React components.

#### What is @testing-library/jest-dom?

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) provides some set of custom Jest matchers for testing the DOM's state.

**Note:** Jest already comes with lots of matchers, so using `jest-dom` is optional. `jest-dom` simply extends Jest by providing matchers that make your test more declarative, clear to read, and easy to maintain.

#### What is @testing-library/user-event?

[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) provides the `userEvent` API for simulating users' interaction with your app on a web page.

**Note:** `@testing-library/user-event` is a better alternative to the [fireEvent](https://testing-library.com/docs/dom-testing-library/api-events/#fireevent) API.

### Step 5: Clean up the `src` folder

Delete all files inside the project directory's `src` folder.

### Step 6: Create your code files

Create the following files inside your project's `src` folder.

-   `index.js`
-   `App.js`
-   `App.test.js`

### Step 7: Render the `App` component

Open your `index.js` file and render the `App` component to the DOM like so:

```js
// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Render the App component into the root DOM
createRoot(document.getElementById("root")).render(<App />);
```

### Step 8: Write your test case

Suppose you want your `App.js` file to render a `<h1>CodeSweetly Test</h1>` element to the web page. In that case, open your _test script_ and write some test code specifying the result you expect your `<App />` component to produce.

**Here's an example:**

```js
// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("codesweetly test heading", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
});
```

Here are the main things we did in the test snippet above:

1.  We imported the packages needed to write our test case.
2.  We wrote a test case specifying that we expect our `<App />` component to render a heading element with a `"codesweetly test"` text.

-   [`test()`](https://jestjs.io/docs/api#testname-fn-timeout) is one of Jest's global methods. We use it to run a test case. The method accepts three arguments:
    -   The name of the test (`"codesweetly test heading"`)
    -   A function containing the expectations you wish to test
    -   An optional timeout argument
-   [`render()`](https://testing-library.com/docs/react-testing-library/api/#render) is one of the React Testing Library APIs. We use it to render the component we wish to test.
-   [`expect()`](https://jestjs.io/docs/expect#expectvalue) is a Jest method that lets you test the output of your code.
-   [`screen`](https://testing-library.com/docs/queries/about/#screen) is a React Testing Library's object containing numerous methods for finding elements on a page.
-   [`getByRole()`](https://testing-library.com/docs/queries/about/#priority) is one of the React Testing Library's query methods for finding elements on a page.
-   [`toHaveTextContent()`](https://github.com/testing-library/jest-dom#tohavetextcontent) is one of `jest-dom`'s custom matchers that you can use to confirm the presence of a text content in a specific node.
-   `/codesweetly test/i` is a [regular expression](https://codesweetly.com/javascript-regular-expression-object) syntax that we used to specify a case-insensitive search for `codesweetly test`.

Keep in mind that there are three alternative ways to write the above expect statement:

```js
// 1. Using jest-dom's toHaveTextContent() method:
expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);

// 2. Using the heading's textContent property and Jest's toMatch() method:
expect(screen.getByRole("heading").textContent).toMatch(/codesweetly test/i);

// 3. Using React Testing Library's name option and jest-dom's toBeInTheDocument() method
expect(screen.getByRole("heading", { name: /codesweetly test/i })).toBeInTheDocument();
```

**Tip:**

Add a `level` option to the `getByRole()` method to specify your heading's level.

**Here's an example:**

```js
test("codesweetly test heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/codesweetly test/i);
});
```

The `level: 1` option specifies an `<h1>` heading element.

Suppose you run the test code now. The test will fail because you've not developed the component for which you created the test. So, let's do that now.

### Step 9: Develop your React component

Open your `App.js` file and develop the component to pass the prewritten test.

**Here's an example:**

```js
// App.js

import React from "react";

const App = () => <h1>CodeSweetly Test</h1>;

export default App;
```

The `App` component, in the snippet above, renders a `<h1>` element containing the `"CodeSweetly Test"` text.

### Step 10: Run the test

Run the prewritten test to check if your program passed or failed.

```bash
npm test App.test.js
```

Alternatively, you can use Yarn like so:

```bash
yarn test App.test.js
```

Once you've initiated the test, Jest will print a pass or fail message on your editor's console. The message will look similar to this:

```bash
$ jest
 PASS  src/App.test.js
  √ codesweetly test heading (59 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.146 s
Ran all test suites related to changed files.
```

**Note:** The `create-react-app` configured Jest in [watch mode](https://codesweetly.com/javascript-module-bundler/#what-is-webpack---progress---watch) by default. Therefore, after running `npm test` (or `yarn test`), your currently opened terminal will continue to process the `test` command's activities. So, you won't be able to input any command on that terminal until you stop `test`'s execution. But you can open a new terminal window simultaneously with the one processing `test`.

In other words, use one terminal to run `test` and another to input commands.

### Step 11: Run the application

Take a look at your app in the browser by running:

```bash
npm start
```

Or, if your [package manager](https://codesweetly.com/package-manager-explained) is Yarn, run:

```bash
yarn start
```

Once you run the command above, your app will automatically open on your default browser.

### Step 12: Refactor the test code

Suppose you wish to change the heading's text when users click a button. In that case, you can simulate users' interaction with the button to confirm that it works as intended.

**Here's an example:**

```js
// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("codesweetly test heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
  });

  test("a codesweetly project heading", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);
  });
});
```

Here are the main things we did in the test snippet above:

1.  We imported the packages needed to write our test case.
2.  We wrote a test case specifying that we expect the `<App />` component to render a heading element with a `"codesweetly test"` text.
3.  We wrote another test case simulating users' interaction with the app's button element. In other words, we specified that whenever a user clicks the button, we expect `<App />`'s heading to update to `"a codesweetly project"` text.

**Note:**

-   [`describe()`](https://jestjs.io/docs/api#describename-fn) is one of Jest's global methods. It is optional code that helps organize related test cases into groups. `describe()` accepts two arguments:
    -   A name you wish to call the test case group—for instance, `"App component"`.
    -   A function containing your test cases.
-   [`userEvent`](https://www.npmjs.com/package/@testing-library/user-event) is the React Testing Library's package containing several methods for simulating users' interaction with an app. For instance, in the snippet above, we used `userEvent`'s `click()` method to simulate a click event on the button element.
-   We rendered `<App />` for each test case because React Testing Library unmounts the rendered components after each test. However, suppose you have numerous test cases for a component. In that case, use Jest's [`beforeEach()`](https://jestjs.io/docs/api#beforeeachfn-timeout) method to run `render(<App />)` before each test in your file (or `describe` block).

### Step 13: Refactor your React component

So, now that you've refactored your test code, let's do the same for the `App` component.

```js
// App.js

import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("CodeSweetly Test");

  const handleClick = () => {
    setHeading("A CodeSweetly Project");
  };

  return (
    <>
      <h1>{heading}</h1>
      <button type="button" onClick={handleClick}>
        Update Heading
      </button>
    </>
  );
};

export default App;
```

Here are the main things we did in the snippet above:

1.  `App`'s `heading` state got initialized with a `"CodeSweetly Test"` string.
2.  We programmed a `handleClick` function to update the `heading` state.
3.  We rendered a `<h1>` and `<button>` elements to the DOM.

Note the following:

-   `<h1>`'s content is the `heading` state's current value.
-   Whenever a user clicks the button element, the `onClick()` event listener will trigger the `handleClick()` function. And `handleClick` will update `App`'s `heading` state to `"A CodeSweetly Project"`. Therefore, `<h1>`'s content will change to `"A CodeSweetly Project"`.

### Step 14: Rerun the test

Once you've refactored your component, rerun the test (or check the actively running test) to confirm that your app still works as expected.

Afterward, check the browser to see your recent updates.

### And that's it!

Congratulations! You've successfully used Jest and the React Testing Library to test a React component. 🎉

## Overview

This article discussed how test-driven development works in JavaScript and ReactJS applications.

We also learned how to use Jest and the React Testing Library to make testing simpler and faster.

Thanks for reading!

### **And here's a useful ReactJS resource:**

I wrote a book about React!

-   It's beginner friendly ✔
-   It has live code snippets ✔
-   It contains scalable projects ✔
-   It has plenty of easy-to-grasp examples ✔

The [React Explained Clearly](https://www.amazon.com/dp/B09KYGDQYW) book is all you need to understand ReactJS.

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://www.amazon.com/dp/B09KYGDQYW)
