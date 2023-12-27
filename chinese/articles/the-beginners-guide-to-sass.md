> -  原文地址：[The Beginner's Guide to Sass](https://www.freecodecamp.org/news/the-beginners-guide-to-sass/)
> -  原文作者：[Israel Mitolu](https://www.freecodecamp.org/news/author/israelmitolu/)
> -  译者：Papaya HUANG
> -  校对者：

![Sass初学者指南](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/The-Beginner-s-Guide-to-SASS.png)

你是否好奇 SASS 到底是什么？或者你已经知道 SASS，但还没来得及去学习和使用。

不论你是首次学习 Sass，还是更新这个主题的知识，这篇文章都很适合你。

在这篇文章中，你将学习到 Sass 的基础，Sass 到底是什么，如果使用 Sass 超棒的功能来提速书写样式的过程。

## 前提条件

这本文章默认你：

-  基本了解 HTML 和 CSS
-  安装了代码编辑器（推荐使用 VS Code。如果你尚未安装，可以在此处[下载](http://code.visualstudio.com/).
-  安装了浏览器（推荐使用 Chrome 或者 Firefox）

## 究竟什么是 Sass

Sass（英文全称是 Syntactically Awesome Style Sheets）是一种 CSS 预处理器，使用它可以使你的 CSS 拥有超能力。

你不得不承认：常常你会觉得用 CSS 写样式很困难，特别是现在用户交互界面（UI）变得越来越复杂。

你常常会觉得自己在重复自己。

Sass 就可以解决这个问题，在你写样式的时候，帮助你坚守 DRY（Do Not Repeat Yourself 不重复自己）准则。

Sass 的编译器可以让我们用两种语法来写样式表——缩进语法和 SCSS。下文会逐个讲解。

### 缩进语法

缩进语法是 Sass 的原始语法，采用缩进的格式，但是取消了花括号和分号。 其文件扩展名为 `.sass`.

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    text-decoration: none
```

### SCSS 语法

相比缩进语法，这个语法较新也更受欢迎。SCSS 语法实质是 CSS3 语法的子集。这意味这你可以直接用常规的 CSS 加上一些新增的函数来书写 SCSS。

由于是在 CSS 的基础上提供高级功能，所以 SCSS 语法又被称作 _Sassy CSS_。其文件扩展名为 `.scss`.

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }

  a {
    display: block;
    text-decoration: none;
  }
}
```

> 免责声明: 本文使用 SCSS 语法是因为 SCSS 语法被更多人使用。

## Sass 的工作机制

当你写了一个扩展名为 `.scss`的文件，该文件会被编译成正常的 CSS 文件。然后 CSS 代码在浏览器加载。
这就是为什么我们成 Sass 为预处理器。

## 为什么要使用 Sass?

-   **易于学习**: 如果你已经熟悉 CSS，你会欣喜地发现 Sass 和 CSS 的语法很相似，所以看完这篇教程，你就可以开始使用 Sass 了;)
-   **兼容性强**: Sass 兼容所有版本的 CSS，所以你可以使用所有 CSS 库。
-   **提高效率**: Sass 强大的功能可以避免 CSS 的重复。
-   **可复用的代码**: Sass 中可以使用变量和代码块（mixins），并且可以重复使用。这样就节约了时间，提高了编写代码的速度。
-   **有条理的代码**: 在 Sass 中可以使用片段（partials）来整理代码。
-   **跨浏览器兼容**: Sass 会被编译成 CSS，并且自动添加浏览器引擎前缀，这样你就不需要手动编写了。

## Sass 的功能

以下功能使得 Sass 成为拥有超能力的 CSS：

### Sass 中的变量

在 Sass 中可以声明变量，这是 Sass 其中一个强大的功能，因为我们可以根据各种属性来定义变量，并且在任何文件中使用这些变量。

使用变量的好处是，一旦值发生了变化，你只要编写一行代码进行修改。

具体操作办法是使用美元符号 `$`来命名变量， 然后在你代码的其他地方引用这个变量。

```scss
$primary-color: #24a0ed;

.text {
  color: $primary-color;
}
button {
  color: $primary-color;
  border: 2px solid $primary-color;
}
```

### Sass 中的嵌套

在写 CSS 的时候，大多数情况下需要重复类选择器，在 Sass 中我们可以在父元素中嵌套来避免这样的重复。

在 CSS 中：

```css
nav {
  height: 10vh;
  width: 100%;
  display: flex;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 2.5rem;
}

nav li a {
  text-decoration: none;
  color: #707070;
}

nav li a:hover {
  color: #069c54;
}
```

在 Sass，同样的代码可以写作：

```scss
nav {
  height: 10vh;
  width: 100%;
  display: flex;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 2.5rem;

    a {
      text-decoration: none;
      color: #707070;

      &:hover {
        color: #069c54;
      }
    }
  }
}
```

### 父选择器

在上面 Sass 的代码片段中你可能注意到了和号 `&` 搭配了一个悬停的伪类。这就是父选择器。

> 父选择器——`&`是 Sass 中一个特殊的选择器，一般用于嵌套选择器中，指代外层的选择器。 资源出处 – [Sass 文档](https://sass-lang.com/documentation/style-rules/parent-selector)

所以在上面的代码片段中， `&`指代的父元素是锚点标签`a`.

> 你可以查阅我的[文章](https://israelmitolu.hashnode.dev/writing-cleaner-css-using-bem-methodology)，该讲解了如何在 Sass 中应用 BEM。

### Sass 中片段

这是 Sass 众多给你赋能的炫酷功能之一。

随着样式表越来越大，维护变得越来越困难。因此，把样式表拆分成更小的单元块变得有意义。换句话说，片段帮助你更好去组织和构建你的代码。

声明一个片段，我们首先要创建一个文件，以下划线`_`打头为文件名，然后使用`@import`指令在其他 Sass 文件中引用这个片段。

例如，我如果我们有`_globals.scss`、`_variables.scss`和`_buttons.scss`三个文件， 我们可以在 `main.scss`中引用这三个文件：

```scss
@import "globals";
@import "variables";
@import "buttons";
```

你可能注意到`.scss`后缀并没有被加入， 这是因为 Sass 会默认你添加的是`.sass`或`.scss`文件。

### Sass 中的 Mixins

在 CSS 中另一个主要的问题是你会经常重复同一组样式，Mixin 使你能够封装一组样式，并使用`@include`关键字在你代码的任意地方应用这组样式。

下面的代码片段是使用 Flexbox 的时候，使用 mixin 的例子：

```scss
@mixin flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #ccc;
}

.card {
  @include flex-container;
}

.aside {
  @include flex-container;
}
```

### Sass 中的函数和运算符

Sass 提供一套工具帮助你编写更程序话的代码。

Sass 提供内置函数，可以实现计算和运算，并返回特定的值。

内置函数的功能包含从颜色计算到数学运算，包括获取随机数、计算尺寸甚至是条件式。

Sass 还提供数学运算符号，包括 `+`、 `-`、 `\`、`*`、 `/` 和 `%`，可以搭配`calc`函数使用。

以下代码片段是使用函数将像素转换成 rem 的例子：

```scss
@function pxToRem($pxValue) {
  $remValue: ($pxValue / 16) + rem;
  @return $remValue;
}

div {
  width: pxToRem(480);
}
```

> 但一定要强调的是，不推荐使用除法运算符 `/`， 在 Dart Sass 2.0.0.中除法运算符会被去除。 更多内容可以阅读[文档](https://sass-lang.com/documentation/breaking-changes/slash-div).

所以更推荐的写法是：

```scss
@use "sass:math";

@function pxToRem($pxValue) {
  @return math.div($pxValue, 16px) * 1rem;
}

div {
  width: pxToRem(480px); // gives 30rem
}
```

以下代码片段是在 mixin 里使用条件逻辑：

```scss
@mixin body-theme($theme) {
  @if $theme == "light" {
    background-color: $light-bg;
  } @else {
    background-color: $dark-bg;
  }
}
```

Sass 也提供`lighten`和`darken`函数实现按照百分比调整颜色

如：

```scss
$red: #ff0000;

a:visited {
  color: darken($red, 25%);
}
```

## 如果在本地设置好 Sass

真棒！我们已经学习了 Sass 的“理论”部分，接下来我们用代码来深入理解 Sass 是如何工作的。

在这个部分，你将要学习到如何设置一个本地环境，并且一步一步练习我准备好的登陆页。

实例在[Codesandbox](https://codesandbox.io/s/currying-river-44d7zr?file=/index.html) 代码库在[GitHub](https://github.com/israelmitolu/Getting-Started-with-SASS).

### 编译 Sass 的方法

编译 Sass 的方法如下：

-   VS Code 拓展
-   使用 NPM 全局安装
-   使用开源 app 安装如：Compass.app、Live Reload、 and Koala
-   使用 Homebrew 安装（MacOs 用户）

本教程将使用 VS Code 拓展，因为这是最容易的方法。

### 在 VS Code 中设置好 Sass

#### 第一步：安装 Live Sass Compiler

首先启动 VS Code，启动完毕后，在左手边的侧栏找到拓展选择栏。

![1](https://www.freecodecamp.org/news/content/images/2022/04/1.PNG)

VS Code 中的拓展选择栏

在搜索框中查找 “Live Sass Compiler“并安装，这个拓展会帮助我们编译 Sass 文件 — `.scss` (或`.sass`)成`.css`文件。

#### 第二步：设置保存地址

然后修改文件路径，这样 Sass 才能在`styles`文件夹内变异。

这一步需要在 `settings.json`文件中操作。

在 VS Code 中，选择 File > Preferences > Settings。然后查找`live sass compile`来改变全局设置。

点击`Edit settings.json`。

然后在该文件内的头几行你会看到：

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/"
    }
  ],
```

改变`"savePath": "/"`为`"savePath": "/styles"`，如下面的代码片段：

```json
{
  "liveSassCompile.settings.formats":[
    {
      "format": "expanded",
      "extensionName":".css",
      "savePath":"/styles",
    },

    //你同样可以在生产中使用缩小拓展，这样可以减少文件大小

    {
      "format": "compressed",
      "extensionName":".min.css",
      "savePath":"/styles",
    }
  ],
```

#### 第三步：编译 Sass

保存好设置后，回到 Sass 文件，点击窗口的最低端"Watch Sass"按钮。

![2](https://www.freecodecamp.org/news/content/images/2022/04/2.PNG)

点击"Watch Sass"

点击按钮后，会在`styles`文件夹中生成两个文件： `.css`和`.css.map`。

你不要随意更改这两个文件，因为他们帮助你在每次更新样式的时候把 Sass 编译成 CSS。

#### 第四步：链接 CSS 文件

然后将 CSS 文件链接到`index.html`，在我们例子中就是：

```html
    <link rel="stylesheet" href="/styles/main.css" />
```

在你的浏览器中运行代码，得出的布局如下：
## 代码详解

以下是对上一部分代码的详细解释：

-   在 `index.html`基本标记文件中包含一个 header 和一个 home/hero 部分
    
    -   包含了一个链接引入 CSS 文件，这个文件是 VS Code 拓展帮我们编译完成的
    -   以及一些 JavaScript 来实现菜单的响应切换
-   `main.scss`被编译， 编译结果为 CSS 文件 `main.css`并被引入到`index.html`：
    
    ```html
    <link rel="stylesheet" href="/styles/main.css" />
    ```
    
-  `main.scss`引用了所有片段 `_base.scss`、`_components.scss`、`_home.scss`、`_layout.scss`、 `_responsive.scss`、 `_variables.scss`。
    
    ```scss
    @import "variables";
    @import "base";
    @import "layout";
    @import "components";
    @import "home";
    @import "responsive";
    ```
    
-  基础的片段包含了 `flex`和`grid`mixin，并在需要的时候重复引用。
    

## 总结

恭喜你！如果你读到了这儿，说明你已经学习了 Sass 是如何工作的，Sass 一些炫酷的功能，希望你可以马上开始使用 Sass。

如果你想要学习更多 Sass 的知识，我推荐你使用[freeCodeCamp's course](https://www.youtube.com/watch?v=aoQ6S1a32j8&t=3323s).


如果你认为这篇文章帮助到了你(我确定帮助到了你😉), 请分享给你的朋友或者到社交网络上，欢迎在 [Twitter](https://twitter.com/israelmitolu) 或者[blog](https://israelmitolu.hashnode.dev) 上联系我，我会在这个上面分享文章和资源，帮助你成为更好的开发者。

感谢阅读，编写代码愉快！
