> -   原文地址：[What is Fuzzing? Fuzz Testing Explained with Examples](https://www.freecodecamp.org/news/whats-fuzzing-fuzz-testing-explained/)
> -   原文作者：Kealan Parr
> -   译者：Humilitas
> -   校对者：

![What is Fuzzing? Fuzz Testing Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/Fuzzing.png)

我最近浏览了 [Google 在 Github 中开源的项目][1]，发现其中有一个专门用于持续模糊测试（continuous fuzzing）的仓库。我甚至不懂模糊测试是什么，更别说持续模糊测试了。

# 什么是模糊测试？

**模糊测试** 是一种自动测试软件的方式。**模糊器（fuzzer）** 会向程序输入一系列的无效或随机的数据。这个测试尝试去造成程序崩溃、错误和内存泄漏等异常。

一般来说，**模糊测试** 在一些接受用户输入的程序中工作的最好，比如那些要求用户输入姓名和年龄的网站。

我们可以输入各种字符串来尝试引发程序问题，比如："Powerلُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ冗"（过去这个字符串会导致 iOS 系统崩溃）、"Ṯ̤͍̥͇͈h̲́e͏͓̼̗̙̼̣͔ ͇̜̱̠͓͍ͅN͕͠e̗̱z̘̝̜̺͙p̤̺̹͍̯͚e̠̻̠͜r̨̤͍̺̖͔̖̖d̠̟̭̬̝͟i̦͖̩͓͔̤a̠̗̬͉̙n͚͜ ̻̞̰͚ͅh̵͉i̳̞v̢͇ḙ͎͟-҉̭̩̼͔m̤̭̫i͕͇̝̦n̗͙ḍ̟ ̯̲͕͞ǫ̟̯̰̲͙̻̝f ̪̰̰̗̖̭̘͘c̦͍̲̞͍̩̙ḥ͚a̮͎̟̙͜ơ̩̹͎s̤.̝̝ ҉Z̡̖̜͖̰̣͉̜a͖̰͙̬͡l̲̫̳͍̩g̡̟̼̱͚̞̬ͅo̗͜.̟"、"😍" 或 "undefined"。

**模糊测试** 背后的思想是尝试找出代码的边界情况。用它来确保所有的数据输入、解析、存储和数据访问不会引发程序错误。

它也是一种相当完整的测试，因为你可以测试在网站中存储数据（如[零宽空格][2]，即 Unicode 中的 U+200B）的完整流程，来检测程序问题。

有些人会尝试在输入框中注入代码（这是 **模糊测试** 的一部分，称为 **代码注入**），比如将 `<script>alert(123)</script>` 作为姓名输入。

恶意的黑客不希望你测试非标准的输入，这样你的程序就可能留有破坏性的漏洞——他们可以利用它来窃取数据或者让你的应用或服务器一直崩溃。

可以查看一下这个名为“顽皮字符串大清单”的 [Github 仓库][3]，其中列出了很可能引发程序问题的字符串。

可以查看其中的 `.json` 和 `.txt` 文件来了解哪些字符串在过去曾经引发过问题，还可以通过查看评论来理解为什么它们会引发问题。

例如，有些字符串是上下颠倒的（“upside-down”——“uʍop-ǝpᴉsdn”），可以在[这里][4]试试。有些字符串可能被标记为亵渎或不当言论，但事实上并无恶意（这被称为 [Scunthorpe][5] 问题）。有些字符串被配置不当的 XML 解析器解析之后甚至会暴露系统文件。

# 谁在使用模糊测试？

我之前已经有提到过，**模糊测试** 作为 **软件测试** 的一部分来检测程序错误。不过它在网络安全和黑客攻击中也有应用。

在网络安全应用中，黑客寻求越过 **安全边界(trust boundary)**。**安全边界** 是计算机系统中把数据从一个区域（受信任的源）传递到另一个区域的地方。（注：维基百科中[信任边界][6]的定义。）

想象一下前端界面接受用户姓名作为输入数据，确认有效后传入后端，这里的信任边界就是从前端到后端传递数据的路径中假想的那条线。

![](https://www.freecodecamp.org/news/content/images/2021/02/trust-boundary.png)

如果后端只是信任数据而不去验证它的话（因为前端已经验证过了），可能会引发问题。只要黑客能够通过前端检查，他们就会被当成 **受信任** 的输入，就可以尝试插入恶意字符串作为输入数据传入后端。

这里，**模糊测试** 可以帮助抽查以确保你的代码正确地捕获和处理了这些问题。

假如有人要模糊 **Google Chrome**，一种可能的方式是在调试工具中运行浏览器，从而追踪 Chrome 执行的命令、分析其内存管理。

之后黑客会让监控中的 Chrome 指向他们的服务器，黑客服务器会创建数百万个网页让 Chrome 加载，所有页面中的 JS、CSS 和 HTML 都略有不同，尝试使得监控中的 Chrome 崩溃。

黑客会持续运行这些自动测试长达数月，收集大量的 Chrome 日志（如崩溃、内存溢出等），尝试找出导致崩溃的原因。

仅仅导致崩溃不是最终目标，一旦这些黑客知道了何种输入会导致崩溃，他们可以研究这些东西是如何导致崩溃的，并利用这些漏洞来干一些邪恶的事或者访问一些原本无权访问的数据。可以在[这里][7]阅读关于以上示例的更多信息。

Google [目前][8]在 30,000 个虚拟机中 **模糊（fuzz）** 他们自己的应用！因为他们的测试已经覆盖得相当广泛，所以黑客不太可能取得任何进展。

Google 的 [OSS-Fuzz][9] 已经在 Chrome 代码中找到 25,000+ 个 bug，在其他开源代码库中找出了大约 22,500 个 bug。

回到主题，谁在使用 **模糊测试**？我敢打赌，几乎所有要保护电子资产或信息的公司都会请测试人员对其产品做 **模糊测试** 或者是自己做测试。

# **总结**

希望本文阐明了什么是 **模糊测试** 以及它的用途。

如果你想要更深入地研究这个主题，可以在[这里][10]找到大量相关资源，包括教程、视频和工具等，可以帮助你学习 **模糊测试**。

如果你喜欢本文，可以阅读我在 [Twitter][11] 上分享的更多文章。
  

[1]: https://github.com/google
[2]: https://en.wikipedia.org/wiki/Zero-width_space
[3]: https://github.com/minimaxir/big-list-of-naughty-strings
[4]: http://www.upsidedowntext.com/
[5]: https://en.wikipedia.org/wiki/Scunthorpe_problem
[6]: https://en.wikipedia.org/wiki/Trust_boundary
[7]: https://www.wired.com/2016/06/hacker-lexicon-fuzzing/
[8]: https://google.github.io/clusterfuzz/
[9]: https://github.com/google/oss-fuzz
[10]: https://github.com/secfigo/Awesome-Fuzzing
[11]: https://twitter.com/kealanparr
