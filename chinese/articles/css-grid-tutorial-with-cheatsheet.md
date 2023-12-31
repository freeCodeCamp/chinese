> -  原文地址：[Complete CSS Grid Tutorial with Cheat Sheet 🎖️](https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：
> -  校对者：

![Complete CSS Grid Tutorial with Cheat Sheet 🎖️](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/FCC.png)

Today we're going to learn **CSS Grid** properties so that you can make your own responsive websites. I'll explain how each of Grid's properties work along with a CheatSheet that covers everything you can do with Grid. Let's go. 🎖️

# Table of Contents

-   [CSS Grid Architecture](#css-grid-architecture)
-   [CSS Grid Chart](#css-grid-chart)
-   [Grid Parent Properties](#css-grid-parent-properties)
    -   [grid-template-columns](#the-grid-template-columns-property)
    -   [grid-template-rows](#the-grid-template-rows-property)
    -   [grid-template-areas](#the-grid-template-areas-property)
    -   [How to create column and row gaps in Grid](#the-column-gap-property)
    -   [How to justify items and align items with Grid](#the-justify-items-property)
    -   [How to justify content and align-content with Grid](#the-justify-content-property)
-   [Child Properties in CSS Grid](#css-grid-child-properties)
    -   [grid-column : start/end](#the-grid-column-start-end-properties)
    -   [grid-row : start/end](#the-grid-row-start-end-properties)
    -   [grid-area](#the-grid-area-property)
    -   [justify-self || align-self](#the-justify-self-property)
-   [Shorthand for Grid](#shorthand-for-css-grid-properties)
-   [Conclusion](#conclusion)

## You can watch this tutorial on YouTube as well if you like

# First, What is CSS Grid?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6e3wc9k9qxw07o54e38x.png)

Grid is a blueprint for making websites.

The Grid model allows you to layout the content of your website. Not only that, it helps you create the structures you need for building responsive websites for multiple devices. This means your site will look good on desktop, mobile, and tablet.

Here's a simple demo which I created using Grid as the main blueprint.

### Desktop View

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zuz7de20oxw7t8kmid4s.png)

### Mobile View

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8wqtabiihl0kexxdbvht.png)

# CSS Grid Architecture

So how does Grid architecture work? The Grid items \[Contents\] are distributed along the main axis and cross axis. Using various Grid properties, you can manipulate the items to create your website layouts.

![Grid Architecture](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h9qs07pm0a8s20scr6wr.png)

grid architecture

By the way, you can join multiple rows and columns, just like in Excel software, which gives you more flexibility and options than Flexbox.

By the way, here's a CheatSheet I made for [Flexbox](/news/css-flexbox-tutorial-with-cheatsheet/) if you want to learn more about that.

# CSS Grid Chart

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s3oecuzn41ee3gj4o1ny.png)

This chart contains every possible property you can use when using grid. Grid properties are divided into:

-   Parent properties
-   Child Properties

**Note:** The red colored text denotes the shorthand properties:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n93mkan7du7wz3zyibtw.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5g3msf9v3yw9qjpzkvj7.png)

By the end of this tutorial, you'll have a clear understanding of how to use all of those properties.

# How to Set Up the Project

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8c9bfd2puec1wjuk063k.png)

For this project, you need to know little bit of HTML, CSS, and how to work with VS code. Follow along with me as we complete the following tasks:

1.  Create a folder named "Project-1" and Open VS Code
2.  Create index.html and style.css files
3.  Install Live Server and run it.

Or, you can just open [Codepen](https://codepen.io) and start coding.

At the end of this tutorial, you will be able to make accurate and beautiful website layouts.

And...we're all set! Let's start coding. 😊

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gfjntw9islnyhv6mkigq.png)

## HTML

Create three boxes inside the body tag, like this 👇

```html
<div class="container">
  <div class="box-1"> A </div>
  <div class="box-2"> B </div>
  <div class="box-3"> C </div>
</div>
```

## CSS

### Step 1

Let's clear out our default browser styles. Follow me 👇

```css
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
```

### Step 2

Inside the body selector, do these adjustments:

```css
body {
  font-family: sans-serif;
  font-size: 40px;
  width: 100%;
  min-height: 100vh;
}
```

### Step 3

Now, let's style our boxes by selecting all of them together ->

```css
[class^="box-"] {
  background-color: skyblue;

/* To place the letter at the center */
  display: grid;
  place-items: center;
}
```

**Note:** Don't worry, we'll discuss those grid properties in detail later.

### Step 4

Now, place some gaps between our boxes like this 👇

```css
.container {
  display: grid;
  gap: 20px;
}
```

## But Wait

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cq8exwor5aiciu2j6jwu.png)

Before starting, you need to understand the relationship between parent and child classes.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wzq3w0bys78fveqb9z0z.png)

For the Grid parent property, we will write inside the `.container` class. For the Grid child property, we will write in the `.box-*` classes.

# CSS Grid Parent Properties

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lwnmeomlyekzuov7tcml.png)

First, let's learn about CSS Grid's parent properties!

## The grid-template-columns property

You use this property to define the **number and width** of columns. You can either individually set the width of each column, or set a uniform width for all columns using the `repeat()` function.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pu3jedhac2u0onuan6go.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mov0pc7djie6gbj7m25g.png)

grid-template-columns

To recreate these results, write the following CSS lines ->

```css
.container {
  display: grid;
  gap: 20px;

/*  Change the values     👇 to experiment */
  grid-template-columns: 200px auto 100px;
}
```

**Note:**

-   The pixel values will be an exact measurement. The "auto" keyword will cover the available space.
-   If you use fr (fraction unit) as a unit of measurement, all the boxes will be equal in size.

## The grid-template-rows property

You use this property to define the **number and height** of rows. You can either individually set the height of each row, or set a uniform height for all rows using the `repeat()` function.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r78wfrp3rr4mmn3507ym.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/elpj9jw29ydlwao1yb3q.png)

grid-template-rows

To test these results, write the following CSS code ->

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;

/* Change the values  👇 to experiment */
  grid-template-rows: 200px auto 100px;
}
```

## The grid-template-areas property

You use this property to specify the amount of space a grid cell should carry in terms of columns and rows across the parent container. Life's much easier with this property as it allows us to see visually what we're doing.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9nw9e0e1wk96wg3uq99f.png)

Standard 12X12 layout

Call it the blueprint(template) of our layout👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nffhbw0eho476i535eyu.png)

The blueprint

To experiment with this, you need to understand both the parent and child properties:

-   **grid-template-areas:** The parent property that will create the blueprint
-   **grid-area:** the child property that will follow the blueprint.

### First, create the blueprint

Like this 👇 inside the parent .container class:

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;

  grid-template-areas: 
    "A A A A   A A A A   A A A A"
    "B B B B   B B B B   B B C C"
    "B B B B   B B B B   B B C C";
}
```

### Implement the blueprint

Target all our child `.box-*` classes and set the values like this ->

```css
.box-1{
  grid-area: A;
}
.box-2{
  grid-area: B;
}
.box-3{
  grid-area: C;
}
```

**Note:** I'll discuss the grid-area property again in the grid child property section.

## The column-gap property

You use this property to place a gap between **Columns** inside the grid 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fa59gtskckoh7ms1uk1h.png)

column-gap

To test this, write the following in CSS 👇

```css
.container {
  display: grid;
  height: 100vh;

  grid-template-columns: 100px 100px 100px;
//Change values👇 to experiment
  column-gap:  50px;
}
```

**Note:** column-gap works with grid-template-columns.

## The row-gap property

You use this property to place a gap between **Rows** inside the grid 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aw6l38lydlag1dtzw9j8.png)

row gap

Let's test this 👇

```css
.container {
  display: grid;
  height: 100vh;

  grid-template-rows: 100px 100px 100px;
// Change   👇  values to experiment
  row-gap:  50px;
}
```

**Note:** row-gap works with grid-template-rows.

## The justify-items property

You use this property to position grid-items (children) inside grid containers along the **X-Axis \[Main Axis\]**. The **4** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oka32lvb2i0lrhcb8p4e.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4r2jv92rgp3514fsp4ft.png)

justify-items

If you want to test this, then add 1 more box inside the HTML ->

```html
<div class="container">

  <!--Other boxes - A, B, C are here-->

  <div class="box-4"> D </div>
</div>
```

and in the CSS ->

```css
.container {
  display: grid;
  gap: 50px;
  height: 100vh;

// each box is 200px by 200px
  grid-template-rows: 200px 200px;
  grid-template-columns: 200px 200px;

//  Change values 👇  to experiment
  justify-items : end;
}
```

## The align-items property

You use this property to position grid-items (children) inside the grid container along the **Y-Axis \[Cross Axis\]**. The **4** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/abl60fsmjuys1kadh1ig.png)

align-items

Don't change anything in the HTML, but in the CSS write ->

```css
.container {
  display: grid;
  gap: 50px;
  height: 100vh;

// each box is 200px by 200px
  grid-template-rows: 200px 200px;
  grid-template-columns: 200px 200px;

//  Change values 👇  to experiment
  align-items: center;
}
```

## The justify-content property

You use this property to position your grid \[Basically everything\] inside the grid container along the **X-Axis \[Main Axis\]**. The **7** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r9a8eovy1t3i8x5yii4i.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/onq2gubifwog2rccclqe.png)

justify-content

Don't change anything in the HTML, but in the CSS write ->

```css
.container {
  display: grid;
  gap: 50px;
  height: 100vh;

// each box is 200px by 200px
  grid-template-rows: 200px 200px;
  grid-template-columns: 200px 200px;

//  Change  values  👇  to experiment
  justify-content: center;
}
```

## The align-content property

You use this property to position our grid \[Basically everything\] inside the grid container along the **Y-Axis \[Cross Axis\]**. The **7** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kfgzxrhe2ca4mzk1ies1.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c1rjvr4bvwsc8ceevq96.png)

align-content

Don't change anything in the HTML, but in the CSS write ->

```css
.container {
  display: grid;
  gap: 50px;
  height: 100vh;

// each box is 200px by 200px
  grid-template-rows: 200px 200px;
  grid-template-columns: 200px 200px;

//  Change  values 👇  to experiment
  align-content : center;
}
```

# Take a Break

So far so good! Take a break, you deserve it.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xanzksehasqcwc8qm8fw.png)

# CSS Grid Child Properties

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k2k1muu9oldsp02aigvx.png)

Now, let's look at Grid child properties.

# The CSS Grid Scale

I made this grid scale to demonstrate the calculations of how rows and columns are joined together. We can use any 1 of the 2 types of measurement:

-   The digit \[1,2,3,4, etc...\]
-   The span keyword

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ie4paaplgo8rwf4fd41o.png)

The Grid Scale

You'll get a clear picture of how this guide works ☝️ when we write code in just a short moment.

The illustration below 👇 shows the start and end points of rows and columns of a single cell.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bumrjjy06owkahoe49y3.png)

Grid column & row -> start & end points

### HTML

To experiment with the grid scale and understand the following properties, make 4 boxes inside body tag:

```html
<div class="container">
  <div class="box-1"> A </div>
  <div class="box-2"> B </div>
  <div class="box-3"> C </div>
  <div class="box-4"> D </div>
</div>
```

We're gonna utilize the `repeat()` function. It repeats our code a certain number of times. Here's an example 👇

```css
grid-template-columns : repeat(5,1fr);
```

This ☝️ is the equivalent to writing this:👇

```css
grid-template-columns : 1fr 1fr 1fr 1fr 1fr ;
```

#### A Quick Note

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i2q151726koc8h8mp0ht.png)

When we use the fr \[ Fraction \] unit, we are dividing the screen area into equal proportions.

```css
  grid-template-columns: repeat(5, 1fr);
```

This ☝️ code is dividing our screen width into 5 equal parts.

We're set, let's start!

## The grid-column: start/end properties

You use these two properties to join multiple **COLUMNS** together. It is a shorthand of 2 properties:

-   **grid-column-start**
-   **grid-column-end**

Write this code in your CSS:

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
```

The result looks like this:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2pt6zzl39mvjkv6h1m2.png)

Here, we are dividing our screen \[ both width and height \] into 12 equal parts. 1 box is occupying 1 part, or you can call it 1fr \[ 1 fraction \]. The remaining 8 fractions along the width are empty.

As we are dealing with child properties, we need to target our `.box-*` classes like this:

```css
.box-1{}
.box-2{}
.box-3{}
.box-4{}
```

You can experiment with any or all of these boxes, I'll stick with `.box-1`.

Let's bring our grid scale. We are dealing with columns – just focus on the columns, not rows.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ie4paaplgo8rwf4fd41o.png)

The Grid Scale

The default scale of every `.box-*` class is:

```css
grid-column-start : 1;
grid-column-end : 2;

/* The shorthand -> */
 grid-column : 1 / 2
```

We can write this ☝️ in the span unit as well, like this 👇

```css
grid-column : span 1;
```

Let's assign the empty 8 fractions to `.box-1` like this 👇

```css
.box-1{
grid-column : 1/10
}
```

The result looks like this:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zgcg4yyxourlpk1b6z3m.png)

### A quick note

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g10ckpo6g3tpn8e9kkpw.png)

How did I do the calculation? The `box-1` occupies 1 box itself. And over that, we are adding more 8 boxes. At the last, you must add 1 to indicate the end so, 8+1+1 = 10.

### How to use the span keyword

If you're confused by the first property, you can use the `span` keyword as it is easier to understand.

We need to add 8 boxes to `.box-1` which already occupies one box. So, we have to do 8+1 = 9.

```css
.box-1{
  grid-column : span 9;
}
```

This is gonna output the same result.

## The grid-row: start/end properties

You use these two properties to join multiple **ROWS** together. It is shorthand of 2 properties:

-   **grid-row-start**
-   **grid-row-end**

Let's experiment with it! Here, I'll stick with .box-1, and here's our grid guide. Now, only focus on the row scale, not the column.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ie4paaplgo8rwf4fd41o.png)

The Grid Scale

Let's join 9 boxes to `.box-1` along the row.

Write this code: 👇

```css
.box-1{
  grid-row : 1/11;
}
```

The calculation looks like this -> `.box-1` holds 1 box, and you add 9 more boxes, plus a mandatory 1 at the last position to indicate the end which gives you 9+1+1=11.

Here's the alternative 👇 using the span keyword:

```css
.box-1{
  grid-row : span 10;
}
```

And here's that calculation -> `.box-`1 holds 1 box, and you add 9 more boxes  
9+1=10.

Here's the result so far: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aqkoglmoh1whcyve7uad.png)

## The grid-area property

First, we need to setup grid-template-areas ☝️ Once we've done that, we have to specify the names used in parent class inside the children classes, like this:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hcoalgwdeiogd3tmazzf.png)

Standard 12X12 layout

Then we need to specify grid-template-areas inside parent container: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3r84bvxt5230jyr5pydt.png)

Like this 👇 inside the parent class:

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;

  grid-template-areas: 
    "A A A A   A A A A   A A A A"
    "B B B B   B B B B   B B C C"
    "B B B B   B B B B   B B C C";
}
```

Then we specify the names used in the parent container inside the child classes with grid-areas👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffwg22949ogu0m2bw3sn.png)

Like this 👇 inside the children classes:

```css
.box-1{
  grid-area: A;
}
.box-2{
  grid-area: B;
}
.box-3{
  grid-area: C;
}
```

## The justify-self property

You use this property to position **1 individual** grid-item (child) inside a grid container along the **X-Axis \[Main Axis\]**. The **4** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g21475dm64kw2vyqgxvd.png)

Justify-self

Write this code to experiment with the values 👇

```css
.container {
  display: grid;
  gap :25px;
  height: 100vh;

/* // each box has equal size */
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
```

**Remember!** This only works on the child classes. So, target any `.box-*` class. I'll target the first box:

```css
.box-1 {
/*  Change values 👇  to experiment */
  justify-self : start;  
}
```

## The align-self property

You use this property to position **1 individual** grid-item (child) inside a grid container along the **Y-Axis \[Cross Axis\]**. The **4** values are 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qr5dlqehevjclxys3bx6.png)

align-self

Let's experiment with the values 👇

```css
.container {
  display: grid;
  gap :25px;
  height: 100vh;

/* // each box has equal size */
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
```

**Remember!** This only works on the child classes. So, target any `.box-*` class. I'll target the 1st box:

```css
.box-1 {
/*  Change values 👇  to experiment */
  align-self : start;  
}
```

# Shorthand for CSS Grid Properties

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f6s9qvnvjtwbj7r1ash6.png)

Let's look at these Grid shorthand properties:

-   `place-content`
-   `place-items`
-   `place-self`
-   `grid-template`
-   `gap` / `grid-gap`

## place-content

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jz1dydjbbgxw8bxt86i4.png)

place-content

This is the shorthand of 2 properties:

-   align-content
-   justify-content

#### An example

```css
align-content : center;
justify-content : end;

/* The shorthand */
place-content : center / end ;

```

## place-items

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fvu44ujney5ixzvzedbb.png)

place-items

This is the shorthand of 2 properties:

-   align-items
-   justify-items

#### An example

```css
align-items : end;
justify-items : center;

/* The shorthand */
place-items : end / center ;
```

## place-self

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jafsak8hqgfb78hbxs0b.png)

place-self

This is the shorthand of 2 properties:

-   align-self
-   justify-self

#### An example

```css
align-self : start ;
justify-self : end ;

/* The shorthand */
place-self : start / end ;
```

## grid-template

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dlratlmwgt0vvknnt82w.png)

grid-template

This is the shorthand of 2 properties:

-   grid-template-rows
-   grid-template-columns

#### An example

```css
grid-template-rows : 100px 100px;
grid-template-columns : 200px 200px;

/* The shorthand */
grid-template : 100px 100px / 200px 200px;
```

## gap/grid-gap

Gap and grid-gap are the same thing and do the same work. You can use either of them.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/brubmtmvt2jvq1l9f1ep.png)

gap

This is the shorthand of 2 properties:

-   row-gap
-   column-gap

#### An example

```css
row-gap : 20px ; 
column-gap : 30px ;

/* The shorthand */
gap : 20px  30px;
```

## Credits

-   Unicorns
-   [Corgis](https://www.freepik.com/free-vector/cute-corgi-drink-milk-tea-boba-cartoon-vector-illustration-animal-drink-concept-isolated-vector-flat-cartoon-style_10336142.htm#position=13), [kat](https://www.freepik.com/free-psd/pet-food-banner-template_13762522.htm#position=1)

# Conclusion

Now, you can confidently make responsive website layouts using your grid knowledge!

Here's your medal for reading until the end ❤️

## Suggestions & Criticisms Are Highly Appreciated ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube / Joy Shaheb**

**LinkedIn [/ Joy Shaheb](https://www.linkedin.com/in/joyshaheb/)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**