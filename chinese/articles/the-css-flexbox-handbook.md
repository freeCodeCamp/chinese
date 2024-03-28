---
title: The CSS Flexbox Handbook – Complete Guide with Practical Examples
author: Benjamin Semah
authorURL: https://www.freecodecamp.org/news/author/benjamin-semah/
originalURL: https://www.freecodecamp.org/news/the-css-flexbox-handbook/
translator: "胡琦"
reviewer: ""
---

October 18, 2023 / [#Flexbox][1]

<!-- more -->

# CSS Flexbox 手册--附带实用示例的完整指南

![Benjamin Semah](https://www.freecodecamp.org/news/content/images/size/w60/2022/09/Benjamin-Semah.jpg)

[Benjamin Semah][2]

  ![The CSS Flexbox Handbook – Complete Guide with Practical Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2023/10/The-CSS-Flexbox-Handbook-Cover.png)

Flexbox 是一个有用的工具，用于为网页创建美观且响应式的布局。在本指南中，你将学习像专业人士一样开始使用 CSS Flexbox 所需的一切知识。我们还将学习大量练习示例。

如果你是初学者 web 开发人员，本指南对你来说是一份完美的资源。如果你是经验丰富的开发人员，想要提高响应式网页设计技能，它也会很有用。

## 目录

-   [什么是 Flexbox?][3]  
-   [使用 Flexbox 有什么好处?][4]
-   [主轴和交叉轴][5]
-   [Flex 容器和 Flex 项][6]
-   [了解 `Flex` 和 `Inline-flex`][7]  
-   [display: flex][8]
-   [display: inline-flex][9]
-   [Flex 容器属性][10]
-   [`flex-direction` 属性][11]
-   [`flex-wrap` 属性][12]
-   [`flex-flow` 缩写属性][13]
-   [`justify-content` 属性][14]
-   [T`align-items` 属性][15]
-   [`align-content` 属性][16]
-   [`place-content` 属性][17]
-   [Flex 项属性][18]
-   [`order` 属性][19]
-   [`align-self` 属性][20]
-   [`flex-grow` 属性][21]
-   [`flex-shrink` 属性][22]
-   [`flex-basis` 属性][23]
-   [`flex` 缩写属性][24]
-   [Flexbox 间隙][25]
-   [如何使用 Flexbox 将元素居中][26]
-   [通过 Flexbox 游戏练习][27]
-   [CSS Flexbox 中有 Bug 吗?][28]
-   [尾声][29]

<h2 id="what-is-flexbox">什么是 Flexbox?</h2>

Flexbox 是“Flexible Box Layout”的缩写。它是一个 CSS 布局模型，可以简化复杂布局的创建。它提供了一种灵活的方式来对齐元素并在容器元素内分配空间。

Flexbox 布局模型是双向的。这意味着你可以按行、列或两者排列元素。稍后会详细介绍。

<h3 id="what-are-the-benefits-of-using-flexbox">使用 Flexbox 有什么好处?</h3>

在 Flexbox 出现之前，创建复杂的布局和响应式网页非常艰难。你需要 CSS 浮动和位置属性的组合。这需要许多变通方法和技巧。

但使用 Flexbox，你现在可以更轻松、更少的代码行数来实现以下操作:

-   使用`justify-content` 和 `align-items` 等属性对齐和居中元素。
-   无需编写大量媒体查询即可开发响应式布局。
-   在不改变 HTML 结构的情况下重新排序元素。
-   创建相同高度的列，无需任何额外的 HTML 元素或背景图片。

现在，你了解了 Flexbox 是什么，以及可以使用它做的一些事情。让我们看看你如何使用它。

<h3 id="the-main-axis-and-the-cross-axis">主轴和交叉轴</h3>

关于 Flexbox，你首先需要了解的是轴的概念。每个 Flex 容器（ `display` 属性设置为 `flex` 或 `inline-flex` 的元素）都有一个主轴和一个交叉轴。

主轴是水平的还是垂直的，具体取决于 `flex-direction` 的值。如果你不熟悉 `flex-direction` , 不用担心。你即将学会它。

![The main axis and the cross axis when the `flex-direction`](https://www.freecodecamp.org/news/content/images/2023/08/44.-main---cross-axis.png)

_`flex-direction` 为 `row` 时的交叉轴和主轴_

在这个示例中，主轴是水平的，交叉轴是垂直的。

以下是主轴垂直且交叉轴水平的示例。

![45.-cross---main-axis](https://www.freecodecamp.org/news/content/images/2023/08/45.-cross---main-axis.png)

_`flex-direction` 为 `column` 时的主轴和交叉轴_

<h2 id="flex-containers-and-flex-items">Flex 容器和 Flex 项</h2>

要使用 Flexbox 的所有属性，你需要将元素的 `display` 属性设置为 `flex` 或 `inline-flex` 。

这会将元素变成弹性容器，并且该元素的子元素变成弹性项。

举个例子:

```HTML
<section class="container">  
	<div>Flex Item 1</div>  
    <div>Flex Item 2</div>  
    <div>    
    	<p>This paragraph is not a flex item</p>  
    </div>
</section>
```

```CSS
.container {  
  display: flex;
}
```

`.container` 元素现在是一个 Flex 容器。这三个 `div` 元素是 `.container` 元素的直接子元素，这使得它们成为 Flex 项。

但第三个 div 内的段落元素不是 Flex 项。这是因为它不是 `.container` 元素的直接子元素。

<h2 id="understanding-flex-and-inline-flex">了解 <code>Flex</code> 和 <code>Inline-flex</code></h2>

你可以使用 `flex` 和 `inline-flex` 使元素成为 Flex 容器。不同之处在于它们与周围元素的交互方式。

<h3 id="display-flex"><code>display: flex</code></h3>

这使得 Flex 容器的行为类似块级元素。Flex 容器占据其父元素的整个可用宽度。它会在新的一行开始，并且其后的元素也会在新的一行开始。

例如:

```HTML
<button>Button One</button>

/* Flex Container */
<section class="container">  
	<div id="red"></div>  
	<div id="gold"></div>  
	<div id="green"></div>
</section>

<button>Button Two</button>
```

```CSS
.container {
	display: flex;
}
```

![46.-display-flex](https://www.freecodecamp.org/news/content/images/2023/08/46.-display-flex.png)

_当你使用 `display: flex` 时，Flex 容器的行为类似于块元素`_ 

`.container` 元素占据了主体（其父元素）的整个可用宽度。

<h3 id="display-inline-flex"><code>display: inline-flex</code></h3>

这使得 Flex 容器的行为就像一个内联元素。这允许其他内联元素（如按钮）与其并排。使用前面的示例，这就是当你将 `display` 从 `flex` 更改为 `inline-flex` 时元素的排列方式。

![47.-display-inline-flex](https://www.freecodecamp.org/news/content/images/2023/08/47.-display-inline-flex.png)

_当你使用 `display-flex` 时，Flex 容器的行为类似于 `inline-elements`_

Flex 容器不占据其父容器的整个宽度。它仅使用其内容所需的水平空间。

**在 StackBlitz 上** [**练习使用 flex 和 inline-flex**][30]

<h2 id="the-flex-container-properties">Flex 容器属性</h2>

Flex 容器属性允许你控制 Flex 容器内 Flex 项的布局和对齐方式。

**注意:** 你可以将这些属性应用于 Flex 容器，而不是 Flex 项。

以下是 Flex 容器属性:

-   `flex-direction`
-   `flex-wrap`
-   `flex-flow`
-   `justify-content`
-   `align-items`
-   `align-content`
-   `place-content`

<h3 id="the-flex-direction-property"><code>flex-direction</code> 属性</h3>

`flex-direction` 属性定义了 Flex 项的显示方向。它设置了 Flex 容器的主轴。该属性可以采用以下四个值中的任意一个：

-   `row` (默认值)
-   `column`
-   `row-reverse`
-   `column-reverse`

现在，让我们看一些示例，看看它是如何工作的。

在下面的代码片段中，我们有一个名为 `names-container` 的容器，其中包含四个名字：

```HTML
<div class="names-container">  
	<p id="jill">1. JILL</p>  
	<p id="john">2. JOHN</p>  
	<p id="jane">3. JANE</p>  
	<p id="jack">4. JACK</p>
</div>
```

让我们看看使用 `flex-direction` 属性来排列这些名字的不同方式。

#### `flex-direction: row`

这会从左到右水平显示 Flex 项。

```CSS
.names-container {  
	display: flex;  
    flex-direction: row;  
    /* Other styles here... */
}
```

![1.-flex-direction-row](https://www.freecodecamp.org/news/content/images/2023/08/1.-flex-direction-row.png)

_示例：`flex-direction: row`_

#### `flex-direction: column`

这会从上到下垂直显示 Flex 项。

![2.-flex-direction-column](https://www.freecodecamp.org/news/content/images/2023/08/2.-flex-direction-column.png)

_示例：`flex-direction: column`_

#### `flex-direction: row-reverse`

这与 row 值相反。它从右到左显示 Flex 项。

![3.-flex-direction-row-reverse](https://www.freecodecamp.org/news/content/images/2023/08/3.-flex-direction-row-reverse.png)

_示例：`flex-direction: row-reverse`_

#### `flex-direction: column-reverse`

这与 column 值相反。它从下到上显示 Flex 项。

![4.-flex-direction-column-reverse](https://www.freecodecamp.org/news/content/images/2023/08/4.-flex-direction-column-reverse.png)

_示例：`flex-direction: column-reverse`_

**在 StackBlitz 上** [**练习使用 flex-direction**][31]

#### 关于反向值和无障碍的注意事项

当你使用 `row-reverse` 和 `column-reverse` 时，有些事情你需要记住。正如你已经看到的，这两个值会影响屏幕上元素的视觉顺序。

但是 HTML 中的顺序保持不变。这就是屏幕阅读器和键盘导航控件使用的顺序。

在示例中，当你使用 `row-reverse` 时，你首先在屏幕上看到 Jack 的名字，然后是 Jane、John 和 Jill。

但是对于使用屏幕阅读器的人来说，他们将会按照 HTML 中的出现顺序而不是屏幕上的顺序来听到这些名字。在这种情况下，他们将首先听到 Jill 的名字，然后是 John、Jane 和 Jack。

<h3 id="the-flex-wrap-property"><code>flex-wrap</code> 属性</h3>

有时，Flex 容器内的空间不足以容纳 Flex 项。

在这种情况下，你可以使用 `flex-wrap` 属性来选择是让 Flex 项溢出还是另起一行。

`flex-wrap` 属性接受以下任何值：

-   `nowrap` (默认值)
-   `wrap`
-   `wrap-reverse`

要看到 `flex-wrap` 的效果，让我们向 `names-container` 添加超过四个的名字：

```HTML
<div class="names-container">  
	<p id="jill">1. JILL</p>  
	<p id="john">2. JOHN</p>  
	<p id="jane">3. JANE</p>  
	<p id="jack">4. JACK</p>  
	<p id="sara">5. SARA</p>  
	<p id="seth">6. SETH</p>  
	<p id="seal">7. SEAL</p>
</div>
```

#### `flex-wrap: nowrap`

这会使所有的 Flex 项都保持在单行中，无论是在行还是列中。如果在 Flex 容器中没有足够的空间，它允许 Flex 项溢出。请看下面的示例：

```CSS
.names-container {  
	display: flex;  
	flex-direction: row;  
	flex-wrap: nowrap;  
	/* Other styles here... */
}
```

![5.-flex-wrap-nowrap](https://www.freecodecamp.org/news/content/images/2023/08/5.-flex-wrap-nowrap.png)

_因为 `flex-wrap` 被设置为 `nowrap`，所以 Flex 项溢出_

在这个例子中，由于空间不足，三个名字溢出容器。

#### `flex-wrap: wrap`

当空间不足时，这会将 Flex 项换行或推到下一行。

![6.-flex-wrap-wrap](https://www.freecodecamp.org/news/content/images/2023/08/6.-flex-wrap-wrap.png)

_当 `flex-wrap` 设置为 `wrap` 时，Flex 项会换行或移动到下一行_

#### `flex-wrap: wrap-reverse`

这与 `wrap` 相反。它将溢出的项目移动到下一行，但方向相反。

例如，在名字容器上使用 `wrap-reverse` 将溢出项移动到下一个顶行，而不是下面的下一行。

![7.-flex-wrap-wrap-reverse](https://www.freecodecamp.org/news/content/images/2023/08/7.-flex-wrap-wrap-reverse.png)

_示例： `flex-wrap: wrap-reverse`_

**在 StackBlitz 上** [**练习使用 flex-wrap**][32]

<h3 id="the-flex-flow-shorthand-property"><code>flex-flow</code> 缩写属性</h3>

`flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 属性的缩写。这意味着当你使用 `flex-flow` 时，只需一行码即可应用这两个属性。

请参阅下面使用名字容器的示例。你可以为容器指定 `flex-direction` 和 `flex-wrap` 属性。

```CSS
.names-container {  
	display: flex;  
	flex-direction: column;  
    flex-wrap: wrap;
}
```

或者你可以使用 `flex-flow` 缩写来获得相同的结果。

```CSS
.names-container {  
	display: flex;  
	flex-flow: column wrap;
}
```

![8.-flex-flow](https://www.freecodecamp.org/news/content/images/2023/08/8.-flex-flow.png)

_示例： `flex-flow: column wrap`_

**在 StackBlitz 上** [**练习使用 flex-flow**][33]

<h3 id="the-justify-content-property"><code>justify-content</code> 属性</h3>

`justify-content` 属性处理 Flex 容器主轴上 Flex 项的对齐方式。

你可以使用它来处理主轴上空间的分配方式。该属性可以取以下任何值：

-   `flex-start` (默认值)
-   `flex-end`
-   `center`
-   `space-between`
-   `space-around`
-   `space-evenly`

#### `justify-content: flex-start`

这将把 Flex 项放置在 `flex-direction` 的起始位置。如果主轴是水平的，`flex-direction` 是 `row`（就像下面的示例），它会将 Flex 对齐到左侧。如果主轴是垂直的（`flex-direction` 是 `column`），它会将 Flex 项对齐到顶部。

使用名字容器示例，`justify-content: flex-start` 的效果如下：

```CSS
.names-container {  
	display: flex;  
	justify-content: flex-start;  
	/* Other styles here... */
}
```

![9.-justify-content-flex-start](https://www.freecodecamp.org/news/content/images/2023/08/9.-justify-content-flex-start.png)

_示例：`justify-content: flex-start`_ 

#### `justify-content: flex-end`

This will place the flex items at the end of the flex-direction of the main axis.
这会将 Flex 项放置在主轴的 flex-direction 的末尾。

![10.-justify-content-flex-end](https://www.freecodecamp.org/news/content/images/2023/08/10.-justify-content-flex-end.png)

_示例：`justify-content: flex-end`_

#### `justify-content: center`

这会将 Flex 项目放置在 Flex 容器主轴的中心。

![11.-justify-content-center-](https://www.freecodecamp.org/news/content/images/2023/08/11.-justify-content-center-.png)

_示例：`justify-content: center`_

#### `justify-content: space-between`

这会将第一个 Flex 项放置在主轴的起始位置，并将最后一个项放置在主轴的末尾。然后，主轴上的空间会均匀分配给这些元素。

![12.-justify-content-space-between](https://www.freecodecamp.org/news/content/images/2023/08/12.-justify-content-space-between.png)

_示例：`justify-content: space-between`_

#### `justify-content: space-evenly`

这会在 Flex 项之间均匀分配空间。这意味着每个项前后的空间都相同。

![13.-justify-content-space-evenly](https://www.freecodecamp.org/news/content/images/2023/08/13.-justify-content-space-evenly.png)

_示例：`justify-content: space-evenly`_

#### `justify-content: space-around`

这也会在 Flex 项之间均匀分配空间。这里的关键区别在于，第一个项之前和最后一个项之后的空间是 Flex 项之间空间的一半。

![14.-justify-content-space-around](https://www.freecodecamp.org/news/content/images/2023/08/14.-justify-content-space-around.png)

_示例：`justify-content: space-around`_

**在 StackBlitz 上** [**练习使用 justify-content**][34]

<h3 id="the-align-items-property"><code>align-items</code> 属性</h3>

`align-items` 属性处理 Flex 项在 Flex 容器交叉轴上的对齐方式。它可以采用以下任意值：

-   `stretch` (默认值)
-   `flex-start`
-   `flex-end`
-   `center`
-   `baseline`

#### `align-items: stretch`

这会拉伸 Flex 项以填充 Flex 容器内的空间。

看下面的示例，使用一个新的名字容器，其中包含不同大小的名字卡片：

```CSS
.names-container {  
	display: flex;  
    align-items: stretch;  
    /* Other styles here... */
}
```

![15.-align-items-stretch](https://www.freecodecamp.org/news/content/images/2023/08/15.-align-items-stretch.png)

_示例：`align-items: stretch`_

#### `align-items: flex-start`


这会将 Flex 项放置在 Flex 容器的交叉轴的起始位置。如果交叉轴是垂直的，如下例所示， `align-items: flex-start` 会将项放置在顶部。

```CSS
.names-container {  
	display: flex;  
	align-items: flex-start;  
	/* Other styles here... */
}
```

![16.-align-items-flex-start](https://www.freecodecamp.org/news/content/images/2023/08/16.-align-items-flex-start.png)

_示例：`align-items: flex-start`_

#### `align-items: flex-end`

这会将 Flex 项放置在 Flex 容器的交叉轴的末尾位置。如果交叉轴是垂直的，如下例所示， `align-items: flex-end` 会将项放置在底部。

```CSS
.names-container {  
	display: flex;  
    align-items: flex-end;  
    /* Other styles here... */
}
```

![17.-align-items-flex-end](https://www.freecodecamp.org/news/content/images/2023/08/17.-align-items-flex-end.png)

示例：`align-items: flex-end`

#### `align-items: center`

这会将 Flex 项在 Flex 容器的交叉轴的中心对齐。

```CSS
.names-container {  
	display: flex;  
	align-items: center;  
	/* Other styles here... */
}
```

![18.-align-items-center](https://www.freecodecamp.org/news/content/images/2023/08/18.-align-items-center.png)

_示例：`align-items: center`_

#### `align-items: baseline`

当你使用 `baseline` 值时，Flex 项会被排列，使它们的基线对齐。请参阅下面的示例：

```CSS
.names-container {  
	display: flex;  
	align-items: baseline;  
	/* Other styles here... */
}
```

![Untitled-design-1](https://www.freecodecamp.org/news/content/images/2023/08/Untitled-design-1.png)

_基线用白色虚线表示_

**在 StackBlitz 上** [**练习使用 align-items**][35]

<h3 id="the-align-content-property"><code>align-content</code> 属性</h3>

当你有一个带有换行（或多个 Flex 行）的 Flex 容器时，你可能需要对这些行进行对齐以根据需要分配空间。这时你可以使用 `align-content` 。该属性可以取以下任何值：

-   `stretch` (默认值)
-   `flex-start`
-   `flex-end`
-   `center`
-   `space-between`
-   `space-evenly`
-   `space-around`

在下面的示例中，名字容器中有 11 个名字。而且名字容器元素的 `flex-wrap` 值为 `wrap` 。这意味着你可以应用 `align-content` 属性来改变 Flex 行的对齐方式。

#### `align-content: stretch`

这会拉伸 Flex 行以填充 Flex 容器交叉轴内的空间。

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	align-items: stretch;  
	/* Other styles here... */
}
```

![20.-align-content-stretch](https://www.freecodecamp.org/news/content/images/2023/08/20.-align-content-stretch.png)

_示例：`align-content: stretch`_

#### `align-content: flex-start`

这将把 Flex 行放置在容器的交叉轴起始位置。例如，如果交叉轴是垂直的，就像名字容器一样，它会将 Flex 行放置在顶部。

![21.-align-content-flex-start](https://www.freecodecamp.org/news/content/images/2023/08/21.-align-content-flex-start.png)

_示例：`align-content: flex-start`_

#### `align-content: flex-end`

这会将 Flex 行放置在容器的交叉轴末尾位置。

![22.-align-content-flex-end](https://www.freecodecamp.org/news/content/images/2023/08/22.-align-content-flex-end.png)

_示例：`align-content: flex-end`_

#### `align-content: center`

这会将 Flex 行放置在容器的交叉轴中心位置。

![23.-align-content-center](https://www.freecodecamp.org/news/content/images/2023/08/23.-align-content-center.png)

_示例：`align-content: center`_

#### `align-content: space-between`

这会将第一行放置在交叉轴的起始位置。它还会将最后一行放置在交叉轴的末尾位置。然后，交叉轴上的空间会均匀分配给这些行。

![24.-align-content-space-between](https://www.freecodecamp.org/news/content/images/2023/08/24.-align-content-space-between.png)

_示例：`align-content: space-between`_

#### `align-content: space-evenly`

这会在 Flex 行之间均匀分配空间。这意味着每行前后的空间都是相同的。

![25.-align-content-space-evenly](https://www.freecodecamp.org/news/content/images/2023/08/25.-align-content-space-evenly.png)

_示例：`align-content: space-evenly`_

#### `align-content: space-around`

这也会在 Flex 行之间均匀分配空间。这里的主要区别在于，第一行之前和最后一行之后的空间是 Flex 行之间空间的一半。

![26.-align-content-space-around](https://www.freecodecamp.org/news/content/images/2023/08/26.-align-content-space-around.png)

_示例：`align-content: space-around`_

**在 StackBlitz 上** [**练习使用 align-content**][36]

<h3 id="the-place-content-property"><code>place-content</code> 属性</h3>

如果你需要同时使用 `justify-content` 和 `align-content` 属性，你可以使用 `place-content` 缩写属性。

它可以接受一个或两个值。当你给它一个单一值时，浏览器会为 `justify-content` 和 `align-content` 应用相同的值。

当你为 `place-content` 提供两个值时，第一个值将用于 `align-content` ，第二个值将用于 `justify-content`。

让我们看一个示例:

无需这样写:

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	align-content: flex-end;  
	justify-content: flex-start;  
	/* Other content */
}
```

你可以改为写下面的代码，效果相同:

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	place-content: flex-end flex-start;  
	/* Other content */
}
```

![43.-place-content](https://www.freecodecamp.org/news/content/images/2023/08/43.-place-content.png)

_示例：using the `place-content` shorthand_

**在 StackBlitz 上** [**练习使用 place-content**][37]

<h2 id="the-flex-items-properties">Flex 项属性</h2>

Flex 容器的每个直接子元素都是 Flex 项。到目前为止，你已经学习了 Flex 容器的属性。

Flexbox 还有一些属性，你可以应用到单个 Flex 项上。它们包括以下内容：

-   `order`
-   `align-self`
-   `flex-grow`
-   `flex-shrink`
-   `flex-basis`
-   `flex`

<h3 id="the-order-property"><code>order</code> 属性</h3>

`order` 属性确定 Flex 项的出现顺序。

你给这个属性的赋值必须是一个数字。一个数字较小的 Flex 项将出现在数字较大的 Flex 项之前。

在 HTML 代码中，四个名字的顺序如下:

1.  Jill
2.  John
3.  Jane
4.  Jack

```CSS
<div class="names-container">
	<p id="jill">1. JILL</p>
	<p id="john">2. JOHN</p>
	<p id="jane">3. JANE</p>
	<p id="jack">4. JACK</p>
</div>
```

你可以使用 `order` 属性改变屏幕上的出现顺序。请参阅下面的示例。

以下是没有 `order` 属性时它们的显示方式:

![27.-no-order-property](https://www.freecodecamp.org/news/content/images/2023/08/27.-no-order-property.png)

_添加 `order` 属性之前的名字卡片_

现在，看下面的示例，当你添加以下 `order` 属性时它们的显示方式:

```CSS
.names-container {  
	display: flex;
}

#jill {  
	order: 2;  
    background-color: #fe4f46;
}

#john {  
	order: 4;  
    background-color: #fcd65c;
}

#jane {  
	order: 1;  
    background-color: 
    #00bab4;
}

#jack {  
	order: 3;  
    background-color: #003f54;
}
```

![28.-with-order-property](https://www.freecodecamp.org/news/content/images/2023/08/28.-with-order-property.png)

_`order` 属性改变了出现顺序_

**在 StackBlitz 上** [**练习使用 order 属性**][38]

**警告:** 尽管屏幕上的出现顺序改变了，但 HTML 中的顺序保持不变。而屏幕阅读器使用的是 HTML 中的顺序。如果可能，最佳实践是在 HTML 中改变顺序，而不是使用 Flexbox 进行更改。

<h3 id="the-align-self-property"><code>align-self</code> 属性</h3>


你可以使用 `align-self` 属性为一个 Flex 项单独设置不同的对齐方式。

它的工作方式与 `align-items` 属性相同。不同之处在于， `align-items` 适用于所有 Flex 项，而 `align-self` 属性仅适用于特定项目。

例如:

```CSS
.names-container {  
	display: flex;  
    align-items: center;  
    /* Other styles */    
}

#jill {
	align-self: flex-start;
}
```

![37.-align-self](https://www.freecodecamp.org/news/content/images/2023/08/37.-align-self.png)

_示例：`align-self` 带有 `flex-start` 值_

在这个示例中，名字容器的 `align-items` 属性设置为 `center`，这会使所有名字都居中对齐。

But using the `align-self` property, you are able to align Jill's name card to the top with a value of `flex-start`.
但使用 `align-self` 属性，你可以将 Jill 的名字卡片与其他设置为 `flex-start`的顶部对齐。

**在 StackBlitz 上** [**练习使用 align-self 属性**][39]

<h3 id="the-flex-grow-property"><code>flex-grow</code> 属性</h3>

当你将容器的 `display` 设置为 `flex` 时，通常会在排列项之后有一些额外的空间。请参阅下面的示例：

```CSS
.names-container {  
	display: flex;  
    justify-content: 
    flex-start;  
 	/* Other styles */
 }
```

![29.-flex-grow-extra-space](https://www.freecodecamp.org/news/content/images/2023/08/29.-flex-grow-extra-space.png)

_Flex 容器有足够的空间容纳 Flex 项_

The browser treats the extra as a value of `1`. This means when you give a `flex-grow` value of `0.5` to only one of the flex items, the browser will add half of the remaining space to the item's size.
浏览器会将多余的空间视为 `1` 的值。这意味着当你为其中一个 Flex 项的 `flex-grow` 设置为 `0.5` 时，浏览器会将剩余空间的一半添加到该项的大小中。

```CSS
#jill {
	flex-grow: 0.5;
}
```

![30.-flex-grow-0.5](https://www.freecodecamp.org/news/content/images/2023/08/30.-flex-grow-0.5.png)

_`flex-grow` 属性使 Jill 的大小大于其初始大小_

如果你给 **仅一个 Flex 项** 设置了 `flex-grow` 值为 `1` ，浏览器将把所有额外的空间都分配给该项。

**NOTE:** If only one item in the container has a `flex-grow` value, then any value of 1 or more will make it take up all the extra space.

For example, the two code snippets below will have the same effect on Jill's card:

**注意：** 如果容器中只有一个项具有 `flex-grow` 值，则任何值为 1 或更大的值都会使其占据所有额外空间。

例如，下面两个代码片段对 Jill 的卡片具有相同的效果：

```CSS
#jill {  
	flex-grow: 1;
}
```

```CSS
#jill {  
	flex-grow: 99;
}
```

![31.-flex-grow-1-or-more](https://www.freecodecamp.org/news/content/images/2023/08/31.-flex-grow-1-or-more.png)

_当容器中只有一个卡片的 `flex-grow` 为 `1` 或以上时_

当你为多个元素添加 `flex-grow` 值会发生什么？

浏览器将按比例为它们共享额外的空间。

例如，当你给 Jane 设置 `flex-grow` 为 `3`，给 Jack 设置 `flex-grow` 为 `1` 时，浏览器将以 `3:1` 的比例分享额外的空间。

这意味着额外空间的总值变为 `4`（3+1）。`Jane` 将获得额外空间的 `3/4`，而 `Jack` 将获得 `1/4`。

![32.-flex-grow-jane-jack](https://www.freecodecamp.org/news/content/images/2023/08/32.-flex-grow-jane-jack.png)

_额外的空间按比例在 `Jane` 和 `Jack` 之间共享_

**在 StackBlitz 上** [**练习使用 flex-grow 属性**][40]

<h3 id="the-flex-shrink-property"><code>flex-shrink</code> 属性</h3>

`flex-shrink` 属性与 `flex-grow` 相反。

You use `flex-grow` when you want to increase the flex item's size if there's extra space. But, you use `flex-shrink` when you want to decrease the flex-item's size if there's not enough space in the flex container.
当你希望在存在额外空间时增加 Flex 项的大小时，你可以使用 `flex-grow`。但是，当 Flex 容器中的空间不足时，你可以使用 `flex-shrink` 来减小 Flex 项的大小。

请参阅下面的示例:

```HTML
<div class="numbers-container">
	<p id="one">1</p>
	<p id="two">2</p>
	<p id="three">3</p>
	<p id="four">4</p>
</div>
```

```CSS
.numbers-container {  
	display: flex;  
	justify-content: flex-start;  
	/* Other styles */
}

#one {  
	flex-shrink: 2;  
	background-color: #fe4f46;
}
```

![33.-flex-shrink-value-2](https://www.freecodecamp.org/news/content/images/2023/08/33.-flex-shrink-value-2.png)

_第一张卡片缩小,为其他卡片腾出空间_

在这个示例中，四个数字每个的宽度都设置为 150px（总共 600px）。但 `numbers-container` 的宽度只有 400px，这是不够的。

卡片必须缩小以适应可用空间。但是 `flex-shrink` 值为 2 的数字 `1` 缩小为其他数字的两倍。

#### 如果你不希望一个 Flex 项缩小怎么办？

为了防止 Flex 项收缩，给它一个 `flex-shrink` 值为 `0`。

例如，当你为 Number `1` 指定 `flex-shrink` 为 `0` 时，它将保持 150px 的宽度。其他 Flex 项将缩小以适应剩余空间。

![34.-flex-shrink-vallue-0](https://www.freecodecamp.org/news/content/images/2023/08/34.-flex-shrink-vallue-0.png)

第一个卡片不会缩小，因为它的 `flex-shrink` 值为 `0`。

**在 StackBlitz 上** [**练习使用 flex-shrink 属性**][41]

<h3 id="the-flex-basis-property"><code>flex-basis</code> 属性</h3>

你可以使用 `flex-basis` 属性来设置特定 Flex 项的默认长度。这取决于 `flex-direction` ，可以是宽度或高度。

如果 `flex-direction` 是 `row` 或 `row-reverse` ，则 `flex-basis` 的值就成为 Flex 项的初始宽度。

如果 `flex-direction` 是 `column` 或 `column-reverse` ，那么 `flex-basis` 的值就成为 Flex 项的初始高度。

例如:

```CSS
.names-container {  
	display: flex;  
	flex-direction: column;  
	/* Other styles */
}

div {  
	height: 20px;
}

#jane {  
	flex-basis: 60px;
}
```

![35.-flex-basis-height](https://www.freecodecamp.org/news/content/images/2023/08/35.-flex-basis-height.png)

_示例：`flex-basis` 设置 item 的高度_

在这个示例中，div 的高度设置为 20px。但 Jane 得到的 `flex-basis` 值为 60px。这会覆盖所有 div 的 20px。

**Note:** The flex-basis of 60px becomes the height for Jane because the `flex direction` is `column`. This means the main axis is vertical.

Here is another example. This time, the `flex-direction` is `row`. This means the `flex-basis` will set the width of the item.

注意： Jane 的 `flex-basis` 值为 60px，因为 `flex direction` 是 `column`。这意味着主轴是垂直的。

下面是另一个示例。这次，`flex-direction` 是 `row`。这意味着 `flex-basis` 将设置 Flex 项的宽度。

```CSS
.names-container {  
	display: flex;  
	flex-direction: row;  
    /* Other styles */
}

div {  
	width: 70px;
}

#jane {  
	flex-basis: 140px;
}
```

![36.-flex-basis-width](https://www.freecodecamp.org/news/content/images/2023/08/36.-flex-basis-width.png)

_示例：`flex-basis` 设置 item 的宽度_

虽然所有其他 div 的宽度均为 70px，但 Jane 的宽度由 `flex-basis` 设置为 140px。

**在 StackBlitz 上** [**练习使用 flex-basis 属性**][42]

<h3 id="the-flex-shorthand-property"><code>flex</code> 缩写属性</h3>

You can use `flex` as a shorthand for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.
你可以使用 `flex` 作为 `flex-grow` 、 `flex-shrink` 和 `flex-basis` 属性的缩写。

例如，无需这样写:

```CSS
.flex-item {  
	flex-grow: 2;  
	flex-shrink: 0;  
	flex-basis: 50px;
}
```

你可以像这样使用缩写，它会产生相同的效果：

```CSS
.flex-item {  
	flex: 2 0 50px;
}
```

`flex` 属性最多可以接受三个值。值的顺序很重要。浏览器将第一个值分配给 `flex-grow`，第二个值分配给 `flex-shrink`，第三个值分配给 `flex-basis`。

`flex` 的默认值是 `1 0 auto`。

这意味着如果你给 `flex` 一个值为 2，浏览器将使用 2 作为 `flex-grow`。然后它将 `flex-shrink` 设置为 0，将`flex-basis` 设置为 auto。

**在 StackBlitz 上** [**练习使用 `flex` 属性**][43]

<h2 id="how-to-center-an-element-with-flexbox">如何使用 Flexbox 将元素居中</h2>

让许多前端开发人员头疼的问题之一是元素居中。 Flexbox 对此提供了一个完美的解决方案。

涉及两个步骤。

1.  Make the parent element a flex container by setting `display` to `flex`.
2.  Give a value of `center` to both `justify-content` and `align-items`.

1. 通过将 `display` 设置为 `flex` 使父元素成为 Flex 容器。
2. 将 `justify-content` 和 `align-items` 都设置为 `center`。

就是这样！你的元素将完美居中！

例如:

```HTML
<div class="name-container">  
	<p>JOHN</p>
</div>
```

```CSS
.name-container {  
	display: flex;  
	justify-content: center;  
	align-items: center;  
	/* Other Styles */
}
```

![38.-center-element-w--flexbox](https://www.freecodecamp.org/news/content/images/2023/08/38.-center-element-w--flexbox.png)

_示例：使用 Flexbox 居中一个元素_

无论你是试着居中文本、图像，还是整个导航栏，这都能完美运行。

<h2 id="flexbox-gaps">Flexbox 间隙</h2>

你可以使用 `gap` 属性来调整 flex 项之间的间距。

**注意：** 你将 gap 属性应用于 Flex 容器，而不是 Flex 项。

`gap` 可以取两个值：第一个值用于行之间的间距，第二个值用于列之间的间距。

例如:

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	gap: 50px 10px; 
	/* row-gap column-gap */
}
```

![39.-gap-two-values](https://www.freecodecamp.org/news/content/images/2023/08/39.-gap-two-values.png)

_示例：为 gap 属性指定两个值_

如果你想要的行和列之间的间距相同，你可以使用单个值。浏览器将为行和列都应用相同的值。

例如:

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	gap: 10px; 
	/* Other Styles */
}
```

![40.-gap-single-value](https://www.freecodecamp.org/news/content/images/2023/08/40.-gap-single-value.png)

_示例：行距和列距仅使用一个值_

如果你需要仅在行之间应用特定的间隙值，你还可以使用属性 `row-gap` 。如果你需要仅在列之间添加间隙，则使用 `column-gap` 。

例如：仅在行之间添加间距：

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	row-gap: 20px; 
	/* Other Styles */
}
```

![41.-row-gap](https://www.freecodecamp.org/news/content/images/2023/08/41.-row-gap.png)

_示例：使用 `row-gap`_

例如: 仅在列之间添加间距：

```CSS
.names-container {  
	display: flex;  
	flex-wrap: wrap;  
	column-gap: 20px; 
	/* Other Styles */
}
```

![42.-column-gap](https://www.freecodecamp.org/news/content/images/2023/08/42.-column-gap.png)

_示例：使用 `column-gap`_

**在 StackBlitz 上** [**练习使用 gap 属性**][44]

<h2 id="practice-with-flexbox-games">通过 Flexbox 游戏练习</h2>


想要以交互方式练习 Flexbox ？看看以下游戏。它们以有趣且引人入胜的方式提供亲身体验 Flexbox 的实践练习。

-   [Flexbox Froggy][45]
-   [Flexbox Defense][46]
-   [Flexbox Zombies][47]

<h2 id="are-there-bugs-in-css-flexbox">CSS Flexbox 中有 Bug 吗?</h2>

虽然 CSS Flexbox 是一个强大的布局工具，但它有一些可能会让你感到意外的 bug 。

一个常见的例子是 **某些 HTML 元素无法充当 flex 容器**。这些元素包括 `<button>`、`<fieldset>` 和 `<summary>` 元素。

解决方法是使用像 `div` 这样的元素来包裹该元素的子元素。然后在包装器 `div` 上使用 Flexbox。

如果你对其他 Flexbox 的 bug 和解决方法感兴趣，可以查看 GitHub 上的 [Flexbugs 仓库][48]。

## 尾声
<h2 id="conclusion">尾声</h2>

在本指南中，你学习了所有 Flexbox 属性、它们的值以及如何使用它们创建响应式布局。你还了解了一些像 Flexbox Froggy 这样的游戏，可以用来练习。

感谢你的阅读，祝你编码愉快！欢迎[订阅我的 YouTube 频道][49]以获取更深入的教程。

---

![Benjamin Semah](https://www.freecodecamp.org/news/content/images/size/w60/2022/09/Benjamin-Semah.jpg)

[Benjamin Semah][50]

软件开发者 | 技术作家

---

如果你一直阅读到这里，请感谢作者，以表达你的关心。说声谢谢。

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][51]

免费学习编程。 freeCodeCamp 的开源课程已帮助超过 40,000 人找到开发人员的工作。[开始学习][51]

[1]: /news/tag/flexbox/
[2]: /news/author/benjamin-semah/
[3]: #what-is-flexbox
[4]: #what-are-the-benefits-of-using-flexbox
[5]: #the-main-axis-and-the-cross-axis
[6]: #flex-containers-and-flex-items
[7]: #understanding-flex-and-inline-flex
[8]: #display-flex
[9]: #display-inline-flex
[10]: #the-flex-container-properties
[11]: #the-flex-direction-property
[12]: #the-flex-wrap-property
[13]: #the-flex-flow-shorthand-property
[14]: #the-justify-content-property
[15]: #the-align-items-property
[16]: #the-align-content-property
[17]: #the-place-content-property
[18]: #the-flex-items-properties
[19]: #the-order-property
[20]: #the-align-self-property
[21]: #the-flex-grow-property
[22]: #the-flex-shrink-property
[23]: #the-flex-basis-property
[24]: #the-flex-shorthand-property
[25]: #flexbox-gaps
[26]: #how-to-center-an-element-with-flexbox
[27]: #practice-with-flexbox-games
[28]: #are-there-bugs-in-css-flexbox
[29]: #conclusion
[30]: https://stackblitz.com/edit/js-ug2zkz?file=style.css
[31]: https://stackblitz.com/edit/js-aaerav?file=style.css
[32]: https://stackblitz.com/edit/js-cbmfgr?file=style.css
[33]: https://stackblitz.com/edit/js-xuv4bx?file=style.css
[34]: https://stackblitz.com/edit/js-zpcbxv?file=style.css
[35]: https://stackblitz.com/edit/js-jydywf?file=style.css
[36]: https://stackblitz.com/edit/js-fukvgd?file=style.css
[37]: https://stackblitz.com/edit/js-ytdywl?file=style.css
[38]: https://stackblitz.com/edit/js-c5mf8q?file=style.css
[39]: https://stackblitz.com/edit/js-e9ctpu?file=style.css
[40]: https://stackblitz.com/edit/js-m6h8af?file=style.css
[41]: https://stackblitz.com/edit/js-q9zndc?file=style.css
[42]: https://stackblitz.com/edit/js-maihzd?file=style.css
[43]: https://stackblitz.com/edit/js-m19hov?file=style.css
[44]: https://stackblitz.com/edit/js-v77toh?file=style.css
[45]: https://flexboxfroggy.com/
[46]: http://www.flexboxdefense.com/
[47]: https://mastery.games/flexboxzombies/
[48]: https://github.com/philipwalton/flexbugs
[49]: https://www.youtube.com/@DevAfterHours
[50]: /news/author/benjamin-semah/
[51]: https://www.freecodecamp.org/learn/