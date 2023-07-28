> -  原文地址：[CSS Background Color – How to Change the Background Color in HTML](https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/)
> -  原文作者：[Ilenia Magoni](https://www.freecodecamp.org/news/author/ilenia/)
> -  译者：seanbei
> -  校对者：

![CSS Background Color —— 如何更改 HTML 中的背景颜色](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/html-background-color.png)

假设你已经创建了 HTML 网页，现在想给它加点颜色——可能是更改字体颜色，又或是设置一个漂亮的背景色。你会怎么做呢？

在这篇文章中，我将向你展示，如何用几种不同的方式更改页面的背景颜色。

# 如何更改一个 HTML 元素的背景色

想要改变一个 HTML 元素的背景色，你可以使用 `background-color` 这个 CSS 属性，给它赋上一个颜色值。

```CSS
p {
  background-color: pink;
}
```

上面的代码给段落设置了粉色的背景。

例如，这份代码将使得 HTML 页面中的所有段落元素拥有一个粉色的背景，因为 `background-color` 属性的值是 `pink`。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-16.png)

你可以使用大约 140 种颜色，例如 `teal`、`hotpink`、`indigo` 等等。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-23.png)

你可以使用的一些可能的颜色名称

注意：如果你给一个元素设置了 background-color，但是没有看到变化，很可能是一个语法错误，也可能是因为没有给这个元素设置宽和高。尝试放一些内容进去，或者通过 CSS 属性 `width` 和 `height` 给它设置宽和高。

实际上大概有 1680 万种颜色可供你使用。你可以通过 RGB 值来使用它们。还有 HSL 颜色，大约有 370 万种可供你选择。在下一节中，你将了解所有这些创建颜色的不同方法。

# 不同的颜色表示

`background-color` 属性接受颜色作为可能的值。这里，你将看到四种不同的颜色值表示法。

第一种是颜色名称，差不多有 140 个关键字可供你使用。这是最简单的一种选择颜色的方式，因为它不要求掌握特殊符号——但它的选择范围有限。

第二种、第三种命名或者选择颜色的方式分别是用 RGB 值和十六进制值。这两种方式里，颜色由它们包含的红色、绿色和蓝色的数量来标识。

这源自于屏幕显示颜色的工作原理。屏幕由像素组成，每个像素由绿、蓝和红三种不同颜色的 LED 点亮，它们可以发出不同强度的光。

第四种表示法是 HSL 颜色，或者 Hue-Saturation-Lightness。这种表示来自平面设计，因为它反映了人类思考颜色的一种更自然的方式：纯色（色调），其饱和度和亮度可以变化。

你可以使用任意一种方式来给背景设置颜色，但是让我们来看更多的细节，以便你选择你中意的方式。

## HTML 颜色名称

HTML 的第一个版本中能识别出 16 种基本颜色。现在你可以使用 140 多种命名颜色。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-24.png)

16 种基本颜色

```CSS
body {
  background-color: black;
}
```

这条 CSS 将 `body` 赋予黑色背景

![](https://www.freecodecamp.org/news/content/images/2021/08/image-17.png)

一个 HTML 页面的例子，其中 `body` 被赋予了 `black` 的 `background-color`

你可以在文章末尾的附录中看到所有命名的颜色。

## RGB 颜色

RGB 代表 Red-Green-Blue。在这种格式下，颜色被写成 `rgb(0,0,0)`，其中每个值都是介于 `0` 和 `255` 之间的数字，分别表示用于组成每种颜色的红色、绿色和蓝色的数量。

例如，`rgb(0,0,0)` 表示黑色。

要获得红色，你可以写成 `rgb(255,0,0)`，使得红色最大化为 `255`，绿色为 `0`，蓝色为 `0`。

通过较小数值的绿色和（或）蓝色，以及少一点的红色，你可以得到红色的其他变种。例如，用 `rgb(255,69,0)` 可以得到橘红色，用 `rgb(139,0,0)` 可以得到深红色。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-25.png)

上面提到的 rgb 值的颜色。

```CSS
div {
  background-color: rgb(139,0,0);
}
```

给 `div` 元素设置深红色背景。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-18.png)

一个 HTML 页面的例子，其中 `div` 元素被赋予了 `rgb(139,0,0)` 的 `background-color`

下面的例子展示了，当调整其中两个 RGB 值时，颜色是如何变化的：彩色方块的左上角等于 `rgb(0,0,0)`，右上角等于 `rgb(0,0,255)`，左下角等于 `rgb(0,255,0)`，右下角等于 `rgb(0,255,255)`。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-28.png)

幸运的是，你不需要靠猜测数值来获得你想要的颜色。你可以在网上找到各种各样的颜色选取器，让你使用滑块（或其他方法）选择颜色并提供给你要使用的 RGB 颜色值。

## 十六进制颜色

十六进制颜色是编写 RGB 颜色的另一种方式。对于十六进制，依然有三个数字，每种颜色对应一个，每一个数字有 256 种可能的值。

但是，在这种情况下，每种颜色有两个数字，分别从 `0` 到 `F`（也就是，`0`，`1`，`2`，`3`，`4`，`5`，`6`，`7`，`8`，`9`，`A`，`B`，`C`，`D`，`E`，`F`)。一位数字有 16 个可能的值，两位数字有 256 个可能的值，从 `00` 到 `FF`（255）。

用十六进制颜色编写时，要在数值的前面加一个 `#`。例如，红色写成 `#FF0000`，深红色写成 `#8B0000`，橘红色写成 `#FF4500`。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-2.png)

上一节中提到的颜色。

```
h1 {
  background-color: #FF4500;
}
```

给 `h1` 元素设置橘红色背景。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-19.png)

一个 HTML 页面的例子，其中 `h1` 元素被赋予了 `#FF4500` 的 `background-color`

你也可以用颜色选取器来生成十六进制值。

### 十六进制简写

你可以用简写的形式来写十六进制数值，只用三位数而不是六位数。例如，你可以将红色写成 `#F00`。这将可能的颜色数量减少到略高于 4000，但写入时间较短，有时这很重要。

每个数字代替两个相同的数字，所以我们无法将 `#8B0000` 简写，因为 `8` 和 `B` 不一样。但是我们可以写 `#800`，这等价于 `#880000`，非常接近深红色。橘红色可以写成 `#F40`（等价于 `#FF4400`）。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-8.png)

上一节中提到的颜色。

## HSL 颜色

HSL 表示 Hue-Saturation-Lightness，这是一种目前为止我们看到的完全不同的颜色书写方式。

HSL 颜色用三个数字表示：色调从 `0` 到 `360`，饱和度和亮度从 `0` 到 `100`。

色调决定了基色，它的值是一个角度，色轮上的度数。在这种情况下，红色是 `0`，绿色是 `120`，蓝色是 `240`，然后 `360` 依然还是红色。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-11.png)

所有可能的颜色仅改变色调，左侧色调为 0，右侧色调为 360。

饱和度从 `0` 开始，也就是灰色，到 `100`，也就是全色。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-9.png)

红色饱和度变化，左侧为 0%，右侧为 100%。

亮度是添加到颜色中的黑色或白色的数量。`0` 表示黑色，`50` 是颜色其本身，`100` 表示白色。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-10.png)

亮度变化，左侧为 0%，右侧为 100%。

例如，你要将红色写成 `hsl(0,100%,50%)`，橘红色写成 `hsl(16,100%,50%)`，深红色写成 `hsl(0,100%,27%)`。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-26.png)

相比其他配色方案，使用 HSL 更容易找到相似的颜色。从红色以及它的变种色，你已经看到，要获取更深的红色，你只需要改变亮度的百分比就可以了，而将红色与其他颜色相混，足以改变其色调。

让我们用十六进制的混合颜色来看看它的效果，如橙色（`#FFA500` 或 `rgb(255,166,0)`），写成 HSL 就是 `hsl(39,100%,50%)`。通过提高亮度，你可以得到一个更亮的橙色。

例如，写成 `hsl(39,100%,65%)` 就能得到更亮的橙色，而用其他表示法，你需要写成 `rgb(255,193,77)` 或者 `#FFC14D`。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-27.png)

![](https://www.freecodecamp.org/news/content/images/2021/08/image-20.png)

一个 HTML 页面的例子，其中 `main` 元素被赋予了 `hsl(39, 100%, 65%)` 的 `background-color`

你也可以在网上找到用于 HSL 颜色的选取器。

# 属性名简写

你也可以使用简写的 `background` 属性来设置背景色.

```CSS
p {
  background: pink;
}

body {
  background: black;
}

div {
  background: rgb(139,0,0);
}

h1 {
  background: #FF4500;
}

main {
  background: hsl(39,100%,65%);
}
```

与前面看到的 CSS 属性一样，只是换成了 `background` 简写属性。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-21.png)

一个 HTML 页面的例子，其中所有元素都被赋予了一种背景色。

这是一个更通用的属性，[因为它是各种 `background` 属性的简写](/news/learn-css-background-properties/)，如 `background-image` 和 `background-position`。当你将它与颜色值一起使用时，它的作用与 `background-color` 完全一样。

# 总结

你已经学习了如何给 HTML 元素设置背景色，可以用 `background-color` 属性以及它的简写属性 `background`，也学习了不同的颜色表示法。

现在你拥有了为网页添加任何颜色所需的所有工具。好好享受吧！

# 附录

## 全部 140 多种命名颜色

![](https://www.freecodecamp.org/news/content/images/2021/08/CodePen-colored-squares-2.png)

## 拼写的变体

包含单词 “Gray” 的颜色名称，也可以写成像下面这样，拼写成 “Grey”。

![](https://www.freecodecamp.org/news/content/images/2021/08/image-22.png)
