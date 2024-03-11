> -   原文地址：[Responsive Web Design – How to Make a Website Look Good on Phones and Tablets 响应式网页设计入门](https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-look-good-on-phones-and-tablets/)
> -   作者：Adam Henson
> -   译者：TechQuery
> -   校对者：

![响应式网页设计 – 怎样让一个网站在手机、平板上好看](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/curve-design-futuristic-lines-911738.jpg)

在联网设备快速发展的格局中, 响应式网页设计在Web开发中仍然至关重要。

不久前，“响应式网页设计”一词尚不存在. 但是今天，我们大多数人不得不在某种程度上采用它。

[据统计][1], 截至 2019 年, 61% 的 Google 搜索访问来自移动设备. 在 2020 年 9 月，[Google 将改变其搜索算法][2]，让其优先展示移动端友好的网站。

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

## Horizontal Scrolling with Overflow Scroll

There may come a time that you have content overflowing the viewport without a graceful way of handling it. Behold... overflow scroll to the rescue. 🦸

Common uses for this technique include scrollable menus and tables. Below is an example of a scrollable menu.

Responsive Web Design RWD Responsive menu Overflow scroll example This is a lot of content! Yes we have another item

```html
<style>
  menu {
    background: #d9d7d5;
    padding: 0.25rem;
    overflow-y: scroll;
    white-space: nowrap;
  }
</style>
```

Example horizontal scroll menu

How'd you do that!? Let's take a deeper dive.

-   `overflow-y: scroll` is the key ingredient of this recipe. By specifying it child elements will overflow the horizontal axis with scrolling behavior.
-   Not so fast! Although you may think `` `overflow-y` `` would be enough, we have to also tell the browser not to wrap the child elements with `white-space: nowrap` 🤷

Now that we have a few RWD layout techniques up our sleeve, let's take a look at elements that pose challenges specific to their visual nature - images and video.

## Responsive Images

By using modern image tag attributes we can accommodate a range of devices and resolutions. Below is an example of a responsive image.

```html
<style>
    img {
        max-width: 100%;
    }
</style>
```

This is doing a lot of things. Let's break it down:

1.  By setting `max-width: 100%` the image will scale up or down based on its container width.
2.  By using a combination of `picture`, `source`, and `img` tags we are actually only rendering one image and are only loading the best fitting image based on the user's device.
3.  **WebP** is a modern image format that provides superior compression for images on the web. By utilizing `source` we can reference a WebP image to use for browsers that support it, and another `source` tag to reference a PNG version of the images that don't support WebP.
4.  `srcset` is used to tell the browser which image to use based on the device's resolution.
5.  We establish [native lazy loading][8] by utilizing the `loading="lazy"` attribute / value pair.

## Responsive Video

Responsive video is another subject that has inspired a large number of articles and documentation.

One key strategy to establish responsive images, video, iframes and other elements involves the use of aspect-ratio. The aspect ratio box is not a new technique and quite a useful tool to have up your sleeve as a web developer.

[This article provides a solid demonstration][9] about how to achieve "fluid" width videos. Let's take a look at the code and break it down.

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
```

In this example we have a YouTube video embed as an iframe and a `div` container with `videoWrapper` class. This code is doing a lot... let's dig in.

-   `position: relative` on the container element allows child elements to utilize absolution positioning relative to it.
-   `height: 0` combined with `padding-bottom: 56.25%` is the key ingredient here which establishes a dynamic behavior, enforcing a `16:9` aspect ratio.
-   `position: absolute`, `top: 0` and `left: 0` set on the iframe creates a behavior in which the element positions itself absolutely relative to its parent... sticking it to the top left.
-   And finally width and height of 100% makes the child, iframe element 100% of its parent. The parent, `.videoWrapper` takes full control of establishing this aspect ratio layout.

I know... it's a lot. There's more we can do to make video and images look the best on phones and tablets. I'd encourage research on those topics independently in addition to this.

Okay, now that we're masters of responsive web design, how can we test what we've done? Fortunately, we have a number of tools to simulate and monitor user experience on a variety of devices.

## Tools to Simulate and Monitor Responsive Websites

There are a variety of useful tools to help us create websites with responsive web design. Below are a couple that I find especially useful.

### Chrome DevTools Mobile Emulation

Chrome's DevTools provides mobile emulation of a range of tablet and mobile devices. It also provides a "responsive" option which allows you to define a custom viewport size.

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.19.18-PM.png)

Figure 3: Chrome DevTools mobile and tablet device emulation

### Monitoring Mobile Website Performance with Foo

Lighthouse is an open-source tool that provides a way of analyzing website performance specific to a device.

[Foo uses Lighthouse behind the scenes to monitor website performance and provides feedback for analysis][11]. You can setup monitoring for both desktop and mobile devices to get continuous feedback about how responsive your website is.

For example, a Lighthouse report will callout images that are improperly loaded based on device.

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.31.09-PM.png)

Figure 4: Lighthouse report with mobile device emulation

## Conclusion

Responsive web design will continue to rapidly evolve, but if we stay on top of current trends we can provide the best experience for our users. I hope these tools and techniques are helpful!

Not only will our website users benefit from a versatile design but also search engines will rank our web pages higher.

[1]: https://www.statista.com/statistics/275814/mobile-share-of-organic-search-engine-visits/
[2]: https://webmasters.googleblog.com/2020/03/announcing-mobile-first-indexing-for.html
[3]: https://my-image.com/my-image-100.webp
[4]: https://my-image.com/my-image-200.webp
[5]: https://my-image.com/my-image-100.png
[6]: https://my-image.com/my-image-200.png
[7]: https://my-image.com/my-image-200.png
[8]: https://web.dev/native-lazy-loading/
[9]: https://css-tricks.com/fluid-width-video/
[10]: http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1
[11]: https://www.foo.software/lighthouse/
