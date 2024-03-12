> -   原文地址：[Responsive Web Design – How to Make a Website Look Good on Phones and Tablets 响应式网页设计入门][1]
> -   作者：Adam Henson
> -   译者：TechQuery
> -   校对者：

![响应式网页设计 – 怎样让一个网站在手机、平板上好看](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/curve-design-futuristic-lines-911738.jpg)

在联网设备快速发展的格局中, 响应式网页设计在Web开发中仍然至关重要。

不久前，“响应式网页设计”一词尚不存在. 但是今天，我们大多数人不得不在某种程度上采用它。

[据统计][2], 截至 2019 年, 61% 的 Google 搜索访问来自移动设备. 在 2020 年 9 月，[Google 将改变其搜索算法][3]，让其优先展示移动端友好的网站。

**在这篇文章中，我将介绍以下内容:**

-   响应式网页设计是什么?
-   视口元标签及其作用
-   响应式网页设计中适应手机和平板电脑的有效技术
-   帮助模拟和监控手机和平板电脑用户体验的工具

## 响应式网页设计是什么? (RWD)

响应式 Web 设计是一种专注于一个网站用户环境的方法，而用户环境则取决于他们连接互联网的设备。

有很多设备特性为以用户为中心的焦点提供机会。其中一些包括：

-   网络连接
-   屏幕尺寸
-   交互类型（触屏、触控板）
-   图像分辨率

在响应式 Web 设计流行前，很多公司管理着一个完全独立的网站，用于接收基于用户代理标识的流量导向。

但在响应式 Web 设计中，服务器总是给所有设备发送相同的 HTML 代码，而 CSS 则用于改变页面在设备上的渲染。

无论以上两条策略如何， 为手机或平板电脑建站的第一步是确保浏览器知道意图。这就是视口元数据标签发挥作用的地方。

## 识别一个移动端网站的视口元数据标签

视口元数据标签指示浏览器如何调整页面以适应每种设备的宽度。

当视口元数据标签缺省，移动端浏览器将以默认桌面端设置来显示网页。 这导致了看似缩小的结果、非响应式的体验。

以下是一种标准实现：

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

视口元数据标签示例

现在浏览器知道发生了什么，我们可用利用流行的技术来让我们的网站具备响应式能力。🙌

## 针对不同屏幕尺寸和方向的 CSS 媒体查询

如果你初试响应式 Web 设计，媒体查询是要学的首要 CSS 特性。媒体查询让你能根据视口宽度设置元素样式。一种流行的 CSS 策略是优先编写移动端样式，再在它们之上构建更复杂的桌面专用样式。

媒体查询是响应式 Web 设计的一个重要部分，通常用于处理网格布局、字体字号、外内边距在屏幕尺寸和方向下的差异。

下面是一个移动优先的样式常见用例示例，其中更小设备的一列是 100% 宽，但在更大视口是 50%。

```css
.column {
    width: 100%;
}

@media (min-width: 600px) {
  .column {
    width: 50%;
  }
}
```

移动优先 CSS 示例

以上代码是一个简单示例，但它实际在做的是非常有趣的。

1.  在考虑移动优先时，`column` 元素被设置一个 100% 的宽度；
2.  通过使用 `min-width` 媒体查询，我们专门为最小宽度 `600px` 的视口定义了规则（视口宽于 `600px`）。所以，宽于 `600px` 的视口，我们的 `column` 元素将有父级 50% 的宽度。

尽管媒体查询对于响应式 Web 设计至关重要，很多其它新的 CSS 特性也在浏览器中被广泛采用与支持。Flexbox 便是其中之一，在响应式 Web 设计中是重要的 CSS 特性。

## 什么是 Flexbox？

你可能好奇 —— “Flexbox 是干啥的？” 更好的问题是 —— “Flexbox 不能干啥？” 最简单的 CSS 垂直居中方法是啥？Flexbox。你怎样创建一个响应式网格布局？Flexbox。我们怎么实现世界和平？Flexbox。

Flexbox 布局（弹性盒子）模块提供了一种更有效的方式去布局、对齐和在容器项目间分配空间，即使它们的尺寸是动态的（因此就有了“flex”这个词）。

在以下示例中，我们结合如上所述的媒体查询来创建一个响应式网格。

```html
<style>
  main {
    background: #d9d7d5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div {
    background: #767775;
    flex-basis: 100%;
    height: 100px;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 600px) {
    main {
      flex-wrap: nowrap;
    }
    div {
      flex-basis: 33%;
    }
  }
</style>
<main>
  <div></div>
  <div></div>
  <div></div>
</main>
```

CSS flexbox 示例

我们用这段代码完成了以下事情:

1.  在我们的 `main` 容器元素中用 `display: flex` 建立一个 flexbox 布局。
2.  先设置移动端样式。我们给 `main` 元素设置 `flex-wrap: wrap`，它允许子元素在我们的 flexbox 布局中换行，如下图 1 所示。我们在我们的 `div` 元素设置 `flex-basis: 100%` 来确保它们在 flexbox 布局中占满父级宽度的 100%（图 1）。
3.  再设置更大设备（如平板、桌面电脑）的样式。我们利用一条与我们上节示例类似的媒体查询来设置我们的容器 `main` 元素为 `flex-wrap: nowrap`。这样确保子元素不换行，并且它们在行类型的布局中维持一列。通过在媒体查询中设置 `div` 为 `flex-basis: 33%` —— 我们创建了一些为父级宽度 33% 的列。
4.  在这个例子中，魔法将在我们结合媒体查询和 flexbox 规则的更大设备中出现。因为我们定义了 `display: flex`，并且没在媒体查询中覆盖这条规则，我们就拥有了一个适配手机、平板电脑和桌面电脑的 flexbox 布局。媒体查询 `flex-basis: 33%` 和继承的 `display: flex` 规则将给我们一个可识别的 flexbox 布局（如图 2 所示）。在过去，为了实现这种列类型布局，我们需要做一些严肃的繁重工作并写一团乱糟糟的 CSS。

![](https://www.freecodecamp.org/news/content/images/2020/07/grid-mobile-1.png)

图 1：移动端 flexbox 网格示例

![](https://www.freecodecamp.org/news/content/images/2020/07/grid-desktop.png)

图 2：桌面端 flexbox 网格示例

Flexbox 提供了一种很棒的方法去实现多变而流动的布局。在一些实例中，我们在纵向空间中可能没有太多的自由。我们可能需要给一个元素设一个固定高度。在这种情形下，我们有另一种可用的技术 —— 水平滚动。

## 基于 Overflow Scroll 的水平滚动

也许有一天，你有一些溢出视口的内容，并且没有优雅的处理方法。 瞧这边…… overflow scroll 能救你。🦸

这种技术的常见用处包括可滚动菜单和表格。以下是一个可滚动菜单的示例。

```html
<style>
  menu {
    background: #d9d7d5;
    padding: 0.25rem;
    overflow-y: scroll;
    white-space: nowrap;
  }

  span {
    background: #767775;
    color: #ffffff;
    display: inline-block;
    margin: 0.25rem;
    padding: 0.5rem;
  }
</style>
<menu>
  <span>响应式 Web 设计</span>
  <span>RWD</span>
  <span>响应式菜单</span>
  <span>Overflow scroll 示例</span>
  <span>这是一大堆内容！</span>
  <span>是的</span>
  <span>我们</span>
  <span>有</span>
  <span>另一个</span>
  <span>项目</span>
</menu>
```

示例：水平滚动菜单

你是怎么做到的？让我们深入探讨一下。

-   `overflow-y: scroll` 是这个食谱的关键成分。通过指定它的子元素将在水平坐标上以滚动行为溢出。
-   没那么快！尽管你可能认为 `overflow-y` 就够了，我们也需要告诉浏览器用 `white-space: nowrap` 不让子元素换行。🤷

现在我们有了几种 RWD 布局技术让我们可以做甩手掌柜，让我们看一眼对它们视觉本质提出挑战的元素 —— 图片和视频。

## 响应式图片

通过使用现代图片标签属性，我们能视频各类设备和分辨率。以下是一个响应式图片的示例。

```html
<style>
  img {
    max-width: 100%;
  }
</style>

<picture>
  <source type="image/webp" srcset="https://my-image.com/my-image-100.webp 1x, https://my-image.com/my-image-200.webp 2x">
  <source type="image/png" srcset="https://my-image.com/my-image-100.png 1x, https://my-image.com/my-image-200.png 2x">
  <img alt="my image" src="https://my-image.com/my-image-200.png" loading="lazy" width="100" height="100">
</picture>
```

这在做很多事情。让我们来分解一下：

1.  通过设置 `max-width: 100%`，图片会根据其容器宽度来放大或缩小。
2.  通过结合使用 `picture`、`source` 和 `img` 标签，我们实际上只渲染一张图片，而且是只加载那张最适合用户设备的图片。
3.  **WebP** 是一种现代图片格式，为 Web 图片提供优越的压缩性。利用 `source`，我们能为支持它的浏览器采用一张 WebP 图片，而另一个 `source` 标签则为不支持 WebP 的引用一张 PNG 版图片。
4.  `srcset` 是用来告诉浏览器根据分辨率应该用哪张图片。
5.  我们利用 `loading="lazy"` 属性值对来启用[原生懒加载][4]。

## 响应式视频

响应式视频另一个激发一大批文章和文档的主题。

一个建立响应式图片、视频、iframe 和其它元素的关键策略涉及使用 aspect-ratio。Aspect ratio 盒子不是一个新技术，而且对 Web 开发者来说是非常有用的工具。

关于如何实现“流动”宽度视频，[这篇文章提供了一个扎实的范例][5]。让我们看一下代码，再分解一下。

```html
<style>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="videoWrapper">
  <!-- 复制、粘贴自 YouTube -->
  <iframe width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
</div>
```

在这个例子中，我们有一个嵌入为 iframe 的 YouTube 视频和一个带有 `videoWrapper` 类的 `div` 容器。这段代码做了很多…… 让我们来深挖。

-   在容器元素上的 `position: relative` 允许子元素利用相对于它的绝对定位。
-   `height: 0` 结合 `padding-bottom: 56.25%` 是这里的要点，它建立了一种动态行为，强制 `16:9` 的纵横比。
-   设置在 iframe 上的 `position: absolute`、`top: 0` 和 `left: 0` 创建了一种行为，让元素相对父元素绝对定位自己…… 将其固定在左上。
-   最后，长宽的 100% 让子元素 iframe 占它父元素的 100%。父元素 `.videoWrapper` 完全掌控这个 aspect ratio 布局的建立。

我知道…… 这很多。为了让视频和图片在手机和平板电脑上看起来舒服，我们还有更多可以做的。除此之外，我也鼓励对这些主题的独立研究。

好了，现在我们是响应式 Web 设计的大师了，我们如何测试我们做了什么？幸运的是，我们有很多工具去模拟和监控各种设备上的用户体验。

## 模拟和监控响应式网站的工具

有各种有用的工具去帮助我们创建响应式 Web 设计的网站。以下是我发现的两个特别有用的。

### Chrome DevTools 移动端仿真

Chrome 的 DevTools 提供各类平板电脑和手机的移动端仿真。它也提供一个“responsive”选项，让你定义一个自定义视口尺寸。

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.19.18-PM.png)

图 3：Chrome DevTools 手机和平板电脑设备仿真

### 用 Foo 监控移动端网站性能

Lighthouse 是一个开源工具，提供一种分析网站设备特定性能的方法。

[Foo 在幕后使用 Lighthouse 来监控网站性能，并提供分析反馈][6]。你可为桌面端和移动端设备同时设置监控，来获得关于你的网站如何响应式的进一步反馈。

比如，一份 Lighthouse 报告 将根据设备标注出未正确加载的图片。

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.31.09-PM.png)

图 4：带有移动设备仿真的 Lighthouse 报告

## 结论

响应式 Web 设计将继续快速发展，但如果我们保持在当前趋势之上，我们能为我们的用户提供最佳体验。我希望这些工具和技术对您有所帮助！

不但我们网站的用户将受益于一个多功能的设计，同时搜索引擎也将提升我们网页的排名。

[1]: https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-look-good-on-phones-and-tablets/
[2]: https://www.statista.com/statistics/275814/mobile-share-of-organic-search-engine-visits/
[3]: https://webmasters.googleblog.com/2020/03/announcing-mobile-first-indexing-for.html
[4]: https://web.dev/native-lazy-loading/
[5]: https://css-tricks.com/fluid-width-video/
[6]: https://www.foo.software/lighthouse/
