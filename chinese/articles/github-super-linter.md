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

Formatting changes made by Black

GitHub Super Linter can help you quite a lot in bringing these capabilities to your projects easily and efficiently. GitHub Super Linter is a combination of multiple commonly used linters which you can use very easily. It lets you set up automated runs for these linters, as well as manage multiple linters in a single project!

There is also a ton of customization capabilities with environment variables that can help you customize the Super Linter to your individual repository.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## How to Use GitHub Super Linter in GitHub Actions

Super Linter is primarily designed to be run inside a GitHub Action, which is also how I have been using it for quite some time. We will talk about this first. To follow along you should create a new GitHub Action in your repository. Let us create a new file at `.github/workflows/linter.yml`.

Going forward, I will assume you know about the basic syntax for GitHub Actions. But in case you do not or need a quick refresher, I would suggest going through this [Quick Start Guide](https://docs.github.com/en/actions/quickstart).

### How to Create an Action

We already have a blank file `.github/workflows/linter.yml`, which we will now populate with an action you can use to lint your project.

We will start by giving our action a name. This is what appears under the GitHub Action Status Check:

```yaml
name: Lint Code Base
```

Next up, let's specify triggers for our action. This answers the question of when you should lint your codebase. Here we tell it to run the lint on every push and on every pull request.

```yaml
name: Lint Code Base

on: [push, pull_request]
```

This is another very commonly used configuration for the triggers. This only runs when you make a pull request to `main` or `master` branches and not on pushes to these branches.

```yaml
on:
  push:
    branches-ignore: [master, main]
  pull_request:
    branches: [master, main]
```

Next up, we want to set up a job. All the components you put in a single job will run sequentially. Here, think of it as the steps and in which order we want them to run whenever the trigger is satisfied.

We will name this job "Lint Code Base" and ask GitHub to run our job on a runner with the last version of Ubuntu supported by GitHub.

```yaml
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest
```

You are not bound to using a single kind of runner (ubuntu-latest), like we do here. It's a common practice to have a matrix of agent kinds, but in this case it will run the same way on all kinds of runners. You often you use a matrix of runners to test that your code works well on all kinds of platforms.

GitHub Super Linter doesn't work any differently on other machine types so we just use a single machine type.

Next up, we will start defining the steps we want this workflow to have. We essentially have two steps:

1. Checkout the code
2. Run the super linter

On to checking out the code. To do this, we will use the official checkout action by GitHub.

We will set `fetch-depth: 0` to fetch all history for all branches and tags which is required for Super linter to get a proper list of changed files. If you hadn't done this, only a single commit would be fetched.  

We also give our step a name and tell it we want to use the action present in the GitHub repository at `actions/checkout@v3` .

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

This piece of code checks out your repository under `$GITHUB_WORKSPACE` which allows the rest of the workflow to access this repository. The repository we are checking out is the one where your code resides, ideally the same repository.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### How to Run the Linter

Now we'll add the step to run the linter since we have our code checked out. You can customize GitHub Super Linter using environment variables when running the action.

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

We will now talk about the environment variables which you will often be using with GitHub Super Linter as well as some examples.

- `VALIDATE_ALL_CODEBASE`: this decides whether Super Linter should lint the whole codebase or just the changes introduced with that commit. These changes are found out using `git diff`, but you can also change the search algorithm (but we will not be looking into this in this article). Example: `VALIDATE_ALL_CODEBASE: true`.
- `GITHUB_TOKEN`: As the name suggests, this is the value of the GitHub token. If you use this, GitHub will show up each of the linters you use (we will see how to do that soon) as separate checks on the UI. Example: In GitHub Actions you can use `GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}`.
- `DEFAULT_BRANCH`: The name of the repository default branch. Example: `DEFAULT_BRANCH: main`.
- `IGNORE_GENERATED_FILES`: In case you have any files which are generated by tools, you could mark them as `@generated`. If this environment variable is set to true, Super Linter ignores these files. Example: `IGNORE_GENERATED_FILES: true`.
- `IGNORE_GITIGNORED_FILES`: Excludes the files which are in .gitignore from linting. Example: `IGNORE_GITIGNORED_FILES: true`.
- `LINTER_RULES_PATH`: A custom path where any linter customization files should be. By default your files are expected to be at `.github/linters/`. Example: `LINTER_RULES_PATH: /`.

These are some of the environment variables you will use the most often, but none of the ones we've discussed yet talk about language-specific linting.

If you do not use any of the environment variables we talk about, Super Linter automatically finds and uses all the applicable linters for your codebase.

## How to Add Specific Linters to Super Linter

You will often only be interested in using specific linters for your projects. You can use the following environment variable pattern to add any linters you want:

```
VALIDATE_{LANGUAGE}_{LINTER}
```

You can find the naming conventions for these in the list of [Supported Linters](https://github.com/github/super-linter#supported-linters).

Here are a couple of examples, where we specify we want to use Black to lint all Python files, ESLint for JavaScript files, and HTMLHint for HTML files.

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

Once you set one of the linters to `true`, all the other linters will not run. In the above snippet, none of the linters except ESLint, Black, or HTMLHint will run.

However, in this example, we set a single linter to `false` so every linter except ESLint will run here:

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

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## How to Customize Lint Checks

Linters often use configuration files so you can modify the rules the linter uses. In the above two full length examples I showed, Super Linter will try to find any configuration files under `.github/linters/`.

These could be your `.eslintrc.yml` file used to configure ESLint, `.htmlhintrc` for configuring HTMLHint, and so on.

Here is an example of the configuration file if you use the Flake8 linter for Python:

```
[flake8]
max-line-length = 120
```

You save this at `.github/linters/.flake8`. You'll then use it while running the Flake8 linter. You can find an example of template configuration files you can use [here](https://github.com/github/super-linter/tree/main/TEMPLATES).

However, here are two examples of how you can modify this path:

1. All your linter configuration files are in some other directory

Add the directory path as an environment variable like this:

```yaml
LINTER_RULES_PATH: configs/
```

2\.   Add path for a configuration file

You can also hardcode a path for a specific linter as an environment variable. Here is an example:

```yaml
JAVASCRIPT_ES_CONFIG_FILE: configs/linters/.eslintrc.yml
```

## How to Run Super Linter Outside GitHub Actions

GitHub Super Linter was built to be run inside GitHub Actions. But running it locally or on other CI platforms can be particularly helpful. You will essentially be running Super Linter as you were locally in any other CI platforms.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### How to Run Super Linter Locally

You first want to pull the latest Docker container down from DockerHub with this command:

```shell
docker pull github/super-linter:latest
```

To run this container you then run the following:

```shell
docker run -e RUN_LOCAL=true -e USE_FIND_ALGORITHM=true VALIDATE_PYTHON_BLACK=true -v /project/directory:/tmp/lint github/super-linter
```

Notice a couple of things here:

- We run it with the `RUN_LOCAL` flag to bypass some of the GitHub Actions checks. This automatically sets `VALIDATE_ALL_CODEBASE` to true.
- We map our local codebase to `/tmp/lint` so that the linter can pick up the code.
- The way we set environment variables is of course different, but the overall process of running the GitHub Super Linter remains the same.

### How to Run Super Linter on Other CI Platforms

Running GitHub Super Linter on other CI platform is pretty similar to locally running it. Here is an example of running it in Azure Pipelines by [Tao Yang](https://blog.tyang.org/2020/06/27/use-github-super-linter-in-azure-pipelines/).

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

This just runs the commands we would have for locally running the Super Linter as a script. You could run it in the exact same way on other CI platforms.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## **Conclusion**

Thank you for sticking with me until the end. I hope that you've taken away a thing or two about linting and using GitHub Super Linter. It has most certainly been one of my favorite open source projects.

If you learned something new or enjoyed reading this article, please share it so that others can see it. Until then, see you in the next post!

You can also find me on Twitter [@rishit\_dagli](https://twitter.com/rishit_dagli), where I tweet about open source and machine learning.
