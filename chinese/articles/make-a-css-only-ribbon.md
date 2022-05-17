> -  原文地址：[How to Create a CSS-Only Ribbon for Your Website](https://www.freecodecamp.org/news/make-a-css-only-ribbon/)
> -  原文作者：[Temani Afif](https://www.freecodecamp.org/news/author/temani-afif/)
> -  译者：Humilitas
> -  校对者：

 ![How to Create a CSS-Only Ribbon for Your Website](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/final-header-ribbon.png)

你注意过网站上那些漂亮的丝带效果吗？它们可以用来提醒用户关注一些新特性或者大事件。这个效果很棒，不过对于很多开发者来说，创建这种效果却并不简单。

网上有很多现成的组件，很容易就能找到开箱即用的代码，不过很难对它们做自定义的修改。还需要做很多调试工作并处理报错，直到它们满足需求为止。

本文会介绍如何使用 CSS 创建两种不同类型的丝带效果，使用这种方式就不再需要浪费时间去一直调试了。

这是我们将要创建的效果：

![Rotated Ribbon & Folder Ribbon](https://www.freecodecamp.org/news/content/images/2022/02/image-18.png)

旋转丝带 & 折叠丝带

下面是两种丝带效果的完整代码，看得出来它们非常简洁：

点击查看完整代码

```html
  <div class="box">
    <div class="ribbon-2">Folded Ribbon</div>
  </div>
  <div class="ribbon-1 left">Rotated Ribbon</div>
  <div class="ribbon-1 right">Rotated Ribbon</div>

```

```css
  .ribbon-1 {
    position: fixed;
    background: #08769b;
    box-shadow: 0 0 0 999px #08769b;
    clip-path: inset(0 -100%);
  }
  .left {
    inset: 0 auto auto 0;
    transform-origin: 100% 0;
    transform: translate(-29.3%) rotate(-45deg);
  }
  .right {
    inset: 0 0 auto auto;
    transform-origin: 0 0;
    transform: translate(29.3%) rotate(45deg);
  }

  .ribbon-2 {
    --f: 10px; /* 控制折叠部分*/
    --r: 15px; /* 控制丝带形状 */
    --t: 10px; /* 上方偏移距离 */

    position: absolute;
    inset: var(--t) calc(-1*var(--f)) auto auto;
    padding: 0 10px var(--f) calc(10px + var(--r));
    clip-path:
      polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f)) 100%,
        calc(100% - var(--f)) calc(100% - var(--f)),0 calc(100% - var(--f)),
        var(--r) calc(50% - var(--f)/2));
    background: #BD1550;
    box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
  }

  .box {
    max-width:500px;
    height:200px;
    margin:50px auto 0;
    background:lightblue;
    position:relative;
  }

```

## 如何创建旋转丝带效果

这种丝带通常用来在屏幕顶部展示固定的信息，当然也可以用在页面元素上。

为了理解旋转丝带的创建过程，我们来看下面的步骤示意图：

![Step-by-Step illustration of the Rotated Ribbon](https://www.freecodecamp.org/news/content/images/2022/02/image-19.png)

旋转丝带实现步骤示意图

首先，将丝带元素置于屏幕左上角，红色边框表示屏幕（或者想要在其上添加丝带的页面元素）的边界。

```css
.ribbon {
  position: fixed;
  inset: 0 auto auto 0;
  background: #08769b;
}
```

目前没什么复杂的。也许你不太了解 `inset` 属性，它其实是 `top`、`right`、`bottom` 和 `left` 属性的简写。

接下来，将元素向左偏移：`translate(-29.3%)`。

之后，旋转元素：`rotate(-45deg)`，现在完整代码如下：

```css
.ribbon {
  position: fixed;
  inset: 0 auto auto 0;
  background: #08769b;
  transform-origin: 100% 0; /* 或 top right */
  transform: translate(-29.3%) rotate(-45deg);
}
```

也许你会很好奇，这个 `29.3%` 是怎么得来的？它的计算公式为：`100% * (1 - cos(45deg))`。

这里就不做枯燥的数学解释了，总之结果就是旋转之后完美地放置了这个元素（它的左上角和右上角正好处于边界位置）。

你可能还注意到了 `transform-origin: top right`，这个步骤是将旋转的参考点指定为右上角。

现在元素已经正确地放置了，还需要填充边界的空白。我用一个很大的阴影（`box-shadow`）来实现，在示意图中用绿色来表示以便区分，实际上它的颜色应该和背景色（`background`）一致。

接着需要裁切这个阴影，让它只显示左右两边的部分。我会用到 `clip-path`，`inset(0 -100%)` 表示将上下两边的阴影裁切掉（值为 `0`），只显示左右两边（值为 `-100%`）。

这里的 `999px` 也可以是别的值，只要它足够大，比如 `100vmax`——能确保正确显示出左右两边的阴影就行。

现在可以看到最终结果了，其实还有一些溢出的阴影，但是由于元素放在了屏幕左上角边界，所有没人看得见。

如果想把丝带用在页面中的元素上，别忘了给它的父元素设置 `overflow: hidden`，还要把 `fixed` 改成 `absolute`。

最终代码如下：

```css
.ribbon-1 {
  position: fixed;
  inset: 0 auto auto 0;
  background: #08769b;
  transform-origin: 100% 0;
  transform: translate(-29.3%) rotate(-45deg);
  box-shadow: 0 0 0 999px #08769b;
  clip-path: inset(0 -100%);
}
```

我们只用了 7 个样式声明就实现了旋转丝带效果。我们的代码是通用的，并不依赖于其中的文字内容。不论丝带中的内容是什么，它都能正确的展示，甚至可以展示多行文本。

想要把丝带放在右上角的话，只需要修改几个属性值。更好的做法是使用两个样式来分别控制：

```css
.ribbon-1 {
  position: fixed;
  background: #08769b;
  box-shadow: 0 0 0 999px #08769b;
  clip-path: inset(0 -100%);
}
.left {
  inset: 0 auto auto 0; /* top 和 left 的值为 0 */
  transform-origin: 100% 0; /* 或 top right */
  transform: translate(-29.3%) rotate(-45deg);
}
.right {
  inset: 0 0 auto auto; /* top 和 right 的值 0 */
  transform-origin: 0 0; /* 或 top left */
  transform: translate(29.3%) rotate(45deg);
}
```

我觉得上面的代码是自解释的，`.left` 和 `.right` 两个样式之间的区别也不难理解。

## 如何创建折叠丝带

同样的，一起来看示意图：

![Step-by-Step illustration of the Folded Ribbon](https://www.freecodecamp.org/news/content/images/2022/02/image-20.png)

折叠丝带实现步骤示意图

首先，将元素放置在父元素的右边

```css
.ribbon-2 {
  --t: 10px; /* 上方偏移距离 */

  position: absolute;
  inset: var(--t) 0 auto auto;
  padding:0 10px;
  background: #BD1550;

}
```

我定义了一个变量来控制元素上方的偏移距离，以便通过这个变量来调整丝带的位置。因为用到了 `position: absolute`，所以别忘了给丝带的父元素指定 `position: relative`。

我还在左右两边增加了一些内边距（padding），这里指定的 `10px` 并没有什么特殊含义——你想指定其他值也可以。

现在要引入另一个变量来控制折叠的部分，我用这个变量来定义一个内嵌的阴影：`box-shadow: 0 calc(-1*var(--f)) 0 #0005`。

正如你在上图中看到的，这个阴影在元素底部生成了一个半透明的黑色色块，高度由 `--f` 变量指定。我增加了底部内边距，留出展示阴影的空间：`padding: 0 10px var(--f)`。

接着，继续使用 `--f` 变量，将丝带往右偏移：把 `right:0` 更改为 `right: calc(-1*var(--f))`。

现在代码如下：

```css
.ribbon-2 {
  --t: 10px; /* 上方偏移距离 */
  --f :10px /* 控制折叠部分 */

  position: absolute;
  inset: var(--t) calc(-1*var(--f)) auto auto; /* right 属性合并到这里了*/
  padding:0 10px var(--f);
  background: #BD1550;
  box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
}
```

代码看起来可能有点奇怪（实现的效果也是），不过下一步我们会创建出最终的形状，到时一切就都能说得通了。

最后一步，我们要引入 `clip-path` 来裁切元素。我加入了一个变量 `--r` 来控制丝带箭头的形状。

在加入 clip-path 之前，首先增加左内边距，为箭头形状留出充足空间：

```css
padding: 0 10px var(--f) calc(10px + var(--r));
```

*   上内边距为 `0`
*   右内边距为 `10px`（一个随机值）
*   下内边距由 `--f` 指定
*   左内边距为 `10px`（与右内边距相同）与变量 `--r` 的值之和

现在加入 `clip-path`，下图可以帮助我们理解如何通过裁切路径得到最终的形状。

![image-22](https://www.freecodecamp.org/news/content/images/2022/02/image-22.png)

裁切路径示意图

路径由 7 个点组成，从点 (1) 开始，跟随箭头方向，可以得到以下代码：

```css
clip-path: polygon(
  0 0,  /* (1) */
  100% 0, /* (2) */
  100% calc(100% - var(--f)), /* (3) */
  calc(100% - var(--f)) 100%, /* (4) */
  calc(100% - var(--f)) calc(100% - var(--f)), /* (5) */
  0 calc(100% - var(--f)), /* (6) */
  var(--r) calc(50% - var(--f)/2) /* (7) */
)
```

如果不熟悉 `clip-path` 也无需担心——虽然看着可能有点陌生。你并不需要操作这个路径，只需要改动 CSS 变量来控制形状就行了。

当然，试着改动一些数值来调整路径能够帮助你更好地理解它的原理。

完工了。最终代码如下：

```css
.ribbon-2 {
  --f: 10px; /* 控制折叠部分*/
  --r: 15px; /* 控制丝带形状 */
  --t: 10px; /* 上方偏移距离 */

  position: absolute;
  inset: var(--t) calc(-1*var(--f)) auto auto;
  padding: 0 10px var(--f) calc(10px + var(--r));
  clip-path:
    polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f)) 100%,
      calc(100% - var(--f)) calc(100% - var(--f)),0 calc(100% - var(--f)),
      var(--r) calc(50% - var(--f)/2));
  background: #BD1550;
  box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
}
```

可以通过调整变量数值来获取不同的效果：

![right-ribbon](https://www.freecodecamp.org/news/content/images/2022/02/right-ribbon.png)

与旋转丝带类似，我们也可以通过修改几个属性值，从而将丝带位置从右边移到左边——不过这里我就不给出代码了，留给你自己去尝试。

尝试理解需要调整的各个参数（尤其是 `clip-path`）是很好的做法。有任何问题都可以[随时找我](https://twitter.com/ChallengesCss)。

## 总结

现在你学会了如何使用 CSS 制作漂亮的丝带效果了。

我还写了[另外一篇关于制作丝带效果的文章](https://dev.to/this-is-learning/fully-responsive-css-folded-ribbon-11h5)，有兴趣的话可以看看。其中详细介绍了如何制作旋转的折叠丝带——它结合了本文介绍的两种效果。

感谢阅读！

想要了解更多 CSS 技巧，可以关注我的 [Twitter](https://twitter.com/ChallengesCss)。
可以[为我买杯咖啡](https://www.buymeacoffee.com/afif)或[赞助我](https://www.patreon.com/temani)以表达对我的支持。
