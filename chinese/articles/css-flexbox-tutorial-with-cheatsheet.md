> -  原文地址：[CSS Flexbox Tutorial with Flexbox Properties Cheat Sheet 🎖️](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：
> -  校对者：

![CSS Flexbox Tutorial with Flexbox Properties Cheat Sheet 🎖️](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/FCC--Thumbnail-1.png)

In this article, I'll teach you **CSS Flexbox** basics so you can make your own responsive sites. I'll explain how each of Flexbox's properties work, and I'll give you a cheatsheet that covers everything you can do with Flexbox. Let's Go 🎖️

# Table of Contents

-   Flexbox Architecture
-   flex-direction
-   justify-content
-   align-content
-   align-items
-   align-self
-   flex - grow | shrink | wrap | basis
-   Short Hands
-   Conclusion

### You can watch this tutorial on YouTube as well if you like

# First, What is Flexbox?

![](https://www.freecodecamp.org/news/content/images/2021/04/Frame-4--2-.png)

When you're building a house, you need a blueprint. In the same way, we need a blueprint when we're making websites. And Flexbox is the blueprint.

The Flexbox model allows us to **layout the content** of our website. Not only that, it helps us create the structures needed for creating **responsive websites** for multiple devices.

Here's a demo which I created using Flexbox as the main blueprint.

![](https://www.freecodecamp.org/news/content/images/2021/04/Frame-35--1-.png)

This project is a [part of this article](/news/learn-css-media-queries-by-building-projects/).

# Flexbox Architecture

So how does Flexbox architecture work? The flex-items \[Contents\] are distributed along the main axis and cross axis. And, depending on the flex-direction property, the layout position changes between rows and columns.

![Flex Box model Architecture](https://dev-to-uploads.s3.amazonaws.com/i/hy2oqjvsbk60ef92nktg.png)

# Flexbox Chart

This chart contains every possible property and value you can use when you're working with Flexbox. You can reference it while doing your projects and experiment with different values.

![Flex Box property Value Chart](https://dev-to-uploads.s3.amazonaws.com/i/gv3jyh4xt4fbwtq1qejn.png)

# How to Set Up the Project

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jphj7d3c3oh6dvx40ogy.png)

For this project, you need to know little bit of HTML, CSS, and how to work with VS code. Follow along with me as we complete the following tasks:

1.  Create a folder named "Project-1" & Open VS Code
2.  Create `index.html` and `style.css` files
3.  Install Live Server and run it.

Or, you can just open [Codepen](https://codepen.io/) and start coding.

At the end of this tutorial, you will be able to make accurate and beautiful website layouts.

## HTML

In HTML, write these lines of code inside the body tag 👇

```html
<div class="container">
    <div class="box-1"> A </div>
    <div class="box-2"> B </div>
    <div class="box-3"> C </div>
</div>
```

## CSS

Target the `.container` class and all the boxes. Then style the boxes so that all of them look similar, like this: 👇

**Note:** don't forget to put the height of the container.

```css
.container{
   height : 100vh;
}

[class ^="box-"]{
    width: 140px;
    height: 140px;
    background-color: skyblue;
    border: 2px solid black;

// To view the letter better
    font-size: 65px;
}
```

## But Wait

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cq8exwor5aiciu2j6jwu.png)

Before starting, you need to understand the relationship between parent and child classes.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wzq3w0bys78fveqb9z0z.png)

Flexbox works on the **parent class**, not on the child classes.

Here, the `.container` class is the **parent** and our `.box-*` classes are our **children**.

So, apply the display: flex inside the `.container` class. And place the letters at the center of the box like this:

```css
.container{
    display : flex;
    height : 100vh;

// To place some gap between boxes
    gap : 25px;
}
[class ^="box-"]{
// Code from previous step are here

// Placing text at center 
    display : flex;
    justify-content : center;
    align-items : center;
}
```

And...we're all set! Let's start coding. 😊

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e4ufu718jzjopwn66ik8.png)

# flex-direction property

This property allows us to set the direction and orientation in which our flex-items should be distributed inside the flex-container.

![Flex Direction](https://dev-to-uploads.s3.amazonaws.com/i/n2ggh6yy4sbgltrx2i40.png)

![Flex Direction](https://dev-to-uploads.s3.amazonaws.com/i/6m9fg4n5a114q1va3b9p.png)

To recreate these results, let's write these lines in our CSS:

**Please note** that we'll write them inside the `.container` class.

```css
.container{
//code from setup stage are here

// Change the value  👇 here to see results
    flex-direction : row;
}
```

# justify-content property

This property arranges flex-items along the **MAIN AXIS** inside the flex-container.

![justify content](https://dev-to-uploads.s3.amazonaws.com/i/a5lhkhbhi7hxwjgyvl5x.png)

![justify content](https://dev-to-uploads.s3.amazonaws.com/i/1vyg5nf1w7plistni582.png)

To recreate these results, write these lines in your CSS:

```css
.container{
//code from setup stage are here

//  Change the value  👇 here to see results
    justify-content: flex-start;
}
```

# align-content property

This property arranges flex-items along the **CROSS AXIS** inside the flex-container. This is similar to **justify-content**.

![align content](https://dev-to-uploads.s3.amazonaws.com/i/nqvvc2rhf0vx3czy0rnr.png)

![align content](https://dev-to-uploads.s3.amazonaws.com/i/zeet3705rsmz77v66x3c.png)

Please note that without the **flex-wrap** property, this property doesn't work. Here's a demo:

```css
.container{

//  Change the value  👇 here to see results
    align-content: center;

// without this line, align-content won't work
    flex-wrap: wrap;
}
```

# align-items property

This property distributes Flex-items along the **Cross Axis**.

![align items](https://dev-to-uploads.s3.amazonaws.com/i/kt25wxicd7vm8ddtmq0l.png)

To recreate these results, let's write the following code in CSS:

```css
.container{
//code from setup stage are here

// Change the value 👇 here to see results
    align-items: flex-end;
}
```

# align-self property

This property works on the child classes. It positions the selected item along the **Cross Axis**.

![align self](https://dev-to-uploads.s3.amazonaws.com/i/383cxj4ippb21vjq31q2.png)

In total we have 6 values:

-   flex-start
-   flex-end
-   center
-   baseline
-   stretch
-   auto

To recreate the results, select any `.box-*` and write the following code:

```css
.box-2{
// Change the value 👇 here to see results
     align-self : center;
}
```

## Take a Break

So far so good. Take a break!

![](https://www.freecodecamp.org/news/content/images/2021/04/Frame-45.png)

# flex - grow | shrink | wrap | basis properties

The properties we'll discuss now will work when we resize the window. Let's dive right in.

### flex-grow

This property grows the size of a flex-item based on the width of the flex-container.

### flex-shrink

This property helps a flex item shrink based on the width of the flex-container. It's the opposite of flex-grow.

![flex grow flex shrink flex wrap](https://dev-to-uploads.s3.amazonaws.com/i/z094e3wehsoe8z6lsxnz.png)

To achieve these results, follow me.

**Please note** that flex-grow and flex-shrink work on child classes. So, we will target all our boxes like this:

```css
.box-1{
    flex-grow: 1;
}
.box-2{
    flex-grow: 5;
}
.box-1{
    flex-grow: 1;
}
```

Resize the window and you'll see the results.

To duplicate the result of flex-shrink, write the following code:

**Please note** that you need to delete the flex-wrap property first, otherwise it won't work.

```css
.box-1{
    flex-shrink: 1;
}
.box-2{
    flex-shrink: 5;
}
.box-1{
    flex-shrink: 1;
}
```

Now, resize the window and you'll see the results.

### flex-wrap

This property helps you set the number of flex-items you want in a line or row.

![flex wrap flex grow flex shrink](https://dev-to-uploads.s3.amazonaws.com/i/fux9qc05e6rtat192vlm.png)

This works on the `.container` parent class. So, write the following code:

```css
.container{
    //other codes are here 
  
// Change value 👇 here to see results
    flex-wrap : wrap;
```

### flex-basis

This is similar to adding width to a flex-item, but only more flexible. flex-basis: 10em, for example, will set the initial size of a flex-item to 10em. Its final size will be based on the available space, flex-grow, and flex-shrink.

# Short Hand Flexbox Properties

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/eayovne50iwxx8ll5e01.png)

### flex shorthand

This is the shorthand for the **flex-grow**, **flex-shrink** and **flex-basis** properties combined.

![flex flex basis](https://dev-to-uploads.s3.amazonaws.com/i/onoxj7gs9xj4wuf87kjl.png)

You can try this by writing the following code:

**Please note** that it only works on the child classes:

```css
.box-2{
    flex : 2 1 30em;
}
```

### flex-flow

This is the shorthand for the **flex-direction** and **flex-wrap** properties:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/awniqyrepbha5jdquwxh.png)

You can try this by writing the following code:

**Please note** that it only works on the parent class.

```css
.container{
    flex-flow : row wrap;
}
```

## place-content

This is the shorthand for the justify-content and align-content properties:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/72yaytxgighz0cjskp2e.png)

Let's duplicate the results:

**Please note** that it works on the parent class.

```css
.container{
    place-content : center flex-end;
}
```

## More Resources

If you want to **exercise** your Flexbox knowledge, you can [read this article of mine](/news/learn-flexbox-build-5-layouts/) where you'll be **building five responsive layouts using F**lexbox. Here's a demo:

![](https://www.freecodecamp.org/news/content/images/2021/04/Frame-5--2--1.png)

# Conclusion

Here's your medal for reading till the end ❤️

### Suggestions & Criticisms Are Highly Appreciated ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube [/ Joy Shaheb](https://www.youtube.com/c/joyshaheb)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**

## Credits

  \* [unicorn pack](https://www.flaticon.com/packs/unicorn-4), [Kitty Avatars](https://www.flaticon.com/packs/kitty-avatars-3)

  \* [cat-1](https://www.flaticon.com/free-icon/cat_1864514?term=kitty&page=1&position=12&page=1&position=12&related_id=1864514&origin=search), [cat-2](https://www.flaticon.com/free-icon/cat_3629088?related_id=3629088), [dog](https://www.flaticon.com/free-icon/shiba_1623792?term=dog&related_id=1623792), [rabbit](https://www.flaticon.com/free-icon/rabbit_1807972?term=rabbit&page=1&position=13&page=1&position=13&related_id=1807972&origin=search)

  \* [Astronaut](https://www.freepik.com/free-vector/cute-astronaut-holding-coffee-cup-cartoon-illustration-science-food-drink-icon-concept-flat-cartoon-style_10479412.htm#position=0), [unicorn cup](https://www.vecteezy.com/vector-art/668079-little-pony-in-coffee-cup), [rainbow cat](https://www.vecteezy.com/vector-art/668109-rainbow-cat-unicorn-mermaid)

  \* [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

![Credits](https://dev-to-uploads.s3.amazonaws.com/i/uzo5e477tn0sc4oz3mec.png)