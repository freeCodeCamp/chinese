> -   原文地址：[Learn HTML Basics for Beginners in Just 15 Minutes](https://www.freecodecamp.org/news/html-basics-for-beginners/)
> -   原文作者：Thu Nghiem
> -   译者：Meloodiee
> -   校对者：

![十五分钟零基础HTML入门](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/Ep10_html.png)

如果你想建立一个网站，你需要学的第一个编程语言就是HTML。

这篇文章里，我们会介绍HTML语言的基础。看完文章后，我们会只使用HTML建立一个简单的网站。

如果你想了解更多，可以看这个视频：

如果你更喜欢视频，你也可以观看这个视频

## 什么是 HTML?

作为超文本标记语言的代表，HTML是一个较为简单的语言。它包含了用来搭建一个网站页面的不同元素。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-11-at-1.16.17-PM.png)

什么是 HTML?

## 什么是 HTML 元素?

![](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-11-at-1.16.34-PM.png)

HTML元素

元素的开头通常是一个包含元素名称的开始标签。它被尖括号包围。开始标签代表着元素开始的地方。

和开始标签类似，结束标签也在一组尖括号中间。但在元素名称之前有一个正斜杠。

所有在开始标签和结束标签中间的都是内容。

但并不是所有元素都遵循这个格式。我们称这些为非空内容。他们只有一个标签或者一个开始标签但没有任何内容。这些元素通常用于在文档中插入或嵌入某些内容。

比如说， `<img>` 标签用于嵌入一个图像件， `<input>`标签用于嵌入一个输入。

```html
<img src="https://images.unsplash.com/photo-1610447847416-40bac442fbe6" width="50">
```

在上面的例子中，`<img>` 元素只包含一个没有任何内容的标签。 此元素用于在文档中插入来自 [Unsplash](https://unsplash.com/) 的图像文件。

## 如何嵌套HTML元素?

```html
<div class="my-list">
  <h4>My list:</h4>

  <ul>
     <li>Apple</li>
     <li>Orange</li>
     <li>Banana</li>
  </ul>
</div>

```

元素可以放置在其他元素内。 这称为嵌套。 在上面的例子中，在 `<div>` 元素中，我们有一个 `<h4>` 元素和一个 `<ul>` 或无序列表元素。 类似地，在 `<ul>` 元素内部，有 3 个 `<li>` 或列表项元素。

基本嵌套很容易理解。 但是如果页面很大，嵌套会变得复杂。

因此，在使用 HTML 之前，先考虑布局结构。 你可以把它画在一张纸上或在你的脑海里。这非常有用。

![如何嵌套HTML元素](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-12-at-10.45.05-AM.png)

## 什么是HTML属性？

元素也有属性，这些属性包含关于不会出现在内容中的元素的额外信息。

```html
<img src="https://images.unsplash.com/photo" width="50">
```

在上面的例子中，`<img>` 元素有 2 个属性：`src` 或 source 用于指定图像的路径，以及 `width` 用于指定图像的宽度（以像素为单位）。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-12-at-10.45.17-AM.png)

通过这个例子，可以看出属性有以下特征：

* 属性和元素名称之间有一个空格
* 属性是添加在在开始标签中的
* 元素可以有很多属性
* 属性通常有一个名称和一个值：name="value"

But not every attribute has the same pattern. Some can exist without values, and we call them Boolean Attributes.但并非每个属性都用相同的格式。 有些属性可以没有值，我们称它们为布尔属性。

```html
<button onclick=“alert('Submit')" disabled>Button</button>
```

In this example, if we want to disable the button, all we have to do is pass a `disabled` attribute without any values. This means that the presence of the attribute represents the true value, otherwise, the absence represents the false value.在这个例子中，如果我们想禁用这个按钮（button），我们所要做的就是传递一个不带任何值的 `disabled` 属性。 也就是说，这个属性的存在代表真值，不存在则代表假值。

### 常见HTML元素

HTML总共有超过100个元素。 但是在 90% 的情况下，最常用的大约只有20个。 我把它们分成5种：

#### 节元素

```html
  <div>, <span>, <header>, <footer>, <nav>, <main>, <section>

```

这些元素用于将内容整理成不同的部分。 它们的用途通常是很明朗的，例如，`<header>` 通常表示一组介绍和导航部分，`<nav>` 表示包含导航链接的部分，等等。

#### 文本内容

```html
  <h1> to <h6>, <p>, <div>, <span>, <ul>, <ol>, <li>

```

这些元素用于整理内容或文本块。 它们对可访问性和 SEO 很重要。 它们告诉浏览器内容的目的或结构。

#### 表单

```html
  <form>, <input>, <button>, <label>, <textarea>

```

这些元素可以一起使用来创建用户可以填写和提交的表单。 表单可能是 HTML 中最棘手的部分。

#### 图像（Images）和 链接（Links）

```html
  <img>, <a>

```

这些元素用于嵌入图像和创造超链接。

#### 其他

```html
  <br>, <hr>

```

These elements are used to add a break to the webpage.

You can find all the elements on [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). But for beginners, you just need to know the most common ones.

## Block\-level vs inline HTML elements

By default, an element can be either block\-level or an inline element.

Block\-level elements are the elements that always start on a new line and take up the full width available.

Inline elements are the elements that do not start on a new line and it only take up as much width as necessary.

![](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-11-at-1.17.22-PM.png)

Block level vs. Inline HTML elements

Two elements that represent block\-level and inline elements, respectively, are `<div>` and `<span>`. In this example, you can see that the `<div>` elements takes 3 lines, whereas the `<span>` element only takes up 1 line.

But the question is: how do we know which ones are block\-level elements and which ones are inline elements? Well, unfortunately you need to remember them. The easiest way is to remember which are inline elements – and the rest are block elements.

If we look back at the most common HTML elements, inline elements include: `<span>, <input>, <button>, <label>, <textarea>, <img>, <a>, <br>`.

## How to comment in HTML

```html
<p>This is a paragraph.</p>

<!-- <p>I am not showing.</p> -->

```

The purpose of comments is to include notes in the code to explain your logic or simply to organize your code.

HTML comments are wrapped in the special markers: `<!-- and -->` and they are ignored in the browser.

## How to use HTML entities

What if you want to show the text: `the <p> tag defines a paragraph.`, but the browser interprets `<p>` as an opening tag for a new element? In this case, we can use HTML entities like in the following example:

```html
<p>the <p> tag defines a paragraph.</p>

<p>the &lt;p&gt; define a paragraph.</p>

```

## How to use emoji in HTML

In the modern web, we can display emoji in HTML pretty easily, like this: 👻

```html
<p>😀 Grinning Face.</p>

<p>🎂 Birthday</p>

```

## Common beginner mistakes in HTML

### 1\. Tags/Element names

Tags/Element names are cAse\-inSensitive. This means that they can be written in lowercase or uppercase, but it is recommended that you write everything in lowercase: `<button>` not `<ButTon>`.

### 2\. Closing tag

Failing to include a closing tag is a common beginner error. Therefore, whenever you create an opening tag, immediately put in a closing tag.

### 3\. Nesting

This is wrong:

```html
<div>Div 1 <span> Span 2 </div></span>

```

The tags have to open and close in a way that they are inside or outside one another.

### 4\. Single quotes and Double quotes

This is wrong:

```html
<img src="https://images.unsplash.com/'>

```

You cannot mix single quotes and double\-quotes. You should always use double quotes and use HTML entities if needed.

## How to build a simple website with HTML

Individual HTML elements are not enough to create a website. So let's see what more we need to build a simple website from scratch.

### How to create an HTML document

First, let's open [Visual Studio Code](https://code.visualstudio.com/) (or your favorite code editor). In the folder of your choice, create a new file and name it index.html.

In the index.html file, type ! (exclamation mark) and press enter. You will see something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>

```

This is the minimal code that an HTML document should have to make up a website. And here we have:

1.  `<!DOCTYPE html>`: First we have Doctype. For some weird historical reason in HTML we have to include the doctype for everything to work correctly.
2.  `<html lang="en"></html>`: The `<html>` element wraps all the content on the page, also known as the root element. And we should always include the `lang` attribute to declare the language of the page.
3.  `<head></head>`: The `<head>` element is a container for everything you want to include, but not content that you show to your users.
4.  `<meta charset="UTF-8" />`: The first meta element is used to set the character set to be UTF\-8, which includes most characters from written languages.
5.  `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: The second meta element specifies the browser viewport. This setting is for a mobile\-optimized site.
6.  `<title>Document</title>`: This is the `<title>` element. It sets the title of the page.
7.  `<body></body>`: The `<body>` element contains all the content on the page.

### How to build a pancake recipe page

Alright, now that we have the starter code, let's build a pancake recipe page. We are going to use the content from this [AllRecipes Page](https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/).

First, let's give the `<title>` element content of the pancakes recipe. You will see the text on the web page tab change. In the `<body>` element, let's create 3 elements: `<header>`, `<main>` and `<footer>` representing 3 sections.

#### 1\. Build the header section

In the header, we want to have the logo and the navigation. Therefore, let's create a `div` with the content `ALL RECIPE` for the logo.

For the navigation, let's use the `<nav>` element. Within the `<nav>` element, we can use `<ul>` to create an unordered list. We want to have 3 `<li>` elements for 3 links: Ingredients, Steps, and Subscribe. The header code looks like this:

```html
...
    <header>
      <div>ALL RECIPE</div>
      <nav>
        <ul>
          <li><a href="#ingredients">Ingredients</a></li>
          <li><a href="#steps">Steps</a></li>
          <li><a href="#subsribe">Subscribe</a></li>
        </ul>
      </nav>
    </header>
...

```

#### 2\. Build the Main Section

In the main section, first, we want to have a title and an image. We can use `h1` for the title and `<img>` for the image (we can use an image from [Unsplash](https://images.unsplash.com/) for free):

```html
...
    <main>
      <h1>Good Old Fashioned Pancakes</h1>
      <img
        src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502"
        alt="pancake"
        width="250"
      />
    </main>
...

```

Next, we want to list all the ingredients. We can use `<ol>` to create an ordered list and `<input type="checkbox" />` to create a checkbox.

But before that, we can use `<h2>` to start a new content block. We also want to add the `id` attribute for `<h2>` so that the link in the navigation knows where to go:

```html
...
    <main>
    ...
      <h2 id="ingredients">Ingredients</h2>
      <ol>
        <li><input type="checkbox" /> 1 ½ cups all-purpose flour</li>
        <li><input type="checkbox" /> 3 ½ teaspoons baking powder</li>
        <li><input type="checkbox" /> 1 teaspoon salt</li>
        <li><input type="checkbox" /> 1 tablespoon white sugar</li>
        <li><input type="checkbox" /> 1 ¼ cups milk</li>
        <li><input type="checkbox" /> 1 egg</li>
      </ol>
    </main>
...

```

After the ingredients, we want to list all the steps. We can use `<h4>` for the step heading and `<p>` for the step content:

```html
...
    <main>
    ...
      <h2 id="steps">Steps</h2>

      <h4>Step 1</h4>
      <p>
        In a large bowl, sift together the flour, baking powder, salt and sugar.
        Make a well in the center and pour in the milk, egg and melted butter;
        mix until smooth.
      </p>

      <h4>Step 2</h4>
      <p>
        Heat a lightly oiled griddle or frying pan over medium-high heat. Pour
        or scoop the batter onto the griddle, using approximately 1/4 cup for
        each pancake. Brown on both sides and serve hot.
      </p>
    </main>
...

```

Alright, now that we are done with the main section, let's move on to the footer section.

#### 3\. Build the Footer Section

In the footer, we want to have a subscribe form and copyright text.

For the subscribe form, we can use the `<form>` element. Inside it, we can have an `<input type="text">` for text input and a `<button>` for the submit button.

For the copyright text, we can simply use a `<div>`. Notice here, we can use the HTML entity `$copy;` for the copyright symbol.

We can add `<br>` to add some space between the subscribe form and the copyright text:

```html
...
    <footer>
      <h6 id="subscribe">Subscribe</h6>
      <form onsubmit="alert('Subscribed')">
        <input type="text" placeholder="Enter Email Address" />
        <button>Submit</button>
      </form>
      <br />
      <div>&copy; dakota kelly at Allrecipe.com</div>
    </footer>
...

```

Alright now we are done! Here is the full code for reference:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pancake Recipe</title>
  </head>
  <body>
    <header>
      <div>ALL RECIPE</div>
      <nav>
        <ul>
          <li><a href="#ingredients">Ingredients</a></li>
          <li><a href="#steps">Steps</a></li>
          <li><a href="#subsribe">Subscribe</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Good Old Fashioned Pancakes</h1>
      <img
        src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        alt="pancake"
        width="250"
      />
      <h2 id="ingredients">Ingredients</h2>
      <ol>
        <li><input type="checkbox" /> 1 ½ cups all-purpose flour</li>
        <li><input type="checkbox" /> 3 ½ teaspoons baking powder</li>
        <li><input type="checkbox" /> 1 teaspoon salt</li>
        <li><input type="checkbox" /> 1 tablespoon white sugar</li>
        <li><input type="checkbox" /> 1 ¼ cups milk</li>
        <li><input type="checkbox" /> 1 egg</li>
      </ol>
      <h2 id="steps">Steps</h2>
      <h4>Step 1</h4>
      <p>
        In a large bowl, sift together the flour, baking powder, salt and sugar.
        Make a well in the center and pour in the milk, egg and melted butter;
        mix until smooth.
      </p>
      <h4>Step 2</h4>
      <p>
        Heat a lightly oiled griddle or frying pan over medium-high heat. Pour
        or scoop the batter onto the griddle, using approximately 1/4 cup for
        each pancake. Brown on both sides and serve hot.
      </p>
    </main>
    <hr />
    <footer>
      <h6 id="subscribe">Subscribe</h6>
      <form onsubmit="alert('Subscribed')">
        <input type="text" placeholder="Enter Email Address" />
        <button>Submit</button>
      </form>
      <br />
      <div>&copy; dakota kelly at Allrecipe.com</div>
    </footer>
  </body>
</html>

```

## Conclusion

You can build a simple website with just HTML. But to be able to build beautiful and functional websites, you need to study CSS and JavaScript.

You can follow me on social media or Youtube for future updates on these topics. But meanwhile, you can check out the [freeCodeCamp Curriculum](https://www.freecodecamp.org/learn) to practice HTML by solving small tasks.

Otherwise, stay happy coding and see you in future posts 👋.

\_\_\_\_\_\_\_\_\_\_ 🐣 About me \_\_\_\_\_\_\_\_\_\_

*   I am the founder of [DevChallenges](https://devchallenges.io/)
*   Subscribe to [my Channel](https://www.youtube.com/c/thunghiem)
*   Follow [my Twitter](https://twitter.com/thunghiemdinh)
*   Join [Discord](https://discord.com/invite/3R6vFeM)
