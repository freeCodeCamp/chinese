> -  原文地址：[Web Layouts – How to Use CSS Grid and Flex to Create a Responsive Web Page](https://www.freecodecamp.org/news/web-layouts-use-css-grid-and-flex-to-create-responsive-webpages/)
> -  原文作者：[Ophy Boamah](https://www.freecodecamp.org/news/author/ophelia/)
> -  译者：Celqaz
> -  校对者：

![Web Layouts – How to Use CSS Grid and Flex to Create a Responsive Web Page](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/WebLayouts-1.png)

页布局之于网站，就像平面图之于建筑。没有他们，你只是在建造空中楼阁。

当你要建造一个网站或应用时，首先要决定的就是网页布局。这一步的重要之处在于，正是在布局中，你明确了各个元素之间如何排列组合，并按照预定的方式和层级评估它们。

通常来说，网页布局的目标是减少混乱，提升可用性，并最终带来愉悦的用户体验。网页布局中的主要元素包括导航栏，菜单栏和内容。

在网页和前端开发中，在进行构建前先确定一个布局，可以帮助你决定使用哪一个 CSS 布局模块：Flexbox 或 Grid.

在本篇文章中，我们将通过建造一个简单但优雅的登陆页面，学习每一个工具以及它们的最佳实践。

## 我们将要建造什么

![homepage-2](https://www.freecodecamp.org/news/content/images/2022/10/homepage-2.png)

登陆页面设计

你可以在 [Codepen](https://codepen.io/ophyboamah/pen/KKRLoJr) 上查看这个项目

## 项目功能

1.  网页布局：创建一个优雅的登陆页面。
2.  手机端自适应。

## 前置技能

-   HTML 和 CSS 的基础知识 。
-   一个 IDE（文本编辑器），例如 VS Code。
-   一个网页浏览器。

## 项目配置

1.  创建一个项目文件夹，并在 IDE 中打开。
2.  在项目文件夹内，创建一个 index.html 和 style.css 文件。
3.  创建一个名为 asset 的文件夹以存放图片。
4.  在 index.html 文件中，创建 HTML 文件样板，并在 `<head>` 标签内链接 CSS 文件和字体地址。

## Resources

1.  **字体:** [https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Poppins:wght@400;500;700&display=swap](https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Poppins:wght@400;500;700&display=swap)
2.  **电脑端图片:** [https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png](https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png)
3.  **手机端图片:** [https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png](https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png)
4.  **客户 logo (Databiz):** [https://i.postimg.cc/gJ9Y84m6/client-databiz.png](https://i.postimg.cc/gJ9Y84m6/client-databiz.png)
5.  **客户 logo (Audiophile):** [https://i.postimg.cc/15DDqYSD/client-audiophile.png](https://i.postimg.cc/15DDqYSD/client-audiophile.png)
6.  **客户 logo (Meet):** [https://i.postimg.cc/5ybQqfbv/client-meet.png](https://i.postimg.cc/5ybQqfbv/client-meet.png)
7.  **客户 logo (Maker):** [https://i.postimg.cc/g2NsxByN/client-maker.png](https://i.postimg.cc/g2NsxByN/client-maker.png)

# 如何使用 Flexbox

通常， HTML 元素按照他们默认的展示样式对齐。这意味着，在没有外部 CSS 样式的情况下，像 `p` 和 `div` 作为块级元素将会在新的一行中显示。而像 `input` 和 `span` 这样的行内元素，将在同一行中相邻排列。

但是， Flexbox 让我们可以轻松地在水平维度或垂直维度上排列这些元素。为了实现这一点，我们需要至少两个元素： flex 容器 和 flex 元素，他们分别指代父元素和子元素。

在自适应设计中，Flexbox 的目的在于允许容器及和它的子元素根据设备的尺寸填充或收缩。

## Flex-direction 和 Axes

Flex-direction 是 CSS Flexbox 中的一个重要属性，因为它通过指定弹性容器的主轴的方向，决定弹性元素的排列方向。

**主轴**和**交叉轴**是两个主要的轴。主轴是你在弹性容器中，为弹性元素定义的排列方向，而交叉轴总是垂直于主轴。

试图用数学中 x 轴和 y 轴的概念来理解这一点并不恰当。因为在 Flexbox 中，主轴既可以是竖直的，也可以是水平的，它的方向总是取决于 flex-direction 的值。

Flex-direction 属性接受的指包括 row ， row-reverse ， column 和 column-reverse 。在这个项目中，我们主要探索 row 和 column 。

![flexdirection](https://www.freecodecamp.org/news/content/images/2022/10/flexdirection.png)

flex-direction: row

当 flex-direction 属性的值为 row 时，正如上图所示，主轴是水平的，交叉轴为竖直的，即，弹性元素将会水平排列。

由于 row 是默认值，所以如果你将一个容器的展示方式定义为 flex ，但又没有特别指定 flex-direction ，那么弹性元素将自动在一行中排列。

![flexdirectioncolumn](https://www.freecodecamp.org/news/content/images/2022/10/flexdirectioncolumn.png)

flex-direction: column

当 flex-direction 属性的值为 column 时，正如上图所示，主轴是竖直的，交叉轴为水平的，即，弹性元素将会垂直排列。

## 如何创建一个导航栏

即然我们已经了解了 Flexbox 的运作机制，那让我们创建一个导航栏吧。我们将先完成其中的内容，即，菜单元素和 logo 。我们将会给予它们描述性的类名，以便在 CSS 文件中引用。

```HTML
<nav>
      <h2 class="logo">snap</h2>
      <ul class="menu-items">
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <ul class="cta-btns">
        <li>Login</li>
        <li>Register</li>
      </ul>
</nav>
```

下图即我们以上代码的输出效果。因为 `ul` 和 `li` 是块级元素，我们在其中指定的每一个元素都会在新行中显示。

![preflexx-1](https://www.freecodecamp.org/news/content/images/2022/10/preflexx-1.png)

导航栏内容输出效果

Flexbox 的布局样式将在父元素中声明，并影响其中的子元素。也就是说，如果你有一个包含诸多杂货的无序列表， flex 不应在子元素 `<li>` 中声明。为了将该列表以 flex 进行展示，你应该首先创建一个父级容器，并将布局样式应用于该父级容器。

在下方的 CSS 代码中，我们定义了项目的字体样式和大小，以及导航栏 logo。我们还将 nav 元素及其中的字元素的展示方式定义为 flex 。

```CSS
* {
  font-family: "Epilogue", sans-serif;
  font-size: 0.85rem;
}

.logo {
  font-size: 1.3rem;
}

nav,
.cta-btns,
.menu-items {
  display: flex;
}
```

导航栏初始样式

下图是以上代码的输出效果。元素都以按照 flex 排列。虽然我们没有特别指定 flex-direction ，但它们自动在同一行中排列。

然而，正如你可以在下图中借助标尺（红线）所能观察到的，弹性元素并没有按预期的方式对齐。让我们通过学习另一个重要的 flex 元素来解决这个问题。元素

![displayflex](https://www.freecodecamp.org/news/content/images/2022/10/displayflex.png)

尚未对齐的 Flex 布局

### 如何使用 `align-items` 属性

这个 Flexbox 属性决定 flex 元素如何在交叉轴上排列。根据元素的对齐需求，它的值包括：flex-start, flex-end 和 center。下图展示了它们分别如何运作。

![align-items-1](https://www.freecodecamp.org/news/content/images/2022/10/align-items-1.png)

图片来源: freeCodeCamp

从上图中我们可以发现，如果要让 <nav> 中的 flex 元素正确地对齐，我们需要将 align-items 的属性设置为 center。因此，我们需要将值为 center 的 align-items 属性添加到我们的 flex 容器中，CSS 代码如下：

```CSS
nav,
.cta-btns,
.menu-items {
  display: flex;
  align-items: center;
}
```

为导航栏设置 align-items 属性

正如你在下图中所注意到的，flex 元素都已按照恰当的方式对齐。

![aligncenter](https://www.freecodecamp.org/news/content/images/2022/10/aligncenter.png)

垂直居中对齐的 Flex

但还有些什么不太对。我们希望导航栏中的元素可以正确地分布：logo 在最左侧，登陆和注册在最右侧，其余的内容置于中间。

我们可以通过 `justify-content` 属性实现这一点。让我们马上学习并在随后使用它。

### 如何使用 `justify-content` 属性

此项 Flexbox 属性决定 flex 元素如何在主轴上排列。它同时还决定浏览器如何为 flex 容器内的 flex 元素分配其周围的空间。

为实现自适应，它帮助分配 flex 元素完成排列后的多余空间。

![justifycontentstyles](https://www.freecodecamp.org/news/content/images/2022/10/justifycontentstyles.png)

justify-content 样式

在多个 justify-content 属性值对应的样式中，我们发现最后两个更像我们希望实现的样式。

我们可以在 space-around 和 space-between 中任选其一，以在两侧增加一些边距并将元素推向靠近边缘的位置。我们同时将 list-syle 的值设置为 none，以去掉列表元素前的实心圆点。

```CSS
li {
  list-style: none;
}

nav {
  justify-content: space-between;
}
```

为导航栏设置 justify-content 属性

![justifycontent-2](https://www.freecodecamp.org/news/content/images/2022/10/justifycontent-2.png)

设置 justify-content 属性后的导航栏

既然我们已经将元素放置在期望的位置上，我们还需要在它们中间增加一些空间。在这种情况下，我们将列表中的每个元素的 margin-right 设置为 1rem。我们还会设置例如字体大小、颜色，并为元素 register 设置边框。

```CSS
nav {
  margin: 0 1.5rem 1.5rem 1.5rem;
  justify-content: space-between;
}

.logos-section {
  display: flex;
}

.menu-items li,
.cta-btns li {
  font-size: 0.7rem;
  margin-right: 1rem;
  color: hsl(0, 0%, 41%);
}

.cta-btns li:nth-last-child(1) {
  border: 1px solid gray;
  padding: 0.2rem 0.7rem;
  border-radius: 0.3rem;
}
```

导航栏的完整设计

![justifyandstyles-1](https://www.freecodecamp.org/news/content/images/2022/10/justifyandstyles-1.png)

应用样式后的导航栏

在应用上述代码后，这是我们导航栏的最终样式。这也标志着我们 Flexbox 部分的结束。接下来，我们将利用 CSS Grid 打造登陆页面的最后部分。

# How to Use CSS Grid

CSS Grid is a life-changing tool for creating web layouts. It helps you make both simple and complex layouts. The main difference is that while Flexbox helps with one dimensional arrangement of elements, CSS grid is able to do two dimensional arrangements.

The concept of axes we learnt about under Flexbox still applies here. You can use CSS Grid to arrange elements on the main axis and cross axis at the same time.

In summary, Flexbox, allows you to either arrange elements horizontally (in a row) or vertically (in a column). But with CSS Grid you can align elements both vertically and horizontally.

The CSS Grid layout is declared only on parent elements or containers. In effect, all its children become grid items. Once you have the target container, you give it an attribute of display and value of grid. The size of a grid’s row and column can be determined with `grid-template-rows` and `grid-template-columns`, respectively.

## How to Build the Homepage

Just like we did with the navbar, let's start by defining our content within a `<main>` section in our HTML file.

Looking at our target image, we have two main sections: the left section will have text and logos whilst the right section has a hero image. That’s for the web view of our project.

Let's start by defining our content. The section with class text-side contains: heading, paragraph text, button and logo. The section with class img-side only contains an image.

```HTML
<main>
      <section id="text-side">
        <h1>Make <br />remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div class="clients-logos">
          <img src="./assets/images/client-databiz.svg" />
          <img src="./assets/images/client-audiophile.svg" />
          <img src="./assets/images/client-meet.svg" />
          <img src="./assets/images/client-maker.svg" />
        </div>
      </section>
      <section class="img-side">
        <img src="./assets/images/image-hero-desktop.png" />
      </section>
    </main>
```

Homepage content HTML code

Within the main section, we created the two sections we needed and gave them descriptive id's: text-side and img-side.

Within the text-side, we added a heading, paragraph text, button and a div to display clients' logos. The only thing we need for the img-side is the display image.

```CSS
/* Client Logos */
.clients-logos img {
  width: 5rem;
  margin-right: 1rem;
}

.clients-logos {
  margin-top: 4rem;
}

.clients-logos img:nth-child(2) {
  width: 3rem;
}

/* Main */
main h1 {
  font-size: 3rem;
}

main p {
  font-size: 0.7rem;
  width: 18rem;
  color: hsl(0, 0%, 41%);
  line-height: 0.9rem;
}

main button {
  background-color: hsl(0, 0%, 8%);
  color: #fff;
  border: none;
  font-size: 0.7rem;
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
}

#text-side {
  margin-top: 3rem;
}
/* Hero Image */
.img-side img {
  width: 20rem;
}
```

Homepage content CSS code

Within our CSS file, we need to style the client logos div as well as the child elements. We also set a font-size for the heading and paragraph. Next, we style our button and assign a width to our image.

![pregrid1-2](https://www.freecodecamp.org/news/content/images/2022/10/pregrid1-2.png)

pre-grid homepage display

The image above shows how our web page will look after defining the content and styling just the heading, button and logos – that is, we haven't declared our container as a grid yet. Because almost all the elements we have here are block elements, we see them align on top of one another.

## Grid Template Rows and Columns

The `grid-template-columns` property specifies the number and widths of columns in a grid, defining a grid container's column by specifying the size of its tracks and line names.

The `grid-template-rows` property is the direct opposite. It specifies the number and heights of rows in a grid, also defining a grid container's row by specifying the size of its tracks and line names.

As you can see in the image below, `grid-template-rows` arranges elements from the top to bottom of the device screen. `grid-template-columns` arranges elements from the left to right side of the device screen.

![CSS-Grid](https://www.freecodecamp.org/news/content/images/2022/10/CSS-Grid.png)

For our project, we're going to make use of `grid-template-columns` since we want to arrange our two sections side by side, letting each section occupy an equal part of the overall project width. We do this by assigning it as an attribute on the same container that we specified a display of grid on.

![displaygrid](https://www.freecodecamp.org/news/content/images/2022/10/displaygrid.png)

display: grid

Now that the two sections inside our `<main>` tag have been placed equally using the grid-template-columns, we have two last things to do.

We need to align them horizontally, by positioning both elements in the center of the page, with the extra space on the left of the image, evenly distributed on both sides. We also need to align them vertically by positioning both of them in the center of the page, with the extra space on the bottom, evenly distributed above and beneath.

## Align and Justify in CSS Grid

Good news – we don't have to learn any new concepts to achieve our desired alignments in CSS Grid Layouts. Because fortunately, `align-items` and `justify-content`, as we learnt earlier, are not exclusive to Flebox. You can also use them to position items both horizontally and vertically.

```CSS
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70vh;
  align-items: center;
  justify-content: center;
  margin-left: 8rem;
}
```

align and center CSS code

As you can see in the code above, we only had to give the value of center to both align-items and justify-content attributes on the parent tag (grid container).

To ensure that we see the effect of position in the perfect center, we also had to specify a height for the section. The image below is the final output of our project.

![homepage-4](https://www.freecodecamp.org/news/content/images/2022/10/homepage-4.png)

Landing page final look

## How to Make it Responsive

So far, everything we've built is for the web. But for the sake of users who want to access the landing page on mobile, we have to make our project accessible on smaller screens. In our case, we're looking at screens that are greater than 300px but less than 480px.

As you can see in the code below, we're hiding our nav items and displaying an emoji with class of mobile-nav. Beside that, we're hiding the desktop header image and showing the mobile header image.

```CSS
/* Responsive */
@media (min-width: 300px) and (max-width: 480px) {
  * {
    font-size: 1rem;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  nav {
    margin: 0 1.5rem 0 1.5rem;
  }

  nav ul {
    display: none;
  }
  
  .mobile-nav {
    display: block;
    margin-right: 2rem;
  }

  main {
    display: grid;
    grid-template-columns: 100%;
    margin: 0 auto;
  }

  /* Clients logos */
  .clients-logos {
    margin-top: 2rem;
  }
  
  .desktop-logos {
    display: none;
  }
  
  .mobile-logos {
    display: block;
  }

  /* Images */
  .desktop-img {
    display: none;
  }
  .mobile-img {
    display: block;
    margin-top: 3rem;
  }

  .cta-btns,
  .menu-items {
    display: none;
  }

  main h1 {
    font-size: 2.5rem;
  }

  /* Client Logos */
  .clients-logos img {
    width: 4.5rem;
    margin-right: 0.8rem;
  }

  .attribution {
    width: 13rem;
    margin: 8rem auto 0 auto;
    text-align: center;
  }
}
```

Project Responsiveness Code

## Full Project Code

This is the project we’ve built together in this article:

![homepage-3](https://www.freecodecamp.org/news/content/images/2022/10/homepage-3.png)

Here's the full HTML code:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />

    <title>Web Layout | Landing Page</title>

    <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  </head>
  <body>
    <nav>
      <div class="logos-section">
        <h2 class="logo">snap</h2>
        <ul class="menu-items">
          <li>
            Features<svg
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li>
            Company<svg
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#686868"
                stroke-width="1.5"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <ul class="cta-btns">
        <li>Login</li>
        <li>Register</li>
      </ul>
      <p class="mobile-nav">🌚</p>
    </nav>
    <main>
      <section id="text-side">
        <h1>Make <br />remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div class="clients-logos">
          <img src="https://i.postimg.cc/gJ9Y84m6/client-databiz.png" />
          <img src="https://i.postimg.cc/15DDqYSD/client-audiophile.png" />
          <img src="https://i.postimg.cc/5ybQqfbv/client-meet.png" />
          <img src="https://i.postimg.cc/g2NsxByN/client-maker.png" />
        </div>
      </section>
      <section id="img-side">
        <img
          class="desktop-img"
          src="https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png"
        />
        <img
          class="mobile-img"
          src="https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png"
        />
      </section>
    </main>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://codehemaa.com">Ophy Boamah</a>.
    </div>
  </body>
</html>
```

Project HTML code

Here's the full CSS code:

```CSS
* {
  font-family: "Epilogue", sans-serif;
  font-size: 1.3rem;
}

.logo {
  font-size: 1.3rem;
}

li {
  list-style: none;
}

nav,
.cta-btns,
.menu-items {
  display: flex;
  align-items: center;
}

nav {
  margin: 0 1.5rem 1.5rem 1.5rem;
  justify-content: space-between;
}

.mobile-nav {
    display: none;
}

.logos-section {
  display: flex;
}

.menu-items li,
.cta-btns li {
  font-size: 0.7rem;
  margin-right: 1rem;
  color: hsl(0, 0%, 41%);
}

.cta-btns li:nth-last-child(1) {
  border: 1px solid gray;
  padding: 0.2rem 0.7rem;
  border-radius: 0.3rem;
}

/* Client Logos */
  
.clients-logos img {
  width: 8rem;
  margin-right: -3rem;
}

.clients-logos {
  margin-top: 1rem;
  margin-left: -2rem;
  display: flex;
  width: 10rem;
}

.clients-logos img:nth-child(2) {
  width: 7rem;
}

/* Main */
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70vh;
  align-items: center;
  justify-content: center;
  margin-left: 8rem;
}
/* Images */
.desktop-img {
  display: block;
}
.mobile-img {
  display: none;
}

main h1 {
  font-size: 3rem;
}

main p {
  font-size: 0.7rem;
  width: 18rem;
  color: hsl(0, 0%, 41%);
  line-height: 0.9rem;
}

main button {
  background-color: hsl(0, 0%, 8%);
  color: #fff;
  border: none;
  font-size: 0.7rem;
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
}

#text-side {
  margin-top: 3rem;
}
/* Hero Image */
#img-side img {
  width: 20rem;
}

.attribution {
  font-size: 0.7rem;
  text-align: center;
  margin-top: 5.5rem;
}

.attribution a {
  color: hsl(228, 45%, 44%);
  font-size: 0.7rem;
}

/* Responsive */
@media (min-width: 300px) and (max-width: 480px) {
  * {
    font-size: 1rem;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  nav {
    margin: 0 1.5rem 0 1.5rem;
  }

  nav ul {
    display: none;
  }
  
  .mobile-nav {
    display: block;
    margin-right: 2rem;
  }

  main {
    display: grid;
    grid-template-columns: 100%;
    margin: -3rem auto 0 auto;
  }

  /* Clients logos */
  .clients-logos {
    margin-top: 2rem;
  }
  
  .clients-logos img {
  width: 30rem;
}

.clients-logos {
  margin-top: 1rem;
  display: flex;
}

.clients-logos img:nth-child(2) {
  width: 7rem;
}

  /* Images */
  .desktop-img {
    display: none;
  }
  .mobile-img {
    display: block;
    margin-top: 3rem;
  }

  .cta-btns,
  .menu-items {
    display: none;
  }

  main h1 {
    font-size: 2.5rem;
  }

  /* Client Logos */
  .clients-logos img {
    width: 4.5rem;
    margin-right: 0.8rem;
  }

  .attribution {
    width: 13rem;
    margin: 10rem auto 0 auto;
    text-align: center;
  }
}
```

Project CSS code

## Conclusion

As a web developer, layouts should be the first thing you consider before writing code. Thankfully, CSS Grid and Flexbox have revolutionized the way we structure and build website and web app layouts.

This makes these concepts a must know so you can specify the arrangement of elements on the web. We've discussed the fundamentals, so that you can easily build up on the knowledge and create beautiful web pages and apps.

Thanks for reading 👋🏾. I hope you found this helpful.
