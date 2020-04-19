> * 原文地址：[Everything you need to know about CSS Variables](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)
> * 原文作者：[Emmanuel Ohans](https://www.freecodecamp.org/news/author/emmanuel/)
> * 译者：LolaWei
> * 校对者：

![你需要知道的关于 CSS 变量的一切](https://cdn-media-1.freecodecamp.org/images/1*Im5WsB6Y7CubjWRx9hH7Gg.png)

很多编程语言都支持变量，但很遗憾， CSS 从开发之始便不支持原生变量。

你写 CSS 代码吗？那么除非利用像 Sass 这样的预处理器，否则无法使用变量。 

Sass 这样的预处理器将变量使用作为其主要的销售卖点，这也是我们值得一试的理由。

但是网站开发发展得很快，而我可以很高兴地告诉你们： **CSS 现在也支持变量了**。

尽管预处理器支持更多功能，但是 CSS 变量也不错，而且 CSS 变量会推动网站发展。

在本指南中，我将向你展示如何在 CSS 中使用原生变量，如何通过使用它让你的工作更加轻松。

### 你将学习到什么？

我会首先向你介绍 CSS 变量的基础知识。这是了解 CSS 变量的第一步。

学习基础知识很酷，但更酷的是用基础知识构建实际应用。

因此，我会教你构建 3 个项目，进而介绍 CSS 变量及其易用性。现在我们来快速浏览这 3 个项目。

#### 项目 1：使用 CSS 变量创建可变组件

目前，你可能使用 React，Angular 或 Vue 创建可变组件，但是 CSS 变量会简化创建过程。

![](https://cdn-media-1.freecodecamp.org/images/r-nxpw6nKfFcP2qKc1kazVf-I73jUwFtSEBW)

使用 CSS 变量修改元素样式

在[Codepen][1]上查看项目

#### 项目 2 ：使用 CSS 变量设置主题风格 

你可能在其他地方看到过类似功能。我会教你使用 CSS 变量轻松创建全站主题风格。

![](https://cdn-media-1.freecodecamp.org/images/bgLNFnk5dAvvsgFM1nOQgu0Atr2zBGHEDwl7)

使用 CSS 变量设置全站主题风格

在[Codepen][2]上查看项目

#### 项目 3 ：创建 CSS 变量盒

这是最后一个项目。不要在意项目名字，我实在想不出更好的名字了。

![](https://cdn-media-1.freecodecamp.org/images/wgeg31Oo2VNWSckH5knbYZHR3TwMk2xGbTLU)

盒子颜色会动态改变。

观察一下盒子颜色是如何动态改变的。调节输入值时，盒子容器会 3 维 旋转。

![](https://cdn-media-1.freecodecamp.org/images/tZSo5HlypOi0UxMK-T4Rp0QbuKpBs4nTCZqR)

该项目展示了如何便捷地使用 JavaScript 更新 CSS 变量，并展示出一个很好的交互效果。

#### 学习过程非常有趣！

花点时间在 [Codepen][3] 上享受乐趣吧。

注意：本文假设你已熟练掌握了 CSS，如果你不太解CSS，或者想学习做出炫酷的用户界面，我建议你学习我的[高级CSS课程][4] (包括85课的付费课程)，这篇文章即摘自此课程。< /厚着脸皮做广告咯> ？

### 为什么变量如此重要？

如果你尚不了解预处理器中的变量或原生 CSS 变量，那么请看以下理由。

#### **理由一：增强代码可读性**

项目过程中，你可以很快了解变量是如何增强代码库的可读性与可维护性的。

#### **理由二：易于跨大文档修改

如果所有常量都保存在单个文件中，就不需要在几千行代码里一一修改变量了。使用变量之后，你只需改动一个地方即可实现。

#### **理由三：快速定位拼写错误**

在一行行的代码中寻找错误非常痛苦。如果只是一个简单的拼写错误，那就更烦人了。因为我们很难发现小错误。但合理使用变量便可以解决这个问题。

为此，可读性与可维护性才是制胜法宝。

而 CSS 原生变量就可以提高代码可读性与可维护性。

### 定义 CSS 变量

先谈你熟悉的内容吧：Javascript 中的变量。

声明简单 Javascript 变量：

```
var amAwesome;
```

为变量赋值：

```
amAwesome = "awesome string"
```

在 CSS 中，用双破折号引出 CSS 变量。

```
/*你能找到 CSS 变量吗？ */.block { color: #8cacea;--color: blue}
```

![](https://cdn-media-1.freecodecamp.org/images/FCjHzPCqE-7rA9iKu5aGF7rojUNRx-s0Tzm1)

CSS 变量又名 “自定义属性”

###  CSS 变量的作用范围

注意：

在 Javascript 中，变量有作用范围。可能是`全局`变量或`局部`变量。

 CSS 变量同样如此。

举例如下：

```
:root {  --main-color: red}
```

使用`:root` 选择器可定位 DOM 或文档树中最高级别的元素。

这种变量即为全局变量。


![](https://cdn-media-1.freecodecamp.org/images/XjRjOOsd5x9tj7-HtCx5CxhWQqfS-Ih9brdo)

局部变量与全局变量

### 例一

假设你想创建一个 CSS 变量，该变量可定义主题网站的初始颜色。

如何操作呢？

1\.使用`:root`选择器。

```
:root { }
```

2\. 定义变量

```
:root { --primary-color: red}
```

CSS 变量前要加双破折号，如 `--color`。


### 使用 CSS 变量

一旦定义了变量并为其赋值，就可以继续在其他属性中使用它。

不过要注意一点。

如果你习惯使用预处理器，那么你肯定习惯通过引用变量名使用变量。例如:

```
$font-size: 20px.test {  font-size: $font-size}
```

但如果使用 CSS 原生变量，情况会稍有不同。需要使用`var()`函数指代变量。

还是利用上面的例子，以下是使用 CSS 原生变量的赋值方法：

```
:root {  --font-size: 20px}.test {  font-size: var(--font-size)}
```

两者大不相同。

![](https://cdn-media-1.freecodecamp.org/images/1AMhf-NdKdLdzxW45VtU6uwfaZjWfWcXF3wl)

记住：使用 var()函数。

一旦解决了这个问题，你就会越来越爱 CSS 变量！

另外要注意，不同于 Sass (或其他预处理器) 中的变量————你可以在很多地方使用这些变量，并做数学计算————但使用时要小心。大部分时候，CSS 变量用作属性值。


```
/*此写法错误*/.margin {--side: margin-top;var(--side): 20px;}
```

![](https://cdn-media-1.freecodecamp.org/images/bBkez6wqzvxDXUGNyyyLdHbN4ebWs9qcCPDB)

属性名无效，此写法语法错误。

你也无法直接使用数学运算功能。你需要 CSS `calc()`函数做数学运算。我将在接下来的案例中讨论该函数。

```
/*此写法错误 */.margin {--space: 20px * 2;font-size:  var(--space);  //not 40px}
```

如果你一定要做数学计算，那么可以这样使用 calc() 函数：

```
.margin {--space: calc(20px * 2);font-size:  var(--space);  /*equals 40px*/}
```

### 值得一提的属性

以下问题值得一提。

#### 1\. 由于自定义属性是普通属性，所以我们可以在任意元素中声明自定义属性。

在段落标签、文档区域标签、侧边栏标签、根标签甚至伪元素中声明变量即可，它们与普通属性作用相同。

![](https://cdn-media-1.freecodecamp.org/images/EOJ56i9qnkGPl1-I19u3TILcrJq8Ma-5R99s)

自定义属性与普通属性作用相同

#### 2\. CSS 属性具有继承性与级联性 

参考下面的例子：

```
div {  --color: red;}div.test {  color: var(--color)}div.ew {  color: var(--color)}
```

与普通变量相同，`--color` 变量的值会继承父盒子的属性值。

![](https://cdn-media-1.freecodecamp.org/images/g-kAkNulNHQGkMd9vst3XuTG5kvoJJ2IfVff)

#### 3\.  CSS 变量可添加条件规则，如媒体类型

与其他属性相同，使用  `@media` 或其他条件规则可改变 CSS 变量的值。

举个例子，在大屏幕上，以下代码会改变 gutter 的值：

```
:root { --gutter: 10px }@media screen and (min-width: 768px) {    --gutter: 30px}
```

![](https://cdn-media-1.freecodecamp.org/images/IFwkEmf33YCyC19hjtMZwPgwA3VnwKR6bgvG)

这对响应式设计大有裨益

#### 4\. CSS 变量用于 HTML 的样式属性。

设置行内样式：

```
<!--HTML--><html style="--color: red"><!--CSS-->;body {  color: var(--color)}
```

![](https://cdn-media-1.freecodecamp.org/images/bZgNRz8ZoSoLMcWPcmPnivMx8p7035cx6p5E)

在行内设置变量值

注意：CSS 变量区分大小写。为了方便，我都是用的小写，你可以自行选择大小写。

```
/*变量大写与小写*/:root { --color: blue;--COLOR: red;}
```

### 解决重复声明

与其他变量相同，标准级联规则可解决重复声明。

举个例子：

```
/*定义变量*/:root { --color: blue; }div { --color: green; }#alert { --color: red; }/*u使用变量 */* { color: var(--color); }
```

多次声明以上变量后，元素的颜色如何变化呢？

```
<;p>What's my color?</p><div>and me?</div><div id='alert'>  What's my color too?  <p>color?</p></div>
```

你能猜出来吗？

第一段为 `蓝色` 。因为未给 `p` 元素设置变量，所以它会继承 `:root` 中定义的颜色。

```
:root { --color: blue; }
```

第一个 `div` 元素为  `绿色` 。这很显然。因为我们使用变量指定了`div`元素颜色为绿色。

```
div { --color: green; }
```

ID 为 `alert` 的  `div` 元素不为绿色，而为 `红色`。

```
#alert { --color: red; }
```

ID 中的变量有直接作用域，其颜色属性会覆盖掉原来的属性。 `#alert` 选择器作用范围更加明确。

最后，ID 为 `alert` 的 `p` 元素为 `红色`。

因为没有为段落元素声明变量，所以你可能会认为该段落会变为 `蓝色`，因为我们在 `:root`中定义了蓝色。

```
:root { --color: blue; }
```

与其他属性相同，CSS 变量具有继承性，子元素会继承父元素 `#alert` 的属性值。
```
#alert { --color: red; }
```

![](https://cdn-media-1.freecodecamp.org/images/65xpwkEjRm90CKZEWAbaX66cCHdl46xWr32C)

答案如图所示

### 解决循环依赖

循环依赖会发生在以下情境中：

1\.  变量需要依赖其自身值。即，定义时就使用了`var()` 引用其值。  

```
:root {  --m: var(--m)}body {  margin: var(--m)}
```

2\. 两个或两个以上的变量互相引用时。

```
:root {  --one: calc(var(--two) + 10px);  --two: calc(var(--one) - 10px);}
```

不要在代码中创建这样的循环引用。

### 使用无效变量会怎样？

语法错误会被忽略，但是无效的 `var()` 会导致错误的初始值或继承到有问题的值。

举例如下：

```
:root { --color: 20px; }p { background-color: red; }p { background-color: var(--color); }
```

![](https://cdn-media-1.freecodecamp.org/images/ExHNombXi1ObmK5sc8WtbTSttIJ7MNGujbZP)

变量`--color` 带入了 `var()` ， 但是属性值`background-color: 20px`在变量带入后是无效的，因为`background-color`不是继承属性，所以它的值会默认变成 `初始` 值，即`transparent`。

![](https://cdn-media-1.freecodecamp.org/images/tdeD7sLFRUvKCdXP2Y6SXuQCakTcv-hV5PNR)

注意，如果你直接写 `background-color: 20px` ，那么这个属性声明即是无效的。该元素会使用前面元素对颜色的声明，即红色。 

![](https://cdn-media-1.freecodecamp.org/images/24FLLWAoCML1VC4G95GQ1IGLQnPuwoJ2AoGA)

当你这样写声明时，情况就不一样了。

### 小心创建单一标记

当设置类似下面的属性值时，`20px` 会被编译为单一标记。

```
font-size: 20px
```

简单点说， `20px` 是一个整体。 

当用 CSS 变量创建单一标记时，需要小心点。

举个例子，请看如下代码：
```
:root { --size: 20}div {  font-size: var(--size)px /*提醒*/}
```

你可能认为 `font-size`为`20px`, 但是你错了。

浏览器会把它解析为 `20 px`。

注意`20`与`px`之间的空格。

因此，如果你不得不创建独立标记，那么一定要用变量表示这个整体。举个例子，使用`--size: 20px`, 或者`calc` 函数，如`calc(var(--size) * 1px)`，这里的`--size`等于 `20`。

如果你没看懂，不要担心。我会在下个例子中仔细解释这一概念。

### 实战环节！

终于到了期待已久的部分了。

我会带你写几个有用的项目，来看看 CSS 变量的实际用法。

开始吧。

### 项目1: 使用CSS变量创建可变组件。

假设你需要创建两个不同的按钮。两个按钮基础样式相同，但只有一点小小的区别。

![](https://cdn-media-1.freecodecamp.org/images/Em6yJKVwIi9tjgjAw6vbF1Ci5H4ARS0A9acL)

在这个例子中，两个按钮不同的属性为`background-color`和`border-color`。

怎么做呢？

一般来说，我们都会这么做。

创建一个基类，比如 `.btn`，然后加上不同的类，举例如下：

```
<button class="btn">Hello</button&gt;<button class="btn red">Hello</button>
```

`.btn`包含按钮的基本样式。举例如下：

```
.btn {  padding: 2rem 4rem;  border: 2px solid black;  background: transparent;  font-size: 0.6em;  border-radius: 2px;}
```

```
/*悬浮状态*/.btn:hover {  cursor: pointer;  background: black;  color: white;}
```

按钮样式如何变化呢？


```
/* 变化 */.btn.red {  border-color: red}.btn.red:hover {  background: red}
```

看到了吗，我们一直在复制代码。这样也好，但是使用 CSS 变量会更简洁。

第一步怎么做呢？

使用 CSS 变量替换变化的颜色值，不要忘记为变量设置默认值！

```
.btn {   padding: 2rem 4rem;   border: 2px solid var(--color, black);   background: transparent;   font-size: 0.6em;   border-radius: 2px; }
```

```
 /*悬浮状态*/  .btn:hover {  cursor: pointer;   background: var(--color, black);   color: white; }
```

设置 `background:  **var(--color, black)**` 是为了让背景颜色变成 `--color`变量的值。但当变量不存在时，该元素就会自动使用替换值 `**black**`。

这就是设置默认属性值的方法，跟在 JavaScript 或其他的编程语言中如出一辙。

好戏才刚刚开始。

有了变量，就可以像下面这样设置新的变量值了：

```
.btn.red {   --color: red }
```

如果元素 class 使用了`.red`，浏览器会注意到不同的 `--color` 值，进而改变按钮的外观。

使用变量创建可变组件可以节约很多时间。

对比两段代码：

![](https://cdn-media-1.freecodecamp.org/images/gmEzlvRN7KiaDVWEy2ZUE7kI5a5PpAAJs3gU)

使用 CSS 变量 VS 不使用 CSS 变量

如果有更多的变量，还能剩下很多敲代码的时间。

![](https://cdn-media-1.freecodecamp.org/images/OUyVLhYwkveuuaSbIAG8QHoo0cgNtqPrqWhi)

看到区别了吗？

### 项目二: 使用 CSS 变量定制网站主题


我敢说，你之前肯定浏览过类似网站。主题网站会让用户觉得自己可以定制主题，就好像自己在主管该网站一样。

以下便是我们要使用的例子。


![](https://cdn-media-1.freecodecamp.org/images/LsBPxBoN-bc9PZorRq39kklAE5yTiSmkgm6I)


使用 CSS 变量会让创建过程变得多么简单呢？


这个例子非常重要。在这个例子中，我会介绍如何使用 Javascript 来更新 CSS 变量。

### 我们实际要做的

CSS 变量的魅力在于其互动性。一旦你修改了某个 CSS 变量，其对应的属性都会发生变化。

下图从概念上解释了整个例子的操作过程。

![](https://cdn-media-1.freecodecamp.org/images/OmRYAlINfOHcYWrLDzBJfjJkI6ejbsg5Tstc)

流程图

我们需要使用 JavaScript 监听点击事件。

在这个简单的例子中，整个页面的背景和文本颜色全部基于 CSS 变量。

当点击左上方的任意一个按钮时， CSS 变量的值即会改变。因此，页面的背景颜色也会变化。

该项目的原理就是这样。

除此之外，我们怎么改变 CSS 变量的值呢？


![](https://cdn-media-1.freecodecamp.org/images/UIQ3ij9Cy-iU3rO5OXkQc1uyPhMPGuHD1zXb)

行内设置变量

即便把 CSS 变量设为行内样式，它的值也会改变。和 Javascript 一起，我们可以控制整个文档，并使用 CSS 变量设置行内样式。

明白了吗？

废话不多说，开始操作吧。

### 初始代码

初始代码如下：

```
<div class="theme">  <button value="dark">dark</button>  <button value="calm">calm</button>  <button value="light">light</button></div><article>...</article>
```

代码中有三个按钮元素，它们都继承自类名为 `.theme` 的父元素。为了简化我没有写`article`元素，`article`元素包含页面的主要内容。

### 页面样式

为了成功实现该项目，首先要改变页面风格。方法很简单。

没必要为每种风格都设置`background-color`和`color`属性, 只需要使用变量来设置。

如下所示：

```
body {  background-color: var(--bg, white);  color: var(--bg-text, black)}
```

原因很明显。按下按钮时，两个 CSS 变量的值都会改变。

如此一来，整个页面的风格都会发生变化。

![](https://cdn-media-1.freecodecamp.org/images/lbU62-myh4lQakl9DoOYEaetbRLhPt4NZP01)

现在轮到 JavaScript 了。

#### 使用 JavaScript

以下是项目需要用到的 JavaScript 代码：

```
const root = document.documentElement const themeBtns = document.querySelectorAll('.theme > button')themeBtns.forEach((btn) => {  btn.addEventListener('click', handleThemeUpdate)})function handleThemeUpdate(e) {  switch(e.target.value) {    case 'dark':       root.style.setProperty('--bg', 'black')      root.style.setProperty('--bg-text', 'white')      break    case 'calm':        root.style.setProperty('--bg', '#B3E5FC')       root.style.setProperty('--bg-text', '#37474F')      break    case 'light':      root.style.setProperty('--bg', 'white')      root.style.setProperty('--bg-text', 'black')      break  }}
```

别害怕，代码比你想的简单的多。

首先，获取根元素，`const root = document.documentElement`

这里的根元素是`HTML`。一会你就会理解这为什么重要了，如果你很好奇，那么就先认为这是为了设置 CSS 变量使用的。

除此之外，还要获取按钮元素，`const themeBtns = document.querySelectorAll('.theme > button`)

`querySelectorAll`方法会获取伪数组。之后遍历该伪数组，然后添加对应的点击事件。  

代码如下：

```
themeBtns.forEach((btn) => {  btn.addEventListener('click', handleThemeUpdate)})
```

 `handleThemeUpdate`函数在哪里呢？请继续往下看。

点击按钮会触发对应的`handleThemeUpdate`函数。需要为每一个按钮的点击事件配置对应的操作。

基于此，这里用了一个 switch 的`operator`，不同按钮的点击事件不同。

再看一眼前面 JavaScript 的代码块吧，现在你应该理解的更好了。

### 项目三: 创建 CSS 变量盒?

如果你之前没有看到过效果图，那么我再贴一次图片：

![](https://cdn-media-1.freecodecamp.org/images/IgKvTxKSenWIErNZ4Im96FCV65MJPaf4qfad)

盒子的颜色会动态改变，盒子容器会根据输入值 3 维旋转。

![](https://cdn-media-1.freecodecamp.org/images/UZNu2ymN0vI2VH4en9NLaJ4T22l8UEWnPi2i)

在[Codepen][5]上尝试。

这是使用 CSS 变量和 JavaScript 一同创造出的一个既有交互性有很美妙的例子。

来看看创建过程。

#### 代码片段

需要以下元素：

1.  用来输入范围值的输入框
2.  包含指令的容器
3.  包含其他盒子的盒子容器，每一个子盒子中都包含一个输入框

![](https://cdn-media-1.freecodecamp.org/images/FHA6xhsFiPCoGpBB5VLcKzoggivesElFAkWQ)

代码结构非常简单。

如下所示：

```
<main class="booth">  <aside class="slider">    <label>Move this ? </label>    <input class="booth-slider" type="range" min="-50" max="50" value="-50" step="5"/>  </aside>    <section class="color-boxes">    <div class="color-box" id="1"><input value="red"/></div>    <div class="color-box" id="2"><input/></div>    <div class="color-box" id="3"><input/></div>    <div class="color-box" id="4"><input/&gt;</div&gt;    <div class="color-box" id="5"><input/></div>    <div class="color-box" id="6">;<input/>&lt;/div>  </section>  <footer class="instructions">    ?? Move the slider<br/>    ?? Write any color in the red boxes   </footer></main>  
```

注意以下几点：

1.  输入框中输入值的取值范围为`-50`到`50` ，步长为`5`。除此之外，默认输入值为 `-50`。
2.  如果你不确定输入框的原理，那么请先到 [w3schools][6]了解相关概念。
3.  注意观察类名为 `.color-boxes` 的盒子容器是如何包含其他类名为 `.color-box`的容器的，子盒子又是如何包含输入框的。
4.  值得一提的是，第一个输入框的颜色默认为红色。

理解了代码结构后，继续添加如下样式：

![](https://cdn-media-1.freecodecamp.org/images/pY28lnZFx4xvar807GegIg4HIn4DNcBAG5rE)

1.  将类名为`.slider`和`.instructions`的元素移出文档流，进行绝对定位。
2.  为`body`元素添加日出的背景颜色，再用一朵花的背景图做装饰，放在页面左下角。 
3.  居中对齐`color-boxes`元素 。
4.  为`color-boxes`元素设置样式。


具体代码如下：

```
/* Slider */.slider,.instructions {  position: absolute;  background: rgba(0,0,0,0.4);  padding: 1rem 2rem;  border-radius: 5px}.slider {  right: 10px;  top: 10px;}.slider > * {  display: block;}/* Instructions */.instructions {  text-align: center;  bottom: 0;  background: initial;  color: black;}
```

这段代码非常简单。我希望你能读完并理解。如果你还是不理解，请在下面留言或者在推特上@我。

为`body`元素设置样式略微复杂。幸运的是，你熟知 CSS 的用法。

既然想要为页面设置背景颜色并添加背景图案，也许最好使用简化的`background`属性设置多种样式。

代码如下：

```
body {  margin: 0;  color: rgba(255,255,255,0.9);  background: url('http://bit.ly/2FiPrRA') 0 100%/340px no-repeat, var(--primary-color);  font-family: 'Shadows Into Light Two', cursive;}
```

`url`会链接到太阳花图片。

`0 100%`设置了背景图片的位置。

下面的文章介绍了在 CSS 中，如何对背景定位： 

![](https://cdn-media-1.freecodecamp.org/images/4rZugtEKFeay00FsfDXFuXyiHA1Amf1iG2Jd)

来源:  [CSS 高级编程][7]

![](https://cdn-media-1.freecodecamp.org/images/zFcuuEu5RnrGWiG5Doqg7jS4OS-PyOh7H93v)

来源:  [CSS 高级编程][8]

分隔号后面的`340px`代表`background-size`。如果你把数值设置的更小，那么图片尺寸也会变小。

你可能会想`no-repeat`是什么意思。该属性可以防止背景图片平铺。

最后，逗号后面的属性值都是备选值。这里把`background-color`设置为`var(primary-color)`。

可以看出，我们使用了变量。

这意味着在声明之前，必须先定义变量：

```
:root {  --primary-color: rgba(241,196,15 ,1)}
```

这里的颜色值就是日出时的黄颜色。这没什么大不了的，接下来会设置更多的变量。

接下来，把类名为`color-boxes`的容器居中设置。

```
main.booth {  min-height: 100vh;    display: flex;  justify-content: center;  align-items: center;}
```

主要容器使用了弹性布局，将下一级的子元素置于页面中央。因此，类名为`color-box`的容器都会居中显示。

接下来，为子元素和其下一级的子元素设置样式。

首先是子元素：

```
.color-box {  padding: 1rem 3.5rem;  margin-bottom: 0.5rem;  border: 1px solid rgba(255,255,255,0.2);  border-radius: 0.3rem;  box-shadow: 10px 10px 30px rgba(0,0,0,0.4); }
```

设置完后，子元素会拥有一个美丽的阴影，这会让最后的效果更加酷炫。

这还不够，我们要设置类名为 `container-boxes` 的盒子属性。 

```
/* Color Boxes */.color-boxes {  background: var(--secondary-color);  box-shadow: 10px 10px 30px rgba(0,0,0,0.4);  border-radius: 0.3rem;    transform: perspective(500px) rotateY( calc(var(--slider) * 1deg));  transition: transform 0.3s}
```

好多了！现在来细化一下。

下面的代码非常简单：

```
.color-boxes {   background: var(--secondary-color);   box-shadow: 10px 10px 30px rgba(0,0,0,0.4);   border-radius: 0.3rem;}
```

以上代码用了一个新变量。因此需要在 root 选择器中加上定义。 

```
:root {  --primary-color: rgba(241,196,15 ,1);  --secondary-color: red;}
```

secondary-color 变量值为红色。因此容器背景为红色。 

但你可能对如下代码感到困惑：

```
/* Color Boxes */.color-boxes {  transform: perspective(500px) rotateY( calc(var(--slider) * 1deg));  transition: transform 0.3s}
```

可以暂时简化上面的 transform 属性。

![](https://cdn-media-1.freecodecamp.org/images/JzclULDPJ-fDazCDnHaBt2Jw72HQAY3k0AjK)

举例如下

```
transform: perspective(500px) rotateY( 30deg);
```

transform 合并了两个不同的函数。一是透视，二是以 Y 轴为标准的旋转角度。

如何处理 `perspective`和 `rotateY`函数？

透视函数可以使元素在 3D 空间内变形。它会激活三维空间，使元素增加一个 z 轴。

在 [codrops][9] 上阅读更多关于透视函数的内容。

`rotateY`函数用途为何呢？

激活三维空间后，元素就有了 x ，y ，z 三个轴。`rotateY`函数会把元素以 Y 轴为中心旋转。

[codrops][10] 上这幅图可以帮助我们直观理解这一点。

![](https://cdn-media-1.freecodecamp.org/images/nlm073Uq9QmQYLaA2A78IbeDQqMuT9qvq00n)

[Codrops][11]

回到前面的话题。

![](https://cdn-media-1.freecodecamp.org/images/PnEnAMTI0LRrJ2ZKbF3cs70AkNdIcSEuAYDP)

移动滑块的时候，你知道是哪个函数影响了`.container-box`的旋转效果吗？

是旋转函数。因此盒子绕 Y 轴旋转。

由于该值可以通过 JavaScript 传给函数, 所以便用变量来表示这个值。

![](https://cdn-media-1.freecodecamp.org/images/UAI2w26oH2IgBTljbP6GgDjQEzljccawUiz4)

为什么用这个变量乘以 1deg 呢？

按通常经验来说，也为了自由定义变量，当创建单个标记时，建议创建变量是不带单位。

这样便可以在任何需要使用单位的时候通过 `calc` 函数达成目标。

![](https://cdn-media-1.freecodecamp.org/images/YmWMuiiZ8yvGpy6WHWlmquGbDGGBez4muwSN)

这样就可以在需要的时候任意使用这些值，既可以转化为`deg`，也可以转化为相对于用户窗口视图 `vw` 的比例。

在这个例子中，我们把一个数字乘以一个 1deg的值，得到了一个有单位的数值。

![](https://cdn-media-1.freecodecamp.org/images/gXw20rbptib1kLg0FpxSEsrIKOZGlECgESrn)

由于 CSS 不理解数学运算，所以需要把数学运算转移到`calc`函数中，这样才能得到 CSS 属性需要的对应数值。

现在来到下一步。在 JavaScript 中可以任意改变变量值。

还剩下一点 CSS 代码：


```
/* Handle colors for each color box */.color-box:nth-child(1) {  background: var(--bg-1)}.color-box:nth-child(2) {  background: var(--bg-2)}.color-box:nth-child(3) {  background: var(--bg-3)}.color-box:nth-child(4) {  background: var(--bg-4)}.color-box:nth-child(5) {  background: var(--bg-5)}.color-box:nth-child(6) {  background: var(--bg-6)}
```

nth-child 选择器用来选择子元素。

![](https://cdn-media-1.freecodecamp.org/images/WWzkEOGXTgxkDGkCJSYbgkPEtyHEEezhesXT)

我们将更新每个框的背景色，背景色必须由变量表示，这样便可以通过 JavaScript 更新。
There’s a bit of foresight needed here. We know we will be updating the background color of each box. We also know that this background color has to be represented by a variable so it is accessible via JavaScript. Right?

我们这样设置：

```
.color-box:nth-child(1) {  background: var(--bg-1)}
```

但如果变量不存在，怎么办呢？

需要默认值。

如下所示：

```
.color-box:nth-child(1) {  background: var(--bg-1, red)}
```

在这个例子中，我选择不提供任何默认值。

如果这个变量的属性值不合法，那么这个属性值就会用其初始值。

因此，如果`--bg-1`元素无效或不合法，那么背景将会自动变为初始值，即透明色。

没有明确指定时，初始值就是这个属性的默认值。例如，如果你不设置元素的`background-color`, 那么元素会默认为 `transparent`。

初始值也是一种默认值。

### 开始写 Javascript

Javascript 部分内容不多。

首次处理滑块。

五行代码即可。

```
const root = document.documentElementconst range = document.querySelector('.booth-slider')//as slider range's value changes, do something range.addEventListener('input', handleSlider)function handleSlider (e) {  let value = e.target.value   root.style.setProperty('--slider', value)}
```

首先，获取滑块元素， `const range = document.querySelector('.booth-slider')`

增加事件以处理滑块值变化， `range.addEventListener('input', handleSlider)`

回调事件 `handleSlider`

```
function handleSlider (e) {  let value = e.target.value   root.style.setProperty('--slider', value)}
```

![](https://cdn-media-1.freecodecamp.org/images/0PtXkLeMkuwE0mJxuJX3T0emkunPARGxRN8T)

`root.style.setProperty('--slider', value)`  指把`root`元素的 style 属性设置为对应值。

### 处理颜色变化

这跟处理滑块变化一样简单。

代码如下：

```
const inputs = document.querySelectorAll('.color-box > input')
```

```
//as the value in the input changes, do something.inputs.forEach(input => {  input.addEventListener('input', handleInputChange)})function handleInputChange (e) {  let value = e.target.value  let inputId = e.target.parentNode.id   let inputBg = `--bg-${inputId}`   root.style.setProperty(inputBg, value)}
```

获取每一个输入值，`const inputs = document.querySelectorAll('.color-box > inpu`t')

为每一个输入框增加事件：

```
inputs.forEach(input => {   input.addEventListener('input', handleInputChange)})
```

写`handleInputChange`函数：

```
function handleInputChange (e) {  let value = e.target.value  let inputId = e.target.parentNode.id   let inputBg = `--bg-${inputId}`   root.style.setProperty(inputBg, value)}
```

![](https://cdn-media-1.freecodecamp.org/images/HX4X1oDSyXAJGMEeV2oIKX8PBbunS4i0sngB)

完成！

### 我怎么能忘记这些呢？

当我发现自己在任何地方都没有提到浏览器的兼容性时，我已经完成并编辑了本文的初稿。所以，现在我来修补这个烂摊子吧。

浏览器对 CSS 变量（又称自定义属性）支持良好。几乎所有现代浏览器都能支持（在撰写本文时，这一比例已超过了 87％）。

![](https://cdn-media-1.freecodecamp.org/images/4ycpka14Kg2tCJLF6y3b0Zc-XHWCvbwOayAB)

[caniuse][12]

那么，你现在会在项目中使用 CSS 变量吗？ 我会说是的！不过，请务必检查一下适用的比例。


往好的方面来看，你可以使用类似 [Myth][13] 的预处理器。它可以把你现在使用的 CSS 变成未来可期的 CSS，非常酷！

如果你曾经使用过 [postCSS][14], 那也是一个现在使用未来 CSS 的不错的方法。这里有一些例子：[postCSS module for CSS variables][15]。


### 我还有问题要问呢！

![](https://cdn-media-1.freecodecamp.org/images/ofZP6Nh0aCZOu6yWtDYs9HROStLDrUOgH97D)

[电子书][16] 可离线阅读，还能获得**私人**邀请，这样你可以问我任何问题。

很公平不是吗？

下次再见！

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
