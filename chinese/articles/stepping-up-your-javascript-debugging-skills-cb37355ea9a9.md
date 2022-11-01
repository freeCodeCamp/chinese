> - 原文地址：[How you can step up your JavaScript debugging skills](https://www.freecodecamp.org/news/stepping-up-your-javascript-debugging-skills-cb37355ea9a9/)
> - 原文作者：[Periklis Gkolias](https://www.freecodecamp.org/news/author/periklis-gkolias/)
> - 译者：Papaya HUANG
> - 校对者：

![How you can step up your JavaScript debugging skills](https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png)

几乎所有写过几行代码的软件工程师都听说过 JavaScript，在 2018 年 JavaScript 是[需求量最大](https://www.codingdojo.com/blog/7-most-in-demand-programming-languages-of-2018/) 的编程语言。

有人[喜欢](https://dev.to/gentlemanoi/why-i-love-javascript-9bg)它，有人[讨厌](https://www.reddit.com/r/webdev/comments/4jf7m0/why_is_javascript_used_extensively_and_hated_at/) 它。不管你的好恶如何，如果使用这个语言你最终必须调试它。

![LrFIEQsO8MyJhwmLvB5Gb2TDaV9EYOW8gqfx](https://cdn-media-1.freecodecamp.org/images/LrFIEQsO8MyJhwmLvB5Gb2TDaV9EYOW8gqfx)

图片来自 reddit

接下来我将分享在我自己的编程过程中给我雪中送炭的一些调试技巧。

### 最基本常见的技巧

#### 小黄鸭调试法

[小黄鸭调试法](https://en.wikipedia.org/wiki/Rubber_duck_debugging)是向任何人或者任何物品（没必要一定是对人）讲解你的问题，在这个过程中解决方法就会不那么淘气，如你所愿出现在你面前。

“小黄鸭”对你的项目一无所知，所以你必须描述所有事情，在描述的过程中还要验证自己的预设。理想情况下，你会突然开窍：“天呐！答案就在眼前，谢了兄弟，打扰了打扰了。”

而小黄鸭全程都安静如“鸭”，这就是神奇的地方！：）

#### 你的老朋友——调试日志

通常在需要调试的时候，你对可能出现问题的地方都有一个模糊的判断。（即便你的判断可能错得离谱，这就是另一个故事了。）如果你在你觉得可能出错的地方设置了记录(log)，在之后的调试中，你可能更快接近正确答案。

即便没有调试的需求了，也不要马上就把你设置的打印删除，它们可能在之后的问题调试上派上用场。

我有充分的论据证明为什么你不需要添加调试日志，因为这些记录应该是最初开发的一部分。但是[Erik Hazard](http://vasir.net/blog/programming/how-logging-made-me-a-better-developer)早在他的博客中说明了这一切。

之后多使用调试日志。

#### 断点调试

调试器（debugger）是一个利器 — 如果 **你知道如何使用**。

也就是说:

- 首先你要知道问题是什么
- 然后对 **根源 (而不是症状)**有一些预判
- 设置断点去验证或者推翻假设

在 JavaScript 中，你可以使用浏览器的调试工具，或者在代码中使用`debugger`关键字来强制暂停执行。

不要随意在这儿那儿都添加断点，使用的时候设定自己的流程并且在脑海中构建你的“暂停键”。

### 不那么常见的技巧

#### console.table

上文中我们提到了日志的重要性，而我们经常使用的代码是`console.log('text')`。但如果输出更为复杂怎么办？当然`console.log` 也可以处理数组和对象。

如果我告诉你，你可以通过优化格式来更快地发现错误呢？`console.table`就是这样的一种方法，示例如下图：

![-Ek-xKZX9Bw75cKgaNGvNRQHrmWgqoQ46XKb](https://cdn-media-1.freecodecamp.org/images/-Ek-xKZX9Bw75cKgaNGvNRQHrmWgqoQ46XKb)

console.table 示例

从图中你就可以看出这个样式要友好很多。我强烈建议你多使用这行代码，特别是遇到可遍历的变量时。

#### 在事件而不是代码行设置断点

让我们想象这样一个场景:一个 DOM 元素断断续续地变化，并且值是错误的，你不知道为什么会这样。到底是这 29 个函数中的哪一个在调皮捣蛋改变元素？(批注：变化(mutating)通常[不太好](https://slemgrim.com/mutate-or-not-to-mutate/)，但这是另一个话题。)

这种情况可以使用 **DOM change breakpoints**。每当元素发生变化，栈追踪就会呈现出来，效果和你在正确的代码行添加断点一样。[这里](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#dom)有详细的介绍。

#### Profiling

虽然你需要调试的问题可能并不是性能导向的，或许这方面有些矫枉过正，但我还是要提一句（说不定之后会变成性能问题 :) )。在[Chrome](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)和 [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler) 的 profiler 都内置一些功能帮助你发现瓶颈，或者只是观察执行过的函数。你看，这简直就是绝佳的过度工程工具。 请[克制](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)对这些工具的使用。用[火炮筒](https://answers.yahoo.com/question/index?qid=20111106222906AAUSWkm) 来炮轰苍蝇会导致一些奇怪的副作用。

### 总结

感谢你阅读这篇文章，希望你能够从中有所收获。和往常一样，希望你在评论中也留下一些你的魔法技巧。

### 延伸阅读

除了文中引用的这些文章，这里还有一些相关话题值得你花时间阅读：

- [Node 调试教程](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [John Sonmez 的调试指南](https://simpleprogrammer.com/effective-debugging/)
- [调试它！](https://amzn.to/2lC7kD3)
- [调试：解决最难以琢磨的软件和硬件问题的 9 条不可或缺的规则](https://amzn.to/2IrgI5t)
- [Chrome 调试工具](https://developers.google.com/web/tools/chrome-devtools/javascript/)
- [Firefox 调试工具](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
- ‘JSparty’ 的播客，特别是 [第 30 期](https://overcast.fm/+Id5XDQtKY) ，文中的 \`console.table\`就是来自这个播客的启发

原文发表在[我的博客中](http://perigk.github.io)。
