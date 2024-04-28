---
title: CSS Transition vs Animation Handbook – How to Animate Elements in CSS
author: Oluwatobi Sofela
authorURL: https://www.freecodecamp.org/news/author/oluwatobiss/
originalURL: https://www.freecodecamp.org/news/css-transition-vs-css-animation-handbook
translator: "Luoming"
reviewer: ""
---

September 12, 2023 / [#CSS][1]

<!-- more -->

# CSS 过渡与动画手册——如何用 CSS 为元素制作动画

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][2]

  ![CSS Transition vs Animation Handbook – How to Animate Elements in CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2023/09/How-to-Animate-Elements-in-CSS-Cover.png)

CSS 过渡（Transition）和动画（Animation）为更改元素的样式提供了平滑、渐进的方式，但是它们的工作方式有些不同。

这是它们之间的主要区别：

| CSS 过渡 | CSS 动画 |
| -------- | -------- |
|          |
- 创建一个从一个 CSS 值到另一个值平滑的过渡。
- 你需要触发器去运行 CSS 过渡。例如，您可以使用 `:hover` [伪类][3]在用户指针悬停在元素上时运行过渡。
- 过渡只有两个状态：初始态和最终态。你不能创建中间步骤。
- 只运行一次。
- 最适合使用在基础样式的更改。

 | 

- 从一个 CSS 关键帧到另一个关键帧的样式变更动画。
- CSS 动画不需要触发器。
- 动画允许你创建多种状态。
- 你可以运行多次动画迭代——甚至是无数次。
- 最适合使用在动态样式的更改。

 |

本手册通过一些例子去解释两种动画技术，以便你理解它们之间的异同。

## 目录

1.  [什么是 CSS 过渡？][4]
2.  [CSS 过渡属性的种类][5]
    -   [什么是必需 CSS 过渡属性？][6]
    -   [什么是 `transition-property`？][7]
    -   [什么是 `transition-duration`？][8]
    -   [必需 CSS 过渡属性的示例][9]
    -   [什么是可选 CSS 过渡属性？][10]
    -   [什么是 `transition-timing-function`？][11]
    -   [什么是 `transition-delay`？][12]
    -   [可选 CSS 过渡属性的示例][13]
3.  [CSS 过渡属性的缩写][14]
4.  [什么是 CSS 动画？][15]
    -   [CSS 动画的组成][16]
    -   [什么是 CSS `@keyframes`][17]
5.  [什么是 CSS animation 属性？][18]
    -   [什么是 CSS `animation-name` 属性？][19]
    -   [什么是 CSS `animation-duration` 属性？][20]
    -   [What is the CSS `animation-timing-function` Property?][21]
    -   [What is the CSS `animation-delay` Property?][22]
    -   [What is the CSS `animation-iteration-count` Property?][23]
    -   [What is the CSS `animation-direction` Property?][24]
    -   [What is the CSS `animation-play-state` Property?][25]
    -   [What is the CSS `animation-fill-mode` Property?][26]
6.  [What is the CSS `animation` Property?][27]
7.  [Important Stuff to Know about CSS Transitions and Animations][28]
8.  [Wrapping up][29]

Without further ado, let's discuss CSS transitions.

<h2 id="what-are-css-transitions">什么是 CSS 过渡？</h2>

**CSS 过渡**提供了一种平滑、渐进的方式去更改指定的 CSS 属性值。

这样，CSS 过渡会使变化在指定时间段内平滑地发生，而不是让浏览器去立即更改某个属性值。

例如，假设你希望当悬停时更改一个元素的尺寸。在这个例子中，你有两个选项：

1. 不使用 CSS 过渡实现更改。
2. 使用 CSS 过渡从元素的初始尺寸平滑地过渡到它的新状态。

让我们看些这两个选项的例子。

### 不使用 CSS 过渡如何在鼠标悬停时更改图片的尺寸

```css
img {
  width: 40%;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][30]

上面的代码从初始宽度（`40%`）到新的尺寸（`100%`）瞬间更改了图片的尺寸，因为我们没有使用 CSS 过渡。

使用 CSS 过渡，你可以获得更愉悦的体验。让我们看看下面的示例。

### 使用 CSS 过渡如何在鼠标悬停时更改图片的尺寸

```css
img {
  width: 40%;
  transition: width 3s ease-out 0.4s;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][31]

从 `width: 40%` 到 `width: 100%`，`transition` 属性在图片上应用了一个平滑、渐进的过渡。

<h2 id="categories-of-css-transition-properties">CSS 过渡属性的种类</h2>

我们有两种 CSS 过渡属性：

- *必需*过渡属性
- *可选*过渡属性

让我们来讨论一下这两者。

<h3 id="what-are-the-required-css-transition-properties">什么是必需 CSS 过渡属性</h3>

创建 CSS 过渡的两个必需属性：

- `transition-property`
- `transition-duration`

<h4 id="what-is-the-css-transition-property">什么是 <code>transition-property</code>？</h4>

CSS 的 `transition-property` 指定你希望从初始态过渡到新状态的 CSS 属性。

<h4 id="what-is-the-css-transition-duration-property">什么是 <code>transition-duration</code> ？</h4>

CSS 的 `transition-duration` 属性定义了浏览器完成所选择元素过渡的时间长度。换句话说，`transition-duration` 设置从开始到结束所需的全部时间。

**注意以下几点：**

- `transition-duration` 属性只接受毫秒（ms）或秒（s）的时间形式。
- 0 秒（`0s`）是 `transition-duration` 的默认值。因此，如果你不定义 `transition-duration` 属性，将不会有[过渡事件][32]发生。
- `transition-duration` 只接受 0 或正数值。如果你提供其他任何值浏览器将忽略它。

<h3 id="examples-of-the-required-css-transition-properties">必需 CSS 过渡属性的示例</h3>

下面是两个必需 CSS 过渡属性的一些示例。

#### 如何在 3 秒内完成元素宽度的过渡

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][33]

在上面片段中我们做了什么：

1. `transition-property` 告诉浏览器把 `img` 的 `width` 从它的初始值（`40%`）过渡到它的新状态（`100%`）。
2. 使用 `transition-duration` 属性定义过渡从开始到结束持续 3 秒（`3s`）的时间。

因此，浏览器将在 3 秒（`3s`）内从老值到新值间平滑地过渡，而不是立即把图片从初始宽度（`40%`）更改到新尺寸（`100%`）。

#### 如何在 5 秒内完成字体尺寸的过渡

```css
p {
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: 5s;
}

p:hover {
  font-size: 7rem;
}
```

[**试着编辑它**][34]

在上面片段中我们做了什么：

1. `transition-property` 告知浏览器过渡 `p` 元素的 `font-size`。
2. 使用 `transition-duration` 属性定义过渡从开始到结束持续 5 秒（`5s`）的时间。

因此，浏览器将在 5 秒（`5s`）内从老值到新值间平滑地过渡，而不是立即把 `p` 的初始字体尺寸（`1rem`）更改到新尺寸（`7rem`）。

现在让我们讨论一下可选 CSS 过渡属性。

<h3 id="what-are-the-optional-css-transition-properties">什么是可选 CSS 过渡属性</h3>

这是两个可选 CSS 过渡属性：

- `transition-timing-function`
- `transition-delay`

<h4 id="what-is-the-css-transition-timing-function-property">什么是 <code>transition-timing-function</code>？</h4>

CSS 的 `transition-timing-function` 属性定义了所选元素实现过渡的时机（速度）。

换句话说，`transition-timing-function` 指定了在持续时间内的不同时间间隔实现过渡的速度。

`transition-timing-function` 属性接受的值如下：

- `ease`：开始时过渡缓慢，然后加快速度，并缓慢结束。`ease` 是属性 `transition-timing-function` 的默认值。它等价于 `cubic-bezier(0.25,0.1,0.25,1)`。
- `ease-in`：开始时过渡很慢，随后逐渐增加速度。它等价于 `cubic-bezier(0.42,0,1,1)`。
- `ease-out`：开始很快，结束时很慢。它等价于 `cubic-bezier(0,0,0.58,1)`。
- `ease-in-out`：开始和结束很慢。它等价于 `cubic-bezier(0.42,0,0.58,1)`。
- `linear`：在整个过渡的持续时间内使用一致的速度开始和结束过渡。它等价于 `cubic-bezier(0,0,1,1)`。
- `cubic-bezier(p1, p2, p3, p4)`：允许你定义[三次贝塞尔曲线][35]的值。

<h4 id="what-is-a-css-transition-delay-property">什么是 <code>transition-delay</code>？</h4>

CSS 的 `transition-delay` 属性定义了浏览器在开始过渡前需要等待多长事件。

**注意以下几点：**

- `transition-delay` 必须使用毫秒（ms）或秒（s）的形式。
- `0s` 是 `transition-delay` 的默认值，它导致浏览器应用到 HTML 元素时过渡立即开始。
- 一个负值将导致过渡从指定时间立即开始。举例来说，假设一个元素的 `transition-delay` 值设为 `-3s`，这次过渡将从 3 秒前开始计算。
- 一个正值将导致过渡等待指定的延迟时间后开始。举例来说，假设一个元素的 `transition-delay` 值设为 `3s`，这次过渡将延迟 3 秒后开始。

<h3 id="examples-of-the-optional-css-transition-properties">可选 CSS 过渡属性的示例</h3>

下面是两个可选 CSS 过渡属性的一些示例。

#### 如何使用 ease-out 速度完成元素宽度的过渡

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: ease-out;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][36]

在上面片段中我们做了什么：

1. `transition-property` 告知浏览器过渡 `img` 元素的宽度。
2. 我们使用 `transition-duration` 属性定义过渡从开始到结束 3 秒（`3s`）的持续时间。
3. 我们使用 `transition-timing-function` 属性快速地开始过渡然后缓慢地结束。

#### 如何使用 linear 速度完成元素宽度的过渡

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][37]

在上面片段中我们做了什么：

1. `transition-property` 告知浏览器过渡 `img` 元素的宽度。
2. 我们使用 `transition-duration` 属性定义过渡从开始到结束 3 秒（`3s`）的持续时间。
3. `transition-timing-function` 属性告诉浏览器将这个元素从初始宽度过渡到新尺寸时，采用恒定的过渡速度。

#### 如何使用 2 秒的延迟完成元素宽度的过渡

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}

img:hover {
  width: 100%;
}
```

[**试着编辑它**][38]

在上面片段中我们做了什么：

1. `transition-property` 告知浏览器过渡 `img` 元素的宽度。
2. 我们使用 `transition-duration` 属性定义过渡从开始到结束 3 秒（`3s`）的持续时间。
3. `transition-timing-function` 使用一个恒定的速度完成 `img` 元素宽度的过渡。
4. 我们使用 `transition-delay` 属性在过渡的开始添加 2 秒（`2s`）的延迟。

现在，我们了解了 CSS 过渡的属性，我们可以讨论一下它的缩写语法。

<h2 id="shorthand-for-defining-the-css-transition-properties">CSS 过渡属性的缩写</h2>

我们使用 `transition` 属性作为 `transition-property`、`transition-duration`、`transition-timing-function` 和 `transition-delay` 属性的缩写。

换句话说，我们不再这样写：

```css
img {
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}
```

你可以使用 `transition` 属性替换让你的代码更短，像这样：

```css
img {
  transition: width 3s linear 2s;
}
```

[**试着编辑它**][39]

这是 `transition` 属性的语法：

```css
transition: <property-name> <duration> <timing-function> <delay>;
```

注意你可以使用 `transition` 去定义多个 CSS 过渡属性的状态。

**看这个例子：**

```css
img {
  width: 40%;
  opacity: 0.4;
  transition: width 3s linear, opacity 4s ease-out, transform 5s;
}

img:hover {
  width: 100%;
  opacity: 1;
  transform: rotate(45deg);
}
```

[**试着编辑它**][40]

上面的片段使用逗号（`,`）去分隔我们应用在 `img` 元素上的每个过渡属性。

那么，现在你了解了 CSS 过渡是什么、它如何工作，我们来探讨一些 CSS 动画。

<h2 id="what-is-css-animation">什么是 CSS 动画？</h2>

**CSS 动画** 提供了一个平滑、渐进的方式从一个关键帧到另一个关键帧为元素的样式增加动画。

<h3 id="components-of-css-animations">CSS 动画的组成</h3>

CSS 动画由两部分组成：

1. 关键帧
2. 动画属性

<h3 id="what-are-css-keyframes">什么是 CSS <code>@keyframes</code>？</h3>

**@keyframes** 定义了你想要浏览器某关键时刻（帧）平滑地应用在元素上的样式。

### CSS `@keyframes` 的语法

CSS [at 规则][41]中 @keyframes  由以下组成：

1. 一个 `@keyframes` 关键字
2. 一个 `@keyframes` 名字 
3. 一个零个及以上的关键帧
4. 关键帧选择器
5. 关键帧样式声明

**看这个插图：**

<figure class="kg-card kg-card-image kg-card-hascaption">
    <img src="https://www.freecodecamp.org/news/content/images/2023/09/css-animation-keyframes-illustration-codesweetly.png" alt="剖析 CSS @keyframes" class="kg-image">
    <figcaption>剖析 CSS @keyframes</figcaption>
</figure>

一个 CSS `@keyframes` 由一个关键字、一个名字、一个关键帧块组成。

### CSS @keyframes 的示例

下面是 CSS @keyframes 的示例

#### 如何定义 `change-color` 的关键帧

```css
@keyframes change-color {
  /* 最初的关键帧 */
  0% {background-color: purple;}
  /* 最后的关键帧 */
  100% {background-color: yellow;}
}
```

在上面片段中我们做了什么：

1. 我们创建了一个 `@keyframes` 命名为 `change-color`。
2. 我们定义了一个关键帧，供浏览器在关联元素的动画处于 `0%` 持续时间时应用。
3. 我们定义了一个关键帧，供浏览器在关联元素的动画处于 `100%` 持续时间时应用。

**注意：**

- 你可以把你的 `@keyframes` 按照你希望的随意命名。
- `0%` 等价于关键字 `from`，`100%` 等价于关键字 `to`。也就是说，上面的代码片段等价于下面的：

```css
@keyframes change-color {
  /* 最初的关键帧 */
  from {background-color: purple;} 
  /* 最后的关键帧 */
  to {background-color: yellow;} 
}
```

- 一个动画的开始和结束状态（`from` 和 `to`）是可选的。
- 假设你省略了 `@keyframes` 的开始或结束状态，这种情况下，浏览器将使用元素的现有样式作为起始/结束状态。
- `!important` 在关键帧中无效，浏览器会忽略任何带有 `!important` 的关键帧声明。

让我们看另一个例子。

#### 如何定义 `shape-image` 的关键帧

```css
@keyframes shape-image {
  0% { width: 40%; border: 5px solid blue;}
  40% { width: 70%; border: 1px solid red; border-radius: 50%;}
  75% { width: 50%; border: 30px solid green;}
  100% { width: 100%; border: 7px solid purple;}
}
```

在上面片段中我们做了什么：

1. 我们创建了 `@keyframes` [规则集][42] 命名为 `shape-image`。
2. 我们定义了 4 个关键帧，供浏览器在关联元素的动画处于指定关键时刻时应用。

**提示：** 在 JavaScript 中使用 [CSSKeyframesRule][43] 接口访问 CSS `@keyframes`。

那么，现在我们知道了 CSS @keyframes 规则集，我们可以讨论另一个 CSS 动画的组成部分了—— *animation 属性*。

<h2 id="what-are-css-animation-properties">什么是 CSS animation 属性？</h2>

**CSS animation 属性** 告知浏览器你希望应用在指定元素上的动画。

换句话说，CSS `animation` 描述了动画的属性，例如它的名字、持续时间、方向、迭代次数。

下面是 CSS 动画的 9 种属性：

-   `animation-name`
-   `animation-duration`
-   `animation-timing-function`
-   `animation-delay`
-   `animation-iteration-count`
-   `animation-direction`
-   `animation-play-state`
-   `animation-fill-mode`
-   `animation`

让我们逐个讨论一下。

<h3 id="what-is-the-css-animation-name-property">什么是 CSS <code>animation-name</code> 属性？</h3>

CSS `animation-name` 属性定义了你希望应用在指定元素上的 `@keyframes` 包含的样式的名字。

**看这个例子：**

```css
div {
  width: 150px;
  height: 150px;
  animation-name: change-color;
}

@keyframes change-color {
  from {background-color: purple;}
  to {background-color: yellow;}
}
```

在上面片段中我们做了什么：

1. `animation-name` 指定了我们希望应用到 `div` 元素上的 `@keyframes`。
2. 我们创建了一个名为 `change-color` 的 `@keyframes` 规则集。
3. 我们定义了 `div` 元素的动画在 `0%` 和 `100%` 时两个关键帧给浏览器使用。

**提示：** 你可以使用关键字 `none` 不激活动画。

<h3 id="what-is-the-css-animation-duration-property">什么是 CSS <code>animation-duration</code> 属性？</h3>

CSS `animation-duration` 属性定义了完成一个动画循环的事件。

**注意以下几点：**

- `animation-duration` 属性只接受毫秒（ms）或秒（s）的时间形式。
- `animation-duration` 值只接受 0 或是整数。否则，浏览器将忽略这条声明。
- 0 秒（`0s`）是 `animation-duration` 的默认值。
- 假设 `0s` 是 `animation-duration` 的值。在这种情况下，浏览器仍将通过触发 [`animationStart`][44] 和 [`animationEnd`][45] 事件来执行动画。但是由 [`animation-fill-mode`][46] 值决定动画是否可见。比如，你设置 `animation-fill-mode` 为 `none`，动画则是不可见的。

让我们看一些 `animation-duration` 属性的例子。

#### 如何在 3 秒内完成更改元素的颜色的动画

```css
div {
  width: 150px;
  height: 150px;
  animation-name: change-color;
  animation-duration: 3s;
}

@keyframes change-color {
  from {background-color: purple;}
  to {background-color: yellow;}
}
```

[**试着编辑它**][47]

在上面片段中我们做了什么：

1. `animation-name` 属性指定了我们希望用在 `div` 元素上的 `@keyframes`。
2. `animation-duration` 属性设置了动画一个循环的运行时间在 3 秒（`3s`）内。
3. 我们创建了 `change-color` 关键帧[规则集][48]。
4. 我们定义了 `div` 元素的动画在 `0%` 和 `100%` 时两个关键帧给浏览器使用。

因此，浏览器将创建一个从第一帧到最后持续 3 秒的平滑的 `change-color` 动画。

#### How to animate an image's border and width changes within seven seconds

```css
img {
  animation-name: shape-image;
  animation-duration: 7s;
}

@keyframes shape-image {
  0% { width: 40%; border: 5px solid blue;}
  40% { width: 70%; border: 1px solid red; border-radius: 50%;}
  75% { width: 50%; border: 30px solid green;}
  100% { width: 100%; border: 7px solid purple;}
}
```

[**试着编辑它**][49]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `img` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We created `shape-image`'s @keyframes ruleset.
4.  We defined four keyframes for browsers to apply when the image's animation is at the specified key moments.

Therefore, browsers will create a smooth seven-second animation from `shape-image`'s first keyframe to its last.

### What is the CSS `animation-timing-function` property?

The CSS `animation-timing-function` property defines an animation's implementation timing (speed) throughout its duration.

In other words, the `animation-timing-function` property specifies the speed for implementing the animation at various intervals of its duration.

The values the `animation-timing-function` property accepts are:

-   `ease`: Starts the animation slowly. Then speeds it up and ends it slowly. `ease` is the `animation-timing-function` property's default value. It is equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1)`.
-   `ease-in`: Starts the animation slowly with a gradual increase in speed. It is equivalent to `cubic-bezier(0.42, 0, 1, 1)`.
-   `ease-out`: Starts fast and ends the animation slowly. It is equivalent to `cubic-bezier(0, 0, 0.58, 1)`.
-   `ease-in-out`: Starts and ends the animation slowly. It is equivalent to `cubic-bezier(0.42, 0, 0.58, 1)`.
-   `linear`: Starts and ends the animation using a consistent speed throughout the animation's duration. It is equivalent to `cubic-bezier(0, 0, 1, 1)`.
-   `cubic-bezier(p1, p2, p3, p4)`: Allows you to define the values of the [cubic-Bezier curve][50].

Let's see some examples of the `animation-timing-function` property.

#### How to animate an element's width change using a linear speed

```css
div {
  width: 150px;
  height: 150px;
  background-color: purple;
  animation-name: change-width;
  animation-duration: 7s;
  animation-timing-function: linear;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**试着编辑它**][51]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  The `linear` timing function applied a consistent speed to the `div`'s animation.
4.  We created `change-width`'s @keyframes ruleset.
5.  We defined two keyframes for browsers to apply when the `div`'s animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will create a smooth seven-second animation from `change-width`'s first keyframe to its last.

Let's see another example.

#### How to animate an element's width change using an ease-in-out and a linear speed

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**试着编辑它**][52]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will create a smooth seven-second animation from `change-width`'s first keyframe to its last.

### What is the CSS `animation-delay` property?

The CSS `animation-delay` property defines how long browsers should wait before starting an animation.

In other words, use `animation-delay` to specify whether the animation should start immediately from the beginning, immediately from a specific time, or later (after some delay).

**注意以下几点：**

-   The `animation-delay` property must be in milliseconds (ms) or seconds (s) units.
-   `0s` is `animation-delay`'s default value. It causes the animation to start once browsers apply it to an HTML element.
-   A negative value causes the animation to start immediately from the specified time. For instance, suppose an element's `animation-delay` value is `-3s`. In that case, the animation will begin immediately at 3 seconds.
-   A positive value causes the animation to start after the specified delay time has elapsed. For instance, suppose an element's `animation-delay` value is `3s`. In that case, the animation will begin after a 3-second delay.

Let's see some examples of the `animation-delay` property.

#### How to animate an element's width change with a four-second delay

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
  animation-delay: 4s;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**试着编辑它**][53]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` elements.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  The `animation-delay` property applied a four-second (`4s`) delay to the starting time of the `second-div`'s animation.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will delay the `second-div`'s animation for four seconds while starting the `first-div`'s animation immediately.

Below is another example of the `animation-delay` property.

#### How to animate an element's width change from the fourth-second mark of the animation sequence

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
  animation-delay: -4s;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**试着编辑它**][54]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` elements.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  The `animation-delay` property makes the `second-div`'s animation start from the fourth-second mark of the animation sequence.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will start the `second-div`'s animation immediately at the fourth-second mark.

### What is the CSS `animation-iteration-count` property?

The CSS `animation-iteration-count` property defines the number of times browsers should repeat an animation.

**注意以下几点：**

-   `1` is `animation-iteration-count`'s default value.
-   The `animation-iteration-count` property accepts non-integer values—for instance, `0.5` tells browsers to play half of a single animation cycle.
-   `animation-iteration-count` does _not_ accept negative values.
-   An `infinite` value means browsers should repeat the animation forever.

Below are some examples.

#### How to animate an element's width change with a two-cycle iteration

```css
div {
  width: 70px;
  height: 50px;
  background-color: purple;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
}

@keyframes change-width {
  from {width: 70px;}
  to {width: 100%;}
}
```

[**试着编辑它**][55]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation twice.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will run the `div`'s animation in two cycles.

Below is another example of the `animation-iteration-count` property.

#### How to animate an element's width change with an infinite iteration

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][56]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at its zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will run the `div`'s animation infinitely.

### What is the CSS `animation-direction` property?

The CSS `animation-direction` property specifies whether the animation's first iteration should run forward or backward. It also defines whether browsers should alternate the direction of subsequent iterations.

The values `animation-direction` accepts are:

-   `normal`: Play the animation in the normal direction (that is, forward). `normal` is `animation-direction`'s default value.
-   `reverse`: Play the animation in the reverse direction (backward).
-   `alternate`: Play the first animation cycle in the normal direction. Then, alternates the subsequent iterations between the backward and forward directions.
-   `alternate-reverse`: Play the first animation cycle in the reverse direction. Then, alternates the subsequent iterations between the forward and backward directions.

Below are some examples.

#### How to animate an element's width change while starting each animation cycle backward

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][57]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property starts each animation cycle in reverse (backward).
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Below is another example of the `animation-direction` property.

#### How to animate an element's width change while alternating the animation's direction

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][58]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property alternates the direction of each cycle's animation.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

### What is the CSS `animation-play-state` property?

The CSS `animation-play-state` property specifies whether the browser is running or has paused a specific animation.

The values the `animation-play-state` property accepts are:

-   `running`: Specifies that the browser is running the animation. `running` is `animation-play-state`'s default value.
-   `paused`: Specifies that the browser has paused the animation.

**Here's an example:**

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

div:hover {
  animation-play-state: paused;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][59]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property alternates the direction of each cycle's animation.
6.  We used the `animation-play-state` on the `div`'s hover [pseudo-class][60] to pause the animation whenever users move their mouse over the `div` element.
7.  We created `change-width`'s @keyframes ruleset.
8.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

### What is the CSS `animation-fill-mode` property?

The CSS `animation-fill-mode` property defines the styles browsers should apply to an element before (or after) its animation runs.

The values the `animation-fill-mode` property accepts are:

-   `none`: Browsers will apply _no_ style to the element before or after the animation runs. `none` is `animation-fill-mode`'s default value.
-   `forwards`: The element will retain the last keyframe's style declarations when the animation ends. (Note: The `animation-direction` and `animation-iteration-count` properties determine the last keyframe.)
-   `backwards`: The element will retain the first keyframe's style declarations during the `animation-delay` period. (Note: The `animation-direction` property determines the first keyframe.)
-   `both`: Browsers will apply both the forwards and backwards rules. Therefore, the animation properties will extend in both directions.

Below are some examples.

#### How to style an element after its animation ends

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][61]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to retain the last keyframe's style declarations when the animation ends.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Below is another example of the `animation-fill-mode` property.

#### How to style an element during its animation delay period

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: backwards;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][62]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to retain the first keyframe's style declarations during the `animation-delay` period.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Let's see a third example of the `animation-fill-mode` property.

#### How to style an element during its animation delay and after the animation

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**试着编辑它**][63]

在上面片段中我们做了什么：

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to apply both the forwards and backwards rules.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to use when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

## What is the CSS `animation` Property?

We use the `animation` property as a shorthand for:

-   `animation-name`
-   `animation-duration`
-   `animation-timing-function`
-   `animation-delay`
-   `animation-iteration-count`
-   `animation-direction`
-   `animation-play-state`
-   `animation-fill-mode`

In other words, instead of writing:

```css
div {
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-play-state: running;
  animation-fill-mode: both;
}
```

You can alternatively use the `animation` property to shorten your code like so:

```css
div {
  animation: 5s ease-in-out 2s 3 alternate both running change-width;
}
```

[**试着编辑它**][64]

Here is the `animation` property's syntax:

```css
animation: animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state animation-name;
```

**Note:**

-   The way you arrange the time values is essential. Browsers read the first time-value as `animation-duration`. And they assign the second one to `animation-delay`.
-   It is best to list `animation-name` last. Otherwise, browsers may assign the `animation-name`'s value to other properties.
-   You can apply multiple `@keyframes` [rulesets][65] to an element using the `animation` property. Here's an example:

```css
div {
  width: 70px;
  height: 70px;
  background-color: green;
  animation: 
    5s ease-in-out 3s 3 alternate both change-width, 
    5s 3s infinite alternate both change-shape, 
    5s 3s infinite rotate-hue;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}

@keyframes change-shape {
  from {border-radius: 0%; border: 1px solid blue;}
  to {border-radius: 50%; border: 7px solid green;}
}

@keyframes rotate-hue {
  from {filter: hue-rotate(0deg);}
  to {filter: hue-rotate(360deg);}
}
```

[**试着编辑它**][66]

The snippet above applied three `@keyframes` rulesets to the `div` element using commas (`,`) to separate each `@keyframes`' configurations.

**Note:** We used the [`hue-rotate()`][67] function to rotate the `div`'s colors.

## Important Stuff to Know about CSS Transitions and Animations

1.  You can't animate all CSS properties. Have a look at MDN's [Animatable CSS properties][68] article to see the ones you can animate.
2.  CSS transitions and animations are [expensive operations][69] for most CSS properties—except `opacity` and `transform`. In other words, applying transitions (or animations) to any CSS box model property is inherently a [CPU-intensive][70] task. Therefore, animate only `opacity`, and `transform` properties if you are concerned about your page's performance.
3.  Be mindful of the [layout repainting issues][71] that CSS transitions may cause through your elements' stacking order.

## Wrapping up

In this article, we discuss the differences between CSS transitions and animations. We also used examples to discuss how to use them.

Thanks for reading.

### And here's a useful React TypeScript resource

I wrote a book about [Creating NPM Packages][72]!

It is a beginner-friendly book that takes you from zero to creating, testing, and publishing NPM packages like a pro.

[![Creating NPM Package Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2023/09/creating-npm-package-banner-codesweetly.png)][73]

---

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][74]

O-sweet-programming, my interest is to make you sweeter for all.

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][75]

[1]: /news/tag/css/
[2]: /news/author/oluwatobiss/
[3]: https://codesweetly.com/css-pseudo-selectors
[4]: #what-are-css-transitions
[5]: #categories-of-css-transition-properties
[6]: #what-are-the-required-css-transition-properties
[7]: #what-is-the-css-transition-property
[8]: #what-is-the-css-transition-duration-property
[9]: #examples-of-the-required-css-transition-properties
[10]: #what-are-the-optional-css-transition-properties
[11]: #what-is-the-css-transition-timing-function-property
[12]: #what-is-a-css-transition-delay-property
[13]: #examples-of-the-optional-css-transition-properties
[14]: #shorthand-for-defining-the-css-transition-properties
[15]: #what-is-css-animation
[16]: #components-of-css-animations
[17]: #what-are-css-keyframes
[18]: #what-are-css-animation-properties
[19]: #what-is-the-css-animation-name-property
[20]: #what-is-the-css-animation-duration-property
[21]: #what-is-the-css-animation-timing-function-property
[22]: #what-is-the-css-animation-delay-property
[23]: #what-is-the-css-animation-iteration-count-property
[24]: #what-is-the-css-animation-direction-property
[25]: #what-is-the-css-animation-play-state-property
[26]: #what-is-the-css-animation-fill-mode-property
[27]: #what-is-a-css-animation-property
[28]: #important-stuff-to-know-about-css-transitions-and-animations
[29]: #wrapping-up
[30]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-dsymqf
[31]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ufwgbu
[32]: https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
[33]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-cq27rd
[34]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-huvkzp
[35]: https://www.cssportal.com/css-cubic-bezier-generator/
[36]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-tqzgmf
[37]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-1gqwai
[38]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ejjufi
[39]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-vtvbpo
[40]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ajygzm
[41]: https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
[42]: https://codesweetly.com/css-ruleset
[43]: https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule
[44]: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event
[45]: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
[46]: https://codesweetly.com/css-animations-explained#what-is-an-animation-fill-mode-property-in-css
[47]: https://codesweetly.com/try-it-sdk/css/css-animations/js-h6mb4k
[48]: https://codesweetly.com/css-ruleset
[49]: https://codesweetly.com/try-it-sdk/css/css-animations/js-prumgo
[50]: https://www.cssportal.com/css-cubic-bezier-generator/
[51]: https://codesweetly.com/try-it-sdk/css/css-animations/js-tzwrdc
[52]: https://codesweetly.com/try-it-sdk/css/css-animations/js-janmqa
[53]: https://codesweetly.com/try-it-sdk/css/css-animations/js-iidpmk
[54]: https://codesweetly.com/try-it-sdk/css/css-animations/js-6xga4t
[55]: https://codesweetly.com/try-it-sdk/css/css-animations/js-vbcswe
[56]: https://codesweetly.com/try-it-sdk/css/css-animations/js-p1zwk5
[57]: https://codesweetly.com/try-it-sdk/css/css-animations/js-d2n3zt
[58]: https://codesweetly.com/try-it-sdk/css/css-animations/js-ld9kms
[59]: https://codesweetly.com/try-it-sdk/css/css-animations/js-kbommn
[60]: https://codesweetly.com/css-pseudo-selectors
[61]: https://codesweetly.com/try-it-sdk/css/css-animations/js-lkc7mw
[62]: https://codesweetly.com/try-it-sdk/css/css-animations/js-nfmq3r
[63]: https://codesweetly.com/try-it-sdk/css/css-animations/js-gbypmt
[64]: https://codesweetly.com/try-it-sdk/css/css-animations/js-37ccew
[65]: https://codesweetly.com/css-ruleset
[66]: https://codesweetly.com/try-it-sdk/css/css-animations/js-4lyg4d
[67]: https://www.quackit.com/css/functions/css_hue-rotate_function.cfm
[68]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
[69]: https://codesweetly.com/web-tech-terms-e#expensive-operation-computing
[70]: https://codesweetly.com/web-tech-terms-c#cpu-intensive
[71]: https://dzhavat.github.io/2021/02/18/debugging-layout-repaint-issues-triggered-by-css-transition.html
[72]: https://amzn.to/3Pa4bI4
[73]: https://amzn.to/3Pa4bI4
[74]: /news/author/oluwatobiss/
[75]: https://www.freecodecamp.org/learn/