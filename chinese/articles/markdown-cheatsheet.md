> -  原文地址：[Markdown Cheat Sheet – How to Write Articles in Markdown Language](https://www.freecodecamp.org/news/markdown-cheatsheet/)
> -  原文作者：[Kealan Parr](https://www.freecodecamp.org/news/author/kealan/)
> -  译者：HeZean
> -  校对者：

![Markdown 手册 —— 如何用 Markdown 语言写文章](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Markdown-cheatsheet.png)

作为一名开发者，你很可能听说过 [HTML](https://baike.baidu.com/item/HTML/97049)，即超文本标记语言（**H**yper**T**ext **M**arkup **L**anguage）。

你可能还知道 HTML 是一种用于创建网站的语言 —— 但**标记**是什么意思？

[标记语言](https://techterms.com/definition/markup_language)是使用标签来定义文本文件中不同元素的语言。大多数人都熟悉的**富文本编辑器**就是一种允许用户在他们的文件中添加额外的格式、图像和链接的程序。

<figure class="kg-card kg-card-image kg-card-hascaption">
  <img src="https://www.freecodecamp.org/news/content/images/2022/08/image-30.png" class="kg-image" alt="Microsoft Word（一种富文本编辑器）的用户界面截图。">
  <figcaption>Microsoft Word（一种富文本编辑器）的用户界面截图。</figcaption>
</figure>

标记语言使用如下格式的表情标签：

-   \<p\> \<\/p\> 是一对段落标签。
-   \<b\> \<\/b\> 加粗标签内的文字.

标记语言家族有许多成员，比如[XML](https://baike.baidu.com/item/%E5%8F%AF%E6%89%A9%E5%B1%95%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80/2885849)、[HTML](https://baike.baidu.com/item/HTML/97049)，以及本文的主题：**Markdown**。

开发人员常用 Markdown 来编写文档 —— 通常在大多数仓库中都有 markdown 格式的文档。例如，这篇文章正是我在 freeCodeCamp 上使用 Markdown 编写的。

那么，让我们看看我们可以用 Markdown 做什么。

**免责声明：**没有一个统一的机构或规范来标准化 Markdown —— 只有一些被广泛接受的最佳实践。因此，你可能需要根据使用的 Markdown 解析器来从下面选择不同的内容。

# Markdown 速查表

下面是一些最常用的在 Markdown 中操作文本的方法。

# 如何在 Markdown 中创建标题

Markdown 中有六种样式的标题，从 H1 到 H6。接下来，我将给你演示他们看起来分别是什么样的，以及如何用 Markdown 创建它们。

H1 字体最大，也被通常作为“主标题”，接下来的每个标题的字体都依次变小。

# H1 tag

`# H1 tag`

## H2 tag

`## H2 tag`

### H3 tag

`### H3 tag`

#### H4 tag

`#### H4 tag`

##### H5 Tag

`##### H5 tag`

###### H6 tag

`###### H6 tag`

# 如何在 Markdown 中增加强调排版

通常，你会将文字加粗、设为斜体，或者添加删除线来强调一段文字。过多的强调组合反而会使文字变得更不清晰，所以请仔细选择你想强调的每一段文字的方式。

Markdown 中还有下标和上标符号，例如，你可以用它们来写化合物的名称，或者是作为数学符号的一部分。

**如何把文本加粗：**

在文本周围添加两个星号，将使该文本显示为粗体。就像这样：`**粗体**`。

_如何显示斜体文本：_

在文本周围添加单个星号，就可以把它设置为斜体显示。像这样：`*斜体s*`。

如何在特定文字上添加~~删除线~~：

如果你想在文本中“划掉一些东西”，你可以用上删除线，比如：`~~划掉~~`。

### 如何在 Markdown 中写下标

举个例子，如果你想写水的化学符号，你可以通过输入 `H~2~0` 来将“2”显示为下标。

渲染后的样式是 H~2~0。

### 如何在 Markdown 中写上标


假设你想写一个指数或上标。你可以像这样做：`X^2^`，你将得到 X^2^。

# 如何用Markdown制作列表

Markdown 中有多种类型的列表，比如有序列表和无序列表。

有序列表通常用于你想按一定顺序进行的步骤（比如按照菜谱煮鸡，直到上菜）。但是对于那些不需要像菜谱那样有顺序的步骤的事情（例如，购物清单）来说，可以使用无序列表。

### 如何在 Markdown 中制作一个无序列表

这是一个无序列表的样子。

- 辣椒油
- 米饭
- 大葱

Markdown 代码中，在行首用 `- ` 来创建一个无需列表。

```
- 辣椒油
- 米饭
- 大葱
```

### 如何在 Markdown 中制作一个有序列表

这是一个有序列表的样子。

1. 第一项
2. 第二项

Markdown 代码中，在行首用 `1. ` 来创建一个有需列表（数字编号可以是自己维护的，也可以始终为一个数字，比如1）。

```
1. 第一项
2. 第二项
```

# 如何在 Markdown 中插入链接

在 Markdown 文档中的两种最常见的链接是超链接和图片。这两种方式都能使你的文章更清晰、更有说服力，你应在适当的时候使用。

下面是文本中的超链接的样子：

[Kealan 的网站](https://www.kealanparr.com)

这是创建它的 Markdown 代码：

`[Kealan 的网站](https://www.kealanparr.com)`

你需要把想在超链接上显示的文字放在方括号里（这里是 "Kealan 的网站"），紧接着用小括号包裹指向的 URL。

又比如，你想在一篇文章中加入一张图片，像这个样子：

![天然岩石景观形成的山谷，绵延到蓝天下的道路交叉处。](https://images.unsplash.com/photo-1660866838784-6c5158c0f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)

用以下的记号来写就可以：

```
![天然岩石景观形成的山谷，绵延到蓝天下的道路交叉处。](https://images.unsplash.com/photo-1660866838784-6c5158c0f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)
```

这跟普通的超链接相似，只是在方括号前面加上感叹号。

## 如何在 Markdown 中使用 HTML 代码

你可以直接在 Markdown 文档中使用普通的 HTML（这取决于你所使用的解释器）。

所以你可以随意输入你喜欢的任何有效的 HTML。

## 如何在 Markdown 中添加分隔符

如果你想通过一根横线来分隔文本中的章节，你可以获得这样的效果：

---

只需要在一行中键入三个横线：

```
---
```

## 如何用 Markdown 制作表格

表格在你的文章中很方便。要制作一个看起来像这样的表格：

| Name | Age |
| --- | --- |
| Kealan | 25 |
| Jake | 28 |

你需要用到这样的标记：

```
| Name   | Age |
| ------ | --- |
| Kealan | 25  |
| Jake   | 28  |
```

The only real "gotcha" you have to be aware of when making a markdown table is that you keep the pipes (|) vertically in line. Then your markdown table will appear as above in this article. An image to make that clearer is:

在制作 Markdown 表格时，唯一你必须注意的问题是，你要保持管道符（|）垂直排列。那么你的表格就会像本文上面的那样。这个图片更能清晰地说明问题。

![image-139](https://www.freecodecamp.org/news/content/images/2022/08/image-139.png)

这显示了一个 Markdown 表格，以 Name 和 Age 为标题，包含两行数值，Kealan、Jake 和 25、28。

## **如何在 Markdown 中添加代码及语法高亮**

Adding code snippets to your markdown can be incredibly helpful if you are creating documentation for developers, for example.

The below is a very simple JavaScript example, but almost all modern programming languages are supported (with syntax highlighting and so on).

```javascript
console.log('example log')
```

  
\`\`\`javascript  
console.log('example log')  
\`\`\`

Just type the three backticks followed by the programming language and then enter to start writing your code. End the code block with three backticks.

# 如何在 Markdown 中添加引用

当你提及别人的作品时，你应该有礼貌地引用他们的作品。一个简单的方法是引用他们的话。

如果你想在 Markdown 中加入引用：

> "这是一句话，来自一个非常明智的人" —— 佚名

在行首加上这个符号，就能将其渲染成上面的样子：

`> "这是一句话，来自一个非常明智的人" —— 佚名`

# 结语

我希望这篇文章对你来说是一个有用的参考，也希望你能从中学到你以前没见过的 Markdown 新特性。

Markdown 还有很多功能（甚至还没算上你可以创建的 HTML 变体），但本文已经涵盖了最常用的功能。
