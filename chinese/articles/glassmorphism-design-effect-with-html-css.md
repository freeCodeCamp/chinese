> -  原文地址：[What is Glassmorphism? Create This New Design Effect Using Only HTML and CSS](https://www.freecodecamp.org/news/glassmorphism-design-effect-with-html-css/)
> -  原文作者：[Zoltán SzőgyényiZoltán Szőgyényi](https://www.freecodecamp.org/news/author/zoltan/)
> -  译者：Humilitas
> -  校对者：

![What is Glassmorphism? Create This New Design Effect Using Only HTML and CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/freecodecamp-glass.png)

毛玻璃效果（Glassmorphism）是目前非常流行的设计新趋势，你可以在 Dribbble 等网站上看到毛玻璃效果，甚至像 Apple 和 Microsoft 这样的大公司也在使用它。

让我来介绍一下新的设计趋势：**毛玻璃效果**。经历了去年饱受争议、缺乏可用性的[新拟物设计（neumorphism design trend）](https://demo.themesberg.com/neumorphism-ui/)之后，这种设计似乎更有前景。

## 什么是毛玻璃效果

基本上，它的主要特征就是半透明的背景，以及阴影和边框。

同时还要为背景加上模糊效果，使得背景之后的元素根据自身内容产生漂亮的“变形”效果。

示例：

[![Glassmorphism](https://www.freecodecamp.org/news/content/images/2021/03/glassmorphism-ui.png)](https://ui.glass/)

这是一个应用毛玻璃效果的真实示例，可以在 [ui.glass](https://ui.glass/) 网站上查看（它是一个即将推出的 UI 库）。

你可以在上图中右侧代码后面看到我所说的模糊效果，后方的内容产生了漂亮的变形效果，同时还保持了可读性，赏心悦目。

这就是本教程要构建出的效果。我们将看到如何仅用 HTML 和 CSS 来实现它。

## 起步

学习本教程，你只需要一个浏览器和一个代码编辑器，因为我们只会用到 HTML 和 CSS。

我们将要构建的元素的最终效果如下：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-24-at-17.35.18.png)

毛玻璃效果示例

首先，创建一个 HTML 文件，写入如下内容：

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism effect</title>
</head>
<body>
    <!-- code goes here -->
</body>
</html>
```

我不太喜欢默认的字体，让我们使用更好看的 Google Fonts 字体。我很喜欢 Inter 字体，在 `head` 标签中将其引入：

```HTML
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Google Fonts

现在，为 `body` 标签添加一些样式，并使用鲜艳的颜色和渐变作为背景：

```CSS
body {
  padding: 4.5rem;
  margin: 0;
  background: #edc0bf;
  background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%);
  font-family: 'Inter', sans-serif;
}
```

很好！现在基本的标签和样式做好了，接下来在 `body` 标签里创建一个卡片元素：

```HTML
<div class="card">
    <h3 class="card-title">Glassmorphism is awesome</h3>
    <p>A modern CSS UI library based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
    <a href="https://ui.glass">Read more</a>
</div>
```

卡片中的内容是什么无关紧要——你可以加入一些按钮、图标或者其他元素。

在卡片上应用**毛玻璃效果**之前，先添加一些排版样式，加入以下 CSS：

```CSS
.card {
  width: 400px;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
}

.card-title {
  margin-top: 0;
  margin-bottom: .5rem;
  font-size: 1.2rem;
}

p, a {
  font-size: 1rem;
}

a {
  color: #4d4ae8;
  text-decoration: none;
}
```

很好！接下来将会演示如何应用这个特殊的效果。

## 如何使用 CSS 制作毛玻璃效果

你要做的只是设置一个半透明背景颜色，并使用 `backdrop-filter` 属性设置模糊效果。在 `.card` 元素的样式中加入以下 CSS：

```CSS
.card {
	/* other styles */
	background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
}
```

使用 CSS 制作毛玻璃效果

现在我们已经为卡片加上了毛玻璃效果的样式，可是为什么看起来没效果？

我们还需要在卡片后面加上一些元素，如一些形状或者图片，以便看到它的实际效果。

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-24-at-12.57.00.png)

后方没有形状时的效果

让我们使用 `img` 标签在 `body` 起始标签之后加入一个形状图片：

```HTML
<img class="shape" src="https://s3.us-east-2.amazonaws.com/ui.glass/shape.svg" alt="">
```

并为 `.shape` 元素添加以下样式，将其定位在页面的合适位置：

```CSS
.shape {
  position: absolute;
  width: 150px;
  top: .5rem;
  left: .5rem;
}
```

现在你应该能看到完整的毛玻璃效果了，恭喜！

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-24-at-17.35.18.png)

毛玻璃效果示例

可以在[这里](https://codepen.io/themesberg/pen/RwKNMeY)查看本教程的完整代码。

## 浏览器支持

毛玻璃效果的主要缺点之一就是 `backdrop-filter` 属性在 Internet Explorer 11 上不被支持，而且 Firefox 默认禁用了这个属性。

![](https://www.freecodecamp.org/news/content/images/2021/03/glassmorphism-browser-support.png)

backdrop-filter 的浏览器支持情况

然而，根据 [caniuse.com](https://caniuse.com/css-backdrop-filter) 网站的数据，全世界超过 88.2% 的浏览器支持这个样式。如果 Firefox 决定默认启用这个属性，并且随着过时浏览器（如 IE 11）的使用率下降，我相信未来几年毛玻璃效果会得到更广泛的应用。

在此之前，尽管在你的个人项目中使用它吧，或者使用这个神奇的设计来创建一些页面玩一玩。

## 总结

希望这个教程能帮助你了解毛玻璃效果这个新设计趋势。

如果你想更进一步地探索，可以了解一下我和朋友一直在做的一个项目。

它叫做 [Glassmorphism UI](https://ui.glass/)，它是一个基于这个新设计趋势的开源 CSS UI 库。欢迎使用你的邮件地址注册，以便第一时间获取开发进度信息以及正式发布的通知。

这个库未来将能够通过 NPM 下载，同时也会发布在 Github 上（基于 MIT 协议）。