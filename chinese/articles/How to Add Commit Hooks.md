> -   原文地址：[How to Add Commit Hooks to Git with Husky to Automate Code Tasks 如何通过 Git 和 Husky 添加提交钩子并实现代码任务自动化 🧐](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
> -   原文作者：Colby Fayock
> -   译者：@nsuedu
> -   校对者：

![How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/husky.jpg)

**有很多工具可以使我们的代码任务自动化:我们可以使用 ESLint 检查语法问题，并使用 Prettier 格式化代码**

但是并不是团队中的每个人都记得每次提交时都运行这些命令。 如果有一个工具可以在每次提交/推送代码前自动检查及格式化代码就好了--答案是 Husky！ 那如何通过 Husky 并添加 Git Hooks 来自动运行代码检查等任务呢？


- [什么是 Git Hooks?](#什么是-git-hooks)
- [什么是 Husky?](#什么是-husky)
- [我们要构建什么?](#我们要构建什么)
- [step 0: 初始化一个新的前端项目](#step-0-初始化一个新的前端项目)
- [step 1: 安装 Husky 到项目中](#step-1-安装-husky-到项目中)
- [step 2: 配置 Husky 以便运行 Git hooks](#step-2-配置-husky-以便运行-git-hooks)
- [step 3: 使用 Husky 启动 Prettier 的代码格式化任务](#step-3-使用-husky-启动-prettier-的代码格式化任务)
  - [我们接下来可以做什么?](#我们接下来可以做什么)
  - [安装 Prettier 并自定义代码格式化规则](#安装-prettier-并自定义代码格式化规则)
  - [通过 .prettierignore 告诉 Prettier 忽略哪些文件](#通过-prettierignore-告诉-prettier-忽略哪些文件)

[![how to](https://res.cloudinary.com/marcomontalbano/image/upload/v1607329948/video_to_markdown/images/youtube--tuzys2b1J70-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/tuzys2b1J70 'how to')

## 什么是 Git Hooks?

[Git hooks][1]是可以设置在 Git 生命周期的[在某些事件下运行][2]的脚本。 这些事件包括提交的不同阶段，例如在提交之前（pre-commit,提交之后（post-commit）。

这些功能非常有用，因为它们允许开发人员运行自定义代码任务，甚至运行其他自动化脚本来执行合适的代码规范及标准

## 什么是 Husky?

[Husky][3]是一种工具:让我们可以轻松地接入 Git hooks ，并在我们需要的某些阶段运行脚本。

它的工作方式是在`package.json`文件中包含一个对象，该对象通过配置 Husky 来运行我们指定的脚本。 之后，Husky 负责管理我们的脚本(hooks 将在 Git 生命周期中的哪一点运行)

## 我们要构建什么?

为了练习/测试 Git hooks 的作用,我们将建立一个简单的项目。

虽然你可以在自己的任意项目中进行练习，但为了方便，我将基于[Next.js][4]创建一个项目(仅仅是因为可以运行一个启动项目的命令 😅),跟我一起使用 Next.js 项目能使你方便地进行练习，而无需进行任何无意的更改。

不过，最终的实战练习是以[Prettier][5]作为示例来说明如何使用 Git hooks。

Prettier 是一种可以自动设置代码格式的工具，如果你不希望这样的话，可能会造成很大的压力。

至于测试 Git hooks，我们首先添加一个简单的命令行语句以查看 Husky 的工作流程。之后，我们还将添加 Prettier 的功能，该功能将自动为我们设置代码格式。

最后，在撰写此文章时，Husky 发布了它们的 Git hooks 解决方案的[v5 Alpha][6]版本。鉴于它只是 Alpha 版本，我们将继续使用[v4][7]--我们可以通过 npm 安装 Husky。

## step 0: 初始化一个新的前端项目

正如我刚才提到的，对于由`package.json`文件管理的任何项目，你实际上都可以按照文章中相同的步骤进行操作练习。

Next.js 对于本演练绝对是过大了，但使用 Next.js 的目的是最大程度地减少项目配置以及与 Husky 一起使用的步骤。

如果要使用 Next.js，请进入一个空的文件目录，然后运行以下命令:

```shell
yarn create next-app my-husky-project
# or
npx create-next-app my-husky-project
```

注意：你可以将`my-husky-project`替换为你要命名的目录。

以上的命令将创建一个新文件夹，同时创建一个新的 Next.js 项目，并安装所有依赖项。

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/create-next-app.jpg" />
    <figcaption>create-next-app.jpg</figcaption>
</figure>

安装完成后，进入对应文件夹，我们就可以开始了！

[点击查看项目初始代码][8].

## step 1: 安装 Husky 到项目中

安装 Husky, 你可以使用 yarn 或 npm.

```shell
yarn add husky
# or
npm install husky
```

注意: 如果此时安装 Husky 显示 v5，则表示 v5 已正式发布。 请参阅[updated Husky documentation][9]，或在安装时通过指定 husky@4.3.0（或任何最新版本）来安装最新的 v4 版本。

安装完成后，我们就可以与 Husky 一起"愉快地玩耍了"。

[点击查看安装 Husky 之后的代码][10].

## step 2: 配置 Husky 以便运行 Git hooks

接下来，我们配置 Husky 以便运行 Git hooks。

在我们的`package.json`文件中，使用一个空对象创建一个名为`husky`的新属性

```json
"husky": {},
```

你可以在`package.json`文件中的任意位置添加此代码，但是我将其添加到`scripts`属性的正下方，这样我可以更方便地管理它们。

在其中，我们要添加另一个名为`hooks`的属性，该属性还是一个空对象

```json
"husky": {
  "hooks": {}
},
```

`hooks`对象就是我们要添加 Git hooks 的地方。 Husky 几乎支持[所有被 Git 定义的 Githooks][11]

为了测试这一点，我创建了一个[新分支][12] 并添加了一些 Git hooks，其作用是打印出`[Husky] 事件名称`。

注意：除非你想动手实践一下，否则不需要跟我一起做。 建立此分支的目的只是通过我的示例向你展示其工作方式

```js
“husky”: {
  “hooks”: {
    “applypatch-msg”: “echo \”[Husky] applypatch-msg\””,
    “pre-applypatch”: “echo \”[Husky] pre-applypatch\””,
    “post-applypatch”: “echo \”[Husky] post-applypatch\””,
    “pre-commit”: “echo \”[Husky] pre-commit\””,
  }
}
```

上面的代码目的是告诉 Husky-我们允许 hook 进入 Git 的每一个阶段，并在 hook 被触发后告知我们！

当我提交更改时，我们可以立即看到 Husky 触发了一些脚本

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/husky-commit-hooks.jpg" />
    <figcaption>husky-commit-hooks.jpg</figcaption>
</figure>

上图展示了在提交过程中一些 Git 事件。

同样，如果我将这些更改推送到 Github，也可以看到推送过程运行了`pre-push`钩子！

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/husky-push-hooks.jpg" />
    <figcaption>husky-push-hooks.jpg</figcaption>
</figure>

你可能永远不会使用 Husky 和 Git 提供的其他大多数钩子（因为在这两个命令之间我们只需要使用一些最常用的）。

但是，无论是

-   自动运行代码格式化脚本，
-   防止通过 commit 访问密钥
-   帮助完成工作流程中的其他重要任务

我们都能看到它的强大之处。

现在我们初步了解了可以 在`package.json`设置`hooks`和其他特定的设置 来配置 Husky

[点击查看此步骤的代码][13].

注意：如果你想要验证每个 Git hook 的效果，可以参考下面的代码

[you can find it on Github][14].

## step 3: 使用 Husky 启动 Prettier 的代码格式化任务

最后，该到真实的工作场景中大展拳脚了，我们将使用 Prettier 来自动格式化代码。

Prettier 是一种代码格式化工具，可方便得清理开发者的代码，使代码看起来像一个人编写的。

为什么像 Prettier 这样的工具很重要？ 在编写代码时，尤其是与团队合作时，保持一致性很重要，这样每个人都知道会发生什么。 这将有助于防止在代码审查中争论是否应该加分号，也将有助于捕获语法错误并防止错误。

警告：运行 Prettier 将自动格式化所有代码。 虽然我们将在提交更改之前对其进行测试，但是一旦将其用作 Git Hook，它将自动执行此过程。

要使用 Prettier，先使用 yarn 或 npm 进行安装:

```shell
yarn add prettier -D
# or
npm install prettier --save-dev
```

注意:由于生产环境不需要运行 Prettier，因此我们将 Prettier 安装为`devDependency`。

接下来，我们可以在`package.json`中添加一个新脚本，这可以使 Prettier 测试变得更加容易。

在`scripts`属性内，添加:

```json

"lint": "prettier --check ."

```

对于上面的代码，我们将其作为一个“文件格式检查”来运行，这将使我们看到哪些文件需要更改，以便符合 Prettier 的代码规范。

运行以下命令:

```shell
yarn lint
# or
npm run lint
```

执行完成后，我们可以看到 Prettier 告诉我们格式化需要更改哪些文件

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/prettier-check.jpg" />
    <figcaption>prettier-check.jpg</figcaption>
</figure>

此时，我们的代码保持不变。 如果我们想要 Prettier 进行自动进行格式化更改，我们还要添加一个附加脚本

```json
"format": "prettier --write ."
```

如果我们运行上面的脚本，它将更新所有需要格式化的文件(会按照 Prettier 的规范格式化代码）。

警告：另外，运行 Prettier 写入更改将对文件内容进行更改。 这些都是代码样式的更改，这些更改不会影响代码的运行方式，但会影响代码的外观(排列布局)。 在运行格式化之前，你应该通过提交 Git 来保存所有更改，以便在对更改不满意的情况下可以轻松地还原更改

运行下面的命令:

```shell
yarn format
```

可以看到 Prettier 修改了我们的文件!

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/prettier-write.jpg" />
    <figcaption>prettier-write.jpg</figcaption>
</figure>

现在，我们可以将 Prettier 添加为 Git hook。 这样，当有人尝试提交代码时，Prettier 将在代码提交之前运行。 这意味着我们的代码格式与 Prettier 的格式规范始终保持一致。

在我们的 Husky hooks 配置中，添加以下代码:

```json
"husky": {
  "hooks": {
    "pre-commit": "prettier --write . && git add -A ."
  }
},
```

可以在 pre-commit hook 中注意到，我们还添加了`git add -A`

因为

1. 当 Husky 运行时，它仅运行提供的脚本。
2. 在运行 Prettier 命令时，仅格式化代码，但未将这些更改提交到暂存区。
3. 因此，当代码格式化完成后， 可以使用 `git add` 将被更改的文件提交到暂存区。

为了测试这一点，我将还原代码文件到未格式化之前的状态。 如果你跟我是同一项目，则可以运行:

```shell
git checkout pages
```

上面的命令会将 git 仓库中的所有更改重置为上一次提交。

现在，让我们尝试通过 Git 添加所有文件并提交更改

<figure style="text-align: center">
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/git-commit-husky-precommit-prettier.jpg" />
    <figcaption>git-commit-husky-precommit-prettier.jpg</figcaption>
</figure>

一旦运行 commit 命令，我们可以看到 Husky pre-commit hook 已经触发并格式化了我们的代码!

### 我们接下来可以做什么?

使用 lint-staged 仅对已被修改的文件做格式化
在之前的示例中， 我们在 pre-commit hook 中使用 Prettier，并指定`.`，这意味着它会运行所有文件。

我们可以使用一个称为[lint-staged][16]的工具，该工具仍允许我们使用 Husky 运行 Git hooks，但它只能在已暂存的文件上运行。

例如，如果我们想使用 Husky 和 Prettier 进行此操作，我们的配置可能看起来像下面这样:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*": "prettier --write"
},

```

你可能会注意到，我们没有包含`git add`。 因为 lint-staged 会自动添加已修改的文件到 git 暂存区

### 安装 Prettier 并自定义代码格式化规则

Prettier 很死板/武断(格式化代码规范必须与 Prettier 保持一致)。

幸运的是，Prettier 允许你设置一个配置文件，这可以覆盖 Prettier 的一些默认配置，从而按照你和团队的代码规范来格式化代码。

### 通过 .prettierignore 告诉 Prettier 忽略哪些文件

你可能也不希望 Prettier 对“所有文件”进行代码格式化。

Prettier 允许你在`package.json`的同级目录内设置`.prettierignore`文件，类似于`.gitignore`，它可以告诉 Prettier 不运行哪些文件

译者注:
[Prettier 看这一篇就行了](17)

[1]: https://git-scm.com/docs/githooks
[2]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
[3]: https://github.com/typicode/husky
[4]: https://nextjs.org/
[5]: https://prettier.io/
[6]: https://typicode.github.io/husky/#/
[7]: https://github.com/typicode/husky/tree/v4.3.0
[8]: https://github.com/colbyfayock/my-husky-project/commit/9e0b39c8f34c2755e074a32ef9de8d4047b68f67
[9]: https://typicode.github.io/husky/#/
[10]: https://github.com/colbyfayock/my-husky-project/commit/720728cd595d41c9197640bd4c48e9133bd7d956
[11]: https://git-scm.com/docs/githooks
[12]: https://github.com/colbyfayock/my-husky-project/tree/main+test
[13]: https://github.com/colbyfayock/my-husky-project/commit/108583a7e96564baf0fac994eafa6cf98d65d03e
[14]: https://github.com/colbyfayock/my-husky-project/tree/main+test
[15]: https://github.com/colbyfayock/my-husky-project/commit/315112d062a791f20eda11f9c608c5fa794ba73e
[16]: https://github.com/okonet/lint-staged
[17]: https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true
