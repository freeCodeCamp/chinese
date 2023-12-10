> -  原文地址：[Web Layouts – How to Use CSS Grid and Flex to Create a Responsive Web Page](https://www.freecodecamp.org/news/web-layouts-use-css-grid-and-flex-to-create-responsive-webpages/)
> -  原文作者：[Ophy Boamah](https://www.freecodecamp.org/news/author/ophelia/)
> -  译者：[huccct](https://github.com/huccct)
> -  校对者：

# 网页布局 - 如何利用 CSS 中的 Grid 和 Flex 创建响应式网页
![网页布局 - 如何利用 CSS 中的 Grid 和 Flex 创建响应式网页](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/WebLayouts-1.png)

你网页的布局对于你的网站就像建筑物的平面图一样重要。没有它们你只是在空中建造城堡。

当你有一个要建造或设计的网站或应用时，首先要做的是决定布局。这很重要，因为在这个布局中，你可以指定元素的排列方式，以便以预期的方式和层级对它们进行评估。

基本上，每个网页布局的目标是减少混乱，增强可用性，并最终为用户提供愉快的体验。布局的一些主要元素包括导航、菜单和内容。

在网页和前端开发中，在开始构建之前先确定一个布局可以帮助你决定使用哪个CSS布局模块：`Flexbox`还是`Grid`。

在本文中，我们将学习这些工具的具体含义，并通过构建一个简单而美观的落地页来了解它们的最佳使用方式。

## 我们将要构建的内容

![homepage-2](https://www.freecodecamp.org/news/content/images/2022/10/homepage-2.png)

落地页设计

请在Codepen上查看 [here](https://codepen.io/ophyboamah/pen/KKRLoJr).

## 项目的功能性

1.  网页布局: 创建一个美观的落地页
2.  移动设备响应式设计

## 前置准备

-   掌握基本的HTML和CSS的基本知识
-   一个像VS Code这样的集成开发环境（文本编辑器）
-   一个网络浏览器（Chrome、FireFox）

## 步骤

1.  为您的项目创建一个文件夹，并在集成开发环境中打开它。
2.  在您的项目文件夹中创建 index.html 和 style.css 文件。
3.  创建一个用于存储图像的 assets 文件夹。
4.  在 index.html 文件中，创建HTML的基本结构，并在 `<head>` 标签内链接您的 CSS 文件和字体 URL。

## 资源

1.  **字体:** [https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Poppins:wght@400;500;700&display=swap](https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&family=Poppins:wght@400;500;700&display=swap)
2.  **桌面图像:** [https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png](https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png)
3.  **移动设备图像:** [https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png](https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png)
4.  **客户 Logo (Databiz):** [https://i.postimg.cc/gJ9Y84m6/client-databiz.png](https://i.postimg.cc/gJ9Y84m6/client-databiz.png)
5.  **客户 Logo (Audiophile):** [https://i.postimg.cc/15DDqYSD/client-audiophile.png](https://i.postimg.cc/15DDqYSD/client-audiophile.png)
6.  **客户 Logo (Meet):** [https://i.postimg.cc/5ybQqfbv/client-meet.png](https://i.postimg.cc/5ybQqfbv/client-meet.png)
7.  **客户 Logo (Maker):** [https://i.postimg.cc/g2NsxByN/client-maker.png](https://i.postimg.cc/g2NsxByN/client-maker.png)

# 如何使用 Flexbox

通常情况下，HTML 元素根据其默认的显示样式进行对齐。 这意味着，在没有使用 CSS 进行外部样式设置的情况下，块级元素如 `p` 和 `div` 会在新行上开始。而行内元素如 `input` 和 `span` 则会在同一行上并排显示。

然而，Flexbox 的概念允许您轻松地将这些元素在水平或垂直方向上放置，通常称为一维布局。为了实现这一点，至少需要两个元素：**弹性容器**（flex container）和**弹性子元素**（flex item）。分别代表父元素和子元素。

在响应式设计中，Flexbox 的目的是允许容器及其子元素填充定义的空间或根据设备的尺寸进行收缩。

## 弹性盒子的方向和轴线

flex-direction 是 CSS Flexbox 的一个重要属性，因为它决定了弹性子元素的排列方向。它通过指定弹性容器的主轴来实现这一点。

有两个主要的轴线，叫`主轴`和`交叉轴`，主轴是指弹性子元素在弹性容器中排列的方向，而交叉轴始终是主轴的对立面轴线。

尝试使用数学中的 x 轴和 y 轴的概念来理解 Flexbox 可能会有一些问题。这主要是因为在 Flexbox 中，主轴可以是垂直或水平的，具体取决于 flex-direction 的值。

flex-direction 属性接受的值包括 row（默认值）、row-reverse、column 和 column-reverse。在本项目中，我们将关注 row 和 column。

![flexdirection](https://www.freecodecamp.org/news/content/images/2022/10/flexdirection.png)

flex-direction: row

当 flex-direction 属性的值为 row 时，主轴是水平的，交叉轴是垂直的，如上图所示。这意味着弹性子元素将水平排列。

由于 row 是默认值，如果将容器设置为 flex，但未指定 flex-direction，则弹性子元素将自动排列为一行。

![flexdirectioncolumn](https://www.freecodecamp.org/news/content/images/2022/10/flexdirectioncolumn.png)

flex-direction: column

当 flex-direction 属性的值为 column 时，主轴是垂直的，交叉轴是水平的，如上图所示。这意味着弹性项目将垂直排列。

## 如何构建导航栏

既然我们了解了 Flexbox 的工作原理，让我们开始构建我们的导航栏。首先，我们将提供其中的内容，即菜单项和Logo。我们将为它们提供描述性的类，以便在 CSS 文件中轻松引用它们。

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

下面的图片是上述代码的输出结果。因为 `<ul>` 和 `<li>` 都是块级元素，所以其中指定的每个项目都将显示在新的一行上。

![preflexx-1](https://www.freecodecamp.org/news/content/images/2022/10/preflexx-1.png)

导航栏内容输出

Flexbox 布局的显示属性是在父容器上声明的，并影响子元素。这意味着如果你有一个无序列表中的杂货清单，无法直接在这种情况下将 display: flex 应用于 `<li>`，因为它们是子元素。相反，要将它们显示为 flex 布局，你需要首先创建一个父容器，并将其应用于该容器。

在下面的 CSS 代码中，我们定义了项目的字体样式和大小，以及导航栏Logo的样式。我们还将导航栏元素及其内部的一些元素设置为 flex 布局。

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

导航栏初始化样式

下面的图片是上述代码的输出结果。元素已经以 flex 方式显示。然而，由于我们没有指定 flex-direction，它们会自动排列成一行。

但是，正如您在下面使用标尺（红线）看到的那样，flex 子元素的对齐并不如预期。让我们通过学习另一个重要的 flex 元素来修复这个问题。

![displayflex](https://www.freecodecamp.org/news/content/images/2022/10/displayflex.png)

没有对齐的 Flex 布局

### 如何使用 `align-items` 属性

这是一个控制 flex 子元素在交叉轴上排列的 Flexbox 属性。它接受的值有 flex-start、flex-end 和 center，具体取决于元素的对齐需求。下面的图片展示了每个值的工作方式。

![align-items-1](https://www.freecodecamp.org/news/content/images/2022/10/align-items-1.png)

Image credit: freeCodeCamp

从上面的图片可以看出，如果我们希望确保 `<nav>` 内的 flex 子元素正确对齐，我们必须在该元素上添加 align-items 属性，并将其值设为 center。因此，我们需要在我们的 flex 容器上添加一个 _align-items_ 属性，并将其值设为 _center_，如下所示的 CSS 代码：

```CSS
nav,
.cta-btns,
.menu-items {
  display: flex;
  align-items: center;
}
```

导航栏的对齐方式

如您可以在下面的图片中看到，flex 子元素现在已经按照预期对齐了

![aligncenter](https://www.freecodecamp.org/news/content/images/2022/10/aligncenter.png)

具有居中对齐的 Flex 布局

但是再次出现了一些问题。我们希望在导航栏上正确地将项目展开：将 Logo 放在极左边，登录和注册放在极右边，其余项目放在中间。

我们可以使用 `justify-content` 属性来实现这一点。让我们接下来学习一下它，然后再进行实现。

### 如何使用 `justify-content` 属性

这是一个控制 flex 子元素在主轴上排列的 Flexbox 属性。它还定义了浏览器如何在 flex 容器内在 flex 项目之间分配空间，以及在 flex 项目周围分配空间。

为了实现响应式布局，justify-content 属性有助于分配剩余的多余空间，即在 flex 子元素排列完成后剩下的空间。

![justifycontentstyles](https://www.freecodecamp.org/news/content/images/2022/10/justifycontentstyles.png)

justify-content 样式

从与 justify-content 属性的各个值相关联的样式中，我们可以看到底部两个值更接近我们想要实现的效果。

我们可以选择使用 space-around 或 space-between，并在两侧添加一些内边距来将子元素推离边缘。我们还可以将 list-style 属性的值设为 none，以去除列表项前面的点。

```CSS
li {
  list-style: none;
}

nav {
  justify-content: space-between;
}
```

导航栏的 justify-content

![justifycontent-2](https://www.freecodecamp.org/news/content/images/2022/10/justifycontent-2.png)

justify-content 导航栏输出效果

现在我们已经将子元素放置在所需的位置上，我们需要在它们之间创建一些小的间距。在这种情况下，我们将给每个列表项设置 margin-right: 1rem。我们还设置其他样式，例如字体大小、颜色以及为注册项设置边框。

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

完整的导航栏设计

![justifyandstyles-1](https://www.freecodecamp.org/news/content/images/2022/10/justifyandstyles-1.png)

带有样式的导航栏

在实现以上代码后，这是我们导航栏的最终外观。这也标志着我们 Flexbox 部分的结束。接下来，我们将使用 CSS Grid 构建我们网页的最后一部分。

# 如何使用 CSS Grid

CSS Grid 是一个改变生活的工具，用于创建网页布局。它可以帮助您创建简单和复杂的布局。主要区别在于 Flexbox 用于一维元素的排列，而 CSS Grid 则能够进行二维排列。

在 Flexbox 中学到的轴的概念在 CSS Grid 中仍然适用。您可以使用 CSS Grid 同时在主轴和交叉轴上排列元素。

总的来说，Flexbox 可以使您在水平方向（行）或垂直方向（列）上排列元素。而 CSS Grid 则可以同时在垂直和水平方向上对元素进行对齐。

CSS Grid 布局仅在父元素或容器上声明。实际上，它的所有子元素都成为网格项。一旦确定了目标容器，您可以为其添加 display: grid; 属性来声明它为网格容器。通过 `grid-template-rows` 和 `grid-template-columns` 属性，可以分别确定网格行和列的大小。

## 如何构建主页

就像我们在导航栏中所做的那样，让我们从在 HTML 文件中的 `<main>` 部分定义我们的内容开始。

根据我们的目标图像，我们有两个主要的部分：左侧部分将包含文本和标志，而右侧部分将有一个主要图片。这是我们项目的网页视图。

让我们先定义我们的内容。具有 class 为 "text-side" 的部分包含：标题、段落文本、按钮和标志。具有 class 为 "img-side" 的部分只包含一张图片。

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

主页部分的HTML代码

在主 main 部分中，我们创建了两个所需的部分，并为它们提供了描述性的 id：text-side 和 img-side。

在 text-side 内部，我们添加了一个标题、段落文本、按钮和一个用于显示客户标志的 div。而对于 img-side，我们只需要显示图像。

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

主页部分的CSS代码

在我们的 CSS 文件中，我们需要为客户Logo的 div 和其子元素设置样式。我们还为标题和段落设置了字体大小。接下来，我们将为按钮设置样式，并为图像分配一个宽度。

![pregrid1-2](https://www.freecodecamp.org/news/content/images/2022/10/pregrid1-2.png)

预设网格主页显示

上面的图片展示了在定义内容并仅对标题、按钮和标志进行样式设置后，我们的网页将呈现的样子。也就是说，我们还没有将容器声明为网格。由于我们这里几乎所有的元素都是块级元素，所以我们看到它们垂直堆叠在一起。

## 网格模板行和列

`grid-template-columns` 属性用于指定网格中列的数量和宽度，通过定义网格容器的列来指定轨道（track）的大小和线名（line names）。

`grid-template-rows` 属性与之相反。它用于指定网格中行的数量和高度，通过定义网格容器的行来指定轨道（track）的大小和线名（line names）。

正如您在下面的图片中所看到的，`grid-template-rows` 将元素从设备屏幕的顶部排列到底部。而 `grid-template-columns` 则将元素从设备屏幕的左侧排列到右侧。

![CSS-Grid](https://www.freecodecamp.org/news/content/images/2022/10/CSS-Grid.png)

对于我们的项目，我们将使用 `grid-template-columns`，因为我们希望将两个部分并排排列，让每个部分占据整体项目宽度的相等部分。我们通过将其作为属性分配给与之前指定为网格显示的容器相同的元素来实现这一点。

![displaygrid](https://www.freecodecamp.org/news/content/images/2022/10/displaygrid.png)

display: grid

现在，我们已经通过使用 grid-template-columns 将 `<main>` 标签内的两个部分等分布局好了，接下来还有两件事情要做。

我们需要通过将两个元素定位在页面中央，使它们水平对齐，图像左侧有多余的空白空间，左右两侧均匀分布。我们还需要通过将它们定位在页面中央，使它们垂直对齐，底部有多余的空白空间，上下均匀分布。

## 在CSS网格中对齐和调整

好消息是，为了在 CSS Grid 布局中实现我们期望的对齐方式，我们不需要学习任何新概念。因为幸运的是，正如我们之前学到的那样，`align-items` 和 `justify-content` 并不仅适用于 Flexbox。你也可以使用它们来在水平和垂直方向上定位元素。

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

对齐和居中的CSS代码

正如你在上面的代码中所看到的，我们只需要在父标签（网格容器）上将 align-items 和 justify-content 属性的值都设置为 center。

为了确保我们能看到完美居中的效果，我们还需要为该部分指定一个高度。下面的图片是我们项目的最终输出结果。

![homepage-4](https://www.freecodecamp.org/news/content/images/2022/10/homepage-4.png)

登陆页面最终样式

## 如何使其具有响应性

到目前为止，我们所构建的都是针对网页的。但考虑到希望在移动设备上访问登陆页面的用户，我们必须确保我们的项目在较小的屏幕上可访问。在我们的情况下，我们关注的屏幕尺寸是大于300像素但小于480像素的范围。

正如您在下面的代码中所看到的，我们正在隐藏我们的导航项，并显示一个具有 mobile-nav 类的表情符号。除此之外，我们隐藏了桌面版的页眉图像，并显示了移动版的页眉图像。

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

项目响应式的代码

## 完整的项目代码

这就是我们在这篇文章中一起构建的项目：

![homepage-3](https://www.freecodecamp.org/news/content/images/2022/10/homepage-3.png)

这是完整的HTML代码：

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

项目的HTML代码

这是完整的CSS代码：

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

项目的CSS代码：

## 总结

作为网页开发者，在编写代码之前，布局应该是你首先考虑的事情。幸运的是，CSS Grid 和 Flexbox 已经彻底改变了我们构建网站和 Web 应用布局的方式。

这使得这些概念成为必须掌握的内容，这样你就可以在网页上指定元素的排列方式。我们已经讨论了基础知识，这样你就可以轻松地增加知识，并创建出漂亮的网页和应用程序。

谢谢阅读👋🏾。希望你觉得这个有用。
