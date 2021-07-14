> -  原文地址：[How the CSS Position Property Works – Explained with Code Examples](https://www.freecodecamp.org/news/css-position-property-explained/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：Miever1
> -  校对者：

![CSS 的 Position 属性是如何工作的 –  用代码示例解释](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/FCC-Thumbnail--4-.png)

Today we're gonna learn everything you need to know about the CSS position property along with examples. Let's get started 🎖️
今天我们将学习所有你需要知道的关于 CSS position 属性的例子。让我们开始吧 🎖️

# Table of contents
# 目录

-   [What is CSS Position Property?](#what-is-the-position-property-in-css)
-   [什么是 CSS Position 属性?](#what-is-the-position-property-in-css)
-   [What is the **Static Position** in CSS?](#what-is-the-static-position-in-css)
-   [CSS 中的 **Static Position**](#what-is-the-static-position-in-css)
-   [CSS 中的 **Relative and Absolute**](#what-are-the-relative-and-absolute-positions-in-css)
-   [What are the R**elative and Absolute** Positions in CSS?](#what-are-the-relative-and-absolute-positions-in-css)
-   [What is the **Fixed P**osition in CSS?](#what-is-the-fixed-position-in-css)
-   [CSS 中的 **Fixed Position**](#what-is-the-fixed-position-in-css)
-   [What is the **Sticky P**osition in CSS?](#what-is-the-sticky-position-in-css)
-   [CSS 中的 **Sticky Position**](#what-is-the-sticky-position-in-css)

## **You can watch this tutorial on YouTube as well if you like:**
## **如果你喜欢，你可以在 YouTube 上观看本教程：**

# What is the position property in CSS?
# 什么是 CSS 中的 position 属性？

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-3--6-.png)

If you want to make **stunning websites that looks artistic, unique, and beautiful,** then you should definitely learn how to use the CSS position property. Let's see how it works.
如果你想要制作 **独特、美丽、有艺术风格的网站**，那么你绝对应该学习如何使用 CSS 的 position 属性。让我们看看它是如何工作的。

Using **Flexbox or Grid**, you can make a **symmetrical website** like this: 👇
使用  **Flexbox 或者 Grid**, 你可以制作一个 **对称的网站**, 像这样：👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-35--2-.png)

**Website made w/ Flexbox**
**w/ Flexbox制作的网站**

With the **position property**, you can make an **asymmetrical website** like this:👇
通过 **position 属性**, 你可以制作一个 **非对称的网站**，像这样：

![](https://www.freecodecamp.org/news/content/images/2021/06/A-1-1--2-.png)

**Website made w/ Grid & position properties**
** w/ Grid 和 position 属性 制作的网站**

You can't place your content anywhere you wish using Flexbox and Grid. You're limited around the **X and Y Axis**. Look at this drawing to see what I mean: 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-1--6-.png)

**Symmetrical content layout showing elements placed respective to the x and y axis**

Your boxes will follow these exact measurements. 👆

But, using the **position property**, you can place your content anywhere you wish by **detaching** each element from the other elements.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-2--4-.png)

**Asymmetrical content layout showing elements placed irrespective of x and y axis.**

You can place your boxes **anywhere** you wish with this sort of layout. 👆 In other words, you will have **free movement** around your screen.

Here's another example of what you can make using the position property:

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-3--8-.png)

**An Asymmetrical Website**

You can place or move those little dots and waves patterns and donut image all around the page **☝** anywhere you wish using the position property.

# Project Setup

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-4--7-.png)

For this project, you can use any code editor that has the **emmet plugin** installed. I'm gonna use [CodePen.io](https://codepen.io).

### HTML

Inside the body tag, write this code: 👇

```HTML
<div class="box-1"> </div>
```

### CSS

Clear your default browser settings and add this CSS:👇

```CSS
*{
   margin: 0px;
   padding: 0px;
   box-sizing: border-box;
}
```

Style the box-1 class like this:👇

```CSS
.box-1{
   width: 120px;
   height: 120px;
   background-color: skyblue;
   border: 2px solid black;
}
```

Our position property has 5 values:

1.  relative
2.  absolute
3.  static
4.  fixed
5.  sticky

To move our box, we'll use 4 properties:

-   **Top, Bottom**
-   **Left, Right**

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-12--1-.png)

# What is the Static Position in CSS?

This has **no use cases**. This is the **default value** of every element.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-10--3-.png)

Default position of every element

# What are the Relative and Absolute Positions in CSS?

Both the **relative position** and **absolute position** work in the same way except in one field. We use `relative` to identify the parent class. And we use `absolute` to identify the children classes.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-11--2-.png)

**Position VS relative position**

### Let's look at 2 examples 👇

First, let's experiment with the **`relative`** value. Try out this code:

```CSS
.box-1{
/* Other codes are here*/

   position: relative;
   left: 100px;
}
```

This is the result you'll get:👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-13--1-.png)

We can duplicate the same result using the **`absolute`** value like this: 👇

```CSS
.box-1{
/* Other codes are here*/

   position: absolute;
   left: 100px;
}
```

Let's investigate the main difference between **relative and absolute** positions.

### Relative vs Absolute Position in CSS

![](https://www.freecodecamp.org/news/content/images/2021/06/BEM-1--1-.png)

### HTML

Write this code inside your HTML: 👇

```HTML
<body>
   <div class="box-1">
    
       <div class="box-2"> </div>	
        
   </div>
</body>
```

### CSS

Style the boxes with the following CSS:👇

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

It should look like this:👇

![](https://www.freecodecamp.org/news/content/images/2021/06/dd-2.png)

**The result is a blue box with a smaller pink box in the upper left**

Now, we'll select our classes like this: 👇

```CSS
body{ }

.box-1{ }

.box-2{ }
```

Now, write this code in your CSS: 👇

```CSS
body{
	
}

.box-1{
/* This is the  👇 parent */
	position: relative;
}
.box-2{
/* This is the  👇 child */
	position: absolute;
	left: 100px;
}
```

Here's the result: 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-14.png)

**The result is that the pink box has moved right 100px**

Notice that .box-2 has moved **100px** from .box-1.

This is because .box-1 is the **parent** and .box-2 is the **child**.

Let's change it again. Write this code in your CSS:

```CSS
body{
/* This is the  👇 parent */
   position: relative;	
}

.box-1{

}
.box-2{
/* This is the  👇 child */
   position: absolute;
    left: 100px;
}
```

Now here's the result: 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-15.png)

**The result is that the pink box has moved 100px from the body**

Notice that .box-2 has moved **100px** from the **body** element.

This is because the **body** is the **parent** and .box-2 is the **child**.

# What is the Fixed Position in CSS?

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-16--1-.png)

This value will **fix the position** of your element on the screen even when you **scroll** in the browser. Let's look at some examples to see how it works.

### Fixed position example

Write this code in your HTML. 👇 Once you write `lorem200`, make sure to hit the **Tab** key on your keyboard:

```HTML
<div class="container">
	
	<p>lorem200</p>
    
	<div class="box-1"> fixed </div>
    
	<p>lorem200</p>		

</div>
```

And here's the CSS:

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

Then add this CSS at the bottom:

```CSS
.box-1{

	position: fixed;
	top: 100px;
	left: 200px;
}
```

Here's the result:👇

![](https://media.giphy.com/media/J6hbBulobEQz6HftRv/giphy.gif)

You can see that the element remains fixed even when we scroll our browser.

# What is the Sticky Position in CSS?

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-17.png)

After scrolling to a certain point on our screen, this value will **fix the position** of our element on the screen so it doesn't move.

### Sticky position example

Don't change anything in your current HTML and CSS except this one value:

```CSS
.box-1{
/*  Play with  👇 this value */
   position: sticky;
   top: 30px;
   left: 200px;
}
```

Here's the result: 👇

![](https://media.giphy.com/media/175hkevbKC3yUfiLQc/giphy.gif)

You can see that after a **certain scroll point**, the element remains fixed at the exact top of our browser screen.

You can check out these websites to see how the sticky position works on actual websites.

-   [AwakeBoards](https://awakeboards.com/)
-   [Ferme](https://ferme.shop/)
-   [LATORRE](https://www.ascensionlatorre.com/)

# Conclusion

Now, you can confidently make beautiful websites and solve simple layout problems using the position property.

Here's your medal for reading till the end. ❤️

### Suggestions and Criticisms Are Highly Appreciated ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube [/ Joy Shaheb](https://youtube.com/c/joyshaheb)**

**LinkedIn [/ JoyShaheb](https://www.linkedin.com/in/joyshaheb/)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**

## Credits

-   [Cute Girl Illustration](https://www.freepik.com/free-vector/young-girl-holding-pile-papers-cartoon-illustration_12566300.htm)
-   [Kitty Avatar](https://www.flaticon.com/packs/kitty-avatars-3)
