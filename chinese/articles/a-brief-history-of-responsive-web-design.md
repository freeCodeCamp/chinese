> -   原文地址：[A Brief History of Responsive Web Design](https://www.freecodecamp.org/news/a-brief-history-of-responsive-web-design/)
> -   原文作者：Kris Koishigawa
> -   译者：ZhiChengChen
> -   校对者：

![A Brief History of Responsive Web Design](https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDF8fHJlc3BvbnNpdmUlMjBkZXNpZ258ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

如今，网页响应式设计已成为理所当然的事情。 当访问网站时，无论屏幕大小，我们都预期它能在所有设备上正常运行并看起来不错。

这并不是一蹴而就的，开发人员想出了许多技术来使网站适配不同的屏幕尺寸，最终才有了现在的响应式网页设计。

本文将涉及早期的网络，开发人员适配不同屏幕尺寸的方式以及现代的响应式设计。

## 第一个网站

1991 年 8 月 6 日，第一个网站上线。 该站点由 Tim Berners \- Lee 创建，网站详细介绍了万维网（W3）项目。 它最初是在欧洲核研究组织 CERN 的 NeXT 计算机上运行的。

尽管今天原始站点已经离线，但 CERN 于 2013 年 [启动了一个项目](https://first-website.web.cern.ch/first-website/)，以 “保留与 web 的诞生相关的一些数字资产” 。从最初的计算机名称、IP 地址到第一个网站的 URL，所有内容均已恢复到可用状态。

虽然该网站的原始 1991 年的版本丢失了，但是恢复了 1992 年的版本。如果感兴趣，可以访问 [http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)。

## 早期的 web 设计

自 Berners\-Lee 的第一个网站上线以来，web 迅速发展。 每年都有成千上万的网站开通，新的设计技术与 Web 技术本身一样发展迅猛。

在 90 年代初期，网页设计非常简单。 大多数网站都使用简单的 header，paragraph 和 早期 list 标签（如`<dl>`，`<dt>` 和 `<dd>` 标签）来组织信息。

![](https://www.freecodecamp.org/news/content/images/2021/02/yahoo-1994.png)

1994 的 雅虎 ([地址](https://www.webdesignmuseum.org/web-design-history/yahoo-1994))

更复杂的站点必须使用表格才能控制页面的布局，创建诸如导航和侧边栏之类的东西，这在当今已经很普遍。

如今网站样式可以通过各种方式设置，CSS 是由 Håkon Wium Lie 于 1994 年在 CERN 工作时首先提出。 在 1996 年，同样由 Berners\-Lee 创立的万维网联盟（W3C）发布了层叠样式表，level 1（CSS1）的正式规范。

借助 CSS 和其他技术（如 JavaScript 和 Flash），Web 开发人员可以使设计更具创造性和趣味性。

![](https://www.freecodecamp.org/news/content/images/2021/02/internet-archive-1997.png)

1997 年的网站 ([地址](https://www.webdesignmuseum.org/web-design-history/internet-archive-1996))

90 年代末 20 年代初，web 设计和用户体验的模式已经出现，网站看起来开始像我们今天使用的网站：

![](https://www.freecodecamp.org/news/content/images/2021/02/deviant-art-2000.png)

2000 的 DeviantArt ([地址](https://www.webdesignmuseum.org/web-design-history/deviantart-2000))

## 初期的响应式设计方法

随着 CSS 的广泛使用，开发人员不得不在布局、设计和排版等方面花费更多的时间。 但是他们不必担心的一件事是适应不同的屏幕尺寸。 当时，大多数人的显示器是 640x480、800x600 或 1024×768。

尽管如此，开发人员仍然找到了兼容这些显示器或浏览器窗口大小的几种不同方法，最终发展出了当今我们所熟知的响应式 Web 设计。 让我们来看看其中的一部分。

### 流式布局

根据 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)，开发人员早期采用的两个主要布局选项是 “固定宽度” 和流式布局，固定宽度是将其内容设置为固定的的像素宽度，流式布局内容使用百分比确定宽度。

MDN 上有 [固定宽度](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html)  和 [流式布局](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html)  的一些不错的例子。

流式布局最早由 Glenn Davis 创造并推广，轰动一时，可以认为是初期响应式 Web 设计的主要方法之一。

如果显示器的分辨率与固定宽度布局设计的分辨率不同，固定宽度布局可能只能显示一部分，但流式布局要灵活性的多，可以适应不同的显示器分辨率或浏览器尺寸。

![](https://www.freecodecamp.org/news/content/images/2021/02/elastic.gif)

流式布局的一个例子 ([地址](https://thehistoryoftheweb.com/mostly-complete-history-layout-web-part-1-liquid-cool/))

但是流式布局并不是完美的。 在流式布局的网站上，内容可能会溢出，在较小的屏幕上文字可能会换行，在较大的屏幕上可能会有很多不必要的空白。

### 分辨率相关的布局

2004 年，卡梅隆·亚当斯（Cameron Adams）撰写了一篇[博客](https://www.themaninblue.com/writing/perspective/2004/09/21/)，详细地介绍了一种使用 JavaScript 根据浏览器窗口大小载入不同样式表的布局方法。

这种技术后来被称为分辨率相关的布局（以 Adams 的博客文章标题命名）。 即使当时对开发人员来说需要做额外的工作，但它可以对站点布局进行更细粒度的控制，并且可以在 CSS breakpoints 流行之前作为 CSS breakpoints 的早期方案。

![](https://www.freecodecamp.org/news/content/images/2021/02/image-117.png)

Adams 的分辨率相关的布局例子 ([地址](https://www.themaninblue.com/experiment/ResolutionLayout/))

这种方法的缺点是，开发人员必须为每个目标分辨率创建不同的样式表，并确保样式和 JavaScript 在所有主要浏览器上均能正常工作。

当时有很多浏览器，有时它们对 HTML，CSS 和 JavaScript 的处理方式也不同。 实际上，这也是 jQuery 如此流行的主要原因之一 – 它抽象了许多浏览器差异，因此只需要编写一次代码。

### 移动子域名网站

随着越来越多的移动设备的出现， 诺基亚，黑莓以及 iPhone 都配备了自己的浏览器。 开发人员不得不想出其它方案来适应不同的屏幕尺寸。

一种巧妙方法是创建一个仅适用于移动设备的网站版本，并使其在子域名中访问。

移动子域名网站（有时称为 m\-dots 或 m 子域名）就是 - 托管在网站子域名中的的移动特定版本，通常是 `m` 子域名。

例如，Facebook 的桌面版本是 `facebook.com`，或更具体地说，位于 `www` 子域名 `www.facebook.com` 下：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-119.png)

Facebook 的桌面版本网站

而 Facebook 的移动版本位于 `m.facebook.com` 下：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-118.png)

Facebook 的移动版本网站

如果您登录到两个应用程序并对比它们，会发现它们看起来非常相似。 它们实际上是两个独立的应用程序 - 移动版本要简洁一些，并且经过了优化，可以在较小的屏幕和大多数移动浏览器上运行。

移动子域名网站今天仍然存在，并且这种方法具有一定的优势。 通过在移动子域名上使用单独的网站版本，开发人员可以确保网站快速加载，消耗更少的移动数据。

此外，拥有子域名网站可以使开发人员真正针对移动设备量身定制 SEO（搜索引擎优化），为该网站的移动版本吸引更多流量。

但是它也有一些的缺点。 使用移动子域名网站意味着开发人员必须维护两个（有时非常不同）的网站，而不是仅维护一个。

移动子域名网站有时可能会令人困惑。 我敢肯定，很多人都知道尝试访问网站的桌面版本时却被重定向到移动版本的痛苦。

不仅如此，开发人员还必须弄清楚需要重定向的设备以及在什么条件下重定向。 

传统上，这是通过检查访问者浏览器的 user agent 来完成的，但是随着设备的增加，user agent  越来越多。 最终，开发人员开始使用 JavaScript 检查浏览器窗口的宽度并基于此进行重定向。

你可能正想，这听起来很像今天的响应式网页设计。 的确如此 - 在很多方面，现代的响应式 Web 设计是对过去技术的一种归纳。 开发人员已经想出了很多好的想法，可以在这些想法的基础上进行构建。

## 响应式 web 设计

到 20 年代后期，设计一个可以在不同屏幕尺寸上运行的网站已迅速成为一种规范。 但是要做到这一点，开发人员必须想出很多技巧。

即使是简单的布局，开发人员也必须使用  `max-width: 100%` 技巧来生成响应式的图像，使用 `float` 和 [clearfixes](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats#the_clearfix_hack) 来避免错乱。

然后在 2010 年，名为 Ethan Marcotte 的开发人员在 [A List Apart](https://alistapart.com/) 中发表了一篇文章，他概述了一种关于弹性 Web 设计的新思路。 在文章中，Marcotte 列出了创建响应式网站的三个重要组件：fluid grids、flexible images 和 media queries。

除了概述响应式网页设计的主要组成部分之外，Marcotte 还因创造了该术语本身而闻名，响应式 web 设计以 [2010 年发布的文章](https://alistapart.com/article/responsive-web-design/) 的标题命名。 

### Fluid grids

Fluid grids 是网站应采用不同数量的弹性的列（根据当前屏幕大小而增长或收缩）的想法。 在移动设备上，应该有一两个弹性的内容列，而在台式机上则可以有更多的列：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-126.png)

移动设备上 Ethan Marcott 的网站 ([地址](https://ethanmarcotte.com/work/))

![](https://www.freecodecamp.org/news/content/images/2021/02/image-125.png)

相同网站在桌面上的效果 ([地址](https://ethanmarcotte.com/work/))

您可以在 [较早的文章](https://alistapart.com/article/fluidgrids/)中阅读更多 Marcott 关于 fluid grids 的思想。

### Flexible images

Flexible images 是指图像应随其所在的 fluid grid 一起增大或缩小：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-127.png)

移动设备上的小图 ([地址](https://ethanmarcotte.com/work/))

![](https://www.freecodecamp.org/news/content/images/2021/02/image-128.png)

桌面网站上的大图 ([地址](https://ethanmarcotte.com/work/))

一种常见的方法是使用上面提到的 `max-width` 技巧。

如果容器中有图像，则图像可能会溢出，尤其是在响应式容器中。 例如，如果满足以下条件，则图像可能会像这样溢出：

```html
<style>
  .container {
    width: 250px;
    outline: solid;
    text-align: center;
  }
</style>
<body>
  <div class="container">
    <img src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" />
    <p>Example image</p>
  </div>
</body>

```

![An image overflowing its 250px wide container.](https://www.freecodecamp.org/news/content/images/2021/02/image-129.png)

但是，如果将其  `max-width` 设置为  `100%`,，则图像不会溢出：

```html
<style>
  .container {
    width: 250px;
    outline: solid;
    text-align: center;
  }

  .my-image {
    max-width: 100%;
  }
</style>
<body>
  <div class="container">
    <img
      class="my-image"
      src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
    />
    <p>Example image</p>
  </div>
</body>

```

![The same image contained in its 250px wide container.](https://www.freecodecamp.org/news/content/images/2021/02/image-130.png)

甚至可以调适配父容器大小：

```html
<style>
  .container {
    width: 600px;
    outline: solid;
    text-align: center;
  }

  .my-image {
    max-width: 100%;
  }
</style>
<body>
  <div class="container">
    <img
      class="my-image"
      src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
    />
    <p>Example image</p>
  </div>
</body>

```

![The image resizing to the larger 600px wide container.](https://www.freecodecamp.org/news/content/images/2021/02/image-131.png)

### Media queries

CSS 媒体查询 2010 年就已经可用，但直到 2012 年 [W3 建议](https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/ )正式发布后才被广泛采用。

媒体查询只是一个 CSS 规则，它是根据诸如媒体类型（`screen`、`print`等）和媒体功能（`width`、 `height`等）之类的选项触发：

```css
@media screen and (min-width: 500px) {
  background-color: red;
}
```

即使当时媒体查询还比较简单，但可以通过它实现断点，如今断点仍在响应式 Web 设计中使用。

断点是网站根据设备或浏览器窗口的宽度显示不同的布局或样式。 例如，上面代码片段的完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <style>
    .container {
      width: 250px;
      outline: solid;
      text-align: center;
    }

    .my-image {
      max-width: 100%;
    }

    @media screen and (max-width: 500px) {
      .container {
        background-color: red;
      }
    }
  </style>
  <body>
    <div class="container">
      <img
        class="my-image"
        src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
      />
      <p>Example image</p>
    </div>
  </body>
</html>

```

请注意，对媒体查询使用 [viewport 元标记](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) 很重要。 在大多数情况下都可以使用：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

在上面的媒体查询中，这是分辨率为 500px 或以下时容器的外观：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-132.png)

这是分辨率为 501px 或更高时的外观：

![](https://www.freecodecamp.org/news/content/images/2021/02/image-133.png)

### 移动优先 vs 桌面优先

最近，有两种主要的响应式 Web 设计方法：移动优先或桌面优先。 两者都是完全有效的选择，并且各有利弊。

如果你从头开始设计网站的，当今许多开发人员会认为以移动优先是最佳选择 – 移动设计往往是一栏式的，并且容易得多。

如果您想采用移动设备优先的方式，可以正常编写移动样式，然后在开始创建平板电脑和台式机布局时，使用 `min-width` 创建类似上述的断点。

但是，也许你正在基于一个较旧的站点上进行设计，而该站点在设计时只考虑了台式机，因此需要使其适应较小的移动设备。 在这种情况下，可以使用具有 `max-width` 的媒体查询来定位那些较低的分辨率。

您可以在[本文](https://www.freecodecamp.org/news/taking-the-right-approach-to-sensitive-web-design/)中了解有关移动优先和桌面优先的设计理念的更多信息。

## 结语

现在，你对响应式 Web 设计的历史有了一点了解，以及开发人员在我们今天拥有的一切之前经历的点滴。

如果您想深入研究响应式网页设计，Flexbox 和其他现代技术，请在我们的 YouTube 频道（Bilibili）上查看以下为时 4 小时的教程：

如果您想了解 CSS Grid（创建复杂，灵活的布局的新方法）的方法，请查看我们的[教程](https://www.freecodecamp.org/news/search/?query=css％20grid)。

你的响应式网页设计的经历是怎么样的？ 如果哪里不准确，在 [Twitter](https://twitter.com/kriskoishigaw) 联系我。
