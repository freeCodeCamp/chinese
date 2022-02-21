> -  原文地址：[CSS Shapes Explained: How to Draw a Circle, Triangle, and More Using Pure CSS](https://www.freecodecamp.org/news/css-shapes-explained-how-to-draw-a-circle-triangle-and-more-using-pure-css/)
> -  原文作者：[
                    
                        Thomas Weibenfalk
                    
                ](https://www.freecodecamp.org/news/author/thomas-weibenfalk/)
> -  译者：
> -  校对者：

![CSS Shapes Explained: How to Draw a Circle, Triangle, and More Using Pure CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/delila-ziebart-b0GSCFJ-Gzg-unsplash.jpg)

Before we start. If you want more free content but in video format. Don't miss out on my Youtube channel where I publish weekly videos on FrontEnd coding.  
  
[https://www.youtube.com/user/Weibenfalk](https://www.youtube.com/user/Weibenfalk)  
  
\----------  
  
Are you new to web development and CSS? Have you ever wondered how those nice shapes are made that you see all over the internet? Wonder no more. You've come to the right place.

Below I will explain the very basics of creating shapes with CSS. There's **a lot** to tell you about this topic! Therefore I will not cover all (far from all) tools and shapes but this should give you a basic idea of how shapes are created with CSS.

Some shapes require more "fix and tricks" than others. Creating shapes with CSS is usually a combination of using **width, height, top, right, left, border, bottom, transform** and pseudo-elements like **:before** and **:after.** We also have more modern CSS properties to create shapes with like **shape-outside** and **clip-path.** I'll write about them below also.

## **CSS Shapes - The basic way**

By using a few tricks in CSS we've always been able to create basic shapes like squares_,_ circles_,_ and triangles with regular CSS properties. Let's look at a few of them now.

### Squares and rectangles

Squares and rectangles are probably the easiest shapes to achieve. By default, a div is always a square or a rectangle.

You set the width and height as shown in the below code. Then it's just a matter of giving the element a background color. You can have whatever other properties you want on the element.  

```css
#square {
    background: lightblue;
    width: 100px;
    height: 100px;
}
```

![square](https://www.freecodecamp.org/news/content/images/2020/01/square.png)

A CSS square

###   
Circles

It's almost as easy to create a circle. To create a circle we can set the border-radius on the element. This will create curved corners on the element.

If we set it to 50% it will create a circle. If you set a different width and height we will get an oval instead.

```css
#circle {
    background: lightblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
```

![circle](https://www.freecodecamp.org/news/content/images/2020/01/circle.png)

A CSS Circle

### Triangles

Triangles are a little trickier. We have to set the borders on the element to match a triangle. By setting the width and height to zero on the element, the actual width of the element is going to be the width of the border.

Keep in mind that the border edges on an element are 45 degree diagonals to each other. That's why this method works to create a triangle. By setting one of the borders to a solid color and the other borders to transparent it will take the form of a triangle.

![borders](https://www.freecodecamp.org/news/content/images/2020/01/borders.png)

CSS Borders have angled edges

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

A CSS Triangle

If you want to have a triangle/arrow pointing in another direction You can change the border values corresponding to what side you want to be visible. Or you can rotate the element with the _transform_ property if you want to be really fancy.

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

Another CSS Triangle

Alright – that's an intro to basic shapes with CSS. There are probably an endless amount of shapes you can think of to create. These are just the fundamentals, but with a little creativity and determination you can achieve a lot with just basic CSS properties.

In some cases, with more advanced shapes, it's also a good idea to use the :after and :before pseudo selectors. This is out of scope of this article though as my intention is to cover the basics to get you going.

### Disadvantage

**There is one big disadvantage with the above approach.** For example, if you want your text to flow around and wrap your shape. A regular HTML div with background and borders to make up the shape won't allow that. The text will not adapt and flow around your shape. Instead it will flow around the div itself (which is a square or a rectangle).

Below is an illustration showing the triangle and how the text will flow.

![textflow-bad](https://www.freecodecamp.org/news/content/images/2020/01/textflow-bad.png)

Luckily we have some modern CSS properties to use instead.

## CSS Shapes - The other way

Nowadays we have a property called **shape-outside** to use in CSS. This property lets you define a shape that the text will wrap/flow around.

Along with this property we have some basic shapes:  
  
**inset()**  
**circle()  
ellipse()  
polygon()**

**Here's a tip**: You can also use the **clip-path** property. You can create your shape with that in the same way, but it won't let the text wrap around your shape like shape-outside does.

The element that we are going to apply the shape to with the shape-outside property to has to be floated. It also has to have a defined width and height. **That's really important to know!**

You can read more about why [here](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside). Below is also a text that I've taken from the provided link to developer.mozilla.org.

> The `shape-outside` property is specified using the values from the list below, which define the float area for float elements. The float area determines the shape around which inline content (float elements) wrap.

### inset()

The inset() type can be used to create a rectangle/square with an optional offset for the wrapping text. It allows you to provide values on how much you want your wrapping text to overlap the shape.

You can specify the offset to be the same for all four directions like this: **inset(20px).** Or it can be individually set for each direction: **inset(20px 5px 30px 10px)**.

You can use other units also to set the offset, for example, percent. The values correspond like this: **inset(top right bottom left)**_**.**_

Check out the below code example. I've specified the inset values to be 20px at the top, 5px to the right, 30px at the bottom and 10px to the left. If you want your text to go around your square instead you can just skip using inset() at all. Instead set the background on your div and specify the size as usual.

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

The text is offset by the specified values. In this case 20px at top, 5px to the right, 30px at the bottom and 10 px to the left

It is also possible to give inset() a second value that specifies the border-radius of the inset. Like below:

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

border-radius set to 50px on the inset

### circle()

In this one a circle is created using the **shape-outside** property. You also have to apply a **clip-path** with the corresponding property for the circle to show up.

The **clip-path** property can take the same value as the shape-outside property so we can give it the standard **circle()** shape that we used for **shape-outside**. Also, note that I've applied a 20px margin on the element here to give the text some space.

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

Text flows around the shape!

In the above example, I don't specify the radius of the circle. This is because I want it to be as big as the div is (300px). If you want to specify a different size for the circle you can do that.

The circle() takes two values. The first value is the radius and the second value is the position. These values will specify the center of the circle.

In the below example I've set the radius to 50%. Then I have shifted the center of the circle by 30%. Note that the word "at" has to be used between the radius and position values.

I've also specified another position value on the clip-path. This will clip the circle in half as I move the position to zero.

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

Ellipses work the same way as circles except that they create an oval. You can define both the X value and the Y value, like this: **ellipse(25px  50px).**

The same as a circle, it also takes a position value as the last value.

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

A polygon is a shape with different vertices/coordinates defined. Below I create a "T" shape which is the first letter in my name. I start from the coordinates 0,0 and move from left to right to create the "T" shape.

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

### Images

You can also use images with transparent backgrounds to create your shape. Like this round beautiful moon below.

This is a .png image with a transparent background.

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

And that's it! Thank you for reading.

## About the author of this article

My name is Thomas Weibenfalk and I'm a developer from Sweden. I regularly create free tutorials on my Youtube channel. There's also a few premium courses out there on React and Gatsby. Feel free to visit me on these links:

Twitter — [@weibenfalk](https://twitter.com/weibenfalk),  
Weibenfalk on [Youtube](https://www.youtube.com/c/weibenfalk),  
Weibenfalk [Courses Website](https://www.weibenfalk.com).