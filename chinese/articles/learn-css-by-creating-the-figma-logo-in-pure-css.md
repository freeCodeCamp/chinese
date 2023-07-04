> -  原文地址：[Learn CSS by Building the Figma Logo in Pure CSS](https://www.freecodecamp.org/news/learn-css-by-creating-the-figma-logo-in-pure-css/)
> -  原文作者：[Jennifer Bland](https://www.freecodecamp.org/news/author/ratracegrad/)
> -  译者：Humilitas
> -  校对者：

![Learn CSS by Building the Figma Logo in Pure CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/Learn-CSS-Create-The-Figma-Logo-3.png)

学习 css 最好的方式之一是边学边做。在构建 figma logo 的过程中，将会介绍以下相关的 css 概念及其用法：

-   flex-wrap
-   组合 class
-   border-radius

## 我们的目标

我们将使用纯 css 构建一个 figma logo，效果如下：

![figma logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672179613/Screenshot_2022-12-27_at_5.19.27_PM_h2ncza.png)

## 创建文件

分别创建两个文件：`index.html` 和 `style.css`。在 `index.html` 文件中写入以下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Figma Logo</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>

```

在 `style.css` 文件中写入以下代码：
```css
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
}

```

## flex-wrap 属性的用法

我们会用到弹性盒子（Flexbox）来创建 logo 图像，它有一个名为 `flex-wrap` 的属性。弹性元素默认会排列在一行之内（不换行），可以通过设置 `flex-wrap` 属性让它按需进行换行。

logo 主体部分的第一和第二行各需要两个元素，第三行需要一个元素。

更新 `index.html`，在 `<body>` 标签内部加入以下代码：
```javascript
<div class="figma-logo">
  <div class="element left"></div>
  <div class="element right orange"></div>
  <div class="element left purple"></div>
  <div class="element circle blue"></div>
  <div class="element left clip green"></div>
</div>

```

## 指定多个 class 有何作用
查看上述代码，你会发现 logo 中每个元素（标签）都包含多个 class，这是为了保持设计的一致性。

`element` 设置了每个元素的高度（`height`）和宽度（`width`）。

`right`、`left` 和 `clip` 用于为每个元素设置适当的圆角（`border-radius`）。

`orange`、`purple`、`blue` 和 `green` 用于为每个元素设置适当的颜色（`color`）。

## 加入样式

将每个元素的宽高都设置为 100px，指定 `.figma-logo` 的宽度为 200px。这样设置之后，弹性盒子会在每行元素超过两个时进行换行。

在 `style.css` 文件中加入以下样式代码：

```css
.figma-logo {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
}

.element {
    width: 100px;
    height: 100px;
    background: red;
}

```


目前效果如下：

![partial logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672180441/Screenshot_2022-12-27_at_5.33.51_PM_wmrldi.png)


## 如何使用 `border-radius` 属性

下一步，使用 `border-radius` 属性为每个元素制作圆角。`border-radius` 将元素的外部边角磨圆，每个元素有四个角（每个角分别对应一个 css 属性），我们可以分别设置每个角或者使用 border-radius 属性一次性设置 4 个角。

左边的三个元素左侧都有圆形的边框，右上角元素的右侧也是一样，右边第二个元素则是一个圆形。

为这些元素增加样式，在 `style.css` 文件中加入以下代码：

```css
.left {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.right {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}

.circle {
    border-radius: 50px;
}

```


现在 logo 效果如下：

![updated logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672180914/Screenshot_2022-12-27_at_5.41.33_PM_cudeyj.png)


离成功又近一步。第三行的元素右侧边界也需要处理，在 HTML 代码中它对应的类（class）是 `clip`，在 `style.css` 文件中加入以下代码：

```css
.clip {
    border-bottom-right-radius: 50px;
}

```


## 定义颜色

现在我们的 logo 和真实的 Figma logo 很像了，除了颜色还没有对应上。在 `index.html` 中，我把这些颜色定义为 `orange`、`purple`、`blue` 和 `green`。我们要做的最后一步是为这些类加入正确的背景颜色（`background`）。

在 `style.css` 文件中加入以下代码：

```css
.orange {
	background: #FB7266;
}

.purple {
	background: #A061FA;
}

.blue {
	background: #2EBDFA;
}

.green {
	background: #00CE84;
}

```


## 最终效果


在浏览器中打开 `index.html`，可以看到完整的 Figma logo：

![final logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672179613/Screenshot_2022-12-27_at_5.19.27_PM_h2ncza.png)


## 总结

感谢阅读。可以在 [这里](https://github.com/ratracegrad/figma-logo-pure-css) 查看源码。

如果喜欢我的文章，可以考虑[为我买一杯咖啡](https://www.buymeacoffee.com/JenniferBland) ☕。
