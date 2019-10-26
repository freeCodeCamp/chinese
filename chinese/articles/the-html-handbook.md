> * 原文地址：[The HTML Handbook](https://www.freecodecamp.org/news/the-html-handbook/)
> * 原文作者：Flavio Copes
> * 译者：于晓慧
> * 校对者：

# 介绍

欢迎！我写这本书是为了帮助您快速学习HTML并熟悉高级HTML主题。

HTML是超文本标记语言的缩写，是Web最基本的构建基块之一。

HTML正式诞生于1993年，从那以后它演变成现在的状态，从简单的文本文档发展为强大的Web应用程序。

本手册面向广大读者。

首先是初学者。我以简洁而全面的方式从零开始解释HTML，因此您可以使用本书从基础上学习HTML。

然后，专业人士。 HTML通常被认为是次要的学习。这样讲也是有一定道理的。

然而，许多事情对大部分人来说还是晦涩难懂的。包括我在内。我写这本手册是为了帮助我理解该主题，因为当我需要解释一些东西时，最好确保我先从内而外地知道这件事。

即使您在日常工作中不编写HTML，了解HTML的工作方式也可以帮助您在需要不时了解它时（例如在调整网页时）省去一些麻烦。

您可以通过Twitter @flaviocopes与我联系。

我的网站是flaviocopes.com。

# 图书索引

# <a href="#lable">前言</a>

# [HTML基础](#HTML基础)


# 文件标题


# 文件主体

# 与文字互动的标签

# 链接

# 容器标签和页面结构HTML

# 样式

# 表格

# 多媒体标签：音频和视频

# 框架

# 图片

# 辅助功能



# <span id="lable">前言</span>

HTML是称为Web的奇迹的基础。

在这组相当简单且有限的规则之下，有着不可思议的力量，它使我们–开发人员，制作人员，设计师，作家和修补匠–为全球各地的人们制作文档，应用程序和体验。

我的第一本HTML书于1997年问世，被称为“ HTML ”。 它是一个很长，很大的页面。

20多年过去了，HTML仍然是Web的基础，并且到现在变化很小。

当然，我们有了更多的语义标记，表示性HTML不再是一回事，由CSS负责了事物的设计

HTML的成功基于一件事：简单性。

当最终人们意识到事情太复杂了时，它拒绝通过XHTML被劫持为XML方言。

之所以这样做，是因为它为我们提供了另一个功能：宽恕。 有一些规则，对，但是学习这些规则之后，您将拥有很多自由。

浏览器变得富有弹性，并且在解析和向用户呈现HTML时总是尽可能做得更好。

整个Web平台做对了一件事情：它永远不会破坏向后兼容性。 令人难以置信的是，我们可以回溯到1991年编写的HTML文档，它们看上去和那时一样。

我们甚至知道第一个网页是什么。 就是这样的：[http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)

由于Web和HTML的另一个重要功能，您可以看到页面的源代码：我们可以检查任何网页的HTML。

不要认为这是理所当然的。 我不知道有其他平台可以提供这种功能。

内置在任何浏览器中的出色开发人员工具使我们能够检查世界上任何人编写的HTML并从中汲取灵感。

如果您不熟悉HTML，那么本书旨在帮助您入门。 如果您是一位经验丰富的Web开发人员，这本书将提高您的知识。

即使我在Web上使用了20多年，我在编写它时也学到了很多东西，而且我相信您也会发现一些新东西。

或者，您将重新学习忘记的旧知识。

无论如何，本书的目标是对您有用，我希望它能成功。


# HTML基础

HTML是**WHATWG**定义的标准，WHATWG是Web超文本应用程序技术工作组的缩写，该组织由使用最流行的Web浏览器的人员组成。这意味着它基本上由Google，Mozilla，Apple和Microsoft控制。

过去，**W3C**（万维网联盟）是负责创建HTML标准的组织。

当很明显W3C向XHTML推进不是一个好主意时，该控件非正式地从W3C转移到WHATWG。

如果您从未听说过XHTML，那么这里有个简短的故事。在2000年代初期，我们都相信Web的未来（尤其是XML）。因此，HTML已从基于SGML的创作语言转变为XML标记语言。

这是一个很大的变化。我们必须知道并尊重更多规则。更严格的规则。

最终，浏览器供应商意识到这不是Web的正确路径，于是他们推迟了，创建了现在称为HTML5的东西。

W3C并未真正同意放弃对HTML的控制，多年来，我们有2个相互竞争的标准，每个标准旨在成为正式标准。最终，W3C于2019年5月28日正式宣布，“真正的” HTML版本是WHATWG发布的版本。

我提到了HTML5。让我解释一下这个小故事。我知道，到目前为止，这有点令人困惑，就像涉及许多演员的生活中的许多事情一样，但它也令人着迷。

我们在1993年拥有**HTML版本1**。这是原始的RFC。

**HTML 2**于1995年问世。

我们在1997年1月获得**HTML 3**，在1997年12月获得**HTML 4**。

真是繁忙的时间！

20多年过去了，我们拥有了整个XHTML，最终我们有了这个HTML5“东西”，它不再仅仅是HTML。

HTML5是一个术语，现在定义了整套技术，其中包括HTML，但增加了许多API和标准，例如WebGL，SVG等。

这里要了解的关键是：现在没有（像）HTML版本这样的东西。这是生活水平。类似于CSS，称为“ 3”，但实际上是一堆独立开发的独立模块。与JavaScript一样，我们每年都有一个新版本，但是如今，唯一重要的是引擎实现了哪些单独的功能。

是的，我们称它为HTML5，但是HTML4是1997年发布的。对于任何事物来说，这都是很长的时间，更不用说在网络上了。

这是标准现在“生效”的地方：[https://html.spec.whatwg.org/multipage](https://html.spec.whatwg.org/multipage)。

HTML是我们用来构造我们在Web上消费的内容的标记语言。

HTML以不同的方式提供给浏览器。

+ 它可以由根据请求或会话数据构建它的服务器端应用程序生成，例如Rails或Laravel或Django应用程序。

+ 它可以由动态生成HTML的JavaScript客户端应用程序生成。

+ 在最简单的情况下，它可以存储在文件中，并由Web服务器提供给浏览器。

让我们深入探讨最后一种情况。尽管实际上，它可能是生成HTML的最不流行的方法，但是了解基本的构建基块仍然是必不可少的。

按照约定，HTML文件以.html或.htm扩展名保存。

在此文件中，我们使用**tags**来组织内容。

标签包装内容，每个标签为其包装的文本赋予特殊含义。

让我们举几个例子。

这个HTML片段使用p标签创建了一个段落：

```<p>A paragraph of text</p>```

此HTML代码段使用ul标签（表示无序列表）和litags（表示列表项）创建项目列表：

```
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

当浏览器为HTML页面提供服务时，将解析标签，然后浏览器将根据定义其视觉外观的规则来渲染元素。

其中一些规则是内置的，例如列表的呈现方式或链接的蓝色底线显示方式。

其他一些规则由您使用CSS设置。

HTML不是演示性的。它与事物的外观无关。相反，它关心事物的含义。

浏览器由CSS语言来决定外观，由谁来构建页面来定义指令。


现在，我做的两个例子是在页面上下文之外获取的HTML代码段。


# HTML页面结构

让我们举一个合适的HTML页面的例子。

事情从文档类型声明（也称为doctype）开始，一种告诉浏览器这是HTML页面的方式，以及我们使用的HTML版本。

Modern HTML uses this doctype:

```<！DOCTYPE html>```

然后，我们有了html元素，它具有一个开始和结束标记：

```
<！DOCTYPE html>
<html>
...
</ html>
```

大多数标签与开始标签和结束标签成对出现。结束标记与开始标记的书写方式相同，但带有/：

```<sometag>some content</sometag>```

有几个自动关闭标签，这意味着它们不需要单独的关闭标签，因为它们中不包含任何内容。

html起始标记用于文档的开头，紧随文档类型声明之后。

html结束标记是HTML文档中存在的最后一件事。

在html元素内，我们有2个元素：head和body：

```
<！DOCTYPE html>
<html>
    <head>
    ...
    </ head>
    <body>
    ...
    </ body>
</ html>
```

在头部内部，我们将具有创建网页所必需的标签，例如标题，元数据以及内部或外部CSS和JavaScript。通常情况下，不会直接显示在页面上的东西只会帮助浏览器（或Google搜索机器人等机器人）正确显示它。

在主体内部，我们将获得页面的内容。可见的东西。


# 标签与元素

我提到了标签和元素。有什么不同？

元素具有开始标记和结束标记。在此示例中，我们使用p开始和结束标记创建p元素：

```<p>A paragraph of text</p>```

因此，一个元素构成了整个包装：

+ 起始标签

+ 文字内容（可能还有其他元素）

+ 结束标签

如果元素没有结束标记，则仅使用开始标记编写，并且不能包含任何文本内容。

就是说，我可能会在书中使用标签或元素一词来表示相同的意思，除非我明确提到开始标签或结束标签。


# 属性

元素的开始标记可以包含我们可以附加的特殊信息片段，称为属性。

属性具有key =“ value”语法：

```<p class="a-class">A paragraph of text</p>```

您也可以使用单引号，但是在HTML中使用双引号是一个很好的约定。

我们可以有很多：

```<p class="a-class" id="an-id">A paragraph of text</p>```

并且某些属性是布尔值，这意味着您只需要键：

```<script defer src =“ file.js”> </ script>```

class和id属性是您会发现最常用的两个属性。

它们具有特殊的含义，并且在CSS和JavaScript中都非常有用。

两者之间的区别在于，id在网页的上下文中是唯一的；它不能重复。

另一方面，类可以在多个元素上多次出现。

另外，id只是一个值。类可以包含多个值，以空格分隔：

```<p class="a-class another-class">A paragraph of text</p>```

通常使用破折号-在类值中分隔单词，但这只是一个约定。

这些只是您可能拥有的两个属性。有些属性仅用于一个标签。他们是高度专业化的。

可以以更通用的方式使用其他属性。您刚刚看到了id和class，但是我们还有其他一些，例如style，可用于在元素上插入内联CSS规则。


# 不区分大小写

HTML不区分大小写。标签可以全部大写，也可以小写。在早期，上限是常态。今天，小写字母已成为规范。这是一个惯例。

您通常这样写：

```<p>A paragraph of text</p>```

不像这样：

```<P>A paragraph of text</P>```

# 空格

相当重要在HTML中，即使您在一行中添加了多个空格，浏览器的CSS引擎也会将其折叠。


例如，本段的呈现：

```<p>A paragraph of text</p>```

与此相同：

```<p>        A paragraph of text</p>```
与此相同：

```
<p>A paragraph

of
           text          </p>
```

使用[空白CSS属性](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)，您可以更改行为方式。您可以在[CSS Spec](https://www.w3.org/TR/CSS2/text.html#white-space-model)中找到有关CSS如何处理空白的更多信息。

我通常喜欢

```<p>A paragraph of text</p>```

要么

```
<p>
    A paragraph of text
</p>
```

嵌套标签应缩进2或4个字符，具体取决于您的偏好：

```
<body>
    <p>
        A paragraph of text
    </p>
    <ul>
        <li>A list item</li>
    </ul>
</body>
```

**注意**：在特殊情况下，您可以使用＆nbsp; HTML实体（首字母缩写，表示不间断空格）-有关HTML实体的更多信息。我认为这不应被滥用。始终首选使用CSS来更改视觉呈现。

# 文件标题

head标签包含定义文档属性的特殊标签。

它总是写在body标签之前，紧接在html标签之后：

```
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    ...
</html>
```

我们永远不会在此标签上使用属性。而且我们不会在其中编写内容。

它只是其他标签的容器。在其中，根据您需要执行的操作，我们可以使用多种标签：

+ 标题

+ 脚本

+ Noscript

+ 链接

+ 样式

+ 基础

+ 元素


## 标题标签

title标签确定页面标题。标题显示在浏览器中，它尤其重要，因为它是搜索引擎优化（SEO）的关键因素之一。


## 脚本标签

此标记用于将JavaScript添加到页面中。

您可以使用开始标记，JavaScript代码和结束标记来内联包含它：

```
<script>
..some JS
</script>
```

或者，您可以使用src属性加载外部JavaScript文件：

```<script src="file.js"></script>```

默认情况下，type属性设置为text / javascript，因此它是完全可选的。

关于此标签，有一些非常重要的知识。

有时，在页面底部</ body>标记之前使用此标记。为什么？出于性能原因。

默认情况下，加载脚本会阻止页面的呈现，直到解析并加载脚本为止。

通过将其放在页面底部，可以在已经解析并加载整个页面之后加载并执行脚本，与保留在head标记中相比，可以为用户提供更好的体验。

我的看法是，这现在是不好的做法。让脚本保留在head标签中。

在现代JavaScript中，我们有一个替代方案，那就是比将脚本保留在页面底部（defer属性）更有效。这是一个相对于当前URL加载file.js文件的示例：

```<script defer src="file.js"></script>```

这种情况触发了到快速加载页面和快速加载JavaScript的更快路径。

注意：async属性是相似的，但是我认为比defer更糟糕。我会在[https://flaviocopes.com/javascript-async-defer/](https://flaviocopes.com/javascript-async-defer/)

## Noscript标签

此标记用于检测何时在浏览器中禁用了脚本。

**注意**：用户可以选择在浏览器设置中禁用JavaScript脚本。否则，浏览器可能默认不支持它们。

根据将其放置在文档头还是文档正文中，它的用法有所不同。

我们现在正在谈论文档头，因此让我们首先介绍这种用法。

在这种情况下，noscript标签只能包含其他标签：

+ 链接标签

+ 样式标签

+ 元标记

如果禁用了脚本，则更改页面提供的资源或元信息。

在此示例中，我使用no-script-alert类设置了一个元素，以显示是否禁用了脚本，因为它是显示的：默认情况下，没有显示：

```
<!DOCTYPE html>
<html>
    <head>
        ...
        <noscript>
            <style>
                .no-script-alert {
                    display: block;
                }
            </style>
        </noscript>

        ...
    </head>
    ...
</html>
```

让我们解决另一种情况：如果放在正文中，它可以包含在UI中呈现的内容，例如段落和其他标签。

## 链接标签

链接标签用于设置文档和其他资源之间的关系。

它主要用于链接要加载的外部CSS文件。

该元素没有结束标签

Usage:

用法：
```
<!DOCTYPE html>
<html>
    <head>
        ...
        <link href="file.css" rel="stylesheet">
        ...
    </head>
    ...
</html>
```

media属性允许根据设备功能加载不同的样式表：

```
<link href="file.css" media="screen" rel="stylesheet">
<link href="print.css" media="print" rel="stylesheet">
```

我们还可以链接到样式表以外的资源。

例如，我们可以使用

```<link rel="alternate" type="application/rss+xml" href="/index.xml">```

或者我们可以使用以下方式关联收藏夹图标：

```
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">

<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">

<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
```

此标记还用于多页内容，以使用rel =“ prev”和rel =“ next”指示上一页和下一页。主要用于Google。截至2019年，[Google宣布不再使用此标签](https://twitter.com/googlewmc/status/1108726443251519489)，因为没有它它可以找到正确的页面结构。

## 样式标签

此标记可用于将样式添加到文档中，而不是加载外部样式表。

用法：

```
<style>
.some-css {}
</style>
```

与link标签一样，您可以使用media属性仅在指定的介质上使用该CSS：

```
<style media="print">
.some-css {}
</style>
```

## 基本标签

此标记用于为页面中包含的所有相对URL设置基本URL。

```
<!DOCTYPE html>
<html>
    <head>
        ...
        <base href="https://flaviocopes.com/">
        ...
    </head>
    ...
</html>
```

## 元标记

元标记执行各种任务，它们非常非常重要。

特别是对于SEO。

元元素仅具有开始标记。

最基本的一个是description meta标签：

```<meta name="description" content="A nice page">```

如果Google发现比页面上的内容更好地描述页面，则可以使用它在结果页面中生成页面描述（不要问我怎么做）。

字符集元标记用于设置页面字符编码。 utf-8在大多数情况下：

```<meta charset="utf-8">```

robots元标记可指示搜索引擎机械手是否对页面建立索引：

```<meta name="robots" content="noindex">```

或者他们是否应该遵循链接：

```<meta name="robots" content="nofollow">```

You can set nofollow on individual links, too. This is how you can set nofollow globally.

您也可以在单个链接上设置nofollow。这样可以全局设置nofollow。

您可以将它们组合：

```<meta name="robots" content="noindex, nofollow">```

默认行为是索引，请遵循。

您可以使用其他属性，包括nosnippet，noarchive，noimageindex等。

您也可以告诉Google而不是定位所有搜索引擎：

```<meta name="googlebot" content="noindex, nofollow">```

其他搜索引擎也可能具有自己的meta标签。

说到这一点，我们可以告诉Google禁用某些功能。这会阻止搜索引擎结果中的翻译功能：

<meta name="google" content="notranslate">

视口meta标签用于告诉浏览器根据设备宽度设置页面宽度。

```<meta name="viewport" content="width=device-width, initial-scale=1">```

[查看有关此标签的更多信息](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)。

另一个比较流行的meta标签是http-equiv =“ refresh”标签。此行告诉浏览器等待3秒钟，然后重定向到该其他页面：

```<meta http-equiv="refresh" content="3;url=http://flaviocopes.com/another-page">```

使用0而不是3将尽快重定向。

这不是完整的参考；存在其他较少使用的元标记。

介绍完本文档标题后，我们就可以开始深入研究文档正文了。


# 文件主体

在关闭head标签之后，我们在HTML文档中只能有一件东西：body元素。

```
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

就像head和html标签一样，我们在一页中只能有一个body标签。

在body标签内，我们具有定义页面内容的所有标签。

从技术上讲，开始和结束标记是可选的。但是我认为添加它们是一个好习惯。为了清楚起见。

在下一章中，我们将定义可在页面正文中使用的各种标签。

但是，在此之前，我们必须在块元素和内联元素之间引入区别。

## 块元素与内联元素

在页面正文中定义的视觉元素通常可以分为两类：

+ 块元素（p，div，标题元素，列表和列表项，...）

+ 内联元素（a，span，img，...）

有什么区别？

块元素位于页面中时，不允许其他元素位于它们旁边。在左边或右边。

相反，内联元素可以坐在其他内联元素旁边。

区别还在于我们可以使用CSS编辑的视觉属性。我们可以更改块元素的宽度/高度，边距，填充和边框。我们不能对内联元素执行此操作。

请注意，使用CSS我们可以更改每个元素的默认设置，例如将p标签设置为内联，或将span设置为block元素。

另一个区别是内联元素可以包含在块元素中。反之则不成立。

某些块元素可以包含其他块元素，但这要视情况而定。例如，p标签不允许这种选项。


## 与文字互动的标签

### p标签

该标签定义了一段文本。

```<p>Some text</p>```

这是一个块元素。

在其中，我们可以添加任何喜欢的内联元素，例如span或a。

我们不能添加块元素。

我们不能将p元素嵌套到另一个元素中。

默认情况下，浏览器设置段落样式的顶部和底部为空白。在Chrome中为16px，但实际值可能因浏览器而异。

这将导致两个连续的段落被隔开，从而复制了我们在打印文本中所认为的“段落”。

### span 标签

这是一个内联标签，可用于在可使用CSS定位的段落中创建一个部分：

```<p>A part of the text <span>and here another part</span></p>```

### br 标签

此标记表示换行符。这是一个内联元素，不需要结束标记。

我们使用它在p标记内创建新行，而无需创建新段落。

与创建新段落相比，它不会增加额外的间距。

```<p>Some text<br>A new line</p>```

### 标题标签

HTML为我们提供了6个标题标签。从最重要到最不重要，我们有h1，h2，h3，h4，h5，h6。

通常，页面将具有一个h1元素，即页面标题。然后，根据页面内容，您可能会有一个或多个h2元素。

标题，尤其是标题组织，对于SEO也是必不可少的，搜索引擎以各种方式使用它们。

默认情况下，浏览器将使h1标签变大，并且随着h附近的数字增加，元素的大小将减小：

# 此处有图片

所有标题都是块元素。它们不能包含其他元素，而只能是文本。

### strong 标签

此标记用于将其中的文本标记为强。这非常重要，它不是视觉提示，而是语义提示。根据使用的介质，其解释将有所不同。

默认情况下，浏览器使该标记中的文本变为粗体。

### em标签

此标记用于标记其中强调的文本。就像强一样，它不是视觉提示，而是语义提示。

浏览器默认情况下以斜体显示文本。

### Quotes

blockquote HTML标记可用于在文本中插入引文。

默认情况下，浏览器对blockquote元素应用边距。 Chrome会应用40px左右边距，以及10px上下边距。

q HTML标记用于内联引号。

### 水平线

并非真正基于文本，但是hr标签通常在页面内使用。这表示水平尺，并在页面中添加一条水平线。

有助于分隔页面中的各个部分。

### 代码块

code标签对于显示代码特别有用，因为浏览器为它提供了等宽字体。

这通常是浏览器唯一要做的。这是Chrome应用的CSS：

```
code {
    font-family: monospace;
}
```

此标记通常包装在pre标记中，因为代码元素会忽略空格和换行符。像p标签一样。

Chrome会预先提供此默认样式：

```
pre {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
}
```

这可以防止空格崩溃并使其成为块元素。

### 列表

我们有3种类型的列表：

+ 无序列表

+ 有序列表

+ 定义清单

使用ul标签创建无序列表。列表中的每个项目都是使用li标签创建的：

```
<ul>
    <li>First</li>
    <li>Second</li>
</ul>
```

有序列表是相似的，只是用ol标签制成：

```
<ol>
    <li>First</li>
    <li>Second</li>
</ol>
```

两者之间的区别在于，有序列表在每个项目之前都有一个数字：

# 此处有图片

定义列表有些不同。您有一个术语及其定义：

```
<dl>
    <dt>Flavio</dt>
    <dd>The name</dd>
    <dt>Copes</dt>
    <dd>The surname</dd>
</dl>
```

这是浏览器通常呈现它们的方式：

# 此处有图片

我必须说，您很少在野外看到它们，肯定不会像ul和ol那样多，但是有时它们可​​能有用。

### 其他文字标签

有许多具有演示目的的标签：

+ mark 标签

+ ins 标签

+ del 标签

+ sup 标签

+ sub 标签

+ small 标签

+ i 标签

+ b 标签

这是它们的视觉渲染的示例，默认情况下浏览器会应用它们：

# 此处有图片

您可能想知道，b与强有什么不同？我与em有何不同？

区别在于语义上。 b和i是浏览器的直接提示，使一段文本变为粗体或斜体，strong和em赋予该文本特殊的含义，这取决于浏览器的样式。默认情况下，它恰好与b和i完全相同。尽管您可以使用CSS进行更改。

还有许多其他与文本相关的较少使用的标签。我刚刚提到了使用最多的那些。


# 链接

链接是使用a标签定义的。链接目标是通过其href属性设置的。

例：

 ```<a href="https://flaviocopes.com">click here</a>```

在开始标记和结束标记之间，我们有链接文本。

上面的示例是绝对URL。链接也可以使用相对URL：

```<a href="/test">click here</a>```

在这种情况下，单击链接时，用户将移动到当前来源的/ test URL。

请注意/字符。如果省略，则浏览器将代替将测试字符串添加到当前URL，而不是从原始位置开始

例如，我在页面https://flaviocopes.com/axios/ 上，我具有以下链接：

+ 一次点击即可将我带到https://flaviocopes.com/test

+ 单击测试，将我带到https://flaviocopes.com/axios/test

链接标签可以在其中包含其他内容，而不仅仅是文本。例如，图像：

```
<a href="https://flaviocopes.com">
    <img src="test.jpg">
</a>
```

或其他任何元素，但其他<a>标记除外。

如果要在新选项卡中打开链接，则可以使用target属性：

```<a href="https://flaviocopes.com" target="_blank">open in new tab</a>```

# 容器标签和页面结构HTML

## 容器标签

HTML提供了一组容器标记。这些标签可以包含一组未指定的其他标签

我们有：

+ 文章

+ 区段

+ div

理解它们之间的差异可能会造成混淆。


让我们看看何时使用它们中的每一个。

### 文章

article标签标识可以独立于页面中其他事物的事物。

例如，主页中的博客文章列表。

或链接列表。

```
<div>
    <article>
        <h2>A blog post</h2>
        <a ...>Read more</a>
    </article>
    <article>
        <h2>Another blog post</h2>
        <a ...>Read more</a>
    </article>
</div>
```

我们不仅限于列表：文章可以是页面中的主要元素。

```
<article>
    <h2>A blog post</h2>
    <p>Here is the content...</p>
</article>
```

在商品标签内，我们应该有一个标题（h1-h6）和

### 区段

代表文档的一部分。每个节都有一个标题标签（h1-h6），然后是节主体。

例：

```
<section>
    <h2>A section of the page</h2>
    <p>...</p>
    <img ...>
</section>
```

将较长的文章分成不同的部分很有用。

不应用作通用容器元素。 div是为此而设计的。

### div

div是通用容器元素：

```
<div>
    ...
</div>
```

您经常向该元素添加class或id属性，以允许使用CSS对其进行样式设置。

我们在需要容器的任何地方使用div，但现有标签不合适。

## 与页面相关的标签

### nav标签

此标记用于创建定义页面导航的标记。为此，我们通常添加一个ulor ol列表：

```
<nav>
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
    </ol>
</nav>
```

### aside标签

aside标签用于添加与主要内容相关的内容。

例如，在其中添加引号的框。或侧边栏。

例：

```
<div>
  <p>some text..</p>
  <aside>
    <p>A quote..</p>
  </aside>
  <p>other text...</p>
</div>
```

使用side表示它包含的内容不属于它所在的部分的常规流程的一部分。

### header标签

标头标记代表页面的一部分，即简介。例如，它可以包含一个或多个标题标签（h1-h6），商品的标语，图像。

```
<article>
  <header>
      <h1>Article title</h1>
  </header>
  ...
</div>
```
### main标签

main标签代表页面的主要部分：

```
<body>
  ....
  <main>
    <p>....</p>
  </main>
</body>
```

### footer标签

页脚标记用于确定文章的页脚或页面的页脚：

```
<article>
 ....
  <footer>
    <p>Footer notes..</p>
  </footer>
</div>
```

# 表单

表单是您与使用Web技术构建的页面或应用程序进行交互的方式。

您具有一组控件，并且在提交表单时（单击“提交”按钮或以编程方式单击），浏览器会将数据发送到服务器。

默认情况下，此数据发送会导致在发送数据后重新加载页面，但是可以使用JavaScript更改此行为（在本书中不做解释）。

使用form标记创建一个表单：

```
<form>
    ...
</form>
```

默认情况下，表单是使用GET HTTP方法提交的。这有其缺点，通常您要使用POST。

您可以使用method属性将表单设置为在提交时使用POST：

```
<form method="POST">
    ...
</form>
```

使用GET或POST将表单提交到其驻留的相同URL。

因此，如果表单位于https://flaviocopes.com/contacts页面，则按“提交”按钮将向该URL发出请求。

可能什么也不会发生。

您需要服务器端来处理请求，通常您会“监听”专用URL上的那些表单提交事件。

您可以通过action参数指定URL：

```
<form action="/new-contact" method="POST">
    ...
</form>
```

这将导致浏览器使用POST将表单数据提交到同一来源的/ new-contact URL。

如果来源（协议+域+端口）为https://flaviocopes.com（默认端口80），则意味着表单数据将发送到https://flaviocopes.com/new-contact。

我谈到了数据。哪些数据？

用户通过Web平台上可用的一组控件提供数据：

+ input boxes （单行文本）

+ text areas（多行文字）

+ select boxes（从下拉菜单中选择一个选项）

+ radio buttons（从始终可见的列表中选择一个选项）

+ checkboxes（选择零，一个或多个选项）

+ file uploads(文件上传)

+ 还有更多！

让我们在以下表单字段概述中介绍其中的每一个。

### input标签

输入字段是使用最广泛的表单元素之一。这也是一个非常通用的元素，它可以根据type属性完全更改行为。

默认行为是单行文本输入控件：

```<input>```

等效于使用：

```<input type="text">```

与后面的所有其他字段一样，您需要给该字段命名，以便在提交表单时将其内容发送到服务器：

```<input type="text" name="username">```

当字段为空时，占位符属性用于以浅灰色显示一些文本。有助于向用户提示输入内容：

```<input type="text" name="username" placeholder="Your username">```

#### 电子邮件

使用type =“ email”将在提交之前验证客户端（在浏览器中）电子邮件的正确性（语义正确性，不能确保电子邮件地址存在）

```<input type="email" name="email" placeholder="Your email">```

#### 密码

使用type =“ password”将使输入的每个键都显示为星号（*）或点，这对于承载密码的字段很有用。

```<input type="password" name="password" placeholder="Your password">```

#### 号码

您可以让输入元素仅接受数字：

```<input type="number" name="age" placeholder="Your age">```

您可以指定可接受的最小值和最大值：

```<input type="number" name="age" placeholder="Your age" min="18" max="110">```

step属性有助于识别不同值之间的步骤。例如，以5的步长接受10到50之间的值：

```<input type="number" name="a-number"  min="10" max="50" step="5">```

#### 隐藏领域

可以向用户隐藏字段。提交表单后，它们仍将发送到服务器：

```<input type="hidden" name="some-hidden-field" value="some-value">```

它通常用于存储诸如CSRF令牌之类的值，用于安全性和用户标识，甚至使用特殊技术来检测发送垃圾邮件的机器人。

它也可以仅用于识别表单及其动作。

#### 设定默认值

所有这些字段均接受预定义的值。如果用户不更改它，那么它将是发送到服务器的值：

```<input type="number" name="age" value="18">```

如果设置了占位符，则当用户清除输入字段值时，将显示该值：

```<input type="number" name="age" placeholder="Your age" value="18">```

#### 表格提交

type =“ submit”字段是一个按钮，一旦被用户按下，将提交表单：

<input type="submit">

value属性设置按钮上的文本，如果缺少该文本，则会显示“提交”文本：

<input type="submit" value="Click me">

#### 表格验证

浏览器为表单提供客户端验证功能。

您可以根据需要设置字段，以确保将其填充，并对每个字段的输入强制采用特定格式。

让我们看看两个选项。

#### 根据需要设置字段

必填属性可帮助您进行验证。如果未设置该字段，则客户端验证将失败，并且浏览器不会提交表单：

```<input type="text" name="username" required>```

#### 强制执行特定格式

我在上面描述了type =“ email”字段。它会根据规范中设置的格式自动验证电子邮件地址。

在type =“ number”字段中，我提到了min和max属性以限制输入到间隔的值。

您可以做更多。

您可以在任何字段上强制使用特定格式。

pattern属性使您能够设置正则表达式来验证值。

我建议阅读我的正则表达式指南，网址为 [flaviocopes.com/javascript-regular-expressions/](flaviocopes.com/javascript-regular-expressions/).

pattern="https://.*"

```<input type="text" name="username" pattern="[a-zA-Z]{8}">```


#### 其他领域

##### 文件上传

您可以从本地计算机加载文件，然后使用type =“ file”输入元素将其发送到服务器：

```<input type="file" name="secret-documents">```

您可以附加多个文件：

```<input type="file" name="secret-documents" multiple>```

您可以使用accept属性指定允许的一种或多种文件类型。这接受图像：

```<input type="file" name="secret-documents" accept="image/*">```

您可以使用特定的MIME类型（例如application / json）或设置文件扩展名（例如.pdf）。或设置多个文件扩展名，如下所示：

```<input type="file" name="secret-documents" accept=".jpg, .jpeg, .png">```

##### 按钮

type =“ button”输入字段可用于向表单添加不是提交按钮的其他按钮：

```<input type="button" value="Click me">```

它们用于使用JavaScript以编程方式执行某些操作。

有一个特殊的字段呈现为按钮，其特殊动作是清除整个表单并将字段的状态恢复为初始状态：

```<input type="reset">```

##### 单选按钮

单选按钮用于创建一组选项，其中一个选项被按下，其他所有选项均被禁用。


这个名字来自具有这种接口的老式汽车收音机。

您定义一组type =“ radio”输入，所有输入都具有相同的name属性和不同的value属性：

```
<input type="radio" name="color" value="yellow">

<input type="radio" name="color" value="red">

<input type="radio" name="color" value="blue">
```

提交表单后，颜色数据属性将只有一个值。

总会检查一个元素。第一项是默认情况下选中的项。

您可以使用checked属性设置预先选择的值。每个无线电输入组只能使用一次。

##### 选框

与单选框相似，但它们允许选择多个值，或者根本不选择。

您定义一组type =“ checkbox”输入，所有输入都具有相同的name属性和不同的value属性：

```
<input type="checkbox" name="color" value="yellow">

<input type="checkbox" name="color" value="red">

<input type="checkbox" name="color" value="blue">
```

默认情况下，所有这些复选框都不会选中。使用checked属性在页面加载时启用它们。

由于此输入字段允许多个值，因此在表单提交时，这些值将作为数组发送到服务器。

##### 日期和时间

我们有一些输入类型可以接受日期值。

type =“ date”输入字段允许用户输入日期，并在需要时显示日期选择器：

```<input type="date" name="birthday">```

type =“ time”输入字段允许用户输入时间，并在需要时显示时间选择器：

```<input type="time" name="time-to-pickup">```

type =“ month”输入字段允许用户输入月份和年份：

```<input type="month" name="choose-release-month">```

type =“ week”输入字段允许用户输入一周和一年：

```<input type="week" name="choose-week">```

所有这些字段均允许限制范围和每个值之间的步长。我建议检查MDN以获取有关其用法的详细信息。

使用type =“ datetime-local”字段可以选择日期和时间。

```<input type="datetime-local" name="date-and-time">```

这是测试所有页面的页面： [https://codepen.io/flaviocopes/pen/ZdWQPm](https://codepen.io/flaviocopes/pen/ZdWQPm)

##### 颜色选择器

您可以使用type =“ color”元素让用户选择一种颜色：

```<input type="color" name="car-color">```

您可以使用value属性设置默认值：

<input type="color" name="car-color" value="#000000">

浏览器将负责向用户显示颜色选择器。

##### 范围

该输入元素显示一个滑块元素。人们可以使用它从开始值到结束值：

```<input type="range" name="age" min="0" max="100" value="30">```

您可以提供一个可选步骤：

```<input type="range" name="age" min="0" max="100" value="30" step="10">```

##### 电话

type =“ tel”输入字段用于输入电话号码：

```<input type="tel" name="telephone-number">```

使用tel over text的主要卖点是在移动设备上，该设备可以选择显示数字键盘。

指定模式属性以进行其他验证：

```<input type="tel" pattern="[0-9]{3}-[0-9]{8}" name="telephone-number">```

##### 网址

type =“ url”字段用于输入URL。

```<input type="url" name="website">```

您可以使用pattern属性对其进行验证：

```<input type="url" name="website"  pattern="https://.*">```

### textarea标签

textarea元素允许用户输入多行文本。与输入相比，它需要一个结束标记：

```<textarea></textarea>```

您可以使用CSS设置尺寸，也可以使用row和cols属性：

```<textarea rows="20" cols="10"></textarea>```

与其他表单标签一样，name属性确定发送到服务器的数据中的名称：

```<textarea name="article"></textarea>```

### 选择标签

该标签用于创建下拉菜单。


用户可以选择可用的选项之一。

每个选项都是使用option标记创建的。您为选择添加一个名称，并为每个选项添加一个值：

```
<select name="color">
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
</select>
```

您可以将选项设置为禁用：

```
<select name="color">
    <option value="red" disabled>Red</option>
    <option value="yellow">Yellow</option>
</select>
```

您可以有一个空选项：

```
<select name="color">
    <option value="">None</option>
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
</select>
```

可以使用optgroup标记对选项进行分组。每个选项组都有一个标签属性：

```
<select name="color">
    <optgroup label="Primary">
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
    </optgroup>
    <optgroup label="Others">
        <option value="green">Green</option>
        <option value="pink">Pink</option>
    </optgroup>
</select>
```

# 表格

Web表格的早期是建筑布局的重要组成部分。

后来，它们被CSS及其布局功能所取代，如今，我们拥有功能强大的工具（如CSS Flexbox和CSS Grid）来构建布局。表现在仅用于猜测表的构建！

## 表格标签

使用table标记定义一个表：

```
<table>

</table>
```

在表内部，我们将定义数据。我们根据行进行推理，这意味着我们将行添加到表中（而不是列中）。我们将在一行中定义列。

## 行数

使用tr标记添加一行，这是我们唯一可以添加到表元素中的东西：

```
<table>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

这是一个有3行的表。

第一行可以充当标题。

## 列标题

表标题包含列名，通常以粗体显示。

考虑一下Excel / Google表格文档。顶部的A-B-C-D ...标头。

# 此处有图

```
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr></tr>
  <tr></tr>
</table>
```

## 表内容

该表的内容是在其他tr元素内部使用td标签定义的：

```
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td>Row 1 Column 1</td>
    <td>Row 1 Column 2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td>Row 2 Column 1</td>
    <td>Row 2 Column 2</td>
    <td>Row 2 Column 3</td>
  </tr>
</table>

```
如果您不添加任何CSS样式，这就是浏览器呈现它的方式：


# 此处有图

添加此CSS：

```
th, td {
  padding: 10px;
  border: 1px solid #333;
}
```

使该表看起来更像一个合适的表：

# 此处有图

## 跨栏和行

使用colspan属性，行可以决定跨越2列或更多列：

```
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td colspan="2">Row 1 Columns 1-2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td colspan="3">Row 2 Columns 1-3</td>
  </tr>
</table>
```

# 此处有图

或者，可以使用rowspan属性跨越两行或更多行：

```
<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <td colspan="2" rowspan="2">Rows 1-2 Columns 1-2</td>
    <td>Row 1 Column 3</td>
  </tr>
  <tr>
    <td>Row 2 Column 3</td>
  </tr>
</table>
```

# 此处有图

## 行标题

在我解释如何使用表的第一个tr标记内的th标记解释列标题之前。

您可以将th标记添加为tr（不是表的第一个tr）中的第一个元素，以具有行标题：

```
<table>
  <tr>
    <th></th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <tr>
    <th>Row 1</th>
    <td>Col 2</td>
    <td>Col 3</td>
  </tr>
  <tr>
    <th>Row 2</th>
    <td>Col 2</td>
    <td>Col 3</td>
  </tr>
</table>
```


## 更多标签来组织表格

您可以在表格中添加3个以上的标签，以使其更有条理。

使用大表时最好。并正确定义页眉和页脚。

这些标签是

+ thead

+ tbody

+ tfoot

它们包装tr标记以清楚地定义表的不同部分。这是一个例子：

```
<table>
  <thead>
    <tr>
      <th></th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row 1</th>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th>Row 2</th>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td>Footer of Col 1</td>
      <td>Footer of Col 2</td>
    </tr>
  </tfoot>
</table>
```

# 此处有图

## 表格标题

一个表应具有描述其内容的标题标签。该标签应放在开头表格标签之后：

```
<table>
  <caption>Dogs age</caption>
  <tr>
    <th>Dog</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Roger</td>
    <td>7</td>
  </tr>
</table>
```

# 多媒体标签：音频和视频

在本节中，我想向您展示音频和视频标签。

## 音频标签

该标签允许您将音频内容嵌入HTML页面。

该元素可以通过getUserMedia（）使用麦克风来流音频，或者可以播放您使用src属性引用的音频源：

```<audio src="file.mp3">```
  
默认情况下，浏览器不显示此元素的任何控件。这意味着只有在设置为自动播放时音频才会播放（稍后会详细介绍），并且用户看不到如何停止音频，控制音量或在轨道上移动。

要显示内置控件，可以添加controls属性：

```<audio src="file.mp3" controls>```
  
控件可以具有自定义外观。

您可以使用type属性指定音频文件的MIME类型。如果未设置，浏览器将尝试自动确定它：

<audio src="file.mp3" controls type="audio/mpeg">
  
默认情况下，音频文件不会自动播放。添加自动播放属性以自动播放音频：

```<audio src="file.mp3" controls autoplay>```
  
注意：移动浏览器不允许自动播放

如果设置了loop属性，则会在0:00重新开始播放音频；否则，如果不存在，音频将在文件末尾停止：

```<audio src="file.mp3" controls autoplay loop>```

您还可以使用静音属性播放静音的音频文件（不十分确定这有什么用）：

```<audio src="file.mp3" controls autoplay loop muted>```

使用JavaScript，您可以侦听音频元素上发生的各种事件，其中最基本的是：

+ play 文件开始播放时播放

+ pause 音频播放暂停时暂停

+ playing 从暂停恢复音频时播放

+ ended 到达音频文件末尾时结束

## 视频标签

该标签允许您将视频内容嵌入HTML页面。

该元素可以使用网络摄像头通过getUserMedia（）或WebRTC流式传输视频，也可以播放使用src属性引用的视频源：

```<video src="file.mp4">```
  
默认情况下，浏览器不显示该元素的任何控件，仅显示视频。

这意味着仅当设置为自动播放时，视频才会播放（稍后会详细介绍），并且用户看不到如何停止，暂停，控制音量或跳到视频中的特定位置。

要显示内置控件，可以添加controls属性：

```<video src="file.mp4" controls>```
  
控件可以具有自定义外观。

您可以使用type属性指定视频文件的MIME类型。如果未设置，浏览器将尝试自动确定它：

```<video src="file.mp4" controls type="video/mp4">```
  
默认情况下，视频文件不会自动播放。添加自动播放属性以自动播放视频：

```<video src="file.mp4" controls autoplay>```
  
某些浏览器还需要静音属性才能自动播放。视频仅在静音时自动播放：

```<audio src="file.mp3" controls autoplay muted>```
  
如果设置了loop属性，则会在0:00重新开始播放视频；否则，如果不存在，则视频在文件结尾处停止：

```<video src="file.mp4" controls autoplay loop>```
  
您可以将图像设置为海报图像：

```<video src="file.mp4" poster="picture.png">```
  
如果不存在，浏览器将在可用时立即显示视频的第一帧。

您可以设置width和height属性以设置元素将要占用的空间，以便浏览器可以考虑它，并且在最终加载时它不会更改布局。它需要一个数值，以像素为单位。

使用JavaScript，您可以侦听视频元素上发生的各种事件，其中最基本的是：

+ play 文件开始播放时播放

+ pause 视频暂停时暂停

+ playing 从暂停恢复视频播放

+ ended 到达视频文件末尾时结束


# 框架


iframe标签允许我们将来自其他来源（其他网站）的内容嵌入到我们的网页中。


从技术上讲，iframe会创建一个新的嵌套浏览上下文。这意味着iframe中的任何内容都不会干扰父页面，反之亦然。 JavaScript和CSS不会从iframe中“泄漏”。

许多网站都使用iframe执行各种操作。您可能熟悉Codepen，Glitch或其他允许您在页面的一部分进行编码的站点，并且在框中看到了结果。那是一个iframe。

```<iframe src="page.html"></iframe>```

您也可以加载绝对URL：

```<iframe src="https://site.com/page.html"></iframe>```

您可以设置一组宽度和高度参数（或使用CSS进行设置），否则iframe将使用默认的300x150像素框：

```<iframe src="page.html" width="800" height="400"></iframe>```

## Srcdoc

srcdoc属性使您可以指定一些要显示的内联HTML。它是src的替代方法，但是是最新的，并且在Edge 18及更低版本以及IE中不受支持：

```<iframe srcdoc="<p>My dog is a good dog</p>"></iframe>```

## sandbox

sandbox属性可让我们限制iframe中允许的操作。

如果我们忽略它，则一切都被允许：

```<iframe src="page.html"></iframe>```

如果将其设置为“”，则不允许任何操作：

```<iframe src="page.html" sandbox=""></iframe>```

我们可以通过在sandbox属性中添加选项来选择允许的内容。您可以通过在两者之间添加一个空格来允许多个。这是您可以使用的选项的不完整列表：

+ allow-forms: 允许提交表格

+ allow-modals 允许打开模式窗口，包括在JavaScript中调用alert（）

+ allow-orientation-lock 允许锁定屏幕方向

+ allow-popups 使用window.open（）和target =“ _ blank”链接允许弹出窗口

+ allow-same-origin 将正在加载的资源视为相同来源

+ allow-scripts  允许加载的iframe运行脚本（但不能创建弹出窗口）。

+ allow-top-navigation 允许访问iframe到顶级浏览上下文

# Allow

目前尚处于试验阶段，仅受基于Chromium的浏览器支持，这是父窗口与iframe之间资源共享的未来。

它类似于sandbox属性，但是让我们允许特定的功能，包括：

+ accelerometer  允许访问Sensors API加速度计界面

+ ambient-light-sensor 允许访问Sensors API AmbientLightSensor接口

+ autoplay 允许自动播放视频和音频文件

+ camera 允许从getUserMedia API访问摄像机

+ display-capture 允许使用getDisplayMedia API访问屏幕内容

+ fullscreen 允许进入全屏模式

+ geolocation 允许访问Geolocation API

+ gyroscope 允许访问Sensors API陀螺仪界面

+ magnetometer 允许访问Sensors API磁力计接口

+ microphone 使用getUserMedia API允许访问设备麦克风

+ midi 允许访问Web MIDI API

+ payment 允许访问付款请求API

+ speaker 允许通过设备扬声器播放音频

+ usb 允许访问WebUSB API。

+ vibrate 允许访问振动API

+ vr 允许访问WebVR API

# Referrer

加载iframe时，浏览器会在Referer标头中向其发送有关谁正在加载iframe的重要信息（请注意单个r，这是我们必须忍受的错字）。

引荐来源网址的拼写错误源自计算机科学家Phillip Hallam-Baker最初提出的将字段合并到HTTP规范中的提议。在将拼写错误合并到“请求注释”标准文档RFC 1945中时，就已经将拼写错误固定下来。

Referrerpolicy属性可让我们将引荐来源网址设置为在加载时发送到iframe。引荐来源网址是HTTP标头，可让页面知道谁在加载它。这些是允许的值：

+ no-referrer-when-downgrade是默认值，当通过HTTPS加载当前页面并且通过HTTP协议加载iframe时，不发送引荐来源网址

+ origin 无引荐来源不发送引荐来源标头

+ 来源引荐来源网址已发送，并且仅包含来源（端口，协议，域），而不包含来源+路径（默认设置）

+ 从iframe中从相同起点（端口，协议，域）加载时，origin-when-cross-origin会以其完整格式（起点+路径）发送引荐来源网址。否则，仅发送原点

+ same-origin 仅当从iframe中的相同来源（端口，协议，域）加载时，才发送相同来源的引荐来源网址

+ 如果当前页面是通过HTTPS加载的，并且iframe也通过HTTPS协议加载，则strict-origin会将原点作为引荐来源发送。如果通过HTTP加载iframe，则不发送任何内容

+ 当在相同原点上工作时，strict-origin-when-cross-origin将原点+路径作为引荐来源发送。如果当前页面是通过HTTPS加载的，并且iframe也通过HTTPS协议加载，则将原点作为引荐来源发送。如果通过HTTP加载iframe，则不发送任何内容

+ unsafe-url：即使从HTTP加载资源并且通过HTTPS加载当前页面，也将原始+路径作为引荐来源发送

# 图片

可以使用img标签显示图像。

此标记接受src属性，我们使用它来设置图像源：

```<img src="image.png">```

我们可以使用多种图像。最常见的是PNG，JPEG，GIF，SVG和最近的WebP。

HTML标准要求存在alt属性来描述图像。屏幕阅读器和搜索引擎机器人都使用此功能：

```<img src="dog.png" alt="A picture of a dog">```

您可以设置width和height属性来设置元素将要占用的空间，以便浏览器可以考虑它，并且在完全加载时它不会更改布局。它需要一个数值，以像素为单位。

```<img src="dog.png" alt="A picture of a dog" width="300" height="200">```

## 图标签

Figure标记通常与img标记一起使用。

图是要显示带标题的图像时经常使用的语义标记。您可以这样使用它：

```
<figure>
    <img src="dog.png"
         alt="A nice dog">
    <figcaption>A nice dog</figcaption>
</figure>
```

figcaption标签用于包装字幕文本。

## 使用srcset的响应式图像

srcset属性使您可以根据自己的喜好，设置浏览器可以根据像素密度或窗口宽度使用的响应图像。这样，它只能下载呈现页面所需的资源，而如果是在移动设备上，则不能下载更大的图像。

这是一个示例，其中我们针对4种不同的屏幕尺寸提供了4张其他图片：

```
<img src="dog.png"
    alt="A picture of a dog"
    srcset="dog-500.png 500w,
               dog-800.png 800w,
             dog-1000.png 1000w,
             dog-1400.png 1400w">
```
             
在srcset中，我们使用w度量来指示窗口宽度。

既然这样做，我们还需要使用sizes属性：

```
<img src="dog.png"
    alt="A picture of a dog"
    sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px"
    srcset="dog-500.png 500w,
               dog-800.png 800w,
             dog-1000.png 1000w,
             dog-1400.png 1400w">
```
             
在此示例中，sizes属性中的（max-width：500px）100vw，（max-width：900px）50vw，800px字符串描述与视口有关的图像大小，多个条件之间用分号分隔。

媒体条件max-width：500px设置与视口宽度相关的图像大小。简而言之，如果窗口大小小于500像素，它将以窗口大小的100％渲染图像。

如果窗口大小更大但<900px，它将以窗口大小的50％渲染图像。

如果更大，它将以800像素渲染图像。

vw度量单位可能对您来说是新的，简而言之，我们可以说1 vw是窗口宽度的1％，因此100vw是窗口宽度的100％。

一个有用的网站来生成srcset和逐渐变小的图像是[https://responsivebreakpoints.com/](https://responsivebreakpoints.com/).

## 图片标签

HTML还为我们提供了图片标签，该标签与srcset的功能非常相似，并且区别非常细微。

当您完全希望更改文件时，而不是仅提供较小版本的文件时，可以使用图片。或提供其他图像格式。

我发现的最佳用例是在提供WebP图像时，该图像仍未被广泛支持。在图片标签中，您指定了图像列表，并且将按顺序使用它们，因此在下一个示例中，支持WebP的浏览器将使用第一个图像，如果不使用，则回退为JPG：

```
<picture>
  <source type="image/webp" srcset="image.webp">
  <img src="image.jpg" alt="An image">
</picture>
```


源标签为图像定义一种（或多种）格式。 img标签是备用浏览器，如果浏览器很旧并且不支持picture标签。

在图片内的源标签中，您可以添加媒体属性以设置媒体查询。

下面的示例类似于srcset的上述示例：

```
<picture>
  <source media="(min-width: 500w)" srcset="dog-500.png" sizes="100vw">
  <source media="(min-width: 800w)" srcset="dog-800.png" sizes="100vw">
  <source media="(min-width: 1000w)" srcset="dog-1000.png"    sizes="800px">
  <source media="(min-width: 1400w)" srcset="dog-1400.png"    sizes="800px">
  <img src="dog.png" alt="A dog image">
</picture>
```

但这不是用例，因为如您所见，它更加冗长。

图片标签是最新的，但除Opera Mini和IE（所有版本）外，所有主流浏览器现在都支持它。

# 可用性

重要的是，在设计HTML时要考虑到可访问性。

拥有可访问的HTML意味着残疾人可以使用Web。有完全失明或有视觉障碍的用户，有听力障碍的人以及许多其他不同的障碍。

不幸的是，这个主题没有重视它所需要的重要性，而且似乎没有其他主题那么酷。

如果某人看不到您的页面，但仍想使用其内容怎么办？首先，他们该怎么做？他们不能使用鼠标，而是使用屏幕阅读器。您不必想象。您可以立即尝试：Google提供免费的ChromeVox Chrome扩展程序。可访问性还必须注意允许工具轻松选择元素或浏览页面。

网页和Web应用程序并非始终以可访问性作为其首要目标之一，也许发行的版本1不可访问，但事后事实可以使网页可访问。越早越好，但是永远不会太晚。

这很重要，在我国，必须可以访问政府或其他公共组织建立的网站。

使HTML可访问是什么意思？让我说明您需要考虑的主要事项。

注意：CSS主题中还有其他几项需要注意，例如颜色，对比度和字体。或[如何使SVG图像可访问](https://css-tricks.com/accessible-svgs/)。我在这里不谈论他们。

## 使用语义HTML

语义HTML非常重要，这是您需要注意的主要事情之一。让我说明一些常见的情况。

为标题标签使用正确的结构很重要。最重要的是h1，对于次要的标题使用较高的数字，但是所有相同级别的标题都应具有相同的含义（像树形结构一样思考）

```
h1
    h2
        h3
    h2
    h2
        h3
            h4
```

使用strong和em代替b和i。从视觉上看，它们看起来相同，但是前两个具有更多的含义。 b和我是视觉元素。


列表很重要。屏幕阅读器可以检测列表并提供概述，然后让用户选择是否进入列表。

一个表应具有描述其内容的标题标签：

```
<table>
  <caption>Dogs age</caption>
  <tr>
    <th>Dog</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Roger</td>
    <td>7</td>
  </tr>
</table>
```

## 对图像使用alt属性

所有图像必须具有描述图像内容的alt标签。这不仅是一种好习惯，而且是HTML标准所必需的，未经它验证的HTML也是必须的。

```<img src="dog.png" alt="picture of my dog">```

如果这是您添加它的诱因，那么对搜索引擎也有好处。

## 使用角色属性

使用role属性，您可以为页面中的各个元素分配特定的角色。

您可以分配许多不同的角色：互补，列表，列表项，主要，导航，区域，选项卡，警报，应用程序，文章，横幅，按钮，单元格，复选框，contentinfo，对话框，文档，提要，图，表格，网格，网格单元格，标题，img，列表框，行，行组，搜索，开关，表，选项卡，文本框，计时器。

内容很多，我为您提供了这个[MDN链接](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)，以供您参考。但是，您无需为页面中的每个元素分配角色。在大多数情况下，屏幕阅读器可以从HTML标签推断出来。例如，您不需要将角色标签添加到导航，按钮，表格等语义标签。

让我们以nav标签为例。您可以使用它来定义页面导航，如下所示：

```
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
```

如果您被迫使用div标签而不是nav，则可以使用导航角色：

```
<div role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</div>
```

因此，这里有一个实际的例子：当标签还没有传达含义时，使用角色分配有意义的值。

##使用tabindex属性

tabindex属性允许您更改按Tab键选择“可选”元素的顺序。默认情况下，只有使用Tab键通过导航才能“选择”链接和表单元素（并且您无需在其上设置tabindex）。

添加tabindex =“ 0”可以选择一个元素：

```
<div tabindex="0">
...
</div>
```

而是使用tabindex =“-1”从此基于标签的导航中删除一个元素，这可能非常有用。

## 使用aria属性

ARIA是首字母缩写词，表示可访问的Rich Internet Applications，并定义了可以应用于元素的语义。

### aria-label标签

此属性用于添加描述元素的字符串。

例：

```<p aria-label="The description of the product">...</p>```

我在博客的侧边栏上使用此属性，在这里我有一个输入框用于搜索而没有显式标签，因为它具有占位符属性。

### aria-labelledby 标签

此属性在当前元素和对其进行标记的元素之间设置关联。

如果您知道如何将输入元素与标签元素相关联，则类似。

我们传递描述当前元素的商品ID。

例：

```
<h3 id="description">The description of the product</h3>

<p aria-labelledby="description">
...
</p>
```

### aria-describedby 标签

此属性使我们可以将一个元素与另一个用作描述的元素相关联。

例：

```
<button aria-describedby="payNowDescription" >Pay now</button>

<div id="payNowDescription">Clicking the button will send you to our Stripe form!</div>
```

## 使用隐藏的Aria隐藏内容

我喜欢网站中的简约设计。例如，我的博客主要是内容，在边栏中有一些链接。但是，侧边栏中的某些内容只是视觉元素，不会加深无法看到页面的人的体验。就像我的徽标图片或深色/深色主题选择器。

添加aria-hidden =“ true”属性将告诉屏幕阅读器忽略该元素。

# 在哪里了解更多

这只是该主题的介绍。要了解更多信息，我推荐以下资源：

[https://www.w3.org/TR/WCAG20/](https://www.w3.org/TR/WCAG20/)
[https://webaim.org](https://webaim.org)
[https://developers.google.com/web/fundamentals/accessibility/](https://developers.google.com/web/fundamentals/accessibility/)
