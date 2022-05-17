> -  原文地址：[CSS Shapes Explained: How to Draw a Circle, Triangle, and More Using Pure CSS](https://www.freecodecamp.org/news/css-shapes-explained-how-to-draw-a-circle-triangle-and-more-using-pure-css/)
> -  原文作者：[Thomas Weibenfalk](https://www.freecodecamp.org/news/author/thomas-weibenfalk/)
> -  译者：ZhichengChen
> -  校对者：

![CSS Shapes Explained: How to Draw a Circle, Triangle, and More Using Pure CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/delila-ziebart-b0GSCFJ-Gzg-unsplash.jpg)

开始阅读之前。如果你对视频形式免费内容感兴趣。不要错过我的 Youtube 频道，我每周都会发布前端相关的视频。

[https://www.youtube.com/user/Weibenfalk](https://www.youtube.com/user/Weibenfalk)  

\----------  

你也是 Web 开发和 CSS 的初学者吗？有没有好奇过网页上那些漂亮的图形是如何用 CSS 搞定的？ 没错。你来对地方了。

下面我将解释使用 CSS 创建图形的基础知识。这个话题**很宏大**！ 因此，我不会涵盖所有（远非全部）方法和图形，本文的目的是让你对如何使用 CSS 创建图形有一个基本的了解。

有些图形比常规图形需要更多的“骇客和技巧”。通常使用 **width、height、top、right、left、border、bottom、transform** 以及 **:before** 和 **:after** 等伪元素的组合来创建 CSS  图形。也可以使用更流行的 CSS 属性来创建图形，比如 **shape-outside** 和 **clip-path。** 下面会一一介绍。

## **CSS 图形 - 基本方式**

通过一些 CSS 技巧可以创建基本图形，例如正方形 _、_ 圆形以及用常规 CSS 创建的三角形。接下来具体看一看。

### 正方形和长方形

正方形和长方形是最容易实现的图形。默认情况下，div 就是正方形或长方形。

设置宽度和高度，设置一个背景颜色，如下所示。

```css
#square {
    background: lightblue;
    width: 100px;
    height: 100px;
}
```

![square](https://www.freecodecamp.org/news/content/images/2020/01/square.png)

CSS 正方形

###   

###  圆形

创建一个圆形也很简单。在元素上设置 border-radius。这将在元素上创建圆角。

如果将其设置为 50%，将会变成一个圆形。 如果宽度和高度不相等，将得到一个椭圆形。

```css
#circle {
    background: lightblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
```

![circle](https://www.freecodecamp.org/news/content/images/2020/01/circle.png)

CSS 圆形

### 三角形

三角形有点棘手。元素边框的端点相交形成 45 度夹角。如果将元素的宽度和高度设置为零，元素的实际宽度也就是边框的总宽度。

别忘了，元素上的边框边缘组成了元素的对角线。可以用这个思路来创建三角形。将其中一个边框设置为纯色，将其他边框设置为透明色，就形成了一个三角形。

![borders](https://www.freecodecamp.org/news/content/images/2020/01/borders.png)

CSS 边框的倾斜边缘

```css
#triangle {
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 80px solid lightblue;
}
```

![triangle](https://www.freecodecamp.org/news/content/images/2020/01/triangle.png)

CSS 三角形

如果想让三角形指向另一个方向，可以更改与希望可见的一侧相对应的边框值。另外可以直接使用 _transform_ 属性旋转元素。

```css
 #triangle {
     width: 0;
     height: 0;
     border-top: 40px solid transparent;
     border-right: 80px solid lightblue;
     border-bottom: 40px solid transparent;
 }
```

![triangle2](https://www.freecodecamp.org/news/content/images/2020/01/triangle2.png)

另一个 CSS 三角形

以上就是对 CSS 基本图形的介绍。如果想创建其它图形。利用这些基础图形，发挥你的创造力和决心，通过基本的 CSS 属性可以实现更多图形。

在某些情况下，对于更高级的形状，使用 :after 和 :before 伪选择器也是一个不错的选择。但这超出了本文的范围，因为我的目的是介绍基础知识帮助入门。

### 弊端

**上述方法有一个很大的缺点。** 例如，如果希望文本环绕图形展示。通过常规 HTML div 的背景和边框构成的图形无法做到这点。文本并不会自适应常规 div 元素环绕其展示。它和常规的 div 展示方式相同。

下图展示了三角形以及文本的布局方式。

![textflow-bad](https://www.freecodecamp.org/news/content/images/2020/01/textflow-bad.png)

幸运的是，我们可以利用一些现代 CSS 属性来轻松的做到这一点。

## CSS 图形——另一种方式

在 CSS 中有一个叫做 **shape-outside** 的属性。此属性可以使文本环绕图形展示。

对于这个属性，有一些基本的形状：

**inset()**  
**circle()  
ellipse()  
polygon()**

**提示**：还可以使用 **clip-path** 属性。用同样的方式创建图形，但它不会像 shape-outside 那样让文本环绕图形。

要使用 shape-outside 属性使文字环绕图形，图形元素必须是浮动的。 它还必须具有指定的的宽度和高度。 **这一点很重要！**

可以在 [此处](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside) 阅读更多。下面是从 developer.mozilla.org 链接中摘抄的文本。

> **`shape-outside`**的 [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。

### inset()

inset() 类型可以创建能设置偏移量的矩形/正方形，用于文本环绕。它提供了设置环绕文本与图形重叠距离的值。

可以将所有四个方向的偏移量指定为相同值，如下所示：**inset(20px)**。也可以为每个方向单独设置：**inset(20px 5px 30px 10px)**。

偏移量还可以使用其他单位，例如百分比。这些值对应如下： **inset(top right bottom left)**_**.**_

如下面的代码示例。将 inset 值指定为顶部 20px、右侧 5px、底部 30px 和左侧 10px。如果想让文本不和正方形重叠，可以不使用 inset() 。 而是在 div 上设置背景并像往常一样指定大小。

```css
 #square {
     float: left;
     width: 100px;
     height: 100px;
     shape-outside: inset(20px 5px 30px 10px);
     background: lightblue;
 }
```

![inset](https://www.freecodecamp.org/news/content/images/2020/01/inset.png)

文本按指定值偏移。 在这里，顶部 20 像素，右侧 5 像素，底部 30 像素，左侧 10 像素

也可以给 inset() 第二个值，指定图形的的 border-radius。 如下所示：

```css
 #square {
     float: left;
     width: 100px;
     height: 100px;
     shape-outside: inset(20px 5px 30px 10px round 50px);
     background: lightblue;
 }
```

![inset2](https://www.freecodecamp.org/news/content/images/2020/01/inset2.png)

图形的 border-radius 设置为 50px

### circle()

在这里，使用 **shape-outside** 属性创建了一个圆形。还需要给 **clip-path** 设置相应的值才能够显示。

**clip-path** 属性可以采用与 shape-outside 属性相同的值，因此可以将它设置为 **shape-outside** 的 **circle()**。 另外，请注意，在此处的元素上应用了 20px 的边距，以便为文本留出一些空间。

```css
#circle {
    float: left;
    width: 300px;
    height: 300px;
    margin: 20px;
    shape-outside: circle();
    clip-path: circle();
    background: lightblue;
}
```

![circle-shape-margin-1](https://www.freecodecamp.org/news/content/images/2020/01/circle-shape-margin-1.png)

文字环绕图形布局！

在上面的例子中，没有指定圆的半径。这是因为我希望它与 div 一样大（300px）。如果想为圆指定不同的大小，可以这样手动设置。

circle() 有两个值。第一个值是 radius，第二个值是 position。这些值将确定圆的中心。

在下面的示例中，将 radius 设置为 50%。将圆心移动了 30%。请注意，必须在 radius 值和 position 值之间使用 "at" 一词。

我还在 clip-path 上指定了另一个 position 值。当我将 position 设置为零时，这会将圆形裁成两半。

```css
 #circle {
      float: left;
      width: 150px;
      height: 150px;
      margin: 20px;
      shape-outside: circle(50% at 30%);
      clip-path: circle(50% at 0%);
      background: lightblue;
    }
```

![circle2](https://www.freecodecamp.org/news/content/images/2020/01/circle2.png)

### ellipse()

椭圆形与圆形类似。可以同时定义 X 值和 Y 值，如下所示：**ellipse(25px 50px).**

和圆一样，也可以加一个 position 值作为最后一个值。

```css
   #ellipse {
      float: left;
      width: 150px;
      height: 150px;
      margin: 20px;
      shape-outside: ellipse(20% 50%);
      clip-path: ellipse(20% 50%);
      background: lightblue;
    }
```

![ellipse](https://www.freecodecamp.org/news/content/images/2020/01/ellipse.png)

### polygon()

多边形是定义了不同顶点/坐标的形状。下面创建了一个 "T" 形，这是我名字中的第一个字母。从坐标 0,0 开始，从左向右移动以创建“T”形。

```css
#polygon {
      float: left;
      width: 150px;
      height: 150px;
      margin: 0 20px;
      shape-outside: polygon(
        0 0,
        100% 0,
        100% 20%,
        60% 20%,
        60% 100%,
        40% 100%,
        40% 20%,
        0 20%
      );
      clip-path: polygon(
        0 0,
        100% 0,
        100% 20%,
        60% 20%,
        60% 100%,
        40% 100%,
        40% 20%,
        0 20%
      );
      background: lightblue;
    }
```

![polygon_t](https://www.freecodecamp.org/news/content/images/2020/01/polygon_t.png)

### Images 图片

还可以使用具有透明背景的图像来创建形状。 就像下面这轮美轮美奂的月亮。

这是透明背景的 .png 图像。

![moon](https://www.freecodecamp.org/news/content/images/2020/01/moon.png)

```html
<img src="src/moon.png" id="moon" />
```

```css
#moon {
      float: left;
      width: 150px;
      height: 150px;
      shape-outside: url("./src/moon.png");
    }
```

![moon2](https://www.freecodecamp.org/news/content/images/2020/01/moon2.png)

就是这样！ 感谢您的阅读。

## 关于本文作者

我叫 Thomas Weibenfalk，是来自瑞典的开发者。我经常在 Youtube 频道上创建免费教程。有一些关于 React 和 Gatsby 的高级课程。 可以通过以下链接找到我：

Twitter — [@weibenfalk](https://twitter.com/weibenfalk),  
Weibenfalk on [Youtube](https://www.youtube.com/c/weibenfalk),  
Weibenfalk [Courses Website](https://www.weibenfalk.com).
