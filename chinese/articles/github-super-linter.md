> - 原文地址：[How to Use GitHub Super Linter in Your Projects](https://www.freecodecamp.org/news/github-super-linter/)
> - 原文作者：[Rishit Dagli](https://www.freecodecamp.org/news/author/rishit_dagli/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Use GitHub Super Linter in Your Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/FCC-1.png)

当你开始一个新的项目时，你可能需要添加多个 linting 工具来美化你的代码并防止简单的错误。

你经常会使用多个 linters--其中一个可能支持 npm 安装，另一个可能有 PyPI 安装，等等。你也会想在你的 CI 中设置一些自动化来运行这些 linters，但这个过程是相当乏味的😫。

在这篇文章中，我将向你展示如何使用 GitHub Super Linter，一个可以解决所有这些问题的单一 linter。我的大部分个人项目也都使用 GitHub Super Linter，我个人发现它是一个大救星。

## Why is Linting Necessary?

Linting 本质上是一种静态代码分析的形式。它根据一些规则来分析你写的代码，以找出风格上或程序上的错误。可以把它看作是一种在软件中标记出可疑用法的工具。

linter 可以通过以下方式帮助你节省大量的时间:

- 防止有破坏性（broken）的代码被推送
- 帮助建立编码的最佳实践
- 建立代码布局和格式的准则
- 帮助代码审查变得更加顺畅
- 标记出你的代码中的语法错误的 bug

鉴于提示工具的作用，你最好在任何代码审查发生之前对推送到你的仓库的每一段代码运行一个 linter。这无疑有助于你写出更好、更可读、更稳定的代码。

下面是一个使用 [Black](https://github.com/psf/black) 的例子，这是一个专注于代码格式化的 Python 的提示工具。

![Black-Example](https://www.freecodecamp.org/news/content/images/2022/08/Black-Example.png)

Black 所做的格式化修改

GitHub Super Linter 在为你的项目带来这些功能方面可以提供相当大的帮助，轻松而有效。GitHub Super Linter 是一个由多个常用 linters 组成的组合，你可以非常容易地使用。它可以让你为这些 linters 设置自动运行，也可以在一个项目中管理多个 linters！它还有大量的自定义功能。

它还有大量的环境变量的定制功能，可以帮助你根据你的个人仓库定制 Super Linter。

## How to Use GitHub Super Linter in GitHub Actions

Super Linter 主要是为在 GitHub Action 中运行而设计的，这也是我在相当长一段时间内使用它的方式。我们将首先讨论这个问题。为了跟上进度，你应该在你的仓库里创建一个新的 GitHub Action。让我们在`.github/workflows/linter.yml` 创建一个新文件。

展望未来，我将假设你知道 GitHub 动作的基本语法。但如果你不知道或需要快速复习，我建议你看一下这个 [快速入门指南](https://docs.github.com/en/actions/quickstart).

### How to Create an Action

我们已经有了一个空白文件`.github/workflows/linter.yml`，现在我们要用补充 action 相关内容，你可以用它来给你的项目加注。

我们将首先给我们的 action 一个名字（name）。这就是出现在 GitHub 动作状态检查下的内容:

```yaml
name: Lint Code Base
```

接下来，让我们为我们的 action 指定触发器。这将控制什么时候应该对你的代码库进行检查的问题。在这里，我们告诉它在每次推送（push）和每次拉动请求时（pull_request）都要运行 lint。

```yaml
name: Lint Code Base

on: [push, pull_request]
```

这是另一个非常常用的触发器配置。它只在你向主分支（main 或者 master）发出拉取请求时(pull_request)运行，而不是在向这些分支（master 或者 main 分支）推送时(push)运行。

```yaml
on:
  push:
    branches-ignore: [master, main]
  pull_request:
    branches: [master, main]
```

接下来，我们要设置一个 job(作业)。你放在一个作业中的所有组件将按顺序运行。在这里，我们把它看作是步骤，以及每当触发器得到满足时，我们希望它们按照哪个顺序运行。

我们将把这个 job 命名为 `Lint Code Base`， 并要求 GitHub 用最新版本的 Ubuntu 运行我们的 job。

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest
```

你不一定要像我们这里一样使用单一的 runner（ubuntu-latest）。可以选择多个 runner，但在这种情况下，它将以同样的方式在所有种类的 runner 上运行。你使用多个 runner 来测试你的代码，是否可以在多个平台上都能很好地运行。

GitHub Super Linter 在其他机器类型上的工作方式没有任何不同，所以我们只用一个机器类型。

接下来，我们将开始定义我们希望这个工作流程所具有的步骤。我们基本上有两个步骤:

1. 获取对应代码
2. 运行 super linter

获取代码。我们会使用 Github 官方的 checkout action。

我们设置 `fetch-depth: 0`  来获取所有分支和标签的所有历史记录，这对 Super linter 来说是必要的，可以获得修改过的文件列表。如果你没有这样做，就只能获取单个提交。

我们还要给我们的步骤起个名字，并告诉它我们要使用 GitHub 官方仓库中的 action，即 `actions/checkout@v3` .

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
```

这段代码在 `$GITHUB_WORKSPACE` 下检出你的仓库，允许工作流（workflow）的其他部分访问这个仓库。我们要检查的版本库是你的代码所在的版本库，最好是同一个版本库。

### How to Run the Linter

现在我们要添加运行 linter 的步骤，因为我们的代码已经获取。你可以在运行动作时使用环境变量（environment variables）来定制 GitHub Super Linter。

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          
   - name: Lint Code Base
        uses: github/super-linter@v4
```

现在我们将谈谈在经常使用 Github 环境变量的例子。

- `VALIDATE_ALL_CODEBASE`: 这控制 Super Linter 对整个代码库进行检查，还是只对该提交的修改进行检查。这些变化是通过`git diff`发现的，但你也可以改变搜索算法（但我们不会在这篇文章中研究这个问题）。 常用配置: `VALIDATE_ALL_CODEBASE: true`.
- `GITHUB_TOKEN`: 顾名思义，这就是 GitHub 令牌。 如果你使用它，GitHub 将显示你使用的每个 linter（我们将很快看到如何做到这一点）作为 UI 上的单独检查。 例如:  你可以这样写  `GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}`.
- `DEFAULT_BRANCH`: 存储库默认分支的名称。例子: `DEFAULT_BRANCH: main`.
- `IGNORE_GENERATED_FILES`: 如果您有任何由工具生成的文件，您可以将它们标记为 `@generated`。如果此环境变量设置为 true，Super Linter 将忽略这些文件。例如: `IGNORE_GENERATED_FILES: true`.
- `IGNORE_GITIGNORED_FILES`: 从 linting 中排除 .gitignore 中的文件。示例: `IGNORE_GITIGNORED_FILES: true`.
- `LINTER_RULES_PATH`: 任何 linter 自定义文件应该位于的自定义路径。 默认情况下，您的文件应位于 `.github/linters/`. 示范 : `LINTER_RULES_PATH: /`。

这些是您最常使用的一些环境变量，但我们讨论过的还没有一个讨论特定于语言的 linting。

如果您不使用我们讨论的任何环境变量，Super Linter 会自动为您的代码库查找并使用所有适用的 linter。

## How to Add Specific Linters to Super Linter

您通常只会对为您的项目使用特定的 linter 感兴趣。 您可以使用以下环境变量模式来添加您想要的任何 linter：

```shell
VALIDATE_{LANGUAGE}_{LINTER}
```

您可以在列表中找到这些 [Supported Linters](https://github.com/github/super-linter#supported-linters) 的命名约定。

这里有几个例子，我们指定要使用 Black 对所有 Python 文件进行 lint，对 JavaScript 文件使用 ESLint，对 HTML 文件使用 HTMLHint。

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          
   - name: Lint Code Base
        uses: github/super-linter@v4

      - name: Lint Code Base
        uses: github/super-linter@v4
        env:
          VALIDATE_ALL_CODEBASE: true
          VALIDATE_JAVASCRIPT_ES: true
          VALIDATE_PYTHON_BLACK: true
          VALIDATE_HTML: true
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

一旦将其中一个 linter 设置为 `true`，所有其他 linter 将不会运行。 在上面的代码片段中，除了 ESLint、Black 或 HTMLHint 之外的所有 linter 都不会运行。

然而，在这个例子中，我们将单个 linter 设置为 `false`，所以除了 `ESLint` 之外的每个 linter 都将在这里运行：

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          
   - name: Lint Code Base
        uses: github/super-linter@v4

      - name: Lint Code Base
        uses: github/super-linter@v4
        env:
          VALIDATE_ALL_CODEBASE: true
          VALIDATE_JAVASCRIPT_ES: false
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## How to Customize Lint Checks

Linter 通常使用配置文件，因此您可以修改 linter 使用的规则。 在上面我展示的两个完整示例中，Super Linter 将尝试在 `.github/linters/` 下查找任何配置文件。

这些可能是用于配置 ESLint 的 `.eslintrc.yml` 文件，用于配置 HTMLHint 的 `.htmlhintrc` 等等。

Here is an example of the configuration file if you use the Flake8 linter for Python:

```yaml
[flake8]
max-line-length = 120
```

你把它保存在`.github/linters/.flake8`。 然后，您将在运行 Flake8 linter 时使用它。 您可以在 [此处](https://github.com/github/super-linter/tree/main/TEMPLATES) 找到可以使用的模板配置文件示例。

但是，这里有两个示例说明如何修改此路径:

1. 你所有的 linter 配置文件都在其他目录中

将目录路径添加为环境变量，如下所示:

```yaml
LINTER_RULES_PATH: configs/
```

2. 添加配置文件的路径

您还可以将特定 linter 的路径硬编码为环境变量。 这是一个例子：

```yaml
JAVASCRIPT_ES_CONFIG_FILE: configs/linters/.eslintrc.yml
```

## How to Run Super Linter Outside GitHub Actions

GitHub Super Linter 是为在 GitHub Actions 中运行而构建的。 但是在本地或其他 CI 平台上运行它可能特别有用。 您可以本地任何其他 CI 平台上一样运行 Super Linter。

### How to Run Super Linter Locally

您首先要使用此命令从 DockerHub 中获取最新的 Docker 容器:

```shell
docker pull github/super-linter:latest
```

为了运行这个容器，你可以运行以下命令:

```shell
docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true VALIDATE_PYTHON_BLACK=true -v /project/directory:/tmp/lint github/super-linter
```

请注意这里的几件事:

- 我们用`RUN_LOCAL`标志运行它，以绕过一些 GitHub  action 检查。这将自动设置 `VALIDATE_ALL_CODEBASE` 为 true。
- 我们将本地代码库映射到`/tmp/lint`，这样 linter 就能接收到代码。
- 当然，我们设置环境变量的方式是不同的，但运行 GitHub 超级 Linter 的整体过程是相同的。

### How to Run Super Linter on Other CI Platforms

在其他 CI 平台上运行 GitHub Super Linter 与在本地运行 GitHub Super Linter 非常相似。下面是 [Tao Yang](https://blog.tyang.org/2020/06/27/use-github-super-linter-in-azure-pipelines/)在 Azure Pipelines 中运行它的一个例子。

```yaml
- job: lint_tests
  displayName: Lint Tests
  pool:
    vmImage: ubuntu-latest
  steps:
  - script: |
      docker pull github/super-linter:latest
      docker run -e RUN_LOCAL=true -v $(System.DefaultWorkingDirectory):/tmp/lint github/super-linter
    displayName: 'Code Scan using GitHub Super-Linter'
```

这只是把我们在本地运行 Super Linter 的命令作为一个脚本来运行。你可以在其他 CI 平台上以完全相同的方式运行它。

## **总结**

谢谢你坚持到最后。我希望你能从 GitHub Super Linter 的使用中得到一两点启发。它无疑是我最喜欢的开源项目之一。

如果你学到了新的东西，或者喜欢读这篇文章，请分享出去，让别人看到。在那之前，我们在下一篇文章中再见吧!

你也可以在 Twitter 上找到我[@rishit/_dagli](https://twitter.com/rishit_dagli)，我在那里发布关于开源和机器学习的推文。
