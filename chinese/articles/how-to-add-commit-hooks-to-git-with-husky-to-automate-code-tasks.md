> - 原文地址：[How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
> - 原文作者：[Colby Fayock](https://www.freecodecamp.org/news/author/colbyfayock/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/husky.jpg)

有很多工具可以使我们的代码任务自动化。我们可以用ESLint检查语法问题，用Prettier格式化我们的代码。

但并不是团队中的每个人都会记得每次提交时都要运行这些命令。我们如何使用Husky来添加Git钩子来为我们运行这些命令？

- [什么是 Git Hooks?](./#what-are-git-hooks)
- [什么是 Husky?](./#what-is-husky)
- [我们要构建什么？](./#what-are-we-going-to-build)
- [第0步：建立一个新的项目](./#step-0-setting-up-a-new-project)
- [第1步：将 Husky 安装到一个项目上](./#step-1-installing-husky-to-a-project)
- [第2步：配置Husky以运行Git钩子](./#step-2-configuring-husky-to-run-git-hooks)
- [第3步：使用Husky用Prettier格式化代码](./#step-3-using-husky-to-format-code-with-prettier)

<h2 id="what-are-git-hooks?>什么是 Git Hooks?</h2>

[Git hooks](https://git-scm.com/docs/githooks) 是你可以设置的脚本，以便在Git生命周期中 [在某些事件中运行](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)。这些事件包括提交的不同阶段，如提交前（pre-commit）和提交后（post-commit）。

这些都很有用，因为它们允许开发者运行自定义的代码任务，甚至通过自动化其他脚本来执行这些任务来执行标准。

<h2 id="what-is-husky?">什么是 Husky?</h2>

[Husky](https://github.com/typicode/husky)是一个工具，它允许我们轻松地处理Git Hooks 并在这些阶段运行我们想要的脚本。

> 它的工作原理是在我们的 `package.json` 文件中加入一个对象，配置 Husky 来运行我们指定的脚本。之后，Husky会管理我们的脚本将在Git生命周期的哪个阶段运行。

<h2 id="what-are-we-going-to-build?">我们要构建什么？</h2>

我们将建立一个简单的项目，用来测试Git Hooks。

虽然你应该能够跟上你正在使用的任何项目，但我将使用 [Next.js](https://nextjs.org/) 作为这个项目的起点，只是因为我们可以运行一个命令来启动项目。

关于这个项目，有一点需要注意的是，我们将使用 [Prettier](https://prettier.io/) 作为例子，说明你可以用 Git Hooks 做什么。

Prettier 是一个会自动为我们格式化代码的工具，如果你不期望它发生，就会造成很大的压力。跟随我使用 Next.js 项目，可以让你在不做任何无意改动的情况下测试一下。

至于测试Git Hooks，我们将从添加一个简单的命令行语句开始，看看 Husky 的工作。但我们还将测试添加Prettier，它将自动为我们格式化我们的代码。

最后，在写这篇文章的时候，Husky 发布了一个 [v5 Alpha](https://typicode.github.io/husky/#/) 版本的Git Hooks 解决方案。鉴于它还只是一个Alpha版本，我们将继续使用[v4](https://github.com/typicode/husky/tree/v4.3.0)，它允许我们用npm轻松安装 Husky 。

<h2 id="step-0-setting-up-a-new-project">第0步：建立一个新的项目</h2>

正如我所提到的，你可以按照同样的步骤来处理任何用`package.json`文件管理的项目。

Next.js对于本攻略来说绝对是多余的，但我们的目标是尽量减少实际使用Husky时的设置步骤。

要开始使用Next.js，请进入到你想启动项目的目录，并运行以下程序。:

```shell
yarn create next-app my-husky-project
# or
npx create-next-app my-husky-project
```

_注意：请随意将`my-husky-project`替换为你想命名的目录。_

这将创建一个新的文件夹，创建一个新的Next.js项目，并安装所有的依赖项。

![create-next-app](https://www.freecodecamp.org/news/content/images/2020/10/create-next-app.jpg)

一旦完成，进入到那个新的文件夹，我们就应该准备好了。

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/9e0b39c8f34c2755e074a32ef9de8d4047b68f67).

<h2 id="step-1-installing-husky-to-a-project">第1步：将 Husky 安装到一个项目上</h2>

要安装Husky，我们可以使用 yarn 或 npm。

```shell
yarn add husky
# or
npm install husky
```

_注意：如果此时安装 Husky 会安装v5 版，这意味着v5已经正式发布。请参阅 [更新 Husky 文档](https://typicode.github.io/husky/#/)，或者你可以在安装时指定husky@4.3.0（或任何最新的版本）来安装最新的v4版本。_

一旦软件包安装完毕，我们就应该准备好使用 Husky。

[伴随着提交的过程](https://github.com/colbyfayock/my-husky-project/commit/720728cd595d41c9197640bd4c48e9133bd7d956).

<h2 id="step-2-configuring-husky-to-run-git-hooks">第2步：配置Husky以运行Git钩子</h2>

接下来，我们要设置Husky，这样我们就可以使用它作为我们的Git hooks。

在我们的`package.json`文件中，创建一个名为`husky`的新属性，并设置一个空对象。

```json
"husky": {},
```

你可以在 `package.json` 文件中的任何地方添加这个属性，但我要把它添加到 `scripts` 属性的下面，这样我可以更容易地把它们放在一起管理。

在这里面，我们要添加另一个叫做 `hooks` 的属性，它也指定了一个空对象:

```json
"husky": {
  "hooks": {}
},
```

这就是我们要添加Git hooks 的地方。Husky 几乎支持[Git定义的所有Git钩子](https://git-scm.com/docs/githooks)，所以我们可以在Git事件流程中尽可能灵活地使用。

为了测试这一点，我创建了 [一个新的分支](https://github.com/colbyfayock/my-husky-project/tree/main+test)，在那里我添加了该页面上的所有Git hooks，包括一个简单地写入终端 `[Husky] 事件名称` 的脚本。

_注意：不要觉得你需要这样做，除非你很好奇。我们的目标是通过我的例子向你展示它是如何工作的。_

```json
"husky": {
  "hooks": {
    "applypatch-msg": "echo \"[Husky] applypatch-msg\"",
    "pre-applypatch": "echo \"[Husky] pre-applypatch\"",
    "post-applypatch": "echo \"[Husky] post-applypatch\"",
    "pre-commit": "echo \"[Husky] pre-commit\"",
```

这样做的目的是告诉Husky，在每一个Git hooks 的阶段，都要告诉我们!

当我提交这个改动时，我们可以立即看到 Husky 启动了我们的一些脚本。

![husky-commit-hooks](https://www.freecodecamp.org/news/content/images/2020/10/husky-commit-hooks.jpg)

这些都是Git允许我们在提交过程中钩住的所有事件。

同样，如果我把这些改动推送到Github，我可以看到推送过程中运行了`pre-push` hook!

![husky-push-hooks](https://www.freecodecamp.org/news/content/images/2020/10/husky-push-hooks.jpg)

你可能永远不会用到 Husky 和 Git 提供的大部分 hooks（我们在这两个命令之间只看到了几个）。

但能够看到这一点是非常棒的，无论是运行格式化我们的代码、防止秘密访问密钥被提交的代码，还是其他真正能够帮助你的工作流程自动化的重要任务。

我们现在可以看到，我们可以通过在`package.json`中指定配置和挂钩来配置Husky。

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/108583a7e96564baf0fac994eafa6cf98d65d03e).

_注意：如果你想查看我的分支，其中包括每一个用于测试的Git挂钩，[你可以在Github上找到它](https://github.com/colbyfayock/my-husky-project/tree/main+test)。_

<h2 id="step-3-using-husky-to-format-code-with-prettier">第3步：使用Husky用Prettier格式化代码</h2>

最后，对于一个真实世界的用例，我们要测试一下使用Prettier来自动格式化我们的代码。

Prettier是一个有固定风格的代码格式化工具，它允许你轻松地清理你的代码，使它看起来像一个人写的。

为什么像Prettier这样的工具很重要？当通过代码工作时，特别是与一个团队一起工作时，保持一致性是很重要的，这样每个人都知道应该期待什么。这将有助于防止在代码审查中为一个分号争论不休，但也有助于发现语法错误和防止错误。

_警告：运行 Prettier 会自动格式化你所有的代码。虽然我们要在提交修改前进行测试，但一旦你把它作为Git Hook应用，它就会自动完成这个过程。_

为了开始使用 Prettier，让我们用我们的软件包管理器安装它。:

```shell
yarn add prettier -D
# or
npm install prettier --save-dev
```

注意：我们将Prettier作为一个 `devDependency` 来安装，因为我们的应用程序不需要它来运行。

接下来，我们可以在我们的 `package.json` 中添加一个新的脚本，这将使我们更容易运行Prettier来进行测试。

在`scripts`属性里面，添加:

```json
"lint": "prettier --check ."
```

对于这第一个测试，我们将以 "检查 "的方式运行，这将允许我们看到哪些文件会发生变化。

运行以下内容:

```shell
yarn lint
# or 
npm run lint
```

而一旦我们这样做，我们可以看到，Prettier告诉我们，会改变列出的文件。

![prettier-check](https://www.freecodecamp.org/news/content/images/2020/10/prettier-check.jpg)

在这一点上，我们的代码将保持不变。但如果我们想真正运行Prettier来进行这些修改，我们可以先添加一个额外的脚本:

```json
"format": "prettier --write ."
```

而如果我们运行该脚本，它将更新所有这些文件，使代码的格式符合Prettier的规范。

_警告：只是另一个注意，运行Prettier来写修改，将在你的文件中进行修改。这些都是代码风格的改变，不应该影响代码的运行，而是影响代码的外观。在运行格式之前，你应该用Git提交来保存任何修改，这样你就可以在不满意的情况下轻松地恢复这些修改。

现在你可以用以下方式运行脚本:

```shell
yarn format
```

而我们可以看到，Prettier 更新了我们的文件!

![prettier-write](https://www.freecodecamp.org/news/content/images/2020/10/prettier-write.jpg)

现在是与本攻略相关的部分：我们可以把它作为一个Git hook加入。这样，当有人试图提交代码时，Prettier 会在代码被保存之前运行。这意味着我们将始终保持代码与Prettier的格式化风格一致。

在我们的Husky hook 配置里面，让我们添加:

```json
"husky": {
  "hooks": {
    "pre-commit": "prettier --write . && git add -A ."
  }
},
```

如果你注意到在我们的预提交 hook，我们也加入了`git add -A .`。

当Husky运行时，它只是运行提供的脚本。当运行我们的 Prettier 命令时，我们只是对代码进行格式化，但我们从未将这些修改作为过程的一部分来保存。所以我们使用`git add`来存储所有这些修改，并将其纳入提交。

To test this out, I reverted the changes to all of the files that were formatted before. If you’re following along with the same project, you can run:

```shell
git checkout pages
```

这将重置 `pages` 中的所有修改，使之成为最后一次提交。

现在，让我们试着用Git添加所有的文件并提交修改。

![git-commit-husky-precommit-prettier](https://www.freecodecamp.org/news/content/images/2020/10/git-commit-husky-precommit-prettier.jpg)

一旦我们运行提交命令，我们可以看到 Husky 的预提交 hook 已经启动，并且格式化了我们的代码。

[跟随提交](https://github.com/colbyfayock/my-husky-project/commit/315112d062a791f20eda11f9c608c5fa794ba73e).

## 我接下来能做什么？

### 使用linet-staged，只对更改过的文件运行格式化。

我们在预提交 hook 中使用Prettier，并指定`.`，这意味着它每次都会在所有文件上运行。

我们可以使用一个叫做[lint-staged](https://github.com/okonet/lint-staged)的工具，它允许我们仍然用Husky来运行我们的Git钩子，但它只会运行在已经提交的文件上。

例如，如果我们想用Husky和Prettier来做这件事，我们的配置:

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

作为 `lint-staged` 运行方式的一部分，它将自动为我们把更改的文件附加到我们的 Prettier 语句的末尾。

你也会注意到我们没有包括`git add`，lint-staged也会为我们自动添加任何变化到Git上。

### 设置一个Prettier配置来定制格式化规则

Prettier 是非常固定风格的 。有一些东西我个人并不喜欢，你可能也有同样的感觉。

幸运的是，Prettier允许你设置一个配置文件，可以覆盖其中的一些文件，使你的代码只是你和你的团队想要的方式。

### 告诉Prettier用.prettierignore来忽略文件

你也可能不希望Prettier运行在 **所有的东西** 上（也许你想）。

Prettier允许你在项目根目录下的`package.json`旁边设置一个`.prettierignore`文件，类似于`.gitignore`，它允许你告诉Prettier不应该处理哪些文件。

 [![Follow me for more Javascript, UX, and other interesting things!](https://res.cloudinary.com/fay/image/upload/w_2000,h_400,c_fill,q_auto,f_auto/w_1020,c_fit,co_rgb:007079,g_north_west,x_635,y_70,l_text:Source%20Sans%20Pro_64_line_spacing_-10_bold:Colby%20Fayock/w_1020,c_fit,co_rgb:383f43,g_west,x_635,y_6,l_text:Source%20Sans%20Pro_44_line_spacing_0_normal:Follow%20me%20for%20more%20JavaScript%252c%20UX%252c%20and%20other%20interesting%20things!/w_1020,c_fit,co_rgb:007079,g_south_west,x_635,y_70,l_text:Source%20Sans%20Pro_40_line_spacing_-10_semibold:colbyfayock.com/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_68,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_145,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_222,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_295,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/v1/social-footer-card)](https://twitter.com/colbyfayock)

- [在Twitter 关注我](https://twitter.com/colbyfayock)
- [订阅我的 Youtube 频道](https://youtube.com/colbyfayock)
- [✉️ 注册订阅我的 Newsletter](https://www.colbyfayock.com/newsletter/)
- [赞助我](https://github.com/sponsors/colbyfayock)
