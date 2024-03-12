> -  原文地址：[Every CSS Background Property Illustrated and Explained with Code Examples 🎖️](https://www.freecodecamp.org/news/learn-css-background-properties/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：Miever1
> -  校对者：

![每个CSS背景属性说明和解释的代码示例 🎖️](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/FreeCodeCamp--1-.png)

今天我们将学习 CSS 中 **background** 的各个属性及其对应的  **值**。我们也会学习其 **简写**。让我们开始吧！🏅

# 目录

-   [所有属性](#all-properties)
-   [background-image](#background-image)
-   [background-size](#background-size)
-   [background-repeat](#background-repeat)
-   [background-position](#background-position)
-   [background-origin](#background-origin)
-   [background-clip](#background-clip)
-   [background-attachment](#background-attachment)
-   [background-color](#background-color)
-   [简写](#short-hand)
-   [总结](#conclusion)

如果你喜欢这篇文章也可以在 YouTube 上观看本教程:

# 所有属性

这是我们今天要讨论的 **所有属性** 的列表。 末尾的红色文本是 **简写**。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l25y304vndphll4795hr.png)

## 什么是 CSS 背景（background）属性?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iic3rs5ewx8c9xp6vryq.png)

CSS 背景（background）属性让我们可以控制图像的大小和属性，这样我们就可以为不同大小的屏幕制作 **响应性强的** 图像。它能帮助我们创建响应式网页。

例如，

-   **background-size** 属性允许我们根据屏幕大小重置图像的宽度和高度。
-   **background-position** 属性允许我们告诉浏览器将图像放在屏幕上的何处。

以及其他的一些功能！

## 如何设置项目

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u72rvfe5181640ikqa32.png)

在编码之前，你需要知道一点 HTML, CSS 的相关知识，以及如何使用 VS code。

要测试属性及其值，请遵循以下步骤 👇

1.  创建一个名为 'BACKGROUND-PROJECT' 的文件夹并在 VS code 中打开。
2.  创建 `index.html` 和 `style.css` 文件。
3.  在 VS code 中安装 'live server'
4.  开启 live server

## HTML

在 HTML 文件的 **body 标签** 中创建一个类名为 'container' 的 div。

```html
   <div class="container"></div>
```

## CSS

在 CSS 中，你 **必须** 为容器提供一个高度，否则将不会看图像。 在我们的例子中，我们将它设置为 100vh，像这样:

```css
.container{
  height : 100vh;
}
```

## 下载项目的图像

图像在我的 **[GitHub repository](https://github.com/JoyShaheb/Project-image-repo/tree/main/Background-property-images)** 中。 以下是如何获得它们:

1.  请复制并访问以上链接 ☝️
2.  点击[downgit](https://minhaskamal.github.io/DownGit/#/home)，然后粘贴你复制的链接
3.  按照视频中的步骤 👇

![Down Git Video](https://cloud.githubusercontent.com/assets/5456665/17822364/940bded8-6678-11e6-9603-b84d75bccec1.gif)

然后我们就准备好了!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nmf39ig7wzdiunfje9lr.png)

让我们开始编程吧 😊

# CSS 中的 background-image 属性

使用这个属性，我们可以为元素添加背景图像。


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rhoch2auowlf2xdf4h8f.png)

在写完类名之后写如下语法: 👇

```CSS
.container{
// 将图像 路径/URL 写到如下引号内
   background-image  :  url(' ');
}
```

我们可以通过 **两种方式** 使用 background-image 属性

-   通过图像的路径
-   通过具体的 **图像 URL**

### 如何通过图像路径使用 `background-image` 属性

下面是使用图像路径时的 background-image 语法 👇

```CSS
.container{
// 引号中填入的相对路径 👇
  background-image: url(' ');
}
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jfuda4p0ki1hish775o.png)

当你想在 CSS 中指定一个图像路径时，有三种情况:

1.  当 `image` 和 `style.css` 在同一文件夹下
2.  当 `image` 在下一级文件夹中
3.  当 `image` 上一级文件夹中

当 `image` 和 `style.css` 在 **同一文件夹** 时, 它看起来像下面这样。👇


注意 **`kitty.png`** 和 **`style.css`** 在同一父级文件夹 **Background-project** 下:

![](https://www.freecodecamp.org/news/content/images/2021/04/Frame-25--1--1.png)

要设置 `kitty.png` 的文件路径，在 `style.css` 中要编写以下代码:

```css
 .container{
   background-image : url("kitty.png");
   
   height: 100vh;
// 设置大小和停止图像拉伸
   background-repeat : no-repeat;
   background-size : contain;
 }
```

当图像在 **下一级文件夹**，`style.css` 在上一级文件夹时。注意，下图中的`kitty.png` 在 Assets 文件夹中，而 `style.css` 在上一级文件夹中。

![Alt Text](https://www.freecodecamp.org/news/content/images/2021/04/Frame-26.png)

要设置 `kitty.png` 的文件路径，我们需要在 `style.css` 中的引号后面写一个点和斜杠，就像这样(./)。然后我们写入文件夹的名称，然后斜杠(/)，最后我们写入 image 的名称，像这样: 👇

```css
 .container{
   background-image : url("./Assets/kitty.png");

   height: 100vh;
// 设置大小和停止图像拉伸
   background-repeat : no-repeat;
   background-size : contain;
 }
```


如果图像是在 **上一级文件夹** 中，我们需要返回。注意，在下图 👇 中，`style.css` 在 **src** 文件夹中，`kitty.png` 在**src 文件夹外**。


![Alt Text](https://www.freecodecamp.org/news/content/images/2021/04/Frame-27.png)

要设置 `kitty.png` 的文件路径，我们要在 `style.css` 中的引号后面写两个点和一个斜杠(../)。然后我们写下图像的名称，像这样: 👇

```css
 .container{
   background-image : url("../kitty.png");

   height: 100vh;
// 设置大小和停止图像拉伸
   background-repeat : no-repeat;
   background-size : contain;
 }
```

### 如何通过链接使用 `background-image` 属性

这个非常简单。将正确的链接插入到 `url()` 中即可。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/szxp3jqyjyksrep1ep82.png)

要使用一个是 **链接** 的图像，我们需要写以下代码:

```css
//example ->
 .container{
    background-image : url("https://dev-to-uploads.s3.amazonaws.com/uploads/articles/szxp3jqyjyksrep1ep82.png");

  height: 100vh;
// 设置大小和停止图像拉伸
   background-repeat : no-repeat;
   background-size : contain;
 }
```

### 休息一下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4diremjrrbvcm2o4l77m.png)

# CSS 中的 background-size 属性

我们可以通过调整图像的 `background-size` 来调整图像大小。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xxbrgckb20fy8tmrg9ik.png)

在写完类名之后写如下语法: 👇

```CSS
.container{
// 我们将在这里写下值 👇
  background-size  : cover;
}
```

你可以通过 **3 种方式** 使用 background-size 属性

-   使用 Cover / Contain 值
-   设置图像宽度和高度
-   使用 auto

让我们从讨论 **cover 和 contain 值** 开始

Bear 大小 : \[718px X 614px\]

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uixn5c8mrafpmlhth9iy.png)

### Cover 值

为此，我们必须包含一个图像，为其设置高度，并禁止图像重复。我们在 CSS 中这样做: 👇

```css
.container{
  background-image : url('cute-bear.png');
  background-repeat: no-repeat;
  background-size : cover;

// 我们必须包含一个图像，设置它的高度，并像这样停止图像重复: 👇
  height : 100vh;
}
```

当我们使用这个属性时，当我们调整窗口大小的时候，它也会将图像拉伸到整个屏幕。请看下面的视频: 👇

![Cover](https://media.giphy.com/media/9OdZ0B1wjO1kdofBBu/giphy.gif)

### contain 值

步骤相同 - 我们必须包含一个图像，设置它的高度，并禁止图像重复，如下: 👇

```css
.container{
  background-image : url('cute-bear.png');
  background-repeat: no-repeat;
  background-size : contain;

// 在此必须设置高度
  height : 100vh;
}
```

即使我们调整窗口的大小，他的值也不会发生改变。 请看下面的视频: 👇

![Contain](https://media.giphy.com/media/VaqDcSh38DTz7YbV6p/giphy.gif)

### 图像宽度和高度

通过 background-size 属性我们可以调整图像的宽度和高度。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/36p9azoztkvawbvy6244.png)

以下是 CSS 中的语法: 👇

```css
.container{
// 这我们可以看到宽度 👇  和  👇 高度
  background-size : 200px   200px;
}
```

当然，不要忘记插入一张图像， 设置其高度，禁止重复。代码如下：

```css
.container{
  background-image : url('cute-bear.png');
  background-repeat: no-repeat;

// 这我们可以看到宽度 👇  和  👇 高度
  background-size : 200px  200px;

// 必须包含高度
  height : 100vh;
}
```

### Auto sizing

当我们使用这个值的时候，图像会保持其原来的大小。其不会随着我们调整窗口大小而改变。如下：

![](https://media.giphy.com/media/hHc7ZhU7BB4NX8gLRR/giphy.gif)

# CSS 中的 background-repeat 属性

这个属性会使对应图像重复多次。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/629rnxirqrdr8p5fapcd.png)

我们在写完类名之后编写如下 CSS 语法 👇

```CSS
.container{
// 在这里改变值 👇
  background-repeat : repeat;
}
```

这个属性有 6 个值：

-   repeat
-   repeat-x
-   repeat-y
-   no-repeat
-   space
-   round

下面是这六个值中每个值的结果。注意在这个例子中 kitty 的大小是 \[200px X 200px\]。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj2jwfwh0pboqpylkeq0.png)

![Round](https://media.giphy.com/media/3BUBxpCxmcDrBN4aZF/giphy.gif)

![Space](https://media.giphy.com/media/cO0jNSpVi0I3FWD62G/giphy.gif)

现在，我们来研究一下每个值会发生什么。但在此之前，我们需要插入一张图像并使用了 `background-image` 属性，像这样：

```css
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat :  ; // 我们在这里写对应属性值

   height : 100vh;
}
```

### repeat 值

通过使用这个值，我们可以沿着 **X 轴和 Y 轴** 重复对应图像多次，直到容器被填充满。在这，kitty 的大小是 200px x 200px。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26zsa1dn161pawjqxuqp.png)

To duplicate this result, we write ->
为此，我们可以这么写 ->

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : repeat;

   height : 100vh;
}
```

### repeat-x 值

顾名思义，我们可以使用这个值在容器 X 轴上重复对应图像，直到容器 X 轴被填充满。 Kitty 的大小：  200px X 200px。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pl4znzrwcevpr5w1a4i5.png)

为了实现这一点，我们这么写 ->

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : repeat-x;

   height : 100vh;
}
```

### repeat-y 值

与 "repeat-x" 同理，但是是作用在 **Y 轴上** 的。Kitty 的大小: 200px X 200px.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7yo3i3bp8cw2r6zqhtvm.png)

为了实现这一点，我们可以这么写 ->

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : repeat-y ;

   height : 100vh;
}
```

### no-repeat 值

我们使用这个值可以禁止图像重复。 Kitty 大小： 200px X 200px。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p2okgurnuakrnqbyv6kr.png)

为了实现这一点，我们可以这么写 ->

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : no-repeat ; 

   height : 100vh;
}
```

### space 值

这个值在 X 轴和 Y 轴都会起作用。当我们调整窗口大小时，我们可以看到值 **space 和 round** 之间的主要区别。 注意，当我们调整窗口大小时，我们有 **空得空间**:

![Space](https://media.giphy.com/media/cO0jNSpVi0I3FWD62G/giphy.gif)

为了测试这个值，我们可以这么写

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : space ;

   height : 100vh;
}
```

### round 值

这个值在 X 轴和 Y 轴都起作用。在调整窗口大小时注意图像 **拉伸**。

![Round](https://media.giphy.com/media/3BUBxpCxmcDrBN4aZF/giphy.gif)

跟着写 ->

```CSS
.container{
   background-image : url('kitty.png');
   background-size : 200px 200px;
   background-repeat : round ; 

   height : 100vh;
}
```

# CSS 中的 background-position 属性

此属性用于更改图像在屏幕上的位置

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j4ndvr71f0yl9c44kbc7.png)

语法如下： 👇

```css
.container{
// 这是       X 轴👇  和  👇 Y 轴
background-position : 300px  200px;
}
```

当然不要忘记插入一张图像，设置高度，禁止图像重复。我们使用 `background-size` 属性设置 kitty 的大小到 200px X 200px :

```css
.container{
  background-image: url("kitty-idea.png");
  background-size: 200px 200px;
  background-repeat: no-repeat;

// 这是       X 轴👇  和  👇 Y 轴
  background-position : 300px 200px;
  height: 100vh;
}
```

结果如下：

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/65p2htkztmijbm1hxlug.png)

你也可以使用这些值的组合:

-   top
-   left
-   right
-   bottom
-   percentage values

例如，让我们将 kitty 设置到 屏幕右下侧。代码如下：

```css
.container{
  background-image: url("kitty-idea.png");
  background-size: 200px 200px;
  background-repeat: no-repeat;

// 这是       X 轴👇  和  👇 Y 轴
  background-position : bottom right;
  height: 100vh;
}
```

结果如下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ga6veuh8ea3yzq7nend2.png)

计算屏幕的可用空间，%值决定了图像的位置。代码如下：


```css
.container{
  background-image: url("kitty-idea.png");
  background-size: 200px 200px;
  background-repeat: no-repeat;

// 这是       X 轴👇  和  👇 Y 轴
  background-position : 25% 15%;
  height: 100vh;
}
```

结果如下：

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fazbxgdpkqeomum02qv7.png)

# CSS 中的 background-origin 属性

这个属性允许我们在 CSS 盒子模型中设置图像的原点。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wc2b6ypgcfdtol6am14g.png)

We write the syntax after writing the selector name, like this  👇
我们在写完类名之后编写如下语法: 👇

```CSS
.container{
// We'll write values   👇 here
  background-origin: border-box;
}
```

它的四个值分别是： 

-   border-box
-   padding-box
-   content-box
-   inherit

在标准 CSS 盒子模型中，最外侧是 border。然后是 padding，最后是在中间的内容(content)。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p3mdn6hpd1u892akrkj5.png)

下面是每个属性的结果:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/27ptyulhvxqi4idrw68n.png)

为了重现这些结果:

-   首先我们需要一张图像，禁止重复，为 **容器及图像** 设置宽度和高度。
-   完成后，设置 40px 的 padding，否则我们无法看到 padding box 和 content box 的区别。
-   然后设置 25px 的红色边框，设置边框样式为虚线，这样我们就可以在屏幕中看到虚线边框。
-   设置 background-size 到 400px & 400px

代码像下面这样：

```css
.container{
  background-image: url('cute-girl.png');
  background-repeat: no-repeat;
  background-size: 400px 400px;

// 在这里改变值来看有何不同 👇
  background-origin: border-box;
  padding: 40px;
  border: 25px solid red;
  border-style: dashed;

// 容器的宽度和高度 👇
  width : 400px;
  height : 400px;
}
```

### 休息一下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yahewko7hckdgp7p4xux.png)

# CSS 中的 background-clip 属性

This is the same as the `background-origin` property. The main difference is that `background-clip` **CUTS** the image to fit inside the box, while `background-origin` **PUSHES** the content inside the box to fit.
其与 `background-origin` 属性类似，最主要的区别就是 `background-clip` 会将图像 **剪切** , 使其适应对应的 box，然而 `background-origin` 会将 content **推到** 到 box 中。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r4ga97rke3kgppd7qlxn.png)

我们在写完类名之后编写如下语法: 👇

```CSS
.container{
// We'll write values   👇 here
  background-clip  : border-box;
}
```

其四个值分别为：

-   border-box
-   padding-box
-   content-box
-   inherit

下面是每个值的结果:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xgd6sh8237bmvpnujl8r.png)

为了重现这些结果:

-   首先我们需要一张图像，禁止重复，为 **容器及图像** 设置宽度和高度。
-   完成后，我们设置 40px 的 padding，否则我们无法看到 padding box 和 content box 的区别。
-   然后我们设置 25px 的红色边框。 设置边框样式为虚线，这样我们就可以在屏幕中看到虚线边框。
-   设置 background-size 到 400px & 400px

代码像下面这样：

```css
.container{
  background-image: url('cute-girl.png');
  background-repeat: no-repeat;
  background-size: 400px 400px;

// 改变这里的值来看其变化
  background-clip: border-box;
  padding: 40px;
  border: 25px solid red;
  border-style: dashed;

// 容器宽度和高度 👇
  width : 400px;
  height : 400px;
}
```

# CSS 中的 background-attachment 属性

这个属性允许我们在 **滚动时** 控制内容和图像的行为。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n1xx67vtt5w3c861sskx.png)

我们在写完类名之后编写如下语法: 👇

```CSS
.container{
// 我们在这里改变其值 👇
background-attachment: scroll;
}
```

其三个值如下：

-   scroll
-   fixed
-   local

当我们使用 **scroll** 时，图像会随着页面的滚动而滚动(这是默认的)。 使用 **fixed** 时图像不会随着页面其余部分的滚动而移动，在屏幕中是固定的。而 **local** 会随着元素内容的滚动而滚动，直到滚动到内容结束。

你可以在下面看到结果 👇

[Here's where I got this pen](https://dev.to/hadrysmateusz/learn-all-8-background-css-properties-in-5-minutes-2lk4).

# CSS 中的 background-color 属性

你可以使用这个属性填充背景颜色

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mh7pe7phpj2vrvz304ma.png)

我们在写完类名之后编写如下语法： 👇

```CSS
.container{
// we'll change values 👇  here
   background-color :  red;
}
```

在众多值中，最受欢迎的是:

-   通过名称或者十六进制值对应的颜色
-   使用 `RGB()` 颜色函数
-   使用 `linear-gradient()` 函数

如何通过名称或者十六进制获得一个纯的背景颜色

你可以使用颜色的名称来设置背景颜色， 像这样： 

```css
.container{
   background-color : red;

   height : 100vh;
}
```

或者，你也可以使用十六进制来设置颜色，像这样：

```css
.container{
   background-color : #ff0000; //red color

   height : 100vh;
}
```

你可以查看这些链接来获得更多颜色:

-   [coolors.co](https://coolors.co/)
-   [flatuicolors.com](https://flatuicolors.com/)

### 如何使用 RBG() 函数来设置背景颜色

我们使用 `RGB()` 颜色函数来设置背景颜色， 像这样：

```css
.container{
// 颜色名称是 "American River"
   background-color : rgb(99, 110, 114);

   height : 100vh;
}
```

或者你也可以使用 `RGBA()` 来设置颜色和透明度，像这样：

```css
.container{
// 0.5 代表50%的透明度 👇 
   background-color :  rgba(99, 110, 114, 0.5);

   height : 100vh;
}
```

这是一个用颜色命名为 'Eton blue' 的不同不透明度的测试: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzc82sudq8es7ocok12g.png)

如何通过 linear-gradient() 函数来设置背景颜色

您可以使用此函数创建一个不少于一种颜色的渐变颜色。以下是一些渐变颜色的例子:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f0j3e3r6kobycowckdxg.png)

你可以浏览 [这个网站](https://uigradients.com/#Summer) 来获得更多颜色相关的 CSS 代码。

让我们重新创建这个背景色:
 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jkf21o97m7gqzpme810k.png)

'#22c1c3' 表示左边的颜色，'#fdbb2d'表示右边的颜色。 '90deg' 告诉我们如何通过这两种颜色的梯度创建一个渐变。

代码如下：

```css
.container{
 
   background: linear-gradient(90deg, #22c1c3, #fdbb2d);  

   height : 100vh;
}
```

# CSS 属性的简写

下面是 background 属性的简写顺序:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/newvcc4rvegnbkblwzyb.png)

对于这个案例，我们将图像 `kitty.png` 放在长和宽都为 200px，蓝色背景的容器中。代码如下所示:

```css
.container{
 
   background-color : skyblue;
   background-image : url('kitty.png);
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-position: 200px 200px;

   height : 100vh;
}
```

下面是使用简写的代码:

```css
.container{
 
   background: skyblue url('kitty.png) no-repeat fixed 200px 200px;

   height : 100vh;
}
```

这个简写确实节省了我们的时间。如果你想要跳过某个属性，你只需要保证其余属性的顺序即可。

# 总结 

这是你读到最后的奖励 ❤️

欢迎提出建议和批评 ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

### Credits

-   [Cute Girl I have a crush on 🥰](https://www.pexels.com/photo/woman-lying-on-plants-2125610/)
-   [kitty Avatar](https://www.flaticon.com/packs/kitty-avatars-3)
-   [Cute panda](https://www.freepik.com/free-vector/cute-bear-is-happy-cartoon-illustration_12341167.htm#position=4)
-   [cute cat with duck](https://www.freepik.com/free-vector/set-happy-cute-cats-cartoon-illustration_12566295.htm#position=11)
-   [cute girl illustration](https://www.freepik.com/free-vector/young-girl-different-gestures-cartoon-illustration_12566309.htm#page=1&position=22)
-   [Rabbit with duck](https://www.freepik.com/free-vector/set-cute-rabbit-with-duck-feel-happy-sad-cartoon-illustration_12573654.htm#position=7)
-   [CSS-Tricks](https://css-tricks.com/almanac/properties/b/background/)

**YouTube [/ Joy Shaheb](https://youtube.com/c/joyshaheb)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**
