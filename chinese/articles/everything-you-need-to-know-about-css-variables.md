> * 原文地址：[Everything you need to know about CSS Variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
> * 原文作者：[Emmanuel Ohans](https://www.freecodecamp.org/news/author/emmanuel/)
> * 译者：LolaWei
> * 校对者：

![Everything you need to know about CSS Variables](https://cdn-media-1.freecodecamp.org/images/1*Im5WsB6Y7CubjWRx9hH7Gg.png)

很多编程语言都支持变量，但遗憾的是， CSS 从一开始就缺少对本地变量的支持。

你写 CSS 吗？除非你使用预处理器 Sass，否则你无法使用变量。 

Sass 这样的预处理器将变量使用作为其主要的销售卖点，这也是我们值得一试的理由，而且是十足的理由。

好吧，其实网页发展很快，我可以很高兴地告诉你们 **CSS现在也支持变量了**。

尽管预处理器支持更多功能，但是添加CSS变量也是一个很好的选择，这会使网页开发发展得更快。

在本指南中，我将向你展示如何在 CSS 中使用变量，以及如何使用它们能让你的工作更加轻松。

### 你会学习到什么？

我将首先向你介绍CSS变量的基础知识。如果你想要了解 CSS 变量，都要从这里开始学起。

学习基础知识很酷，但更酷的是将这些基础知识用于构建实际应用。

因此，我将向您展示如何构建3个项目，从而来介绍 CSS 变量及其易用性。现在我们来快速浏览这 3 个项目。

#### 项目 1：使用 CSS 变量创建变化组件

你可能目前正在创建项目。不管你使用的是 React，Angular还是Vue， CSS 变量都会简化创建过程。

![](https://cdn-media-1.freecodecamp.org/images/r-nxpw6nKfFcP2qKc1kazVf-I73jUwFtSEBW)

使用 CSS 变量创建变化组件

可在[Codepen][1]上查看项目

#### 项目 2 ：使用 CSS 变量设置主题风格 

你可能在其他地方看到过类似功能。我会向你展示，使用 CSS 变量可以很轻松地创建全网站主题。

![](https://cdn-media-1.freecodecamp.org/images/bgLNFnk5dAvvsgFM1nOQgu0Atr2zBGHEDwl7)

使用 CSS 变量设置全站主题风格

可在[Codepen][2]上查看项目

#### 项目 3 ：创建 CSS 变量“卡座” 

这是最后一个项目，不要在意它的名字，我实在想不出更好的名字了。

![](https://cdn-media-1.freecodecamp.org/images/wgeg31Oo2VNWSckH5knbYZHR3TwMk2xGbTLU)

动态更换显示框颜色。

观察一下显示框颜色是如何动态改变的，以及当拖动显示条时，显示框也在实现 3D 旋转。

![](https://cdn-media-1.freecodecamp.org/images/tZSo5HlypOi0UxMK-T4Rp0QbuKpBs4nTCZqR)

该项目展示了如何便捷地使用 JavaScript 来更新 CSS 变量和响应式效果。（and the reactive goodies you get with it.）

#### 学习过程将非常有趣！

花点时间在 [Codepen][3]上享受乐趣吧。

注意：本文假设你已熟练掌握了 CSS，如果你不是很了解CSS，或者想学习如何创建令人瞠目结舌的 UI，我建议你参加我的[高级CSS课程][4] (包括85课的付费课程)，这篇文章即摘自这门课程。< /厚着脸皮做广告咯> ？

### 为什么变量如此重要？

如果这是你第一次了解预处理器中的变量或本地本地 CSS，那么请看一下理由，进而了解变量为何如此重要。

#### **理由一：增强代码可读性**

无需多说，你可以快速地判断出变量是如何增强代码库的可读性与可维护性的。

#### **理由二：易于跨大型文件修改

如果你将所有常量保存在一个单独的文件中，那么当你想要更改一个变量时，便不必跳过数千行代码，使用变量之后即可简单实现。你只需要改动一个地方即可。

#### **理由三：快速定位错误代码**

在一行行的代码中寻找错误是一件痛苦的事情。如果这个错误是由于一个简单的拼写错误造成的，那就更麻烦了，因为它们很难被发现。但合理使用变量便不会出现这些问题。

为此，使用变量最大的优势即增强可读性和可维护性。

感谢 CSS 变量，现在我们可以使用原生 CSS 也可实现这些功能。

### 定义 CSS 变量

我先从你可能最熟悉的东西谈起吧：Javascript 中的变量。

我们可能这样来声明一个简单的 Javascript变量：
```
var amAwesome;
```

之后你可以赋值给这个变量：

```
amAwesome = "awesome string"
```

在 CSS 中，使用双破折号引出 CSS 变量。

```
/*你能看出该代码块中哪个是 CSS 变量吗？ */.block { color: #8cacea;--color: blue}
```

![](https://cdn-media-1.freecodecamp.org/images/FCjHzPCqE-7rA9iKu5aGF7rojUNRx-s0Tzm1)

CSS 变量也叫作 “自定义属性”

### 考虑 CSS 变量的作用范围

你还要注意一件事。There’s one more thing to point your attention to.

请记住，在 Javascript 中，变量都有作用范围。可能是全局 `全局` 变量，也有可能是 `局部`  变量。

使用 CSS 变量也要注意其作用范围。

看看下面这个例子：

```
:root {  --main-color: red}
```

`:root` 选择器允许你定位于 DOM 或文档树中最高级别的元素。

明白了吗？

![](https://cdn-media-1.freecodecamp.org/images/XjRjOOsd5x9tj7-HtCx5CxhWQqfS-Ih9brdo)

局部与全局变量

### 例一

假设你想创建一个 CSS 变量，该变量定义了主题网站的颜色。

你该怎么做呢？

1\.首先使用`:root`创建全局变量。

```
:root { }
```

2\. 定义变量

```
:root { --primary-color: red}
```

记住，CSS 变量前要加双破折号，比如 `--color`。

这很容易。

### 使用 CSS 变量

一旦定义了变量并为其赋值，就可以继续在属性值中使用它。

不过有一点问题。

如果你习惯于使用预处理器，那么你肯定习惯于通过引用变量名来使用它。例如:

```
$font-size: 20px.test {  font-size: $font-size}
```

但如果你使用原生 CSS 变量，那么情况会稍许不同。你使用`var()`函数来指代变量。

还是使用上面的例子，如下是使用 CSS 变量的用法：

```
:root {  --font-size: 20px}.test {  font-size: var(--font-size)}
```

两者非常不同

![](https://cdn-media-1.freecodecamp.org/images/1AMhf-NdKdLdzxW45VtU6uwfaZjWfWcXF3wl)

记住，要使用 var()函数。

一旦你解决了这个问题，你就会越来越爱CSS变量！

另一个重要的注意事项是，不同于 Sass (或其他预处理器) 中的变量————你可以在很多地方使用这些变量，并按照你想要的方式进行计算————你需要小心地使用 CSS 变量。你通常会将它们设置为属性值。


```
/*this is wrong*/.margin {--side: margin-top;var(--side): 20px;}
```

![](https://cdn-media-1.freecodecamp.org/images/bBkez6wqzvxDXUGNyyyLdHbN4ebWs9qcCPDB)

声明属性名无效，因此出现了语法错误。

你也无法做数学计算。你需要 CSS  `calc()` 函数。我将在接下来的过程中讨论示例。

```
/*this is wrong */.margin {--space: 20px * 2;font-size:  var(--space);  //not 40px}
```

如果你一定要做数学计算，那么像这样使用 calc() 函数。

```
.margin {--space: calc(20px * 2);font-size:  var(--space);  /*equals 40px*/}
```

### 值得一提的属性

以下是值得注意的一些问题。

#### 1\. 自定义属性是普通属性，所以我们可以在任何元素中声明自定义属性。

在段落、section、aside、root甚至pseudo元素上声明它们，它们会像预期的那样工作。


![](https://cdn-media-1.freecodecamp.org/images/EOJ56i9qnkGPl1-I19u3TILcrJq8Ma-5R99s)

自定义属性与普通属性会发挥相同的作用

#### 2\. CSS 属性具有继承性与级联性 

且看下面的例子：

```
div {  --color: red;}div.test {  color: var(--color)}div.ew {  color: var(--color)}
```

正如普通变量一样，  `--color` 变量的值会继承原来的div的属性值。

![](https://cdn-media-1.freecodecamp.org/images/g-kAkNulNHQGkMd9vst3XuTG5kvoJJ2IfVff)

#### 3\. 可向 CSS 变量添加条件规则，如  `@media`

同其他属性一样，你可以使用  `@media` 或其他条件规则来改变 CSS 变量的值。

举个例子，以下代码可改变变量的值，即 gutter 属性在大型设备中会发生改变。

```
:root { --gutter: 10px }@media screen and (min-width: 768px) {    --gutter: 30px}
```

![](https://cdn-media-1.freecodecamp.org/images/IFwkEmf33YCyC19hjtMZwPgwA3VnwKR6bgvG)

这对于响应式设计大有裨益

#### 4\. CSS 变量可用于 HTML 的样式属性中。

你可以在行内设置变量值，它便会照常工作。

```
<!--HTML--><html style="--color: red"><!--CSS-->;body {  color: var(--color)}
```

![](https://cdn-media-1.freecodecamp.org/images/bZgNRz8ZoSoLMcWPcmPnivMx8p7035cx6p5E)

在行内设置变量值

注意，CSS变量是区分大小写的。为节省压力，我都是用的小写，你大可不必。

```
/*these are two different variables*/:root { --color: blue;--COLOR: red;}
```

### 解决多重声明

正如其他的变量一样，标准式层叠会解决多重声明。
让我们来看一个例子：

```
/*定义变量*/:root { --color: blue; }div { --color: green; }#alert { --color: red; }/*u使用变量 */* { color: var(--color); }
```

我们多次声明了以上变量，下面元素的颜色到底会变成什么样子呢？

```
<;p>What's my color?</p><div>and me?</div><div id='alert'>  What's my color too?  <p>color?</p></div>
```

你能猜出来吗？

第一段将会是 `蓝色` 的。因为没有直接给 `p` 元素设置变量，所以它会继承 `:root` 中对颜色的定义。

```
:root { --color: blue; }
```

第一个 `div` 元素会是  `绿色` 的。这非常明显。因为在 `div`元素上我们设置了颜色变量。

```
div { --color: green; }
```

ID名字为 `alert` 的  `div` 元素不是绿色的，而是 `red`的。

```
#alert { --color: red; }
```

在ID中设置的颜色属性会覆盖掉原来的属性。因此，一旦声明，它就会覆盖掉该元素原来的属性。 `#alert` 选择器比较特殊。

最后， `#alert` 中的 `p` 将会变成 `红色`。

因为在该段落元素中并没有声明变量，所以你可能会认为该段落会变成 `蓝色`，因为我们在 `:root`中定义了蓝色。

```
:root { --color: blue; }
```

和其他的属性一样，CSS 变量具有继承性，子元素会继承父元素的属性值，  `#alert`

```
#alert { --color: red; }
```

![](https://cdn-media-1.freecodecamp.org/images/65xpwkEjRm90CKZEWAbaX66cCHdl46xWr32C)

这就是以上问题的答案啦。

### 解决循环依赖问题

循环依赖会发生在以下情境中：

1\.  当某变脸依赖于自己的时候。即：它使用`var()` 指向了自己。  

```
:root {  --m: var(--m)}body {  margin: var(--m)}
```

2\. 当两个或两个以上的变量互相指向彼此时。

```
:root {  --one: calc(var(--two) + 10px);  --two: calc(var(--one) - 10px);}
```

小心不要在写代码的时候出现循环依赖的情况。

### 使用无效变量会发生什么？

不考虑语法错误，无效的  `var()`  会默认变为初始值或继承原来所定义的值。

看以下的例子:

```
:root { --color: 20px; }p { background-color: red; }p { background-color: var(--color); }
```

![](https://cdn-media-1.freecodecamp.org/images/ExHNombXi1ObmK5sc8WtbTSttIJ7MNGujbZP)

如上所示,  变量 `--color` 写在了 `var()` 后面， 但是属性值 `background-color: 20px` 却是无效的，因为  `background-color`  并没有继承性，所以它的值会默认变成 `initial`  值，即  `transparent`.

![](https://cdn-media-1.freecodecamp.org/images/tdeD7sLFRUvKCdXP2Y6SXuQCakTcv-hV5PNR)

注意，如果你直接写了 `background-color: 20px` ，那么对背景颜色的声明即是无效的。那么该元素将会使用前面元素对颜色的声明，即红色。 

![](https://cdn-media-1.freecodecamp.org/images/24FLLWAoCML1VC4G95GQ1IGLQnPuwoJ2AoGA)

当你自己写声明时，情况就不一样了。

### 小心创建单个值

当你像下面这样设置属性值时，`20px` 会被认为是单个值。

```
font-size: 20px
```

简单点说，这里的 `20px` 被看做是一个整体。 

当用CSS变量来创建单位时，你需要小心点。

举个例子，看看下面这个代码块：
```
:root { --size: 20}div {  font-size: var(--size)px /*提醒*/}
```

你可能希望 `font-size`被设置为`20px`, 但是你错了。

浏览器会把它翻译为 `20 px`。

注意 `20` 后面有空格。

因此，如果你不得不使用单位时，要把它在变量中写全。举个例子，  `--size: 20px`, 或者使用or `calc` 函数， `calc(var(--size) * 1px)` ，这里的`--size`即等于 `20`。

如果你没看懂，不要担心。我会在下一个例子中再仔细解释一遍。

### 实战环节！

终于到了我们期待已久的部分了。

我会带你写几个有用的项目，来看看我们之前讨论的CSS变量的实际用法。

让我们开始吧。

### 项目1: 使用CSS变量创建不同的组件。

想象自己需要两个不同的按钮，两个按钮的基础样式相同，但有一点区别。

![](https://cdn-media-1.freecodecamp.org/images/Em6yJKVwIi9tjgjAw6vbF1Ci5H4ARS0A9acL)

在这个例子中，两者不同的属性值为  `background-color` 和 `border-color` 。

所以，你想怎么来做呢？

一般来说，我们都会这么做。

创建一个基础样式，比如说 `.btn`，然后设置不同的属性值，下面是一个例子：

```
<button class="btn">Hello</button&gt;<button class="btn red">Hello</button>
```

`.btn`  包含按钮的基础样式。例子如下：

```
.btn {  padding: 2rem 4rem;  border: 2px solid black;  background: transparent;  font-size: 0.6em;  border-radius: 2px;}
```

```
/*悬浮状态*/.btn:hover {  cursor: pointer;  background: black;  color: white;}
```

所以，我们怎么来处理二者的不同呢？

我们这样来做：

```
/* 处理变化 */.btn.red {  border-color: red}.btn.red:hover {  background: red}
```

你看到了吗？我们一直在复制代码。这很好，但是我们可以用CSS变量来解决这个问题。

第一步怎么做呢？

使用CSS变量替换要发生变化得颜色，不要忘记为变量设置替换值！

```
.btn {   padding: 2rem 4rem;   border: 2px solid var(--color, black);   background: transparent;   font-size: 0.6em;   border-radius: 2px; }
```

```
 /*悬浮*/  .btn:hover {  cursor: pointer;   background: var(--color, black);   color: white; }
```

当你设置 `background:  **var(--color, black)**` 时，你想让背景颜色变成 `--color`变量的值。但是，如果你的变量不存在，该元素就会自动使用替换值 `**black**`。

这就是你如何设置默认属性值的方法，跟在 JavaScript 或其他的编程语言中如出一辙。

好戏才刚刚开始。

有了变化，你可以直接这样写下面的代码

```
.btn.red {   --color: red }
```

就是这样，现在  `.red`  类被使用，浏览器会注意到一个不同的 `--color` 变量值，然后改变按钮的外观。

当你花费大量时间构建可复用组件时，使用变量非常好用。

我们来对比看一下：

![](https://cdn-media-1.freecodecamp.org/images/gmEzlvRN7KiaDVWEy2ZUE7kI5a5PpAAJs3gU)

使用 CSS 变量和不使用 CSS 变量

如果你还想有更多变化，这可以大量节省敲代码的时间。

![](https://cdn-media-1.freecodecamp.org/images/OUyVLhYwkveuuaSbIAG8QHoo0cgNtqPrqWhi)

你看到不同了吗？

### 项目二: 用CSS变量定制主题网站


我敢说，你之前肯定浏览过类似的网站。主题网站会让用户觉得自己可以定制主题，好像自己在主管该网站一样。
以下是一个最基础的例子。


![](https://cdn-media-1.freecodecamp.org/images/LsBPxBoN-bc9PZorRq39kklAE5yTiSmkgm6I)


那么，使用 CSS 变量会让创建过程变得多么容易呢？

我们来看看。

在开始之前，我想说，这个例子非常重要。在这个例子中，我会介绍如何使用 Javascript 来更新 CSS 变量。

这非常有趣！

你会喜欢的。

### 我们到底想做什么

CSS变量的魅力在于其更新的及时性。一旦你修改了某个CSS变量，其所在的属性内容都会发生变化。

现在我们用图片来解释概念，这张图片展示了整个例子的修改过程。

![](https://cdn-media-1.freecodecamp.org/images/OmRYAlINfOHcYWrLDzBJfjJkI6ejbsg5Tstc)

流程图

所以，我们需要用 JavaScript 写一个鼠标点击事件的监听器。

在这个简单的例子中，整个页面的背景和文本颜色都是基于 CSS 变量写的。

当你点击左上方的任意一个按钮时，他们就会改变 CSS 变量的值。因此，页面的背景颜色也会发生变化。

该项目的原理就是这样。

除此之外，我们怎么改变 CSS 变量的值呢？


![](https://cdn-media-1.freecodecamp.org/images/UIQ3ij9Cy-iU3rO5OXkQc1uyPhMPGuHD1zXb)

在行内设置变量值

即便在行内为 CSS 变量设值，CSS 变量的值也会发生改变。使用Javascript，我们可以为根元素设置行内样式。

你明白了吗？

我说的太多了——现在让我们做点实事吧。

### Html 结构

以下是我们需要的 Html 代码：

```
<div class="theme">  <button value="dark">dark</button>  <button value="calm">calm</button>  <button value="light">light</button></div><article>...</article>
```

这串代码中有三个按钮元素，它们都继承自类名为 `.theme` 的父元素。为了简化我没有写`article`  元素， `article`元素包含页面的主要内容。

### 为页面定制风格

为了成功实现该项目，我们首先要改变页面风格。方法很简单。

这次，我们不再设置 `background-color`  和 `color` 属性, 而是使用变量。

我的意思是这样写：

```
body {  background-color: var(--bg, white);  color: var(--bg-text, black)}
```

我这样做的原因很明显。当按钮被按下时，我们将会改变这两个 CSS 变量的值。

这样的话，整个页面的风格都会发生变化。这绝对是小菜一碟。

![](https://cdn-media-1.freecodecamp.org/images/lbU62-myh4lQakl9DoOYEaetbRLhPt4NZP01)

现在让我们从 JavaScript开始吧。

#### 使用 JavaScript

我会把该项目需要用到的JavaScript代码写在下面：

```
const root = document.documentElement const themeBtns = document.querySelectorAll('.theme > button')themeBtns.forEach((btn) => {  btn.addEventListener('click', handleThemeUpdate)})function handleThemeUpdate(e) {  switch(e.target.value) {    case 'dark':       root.style.setProperty('--bg', 'black')      root.style.setProperty('--bg-text', 'white')      break    case 'calm':        root.style.setProperty('--bg', '#B3E5FC')       root.style.setProperty('--bg-text', '#37474F')      break    case 'light':      root.style.setProperty('--bg', 'white')      root.style.setProperty('--bg-text', 'black')      break  }}
```

别让这串代码吓到了你，这比你想的容易多了。

首先，获取根元素， `const root = document.documentElement`

这里的根元素是  `HTML`  元素。你会理解这为什么重要了，如果你仍旧不理解，那么请记住，我们要在这一步里改变 CSS 变量的值。 

除此之外，我们还要获取按钮元素， `const themeBtns = document.querySelectorAll('.theme > button`)

`querySelectorAll`方法会获取伪数组。之后我们遍历该伪数组数组，然后添加鼠标点击的监听器。  

代码如下：

```
themeBtns.forEach((btn) => {  btn.addEventListener('click', handleThemeUpdate)})
```

 `handleThemeUpdate` 函数在哪里呢？我接下来会继续讨论。

我们需要为每一个按钮的点击事件都绑定 `handleThemeUpdate` 函数。而且我们需要为每一个按钮的点击事件分配正确的操作，这非常重要。

基于此，我们还要使用一个  `operator`  来进行转换，并基于被点击的按钮的属性值来采取相应的操作。

再看一眼JavaScript的代码块吧，现在你会更加理解代码块的含义的。

### Project 3: Building the CSS Variable Booth ?

In case you missed it, here’s what we’ll build:

![](https://cdn-media-1.freecodecamp.org/images/IgKvTxKSenWIErNZ4Im96FCV65MJPaf4qfad)

Remember that the color of the boxes are dynamically updated, and that the box container is rotated in 3d space as the range input is changed.

![](https://cdn-media-1.freecodecamp.org/images/UZNu2ymN0vI2VH4en9NLaJ4T22l8UEWnPi2i)

You can go ahead and play with it on  [Codepen][5].

This is a superb example of updating CSS variables with JavaScript and the reactivity that comes with it.

Let’s see how to build this.

#### The Markup

Here are the needed components.

1.  A range input
2.  A container to hold the instructions
3.  A section to hold a list of other boxes, each containing input fields

![](https://cdn-media-1.freecodecamp.org/images/FHA6xhsFiPCoGpBB5VLcKzoggivesElFAkWQ)

The markup turns out simple.

Here it is:

```
<main class="booth">  <aside class="slider">    <label>Move this ? </label>    <input class="booth-slider" type="range" min="-50" max="50" value="-50" step="5"/>  </aside>    <section class="color-boxes">    <div class="color-box" id="1"><input value="red"/></div>    <div class="color-box" id="2"><input/></div>    <div class="color-box" id="3"><input/></div>    <div class="color-box" id="4"><input/&gt;</div&gt;    <div class="color-box" id="5"><input/></div>    <div class="color-box" id="6">;<input/>&lt;/div>  </section>  <footer class="instructions">    ?? Move the slider<br/>    ?? Write any color in the red boxes   </footer></main>  
```

Here are a few things to point your attention to.

1.  The range input represents values from  `-50`  to  `50`  with a step value of  `5`  Also, the value of the range input is the minimum value,  `-50`
2.  If you aren’t sure how the range input works, check it out on  [w3schools][6]
3.  Note how the section with class  `.color-boxes`  contains other  `.color-box`containers. Within these containers exist input fields.
4.  It is perhaps worth mentioning that the first input has a default value of red.

Having understood the structure of the document, go ahead and style it like so:

![](https://cdn-media-1.freecodecamp.org/images/pY28lnZFx4xvar807GegIg4HIn4DNcBAG5rE)

1.  Take the  `.slider`  and  `.instructions`  containers out of the document flow. Position them absolutely.
2.  Give the  `body`  element a sunrise background color and garnish the background with a flower in the bottom left corner
3.  Position the  `color-boxes`  container in the center
4.  Style the  `color-boxes`  container

Let’s knock these off.

The following will fix the first task.

```
/* Slider */.slider,.instructions {  position: absolute;  background: rgba(0,0,0,0.4);  padding: 1rem 2rem;  border-radius: 5px}.slider {  right: 10px;  top: 10px;}.slider > * {  display: block;}/* Instructions */.instructions {  text-align: center;  bottom: 0;  background: initial;  color: black;}
```

The code snippet isn’t as complex as you think. I hope you can read through and understand it. If not, drop a comment or tweet.

Styling the  `body`  is a little more involved. Hopefully, you understand CSS well.

Since we aspire to style the element with a background color and a background image, it’s perhaps the best bet to use the  `background`  shorthand property to set multiple backgrounds.

Here it is:

```
body {  margin: 0;  color: rgba(255,255,255,0.9);  background: url('http://bit.ly/2FiPrRA') 0 100%/340px no-repeat, var(--primary-color);  font-family: 'Shadows Into Light Two', cursive;}
```

The  `url`  bit is the link to the sunrise flower.

The next set of properties  `0 100%`  represent the background position of the image.

Here’s an illustration of how CSS background positioning works:

![](https://cdn-media-1.freecodecamp.org/images/4rZugtEKFeay00FsfDXFuXyiHA1Amf1iG2Jd)

From:  [the advanced guide to CSS][7]

![](https://cdn-media-1.freecodecamp.org/images/zFcuuEu5RnrGWiG5Doqg7jS4OS-PyOh7H93v)

From:  [the advanced guide to CSS][8]

The other bit after the forward slash represents the  `background-size`  This has been set to  `340px`  If you made this smaller, the image would be smaller too.

`no-repeat`, you might figure out what that does. It prevents the background from repeating itself.

Finally, anything that comes after the comma is a second background declaration. This time we’ve only set the  `background-color`  to  `var(primary-color)`

Oops, that’s a variable.

The implication of this is that you have to define the variable. Here’s how:

```
:root {  --primary-color: rgba(241,196,15 ,1)}
```

The primary color there is the sunrise yellow color. No big deal. We’ll set some more variables in there soon.

Now, let’s center the  `color-boxes`

```
main.booth {  min-height: 100vh;    display: flex;  justify-content: center;  align-items: center;}
```

The main container acts as a flex container and rightly positions the direct child in the center of the page. This happens to be our beloved  `color-box`  container

Let’s make the color-boxes container and its children elements pretty.

First, the child elements:

```
.color-box {  padding: 1rem 3.5rem;  margin-bottom: 0.5rem;  border: 1px solid rgba(255,255,255,0.2);  border-radius: 0.3rem;  box-shadow: 10px 10px 30px rgba(0,0,0,0.4); }
```

That will do it. There’s a beautiful shadow added too. That’ll get us some cool effects.

That is not all. Let’s style the overall  `container-boxes`  container:

```
/* Color Boxes */.color-boxes {  background: var(--secondary-color);  box-shadow: 10px 10px 30px rgba(0,0,0,0.4);  border-radius: 0.3rem;    transform: perspective(500px) rotateY( calc(var(--slider) * 1deg));  transition: transform 0.3s}
```

Oh my!

There’s a lot in there.

Let me break it down.

Here’s the simple bit:

```
.color-boxes {   background: var(--secondary-color);   box-shadow: 10px 10px 30px rgba(0,0,0,0.4);   border-radius: 0.3rem;}
```

You know what that does, huh?

There’s a new variable in there. That should be taken of by adding it to the root selector.

```
:root {  --primary-color: rgba(241,196,15 ,1);  --secondary-color: red;}
```

The secondary color is red. This will give the container a red background.

Now to the part that probably confused you:

```
/* Color Boxes */.color-boxes {  transform: perspective(500px) rotateY( calc(var(--slider) * 1deg));  transition: transform 0.3s}
```

For a moment, we could simplify the value of the transform property above.

![](https://cdn-media-1.freecodecamp.org/images/JzclULDPJ-fDazCDnHaBt2Jw72HQAY3k0AjK)

For example:

```
transform: perspective(500px) rotateY( 30deg);
```

The transform shorthand applies two different functions. One, the perspective, and the other, the rotation along the Y axis.

Hmmm, so what’s the deal with the  `perspective`  and  `rotateY`  functions?

The perspective() function is applied to an element that is being transformed in 3D space. It activates the three dimensional space and gives the element depth along the z-axis.

You can read more about the perspective function on  [codrops][9].

The  `rotateY`  function, what’s the deal with that?

Upon activation the 3d space, the element has the planes x, y, z. The  `rotateY`  function rotates the element along the  `Y`  plane.

The following diagram from  [codrops][10]  is really helpful for visualizing this.

![](https://cdn-media-1.freecodecamp.org/images/nlm073Uq9QmQYLaA2A78IbeDQqMuT9qvq00n)

[Codrops][11]

I hope that blew off some of the steam.

Back to where we started.

![](https://cdn-media-1.freecodecamp.org/images/PnEnAMTI0LRrJ2ZKbF3cs70AkNdIcSEuAYDP)

When you move the slider, do you know what function affects the rotation of the  `.container-box`?

It’s the rotateY function being invoked. The box is rotated along the Y axis.

Since the value passed into the rotateY function will be updated via JavaScript, the value is represented with a variable.

![](https://cdn-media-1.freecodecamp.org/images/UAI2w26oH2IgBTljbP6GgDjQEzljccawUiz4)

So, why multiply by the variable by 1deg?

As a general rule of thumb, and for explicit freedom, it is advised that when building single tokens, you store values in your variables without units.

You can convert them to any unit you want by doing a multiplication via the  `calc`function.

![](https://cdn-media-1.freecodecamp.org/images/YmWMuiiZ8yvGpy6WHWlmquGbDGGBez4muwSN)

This allows you to do ‘whatever’ you want with these values when you have them. Want to convert to  `deg`  or as a ratio of the user’s viewport  `vw`  , you can whatever you want.

In this case, we are converting the number to have a degree by multiplying the “number” value by 1deg

![](https://cdn-media-1.freecodecamp.org/images/gXw20rbptib1kLg0FpxSEsrIKOZGlECgESrn)

Since CSS doesn’t understand math, you have to pass this arithmetic into the calc function to be properly evaluated by CSS.

Once that is done, we’re good to go. The value of this variable can be updated in JavaScript as much as we like.

Now, there’s just one bit of CSS remaining.

Here it is:

```
/* Handle colors for each color box */.color-box:nth-child(1) {  background: var(--bg-1)}.color-box:nth-child(2) {  background: var(--bg-2)}.color-box:nth-child(3) {  background: var(--bg-3)}.color-box:nth-child(4) {  background: var(--bg-4)}.color-box:nth-child(5) {  background: var(--bg-5)}.color-box:nth-child(6) {  background: var(--bg-6)}
```

So, what’s this voodoo?

First off, the nth-child selector selects each of the child boxes.

![](https://cdn-media-1.freecodecamp.org/images/WWzkEOGXTgxkDGkCJSYbgkPEtyHEEezhesXT)

There’s a bit of foresight needed here. We know we will be updating the background color of each box. We also know that this background color has to be represented by a variable so it is accessible via JavaScript. Right?

We could go ahead and do this:

```
.color-box:nth-child(1) {  background: var(--bg-1)}
```

Easy.

There’s one problem though. If this variable isn’t present, what happens?

We need a fallback.

This works:

```
.color-box:nth-child(1) {  background: var(--bg-1, red)}
```

In this particular case, I have chosen NOT to provide any fallbacks.

If a variable used within a property value is invalid, the property will take on its initial value.

Consequently, when  `--bg-1`  is invalid or NOT available, the background will default to its initial value of transparent.

Initial values refer to the values of a property when they aren’t explicitly set. For example, if you don’t set the  `background-color`  of an element, it will default to  `transparent`

Initial values are kind of default property values.

### Let’s write some JavaScript

There’s very little we need to do on the JavaScript side of things.

First let’s handle the slider.

We just need 5 lines for that!

```
const root = document.documentElementconst range = document.querySelector('.booth-slider')//as slider range's value changes, do something range.addEventListener('input', handleSlider)function handleSlider (e) {  let value = e.target.value   root.style.setProperty('--slider', value)}
```

That was easy, huh?

Let me explain just in case I lost you.

First off, keep a reference to the slider element,  `const range = document.querySelector('.booth-slider')`

Set up an event listener for when the value of the range input changes,  `range.addEventListener('input', handleSlider)`

Write the callback,  `handleSlider`

```
function handleSlider (e) {  let value = e.target.value   root.style.setProperty('--slider', value)}
```

![](https://cdn-media-1.freecodecamp.org/images/0PtXkLeMkuwE0mJxuJX3T0emkunPARGxRN8T)

`root.style.setProperty('--slider', value)`  says, get the  `root`  element (HTML) , grab its style, and set a property on it.

### Handling the color changes

This is just as easy as handling the slider value change.

Here’s how:

```
const inputs = document.querySelectorAll('.color-box > input')
```

```
//as the value in the input changes, do something.inputs.forEach(input => {  input.addEventListener('input', handleInputChange)})function handleInputChange (e) {  let value = e.target.value  let inputId = e.target.parentNode.id   let inputBg = `--bg-${inputId}`   root.style.setProperty(inputBg, value)}
```

Keep a reference to all the text inputs,  `const inputs = document.querySelectorAll('.color-box > inpu`t')

Set up an event listener on all the inputs:

```
inputs.forEach(input => {   input.addEventListener('input', handleInputChange)})
```

Write the  `handleInputChange`  function:

```
function handleInputChange (e) {  let value = e.target.value  let inputId = e.target.parentNode.id   let inputBg = `--bg-${inputId}`   root.style.setProperty(inputBg, value)}
```

![](https://cdn-media-1.freecodecamp.org/images/HX4X1oDSyXAJGMEeV2oIKX8PBbunS4i0sngB)

Phew…

That’s it!

Project’s done.

### How did I miss this?

I had completed and edited the initial draft of this article when I noticed I didn’t mention browser support anywhere. So, let me fix my mess.

Browser support for CSS variables (aka custom properties) isn’t bad at all. It’s pretty good, with decent support across all modern browsers (over 87% at the time of this writing).

![](https://cdn-media-1.freecodecamp.org/images/4ycpka14Kg2tCJLF6y3b0Zc-XHWCvbwOayAB)

[caniuse][12]

So, can you use CSS variables in production today? I’ll say yes! Be sure to check what the adoption rate is for yourself, though.

On the bright side, you can use a preprocessor like  [Myth][13]. It’ll preprocess your ‘future’ CSS into something you use today. How cool, huh?

If you have some experience using  [postCSS][14], that’s equally a great way to use future CSS today. Here’s a  [postCSS module for CSS variables][15].

That’s it. I’m done here.

### Oops, but I’ve got Questions!

![](https://cdn-media-1.freecodecamp.org/images/ofZP6Nh0aCZOu6yWtDYs9HROStLDrUOgH97D)

[Get the Ebook][16]  for offline reading, and also get a  **private**  slack invite where you can ask me anything.

That’s a fair deal, right?

Catch you later! ?

[1]: https://codepen.io/ohansemmanuel/full/PQYzvv/
[2]: https://codepen.io/ohansemmanuel/full/xYKgwE/
[3]: https://codepen.io/ohansemmanuel/full/EoBLgd/
[4]: https://bit.ly/learn_css
[5]: https://codepen.io/ohansemmanuel/full/EoBLgd/
[6]: https://www.w3schools.com/jsref/dom_obj_range.asp
[7]: http://bit.ly/learn_css
[8]: http://bit.ly/learn_css
[9]: https://tympanus.net/codrops/css_reference/transform/#section_perspective
[10]: https://tympanus.net/codrops/css_reference/transform/#section_rotate3d
[11]: https://tympanus.net/codrops/css_reference/transform/#section_rotate3d
[12]: https://caniuse.com/#search=css%20var
[13]: http://www.myth.io/
[14]: http://postcss.org/
[15]: https://www.npmjs.com/package/postcss-css-variables
[16]: https://gum.co/lwaUh
