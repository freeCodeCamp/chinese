> -  原文地址：[How to Center Anything in CSS Using Flexbox and Grid ✨](https://www.freecodecamp.org/news/how-to-center-objects-using-css/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：Miever
> -  校对者：

![How to Center Anything in CSS Using Flexbox and Grid ✨](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/FCC--center.png)

Today I'm gonna show you how you can **center and align** your content with CSS. Along the way, we'll look at various **alignment techniques**. So, let's get started! 🥇

## Table of Contents ->

-   How to Use **Flexbox** to
    -   [center anything horizontally](#how-to-center-anything-horizontally-using-flexbox)
    -   [center anything vertically](#how-to-center-anything-vertically-using-flexbox)
    -   [center both horizontally & Vertically](#how-to-center-a-div-horizontally-vertically-using-flexbox)
-   How to Use **Grid** to
    -   [center anything horizontally](#how-to-center-anything-horizontally-using-css-grid)
    -   [center anything vertically](#how-to-center-anything-vertically-using-css-grid)
    -   [center both horizontally & Vertically](#how-to-center-a-div-horizontally-vertically-using-css-grid)
-   [The Transform & position property](#how-to-use-the-css-position-property-to-center-anything)
-   [The Margin Property](#how-to-use-the-margin-property-to-center-anything)
-   [**Additional resources**](#additional-resources)
-   [Conclusion](#conclusion)

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-73.png)

Methods

## You can watch this tutorial on YouTube as well if you like:

## But.... Wait A Minute!

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-35--3-.png)

First of all, let's understand:

-   Main Axis
-   Cross Axis

## What is the Main Axis in CSS?

You can also call it the:

-   **X-Axis**
-   Main Axis
-   Horizontal Line

The line from **left** to **right** is the Main-Axis.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-71.png)

Main Axis

## What is the Cross Axis in CSS?

You can also call it the:

-   **Y-Axis**
-   Cross Axis
-   Vertical Line

The line from **top** to **bottom** is the Cross-Axis.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-72.png)

Cross Axis

# Project Setup

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-54.png)

To experiment with all the properties and values, write the following code in your code editor.

### HTML

Write this code inside the body tag:

```HTML
<div class="container">

   <div class="box-1"> </div>
    
</div>
```

### CSS

Clear the **default** browser styles so that we can work more accurately:

```CSS
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
```

Select the **.container** class and set it to 100vh. Otherwise, we can't see our result on the **Vertical Axis**:

```CSS
.container{
   height: 100vh;
}
```

Style the **.box-1** class like this:

```CSS
.box-1{
   width: 120px;
   height: 120px;
   background-color: skyblue;
   border: 2px solid black;
}
```

We're all set, now let's start coding!

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-3--5-.png)

## How to use Flexbox to center anything

![](https://www.freecodecamp.org/news/content/images/2021/06/Thumbnail-hashnode.png)

We can use Flexbox to align our content `div` both along the X and Y Axis. To do that, we need to write the `display: flex;` property inside the `.container` class:

```CSS
.container{
   display: flex;
   
   height: 100vh;
}
```

We'll experiment with these 2 properties:

-   `justify-content`
-   `align-items`

## How to center anything horizontally using Flexbox

We can use the **justify-content** property to do this using these values 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Justify-content-1.png)

**values of flexbox justify-content property**

To experiment with the values, write the following code👇

```CSS
.container{
   display: flex;
   height: 100vh;
   
 /* Change values to  👇 experiment*/
   justify-content: center;
}
```

The result will look like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-6--2-.png)

result of justify-content flexbox

## How to center anything vertically using Flexbox

We can use the **`align-items`** property to do this using these values 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/align-items-1.png)

**values of Flexbox align-items property**

To experiment with the values, write the following code👇

```CSS
.container{
   height: 100vh;
   display: flex;
   
 /* Change values 👇 to experiment*/
   align-items: center;
}
```

The result looks like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-7--4-.png)

Result of align-items flexbox

## How to center a div horizontally & vertically using Flexbox

Here, we can combine both the **`justify-content`** and **`align-items`** properties to align a div both horizontally and vertically.

Write the following codes👇

```CSS
.container{
   height: 100vh;
   display: flex;
   
/* Change values 👇 to experiment*/
   align-items: center;
   justify-content: center;
}
```

The result looks like this 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--1-.png)

Centering a div Horizontally & vertically

You can check out this [cheatsheet](/news/css-flexbox-tutorial-with-cheatsheet/) to learn more about various Flexbox properties.

## How to use CSS Grid to center anything

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-70.png)

We can use **grid** to align our content `div` both along the X and Y Axis. To do that, we need to write the `display: grid;` property inside the `.container` class:

```CSS
.container{
   display: grid;
   
   height: 100vh;
}
```

We'll experiment with these 2 properties:

-   `justify-content`
-   `align-content`

**Alternatively**, you can use these 2 properties:

-   `justify-items`
-   `align-items`

## How to center anything horizontally using CSS Grid

We can use the **`justify-content`** property to do this using these values 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/justify-content-1--1-.png)

**values of Grid justify-content property**

Write the following code 👇

```CSS
.container{
   height: 100vh;
   display: grid;

  /* Change  values   👇 to experiment*/
   justify-content: center;
}
```

The result looks like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-6--2--1.png)

**result of justify-content grid**

## How to center anything vertically using CSS Grid

We can use the **`align-content`** property to do this using these values 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/align-content-1.png)

Values of CSS grid align-content property

Write the following code 👇

```CSS
.container{
   height: 100vh;
   display: grid;
   
  /*  Change values 👇 to experiment*/
   align-content: center;
}
```

The result will look like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-7--4--1.png)

result of align-content grid

## How to center a div horizontally & vertically using CSS Grid

Here, we can combine both the **`justify-content`** and **`align-content`** properties to align a div both horizontally and vertically.

Write the following code 👇

```CSS
.container{
   height: 100vh;
   display: grid;
    
/* Change  values  👇 to experiment*/
   align-content: center;
   justify-content: center;
}
```

The result looks like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--1--1.png)

Centering a div Horizontally & vertically with Grid

## Alternative way

You can also use the **`justify-items`** and **`align-items`** properties to duplicate the same results:

```CSS
.container{
   height: 100vh;
   display: grid;
    
/* Change  values  👇 to experiment*/
   align-items: center;
   justify-items: center;
}
```

## The place-content Property in CSS Grid

This is the **shorthand** of 2 properties of CSS Grid->

-   `justify-content`
-   `align-content`

Follow along 👇

```CSS
.container{
   height: 100vh;
   display: grid;
   
   place-content: center;
}
```

We get the same result 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--1--2.png)

Centering a div Horizontally & vertically

Check out this [cheatsheet](/news/css-grid-tutorial-with-cheatsheet) to find out the difference between various Grid properties.

## Take a break!

So far so good – take a break.

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-67--1-.png)

## How to use the CSS Position Property to center anything

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-12-1.png)

This is a combination of these properties ->

-   `position`
-   `top, left`
-   `transform, translate`

Write the following code 👇

```CSS
.container{
   height: 100vh;
   position: relative;
}
```

Along with this:

```CSS
.box-1{
   position: absolute;
   
   width: 120px;
   height: 120px;
   background-color: skyblue;
   border: 2px solid black;
}
```

## First... Understand the center point of a div

By default, this is the center point of a div 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-9.png)

**Default Center point of a div**

That's why we see this odd behavior 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--2-.png)

**Box is not at exact center** 

Notice that the box is not at the **exact** center in the image above. 👆

By writing this line 👇

```CSS
transform: translate(-50%,-50%);
```

We fix the problem 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-10--2-.png)

**New Center point of our div**

And we get this result 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-11--1-.png)

**Box is at exact center point**

## What is the Translate property in CSS?

Translate is the shorthand of 3 properties ->

-   `translateX`
-   `translateY`
-   `translateZ`

## How to center a div horizontally using CSS Position property

We're gonna use the `left` property inside the`` `.box-``\` class. Follow along 👇

```CSS
.box-1{
/* other codes are here*/	

   left: 50%;
   transform: translate(-50%);
}
```

And we get this result 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-6--2--2.png)

**result of left & transform property**

## How to center a div vertically using CSS Position property

We're gonna use the `top` property inside the`` `box-``\` class. Follow along 👇

```CSS
.box-1{
/* Other codes are here*/	

   top: 50%;
   transform: translate(0,-50%);
}
```

And we get this result 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-7--4--2.png)

**result of top & transform property**

## How to center a div horizontally & vertically using CSS position property

To achieve this result, we're gonna combine these properties together ->

-   `top, left`
-   `transform, translate`

Follow along 👇

```CSS
.box-1{
/*Other codes are here */	

   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
}
```

And we get this result 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--1--3.png)

result of position & transform property

## How to use the margin Property to center anything

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-73--2-.png)

The margin property is the shorthand of 4 properties

-   `margin-**top**`, `margin-**bottom**`
-   `margin-**left**`, `margin-**right**`

Write this code to set it up 👇

```CSS
.container{
   height: 100vh;
   
   display: flex;
}

.box-1{
   width: 120px;
   height: 120px;
   background-color: skyblue;
   border: 2px solid black;
}
```

## How to center a div horizontally using CSS margin property

We're gonna use the `margin` property inside the `.box-1` class. Write the following code 👇

```CSS
.box-1{
 //Other codes are here 
   
  margin: 0px auto;	
}
```

The result looks like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-6--2--3.png)

****result of** CSS margin Property**

## How to center a div vertically using CSS margin property

We're gonna use the `margin` property inside the `.box-1` class. Write the following code 👇

```CSS
.box-1{
 //Other codes are here 
   
  margin: auto 0px;	
}
```

The result looks like this 👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-7--4--3.png)

****result of** CSS margin property**

## How to center a div horizontally & vertically using CSS margin property

We're gonna use the `margin` property inside the`` `.box-``\` class. Write the following code 👇

```CSS
.box-1{
 //Other codes are here 
   
  margin: auto auto;	
}
```

The result looks like this👇

![](https://www.freecodecamp.org/news/content/images/2021/06/Frame-8--1--4.png)

**Result of CSS margin property**

## Additional Resources

-   [Complete Flexbox Tutorial W/ CheatSheet](/news/css-flexbox-tutorial-with-cheatsheet/)
-   [Complete CSS Grid Tutorial W/ CheatSheet](/news/css-grid-tutorial-with-cheatsheet/)

# Credits

-   [uncorns](https://www.flaticon.com/packs/unicorn-4), [kitty](https://www.flaticon.com/packs/kitty-avatars-3)
-   [artist](https://www.freepik.com/free-vector/collection-people-enjoying-their-free-time_4931926.htm#position=7), [kat](https://www.freepik.com/free-vector/cute-cat-unicorn-play-box-cartoon-icon-illustration_12567355.htm#position=0)

# Conclusion

Now, you can confidently **align or center** your content using any of these four methods in CSS.

Here's your **medal** for reading until the end ❤️

## Suggestions & Criticisms Are Highly Appreciated ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube / Joy Shaheb**

**LinkedIn [/ Joy Shaheb](https://www.linkedin.com/in/joyshaheb/)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**
