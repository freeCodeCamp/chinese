> -   原文地址：[The Ultimate Guide to Flexbox — Learning Through Examples](https://www.freecodecamp.org/news/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676/)
> -   原文作者：[Emmanuel Ohans](https://www.freecodecamp.org/news/author/emmanuel/)
> -   译者：sunnysly123
> -   校对者：

![The Ultimate Guide to Flexbox — Learning Through Examples](https://cdn-media-1.freecodecamp.org/images/1*9vcCT6S_dFJqR6yed6Vmqw.png)

![](https://cdn-media-1.freecodecamp.org/images/DDLwRS3Jad5brv0RIH2r5K2YxqcvAa1vBThw)

注意 — 这篇文章篇幅较长，如果需要的话，你可以在[这里][1]下载文章后离线阅读。

理解 **Flexbox**最好的方式是什么？学好基础，再大量练习。这正是我们要在这篇文章中做的事情。

### 要注意的几点

-   这篇文章预设你是一名中级开发者，并且对 Flexbox 有点了解。但是。。。
-   如果你对 CSS 有些了解，但是完全不知道 Flexbox，[我写了一篇综合指南（免费文章，阅读时间约为 46 分钟）][2].
-   如果你对 CSS 掌握得不是很好，我推荐你阅读 [CSS 全面（实用）指南 (74 课时的付费课程)][3]。
-   你不需要遵照这里列出的示例顺序。
-   Flexbox 只是一种布局的技巧。实际项目中涉及到的东西除了布局还有很多。
-   当你看到例如 `div.ohans` 的例子，这代表类名是 `ohans`的 div

### 例 1: 如何用 Flexbox 制作一个影片集

使用 Flexbox 实现横向纵向排列比大多数人想象的要简单。

例如一个如下的简单标识文本：

```plain
<main class="gallery">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg">  <img src="/sample.jpg"></main>
```

`main.gallery` 里有十张图片。

假定 `main.gallery` 覆盖整个可见屏幕。

```plain
.gallery {   min-height: 100vh}
```

#### 有关图片的快速标记

图片默认是一个 inline-block 元素，有宽高，通常排列在同一行（除了图片尺寸有限定，一行排不下的情况）。

#### 起始点

把所有图片放在一起，上面的标识文本显示效果如下：

![](https://cdn-media-1.freecodecamp.org/images/s2ntfDqrLewl66sGtavdhgQybTyD2JX520r2)

10 张图片本身的宽高尺寸保持不变，在需要的时候自动换行，很好;)

现在，看下 Flexbox 的效果:

```plain
.gallery {    display: flex }
```

现在，图片的默认属性已经发生改变。它们从 `inline-block` 元素变成了 `flex-items.`

由于 `.gallery` 里的 Flexbox 布局，里面的图片会被压缩排列在一行内，而且它们会被纵向拉伸成这样：

![](https://cdn-media-1.freecodecamp.org/images/sEzCWC3d-xoorKjDGf8TMdq6-ZxtOFMQjIST)

图片都被纵向拉伸，并且挤在一行内，不能更丑 :(

这就是由于 Flexbox 布局的默认展示方式:

1\. 将所有的子元素压在一行内，不换行。

这并不适用于图片库，因此我们可以这样改变：

```plain
.gallery {    flex-wrap: wrap}
```

这样所有的元素会在适当的位置换行成多行排列。

![](https://cdn-media-1.freecodecamp.org/images/JGAnqvkIeN-q8vh1beADx0XUrUE6SEZkGQFp)

因为 wrap 值的改变，现在图片换行排列

2\. 现在图片有换行，但是仍然被纵向拉伸。我们当然不想要这样变形的布局。

`stretch` 显示是因为 `flex` 里默认的 `align-items` 值。

```plain
align-items: stretch
```

我们可以改成这样：

```plain
.gallery {  ...  align-items: flex-start}
```

这样图片不会拉伸，而是保持它们默认的宽和高。

如下所示，它们会在纵向保持首部对齐。

![](https://cdn-media-1.freecodecamp.org/images/02VgeT3SyoxuWFwkqyD1pzEjFzUjMH160mn0)

现在图片都没有变形。这才是我们在使用 Flexbox 之前想要的效果。

现在我们就有了使用 Flexbox 的强大图片集。

#### 使用 Flexbox 的优点

此刻 Flexbox 似乎没展现出什么优势，图片还是像使用 **Flexbox** 之前一样。

除了能得到一个免费的响应式图片集外，使用 Flexbox 的另一个优势就是它的对齐选项。

还记得 flex 容器 `.gallery` 设定的样式 `flex-direction: row` `justify-content: flex-start` 和 `align-items: flex-start.`

如下所示，改变默认值，我们就可以立马改变图片库的布局。

```plain
.gallery {   ...   justify-content:center;}
```

![](https://cdn-media-1.freecodecamp.org/images/etSBjIv9EwausQZC8PCe3tdHj0JovaLXkNvs)

图片在水平方向上完美居中。

如上所示，这会让图片水平居中。

```plain
.gallery {   ...   justify-content:center;   align-items: center;}
```

![](https://cdn-media-1.freecodecamp.org/images/jSx35Bma2fYhAISiEg0B3TcZanxoy0hPOb8D)

再进一步，我们可以让图片完美居中对齐（无论是水平还是垂直）

如上所示，这可以让图片在 `.gallery` 内水平和垂直都居中。

你可以通过 Flexbox 的布局方式随意选择你想要的对齐选项。

也可以在 [CodePen][4]查看 Flexbox 图片库的实时布局效果。

### 例 2：如何通过 Flexbox 布局卡片

卡片在网上很流行，无论是 Google, Twitter 还是 Pinterest，每个网站都在使用卡片。

卡片是一种在弹性容器内组合相关信息的页面设计方式，视觉上很像一种玩的卡片。

有很多使用卡片的优秀案例，其中一个常用的就是臭名昭著的价格表。

![](https://cdn-media-1.freecodecamp.org/images/wjb-g2V7hV6IvRbGaDHYmAePhTjwR5ZeekkX)

价格表模型

让我们来建一个。

#### 标识文本

我们给每个卡片设定一个如下的标识：

```plain
<section class="card">  <header>  </header>
```

```plain
  <ul>    <li></li>    <li></li>    <li></li>  </ul>  <button></button></section>
```

这里有至少 3 个卡片，我们把这些卡片包在 `div.cards`里

```plain
<div class="cards"></div>
```

现在已经有了一个父元素。在这个例子中，父元素充满整个视图。

```plain
.cards {   min-height: 100vh}
```

#### 建立 Flexbox 布局

下面的代码块新建了一个在 `.cards` 里面的 Flexbox 布局样式。

```plain
.cards {  display: flex;  flex-wrap: wrap}
```

如果你还记得上一个例子， `flex-wrap` 可以让 `flex-items` 元素换行。

由于子元素排列需要更大的宽度，所以子元素不能在父元素内排列时就会换行。

接下来我们给 `.card` 元素一个初始宽度。

使用 Flexbox 如下布局:

```plain
.card {  flex: 0 0 250px}
```

这个样式将 `flex-grow` 和 `flex-shrink` 的值设为 0， `flex-basis` 值为 `250px`。

这时，卡片会在页面的起始处对齐，并且竖向排列。

![](https://cdn-media-1.freecodecamp.org/images/dkco2Y-Dru2WyMonIq51riqbYtjVr2Zn3E4T)

卡片首部对齐

这有时可能满足你的使用需求，但大部分情况下，都不行。

#### Flex 容器的默认值

上面的布局效果是由于 flex 容器的默认布局设置。

卡片在页面内靠左上角对齐，因为 `justify-content` 的值默认为 `flex-start` 。

同时，卡片垂直拉伸充满整个父元素的高度，因为 `align-items` 的默认值是 `stretch` 。

#### 改变默认值

我们可以通过改变 Flexbox 提供的默认值来达到更好的效果。

看下面几个例子：

![](https://cdn-media-1.freecodecamp.org/images/hq7D1wJINa5-DC77TMt4e517xOAG6C46yKZ3)

align-items: flex-start; justify-content: center

![](https://cdn-media-1.freecodecamp.org/images/R8-ShSWPknA8m7CBl1UNMj4qdbhycAIp1D9r)

align-items: flex-end; justify-content: center

![](https://cdn-media-1.freecodecamp.org/images/B9jkLQHZp7Cze2rEPkE8mzUfBDRWuf5nXFYP)

align-items: center; justify-content: center

你可以在[CodePen][5]看最终的效果。

### 例 3：如何使用 Flexbox 创建网格布局

在这个例子中，我们要探讨整体的 CSS 框架概念，这是很重要的一点。

#### 什么是网格布局

网格是用来构建内容的一系列水平垂直相交引导线。

![](https://cdn-media-1.freecodecamp.org/images/06AK1XPmRT2w0zMezFzS2W50a8-xxwmujZEb)

一系列水平垂直相交引导线

如果你对 Bootstrap 这样的 CSS 框架比较熟悉，那你之前一定使用过网格布局。

你所掌握的内容可能不一样，但这个例子会涵盖不同的网格布局类型。

我们先来看第一种，**基本网格布局**

#### 基本网格布局

![](https://cdn-media-1.freecodecamp.org/images/emC8Q5HRNl1dVcCGxvvheVNZYpQ0Ce05-MMc)

一组列宽度相同的基础网格

这些网格有以下特点：

-   网格单元格平均布局并充满整行。
-   单元格高度一致。

使用 Flexbox 很容易实现这个效果，看下面这个标识文本：

```plain
<div class="row">  <div class="row_cell">1</div></div>
```

每个 `.row` 都是自己的 flex 容器。

`.row` 里的每个元素也就是 flex 元素，所有的 flex 元素都平均分布在一行中。

根据设计，无论有 3 个子元素

```plain
<div class="row">  <div class="row_cell">1/3</div>  <div class="row_cell">1/3</div>  <div class="row_cell">1/3</div></div>
```

6 个子元素

```
<div class="row">  <div class="row_cell">1/6</div>  <div class="row_cell">1/6</div>  <div class="row_cell">1/6</div>  <div class="row_cell">1/6</div>  <div class="row_cell">1/6</div>  <div class="row_cell">1/6</div></div>
```

或是 12 个子元素，都是没影响的

```plain
<div class="row">  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div>  <div class="row_cell">1/12</div></div>
```

#### 解决方案

达到这个效果只需要两步：

1.  新建一个 Flexbox 布局文本：

```plain
.row {   display: flex;}
```

2\. 扩大每个 `flex-item` 元素，让它们以相同比例均匀的布满整行：

```plain
.row_cell {   flex: 1}
```

就是这样

#### 方案解释

```plain
flex: 1
```

`flex` 是 `flex-grow` 、 `flex-shrink` 和 `flex-basis` 三个不同 Flexbox 属性的缩写。

`flex: 1` 只有 `1` 的值，这个值代表的是`flex-grow` 属性。

而 `flex-shrink` 和 `flex-basis` 则分别设置为 `1` 和 `0`。

```plain
flex: 1  === flex: 1 1 0
```

#### 有确定大小的网格元素

有时候你需要的效果并不是同样大小的水平网格布局。

你可能想要一个元素是其他的两倍，或者几分之一。

![](https://cdn-media-1.freecodecamp.org/images/CKD3-ZUoxNAOJ-bp-cUZ0XcxnnMB1OvvA2yX)

水平网格布局中的元素是其他的两倍或 3 倍。

实现方式很简单。

对于这些有确定大小的网格元素，只需要加一个这样的修饰符类：

```plain
.row_cell--2 {   flex: 2}
```

加上这个类，可以看到第一个 `div` 子元素代码如下：

```plain
<div class="row">  <div class="row_cell row_cell--2">2x</div>  <div class="row_cell">1/3</div>  <div class="row_cell">1/3</div></div>
```

加上 `.row__cell--2` 类名的元素会是其他默认元素的两倍大小。

一个占可用空间 3 倍的元素：

`.row_cell--3 {`  
`flex: 3`  
`}`

#### 有确定对齐方式的网格元素

多亏了 Flexbox 布局，我们不需要给每个元素设置特定的对齐值。你可以给任何一个元素设定不同的对齐方式。

通过下面的修饰符类，可以达到这样的效果：

```plain
.row_cell--top {  align-self: flex-start}
```

这可以让特定的元素在 `row` 内靠顶部对齐。

![](https://cdn-media-1.freecodecamp.org/images/rSpBVp7JoobnRoc0-Vsb6CjfzyKxO9c5pUwq)

应用.row_cell — top 类可以让特定的元素在 `row` 内靠顶部对齐。

你一定有在标识文本中给特定元素加上这个类。看文本中第一个 `div` 子元素：

```plain
<div class="row">  <div class="row_cell row_cell--top"></div>  <div class="row_cell"></div>  <div class="row_cell"></div></div>
```

下面是其他可选的对齐方式：

```plain
.row_cell--bottom {  align-self: flex-end}
```

![](https://cdn-media-1.freecodecamp.org/images/V76ETVyzFX4E7HLQ3MLr03LSH6GkYnvjEzNa)

给特定的元素加上.row_cell — bottom 类会让它在 `row` 内靠底部对齐。

```plain
.row_cell--center {  align-self: center}
```

![](https://cdn-media-1.freecodecamp.org/images/N-KfRijROiUyGtSj6RTAZmZjNZZ5A3Djf2NA)

给特定的元素加上.row_cell — center 类会让它在 `row` 内居中对齐。

#### 行内对齐

像特定的元素可以对齐一样，行内子元素也可以整体对齐。

可以使用下面的修饰符类达到这样的效果：

```
.row--top {   align-items: flex-start}
```

![](https://cdn-media-1.freecodecamp.org/images/le3bablkysAG-j-JEQQdHyBvvjiCbIfZP2Bs)

一行上的三个元素都靠顶部对齐。

需要注意的一个重点是，修饰符类 `.row--top` 一定要被加在 `row` 或是父元素 `flex-container` 上。

```plain
<div class="row row--top">  <div class="row_cell"></div>  <div class="row_cell"></div>  <div class="row_cell"></div></div>
```

其他的对齐选项见下：

```plain
.row--center {   align-items: center}
```

![](https://cdn-media-1.freecodecamp.org/images/NVv3xZxxaIbyPHDJTxp5LdcG-Be0wolyXiCb)

整行的三个元素都居中对齐。

```plain
.row--bottom {   align-items: flex-end}
```

![](https://cdn-media-1.freecodecamp.org/images/OsI1AJj-F4BMIJQAMN82bY6MXqTxvwmZkw3J)

整行的三个元素都靠底部对齐

#### 嵌套网格

只需要简单的设置，rows（行元素）就可以嵌套布局。

![](https://cdn-media-1.freecodecamp.org/images/2eyhYZJlDdZXJkiLuwGYSoB83KKPxnfgfjCg)

一行内有两个元素，其中一个是另一个的两倍大小。一行三个元素居中嵌套排列在较大的元素里。

你可以在 [created here][6]查看最终的布局效果。

#### 更多网格布局

当你可以用 Flexbox 垂直网格甚至更复杂的参数实现好看的网格构造时，就可以把这个很好的工具用于工作。学习，掌握然后使用 [CSS 网格布局][7]，这是 CSS 网格布局的最终解决方案。

### 例 4：如何使用 Flexbox 构建网站布局

社区通常不建议整个网站布局都使用 Flexbox。

虽然我赞同这个观点，但是我也认为在特定的情况下你可以不用考虑这么多。

我能给到最重要的一点建议是：

> **_在你需要的时候使用 Flexbox 布局_**

我会在下面的例子中解释这点。

#### 圣杯布局

有什么网站布局方式比“圣杯布局”更经典呢？

![](https://cdn-media-1.freecodecamp.org/images/9HvLwuqluns72rMdkVL4SMf5pyPQMxFb9mSi)

圣杯布局 — 头部, 页脚和 3 个其他的容器。

有两种 Flexbox 方式可以实现这种布局。

第一种是用 Flexbox 来实现布局。把 `header`, `footer`, `nav`, `article` 和 `aside` 都放在一个 `flex-container` 容器里。

我们开始。

#### 标识语言

看下下面这个基本的标识语言：

```plain
<body>  <header>Header</header>  <main>    <article>Article</article>    <nav>Nav</nav>    <aside>Aside</aside>  </main>  <footer>Footer</footer></body>
```

其中，圣杯布局遵循了一个特殊的规则，这个规则启发了上面的标识语言：

中间的那列 `article` 应该在 `nav` 和 `aside` 两个侧边栏之前显示出来。

![](https://cdn-media-1.freecodecamp.org/images/YDZbT2gN-JVcBRbvAkXYasm3Hqo-Q7VtxbU9)

“<article></article>” 居中布局且先显示在页面上。

#### 建立一个 Flexbox 格式文本

```plain
body {   display: flex}
```

因为子元素应该从顶部到底部布局，所以我们要改变 Flexbox 的默认方向。

```plain
body { ... flex-direction: column}
```

**1**. `header` 和 `footer` 要有固定的宽度

```plain
header,footer {  width: 20vh /*可以使用像素单位，例如200px*/}
```

**2.**`main` 要填满 `flex-container` 中剩下的部分。

```plain
main {   flex: 1}
```

你一定没忘记， `flex: 1` 代表 `flex-grow: 1` , `flex-shrink: 1`和 `flex-basis: 0`。

![](https://cdn-media-1.freecodecamp.org/images/eBj3j7v59T5PYdH8sBCadGevCVyOlPfuMIqR)

这可以让 `main` “变大” 填满剩下的可用空间。

此刻，我们要开始考虑 `main` 中的 `article`, `nav`和 `aside` 三个部分。

把 `main` 设成一个 `flex-container` ：

```plain
main {  display: flex}
```

给 `nav` 和 `aside` 以固定的宽度：

```plain
nav,aside {  width: 20vw}
```

然后确保 `article` 填满剩下的可用空间：

```plain
article {   flex: 1}
```

![](https://cdn-media-1.freecodecamp.org/images/3--f-KqkBdvx8jv6n9mhmA354cP7OvgS4Ayz)

现在 `"article"` 填满剩下的可用空间

现在还需要做一件事。

把 `flex-items` 重新排序这样 `nav` 会展示在第一位：

```plain
nav {  order: -1}
```

![](https://cdn-media-1.freecodecamp.org/images/rN1l8s8aO44ecL8RBUIG824WpUNHBIyl5iLo)

最终效果 [https://codepen.io/ohansemmanuel/full/brzJZz/][8]

`order` 属性用来重新排序 `flex-items` 的位置。

容器中所有 `flex-items` 都会以 **增大的** `order` 值排列， `flex-item` 中 `order` 值最小的会排列在最前面。
所有的 `flex-items` 元素默认 `order` 值都是 `0`。

#### 圣杯布局 (另一种布局方式)

之前的方式是把 `flex-container` 作为一个整体的容器。这个布局非常依赖 Flexbox。

我们来了解一种更为“理智”的方法。首先再来看下最终要达到的效果：

![](https://cdn-media-1.freecodecamp.org/images/UIy61i1OzIjdddu2W5i9NvL74JXjY5sclt8i)

圣杯布局

`header` 和 `footer` 可以被当做块状元素。 在没有任何干预的情况下，它们会在从顶部到底部，填满父级元素。

```plain
<body>  <header>Header</header>  <main>    <article>Article</article>    <nav>Nav</nav>    <aside>Aside</aside>  </main>  <footer>Footer</footer></body>
```

使用这种方法，唯一需要作为 `flex-container` 的就是 `main` 元素。

使用这个方法有个缺点就是你要自己计算 `main` 的高度。 `main` 应该填满除 `header` 和 `footer.`外的空间。

```plain
main {  height: calc(100vh - 40vh);}
```

上面的代码块使用 CSS 中的 `calc` 来计算 `main.`的高度。

不管怎样， `main` 的高度都要等于 `calc(100vh — 头部的高度 — 页脚的高度 ).`

在之前的解决方案中， `header` 和 `footer` 都有一个固定的高度，接下来再通过同样的方法计算 `main` 的高度。

你可以在 [actual results here][9] 中查看最终效果。

#### 两列网页布局

两列布局很常见，这也可以用 Flexbox 轻松实现。

![](https://cdn-media-1.freecodecamp.org/images/Mk-G8NgfEsSoMlzbafucKr5IUHOiSAcr4cEp)

包含边栏和主内容的两列布局。

看下以下标识文本：

```plain
<body>  <aside>sidebar</aside>  <main>main</main></body>
```

先建一个 Flexbox 格式文本：

```plain
body {  display: flex;}
```

给 `aside` 一个固定的宽度：

```plain
aside {   width: 20vw}
```

最后，确保 `main` 填满剩下的可用空间：

```
main {  flex: 1}
```

这样就差不多可以了。

### 例 5：使用 Flexbox 布局媒体对象

媒体对象随处可见。从 tweets 到 Facebook 上的发贴, 大部分页面设计似乎都会选择媒体对象。

![](https://cdn-media-1.freecodecamp.org/images/hoOVQQcGFJ-EivoJRCqOTXynRzq88ye3zzE6)

Tweet 和 Facebook 上的发帖示例

看下下面这个标识文本：

```plain
<div class="media">  <img class="media-object" src="/pic.jpg">  <div class="media-body">    <h3 class="media-heading"> Header </h3>    <p></p>  </div></div>
```

你应该已经猜到了， `.media` 会使用 Flexbox 布局：

```plain
.media {   display: flex}
```

`container` 中的 `flex-items` 默认是在 `flex-container` 中垂直拉伸，填满可用高度。

确保 `.media-body` 填满剩下的可用空间：

```plain
.media-body {   flex: 1}
```

![](https://cdn-media-1.freecodecamp.org/images/zJRJJ8NeVDHI1FNdnsKF5mpeRXjabOb-zVk9)

左边的盒子拉伸填满可见屏幕。媒体主体在媒体对象（白色部分）内横向填满剩下的空间。

我们来调整下拉伸的盒子模型。

```plain
.media {  ...  align-items: flex-start}
```

![](https://cdn-media-1.freecodecamp.org/images/hkcBJNNimRRArL6iPiDoFN3UdSJSHdRazWlw)

弹性项目在媒体对象中从起点对齐。现在图片保持默认大小，没有变形拉伸 :)

就是这样。

#### 画报媒体对象

![](https://cdn-media-1.freecodecamp.org/images/GL7OTu019Ov2HtElcXKhObmhreC86yEDpKK0)

画报媒体对象是图片在媒体对象的另一边（右边）。

创建画报媒体对象不需要改变 `html` 元素的顺序。

只需要让弹性项目像这样重新排序：

```plain
.media-object {   order: 1}
```

这样图片就会排列在 `.media-body` 和 `media-heading` 之后。

#### 媒体对象的嵌套

你甚至可以不改变已有的 CSS 样式来继续用嵌套布局媒体对象。

```plain
<div class="media">  <img class="media-object" src="/pic.jpg">  <div class="media-body">    <h3 class="media-heading"> Header </h3>    <p></p>        <!--nested-->    <div class="media">    <img class="media-object" src="/pic.jpg">    <div class="media-body">        <h3 class="media-heading"> Header </h3>        <p></p>    </div>    </div><!--end nested-->  </div> </div>
```

可以了！

![](https://cdn-media-1.freecodecamp.org/images/cH3o4d2UTkqB1qWCqymnvLjyGpmJ3mmEq-Ro)

媒体对象在其中巢状布局。

#### 字符码媒体对象

我们不用只拘泥于图片。

在不改变已经写好的 CSS 样式情况下，你可以用字符码来代替图片。

```plain
<div class="media">  <div class="media-object">?</div>  <div class="media-body">    <h3 class="media-heading"> Header </h3>    <p></p>  </div></div>
```

我在那里放了一个 emoji 表情。

![](https://cdn-media-1.freecodecamp.org/images/i5nrdZwTbOz3vGgZZUAwyqaG9GZEzWJSmh8i)

带有 emoji 表情的媒体对象

上面用一个包含适当表情的编码来代替 `img` 。你可以在[这里][10]获取更多的 emoji 表情。

#### HTML 实体媒体对象

你也可以使用如下的 [html 实体][11] 。

```plain
<div class="media">  <div class="media-object">☎</div>  <div class="media-body">    <h3 class="media-heading"> Header </h3>    <p></p>  </div></div>
```

这里使用的 html 实体是 `☎` ，效果如下：

![](https://cdn-media-1.freecodecamp.org/images/ssilgIfm3znqoCXzkmUXSnOuvziC5MauRQ0h)

html 实体, ☎

你可以在 [CodePen][12]查看这些例子的效果。

### 例 6：如何使用 Flexbox 建立表单元素

现在很难找到没有一两个表单的网站了。

![](https://cdn-media-1.freecodecamp.org/images/h8nCEyfprhm-MuBBUjW-vpd7W2LY6L2tdmYg)

表格输入框，前后加其他元素

看下面这段标识文本：

```plain
<form class="form">  <input class="form__field">  <button class="form__item">…</button></form><form class="form">  <span class="form__item">…</span>  <input class="form__field"></form><form class="form">  <span class="form__item">…</span>  <input class="form__field">  <button class="form__item">…</button></form>
```

这个例子展示了输入框与按钮或是文字的结合，我们仍可以用 Flexbox 轻松解决。

新建一个 Flexbox 格式文本：

```plain
.form {  display: flex}
```

确保输入框填满可用空间：

```plain
.form__field {   flex: 1}
```

最后，你可以按照你喜欢的方式在前后放入文字或者按钮。

```plain
.form__item {  ... }
```

你可以在 [CodePen][13]里看到这个例子的完整效果。

### 例 7：如何使用 Flexbox 来创建一个手机 App 布局

在这个例子中，我会带你一起来打造一个如下的手机应用布局：

![](https://cdn-media-1.freecodecamp.org/images/FDxWh9vQBhjQ2L6pSyb2w4QuqJvIjjuXElFF)

我们将通过 Flexbox 建立的手机应用布局

不过这个例子有点不同。

我会解释用代码建立手机布局的过程，你可以尝试完成。

这是一个让你 **熟练** 的方式。

#### 第一步

剥离出 iPhone 的页面布局，我们得到下面这个：

![](https://cdn-media-1.freecodecamp.org/images/cH4ifH1HxdWH9M7IpSEphw9dz7op6WJ7KM8v)

骨架屏布局

#### 第二步

将主体部分定义成一个 `flex-container`

![](https://cdn-media-1.freecodecamp.org/images/gGlfDGRg8mSHNpD-PqZGNI9JnIzTCQiSOWrb)

将格式化文本建立成一个弹性容器。

#### 第三步

`flex-container` 默认的 `flex-direction` 属性是 `row`。在这个例子中，我们要把它变成 `column` 。

![](https://cdn-media-1.freecodecamp.org/images/C1KEFWls3---EMGS2nEiLh8pXnk6a2YOH7x0)

改变 3 个子元素也就是 `flex-items` 的默认布局方向

#### 第四步

给元素 1 和元素 3 一个固定的高度 `height: 50px.`

#### 第五步

元素 2 要有一个填满可用空间的高度。使用`flex-grow` 或是简写的 `flex` 写法 `flex: 1.` 。

#### 第六步

最后，像之前的例子一样，把每个块状元素当成一个媒体对象。

![](https://cdn-media-1.freecodecamp.org/images/ZD4lqIbYDidmyyCu-lGXi9QXpKjaX7eOUScN)

把内容块当成媒体对象。

按照上面的六个步骤可以成功建立一个手机应用布局。

### 想要更专业

免费下载我的 CSS 网格布局参考手册，还可以免费获得两节优质的响应式 Flexbox 课程！

![](https://cdn-media-1.freecodecamp.org/images/Hisu3Q2Yz70DyjZSPfJ3Dr0gnZ9eB38g152g)

[点击免费获得免费的 CSS 网格布局手册 + 两节优质的课程！][14]

[现在去领][15]

[1]: https://payhip.com/b/YVGf
[2]: https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af
[3]: http://bit.ly/learn_css
[4]: https://codepen.io/ohansemmanuel/full/dzgLLw/
[5]: https://codepen.io/ohansemmanuel/full/Ljqdpa/
[6]: https://codepen.io/ohansemmanuel/full/xLBLLG/
[7]: https://medium.com/flexbox-and-grids/how-to-efficiently-master-the-css-grid-in-a-jiffy-585d0c213577
[8]: https://codepen.io/ohansemmanuel/full/brzJZz/
[9]: https://codepen.io/ohansemmanuel/full/brzybZ/
[10]: https://emojipedia.org/
[11]: https://www.w3schools.com/html/html_entities.asp
[12]: https://codepen.io/ohansemmanuel/full/jLJbGL/
[13]: https://codepen.io/ohansemmanuel/full/ZJPmNj/
[14]: http://eepurl.com/dcNiP1
[15]: http://eepurl.com/dcNiP1
