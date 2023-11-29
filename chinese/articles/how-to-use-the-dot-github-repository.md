> -  原文地址：[How to Use the .github Repository](https://www.freecodecamp.org/news/how-to-use-the-dot-github-repository/)
> -  原文作者：[Anish De](https://www.freecodecamp.org/news/author/anishde12020/)
> -  译者：ProjektMing
> -  校对者：

![如何使用 .github 存储库](https://www.freecodecamp.org/news/content/images/size/w2000/2021/12/Thumbnail.png)

GitHub 拥有许多特殊的储存库[^1]。比如，你可以创建一个与你用户名相匹配的库，添加 README 文件，其包含的所有信息都将在你的 GitHub 个人资料中可见。

你或许很早就对经常出现在各种库的 `.github` 目录熟视无睹了，而 `.github` 目录中安置了工作流（Workflow）、议题模板（Issue Template）、拉取请求模板（Pull Request Template）、资助信息（Funding Information）及其他文件，它们在项目中起特殊的作用。

但另一个你能创建的特殊储存库却是 `.github` 储存库。它的作用是为你那些实质上没有 `.github` 目录的库提供默认的议题模板及其他社区健康文件[^2]。

For example, say I have a repository named `.github` with generic bug report and feature request issue templates. And say I create another repository called `new-project`, but I don't add a `.github` directory with issue templates to it.
举个例子，假如说我有一个名为 `.github` 的储存库，其中包含通用的故障报告（bug report）和功能请求的议题模板（feature request issue template）。然后再建

Then if someone goes to the `new-project` repo and opens an issue, they'll be presented with an option to choose from the generic templates already in the `.github` directory.

Similarly, if I add a code of conduct to my `.github` repository, it will be shown across all my repositories that don't explicitly have one.

Just note that the files inside a repository's `.github` directory will be chosen over the ones in the `.github` directory. For example, if my `new-project` repo has a `.github` directory with a feature request issue template inside, that will be used instead of the generic feature request template from the `.github` repo.

Let's see how this special repository works in action.

## How to Use .github on Personal GitHub Accounts

Creating this special repository is as easy as creating any other repository on GitHub. So go ahead and open GitHub on your web browser and create the repository like this:

![Xo__mfEdt](https://www.freecodecamp.org/news/content/images/2021/12/Xo__mfEdt.png)

Creating a .github repository on my personal GitHub account

After you're done creating the repository, you can start adding files to it. The first file I will add is a bug report issue form. I am not going to go over the details of creating an issue form in this article, but you can have a look at a [previous article I wrote about GitHub Issue forms](https://blog.anishde.dev/creating-a-bug-report-form-in-github).

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

Bug Report Issue form code

I am also going to create a feature request form.

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

Feature Request Issue Form code

I am also going to be adding a pull request template.

`.github/pull_request_template.md`

```md
<!-- 
Thanks for creating this pull request 🤗

Please make sure that the pull request is limited to one type (docs, feature, etc.) and keep it as small as possible. You can open multiple prs instead of opening a huge one.
-->

<!-- If this pull request closes an issue, please mention the issue number below -->
Closes # <!-- Issue # here -->

## 📑 Description
<!-- Add a brief description of the pr -->

<!-- You can also choose to add a list of changes and if they have been completed or not by using the markdown to-do list syntax
- [ ] Not Completed
- [x] Completed
-->

## ✅ Checks
<!-- Make sure your pr passes the CI checks and do check the following fields as needed - -->
- [ ] My pull request adheres to the code style of this project
- [ ] My code requires changes to the documentation
- [ ] I have updated the documentation as required
- [ ] All the tests have passed

## ℹ Additional Information
<!-- Any additional information like breaking changes, dependencies added, screenshots, comparisons between new and old behavior, etc. -->
```

Pull Request Template code

The last file I am going to be adding is a code of conduct – but this is going to be on the root of the repository. Despite that, this will work as intended (code of conduct files are usually kept on the root of the repository). Note that I am using the [Contributor Convent](https://www.contributor-covenant.org/) convention.

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

Contributor Convent CODE OF CONDUCT v2.1 in markdown

We can add more files like funding information, contributing guides, and much more. For more information, you can look at the [GitHub docs regarding community health files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)

### The `.github` repository in action

My [blogs repository](https://github.com/AnishDe12020/blog) doesn't have any issue templates, code of conduct, or any other file except for the markdown files of my blogs and a README. So it's the best repository to test upon if this feature is working or not.

I can already see the code of conduct appearing here:

![4Dk1gl1ZS](https://www.freecodecamp.org/news/content/images/2021/12/4Dk1gl1ZS.png)

If I try to create an issue, I am presented with the templates as well:

![5fqH-4IYX](https://www.freecodecamp.org/news/content/images/2021/12/5fqH-4IYX.png)

This will also work when creating a pull request.

## How to Use the .github Repository for an Organization/Public Account

The `.github` repository on an organization account works just like the `.github` repository on a personal GitHub account – except there is one difference.

Organizations can also have profile READMEs that show up on the organization page on GitHub. This README resides on the `profile` directory of the organization's `.github` repository. To demonstrate this, I will quickly create a demo organization.

When creating the `.github` repository for an organization, you should get this message:

![s2QEAhtHG-1](https://www.freecodecamp.org/news/content/images/2021/12/s2QEAhtHG-1.png)

Also when adding the profile README to `profile/README.md`, you should be getting this message:

![vf0IEmbTH-1](https://www.freecodecamp.org/news/content/images/2021/12/vf0IEmbTH-1.png)

Creating a GitHub organization README

Now, I am going to add some content to that README file and commit it. When I visit the organization's home page this is what we should see:

![svqbJ3PfG](https://www.freecodecamp.org/news/content/images/2021/12/svqbJ3PfG.png)

Seeing GitHub organization profile README contents on the organization page

## Conclusion

I hope you now know what the `.github` repository does. You should also know how to set up default community health files for your repositories and a profile README for your organization.

Feel free to reach out to me on [Twitter](https://twitter.com/AnishDe12020) and have a nice day 😃

### Resources

-   [GitHub Documentation on Community Health Files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
-   [My `.github` repository](https://github.com/AnishDe12020/.github)
-   [My test organization's `.github` repository](https://github.com/AnishDe12020-test/.github)
-   [Contributor Convent](https://www.contributor-covenant.org/)
-   [Article on getting started with GitHub issue forms](https://blog.anishde.dev/creating-a-bug-report-form-in-github)

I am currently working on a project called DevKit which is a PWA that will house developer tools in one single application and provide ways to get your work done quickly. Do check it out at [https://www.devkit.one/](https://www.devkit.one/).

[^1]: 译注：Repository，也可称为“仓库”或“库”， GitHub 的官方文档中也经常混用，“储存库”的含义会更符合。然而为了行文方便，本文也会多次使用“库”来指代。
[^2]: 翻译来源于[此](https://docs.github.com/zh/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
