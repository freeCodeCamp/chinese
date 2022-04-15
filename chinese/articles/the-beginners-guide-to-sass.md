> -  原文地址：[The Beginner's Guide to Sass](https://www.freecodecamp.org/news/the-beginners-guide-to-sass/)
> -  原文作者：[Israel Mitolu](https://www.freecodecamp.org/news/author/israelmitolu/)
> -  译者：Papaya HUANG
> -  校对者：

![Sass初学者指南](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/The-Beginner-s-Guide-to-SASS.png)

你是否好奇SASS到底是什么？或者你已经知道SASS，但还没来得及去学习和使用。

不论你是首次学习Sass，还是更新这个主题的知识，这篇文章都很适合你。

在这篇文章中，你将学习到Sass的基础，Sass到底是什么，如果使用Sass超棒的功能来提速书写样式的过程。

## 前提条件

这本文章默认你：

-  基本了解HTML和CSS
-  安装了代码编辑器（推荐使用VS Code。如果你尚未安装，可以在此处[下载](http://code.visualstudio.com/).
-  安装了浏览器（推荐使用Chrome或者Firefox）

## 究竟什么是Sass

Sass（英文全称是Syntactically Awesome Style Sheets）是一种CSS预处理器，使用它可以使你的CSS拥有超能力。

你不得不承认：常常你会觉得用CSS写样式很困难，特别是现在用户交互界面（UI）变得越来越复杂。

你常常会觉得自己在重复自己。

Sass就可以解决这个问题，在你写样式的时候，帮助你坚守DRY（Do Not Repeat Yourself不重复自己）准则。

Sass的编译器可以让我们用两种语法来写样式表——缩进语法和SCSS。下文会逐个讲解。

### 缩进语法

缩进语法是Sass的原始语法，采用缩进的格式，但是取消了花括号和分号。 其文件扩展名为 `.sass`.

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

### SCSS语法

相比缩进语法，这个语法较新也更受欢迎。SCSS语法实质是CSS3语法的子集。这意味这你可以直接用常规的CSS加上一些新增的函数来书写SCSS。

由于是在CSS的基础上提供高级功能，所以SCSS语法又被称作 _Sassy CSS_。其文件扩展名为 `.scss`.

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

> 免责声明: 本文使用SCSS语法是因为SCSS语法被更多人使用。

## Sass的工作机制

当你写了一个扩展名为 `.scss`的文件，该文件会被编译成正常的CSS文件。然后CSS代码在浏览器加载。
这就是为什么我们成Sass为预处理器。

## 为什么要使用Sass?

-   **易于学习**: 如果你已经熟悉CSS，你会欣喜地发现Sass和CSS的语法很相似，所以看完这篇教程，你就可以开始使用Sass了;)
-   **兼容性强**: Sass兼容所有版本的CSS，所以你可以使用所有CSS库。
-   **提高效率**: Sass强大的功能可以避免CSS的重复。
-   **可复用的代码**: Sass中可以使用变量和代码块（mixins），并且可以重复使用。这样就节约了时间，提高了编写代码的速度。
-   **有条理的代码**: 在Sass中可以使用片段（partials）来整理代码。
-   **跨浏览器兼容**: Sass会被编译成CSS，并且自动添加浏览器引擎前缀，这样你就不需要手动编写了。

## Sass的功能

以下功能使得Sass成为拥有超能力的CSS：

### Sass中的变量

在Sass中可以声明变量，这是Sass其中一个强大的功能，因为我们可以根据各种属性来定义变量，并且在任何文件中使用这些变量。

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

### Sass中的嵌套

在写CSS的时候，大多数情况下需要重复类选择器，在Sass中我们可以在父元素中嵌套来避免这样的重复。

在CSS中：

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

在Sass，同样的代码可以写作：

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

In the Sass code above, you might notice the ampersand symbol `&` used with the hover pseudo-class. This is called a Parent Selector.

> The parent selector, `&`, is a special selector invented by Sass that's used in nested selectors to refer to the outer selector. Source – [Sass Documentation](https://sass-lang.com/documentation/style-rules/parent-selector)

So, in the case of the code above, `&` will refer to the parent which is the anchor tag `a`.

> You can check out my [article](https://israelmitolu.hashnode.dev/writing-cleaner-css-using-bem-methodology) on how to implement Sass using BEM methodology.

### Partials in Sass

This is one of the many awesome features of Sass that gives you an advantage.

As stylesheets grow large over time, it gets difficult to maintain them. Because of this, it just makes sense to break your stylesheets into smaller chunks. In other words, Partials help you organize and structure your code.

To declare a partial, we will start the file name with an underscore `_`, and add it in another Sass file using the `@import` directive.

For example, if we have a `_globals.scss`, `_variables.scss`, and `_buttons.scss`, we could import them into the main SCSS file `main.scss`.

```scss
@import "globals";
@import "variables";
@import "buttons";
```

You'll notice that the underscore and the `.scss` are not added. That is because Sass automatically assumes that you are referring to the `.sass` or `.scss` file.

### Mixins in Sass

Another major issue with CSS is that you'll often use a similar group of styles. Mixins allow you to encapsulate a group of styles, and apply those styles anywhere in your code using the `@include` keyword.

An example of when you'd use mixins is when using Flexbox.

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

### Sass Functions and Operators

Sass provides a suite of tools to help write more programmatic code.

Sass offers built-in functions that enable us to do calculations and operations that return a specific value.

They range from color calculations to math operations like getting random numbers and calculation of sizes, and even conditionals.

It also provides support for mathematical operators like `+`, `-`, `\`, `*`, `/`, and `%`, which we can use with the `calc` function.

Here is an example using a pixel to rem conversion function:

```scss
@function pxToRem($pxValue) {
  $remValue: ($pxValue / 16) + rem;
  @return $remValue;
}

div {
  width: pxToRem(480);
}
```

> However, it's important to note that the `/` operator for division is deprecated, and will be removed in Dart Sass 2.0.0. You can read about it in the [Docs](https://sass-lang.com/documentation/breaking-changes/slash-div).

So, this is how it should be written:

```scss
@use "sass:math";

@function pxToRem($pxValue) {
  @return math.div($pxValue, 16px) * 1rem;
}

div {
  width: pxToRem(480px); // gives 30rem
}
```

Here is an example of conditional logic in a mixin:

```scss
@mixin body-theme($theme) {
  @if $theme == "light" {
    background-color: $light-bg;
  } @else {
    background-color: $dark-bg;
  }
}
```

Sass also provides the `lighten` and `darken` functions to adjust a color by a certain percentage.

For example:

```scss
$red: #ff0000;

a:visited {
  color: darken($red, 25%);
}
```

## How to Set Up Sass for Local Development

Great! Now that we have learned about the "theoretical" aspects of Sass, let's get into the code to better understand how it works.

In this section, you will learn how to set up a local development environment, and also go through a simple landing page I have prepared.

Check out the demo on [Codesandbox](https://codesandbox.io/s/currying-river-44d7zr?file=/index.html) and code repository on [GitHub](https://github.com/israelmitolu/Getting-Started-with-SASS).

### Ways to compile Sass

There are different ways of compiling Sass files which are:

-   VS Code Extension
-   Install using NPM globally
-   Install using open source apps such as Compass.app, Live Reload, and Koala.
-   Install using Homebrew (for MacOS)

In this tutorial, we will be using the VS code Extension option because it is the easiest to get started with.

### How to Set Up Sass for VS Code

#### Step 1: Install Live Sass Compiler

First, launch Visual Studio Code. Once it's loaded, go to the side panel on the left and select the extensions tab.

![1](https://www.freecodecamp.org/news/content/images/2022/04/1.PNG)

Extensions tab in VS Code

In the search bar, search for "Live Sass Compiler" and install it. This extension helps us to compile the Sass files — `.scss` (or `.sass`) – into `.css` files.

#### Step 2: Set the Save Location

Now change the file path so that Sass gets compiled into the `styles` folder.

To do this, you will make changes to the `settings.json` file.

In VS Code, go to File > Preferences > Settings. Now search for `live sass compile` to change the global settings.

Click on `Edit settings.json`.

Now, on the first few lines, where you see this code:

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

Change `"savePath": "/"` to `"savePath": "/styles"`, so it now looks like this:

```json
{
  "liveSassCompile.settings.formats":[
    {
      "format": "expanded",
      "extensionName":".css",
      "savePath":"/styles",
    },

    // You can also use this minified extension for production, as it reduces the file size

    {
      "format": "compressed",
      "extensionName":".min.css",
      "savePath":"/styles",
    }
  ],
```

#### Step 3: Compile Sass

Now, after saving the settings, go back to the Sass file, and click on the button that says "Watch Sass" at the very bottom of the window.

![2](https://www.freecodecamp.org/news/content/images/2022/04/2.PNG)

Click on "Watch Sass"

After you click the button, two files get created: `.css` and a `.css.map` in the `styles` folder.

You should not, however, change any of them. Because it already helps you compile the Sass into CSS every time you save new stylings.

#### Step 4: Link the CSS file

Then, link the CSS file in your `index.html`. In our case:

```html
    <link rel="stylesheet" href="/styles/main.css" />
```

Now run the file in your browser. This should be the resulting layout in CodeSandbox below:

## Walking through the code

Here's an explanation of the code from the previous section:

-   We have a basic markup in the `index.html` file which contains a header and home/hero section.
    
    -   It contains a link to the CSS file which the extension compiled for us.
    -   And some JavaScript for the responsive menu toggle.
-   The `main.scss` gets compiled, and the resulting CSS file `main.css` is what is imported in the `index.html`:
    
    ```html
    <link rel="stylesheet" href="/styles/main.css" />
    ```
    
-   The Main Scss file `main.scss` imports all of the partials: `_base.scss`, `_components.scss`, `_home.scss`, `_layout.scss` `_responsive.scss`, `_variables.scss`.
    
    ```scss
    @import "variables";
    @import "base";
    @import "layout";
    @import "components";
    @import "home";
    @import "responsive";
    ```
    
-   The base partial contains the mixins of `flex` and `grid` which are included in the places where we need them.
    

## Conclusion

Congrats! If you made it to the end, that means you have learned about how Sass works, its cool features, and hopefully you start using it soon.

If you want to learn more about Sass, I recommend checking out [freeCodeCamp's course](https://www.youtube.com/watch?v=aoQ6S1a32j8&t=3323s).

If you found this article useful (which I'm sure you did 😉), do share it with your friends and network, and feel free to connect with me on [Twitter](https://twitter.com/israelmitolu) and my [blog](https://israelmitolu.hashnode.dev) where I share resources and articles to make you a better dev.

Thanks for reading, and happy coding!
