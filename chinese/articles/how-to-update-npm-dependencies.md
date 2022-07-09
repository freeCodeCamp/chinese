> - 原文地址：[How to Update NPM Dependencies](https://www.freecodecamp.org/news/how-to-update-npm-dependencies/)
> - 原文作者：[Natalie Pina](https://www.freecodecamp.org/news/author/natalie/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Update NPM Dependencies](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/deps.png)

Node 软件包管理器（npm）提供了各种功能来帮助你安装和维护项目的依赖关系。

由于错误修复、新功能和其他更新，依赖关系可能会随着时间的推移而变得过时。你的项目依赖越多，就越难跟上这些更新。

老旧的软件包会对安全构成威胁，并会对性能产生负面影响。最新的软件包可以防止出现漏洞。这意味着定期的依赖性检查和更新是很重要的。

## 如何保持依赖关系的最新

现在，你可以逐一查看 package.json 中的每一个单独的包，改变版本，然后运行`npm install <package>@latest`来获得最新版本。但这并不是最有效的方法。

想象一下，如果你有 20 个或更多的包，可以使用版本升级。相反，你应该制定一个工作流程，在过期的依赖关系数量增加和升级变得越来越难之前，定期检查新版本。

下面是一个我保持更新的工作流程：首先，发现哪些软件包需要更新，以及版本落后的程度。接下来，选择单独或一起批量更新软件包。始终对更新进行测试，以确保没有发生破坏性变化。

我更喜欢单独执行主要版本的更新。对于主要的更新，你很可能会遇到破坏性的变化。与许多包相比，撤销或处理与一个包有关的代码变化要容易得多。

在这篇文章中，我将详细介绍检查和升级依赖关系的方法。

## 怎样使用 `npm outdated` 命令

```shell
npm outdated
```

该命令将检查每个已安装的依赖关系，并将当前版本与 [npm registry](https://www.npmjs.com/) 中的最新版本进行比较。它在终端打印出一个表格，概述了可用的版本。

它是内置在 npm 中的，所以不需要下载额外的软件包。`npm outdated`是一个很好的开始，可以了解所需的依赖性更新的数量。

![Screen-Shot-2022-07-03-at-1.14.41-PM](https://www.freecodecamp.org/news/content/images/2022/07/Screen-Shot-2022-07-03-at-1.14.41-PM.png)

- `Current` 是当前安装的版本。
- `Wanted` 是根据[semver](https://docs.npmjs.com/misc/semver) 范围内的软件包的最大版本。
- `Latest` 是在 npm registry 中被标记为最新的软件包版本。
使用这种方法，要安装每个软件包的更新，你只需要运行:

```shell
npm update
```

请记住，使用`npm update`它永远不会更新到一个主要的,具有破坏性变化的版本。它更新 package.json 和 package-lock.json 中的依赖关系。它将使用 `想要的`版本。

为了获得 "最新 "的版本，在单个安装中附加`@latest`，例如`npm install react@latest`。

## 怎样使用 `npm-check-updates`

对于高级和可定制的升级体验，我推荐[`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates)。这个包可以做所有 `npm oudated` 和 `npm upgrade` 能做的事情，并增加了一些自定义选项。不过，它确实需要安装一个包。

要开始使用，请在全局安装[`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates)软件包:

```shell
npm install -g npm-check-updates
```

然后，运行`ncu`来显示要升级的软件包。与`npm outdated`类似，它不会产生任何变化。

```shell
ncu
Checking package.json
[====================] 12/12 100%

 @testing-library/user-event    ^13.5.0  →  ^14.2.1
 @types/jest                    ^27.5.2  →  ^28.1.4
 @types/node                  ^16.11.42  →  ^18.0.1

Run ncu -u to upgrade package.json
```

要升级依赖性，你只需要运行:

```shell
ncu --upgrade

// or 
ncu -u
```

![screenshot](https://www.freecodecamp.org/news/content/images/2022/07/screenshot.png)

资料: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

- Red  （显示红色） = major  （主版本，或者说是大版本）
- Cyan （显示青色） = minor（次要版本）
- Green（显示绿色）  = patch （补丁版本）

这个方法只更新 package.json 文件中的依赖关系，并且会选择最新的版本，即使它包括一个破坏性的变化。使用这种方法，`npm install`不会自动运行，所以一定要在之后运行它来更新 package-lock.json。

要选择你喜欢的版本类型，运行 `ncu --target [patch, minor, latest, newest, greatest]`.

### 如何使用 `npm-check-updates` 互动模式

``` shell
ncu --interactive

// or 
ncu -i
```

互动模式允许你选择特定的软件包进行更新。默认情况下，所有软件包都被选中。

向下浏览每一个软件包，用空格来取消选择，当你准备好升级所有选择的软件包时，回车键（enter）确定。

![175337598-cdbb2c46-64f8-44f5-b54e-4ad74d7b52b4](https://www.freecodecamp.org/news/content/images/2022/07/175337598-cdbb2c46-64f8-44f5-b54e-4ad74d7b52b4.png)

资料: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

有几种方法可以提升交互式 `npm-check-updates` 的体验。

```shell
ncu --interactive --format group
```

这个命令将软件包分组并组织成 主版本（major）、次要(minor)和补丁(patch)版本。

![175336533-539261e4-5cf1-458f-9fbb-a7be2b477ebb--1-](https://www.freecodecamp.org/news/content/images/2022/07/175336533-539261e4-5cf1-458f-9fbb-a7be2b477ebb--1-.png)

资料: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

`npm-check-updates`提供了其他有用的工具，如 [doctor mode](https://github.com/raineorshine/npm-check-updates#doctor-mode)，它可以安装升级并运行测试以检查破坏性变化。

我强烈建议看一下[文档](https://github.com/raineorshine/npm-check-updates)，以了解更多关于这个包所提供的一切。在写这篇文章的时候，这个项目得到了很好的维护，每周的下载高达 [294,467](https://www.npmjs.com/package/npm-check-updates) 次。

## 总结

养成定期更新你的依赖关系的习惯，将有助于你的应用程序的安全性和性能。

`npm oudated` 和 `npm-check-updates` 都是有用的工具，可以检查那些可以使用版本升级的软件包。

我建议尝试这两个工具，看看哪个能提供更好的开发者体验。

我希望这些方法在更新依赖关系上有所帮助!
