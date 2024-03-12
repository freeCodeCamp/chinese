> -  原文地址：[How to Use the .github Repository](https://www.freecodecamp.org/news/how-to-use-the-dot-github-repository/)
> -  原文作者：[Anish De](https://www.freecodecamp.org/news/author/anishde12020/)
> -  译者：ProjektMing
> -  校对者：

![如何使用 .github 存储库](https://www.freecodecamp.org/news/content/images/size/w2000/2021/12/Thumbnail.png)

GitHub 拥有许多特殊的储存库[^1]。比如，你可以创建一个与你用户名相匹配的库，添加 README 文件，其包含的所有信息都将在你的 GitHub 个人资料中可见。

你或许很早就对经常出现在各种库的 `.github` 目录熟视无睹了，而 `.github` 目录中安置了工作流（Workflow）、议题模板（Issue Template）、拉取请求模板（Pull Request Template）、资助信息（Funding Information）及其他文件，它们在项目中起特殊的作用。

但另一个你能创建的特殊储存库却是 `.github` 储存库。它的作用是为你那些实质上没有 `.github` 目录的库提供默认的议题模板及其他社区健康文件[^2]。

举个例子，假如说我有一个名为 `.github` 的储存库，其中包含通用的故障报告（Bug Report）和功能请求的议题模板（Feature Request Issue Template）。然后再建另一个名为 `new-project` 的库，但没为 `.github` 目录添加议题模板。

那么当有人看到这个 `new-project` 库并打开一个议题时，它将看到一个选项用来选择 `.github` 储存库的同名目录中[^3]已有的通用模板。

同样的，当我为我的 `.github` 库中添加行为准则(Code of Conduct)后，它将在我所有未明确规定过的库中展示出来。

请注意，相对于 `.github` 储存库中的文件，当前储存库会优先选择自己 `.github` 目录中的那份文件。比如说，当我 `new-project` 库的 `.github` 目录中有功能请求的议题模板时， `.github` 库中的那份就不会被展示出来。

让我们看看这些特殊的储存库是如何运作的吧。

## 如何在私人 GitHub 账号中使用 .github

在 GitHub 上，创建特殊的储存库同创建其他库一样简单。所以打开浏览器，登上 GitHub，像这样创建一个储存库：

![Xo__mfEdt](https://www.freecodecamp.org/news/content/images/2021/12/Xo__mfEdt.png)

在我的 GitHub 账号里创建 .github 储存库中。

完成后，你可以开始往里添加文件。我要加的第一个文件是故障报告表单（Bug Report Issue Form）发放表格。我并不准备详细地讲表格的详情，不过你可以浏览我[先前有关 GitHub 表单的文章](https://blog.anishde.dev/creating-a-bug-report-form-in-github)。

`.github/ISSUE_TEMPLATE/bug_report.yml`

```yml
name: 🐛Bug Report
description: File a bug report here
title: "[BUG]: "
labels: ["bug"]
assignees: ["AnishDe12020"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report 🤗
        Make sure there aren't any open/closed issues for this topic 😃
        
  - type: textarea
    id: bug-description
    attributes:
      label: Description of the bug
      description: Give us a brief description of what happened and what should have happened
    validations:
      required: true
      
  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: Steps To Reproduce
      description: Steps to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. Scroll down to '...'
        4. See error
    validations:
      required: true
  - type: textarea
    id: additional-information
    attributes:
      label: Additional Information
      description: |
        Provide any additional information such as logs, screenshots, likes, scenarios in which the bug occurs so that it facilitates resolving the issue.
```

故障报告表单代码

我还打算创建一份功能请求表单。

`.github/ISSUE_TEMPLATE/feature_request.yml`

```yml
name: ✨Feature Request
description: Request a new feature or enhancement
labels: ["enhancement"]
title: "[FEAT]: "
body:
  - type: markdown
    attributes:
      value: |
        Please make sure this feature request hasn't been already submitted by someone by looking through other open/closed issues
  
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Give us a brief description of the feature or enhancement you would like
    validations:
      required: true
      
  - type: textarea
    id: additional-information
    attributes:
      label: Additional Information
      description: Give us some additional information on the feature request like proposed solutions, links, screenshots, etc.
```

功能请求表单代码

我要再加一份拉取请求模板。

`.github/pull_request_template.md`

```md
<!-- 
感谢你的拉取请求 🤗

请确保拉取请求被限定在一个类中（文档或功能之类的），而且让它尽可能地小。你可以开多个 pr(Pull Request, 拉取请求) 而不是单开一个很大的。
-->

<!-- 如果这个拉取请求关闭了议题，请在下面提及 -->
Closes # <!-- 对应议题的序号 -->

## 📑 描述
<!-- 为 pr 添加一个可信的描述-->

<!-- 你也可以选择用 markdown 的 to-do list 格式列出一系列变更来标记是否完成- [ ] 未完成
- [x] 已完成
-->

## ✅ 检查
<!-- 确保你的 pr 通过了 CI(Continuous Integration, 持续集成) 检查,并且根据需要选择以下选项 - -->
- [ ] 我的拉取请求符合本项目的代码风格
- [ ] 我的代码需要修改文档
- [ ] 我已按要求更新了文件
- [ ] 所有测试均已通过

## ℹ 补充信息
<!-- 任何补充信息，像破坏性更新（Breaking Change）、依赖添加（Dependency Added）、截图（Screenshot）和新旧行为的对比等等 -->
```

拉取请求模板代码

我要加的最后一个文件是行为准则————不过它要放在库的根目录下。尽管如此，它也能正常工作（行为准则通常都被保存在根目录下）。注意，我在使用的是 [Contributor Convent](https://www.contributor-covenant.org/) 公约。

`CODE_OF_CONDUCT.md`

```md

# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual
identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall
  community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of
  any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address,
  without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of
actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or permanent
ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the
community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][Mozilla CoC].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
[https://www.contributor-covenant.org/translations][translations].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
[Mozilla CoC]: https://github.com/mozilla/diversity
[FAQ]: https://www.contributor-covenant.org/faq
[translations]: https://www.contributor-covenant.org/translations
```

Markdown 格式下的 Contributor Convent 行为准则 v2.1

我们还可以添加更多文件，像资助信息、贡献指南(Contributing Guide)等。你可以在 [GitHub 文档](https://docs.github.com/zh/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) 中获取更多信息。

### `.github` 库实践

我的 [blog 库](https://github.com/AnishDe12020/blog)并没有任何议题模板、行为准则或其他文件，除了记录了我博客的 markdown 文件和一篇 README。所以这是用来测试这些功能(feature)是否起作用的绝佳储存库。

我已经可以看到行为准则在这里出现了：

![4Dk1gl1ZS](https://www.freecodecamp.org/news/content/images/2021/12/4Dk1gl1ZS.png)

如果我尝试去创建议题，也会收到模板：

![5fqH-4IYX](https://www.freecodecamp.org/news/content/images/2021/12/5fqH-4IYX.png)

在拉取请求时也起作用了。

## 如何将 .github 储存库用于组织或公共账号

在组织账号中的 `.github` 储存库就像在它个人账号中那样————只有一处区别。

组织也可以在 GitHub 上拥有 README 资料，他将展示在组织页面上。这个 README 位于组织 `.github` 储存库的 `profile` 目录下。为了展示，我将快速地建一个演示组织。

当为组织创建 `.github` 储存库时，你应该会得到如下消息：

![s2QEAhtHG-1](https://www.freecodecamp.org/news/content/images/2021/12/s2QEAhtHG-1.png)

同样的，当你给 `profile/README.md` 添加内容时，你也应该会受到这样的消息：

![vf0IEmbTH-1](https://www.freecodecamp.org/news/content/images/2021/12/vf0IEmbTH-1.png)

为 GitHub 组织创建 README 中

现在，我准备向 README 里加一些内容并提交。当我访问组织首页时，我们应当看到下面内容：

![svqbJ3PfG](https://www.freecodecamp.org/news/content/images/2021/12/svqbJ3PfG.png)

在查看为组织页面写的 GitHub 组织资料 README 中

## 总结

我希望你现在知道了 `.github` 储存库到底是什么。你也应该明白如何为你的库创建默认社区健康文件还有如何为你的组织添加 README 资料。

请随意通过 [Twitter](https://twitter.com/AnishDe12020) 联系我。祝你有美好的一天😃

### 资源

-   [GitHub 文档中关于社区健康文件的内容](https://docs.github.com/zh/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
-   [我的 `.github` 储存库](https://github.com/AnishDe12020/.github)
-   [我测试组织的 `.github` 储存库](https://github.com/AnishDe12020-test/.github)
-   [Contributor Convent](https://www.contributor-covenant.org/)
-   [有关如何使用 GitHub 议题表单的文章](https://blog.anishde.dev/creating-a-bug-report-form-in-github)

我最近在开发一个叫 DevKit 的项目，这是一个渐进式 Web 应用，它将开发者工具整合在一个应用中，且让你的工作更快地完成。一定要来看看 [https://www.devkit.one/](https://www.devkit.one/) 。

[^1]: 译注：Repository，也可称为“仓库”或“库”， GitHub 的官方文档中也经常混用，“储存库”的含义会更符合。然而为了行文方便，本文也会多次使用“库”来指代。
[^2]: 翻译来源于[此](https://docs.github.com/zh/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
[^3]: 原文为 already in the .github directory ，我认为直接放在文中不合理，故修改。请注意！后文同样预设你已知要将文件放在同名库的 `.github` 目录下！
