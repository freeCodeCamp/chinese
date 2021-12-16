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
这些元素用于向网页添加间隔。

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)上可以找到所有元素。 但是对于初学者来说，只需要知道最常见的就足够了。

## 块\级 vs 内联HTML元素

一个元素默认是块\级元素。

块\级元素是总是从新行开始并所有可以用的宽度。

内联元素不从新行开始的元素，而且它只占用必要的宽度。

![](https://www.freecodecamp.org/news/content/images/2021/01/Screen-Shot-2021-01-11-at-1.17.22-PM.png)

块级 vs. 内联HTML元素

`<div>` 和`<span>`分别代表块\级元素和内联元素。 在这个例子中，`<div>` 元素占用 3 行，而 `<span>` 元素只占用 1 行。

但问题是：我们怎么知道哪些是块\级元素，哪些是行内元素呢？糟糕的是你需要记住它们。最简单的方法是记住哪些是行内元素——其余的是块元素。

如果我们回顾最常见的 HTML 元素，内联元素有：`<span>、<input>、<button>、<label>、<textarea>、<img>、<a>、<br>`。

## 如何在HTML中添加注释

```html
<p>这是一个段落.</p>

<!-- <p>看不见我！</p> -->

```

注释的目的是在代码中间解释逻辑或仅仅是组织代码。

HTML注释被包裹在特殊标记`<!-- 和 -->`中，并且它们在浏览器中被忽略。

## 如何使用HTML实体

如果您想显示文本：`<p> 标签定义了一个段落。`，但浏览器将 `<p>` 解释为新元素的开始标签怎么办？ 在这种情况下，我们可以像下面的一样使用 HTML 实体：

```html
<p>这个 <p> 标签定义了一个段落.</p>

<p>这个 &lt;p&gt; 定义了一个段落.</p>

```

## 如何在HTML中使用表情符号

在现代网络中，我们可以很容易地在HTML中显示表情符号，像这样：👻

```html
<p>😀 咧嘴笑.</p>

<p>🎂 生日</p>

```

## HTML中初学者常见错误

### 1\. 标签/元素名称

标签/元素名称不区分大小写。也就是说它们可以写成小写或大写，但建议将所有内容都写成小写：`<button>` 而不是 `<ButTon>`。

### 2\. 结束标签

忘记包含结束标签是初学者常见的错误。 因此，每次创建开始标记的时候，都应该立即写结束标签。

### 3\. 嵌套

错误示范:

```html
<div>Div 1 <span> Span 2 </div></span>

```

标签必须以都在内部或外部的方式打开和结束。

### 4\. 单引号和双引号

错误示范:

```html
<img src="https://images.unsplash.com/'>

```

单双引号不可以混用。你应该始终使用双引号。如果需要的话，使用HTML实体。

## 如何用HTML搭建一个简单的网站

单个HTML元素不足以创建一个网站。因此，让我们看看从头开始构建一个简单的网站还需要什么。

### 如何创建一个HTML文件

首先，让我们打开 [Visual Studio Code](https://code.visualstudio.com/)（或你最喜欢的代码编辑器）。 在选择的文件夹中，创建一个新文件并将其命名为 index.html。

在 index.html 文件中，输入!（感叹号）并按回车键。你会看到：

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

这是HTML文档组成网站所需的最少代码。文件里有：

1. `<!DOCTYPE html>`：首先我们有 Doctype。出于一些奇怪的历史原因，我们必须在HTML中包含文档类型。
2. `<html lang="en"></html>`：`<html>` 元素包装了页面上的所有内容，也称为根元素。我们应该始终包含 `lang` 属性来声明页面的语言。
3. `<head></head>`：`<head>` 元素是用来包含所有内容的容器，但不是向用户显示的内容。
4. `<meta charset="UTF-8" />`：第一个meta元素用于设置字符集为UTF\-8。UTF\-8包括大部分书面语言字符。
5.`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`：第二个meta元素指定浏览器视口。此设置适用于移动\优化站点。
6.  `<title>Document</title>`: 这是`<title>` 元素。它设置页面的标题。
7.  `<body></body>`:`<body>` 元素包含页面上的所有内容。

### 如何搭建一个煎饼菜谱页面

现在我们有初始代码了，让我们搭建一个煎饼菜谱页面吧。页面的内容来自：[AllRecipes Page](https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/).

首先，让我们给出煎饼食谱的`<title>` 元素内容。 这会改变网页标签页上的文本。在 `<body>` 元素中，我们创建 3 个元素：`<header>`、`<main>` 和 `<footer>`，分别代表 3 个部分。

#### 1\. Build the header section构建页头部分

在页头中，我们想要标志和导航。 因此，让我们为标志创建一个内容为`所有食谱`的`div`。

对于导航，我们使用 `<nav>` 元素。 在 `<nav>` 元素中，我们可以使用 `<ul>` 创建一个无序列表。 我们用 3 个 `<li>` 元素代表 3 个链接：食材（ingredients）、步骤(steps)和订阅(subscribe)。 标题代码如下所示：

```html
...
    <header>
      <div>所有食谱</div>
      <nav>
        <ul>
          <li><a href="#食材">食材</a></li>
          <li><a href="#步骤">步骤</a></li>
          <li><a href="#订阅">订阅</a></li>
        </ul>
      </nav>
    </header>
...

```

#### 2\. 构建主干部分

在主体部分里，我们先加一个标题和一个图像。 我们可以使用 `h1` 作为标题，使用 `<img>` 作为图像（免费使用来自 [Unsplash](https://images.unsplash.com/) 的图像）：

```html
...
    <main>
      <h1>美味传统煎饼</h1>
      <img
        src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502"
        alt="pancake"
        width="250"
      />
    </main>
...

```

接下来，我们要列出所有成分。 可以使用 `<ol>` 创建一个有序列表，然后使用 `<input type="checkbox" />` 创建一个复选框。

但在此之前，我们可以使用 `<h2>` 来开始一个新的内容块。 还可以为 `<h2>` 添加 `id` 属性，这样导航中的链接就知道要去哪里：

```html
...
    <main>
    ...
      <h2 id="食材">食材</h2>
      <ol>
        <li><input type="checkbox" /> 1 ½ 杯中筋面粉</li>
        <li><input type="checkbox" /> 3 ½ 茶匙发酵粉</li>
        <li><input type="checkbox" /> 1 茶匙盐</li>
        <li><input type="checkbox" /> 1 大勺白糖</li>
        <li><input type="checkbox" /> 1 ¼ 杯牛奶</li>
        <li><input type="checkbox" /> 1 个鸡蛋</li>
      </ol>
    </main>
...

```

在搞定成分之后，我们要列出所有步骤。我们用`<h4>`作为步骤标题，`<p>`作为步骤内容：

```html
...
    <main>
    ...
      <h2 id="步骤">步骤</h2>

      <h4>第一步</h4>
      <p>
        在一个大碗里，将面粉、发酵粉、盐和糖筛在一起。
         在中间挖一个洞，倒入牛奶、鸡蛋和融化的黄油；
         搅拌至光滑。
      </p>

      <h4>第二步</h4>
      <p>
       用中高温加热抹了少许油的煎锅或煎锅。 倒
         或将面糊舀到烤盘上，每个煎饼使用大约
        1/4 杯。 当两面都是棕色，趁热食用。
      </p>
    </main>
...

```

现在我们已经完成了主要部分，让我们继续进行页脚部分。

#### 3\. 构建页脚部分

页脚里有一个订阅表单和版权文本。

订阅表单可以使用 `<form>` 元素。 在里面， `<input type="text">` 用于文本输入和一个 `<button>`用于提交按钮。

版权文本可以直接用 `<div>`。 注意这里 HTML 实体 `$copy;` 可以作为版权符号使用。

我们可以在订阅表单和版权文本之间用 `<br>` 添加一些空格：

```html
...
    <footer>
      <h6 id="订阅">订阅</h6>
      <form onsubmit="alert('已订阅')">
        <input type="text" placeholder="输入邮箱地址" />
        <button>提交</button>
      </form>
      <br />
      <div>&copy; dakota kelly at Allrecipe.com</div>
    </footer>
...

```

全部搞定！下面是所有的代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>煎饼配方</title>
  </head>
  <body>
    <header>
      <div>所有食谱</div>
      <nav>
        <ul>
          <li><a href="#食材">食材</a></li>
          <li><a href="#步骤">步骤</a></li>
          <li><a href="#订阅">订阅</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>美味传统煎饼</h1>
      <img
        src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        alt="pancake"
        width="250"
      />
      <h2 id="食材">Ingredients</h2>
      <ol>
        <li><input type="checkbox" /> 1 ½ 杯中筋面粉</li>
        <li><input type="checkbox" /> 3 ½ 茶匙发酵粉</li>
        <li><input type="checkbox" /> 1 茶匙盐</li>
        <li><input type="checkbox" /> 1 大勺白糖</li>
        <li><input type="checkbox" /> 1 ¼ 杯牛奶</li>
        <li><input type="checkbox" /> 1 个鸡蛋</li>
      </ol>
      <h2 id="步骤">步骤</h2>
      <h4>第一步</h4>
      <p>
        在一个大碗里，将面粉、发酵粉、盐和糖筛在一起。
         在中间挖一个洞，倒入牛奶、鸡蛋和融化的黄油；
         搅拌至光滑。
      </p>

      <h4>第二步</h4>
      <p>
       用中高温加热抹了少许油的煎锅或煎锅。 倒
         或将面糊舀到烤盘上，每个煎饼使用大约
        1/4 杯。 当两面都是棕色，趁热食用。
      </p>
    </main>
    <hr />
    <footer>
      <h6 id="订阅">订阅</h6>
      <form onsubmit="alert('已订阅')">
        <input type="text" placeholder="输入邮箱地址" />
        <button>提交</button>
      </form>
      <br />
      <div>&copy; dakota kelly at Allrecipe.com</div>
    </footer>
  </body>
</html>

```

## 总结
仅仅使用HTML就可以构建一个简单的网站。但如果要构建一个美观实用的网站，我们需要学习CSS和JavaScript。

你可以在社交媒体或 Youtube 上关注我，并获取有关这些主题的未来更新。 同时，你可以查看 [freeCodeCamp Curriculum](https://www.freecodecamp.org/learn) 通过解决小题目来练习HTML。

除此之外，希望你可以继续享受编程，期待在未来的帖子中见到你👋.

\_\_\_\_\_\_\_\_\_\_ 🐣 关于我 \_\_\_\_\_\_\_\_\_\_

*   我是 [DevChallenges](https://devchallenges.io/) 的创建者
*   订阅我的频道 [my Channel](https://www.youtube.com/c/thunghiem)
*   关注我的推特 [my Twitter](https://twitter.com/thunghiemdinh)
*   加入我 [Discord](https://discord.com/invite/3R6vFeM)
