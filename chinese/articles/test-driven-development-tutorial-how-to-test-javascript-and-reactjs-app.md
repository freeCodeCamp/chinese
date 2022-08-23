> -  原文地址：[Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/)
> -  原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> -  译者：Papaya HUANG
> -  校对者：

![Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app-codesweetly-battlecreek-coffee-roasters-i22gbC3gFm4-unsplash.jpg)

想要成为高产的软件开发工程师，了解测试驱动的开发必不可少。测试是创建可靠程序的基石。

这篇教程会帮助你在JavaScript和React应用中实现测试驱动的开发。 

## 目录

1.  [什么是测试驱动开发](#what-is-test-driven-development)
2.  [测试驱动开发工作流的JavaScript示例](#javascript-example-of-a-test-driven-development-workflow)
3.  [如何使用Jest来测试执行](#how-to-use-jest-as-a-test-implementation-tool)
4.  [在Jest中使用es6模块须知](#important-stuff-to-know-about-using-es6-modules-with-jest)
5.  [测试驱动的开发有什么好处？](#what-are-the-advantages-of-test-driven-development)
6.  [测试驱动开发中的单元测试是什么？](#what-is-a-unit-test-in-test-driven-development)?
7.  [测试驱动开发中的集成测试是什么？](#what-is-an-integration-test-in-test-driven-development)?
8.  [测试驱动开发中的端到端测试是什么？](#what-is-an-end-to-end-test-in-test-driven-development)?
9.  [测试驱动开发中的测试替身是什么？](#what-are-test-doubles-in-test-driven-development)?
10.  [阶段性总结测试驱动开发](#quick-overview-of-test-driven-development-so-far)
11.  [如何测试React组件](#how-to-test-react-components)
12.  [测试运行工具vsReact组件测试工具：区别是什么？](#test-runner-vs-react-component-testing-tool-what-s-the-difference)
13.  [项目：React测试如何运行](#project-how-react-testing-works)
14.  [总结](#overview)

话不多说，让我们开始从了解什么是测试驱动开发开始吧！

<h2 id="what-is-test-driven-development">什么是测试驱动开发</h2>

**测试驱动开发(TDD)** 是一种编程实践，你先写出你预期的程序会产生的结果，再编写程序。

也就是说，TDD需要你预先构思好程序的输出，来通过你展望想实现的功能的测试。

所以，一种高效实践TDD的方法是你首先编写测试你预期结果的程序。

然后，你创建可以通过测试的程序。

举个例子，假设你想要创建一个加法计算器，TDD方法如图：

![Test-driven development workflow diagram](https://www.freecodecamp.org/news/content/images/2022/07/test-driven-development-tdd-workflow-diagram-codesweetly.png)

测试驱动开发工作流示意图

1.  编写一个测试。指定你希望计算器产生的结果。
2.  开发计算器，然后通过预先写好的测试。
3.  执行测试，检查计算器是否通过。
4.  重构测试代码 (如有必要)。
5.  重构程序(如有必要)。
6.  重复循环，直至计算器符合你的预期。

让我们来看一个用JavaScript实现的例子

<h2 id="javascript-example-of-a-test-driven-development-workflow">测试驱动开发工作流的JavaScript示例</h2>

让我们用一个简单的JavaScript程序，来分步骤实现测试驱动编程的工作流：

### 1\. 编写测试

编写一个测试，指定计算器的输出：

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

执行测试，查看程序是否通过测试

```js
additionCalculatorTester();
```

[**在StackBlitz查看示例**](https://stackblitz.com/edit/js-ciui1u?devToolsHeight=33&file=index.js)

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

[**在StackBlitz查看示例**](https://stackblitz.com/edit/js-xp732h?devToolsHeight=33&file=index.js)

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

创建一个文件，在这个文件里编写开发代码

```bash
touch additionCalculator.js
```

### 第八步：创建测试文件

创建一个编写测试案例的文件

```bash
touch additionCalculator.test.js
```

**注意：** 测试文件的结尾必须是 `.test.js`，这样Jest才能够分辨出来这个文件是测试文件。

### 第九步：编写测试案例

打开测试文件，编写你希望程序产出的指定结果。

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
2.  我们编写了一个测试案例，希望当用户提供的[参数](https://codesweetly.com/javascript-arguments)是`4`和`6`的时候，`additionCalculator()`程序的输出是 `10`。

**注意:**

-   [`test()`](https://jestjs.io/docs/api#testname-fn-timeout)是Jest的全局方法，接受三个参数：
    1.  测试名 (`"addition of 4 and 6 to equal 10"`)
    2.  一个包含你期望测试结果的函数
    3.  一个可选的timeout参数
-   [`expect()`](https://jestjs.io/docs/expect#expectvalue)是一个测试代码输出的Jest方法。
-   [`toBe()`](https://jestjs.io/docs/expect#tobevalue) 是一个[Jest匹配器](https://jestjs.io/docs/using-matchers)函数，可以对比 `expect()`参数和原始值。

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

如果你希望Jest自动执行测试，可以在`package.json`的`test`区域添加 `--watchAll` 选项。

**例子:**

```json
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
```

添加`--watchAll`后，重新执行`npm run test` (或 `yarn test`)命令，Jest会在每次保存后重新执行测试。

**注意:** 你可以使用键盘上的**Q**键退出监视（watch）模式。

### 第十二步：重构测试代码

我们已经确认了程序可以如预期执行，是时候来检查是否需要重构测试代码了。

例如，假设你想要`additionalCalculator`允许用户输入任意数量的数字。你可以这样重构你的代码：

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

1.  你希望的测试案例组的名字，如： `"additionCalculator's test cases"`.
2.  包含测试案例的函数

### 第十三步：重构程序

在重构了测试代码之后，让我们重构一下`additionalCalculator`程序。

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

恭喜你！你成功的使用Jest，并借助测试驱动开发的方法创建了一个计算器程序。 🎉

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

这样设置之后，上一章节第九步的 `require()`声明，可以从

```js
const additionCalculator = require("./additionCalculator");
```

...变成：

```js
import additionCalculator from "./additionCalculator";
```

同样的，你也可以替换掉第十步的`export`声明，从

```js
module.exports = additionCalculator;
```

到：

```js
export default additionCalculator;
```

**注意：** Jest在[使用Babel](https://jestjs.io/docs/getting-started#using-babel)文档中，指定了类似说明。

### 4\. 重新执行测试

你可以重新执行测试，确保程序仍然通过测试。

现在你已经知道测试驱动的开发是什么，让我们来看看这一方法有什么好处。

<h2 id="what-are-the-advantages-of-test-driven-development">测试驱动的开发有什么好处？</h2>

在你的开发工作流中引入测试驱动开发（TDD）有以下两大好处：

### 1\. 理解程序的目的

测试驱动的开发可以帮助你理解程序的目的。

也就是说，因为你在编写实际的程序前已经编写了测试，所以TDD可以促使你去思考你想要程序做什么事。

在你通过一到两个测试记录下来你的程序的目的之后，你可以自信地去创建程序。

因此，TDD可以有效地帮助你记录下来你希望程序产生的结果。

### 2\. 信心助推器

TDD是了解你的程序是否如预期工作的的一个基准。它给予你信心，相信自己的程序正确执行。

所以无论之后你的代码库会有什么变化，TDD都可以有效地确保你的程序能够执行。

让我们现在来讨论一下TDD的术语： "单元测试（unit test)"、 "集成测试(integration test)"、 "端对端（E2E）"、和 "测试替身(test doubles)"。

<h2 id="what-is-a-unit-test-in-test-driven-development">测试驱动开发中的单元测试是什么</h2>

**单元测试**是用于评估程序独立功能的测试。换句话说，单元测试检查一个完全独立的程序单元是不是按照预期工作。

我们为`additionalCalculator`程序编写的第十步里的测试就是一个完美的例子。

第十步里的`additionalCalculator()`测试是一个独立的函数，不依赖任何外部代码。

注意单元测试首要目的并不是检查是否有bug，而是检查程序的一个独立片段（被称作单元）是否在不同的情况下按照预期工作。

<h2 id="what-is-an-integration-test-in-test-driven-development">测试驱动开发中的集成测试是什么？</h2>

**集成测试**评估依赖程序的功能。也就是说，集成测试检查一个程序（依赖其他代码）是不是按照要求工作。

我们为 `additionalCalculator`程序编写的第十三步的测试就是一个很好的例子。

第十三步的`additionalCalculator()`的测试一个例子是因为这个程序是一个依赖函数，依赖了JavaScript的[reduce()](https://codesweetly.com/javascript-reduce-method)方法。

也就是说，我们使用事先编写好的测试案例来测试 `additionalCalculator()`和`reduce()`。

因此，如果JavaScript把`reduce()`规定为一个过时的方法，那么在这个案例中，`additionalCalculator`会因为`reduce()`方法而无法通过测试。

<h2 id="what-is-an-end-to-end-test-in-test-driven-development">测试驱动开发中的端到端测试是什么？</h2>

**端到端(E2E)测试**访问用户接口（UI）的功能，也就是说E2E检查UI是否按照意图工作。

可以观看[Max的Youtube频道](https://youtu.be/r9HdJ8P6GQI?t=1755)了解更多。

<h2 id="what-are-test-doubles-in-test-driven-development">测试驱动开发中的测试替身是什么？</h2>

**测试替身（test doubles）**是模仿对象，用于模仿如数据库、库、网络和API等真实的依赖项。

使用测试替身可以绕过程序真实的依赖对象，你可以独立于任何依赖项来测试你的代码。

假设你需要测试应用的一个错误是由外部API还是你自己的代码引起的。

但这个API仅在生产阶段，而不在开发阶段提供服务。所以，你有两种选择：

1.  一直等到应用投入使用（这可能要等上数月）；
2.  克隆API，这样不论这个依赖项是否可用，你都可以继续测试。

使用测试替身来克隆项目依赖项，能够帮助你在不打断进度的情况下进行应用测试。

测试替身的典型示例是虚拟对象（dummy）、模拟（mock）、桩（stub）和仿冒（fake）。

### 测试驱动开发中的虚拟对象（dummy）是什么?

**虚拟对象（dummy）** 是用于模仿特定依赖项的值的测试替身。

假设你的应用依赖一个第三方的方法来提供一些参数。虚拟对象可以传入虚假的值给需要的方法提供参数。

### 测试驱动开发中的模拟（mock）是什么?

**模拟（mock）** 是用于模仿外部依赖项的测试替身，使用模拟可以在开发的过程中不考虑依赖项的返回。

假设你的应用依赖第三方API（如：Facebook），而这个API不可以在开发模式中被访问。使用模拟可以绕过这个API，这样你可以在不考虑Facebook的API是否可以访问的情况下进行测试。

### 测试驱动开发中的桩（stub）是什么?

**桩（stub）** 使用手动输入的值来模仿外部依赖项的返回值。你可以使用不同的返回值来测试应用的性能。

假设你的应用依赖于第三方API（如：Facebook），而这个API不可以在开发模式中被访问。桩模仿Facebook的返回值让你可以绕开这个API做测试。

因此，桩可以帮助你获取不同响应场景的应用行为。

### 测试驱动开发中的仿冒（fake）是什么?

**仿冒（fake）** 是用于创建有动态值的外部依赖项的测试替身。

例如你可以使用仿冒来创建一个本地数据库，来测试你的程序如何和实际数据库一起协同工作的。

<h2 id="quick-overview-of-test-driven-development-so-far">阶段性总结测试驱动开发</h2>

我们学习了测试驱动开发如何在创建程序前记录程序的行为。

我们也实践了一个简单的JavaScript测试，并且使用Jest来作为测试的工具。

现在让我们一起来看看如何测试React组件。

<h2 id="how-to-test-react-components">如何测试React组件</h2>

两个主要的测试React组件的工具是：

1.  测试运行工具
2.  React组件测试工具

测试运行工具和React组件测试工具的主要区别是什么？

<h2 id="test-runner-vs-react-component-testing-tool-what-s-the-difference">测试运行工具 vs React组件测试工具：区别是什么？</h2>

以下是测试运行工具和React组件测试工具的主要区别：

### 什么是测试运行?

**测试运行**是一种测试工具，执行测试脚本，并将结果打印在命令行(CLI)。

假设你想要执行你的项目中`App.test.js`的测试脚本中的测试案例，你就可以使用测试运行。

测试运行执行`App.test.js`，并将结果打印在命令行。

典型的测试运行工具有：[Jasmine](https://jasmine.github.io/)、 [Mocha](https://mochajs.org/)、 [Tape](https://github.com/substack/tape)和[Jest](https://jestjs.io/)。

### 什么是React组件测试工具?

**React组件测试工具**提供强大的API来定义组件测试案例。

假设你需要测试你的项目的`<App />`组件，你可以使用React组件测试工具来定义组件的测试案例。

也就是说，这个测试工具提供API来编写组件的测试案例。

典型的组件测试工具有： [Enzyme](https://enzymejs.github.io/enzyme/) 和 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)。

现在你已经知道了测试运行工具和React组件测试工具是什么，让我们来利用一个简单的项目例子进一步了解React测试是如何运行的。

<h2 id="project-how-react-testing-works">项目：React测试如何运行</h2>

在接下来的例子中，我们将使用[Jest](https://en.wikipedia.org/wiki/Jest_(JavaScript_framework))和[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (文档由Kent C. Dodds编写)来学习React测试是如何运行的。

**注意：** React官方文档[推荐](https://reactjs.org/docs/testing.html#tools)结合Jest和React Testing Library一起来测试React组件。

### 第一步：获取正确的Node和NPM版本

确保你的系统安装的是[Node 10.16](https://codesweetly.com/package-manager-explained#how-to-check-the-installed-node-version) (或者更高版本)以及NPM 5.6 (或者更高版本)。

如果你倾向于使用Yarn，确保你安装的是Yarn 0.25 (或者更高版本).

### 第二步：创建一个新的React应用

使用NPM的[create-react-app](https://create-react-app.dev/)包来创建一个名为`react-testing-project`的项目：

```bash
npx create-react-app react-testing-project
```

同样，你可以使用Yarn来创建：

```bash
yarn create react-app react-testing-project
```

### 第三步：导航进入项目目录

创建完毕后，导航进入到项目目录

```bash
cd react-testing-project
```

### 第四步：设置测试环境

安装下列测试包

-   jest
-   @testing-library/react
-   @testing-library/jest-dom
-   @testing-library/user-event

**注意:** 如果你是通过`create-react-app` (第二步)来初始化你的项目，你就不需要安装这些测试包。这些测试包已经被预安装到了`package.json`文件中。

现在让我们讲解一下这些测试包的作用：

#### 什么是Jest?

[jest](https://www.npmjs.com/package/jest)是个测试运行工具，我们可以使用这个工具来运行测试脚本，并将结果打印在命令行。

#### 什么是@testing-library/react?

[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)是一个React测试库，提供为React组件编写测试案例的API。

#### 什么是@testing-library/jest-dom?

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)提供定制的Jest匹配器来测试DOM的状态。

**注意:** Jest已经包含很多匹配器，所以使用`jest-dom`是可选的。 `jest-dom`只是扩展了Jest匹配器，使得测试更加声明式、易阅读以及更容易维护。

#### 什么是@testing-library/user-event?

[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)提供`userEvent`API来模拟在web上用户和应用的交互。

**注意:** `@testing-library/user-event`比[fireEvent](https://testing-library.com/docs/dom-testing-library/api-events/#fireevent) API更好用。

### 第五步: 清空`src`文件夹

删除所有在`src`文件夹里的文件。

### 第六步: 创建代码文件

在`src`文件夹中创建以下文件：

-   `index.js`
-   `App.js`
-   `App.test.js`

### 第七步：渲染`App`组件

打开`index.js`文件，并在DOM渲染`App`组件：

```js
// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 在根DOM渲染APP组件
createRoot(document.getElementById("root")).render(<App />);
```

### 第八步：创建测试案例

假设你希望`App.js`文件在网页渲染一个`<h1>CodeSweetly Test</h1>` 元素。打开 _test script_ 并编写你希望 `<App />`组件生产的结果。

**例子:**

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

上面的测试代码片段主要做了这些事：

1.  引入了测试案例需要的包
2.  编写了测试案例，希望 `<App />`组件可以渲染一个head元素包含 `"codesweetly test"`文本。

-   [`test()`](https://jestjs.io/docs/api#testname-fn-timeout)是Jest的一个全局方法。我们使用它运行测试案例。这个方法接受三个参数：
    -   测试名 (`"codesweetly test heading"`)
    -   包含期望测试结果的函数
    -   可选的timeout参数
-   [`render()`](https://testing-library.com/docs/react-testing-library/api/#render)是React Testing library的一个API，我们使用它来渲染我们希望测试的组件。
-   [`expect()`](https://jestjs.io/docs/expect#expectvalue)是一个测试代码结果的Jest方法。
-   [`screen`](https://testing-library.com/docs/queries/about/#screen)是一个包含多种搜寻页面元素方法的React Testing Library对象。
-   [`getByRole()`](https://testing-library.com/docs/queries/about/#priority)是搜寻页面元素的一个React Testing Library的请求方法。
-   [`toHaveTextContent()`](https://github.com/testing-library/jest-dom#tohavetextcontent)是 `jest-dom`的一个定制匹配器，可以使用它来确认特定节点存在文本内容。
-   `/codesweetly test/i` 是一个[正则表达式](https://codesweetly.com/javascript-regular-expression-object) 语法，用于表达搜索不区分大小写的`codesweetly test`。

记住有三种方式来编写上面的声明：

```js
// 1. 使用jest-dom'的toHaveTextContent()方法：
expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);

// 2. 使用头部的textContent属性和Jest的toMatch()方法：
expect(screen.getByRole("heading").textContent).toMatch(/codesweetly test/i);

// 3. 使用React Testing Library的名称选项和jest-dom的toBeInTheDocument()方法：
expect(screen.getByRole("heading", { name: /codesweetly test/i })).toBeInTheDocument();
```

**提示:** 

可以添加`level`选项到`getByRole()`方法，来标注head的层级。

**例子:**

```js
test("codesweetly test heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/codesweetly test/i);
});
```

`level: 1` 代表了`<h1>`元素。

假设你现在运行测试，会测试失败，因为还没有编写组件，所以我们现在开始编写：

### 第九步：开发你的React组件

打开`App.js`文件来开发一个可以通过测试的组件

**例子:**

```js
// App.js

import React from "react";

const App = () => <h1>CodeSweetly Test</h1>;

export default App;
```

在代码片段中，`App`组件渲染了一个`<h1>`元素包含了 `"CodeSweetly Test"`文本。

### 第十步：执行测试

执行实现写好的测试，检查测试通过还是失败：

```bash
npm test App.test.js
```

也可以使用Yarn：

```bash
yarn test App.test.js
```

初始化测试后，Jest会在你的编辑器的控制台打印通过或者失败的消息：

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

**注意:** `create-react-app`默认在[watch mode](https://codesweetly.com/javascript-module-bundler/#what-is-webpack---progress---watch)配置Jest。所以，在执行 `npm test` (或者`yarn test`)之后，你当前打开的终端会继续执行`test`命令的活动。在`test`执行的过程中，你将没办法在终端输入任何内容，但是你可以同时期开启一个新的终端窗口来执行`test`。

也就是说，使用一个窗口来执行`test`，另一个来输入命令。

### 第十一步：执行应用

在浏览器查看应用：

```bash
npm start
```

如果你的[包管理工具](https://codesweetly.com/package-manager-explained) 是Yarn，执行：

```bash
yarn start
```

一旦执行上述命令，你的默认浏览器就会自动打开你的应用。

### 第十二步：重构测试代码

假设你希望当用户点击按钮的时候改变head的文字。你可以模拟一个按钮来测试这个用户交互是否成立。

**例子:**

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

上面的测试代码片段的重要内容是：

1.  引入了测试案例需要的包。
2.  编写了测试案例，希望 `<App />`组件可以渲染一个head元素包含 `"codesweetly test"`文本。
3.  编写了另一个测试案例，模仿用户和应用按钮元素的互动。 也就是说，我们希望一旦用户点击按钮， `<App />`的head就会更新`"a codesweetly project"`文本。

**注意:**

-   [`describe()`](https://jestjs.io/docs/api#describename-fn)是Jest的一个全局方法。这是一个可选的方法，用户将相关的测试案例分组到一起。 `describe()`接受两个参数：
    -   你希望测试案例组被命名的名称，如： `"App component"`.
    -   包含测试案例的函数。
-   [`userEvent`](https://www.npmjs.com/package/@testing-library/user-event) 包含许多模拟用户与应用交互方法的一个React Testing Library包。例如在代码块中，我们使用 `userEvent`的`click()`方法来模拟按钮元素的点击事件。
-   每次测试案例我们都会渲染`<App />`，因为每次测试后，React测试库都会卸载掉已经渲染的组件。假设你的组件有多个测试案例， 使用Jest的[`beforeEach()`](https://jestjs.io/docs/api#beforeeachfn-timeout)方法来渲染你文件中的`render(<App />)`(或者`describe` 代码块中)的测试。

### 第十三步：重构React组件

我们已经重构了测试代码，现在我们来重构`App`组件：

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

在上述代码片段中主要发生了：

1.  `App`的`heading`初始状态是`"CodeSweetly Test"`字符串。
2.  编写了一个`handleClick`函数来处理`heading`状态。
3.  在DOM渲染一个 `<h1>`和一个`<button>`元素。

注意以下几点：

-   `<h1>`的内容是 `heading`状态的当前值。
-   每当用户点击按钮元素， `onClick()`事件监听器就会调用`handleClick()`函数。 `handleClick`就会更新`App`的`heading`的状态到`"A CodeSweetly Project"`。因此 `<h1>`的内容会改成`"A CodeSweetly Project"`。

### 第十四步：重新执行测试

一旦重构了组件之后，重新执行测试（或者检查正在运行的测试）来确保应用按照预期执行。

之后，在浏览器查看最近的更新。

### 就这么多！

恭喜你！你成功的使用Jest和React测试库来测试React组件！ 🎉

<h2 id="overview">总结</h2>

本文探讨了在JavaScript和ReactJS应用中如何使用测试驱动的开发。

我们还学习了如何使用Jest和React测试库使得测试更加简单快速。

感谢阅读！

### **这里还有一些有用的ReactJS的资源:**

我编写了一本React相关的书籍!

-   初学者友好 ✔
-   包含代码片段 ✔
-   包含可以扩展的项目 ✔
-   和非常多好理解的例子 ✔

[React Explained Clearly](https://www.amazon.com/dp/B09KYGDQYW)是你了解ReactJS的敲门砖。

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://www.amazon.com/dp/B09KYGDQYW)
