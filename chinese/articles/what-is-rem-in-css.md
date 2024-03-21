> -  原文地址：[CSS REM – What is REM in CSS?](https://www.freecodecamp.org/news/what-is-rem-in-css/)
> -  原文作者：[
                    
                        Slimane Aguersif
                    
                ](https://www.freecodecamp.org/news/author/slimane/)
> -  译者：Papaya HUANG
> -  校对者：

![CSS REM – What is REM in CSS?](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/rem-in-css-cover-image.jpeg)

在这篇文章中，我会讨论一些 CSS 中 REM 的用例。

首先我会介绍关于 CSS 属性和值的一些必要的背景知识，然后我会对比绝对长度值和相对长度值。REM 是相对长度值。

最后两部分，我会介绍在字体大小方面 REM 的用处，如何通过 REM 实现响应式网页。让我们开始吧！

## 基础知识

这部分我会通过介绍一些 CSS 知识来引入。

### 什么是 CSS?

CSS（层叠样式表）通过属性和值幻化出来网页上的美学魔法。

假设你需要通过一个精雕细琢的边框来增强图片的美感，你希望这条边框是条黑色实线。这时`border`就是你需要选择的属性，而`solid`就是这个属性对应的值。在 CSS 中这两个关键字帮助你创建出理想边框。

你或许会猜想一定还有更多各种各样的值，毕竟仅仅一条实心线做的边框是不足以装点你的页面的。

`border`属性确实接受不同的关键字、颜色和长度值。 这是因为 `border` 是 `border-width`、 `border-style` 和`border-color`的缩写。因此，除了分别声明每一个属性，`border`还可以一次性接受所有这些属性的值，如下：

```css
border: 2px solid #ffff00;
```

使用边框缩写属性

在上面的代码片段中，`2px`是边框长度的值， `solid` 是边框样式的一个关键字， RGB16 进制`#ffff00` 代表黄色。 于是我们就创造了一个还不错的边框。（好啦，我知道不太美观，但你懂我的意思！）

在正式介绍 REM 之前，还需要说明一下，不同的属性对应不同的与之匹配的值。这些值的合集被称作`值类型`或者`数据类型`。

让我们来借助上个例子说明这个概念。`color`就是一种值类型，RGB16 进制值`#fff00`（代表黄色）是这个值类型的一个具体值。为了帮助理解，你可以把值类型看作类型，具体的值看作这些类型的个例。

所以一旦你不知道某个属性接受什么类型的值，搜索`值类型`，就可以获得答案。

### CSS 中的 REM 是什么？

REM 就是一种值类型，R 代表的是 Root（根）。REM 是一种长度类型的值/数据。另一种长度类型就是我们的老朋友像素（`px`）。任何接受长度作为值的属性都可以使用 REM：其中包括`margin`、`padding`等。

你可能会好奇，为什么我们要使用 REM，答案就在下一章。

## CSS 中的相对长度值和绝对长度值

在 CSS 中有两种长度值：绝对长度值和相对长度值。

### 绝对长度值

绝对长度值包括： `px` （1 英寸的九十六分之一), `in` (1 英寸) 和 `cm` (相当于 37.8px 或 25.2/64 英寸)。 可以在[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)查看更多例子。

当使用绝对长度值的时候，你可以确保任何情况他们的大小几乎保持不变。当你知道输出大小的准确尺寸时它就派上用场，如在整页模式下。但如果有多种屏幕样式需求的话，绝对长度值就不奏效了。

更别说因为个人喜好或者浏览器的无障碍性造成的浏览器的不同设置。

### 相对长度值

相对长度值代表另一类值，包括：`REM`、 `EM`和 `vw`。 之后我们会详细讲解`REM`，在这里我先简单说说其他的单位。

`EM`的大小定义：

-   在处理`font-size`属性时，与父元素的字体大小有关；
-   在处理其他一些属性，如`height`时，与元素自身的字体大小有关。

`vw` 代表窗口宽度的 1%。 也就是说如果你把`width`设置为 10vw，元素就会占窗口 10%的宽度。 其他长度参见[这里](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)。

相对长度值的优势非常明显，可以用它们来构建响应式网站。即网站会根据你的设定，有规律地自适应屏幕大小。

## 根 EM（REM）和根字体大小

REM 的大小取决根元素的字体大小。根元素通过伪类`:root`或者`html`选择器选定。

因此`1rem`继承了根元素`font-size`的大小。 也就是说在整个 CSS 代码中 1REM 的大小保持不变。 如果用户没有修改根元素的大小，字体大小默认为 `16px`。

请看下面的例子:

```CSS
html {
	font-size: 18px; // default value would be 16
}

h1 {
 	font-size: 2rem; // 2 * 18px = 36px;
}
```

反推出 `2rem` 等于多少 `px`并不难， 但为了计算设置为 1.125rem (即 16 \* 1.125: `18px`)的副标题的像素大小，你真的要在手边准备一台计算器吗?

好在有一个简化方法。记住你可以用百分比来设定根元素的字体大小，所以开发者们发现根元素默认大小的 62.5%等于 `10px`。这样计算就变得容易多了：

```
html {
	font-size: 62.5%; // 16px * 0.625 = 10px;
}

h1 {
	font-size: 1.8rem; // 10px * 1.8 = 18px;
}
```

考虑到无障碍性，`font-size`必须设定为 REM（或者其他相对长度值）。 因为在一些浏览器中，如果长度值为`px`，即便浏览器设置改变了，字体大小也不会改变。

对于视力障碍人群来说，或许需要放大 4 倍才能看清文本。使用 REM 可以确保文字按需呈现大小，因为这样的话，文字大小由用户选择的字体大小默认值来决定。

## 响应式网页设计中的 REM

响应式网页设计是一个综合性话题，包含不同的方面的内容。freeCodeCamp 有两个相关课程。（如果感兴趣，你可以查看[https://www.freecodecamp.org/learn](https://www.freecodecamp.org/learn)）

接下来我会讲解 REM 是如何辅助构建响应式网站的。

在这篇[文章](https://web.dev/responsive-web-design-basics/#optimize-text-for-reading)中可以看到，谷歌鼓励将一行文字的词数控制在 10 个以内，这个规定符合经典的可读性理论。

谷歌建议在确定的断点使用媒体查询，这样内容或文本行的宽度就不会太长，给用户提供最佳的阅读体验。

以下例子，灵感来源 Adrian Sandu 的[文章](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) :

```CSS
html {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}

#divOne {
  width: 100%;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding: 0.5rem;
  background-color: lightblue;
}

@media (min-width: 27.1875rem) { // first breakpoint: 27.1875*16px= 435px 
  p {
    font-size: 1.6rem;
  }
#divOne {
  width: 41.8rem;
  background-color: yellow;
  margin: auto;
  }
}

@media (min-width: 40.78125rem) { // 1.5 * first breakpoint: 653px
  p {
    font-size: 2.4rem; // 1.5 * font-size first breakpoint
  }
#divOne {
  width: 62.7rem; // 1.5 * width of first breakpoint
  background-color: green;
  padding: 0.75rem; // 1.5 * padding of first break point
  margin: auto;
  }
}
```

响应式网站例子

你可以在 [codePen](https://codepen.io/slimattcode/pen/jOaJrjZ?editors=0100) 查看效果。可以调整窗口大小观察布局的变化。

你可能会注意到在上面的例子中，在媒体查询的定义中的 `1rem`始终为`16px`。但在媒体查询代码块中， `1rem`的大小随着根元素`font-size`的值变化，根元素为 62.5%的`16px`，所以这里的`1rem`为`10px`。

出现这种情况，是因为媒体查询代码块中的 REM 始终继承浏览器默认字体大小，通常情况下是`16px`。一旦用户更改了默认设定，REM 就会随之变化，以适配用户指定的一些无障碍设定需求。

上面的代码采取了手机优先的设计策略。我把第一个断点定义为`435px`。注意在这个断点内，文本的宽度始终不变化，但是文本周围的留白成比例改变，约为之前的 1.5 倍。下面是分步骤图解：

当窗口宽度小于 435px 时的布局:

![Capture-1](https://www.freecodecamp.org/news/content/images/2022/03/Capture-1.JPG)

容器占手机屏幕宽度的 100%

当窗口宽度介于`435px`与`652px`之间时的布局:

![Capture1](https://www.freecodecamp.org/news/content/images/2022/03/Capture1.JPG)

容器中的文本大约 10 个词一行

当窗口宽度大于 `652px`时的布局:

![Capture2](https://www.freecodecamp.org/news/content/images/2022/03/Capture2.JPG)

## 总结

在这篇文章中我们探索了 CSS 中的 REM。我们可以利用相对长度值 REM 来有逻辑地规划网站中的字体大小。

REM 也可以适应无障碍需求，满足更改了默认`font-size`用户的需求。

最后我们也探索了如何使用 REM 构建响应式网页，同时适配用户改变浏览器默认设置后的变化。

在写这篇文章的时候，我借鉴了以下内容：

-   [通过例子学习 CSS 单位– Em, Rem, VH, and VW](https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/) 作者 —— Joy Shaheb
-   [CSS 单位指南: 解释 CSS 中的 em、remvh、vw 等](https://www.freecodecamp.org/news/css-unit-guide/)来自 freeCodeCamp
-   [CSS 单位对抗: EM 和 REM 之间的战斗](https://www.freecodecamp.org/news/em-units-versus-rem-units-fight-382c16af8a67/)  作者——ZAYDEK
-   [CSS 中的 REM: 理解并使用 REM 单位](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) 作者——Adrian Sandu
-   [CSS 的值和单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)、[长度](https://developer.mozilla.org/en-US/docs/Web/CSS/length)、[字体大小](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)  来自 MDN
-   [无障碍响应式设计](https://web.dev/accessible-responsive-design/)  作者—— Dave Gash、 Meggin Kearney、Rachel Andrew 和 Rob Dodson
-   [响应式布局基础](https://web.dev/responsive-web-design-basics/)  作者—— Pete LePage 和 Rachel Andrew

封面图作者 **[Sora Shimazaki](https://www.pexels.com/nl-nl/@sora-shimazaki?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)** 来自 Pexels。
