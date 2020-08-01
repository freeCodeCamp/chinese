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

### Integrating puppeteer with Jest

[jest][7]  is an awesome test runner and assertion library. From their docs:

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

Jest allows you to run tests, mock imports, and make complex assertions really easily. Jest is also bundled with create-react-app, so I use it often at work.

#### Writing your first Jest test

Jest tests are super easy to write, and they might be familiar to those who know other testing frameworks (as Jest uses  `it`,  `test`,  `describe`  and other familiar conventions).

A basic test could look like:

```js
function subtract(a, b) {
  return a - b;
}

```

You can also group multiple tests under one  `describe`, so you can run different describes or use it for convenient reporting:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero!");
  }
  return a / b;
}

```

You can, of course, create much more complicated tests using mocks and other type of assertions (or expectations), but for now that's enough.

Running the tests is also very simple:

```bash
jest

```

Jest will look for test files with any of the following popular naming conventions:

-   Files with  `.js`  suffix in  `**tests**`  folders.
-   Files with  `.test.js`  suffix.
-   Files with  `.spec.js`  suffix.

#### jest-puppeteer

Now, we need to make puppeteer play nicely with jest. This isn't a particularly hard job to do, as there is a great package named  [jest-puppeteer][8]  that comes to our aid.

First, we must install it as a dependency:

```bash
npm i jest-puppeteer

```

And now we must extend our jest configuration. If you don't have one yet, there are a number of ways to do it. I'll go with a config file. Create a file named  `jest.config.js`  in the root of your project:

```bash
touch jest.config.js

```

In the file we must tell jest to use  `jest-puppeteer`'s preset, so add the following code to the file:

```js
module.exports = {
  preset: "jest-puppeteer"
  // The rest of your file...
};

```

You may specify a special launch configuration in a  `jest-puppeteer.config.js`  file, and jest-puppeteer will pass this configuration to  `puppeteer.launch()`. For example:

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

`jest-puppeteer`  will take care of opening a new browser and a new page and store them on the global scope. So in your tests you can simply use the globally available  `browser`  and  `page`  objects.

Another great feature we can use is the ability of jest-puppeteer to run your server during your tests, and kill it afterwards, with the  `server`  key:

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

Now jest-puppeteer will run  `npm run serve`, with a timeout of 180 seconds (3 minutes), and listen on port 9000 to see when it will be up. Once the server starts the tests will run.

You can now write a full test suite using jest and puppeteer. The only thing left is creating a CI pipeline, for which we'll use GitHub actions.

You can add a script to your  `package.json`  file to execute your tests:

```json
{
  "scripts": {
    "test:e2e": "jest"
  }
}

```

## Github Actions in a gist

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
