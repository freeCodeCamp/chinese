> * 原文地址：[How to Set Up a Continuous Integration Pipeline with GitHub Actions and Puppeteer 如何使用 GitHub Actions 和 Puppeteer 设置持续集成管道](https://www.freecodecamp.org/news/continuous-integration-with-github-actions-and-puppeteer/)
> * 原文作者：Dor Shinar
> * 译者：RetownPlato
> * 校对者：

![How to Set Up a Continuous Integration Pipeline with GitHub Actions and Puppeteer](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/7i4mnqi4x5tl0rn204ab.png)

最近，我使用Puppeteer将持续集成集成到我的博客中，以进行端到端测试。我的主要目标是允许使用[Dependabot][1]进行自动依赖项更新。在本指南中，我将向您展示如何自己创建这样的管道。

作为我的CI平台，我选择了[Github Actions][2]，因为它非常易于使用。它还可以与您已经拥有的任何Github仓库完美集成。整个过程大约只花了两天的间歇时间，我认为结果非常棒。

我确实要大声赞扬Nick Taylor，他发表了[有关该主题的文章][3]，并为我在这里的努力奠定了基础。我鼓励您也阅读他的文章。

但我的技术栈却大不相同。由于多种原因，我选择[puppeteer][4]作为我的端到端框架。首先是它是由Chrome开发者工具背后的人们编写和维护的，因此可以保证我将终身提供支持（直到Chrome淘汰，这不会在不久的将来），而且这确实很容易上手。

另一个原因是在家里，我正在使用WSL的Windows笔记本电脑上工作（在该笔记本电脑上，我正在使用oh-my-zsh运行zshell）设置Cypress要困难得多（尽管在我们这个世界上没有什么是不可能的）。这两个原因都促使我选择了Puppeteer，到目前为止，我并不后悔。

## 端到端测试

端到端（或E2E）测试与其他类型的自动化测试不同。 E2E测试可模拟真实用户，并在屏幕上执行操作。这种测试应该有助于填补“静态”测试（例如，单元测试通常不引导整个应用程序）和组件测试之间的空白，组件测试通常针对单个组件（或微型服务运行服务架构）。

通过模拟用户交互，您可以测试普通用户体验应用程序或服务的体验。

我们尝试遵循的口头禅是，由于某些CSS怪癖，如果用户应按下的按钮处于隐藏状态，则代码是否可以完美执行并不重要。最终结果是用户将永远不会感觉到您的代码的强大之处。

## 入门Puppeteer

Puppeteer有几个配置选项，使编写和验证测试使用起来真的很棒。

Puppeteer测试可以在“head-full”状态下运行。这意味着您可以打开真实的浏览器窗口，导航到要测试的站点，然后在给定页面上执行操作。这样，您（编写测试的开发人员）可以确切地看到测试中发生的情况，按下了哪些按钮以及生成的UI外观。

与“ head-full”相反的是headless的，其中Puppeteer不会打开浏览器窗口，因此非常适合CI管道。

Puppeteer的使用非常简单，但是你会惊讶于使用自动化工具可以执行的操作数量。

我们将从基本的爬虫开始，当我们转到[https://dorshinar.me][5] 时，该爬虫将打印页面标题。为了运行Puppeteer的测试，我们必须将其安装为依赖项：

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

[jest][7]是一个了不起的测试运行程序和断言库。从他们的文档：

> Jest是一个令人愉悦的JavaScript测试框架，其重点是简单性。

Jest允许您真正轻松地运行测试，模拟导入以及进行复杂的断言。Jest还与create-react-app捆绑在一起，因此我经常在工作中使用它。

#### 编写您的第一个Jest测试

Jest测试是超级容易写，那些知道其他的测试框架的人可能会觉得熟悉的（如Jest使用`it`，`test`，`describe`和其他类似的惯例）。

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

现在，我们需要使Puppeteer和jest合作愉快。这并不是一件特别困难的事情，因为有一个名为[jest-puppeteer][8]的出色软件包可以帮助我们。

首先，我们必须将其安装为依赖项：

```bash
npm i jest-puppeteer
```

现在，我们必须扩展我们的jest配置。如果您还没有，那么有很多方法可以做到。我将使用一个配置文件。在项目的根目录中创建一个名为`jest.config.js`：

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

您现在可以使用jest和puppeteer编写完整的测试套件。剩下的唯一事情就是创建一个CI管道，我们将使用GitHub actions。

您可以将脚本添加到`package.json`文件中以执行测试：

```json
{
  "scripts": {
    "test:e2e": "jest"
  }
}
```

## Github Actions要点
最近，Github发布了一项名为Actions的重要新功能。基本上，操作允许您使用简单的yaml语法创建工作流，并在专用虚拟机上运行它们。

在您的工作流程中，您可以执行几乎所有您想做的事情，从基本`npm ci && npm build && npm run test`到更复杂的事情。

我将向您展示如何配置运行puppeteer测试套件的基本工作流程，并在测试未通过的情况下防止merge。

最简单的开始方法是单击github仓库中的`Actions`选项卡。如果您之前未配置任何操作，则将看到以前配置的工作流列表，您可以从中选择具有一些预定义配置的工作流。

![github-actions-start-3](https://www.freecodecamp.org/news/content/images/2020/01/github-actions-start-3.png)

对于我们的情况，选择预定义的Node.js action就足够了。生成的yaml如下所示：

```yaml
name: Node CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install, build, and test
        run: |
          npm ci
          npm run build --if-present
          npm test
        env:
          CI: true
```

在该文件中，您可以配置工作流名称，要运行的作业以及运行时间。您可以在每次push，新的pull请求或重复发生的事件上运行您的工作流。

工作流中的作业默认情况下并行运行，但可以配置为按顺序运行。在上述工作流程中，有一个名为`build`的作业。

您还可以使用`runs-on`键选择将在其上运行工作流的操作系统（默认情况下，您可以在发布时使用Windows Server 2019，Ubuntu 18.04，Ubuntu 16.04和macOS Catalina 10.15）。

该`strategy`键可以帮助我们在运行矩阵测试（Matrix Testing）。在这种情况下，我们有最新版本的最新的LTS major - `8.x`，`10.x`和`12.x`。如果您对此感兴趣，可以将其保留不变，也可以将其删除并使用所需的任何特定版本。

最有趣的配置选项是`steps`。通过它，我们定义了管道中实际发生的事情。

每个步骤都代表您可以执行的操作，例如从仓库中checkout代码，设置节点版本，安装依赖项，运行测试，上传artifact（以供以后使用或下载）等等。

您可以在[Actions Marketplace][9]中找到非常广泛的随时可用的actions列表。

基本配置将安装依赖项，构建我们的项目并运行我们的测试。如果您需要更多服务（例如，如果要为e2e测试提供服务），则可以根据自己的喜好进行更改。完成后，提交您的更改，一切顺利。

### 强制检查在合并之前通过

我们剩下的唯一事情是确保在我们的工作流成功通过之前，不能合并任何代码。为此，请转到您的仓库的设置，然后单击branches：

![Github Settings > Branch](https://www.freecodecamp.org/news/content/images/2020/01/github-settings-branch-1.png)

我们需要设置**Branch protection rule，**以使恶意代码（或至少未通过测试的代码）不会被合并。单击**Add rule**，然后在**Branch name pattern**放置受保护的分支（master，dev或您选择的任何一个）。确保选中**Require status checks to pass before merging**，然后您可以选择必须通过哪些检查：

![Require status checks](https://www.freecodecamp.org/news/content/images/2020/01/github-actions-protections-1.png)

点击下面的“保存更改”，一切顺利！

感谢您的阅读！

[1]: https://dependabot.com/
[2]: https://github.com/features/actions
[3]: https://www.iamdeveloper.com/blog/2019-08-15-update-dependencies-with-dependabot-cypress-and-netlify/
[4]: https://pptr.dev/
[5]: https://dorshinar.me/
[6]: https://dorshinar.me%22/
[7]: https://jestjs.io/
[8]: https://github.com/smooth-code/jest-puppeteer
[9]: https://github.com/marketplace?type=actions
