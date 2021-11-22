> -  原文地址：[What is .gitkeep? How to Track and Push Empty Folders in Git](https://www.freecodecamp.org/news/what-is-gitkeep/)
> -  原文作者：[Kealan Parr](https://www.freecodecamp.org/news/author/kealan/)
> -  译者：Humilitas
> -  校对者：

![What is .gitkeep? How to Track and Push Empty Folders in Git](https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/Capture.JPG)

假设有这样一个场景：你需要重新组织代码库的文件结构——调整文件夹的位置、把一些文件移动到新创建的文件夹中。

你开始移动代码、检查一切是否正常、新增一些文件夹供下次开发使用。这些新文件夹目前还是空的，下次开发会在两天内开始，但是由于现在就要迁移代码，所以你觉得最好把这些空文件夹先加入代码库。

你把所有东西都推送到项目分支，等待 QA 测试。你在 Slack 上告诉负责审查的同事你的工作已经完成，可以进行审查了。

然后他们克隆你的分支进行审查，由于你忘了把本该添加的文件夹加入代码库，所以审查无法通过。

等等……怎么回事？

# 为什么会这样？

这是因为 [git 不会推送空文件夹](https://git.wiki.kernel.org/index.php/Git_FAQ#Can_I_add_empty_directories.3F)，它只会追踪文件。

虽然本地有这些文件夹，但是你尝试推送之后，它们并不会进入你的分支。

所以别人克隆你的代码得到的文件结构和你的本地环境不一致。

那么要如何解决这个问题呢？

# 如何使用 .gitkeep

我们知道了 Git 只追踪文件，所以只要往这些文件夹中加入一些文件就行了。

加入任何文件都是可行的。只需要往里面加入简单的虚拟文件，就可以使得文件夹被追踪，从而正常推送。

复制一个空的文本文件（如 `file.txt`）粘贴进去是可行的，你想放一张猫咪图片也行。

然而，常见的标准做法是在空文件夹中放一个 .`gitkeep` 文件。

这并不是 Git 提供的特性！所以你可以随意给这个文件命名。`.gitkeep` 这个名字并没有什么特殊含义——有些开发者也会用 `.gitignore`。(译注：然而 `.gitignore` 文件是有[特殊含义](https://git-scm.com/docs/gitignore)的，最好别用这个名字。在实践中推荐使用 `.gitkeep`，如果随意命名可能会造成困惑。)

不过 `.gitignore` 会令人迷惑，因为你的目的是让 git **不要忽略**你的文件，并且把它推送到分支。

不管使用那种方式，通过添加这个简单的文件，你的文件夹到时就能够被正确推送。

# 总结

`.gitkeep` 在代码库中是很常见的，如果需要让 Git 追踪一个空文件夹，那其中一般会有这个文件。

这个虚拟文件的名字不一定总是 `.gitkeep`，不过作为开发者，你会一次又一次地看到这种实践。

如果你喜欢我的文章，可以关注我的 [Twitter](https://twitter.com/kealanparr)，以了解文章发布动态。
