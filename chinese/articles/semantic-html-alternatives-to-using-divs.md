> - 原文地址：[Semantic HTML Guide – 10 Alternatives to Using divs](https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/)
> - 原文作者：[Edan Ben-Atar](https://www.freecodecamp.org/news/author/edan/)
> - 译者：Papaya HUANG
> - 校对者：

![Semantic HTML Guide – 10 Alternatives to Using divs](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/How-To-Start-Freelancing-1.png)

如果你的 HTML 布局是这个样子，请举手：

```html
<body>
  <div class="header" id="site-header">
    <div class="site-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="content-wrap">
    <div class="intro">
      This is the introduction to the site, which is full of divs.
    </div>
  </div>
  <div class="container"></div>
</body>
```

大部分人在搭建 HTML 布局的时候会默认使用 `<div>` 元素。大多数人会把精力放在更有趣的 CSS 或者 JavaScript。

使用 `<div>` 元素在搭建页面的时候很简单，但是在后期会造成一些麻烦。

## 仅使用`div`带来的问题

使用 `<div>` 元素本身并没有什么问题。存在即合理。

但大量地使用 DIV 会给你和你的合作伙伴带来麻烦。

### 易读性问题

如果你尝试去看别人的代码，或者是几个月后回看自己的代码，如果整个页面只有 `<div>`元素，很难快速浏览。

你得花费更多地时间去解构页面，这或许会成为你效率的绊脚石。仅是寻找某一个代码块的结束 `</div>` 标签都会花费你大量时间。

### 无障碍问题

遵循无障碍（a11y）原则是实践，不单是考虑颜色、对比和字幕。根据 WHO（联合国卫生组织）的统计结果：全世界约有 2.85 亿人口遭遇视觉损伤，其中 0.39 亿失明，2.46 亿视力低下。

这就是 HTML 应该无障碍的原因，也就是使用语义化代码。

屏幕阅读器需要通过上下文来判断网页的准确信息。 对于屏幕阅读器来说，`<div>`和`<span>`这类元素没有任何意义； 而`<form>`和 `<button>`这类语义化的元素更好解析。

### 一致性问题

在团队工作中，如果你知道你即将在项目中担任什么角色，你的工作效率会更高，代码中的问题也会越少。

把使用语义化 HTML 设置为一个标准可以使任何刚加入的人马上了解网页布局。

另外，当你开始使用 CSS 来调整 HTML 样式的时候，你会发现语义化的 HTML 的元素更容易被选定。

### SEO 问题

使用语义化标记时，搜索引擎会将这些内容视为重要的关键字，以此来提高页面的搜索排名。 [(MDN 网页文档)](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

何为语义化 HTML?

我找到最[清晰的定义](https://www.w3schools.com/html/html5_semantic_elements.asp) 是：

> 语义元素清楚地向浏览器和开发人员描述了它的含义。

使用语义化 HTML 带来的改变很像这样的场景：当你指向天空一个物品大呼：“快看！有一个物品”和“快看！有一架飞机”。

清晰描述日常物品使得日常交流更加容易，而语义化 HTML 使得读取代码更加容易。

实际上，语义化 HTML 已经被当作 [HTML5 标准](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element):

> 鼓励开发者将 [div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) 元素作为备选方案，当实在没有别的元素可以使用的时候再使用。使用比 `div` 元素更适合的元素可以使网页的无障碍性更好，使开发者更易维护代码。

举一个例子，哪一个更方面阅读：

```html
<div class="quote" id="twain-quote">
  "Get your facts first, then you can distort them as you please." – Mark Twain
</div>
```

或者

```html
<blockquote>
  "Get your facts first, then you can distort them as you please." – Mark Twain
</blockquote>
```

在上面两个例子中，我们看到了 `<blockquote>` 元素，我们很容易就理解到元素内的文字应该被当作引用来处理格式。

如果使用`div`可能需要进一步判断，但使用语义化 HTML 总不会错。

## HTML 中`div`的替换元素

让我们来看看一些常用的`div` 替换元素。你很有可能见过这些元素，我们将在这里讲解它们存在的原因以及如何使用。

### <nav>元素

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>
```

nav 元素正如其名，是用来标记一系列导航连接的元素。

如上文所述，这个标记可以帮助屏幕阅读器判断是否现在就展示所属内容。 `nav` 元素的最佳实践是 HTML 文档中的导航链接代码块。

### <main> 元素

```html
<main>
  <h1>The Godfather of All Content</h1>
  <h2>The Wedding</h2>
  <p>
    Why did you go to the police? Why didn't you come to me first? Vito, how do
    you like my little angel? Isn't she beautiful? Only don't tell me you're
    innocent. Because it insults my intelligence and makes me very angry. I see
    you took the name of the town. What was your father's name? The hotel, the
    casino. The Corleone Family wants to buy you out.
  </p>
</main>
```

和 `<nav>`类似，这个元素也正如其名（语义化派上了用场）。该元素将页面或者文档的主要内容打包成一个块级元素。main 元素位于两个`<body>`标签之间。

### <section> 元素

```html
<section>
  <h1>The Best Sandwich Ever</h1>
</section>
<section>
  <p>
    The best sandwich is a mutton, lettuce and tomato, where the mutton is nice
    and lean. It's so perky, I love that.
  </p>
</section>
```

`<section>`元素是取代`div`来区分不同内容绝佳的例子。

在上面的例子中，我们将一段介绍和段落开头区分成两个 section，这样和`<div>`类相比在 CSS 文档中就更容易找到这些 section。

### <header> 元素

```html
<header>
  <img src="/" id="logo" />
</header>
```

`<header>` 元素和`<head>` 不同，你可以在文档内多次使用。

例如，你可以使用一对`<header>` 元素来放置一个 logo，以及另一组对 header 来介绍特定的内容，如 article（之后会详细说明）。

### <footer> 元素

```html
<footer>
  <p>© 2021 All rights reserved. Don't steal.</p>
  <p>Contact: <a href="mailto:jiffy@jiffysites.com">Email Jiffy!</a></p>
</footer>
```

和 `<header>` 元素一样，你可以在 HTML 文档中的任意地方使用 `<footer>` 元素。

`<footer>` 的典型案例是展示版权和作者信息，也可以使用 footer 元素来结束 `<section>` 元素。

### 一些不那么常见的 `div`替换

还有一些元素你可能见过，或者只见过一两次。但是当你需要的时候，它们很有用，学习它们可以使得你的代码的易读性更好。

### <aside> 元素

```html
<p>
  My favorite TV show of all time is The Muppet Show. It's sweet, funny and
  brilliant.
</p>
<aside>
  <h3>The Muppet Show</h3>
  <p>The Muppet Show was created by Jim Henson and aired from 1976 – 1981.</p>
</aside>
```

在影视和戏剧作品中，aside 是一种戏剧手法，角色会跳脱出主要的对话，和观众进行交流。

我们在 HTML 中也可以这样使用 <aside> 元素。我们对一个内容做注解，注解和主题内容区分。我们可以把它放置在侧边栏。

### <code> 元素

```html
<p>
  You can use this for a piece of code such as:
  <code class="gray-code">const muppetFrog = 'Kermit'</code>, which looks
  different from the other text.
</p>
```

如果想要将代码和普通文本区分开来，可以使用 `<code>` 元素。上面示例在浏览器的渲染结果（添加了一点 CSS 样式）如下：

![code-display](https://www.freecodecamp.org/news/content/images/2022/07/code-display.png)

### <article> 元素

```html
<article class="all-muppets">
  <h1>Muppets</h1>
  <article class="kermit">
    <p>Kermit is the Muppet leader.</p>
  </article>
  <article class="fozzy">
    <p>Fozzy is a stand-up bear.</p>
  </article>
  <article class="piggy">
    <p>Don't mess with Miss Piggy.</p>
  </article>
</article>
```

`<article>` 元素也是用来和其他元素区分内容的。

`<article>`自成一体，和主内容区分开来。使用这个元素可以更容易使用 CSS 将它与页面其他内容区分开来。

### <blockquote> 元素

`<blockquote>` 简单明了，将引文和其他文本区分开来，如上文所示。

### <mark> 元素

```html
<p>
  This is a sentence about the best Muppet ever, which happens to be
  <mark>Pepe the King Prawn</mark>.
</p>
```

`<mark>` 元素不仅可以是文本高亮，也可以使文档内容更易被理解，如下：

![mark-display](https://www.freecodecamp.org/news/content/images/2022/07/mark-display.png)

请在你的代码中使用这些`div`替换元素，提高你的代码的易读性。

## 总结

以上只是十个 `div` 的替换元素，在 HTML 还有另一些语义化元素。

我们不可能在一个文档中把它们全都用了，也不需要记住这一百来个元素。 需要的时候你可以查看 MDN 文档： [HTML 元素参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

编写语义化 HTML 是一个好习惯，越早开始越好。它提高了易读性、SEO，同时也不要忘了那些视觉障碍的人，他们会非常感谢你的体贴。
