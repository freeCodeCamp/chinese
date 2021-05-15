> -  原文地址：[CSS Scrollbar Styling Tutorial – How to Make a Custom Scrollbar](https://www.freecodecamp.org/news/css-scrollbar-tutorial/)
> -  原文作者：[Charles MahlerCharles Mahler](https://www.freecodecamp.org/news/author/charles-mahler/)
> -  译者：Humilitas
> -  校对者：

![CSS Scrollbar Styling Tutorial – How to Make a Custom Scrollbar](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/CSS-scrollbar-thumbnail.png)

你见过自定义滚动条样式的网站吗，是不是很想知道它们是怎么实现的？读完这篇文章，你会了解到使用 CSS 自定义滚动条样式的所有知识。

在本教程中，你将：

-   学习能用来自定义滚动条样式的原生 CSS 属性
-   使用 CSS 创建 4 种独特的滚动条
-   了解一些自定义滚动条样式的外部库，它们提供了跨浏览器的支持

![](https://www.freecodecamp.org/news/content/images/2021/04/crazy-scrollbar.PNG)

<div style="text-align:center">特色滚动条</div>

## 视频教程

如果你更喜欢看视频教程，可以观看下面的视频。欢迎在视频页面留下你的评论或提出疑问，也欢迎留下你的作品链接（如 CodePen 链接），这样其他人也可以看到你设计的自定义滚动条。

## 自定义滚动条的利弊

在编码之前，我觉得有必要先了解一下在网站或应用中使用自定义滚动条所带来的影响。

好的方面在于它能让你的网站在无数使用默认滚动条的网站中脱颖而出，任何能加深网站访问者印象的东西都能让你长期受益。

另一方面，许多 UI 设计师认为绝不应该干涉滚动条等“标准化” UI 组件的表现。如果过度修改滚动条，可能会给网站/应用的用户造成困扰。

如果是自己的个人网站，就不必担心这些了，只要你自己看着喜欢就行。

如果想要在工作项目或者用来获利的项目中实现自定义滚动条，则需要进行对照测试，基于结果数据来做决定。

归根结底，大多数人写代码是为了增加业务收入，你需要牢记这一点。

## 起步

首先要做的是创建一个基本的页面布局，页面要足够大，使浏览器出现滚动条：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href="styles.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>CSS Scrollbar Customization</h1>
        <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      </div>
</body>
</html>
```

没什么好看的内容，只有一个用来构建页面布局的 div 容器、一个标题、一些用来填充页面的段落。

以下是一些 CSS 样式，它们能让页面好看一点：

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    
  }
.para {
  font-size: 16px;
  padding: 20px;
  width: 70%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

页面效果如下：

![](https://www.freecodecamp.org/news/content/images/2021/04/layout-preview.PNG)

## 如何使用 CSS 创建自定义滚动条

准备工作做好了，接下来进入本教程中有趣的部分。本节内容的第一部分会学习一些滚动条样式相关的 CSS 属性。

第二部分我们会实现 4 中不同类型的滚动条，能为你之后制作自己的滚动条提供一些思路。

### 滚动条样式相关的 CSS 属性

很不幸，现在还没有对这些 CSS 属性的标准化跨浏览器支持。Firefox 和一些基于 Webkit 内核的浏览器（如 Chrome、Edge、Safari）各自提供了不同的属性。

本教程主要针对 Webkit 内核的浏览器，因为它们提供了更多样式属性，不过我也会简单介绍一下 Firefox。

### Webkit 滚动条样式属性

-   `::-webkit-scrollbar` – 整个滚动条
-   `::-webkit-scrollbar-track` – 滚动条的滚动区域（轨道）
-   `::-webkit-scrollbar-thumb` – 滚动条的可拖拽部分（滑块）

以下是可用但不常用的属性：

-   `::-webkit-scrollbar-button` – 滚动条两端的上/下（或左/右）按钮
-   `::-webkit-scrollbar-track-piece` – 滚动条轨道未被滑块覆盖的部分
-   `::-webkit-scrollbar-corner` – 垂直滚动条和水平滚动条交汇的部分

### Firefox 滚动条样式属性

Firefox 中当前可用的两个滚动条样式属性： 

-   `scrollbar-width` – 控制滚动条的宽度，只有两个可选项：`auto` 或 `thin`
-   `scrollbar-color` – 接收两个颜色，依次指定滑块和轨道的颜色

了解了自定义滚动条的样式属性，我们通过几个例子将它们付诸实践。

### 暗色主题滚动条

现在暗色主题的网站非常流行。坚持使用默认的滚动条可能会惹恼用户，因为它与整个网站的暗色主题不搭。

用我们新学的知识创建一个暗色主题的滚动条，它的边框是圆形的（灵感来自 CSS Tricks 网站）：

```css
html::-webkit-scrollbar {
      width: 20px; 
   }

html::-webkit-scrollbar-track {
    background-color: black;
  }

html::-webkit-scrollbar-thumb {
    background: #4e4e4e;
    border-radius: 25px;
  }
```

最终效果在截图中比较难看清，不过可以看到轨道是黑色的、滑块是深灰色的。

![](https://www.freecodecamp.org/news/content/images/2021/04/dark-theme.PNG)

### 极简滚动条

这个示例中将会制作一个极简的滚动条。如果你的网站追求简单优雅的风格，这种滚动条会很适合。

需要注意的重点是，你可以使用 `hover` 和 `active` 伪元素来进一步设置滚动条样式。本例中，当你把鼠标悬停在滑块上以及拖动滑块时它的颜色会变成更深的灰色。

```css
html::-webkit-scrollbar {
    width: 10px;
  }

html::-webkit-scrollbar-track {
    background: rgb(179, 177, 177);
    border-radius: 10px;
}

html::-webkit-scrollbar-thumb {
    background: rgb(136, 136, 136);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }
```

最终效果：

![](https://www.freecodecamp.org/news/content/images/2021/04/minimalist.PNG)

### 图案滚动条

这个部分的重点是使用重复的线性渐变在滚动条轨道中创建图案效果，这个方法也可以运用在滑块上。

另外一点需要注意的是，你也可以为滑块设置边框样式，利用边框样式可以创建许多有趣的效果。本例中，我把滑块的背景颜色设为透明，这样就可以在滚动的同时看到轨道中的图案。

```css
html::-webkit-scrollbar {
   	width: 20px;
  }
html::-webkit-scrollbar-track {
  	background-image: repeating-linear-gradient(45deg, red 0, red 1px, transparent 0, transparent 50%);
  	background-size: 10px 10px;
	}
html::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: inset 1px 1px 5px black ;
   }
```

最终效果：

![](https://www.freecodecamp.org/news/content/images/2021/04/patterned.PNG)

### “动态”渐变滚动条

这个例子用到了线性渐变，并使用了一个小技巧：利用滑块的阴影使得滚动条在页面滚动时看起来像是在变换颜色。实际上是轨道的背景透过滑块显示了出来。

阴影遮盖住了滑块之外的所有轨道空间，又由于滑块是透明的，所以轨道背景的渐变颜色透过它显示出来。

```css
html::-webkit-scrollbar {
    width: 20px; 
  }
  
html::-webkit-scrollbar-track {
    background:  linear-gradient(0deg, rgba(255, 0, 0, 1) 0%, rgba(7, 0, 211, 1) 100%);
  }

html::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0px 0px 0px 100vh black;
  }
```

最终效果：

![](https://www.freecodecamp.org/news/content/images/2021/04/animated.PNG)

## 自定义滚动条的限制及备选方案

显然，创建自定义滚动条存在一些问题。首先是缺少跨浏览器支持。其他可能问题包括：无法为滚动条增加过渡和动画效果、移动设备不支持自定义滚动条。

一个备选方案是：隐藏默认的滚动条，并使用外部库来实现，但这可能会影响页面性能。而且可能还有其他潜在的可用性问题，因为这些库依赖 JavaScript 来模拟原生的滚动条行为。

下面我会介绍两个用于制作滚动条的流行开源库。

### SimpleBar 库

使用原生滚动行为的自定义滚动条 JavaScript 库：操作简单、轻量、易用、跨浏览器。- Grsmto/simplebar

[![](https://opengraph.githubassets.com/a3236d200e4fa9e299d00a79c560678cfeaf07d684bc6ec998bd25f3ebe12efb/Grsmto/simplebar)](https://github.com/Grsmto/simplebar)

顾名思义，SimpleBar 旨在简化创建自定义滚动条的过程。唯一的缺点是它不能作为网站的主滚动条（译注：即根元素的滚动条）来使用，也不支持表格元素、文本输入区域和下拉选择框。

SimpleBar 主要适用于诸如动态聊天应用或一些在页面内部元素中有滚动行为的场景。

### Overlay Scrollbars 库

一个隐藏原生滚动条、提供自定义样式滚动条的插件，保留了原生的功能和体验。- KingSora/OverlayScrollbars

[![](https://opengraph.githubassets.com/ad151bf617e4361235fd3bc54163fab57fea0c0552703c89100ebc063483e341/KingSora/OverlayScrollbars)](https://github.com/KingSora/OverlayScrollbars)

Overlay Scrollbars 与 SimpleBar 很相似，但是它提供了对 HTML body 元素的支持。这意味着除了跨浏览器支持和移动端支持等特性，还可以把它作为网站的主滚动条来使用。

## 总结

希望本文能让你深入理解使用 CSS 自定义滚动条样式的工作原理。

如果有任何疑问，你可以在 YouTube 视频下方留下评论，我会尽力解答。也欢迎留下你自己的作品链接，与大家分享。

Github 仓库链接：[https://github.com/renaissanceengineer/css-scrollbar-tutorial](https://github.com/renaissanceengineer/css-scrollbar-tutorial)