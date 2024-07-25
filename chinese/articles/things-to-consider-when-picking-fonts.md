---
title: How to Pick a Font – An In-Depth Guide for Developers
author: Seth Falco
authorURL: https://www.freecodecamp.org/news/author/seth/
originalURL: https://www.freecodecamp.org/news/things-to-consider-when-picking-fonts/
translator: Nin3
reviewer: ""
---

September 13, 2023 / [#Fonts][1]

<!-- more -->

# How to Pick a Font – An In-Depth Guide for Developers

![Seth Falco](https://www.freecodecamp.org/news/content/images/size/w60/2021/06/seth-falco-gravatar.jpeg)

[Seth Falco][2]

  ![How to Pick a Font – An In-Depth Guide for Developers](https://www.freecodecamp.org/news/content/images/size/w2000/2023/09/markus-spiske-f81ym3dE5N4-unsplash.jpg)

字体总会带来开销。如果浏览器想要获取一款字体，而用户的手机或电脑又恰好没有的话，那么浏览器就不得不去下载它了。这势必会对性能带来影响。

在文档或字幕中，嵌入字体可以轻松地将文件大小增长十倍。而对于网页来说，这里有一份关于时下流行字体以及它们潜在的网络性能影响报告：

| 字体 | 文件大小 | Wi-Fi | 常规 4G/LTE | 常规 3G |
| --- | --- | --- | --- | --- |
| [Roboto][3] | 168.3 KB | 0.05 s | 0.36 s | 1.90 s |
| [Montserrat][4] | 198.0 KB | 0.05 s | 0.42 s | 2.21 s |
| [Inter][5] | 309.8 KB | 0.08 s | 0.64 s | 3.40 s |
| [Noto Sans][6] | 556.2 KB | 0.15 s | 1.13 s | 6.03 s |
| [JetBrains Mono][7] | 187.9 KB | 0.05 s | 0.40 s | 2.10 s |

其中测算得出的网速和延迟来自于 [Firefox 源文档的 Throtting 章节][8]。

在现代网页中，我们已经将从客户端获取字体或在提供给用户的资源中嵌入字体的做法规范化了。虽说这做法听起来很诱人，但是对于大多数用例实际来说，并没有什么太大的帮助。

这并不是建议说咱们就再也别用外部字体了。只是提个醒，字体往往伴随着对网络的开销，因此在可以避免的情况下，最好重新审视一下是否值得打包或引入外部字体。

相反，我建议你挑选多种字体，那些具有跨操作系统可用特点的字体。有时我们确实应该选用外部字体，但这并不意味着应该将他视作构建内容时的默认态度。

简而言之，你可能只需要选择任意一种字体，即可在你的网站上显示任意的文本。虽然这样也挺好，但使用客户端操作系统上已经安装的多种字体这事，仍然值得坚持。

换句话说吧...只有真正能提升用户体验时才值得使用外部字体！

## 为什么？

考虑到所有操作系统上那些茫茫多的可用字体数量，可能有不少适合你用例的选项。

没必要特意去下载 Roboto、Inter 或者是一些类似系统自带的字体。

这对企业官网，个人博客，论坛以及 web 应用程序都尤为相关。

用户在这里仅仅是进行消费或是完成任务。除非你正想让你的创意大展身手，否则大部分普通用户不知道也不关心你选用的字体是什么，只要它清晰就行。

相比之下，他们可能更关心受你的字体选择影响的其他事情......

### 表现

无论我们正在探讨的是为离线文档嵌入字体，还是直接从网络上下载字体，它都会增加资源的整体大小和加载时间。

每个字体最多可以占用 160 KB。这对于速度较慢的网络或者旧的移动设备来说可能影响很大。

尤其是从网络下载字体，和那些要求用户下载不必要字体的网页比起来，那些构建速度快如闪电的网页，一定会得到更棒的体验。

直到字体下载完成，站点都可以选择阻止页面上的字体进行渲染或是进行字体交换，然而这两者效果都不太理想。

字体交换是指访问网站后字体在不久发生切换，这会导致闪烁和 [累计布局偏移量][9] 的增加。

![mdn-font-swap](https://www.freecodecamp.org/news/content/images/2023/09/mdn-font-swap.gif)

模拟 MDN 网站阻塞并进行字体交换的演示。演示效果是在一台连接到 Wi-Fi 的高规格笔记本电脑上禁用缓存，并在没有任何节流的情况下进行刷新。

![out](https://www.freecodecamp.org/news/content/images/2023/09/out.gif)

MDN 网站的演示，使用基于 Helvetica 的 Nimbus Sans，而不是外部字体。在同样的条件下刷新的效果。

放弃使用外部字体非常简单，但可以显著优化加载时间，减少带宽占用，并避免字体交换的产生，这些都能提升你的 [核心网页指标][10] 以及 SEO。

### 隐私

当从第三方服务器，例如 Google Fonts 获取字体时，客户端信息会不可避免的泄露给第三方。这些信息包括了 [IP 地址][11]、[用户代理][12] 以及 [Referer 请求头][13]，其中也包含其他请求头。

每个需要从 Google Fonts 加载字体的网站都给予了 Google 跟踪访问者的潜在可能。你访问的域名也好，你访问的时间也罢，甚至包括你的浏览器和操作系统等等都不在话下。他们仅仅通过字体这一条线索，就能构建一个你访问网站的时间线。

Google 声明我们不会追踪或是储存这些信息。然而，鉴于互联网的性质，他们仍不可避免地必须接收它。

德国实际上已经裁定加载 Google 字体的网站违反了 GDPR：

[

德国某法院裁定嵌入 Google Fonts 涉嫌违反通用欧盟数据保护条例

德国法院裁定，嵌入 Google 服务器字体的网站违反了 GDPR，必须支付 100 欧元的赔偿金。

![thn](https://thehackernews.com/images/-rVOVZW3ut4Q/XeZwEXpJ3UI/AAAAAAAA15Q/OPI7hX80GUwaRrTJ7KJtGSd_-rjDaHNVQCLcBGAsYHQ/s256-rj-e300/thn.png)Jan 31, 2022Ravie LakshmananThe Hacker News

![AVvXsEiSr35DDud574S0nUbFRGQ460yfmUbqAkz_t1yRvJEpGjyIDpmIjMFISO9qLShmbyhQAPLMnuTL1Z6t2KaaSM79C_eKd6Jv1JTKvUZJIEn39BEWUDUsEegMjExjKkUoM7C79LbxlOLAWp9oTE1Mt2963ozY951e18fOWYvUZIwJVodp1Vi0nYltvTxR=s728-e3650](https://thehackernews.com/new-images/img/a/AVvXsEiSr35DDud574S0nUbFRGQ460yfmUbqAkz_t1yRvJEpGjyIDpmIjMFISO9qLShmbyhQAPLMnuTL1Z6t2KaaSM79C_eKd6Jv1JTKvUZJIEn39BEWUDUsEegMjExjKkUoM7C79LbxlOLAWp9oTE1Mt2963ozY951e18fOWYvUZIwJVodp1Vi0nYltvTxR=s728-e3650)

][14]

这个问题可以采用自托管字体的方法来回避。如果你正打算引入外部字体，请考虑使用这个方法。

然而，你还需要知道也许部分用户会采取 [禁用自定义字体][15] 或者 [阻止第三方字体][16] 的方案，所以无论如何，你仍然应该至少选定一个通用系列的字体族名。

> “应当至少在使用的 `font-family` 列表中添加一个通用的字体族名，因为无法保证用户的计算机内已经安装了指定的字体，也不能保证使用 @font-face 提供的字体移动能够正确地下载。提供通用的字体族使得浏览器可以在无法得到最佳字体的情况下使用一个相对接近的备选字体。” (信息来源：[MDN 文档的 font-family 章节][17])

### 熟悉度

用户往往熟悉操作系统所带来的体验。

也许他们不知道黑箱之下的理论，甚至也不懂得某些简单的操作，但他们确实会定期地遇到欢迎页，下拉菜单以及系统自带的应用程序这些家伙们。

选择用户已经使用过的字体会更安全，因为这些是用户已经习惯阅读的字体。

这个论点就有点像，为什么使用系统日期选择器、颜色选择器或模态框/对话框，而不是选择创建一个自定义框这种好主意呢，这样的感觉。

那是因为，用户熟悉他们自己的系统！

从我的经验来看，字体挑选经常会伴随以下情况的发生：

-   用户没法分辨你是否使用了外部字体，这使得它在很大程度上是多余的。大部分非专业的人士每天都在经历这种情况，除非你特别关注它，否则真的很难分辨出网站也在使用不同的字体。
-   用户能够分辨外部字体，从而获得与他们习惯不同的阅读体验。阅读被字体打断的可能性具体取决于用户的需求，但这种风险通常是不必要的。

除非你有理由更改它，否则最好坚持选择用户熟悉的内容。

## 还有谁也这样做了？

维基百科是最著名的例子，他们甚至有一个页面详细阐述了这个话题：[维基百科 typography 章节的页面][18]。

一些受欢迎的网站在落地页往往不会只有单一字体，而是仅选用系统支持的一系列字体：

| 网站 | 字体选择 |
| --- | --- |
| Facebook | `SFProDisplay-Regular, Helvetica, Arial, sans-serif` |
| Instagram | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Cloudflare | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif` |
| Wikipedia | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif` |
| Reddit | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif` |
| Bing | `"Segoe UI", Segoe, Tahoma, Arial, Verdana, sans-serif` |

你可以通过使用浏览器的开发工具检查站点来自行验证。

没有因字体而产生向外的网络请求，并且 `font-family` 属性也仅仅被设置为系统字体。

## 例外情况

有时加载和嵌入字体确实有意义，特别是当你追求的外观和感觉与常见系统字体存在显著不同时：

-   你的目标环境没有可用字体。
-   为了适应现有的品牌，比如选用品牌内部字体。
-   尤其与游戏和艺术相关的，创意或设计独特的网站。
-   图标字体如 [OpenMoji][19]，但请注意，大多数客户端已经内置了表情符号。
-   一个明显是用于分发、显示和测试字体的网站。

## 结果

如果你应用了本地字体集，你的文本内容在各个客户端上看起来可能达不到像素级别的一致。然而，字体显示效果的成功与否，应该是通过用户体验来衡量的。

让网站保持既视感很重要，但客户端之间已经发生了更大的变化，例如交互界面、分辨率和 DPI。

与之相比，如果是 `a` 的拱形半径略有不同，或者是 `l` 上的刻度长几个像素，看起来便完全没问题。事实上，这不太可能被注意到，因为这根本不可能影响到用户体验。

在觉察到相似字体之间的差异之前，用户很快就会对速度差异或闪烁而感到不安。

另外一个论断是，允许不同的字体可能会使布局变得难以管理。因为字形可以有不同的宽度，从而导致不同的字体会占用不同的空间。

然而，现代网站应该遵循 [响应式设计][20]，因此你更应该在页面流畅度上花时间。

为了尽量减少影响，你可以使用 [网络安全字体][21]。

如果你不喜欢这种限制，请选择操作系统附带的字体，并尝试在其他操作系统上找到类似的字体。

如果你选择 [度量兼容][22] 的字体，那就更好了。

### 比较

让我们访问一个网站，看看禁用可下载字体后会是什么样子。

我还将替换所有字体选择器，以使用 Helvetica 做代替。

请注意，我的计算机实际上并未安装 Helvetica，因此我的操作系统会自动将其转换为基于 Helvetica 的 Nimbus Sans。 Nimbus Sans 是预装在 [Debian][23] 系统上的。

考虑到上面提出的种种限制和当前的演示情况，就 MDN 而言，第二个版本已经不堪到以至于我们需要加载一个 325 KB 的字体吗？这最终都由用户的偏好说了算，所以满意与否都将取决于你。

![1](https://www.freecodecamp.org/news/content/images/2023/09/1.png)

MDN 网站，使用从客户端获取的 Inter 字体。

![1-1](https://www.freecodecamp.org/news/content/images/2023/09/1-1.png)

还是 MDN 网站，但是使用 Helvetica 字体系列覆盖。

另一方面来说，这并不意味着永远不从网络上获取字体。在一些例子中，美感对于用户体验来说可能比性能损失更有价值。

让我们看看 [Framasoft][24]。他们追求更具创意的外观和感觉，还采用了许多 [David Revoy][25] 的插画。

选用 Tovari Sans 是一种增强用户体验的设计选择，并且不易被本地字体集替换。

如果我们拿掉这个字体，页面就会感觉丢失了连贯性且变得粗糙。即使我们同时也清理了 CSS 样式，我们仍然会偏离网站的主题。

![1-2](https://www.freecodecamp.org/news/content/images/2023/09/1-2.png)

Framasoft 网站，使用从客户端获取的 Tovari Sans 字体。

![1-4](https://www.freecodecamp.org/news/content/images/2023/09/1-4.png)

还是 Framasoft 网站，但是使用 Helvetica 字体系列覆盖。

## 资源

无论你想要本地化，还是只需要选定一些回退字体，这里都有一些有用的资源，可帮助你选择自己的字体集：

-   [Apple 操作系统包含的字体列表][26]
-   [Windows 操作系统包含的字体列表][27]
-   [ChromeOS 附带的核心字体][28]
-   [Web 安全字体的文档][29]

## 跨平台字体集

以下是本地字体集的外观列表。如果你搜索的话，你会在互联网上找到无数其他的资源。

某些字体分类并未明确包含每个操作系统的字体，但请记住，最后的通用字体系列将涵盖所有内容。

### 无衬线字体

| 字体名称 | 操作系统 |
| --- | --- |
| Nimbus Sans | Debian, Ubuntu |
| Helvetica | iOS, macOS, tvOS, watchOS |
| Arial | iOS, macOS, Windows |
| [Roboto][30] | Android |
| [Liberation Sans][31] | Debian, Ubuntu |
| [DejaVu Sans][32] | Debian, postmarketOS, Ubuntu |
| [Arimo][33] | ChromeOS, Debian |
| sans-serif |  |

### 衬线字体

| 字体名称 | 操作系统 |
| --- | --- |
| [Tinos][34] | ChromeOS, Debian |
| [Liberation Serif][35] | Debian, Ubuntu |
| Times New Roman | iOS, macOS, tvOS, watchOS, Windows |
| [Noto Serif][36] | Arch, postmarketOS, Ubuntu |
| [PT Serif][37] | Debian, iOS, macOS |
| [Caladea][38] | Ubuntu |
| [DejaVu Serif][39] | Debian, postmarketOS, Ubuntu |
| serif |  |

### 等宽字体

| 字体名称 | 操作系统 |
| --- | --- |
| [Liberation Mono][40] | Debian, Ubuntu |
| Monaco | iOS, macOS |
| [Cousine][41] | ChromeOS, Debian |
| Consolas | Windows |
| monospace |  |

### 手写体

| 字体名称 | 操作系统 |
| --- | --- |
| Brush Script MT Italic | iOS, macOS |
| Ink Free | Windows |
| Segoe Script | Windows |
| cursive |  |

### Emoji

| 字体名称 | 操作系统 | 注释 |
| --- | --- | --- |
| [Noto Color Emoji][42] | Android, Debian, Fedora, postmarketOS, Ubuntu |  |
| Segoe UI Emoji | Windows |  |
| Apple Color Emoji | iOS, macOS, tvOS, watchOS |  |
| [Twemoji Mozilla][43] |  | 内置于 Firefox 和 Thunderbird 中。 |
| emoji |  |  |

## 结论

最后，用户体验才是最重要的。有时这意味着优先考虑视觉设计，而有时这又意味着优先考虑性能。

我希望这篇文章值得你花时间阅读，并希望你在为下一个项目选择字体时，能利用这些知识做出明智的决定。

欢迎提供反馈和问题，你可以在 [GitHub][44]、[Mastodon][45] 或 [LinkedIn][56] 上联系我！

---

![Seth Falco](https://www.freecodecamp.org/news/content/images/size/w60/2021/06/seth-falco-gravatar.jpeg)

[Seth Falco][47]

Linux enthusiast, privacy advocate, and open-sourcerer. 🧙🏽‍♂️

---

如果这篇文章有所帮助，请分享。

在 freeCodeCamp 免费学习编程。 freeCodeCamp 的开源课程已帮助 40,000 多人获得开发者工作。[开始学习][48]

[1]: /news/tag/fonts/
[2]: /news/author/seth/
[3]: https://fonts.google.com/specimen/Roboto
[4]: https://fonts.google.com/specimen/Montserrat
[5]: https://fonts.google.com/specimen/Inter
[6]: https://fonts.google.com/noto/specimen/Noto+Sans
[7]: https://fonts.google.com/specimen/JetBrains+Mono
[8]: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/throttling/index.html
[9]: https://web.dev/cls/
[10]: https://web.dev/vitals/
[11]: https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
[12]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
[13]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
[14]: https://thehackernews.com/2022/01/german-court-rules-websites-embedding.html
[15]: https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use#w_custom-fonts
[16]: https://github.com/gorhill/uBlock/wiki/Per-site-switches#no-remote-fonts
[17]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#try_it
[18]: https://en.wikipedia.org/wiki/Wikipedia:Typography
[19]: https://openmoji.org/
[20]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
[21]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts
[22]: https://en.wikipedia.org/wiki/Typeface#metrics
[23]: https://www.debian.org/
[24]: https://framasoft.org/
[25]: https://www.davidrevoy.com/
[26]: https://developer.apple.com/fonts/system-fonts/
[27]: https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list#introduction
[28]: https://en.wikipedia.org/wiki/Croscore_fonts
[29]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts
[30]: https://fonts.google.com/specimen/Roboto
[31]: https://github.com/liberationfonts/liberation-fonts
[32]: https://dejavu-fonts.github.io/
[33]: https://fonts.google.com/specimen/Arimo
[34]: https://fonts.google.com/specimen/Tinos
[35]: https://github.com/liberationfonts/liberation-fonts
[36]: https://notofonts.github.io/
[37]: https://fonts.google.com/specimen/PT+Serif
[38]: https://fonts.google.com/specimen/Caladea
[39]: https://dejavu-fonts.github.io/
[40]: https://github.com/liberationfonts/liberation-fonts
[41]: https://fonts.google.com/specimen/Cousine
[42]: https://fonts.google.com/noto/specimen/Noto+Color+Emoji
[43]: https://github.com/mozilla/twemoji-colr
[44]: https://github.com/SethFalco
[45]: https://fosstodon.org/@sethi
[46]: https://www.linkedin.com/in/sethfalco/
[47]: /news/author/seth/
[48]: https://www.freecodecamp.org/learn/
