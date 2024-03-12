> -  原文地址：[How the CSS Position Property Works – Explained with Code Examples](https://www.freecodecamp.org/news/css-position-property-explained/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：Miever1
> -  校对者：

![CSS 的 Position 属性是如何工作的 –  用代码示例解释](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/FCC-Thumbnail--4-.png)

今天我们将学习所有你需要知道的关于 CSS position 属性的例子。让我们开始吧 🎖️

# 目录

-   [什么是 CSS Position 属性?](#what-is-the-position-property-in-css)
-   [CSS 中的 **静态定位**](#what-is-the-static-position-in-css)
-   [What is the **Fixed P**osition in CSS?](#what-is-the-fixed-position-in-css)
-   [CSS 中的 **固定定位**](#what-is-the-fixed-position-in-css)
-   [CSS 中的 **粘性定位**](#what-is-the-sticky-position-in-css)

## **你可以在 YouTube 上观看本教程**

# CSS 中的 position 属性

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-3--6-.png)

如果你想要制作一个 **独特、漂亮、有艺术风格的网页**，那么你绝对应该学习如何使用 CSS 的 position 属性。让我们来看看它是如何工作的。

使用  **Flexbox 或者 Grid**, 你可以制作一个 **对称的网站**, 像这样：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-35--2-.png)

**Flexbox 制作的网站**

通过 **position 属性**, 你可以制作一个 **非对称的网站**，像这样：

![](https://www.freecodecamp.org/news/content/images/2021/06/A-1-1--2-.png)

** Grid 和 position 属性 制作的网站**

你不能使用 Flexbox 和 Grid 把你的内容放在所有你想要的地方。你会受限于 X 轴和 Y 轴。看看这幅图你就会明白我的意思了:👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-1--6-.png)

**对称的内容布局显示元素分别放置在 x 轴和 y 轴**

你的盒子会遵循这些衡量因素。👆

But, using the **position property**, you can place your content anywhere you wish by **detaching** each element from the other elements.
但是当使用 **position 属性** 时，你可以将内容放置到任何你想要的地方。

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-2--4-.png)

**不对称的内容布局，不需要考虑 x 轴和 y 轴的位置。**

你可以用这种布局把你的盒子放在任何你想要的地方。👆换句话说，你可以在屏幕上将元素 **自由移动**。

下面是另一个使用 position 属性的例子:

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-3--8-.png)

**一个非对称的网页**

你可以使用 position 属性在整个页面来放置或移动那些小点和波浪图案和甜甜圈图像 **☝** 至任何你想要的地方。

# 项目搭建

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-4--7-.png)

对于这个项目，你可以使用任何安装了 **emmet 插件** 的代码编辑器。我将使用 [CodePen.io](https://codepen.io).

### HTML

body 标签内部，写如下代码：👇

```HTML
<div class="box-1"> </div>
```

### CSS

清除默认浏览器设置并添加如下 CSS:👇

```CSS
*{
   margin: 0px;
   padding: 0px;
   box-sizing: border-box;
}
```

设置 box-1 类样式：👇

```CSS
.box-1{
   width: 120px;
   height: 120px;
   background-color: skyblue;
   border: 2px solid black;
}
```

position 属性有 5 个值：

1.  relative
2.  absolute
3.  static
4.  fixed
5.  sticky

为了移动我们的容器，我们使用以下四个属性：

-   **Top, Bottom**
-   **Left, Right**

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-12--1-.png)

# CSS 中的静态定位

其是每个元素定位的 **默认值**。

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-10--3-.png)

每个元素的默认位置

# CSS 中的相对定位和绝对定位

**relative 属性** 和 **absolute 属性** 的工作原理是一样的，不同在于，我们使用 `relative` 来标识父类。使用 `absolute` 来标识子类。

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-11--2-.png)

**相对定位和绝对定位**

### 看如下 2 个例子 👇

我们先尝试一下 **`relative`** 值。写如下代码：

```CSS
.box-1{
/* 在此写其他代码*/

   position: relative;
   left: 100px;
}
```

得到的结果如下：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-13--1-.png)

我们可以使用 **`absolute`** 值得到相同的结果，如👇

```CSS
.box-1{
/* 在此写其他代码*/

   position: absolute;
   left: 100px;
}
```

让我们研究一下相对定位和绝对定位的主要区别。
 
### CSS 中的相对定位和绝对定位

![](https://www.freecodecamp.org/news/content/images/2021/06/BEM-1--1-.png)

### HTML

在 HTML 中编写如下代码：👇

```HTML
<body>
   <div class="box-1">
    
       <div class="box-2"> </div>	
        
   </div>
</body>
```

### CSS

设置如下 CSS 样式：👇

```CSS
.box-1{
	width: 300px;
	height: 300px;
	background-color: skyblue;
	border: 2px solid black;
    margin: auto;
}

.box-2{
	width: 100px;
	height:100px;
	background-color: pink;
	border: 2px solid black;
}
```

应该会是这样：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/dd-2.png)

**结果是左上方有一个蓝色盒子和一个较小的粉色盒子**

现在，我们设置一下类样式：👇

```CSS
body{ }

.box-1{ }

.box-2{ }
```

现在，在 CSS 中写如下类样式：

```CSS
body{
	
}

.box-1{
/* 这是父元素  👇 */
	position: relative;
}
.box-2{
/* 这是子元素  👇 */
	position: absolute;
	left: 100px;
}
```

结果如下：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-14.png)

**结果是粉色盒子右移了 100px**

注意 .box-2 相对于 .box-1 移动了 100px。

This is because .box-1 is the **parent** and .box-2 is the **child**.
这是因为 .box-1 是 **父元素**，.box-2 是 **子元素**。

再做一些改变，在 CSS 中写如下代码：

```CSS
body{
/* 这是  👇 父元素 */
   position: relative;	
}

.box-1{

}
.box-2{
/* 这是  👇 子元素 */
   position: absolute;
    left: 100px;
}
```

结果是这样的：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-15.png)

**结果是粉色盒子相对于 body 移动了 100px**

注意是 .box-2 相对于 **body** 标签移动了 **100px** 。

这是因为 **body** 是 **父元素**，.box-2 是 **子元素**。

# 固定定位（Fixed）

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-16--1-.png)

这个值会将元素固定在屏幕上的某一位置，即使浏览器发生滚动。让我们看几个例子，看看它是如何工作的。

### 固定定位的例子

在 HTML 中写如下代码。

```HTML
<div class="container">
	
	<p>lorem200</p>
    
	<div class="box-1"> fixed </div>
    
	<p>lorem200</p>		

</div>
```

CSS 如下：

```CSS
.container{
	height: 3000px;
}

.box-1{
	height: 120px;
	width: 120px;
	background-color: skyblue;
	border: 2px solid black;
	
	display: grid;
	place-content: center;
}
```

在底部添加如下 CSS：

```CSS
.box-1{

	position: fixed;
	top: 100px;
	left: 200px;
}
```

结果如下：👇

![](https://media.giphy.com/media/J6hbBulobEQz6HftRv/giphy.gif)

可以看到，即使在滚动浏览器时，该元素仍然是固定的。

# 粘性定位（Sticky）

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-17.png)

当滚动到屏幕某个点后，这个值会将元素 **固定在** 屏幕上，不再移动。

### 粘性定位示例

无需改变你当前的 HTML 和 CSS 中的任何东西，只需改变这个值:

```CSS
.box-1{
/*  使用这个值  👇 */
   position: sticky;
   top: 30px;
   left: 200px;
}
```

结果如下：👇

![](https://media.giphy.com/media/175hkevbKC3yUfiLQc/giphy.gif)

你会发现，当滚动到屏幕某一 ***特定点** 后，该元素会仍然固定在浏览器屏幕的顶端。

你可以查看这些网站，看看粘性定位在实际网站上是如何工作的。

-   [AwakeBoards](https://awakeboards.com/)
-   [Ferme](https://ferme.shop/)
-   [LATORRE](https://www.ascensionlatorre.com/)

# 总结

现在，你可以自信地制作漂亮的网站，并使用 position 属性解决简单的布局问题。

这是你读到最后的奖章。❤️

### 欢迎提出建议和批评 ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube [/ Joy Shaheb](https://youtube.com/c/joyshaheb)**

**LinkedIn [/ JoyShaheb](https://www.linkedin.com/in/joyshaheb/)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**

## 感谢

-   [Cute Girl Illustration](https://www.freepik.com/free-vector/young-girl-holding-pile-papers-cartoon-illustration_12566300.htm)
-   [Kitty Avatar](https://www.flaticon.com/packs/kitty-avatars-3)
