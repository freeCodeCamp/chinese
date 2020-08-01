> * 原文地址：[How to Set Up a Continuous Integration Pipeline with GitHub Actions and Puppeteer 如何使用 GitHub Actions 和 Puppeteer 设置持续集成管道](https://www.freecodecamp.org/news/continuous-integration-with-github-actions-and-puppeteer/)
> * 原文作者：Dor Shinar
> * 译者：RetownPlato
> * 校对者：

![How to Set Up a Continuous Integration Pipeline with GitHub Actions and Puppeteer](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/7i4mnqi4x5tl0rn204ab.png)

最近，我使用Puppeteer将持续集成集成到我的博客中，以进行端到端测试。我的主要目标是允许使用[Dependabot][1]进行自动依赖项更新。在本指南中，我将向您展示如何自己创建这样的管道。

作为我的CI平台，我选择了[Github Actions][2]，因为它非常易于使用。它还可以与您已经拥有的任何Github存储库完美集成。整个过程大约只花了两天的间歇时间，我认为结果非常棒。
我确实要大声赞扬Nick Taylor，他发表了[有关该主题的文章][3]，并为我在这里的努力奠定了基础。我鼓励您也阅读他的文章。

我的技术栈却大不相同。由于多种原因，我选择[puppeteer][4]作为我的端到端框架。首先是它是由Chrome开发者工具背后的人们编写和维护的，因此可以保证我将终身提供支持（直到Chrome淘汰，这不会在不久的将来），而且这确实很容易上手。

另一个原因是在家里，我正在使用WSL的Windows笔记本电脑上工作（在该笔记本电脑上，我正在使用oh-my-zsh运行zshell）。设置Cypress要困难得多（尽管在我们这个世界上没有什么是不可能的）。这两个原因都促使我选择了Puppeteer，到目前为止，我并不后悔。

## 端到端测试

端到端（或E2E）测试与其他类型的自动化测试不同。 E2E测试可模拟真实用户，并在屏幕上执行操作。这种测试应该有助于填补“静态”测试（例如，单元测试（通常不引导整个应用程序）和组件测试）之间的空白，组件测试通常针对单个组件（或微型服务）运行服务架构）。

通过模拟用户交互，您可以测试普通用户体验应用程序或服务的体验。

我们尝试遵循的口头禅是，由于某些CSS怪癖，如果用户应按下的按钮处于隐藏状态，则代码是否可以完美执行并不重要。最终结果是用户将永远不会感觉到您的代码的强大之处。

## 入门Puppeteer

Puppeteer有几个配置选项，使编写和验证测试使用起来真的很棒。

Puppeteer测试可以在“head-full”状态下运行。这意味着您可以打开真实的浏览器窗口，导航到要测试的站点，然后在给定页面上执行操作。这样，您（编写测试的开发人员）可以确切地看到测试中发生的情况，按下了哪些按钮以及生成的UI外观。

与“ head-full”的相反将是headless的，其中Puppeteer不会打开浏览器窗口，因此非常适合CI管道。

Puppeteer的使用非常简单，但是你会惊讶于使用自动化工具可以执行的操作数量。

我们将从基本的爬虫开始，当我们转到[https://dorshinar.me](https://dorshinar.me/)时，该爬虫将打印页面标题。为了运行Puppeteer的测试，我们必须将其安装为依赖项：

```powershell
npm i puppeteer
```

现在，我们的基本爬虫如下所示：

```javascript
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dorshinar.me");
  console.log(await page.title());

  await browser.close();
})();
```

我们在这里做的事情非常简单：我们使用`puppeteer.launch()`打开浏览器，使用`browser.newPage()`创建一个新页面，然后使用`page.goto()`导航到该博客，然后打印标题。

我们可以使用puppeteer API做很多事情，例如：

在页面上下文中运行代码：

```javascript
(async () => {
  await page.evaluate(() => document.querySelector(".awesome-button").click());
})();
```

使用CSS选择器单击屏幕上的元素：

```js
(async () => {
  await page.click(".awesome-button");
})();
```

利用`$`选择器（jQuery样式）：

```js
(async () => {
  await page.$(".awesome-button");
})();
```

截屏：

```js
(async () => {
  await page.screenshot({ path: "screenshot.png" });
})();
```

您可以使用puppeteer API做更多的事情，我建议您在开始编写测试之前先进行了解。但是我展示的示例应该为您提供坚实的基础。

### 将Puppeteer与Jest集成

[jest](https://jestjs.io/)是一个了不起的测试运行程序和断言库。从他们的文档：

> Jest是一个令人愉悦的JavaScript测试框架，其重点是简单性。

Jest允许您真正轻松地运行测试，模拟导入以及进行复杂的断言。Jest还与create-react-app捆绑在一起，因此我经常在工作中使用它。

#### 编写您的第一个Jest测试

Jest测试是超级容易写，他们可能对于那些知道其他的测试框架是熟悉的（如Jest使用`it`，`test`，`describe`和其他熟悉的惯例）。

基本测试可能类似于：

```js
function subtract(a, b) {
  return a - b;
}

it("subtracts 4 from 6 and returns 2", () => {
  expect(subtract(6, 4)).toBe(2);
});
```

您还可以将多个测试归为一类`describe`，因此您可以运行不同的describes或将其用于方便的报告：

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero!");
  }
  return a / b;
}

describe("divide", () => {
  it("throws when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow();
  });
  it("returns 3 when dividing 6 by 3", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
```

当然，您可以使用模拟和其他类型的断言（或期望）来创建更复杂的测试，但是到目前为止就足够了。

运行测试也非常简单：

```bash
jest
```

Jest将使用以下任何流行的命名约定查找测试文件：

- `__tests__`文件夹中带有`.js`后缀的文件。
- 带`.test.js`后缀的文件。
- 带`.spec.js`后缀的文件。

#### jest-puppeteer

现在，我们需要使Puppeteer和jest合作愉快。这并不是一件特别困难的事情，因为有一个名为[jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)的出色软件包可以帮助我们。

首先，我们必须将其安装为依赖项：

```bash
npm i jest-puppeteer
```

现在，我们必须扩展我们的jest配置。如果您还没有，那么有很多方法可以做到。我将使用一个配置文件。`jest.config.js`在项目的根目录中创建一个名为：

```bash
touch jest.config.js
```

在此文件中，我们必须告诉jest使用`jest-puppeteer`的预设，因此将以下代码添加到文件中：

```js
module.exports = {
  preset: "jest-puppeteer"
  // The rest of your file...
};
```

您可以在`jest-puppeteer.config.js`文件中指定特殊的启动配置，并且jest-puppeteer会将此配置传递给`puppeteer.launch()`。例如：

```js
module.exports = {
  launch: {
    headless: process.env.CI === "true",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
    executablePath: "chrome.exe"
  }
};
```

`jest-puppeteer`将负责打开新的浏览器和新的页面，并将它们存储在全局范围内。因此，在测试中，您可以简单地使用全局可用的`browser`和`page`对象。

我们可以使用的另一个出色功能是jest-puppeteer能够在测试期间运行服务器，然后使用以下`server`键将其杀死：

```js
module.exports = {
  launch: {},
  server: {
    command: "npm run serve",
    port: 9000,
    launchTimeout: 180000
  }
};
```

现在，jest-puppeteer将运行`npm run serve`，超时时间为180秒（3分钟），并在端口9000上监听以查看何时启动。服务器启动后，测试将运行。

您现在可以使用jest和puppeteer编写完整的测试套件。剩下的唯一事情就是创建一个CI管道，我们将使用GitHub操作。

您可以将脚本添加到`package.json`文件中以执行测试：

```json
{
  "scripts": {
    "test:e2e": "jest"
  }
}
```

## Github Actions要点

Recently, Github released a big new feature called Actions. Basically, actions allow you to create workflows using plain yaml syntax, and run them on dedicated virtual machines.

In your workflow you can do pretty much anything you want, from basic  `npm ci && npm build && npm run test`  to more complicated stuff.

I'll show you how to configure a basic workflow running your puppeteer test suite, and prevent merging if your tests don't pass.

The easiest way to start is to click on the  `Actions`  tab in your github repo. If you haven't configured any action before, you'll see a list of previously configured workflows, from which you can choose one with some predefined configuration.

![github-actions-start-3](https://www.freecodecamp.org/news/content/images/2020/01/github-actions-start-3.png)

For our case, choosing the predefined Node.js action is good enough. The generated yaml looks like this:

```yaml
name: Node CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
<span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">strategy</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
  <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">matrix</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">node-version</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span>8.x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> 10.x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> 12.x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span>

<span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">steps</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span> <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">uses</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> actions/checkout@v1
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span> <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">name</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> Use Node.js $<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> matrix.node<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span>version <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
    <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">uses</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> actions/setup<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span>node@v1
    <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">with</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
      <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">node-version</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> $<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> matrix.node<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span>version <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">-</span> <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">name</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> npm install<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> build<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> and test
    <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">run</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">|</span><span class="token scalar string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">
      npm ci
      npm run build --if-present
      npm test</span>
    <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">env</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
      <span class="token key atrule" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">CI</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token boolean important" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(238, 153, 0);">true</span>
```

In the file you can configure the workflow name, jobs to run, and when to run the workflow. You can run your workflow on every push, on new pull requests, or as a recurring event.

Jobs in a workflow run in parallel by default, but can be configured to run in sequence. In the above workflow, there is one job named  `build`.

You can also choose the OS on which your workflow will run (by default you can use Windows Server 2019, Ubuntu 18.04, Ubuntu 16.04 and macOS Catalina 10.15 - at the time of publishing) with the  `runs-on`  key.

The  `strategy`  key can help us run our tests on a matrix of node versions. In this case we have the latest versions of the latest LTS majors -  `8.x`,  `10.x`  and  `12.x`. If you are interested in that you can leave it as is, or simply remove it and use any specific version you want.

The most interesting configuration option is the  `steps`. With it we define what actually goes on in our pipeline.

Each step represents an action you can perform, such as checking out code from the repo, setting up your node version, installing dependencies, running tests, uploading artifacts (to be used later or downloaded) and many more.

You can find a very extensive list of readily available actions in the  [Actions Marketplace][9].

The basic configuration will install dependencies, build our project and run our tests. If you need more (for example if you want to serve your application for e2e tests) you may alter it to your liking. Once done, commit your changes and you are good to go.

### Forcing checks to pass before merge

The only thing left for us is to make sure no code can be merged before our workflow passes successfully. For that, go to your repo's settings and click on Branches:

![Github Settings > Branch](https://www.freecodecamp.org/news/content/images/2020/01/github-settings-branch-1.png)

We need to set a  **Branch protection rule**  so that malicious code (or at least code that doesn't pass our tests) won't be merged. Click on  **Add rule**, and under  **Branch name pattern**  put your protected branch (master, dev or whichever one you choose). Make sure  **Require status checks to pass before merging**  is checked, and you'll be able to choose which checks must pass:

![Require status checks](https://www.freecodecamp.org/news/content/images/2020/01/github-actions-protections-1.png)

Click on Save changes below, and you're good to go!

Thank you for reading!

[1]: https://dependabot.com/
[2]: https://github.com/features/actions
[3]: https://www.iamdeveloper.com/blog/2019-08-15-update-dependencies-with-dependabot-cypress-and-netlify/
[4]: https://pptr.dev/
[5]: https://dorshinar.me/
[6]: https://dorshinar.me%22/
[7]: https://jestjs.io/
[8]: https://github.com/smooth-code/jest-puppeteer
[9]: https://github.com/marketplace?type=actions
