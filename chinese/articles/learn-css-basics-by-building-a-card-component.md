> -   原文地址：[Learn CSS Basics by Building a Card Component](https://www.freecodecamp.org/news/learn-css-basics-by-building-a-card-component/)
> -   原文作者：Thu Nghiem
> -   译者：Humilitas
> -   校对者：

![Learn CSS Basics by Building a Card Component](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/ep13-cssbasic.jpg)

想要让你的网站更有吸引力，你需要了解 CSS。

CSS（层叠样式表，全称为 Cascading Style Sheets）是一种样式表语言，用于为网页内容增加样式。

在这个教程中，我们将会通过从头开始构建一个卡片组件来学习 CSS 基础。

如果你想跟着动手实践的话，务必先查看[设计稿](https://www.figma.com/file/FLfQJbcKWGdy5poNWFgLnP/CSS-basics---devChallenges.io?node-id=0%3A1) 。

这个视频的内容可以作为本文内容的补充：

准备好，我们开始。

## 如何使用 HTML 构建页面骨架

在与 CSS 打交道之前，需要先准备一些内容。在这一节，我们会使用 HTML 快速构建页面骨架。如果不熟悉 HTML，可以查看[这个教程](https://www.freecodecamp.org/news/html-basics-for-beginners/) 。

打开 VS Code，在你选择的文件夹中创建一个名为 `index.html` 的文件。

在这个文件中输入 `!`，回车，VS Code 会自动生成一个 HTML 模板：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>

```

我们的任务是构建一个卡片组件，其中包含一个图片、一些标签、名称、描述和一个按钮，像这样：

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9yipv1bp9jv032twvol.png)

首先，把标题（即 `<title>` 标签的内容）改为 `CSS Basics`，在 `<body>` 元素中加入以下内容：

```html
...
<body>

  <!-- A div with container id to hold the card -->
  <div id="container">

    <!-- A div with card class for the card  -->
    <div class="card">
      <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies">

      <!-- A div with card__details class to hold the details in the card  -->
      <div class="card__details">

        <!-- Span with tag class for the tag -->
        <span class="tag">Nature</span>

        <span class="tag">Lake</span>

        <!-- A div with name class for the name of the card -->
        <div class="name">Lago di Braies</div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
          pharetra
          vitae ipsum odio.</p>

        <button>Read more</button>
      </div>

    </div>
  </div>

</body>

...

```

现在组件骨架已经准备好了，如果想在浏览器中实时查看页面效果，可以使用 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件。

## 使用 CSS 增加样式

接下来，为组件增加样式，这是本教程的重点。在构建卡片组件的过程中，我也会介绍一些概念。

### 如何将 CSS 应用于 HTML

首先，了解一下将 CSS 应用于 HTML 的三种方式：

**1\. 外部样式表**

外部样式表示最常见、最有用的方式，它是包含了 CSS 规则的 `.css` 文件。

可以在包含 `index.html` 文件的文件夹中创建一个 `style.css` 文件，然后在 `<head>` 元素中以如下方式将其引入： 

```html
<link rel="stylesheet" href="style.css">

```

通过这种方式，同一个样式表可以应用在多个页面中。

**2\. 内部样式表**

在 `<head>` 元素中添加 `<style>` 元素可以创建内部样式表，如：

```html
<head>
  <style>
    /* your style */
  </style>
</head>

```

当你处理一个不允许编辑外部样式表的系统时，这个方法非常有用。

这个方法的缺点是无法在多个页面中复用这些样式。

**3\. 内联样式（避免使用）**

你也可以使用 `style` 属性直接为一个元素添加样式。例如，如果你想把段落文本的颜色改成红色：

```html
<p style="color:red;">paragraph</p>

```

这个方法通常用于非常严格的系统中，此时你无法编辑外部样式表或内部样式表（所以只能使用内联样式）。

在文档中加入内联样式是**不好**的做法——它难以阅读、难以理解，所以要尽可能避免。

## 如何在卡片组件中加入外部样式表

现在你懂得了如何将 CSS 应用于 HTML。在本次练习中，我们使用外部样式表。

创建 `style.css` 文件，并在 `<head>` 元素中加入 `<link rel="stylesheet" href="style.css">`。
 
### CSS 规则集（ruleset）

想要将图片宽度设置为 50%，可以增加以下代码：

```css
img {
  width: 50%;
}

```

为了选中一个元素并为其增加样式，需要有一个选择器，并指定要设置样式的属性及属性值。

属性要包含在一对大括号中，属性与值之间以冒号分隔，结尾以分号结束，这整个结构称为规则集（译注：准确定义请参考 [CSS 基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics) ）：

![](https://www.freecodecamp.org/news/content/images/2021/02/y6g4upcbymin9kyjl0lr-1.png)

### 为元素增加样式

1.  **`body` 元素**

改变 `body` 元素的背景色和字体：

```css
body {
  background-color: #eaeff1;
  font-family: "Raleway", sans-serif;
}

```

不过，为了正常使用 Raleway 字体，需要先引入它，将以下代码放在样式表的第一行即可：

```css
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap");

```

要了解更多有关 Google 字体的信息，可以访问 [fonts.google.com](https://fonts.google.com/) 。

如果 body 的背景颜色和字体已经改变，那么恭喜你，已经成功加入第一个 CSS 样式。

**2\. `img` 元素**

目前图片的宽度还是它的原始宽度，但是我们想让它适应屏幕宽度，指定它的宽度值为 100% 即可：

```css
img {
  width: 100%;
}

```

我们还想为它设置圆角边框，并为它设置一个小于其原始高度的高度值：

```css
img {
  ...
  border-radius: 12px;
  height: 214px;
}

```

现在你可能会看到图片变形了，添加 `object-fit: cover;` 来修复这个问题：

```css
img {
  ...
  object-fit: cover;
}

```

现在得到了一个高度为 214px 的自适应图片。我们继续。

**3\. 为容器增加样式**

接下来要为 `id` 为 `container` 的 `div` 元素增加样式，这个元素决定了卡片的宽度，我们将它放在水平居中的位置。

选择容器元素，增加样式：

```css
#container {
  max-width: 300px;

  /* Center the container in middle on horizontal axis */
  margin: 0 auto;

  /* Add empty space above the container (20% of the view height) */
  margin-top: 20vh;
}

```

我们使用 `margin: 0 auto;` 来将 `max-width` 为 `300px` 的 `div` 元素水平居中。

目前你只需要记住这个小技巧就行了，后续教程中会深入探讨外边距（margin）的工作原理以及如何使元素居中。

**4\. 为卡片增加样式**

我们需要选中包含 `card` 类（class）的 `div` 元素来为卡片增加样式。我们想将它的背景色设置为白色，为它增加边框，并在内容和边框之间增加一些空白区域：

```css
.card {
  /* Change background color */
  background-color: white;

  /* Add border */
  border: 1px solid #bacdd8;

  /* Add space between the border and the content */
  padding: 8px;

  border-radius: 12px;
}

```

现在已经完成了组件样式的大半部分，我们快速设置一下剩余元素的样式：

```css

/* Style div elements that have class equal to tag */
.tag {
  padding: 4px 8px;
  border: 1px solid #e5eaed;

  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: #788697;
}

/* Style div elements that have class equal to name */
.name {
  font-size: 24px;
  font-weight: 600;

  margin-top: 16px;
}

/* Style p element */
p {
  font-size: 14px;
  color: #7f8c9b;
  line-height: 150%;
}

/* Style button element */
button {
  border: none;
  padding: 12px 24px;
  border-radius: 50px;

  font-weight: 600;
  color: #0077ff;
  background-color: #e0efff;

  /* Button is inline-block element by default, it need to have block display for margin: 0 auto; to work */
  margin: 0 auto;
  display: block;

  /* Button is a clickable element, therefore it should have a pointer cursor */
  cursor: pointer;
}

.card__details {
  /* Add space around the details */
  padding: 16px 8px 8px 8px;
}

```

**5\. 设置按钮在鼠标悬停或聚焦状态下的样式**

当按钮处于鼠标悬停或聚焦状态下时，最好能有样式变化以增强可用性，例如切换按钮文字颜色和背景色：

```css
/* Add style when button is focused or hovered */
button:focus,
button:hover {
  background-color: #0077ff;
  color: #e0efff;
}

```

现在组件样式已经完成了，下一节会介绍外边距、内边距和边框的工作原理。

## CSS 盒模型

在 CSS 中，每一个元素都是一个盒子，每个盒子都有下列属性：

*   **内边距（Padding）**：内容之外（边框之内）的空间（[padding - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) ）
*   **边框（Border）**：内边距之外（外边距之内）的边线（[border - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) ）
*   **外边距（Margin）**：元素外部（边框之外）空出的空间（[margin - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) ）

![](https://www.freecodecamp.org/news/content/images/2021/02/acdnznf06c6qgoxid7xw.png)

### 外边距（margin）

使用外边距在一个元素外部增加不可见的空间，来将其他元素推开。

在卡片组件中，用到了外边距来增加容器上方的空间、增加名称和标签之间的空间以及使得卡片水平居中。

可以分别设置 `margin-top`、`margin-bottom`、`margin-left` 和 `margin-right`，也可以使用简写：

```css
margin: topValue rightValue bottomValue leftValue;
margin: verticalValue horizontalValue;

```

![](https://www.freecodecamp.org/news/content/images/2021/02/do4y57sxjpkf08o6o01y.png)

### 边框（border）

边框属性可以在元素周围增加边框，我们的卡片组件中，为卡片和每个标签增加了边框。

可以分别设置 `border-top`、`border-bottom`、`border-left`、`border-right`、`border-width`、`border-style` 和 `border-color`，也可以使用以下简写：

```css
border: widthValue styleValue colorValue;

```

![](https://www.freecodecamp.org/news/content/images/2021/02/oybb0vi7djd1nlib543i.png)

### 内边距（padding）

内边距用于在边框和内容之间增加空间，在我们的卡片组件中，卡片和按钮都用到了内边距。

可以分别设置 `padding-top`、`padding-bottom`、`padding-left` 和 `padding-right`，也可以使用简写：

```css
padding: topValue rightValue bottomValue leftValue;
padding: verticalValue horizontalValue;

```

![](https://www.freecodecamp.org/news/content/images/2021/02/572lkbb2j8npxn7isifq.png)

## 总结

教程到此就结束了。

依然有许多其它重要的 CSS 概念需要学习。经过这个教程的学习，你应该能够在以后的项目中使用 CSS 来制作更好的视觉效果了。

你可以关注我的 [Twitter](https://twitter.com/thunghiemdinh) 或 [YouTube](https://www.youtube.com/c/thunghiem) ，以获取更多内容。Happy coding。

\_\_\_\_\_\_\_\_\_\_  **关于作者** \_\_\_\_\_\_\_\_\_\_

我是一个全栈开发者、UX/UI 设计师和内容创作者。

我也是 [devChallenges](https://devchallenges.io/) 的创始人，更多视频教程请访问 [devchallenges.io/learn](https://devchallenges.io/learn) 。
