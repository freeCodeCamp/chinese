> -  原文地址：[How to Use CSS Selectors to Style Your Web Page](https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/)
> -  原文作者：[Peter LynchPeter Lynch](https://www.freecodecamp.org/news/author/peter-lynch/)
> -  译者：Assone
> -  校对者：

![如何使用CSS选择器设计网页样式](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/CSS-Selectors.png)

CSS选择器是是CSS最重要的部分之一。它们能够使你在网页上针对你想要的HTML元素进行设置样式的能力。

如果没有CSS选择器，你就无法将页面设置成你想要的样子。

值得庆幸的是CSS选择器已经存在一段时间了，你可以随心所欲地对你的元素进行样式设计。

但如果你真的想要释放CSS的力量并创建令人惊叹的元素，那么你需要了解你能用CSS选择器做什么。也就是说，你需要先了解基本的CSS选择器，然后再学习高级的CSS选择器。

这篇文章将对这两方面进行研究。到最后，你会发现，你已经开始释放CSS选择器的力量并创造自己的不可思议的元素。所以，让我们从什么是CSS选择器开始吧。

## 什么是CSS选择器？

如果你之前写过任何CSS，那么你可能已经见过CSS选择器了。它们是CSS规则的第一部分，你可以使用CSS选择器来选择你要设置样式的HTML元素。

在CSS里，选择器由CSS选择器规范来定义。这意味着每个选择器必须得到浏览器的[支持](https://www.w3.org/TR/selectors-3/#selectors)才能发挥作用。

CSS选择器通常分为五个不同的种类。这篇文章将从基础和高级两个关键类别来研究它们。以下是这五个类别。

1. 简单选择器
2. 组合选择器
3. 伪类选择器
4. 伪元素选择器
5. 属性选择器

想要做好一件事，你必须了解基础知识，所以让我们从这里开始。

# 基础选择器

你可能见过许多类型的选择器 - 这些基本的CSS选择器足以让你构建时尚的网页。让我们来看看每个基本的CSS选择器，以确保我们了解它们的作用。

## CSS 元素（标签）选择器

CSS元素选择器根据元素名来选择HTML元素。在HTML中，元素名就是类似于`h1`、 `p`的东西，或者类似于`article`或`footer`之类有意义的名字。因此，元素选择器选择所有具有你指定的名称的HTML元素。

让我们来看看元素选择器的例子吧：

```css
/* selecting all h3 elements */
h3 {
	text-align: center;
	color: blue;
}

/* selecting all article elements */
article {
	font-size: 14px;
	line-height: 1.1px;
}
```

在以上的例子，我们选择器页面上标签名为`h3`和`article`的所有元素，并对这些元素应用了样式。

元素选择器帮助你保持代码的简洁，并将样式应用页面上这种类型的所有元素上。

## CSS ID 选择器

ID选择器选择具有匹配的ID属性的HTML元素。由于在一个HTML文档中不能有一个以上具有相同ID的元素，这个选择器允许你选择一个单独的元素。这意味着所选元素将是唯一的。

要选择一个具有特定ID的元素，你可以使用`#`（哈希）字符，后面跟着是HTML元素的ID。在这种情况下它看起来就像这样`#id-name`。

让我们来看看ID选择器的例子吧。

```css
#projects-flex-container {
	width: 90vw;
	display: flex;
}
```

在上面这个例子里，我们选择了ID为`#projects-flex-container`的单个元素，并对其应用了样式。这个样式只适用于那些单独的元素。

不过，有一点需要注意的是，在使用ID选择器时，你应该小心。由于ID选择器不能在其他元素上重复使用，你应该问你自己是否需要使用ID选择器来选择该元素。

## CSS 类选择器

类选择器选择具有相同的class属性的HTML元素。类选择器对于定位多个元素很有用，比如你想要匹配样式的卡片或图像。

要选择具有特定类别的元素，你可以使用一个`.`字符（句号），然后在它后面加上类别的名称。

让我们来看看CSS类选择器的例子。

```css
.project-card {
	color: #badA55;
	padding: 5px;
	border-radius: 5px;
}
```

上述的例子中，我们使用CSS类选择器选择了类名为`project-card`的所有元素。所有具有`project-card`类的元素将被应用列出的样式。

## 通用选择器

通用选择器用来选择所有的HTML元素，这意味者你页面上的每一个元素，从标题到页脚。你会经常使用它来页面的边距和填充保持一致，或者重置样式。

通用选择器的语法是`*`字符（星号）。

```css
* {
	margin: 0;
	padding: 0;
}
```

上述的例子中，通过使用通用选择器，它将整个页面的margin和padding清零。

# 什么是CSS组合选择器

在我们讨论高级CSS选择器之前，我们需要快速了解一下组合选择器。这是一种常见的做法，你会在外面经常看到，它有助于使你的代码干净和可读。

分组允许你一次选择多个HTML元素，并且只声明一次它们的样式。

让我们来看看组合选择器的例子吧。

```css
h1 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}

h2 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}

h3 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}
```

上面的CSS代码中，我们有三个元素`h1`、`h2`和`h3`，这三个元素都有相同的样式定义。因此，我们可以通过选择器分组来清理我们的代码。

为了给选择器分组，我们用`,`字符（逗号）将每个选择器分开。

```css
h1, h2, h3 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}
```

Because their style definitions are the same, we now only have to write it once.
因为它们的样式是一样的，我们现在只需要写一次。

Note that grouping selectors can be used for all of the selectors mentioned in this article, meaning the selectors don't have to match.
请注意，组合选择器可用于本文中所提及的所有选择器，也就是说，选择器不一定是要和上述代码一样的，也可以是其他的。

We could group a class selector with an id selector if we want them to share style definitions. And we could group the style property and values that match and then define different definitions on each element.
如果我们想让它们共享样式定义，我们可以把一个类选择器和一个ID选择器分组。而我们可以把匹配的样式属性和值分组，然后在每个元素上定义不同的定义。

Let's extend our example to understand this concept.
让我们拓展我们的例子来理解这个概念。

```css
/*group the selectors and state definitions that are the same*/

h1, h2, h3 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}

/*apply individual styles to selectors*/

h1 {
	font-size: 72px;
}

h2 {
	font-size: 48px;
}

h3 {
	font-size: 32px;
}
```

There you have it, these are all the basic CSS selectors. If you want to get good at CSS you need to understand what each of these do. With that knowledge in had, you should now be well on your way to doing that.
这就是所有的基本选择器，如果你想学好CSS，你需要了解每个选择器的作用。有了这些知识，你现在应该可以做到这一点了。

If you want to level up your CSS, then you will want to understand advanced CSS selectors.
如果你想提高你的CSS水平，那么你将要了解高级的CSS选择器。

# Advanced CSS Selectors
# 高级CSS选择器

Advanced CSS selectors allow you to push the boundaries of CSS. They help you get highly specific in what elements you want to target and what state that element is in when targeting it.
高级CSS选择器允许你突破CSS的界限，它们可以高度具体的确定你要选择哪些元素，以及选择该元素时它处于什么状态。

Let's get straight into some advanced CSS selectors by looking at attribute selectors.
让我们直接进入一些高级选择器，看看属性选择器。

## CSS attribute selectors
## CSS属性选择器

Attribute selectors let you select elements based on whether a certain attribute is present or not. To put it another way, this CSS selector will match any element on your page if it has a certain attribute.
属性选择器允许你根据某个属性是否存在来选择元素。换句话来说，这个CSS选择器将匹配页面上的任何元素，如果它有某个属性的话。

An attribute is content added to the opening tag of a HTML element. It can be things like `id`, `name` or `value`.
属性是添加到HTML元素开始标签中的内容，它可以是`id`、`name`或`value`等内容。

```HTML
<a title="Learn to code for free!" href="https://www.freecodecamp.org/">Learn to code</a>
```

The title is an attribute of the a element.
title是a元素中的一个属性。

There are seven attribute selectors that each allow you to find elements based on whether an attribute is present and what the value may contain.
有七个属性选择器，它们分别允许你根据一个属性是否存在以及值可能包含的内容来查找元素。

1.  Present selector
2.  Equals selector (`=`)
3.  Begins with selector (`^`)
4.  Ends with selector (`$`)
5.  Contains selector (`*`)
6.  White space selector (`~`)
7.  Hypen selector (`|`)

1. 当前选择器
2. 等于选择器（`=`）
3. 以开头选择器（`^`）
4. 以结尾选择器（`$`）
5. 包含选择器（`*`）
6. 空白选择器（`~`）
7. 连字符选择器（`|`）

The common syntax for these selectors is the selector followed by `[ ]` (square brackets) in which you state what you are looking for. The selector could be anything like a class selector or even a universal selector.
这些选择器的通用语法是选择器后跟`[]`（方括号），你可以在里面说明要查找的内容。选择器可以是类选择器，甚至是通用选择器。

```css
selector[attribute] 
```

Today we are going to look at the five most common attribute selectors. In order to understand these five attribute selectors, let's look at each of them with examples.
今天我们将看看五个最常用的属性选择器，为了了解这五个属性选择器，让我们用例子来看看它们中的每一个。

### Present attribute selector
当前属性选择器

This attribute selector finds any element based on where it includes an attribute.

Let's look at an example of a present selector to explain.

```css
a[title] {
	color: khaki;
	background: grey; 
}
```

In the example above, our present selector will find any `a` element that has a `title` attribute and apply the style definition to them. All other `a` elements that don't have a title attribute will not be styled as per above.

### Equals attribute selector

This attribute selector finds an element with an exact match attribute value. To use this selector, you state the attribute name followed by an `=` (equals) to find the exact match of the value.

Let's look at an example of an equals selector to explain.

```css
a[href="<https://peterlunch.com/>"] {
	color: purple;
} 
```

In the example above, the equals selector will find any `a` element that has an `href` attribute with the exact value of "[https://peterlunch.com/](https://peterlunch.com/)".

### Begins with attribute selector

This attribute selector finds any element that begins with a value you specify. To use this selector you state the attribute you are looking for, followed by the `^` and `=` characters and then the value you are looking to match.

Let's look at an example of a begins with selector to explain.

```css
a[href^="https"] {
	color: yellow;
	text-decoration: none;
}
```

In the example above the begins with selector finds any `a` element that has an `href` attribute and that begins with "https".

### Ends with attribute selector

Much like the begin with selector, this attribute selector does the opposite and finds any element that ends with a value you specify.

To use this selector you state the attribute you are looking for, followed by the `$` and `=` characters and then the value you are looking to match.

Let's look at an example of an ends with selector to explain.

```css
img[src$="/blog-imgs"] {
	border-radius: 4px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

In the above example the ends with selector finds any `img` element that has an `src` ending with "/blog-imgs". This is one I actually use for my website.

### Contains attribute selector

This attribute selector finds any element that contains the value you are looking for somewhere in the attributes value. This means that the value must contain at least one occurrence of the value.

To use this selector you state the attribute you are looking for, followed by the `*` and `=` characters and then the value you are looking for an occurrence of.

Let's look at an example of a contains selector to explain.

```css
a[href*="peterlunch"] {
	color: green;
}
```

In the above example the contains attribute selector finds any `a` element that has an `href` that contains the value "peterlunch".

That's it for attribute selectors, let's move onto the next advanced CSS selector.

## Combination selectors

The next advanced CSS selectors are combination selectors. These selectors can combine more than one CSS selector. There are four types of combination selectors in CSS:

1.  Descendant selectors
2.  Child selectors
3.  Adjacent sibling selectors
4.  General sibling selectors

To understand how these selectors work, you must first understand that HTML follows a family tree hierarchy. This means that there is a parent element which can contain children, and the children can have children, and so on and so forth like a family tree.

```html
<div> <!--parent-->
	<p> <!--div child-->
	<article> <!--div child, parent to h1 & p-->	 
		<h1>
			<p></p>
		</h1>
	</article>
	<article>	
		<h1>
			<p></p>
			<p></p>
		</h1>
	</article>
</div>
```

In the example above, the `div` is the parent, its children are the `article` elements, and the articles are parents to the `h1` and `p` children.

With that knowledge front of mind, let's explore each of these combination selectors one by one with examples to understand how they work.

### Descendant combination selector

The descendant combination selector matches all elements that are descendants of a specified element.

Let's look at an example of a descendant combination to explain.

```css
div p {
	line-height: 2em;
}
```

The above example selects all `p` elements inside of `div` elements.

### Child combination selector

The child combination selector matches all elements that are children of a specific element. This is different to the descendant combination selector, as it only selects direct children of the parent element.

Child selectors are denoted with a `>` character.

Let's look at an example of a child combination selector to explain.

```css
div > p {
	color: aquamarine;
}
```

Referring to our HTML hierarchy example above, this selector will only find the first `p` tag and not the `p` tags within the `article` tags. It does this as they are not direct children of the parent `div` element.

### Adjacent sibling combination selector

Adjacent Sibling selectors are denoted using a `+` which separates two selectors and matches the second selector element only if it immediately follows the first element.

A good real world example of this is having the text that immediately follows an image to be styled like a caption.

```css
img + p {
	font-size: 10px;
	color: grey;
	font-style: italic;
}
```

In the example above, any `p` element that follows an image will be styled with the above definition.

### General sibling combination selector

The general sibling selector selects any elements that are siblings of an element. General sibling selectors are denoted with a `~` character.

Let's look at an example of a general sibling selector to explain.

```css
article ~ h1 {
	font-weight: 900;
}
```

In the example above it selects all `h1` elements that are siblings of `article` elements.

### Pseudo-selectors

Pseudo-selectors fall into two buckets. The first is [pseudo-class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) and the second is [pseudo-element selectors](https://peterlunch.com/css-pseudo-elements/).

These selectors are complex and have a lot of options. To understand them it is worth reading some separate posts on them as they are complex topics on their own. But, I'll briefly touch on both here.

Firstly pseudo-class selectors select elements based on a certain state. You might have seen things like `:hover` or `:active`. These are the states of elements on your page. You can select elements based on whether that element is in the specified state.

A quick example would be:

```css
button:hover {
	background: red;
}
```

In the example above, when a user hovers over a button the background color will change to red.

If you want to better understand pseudo-class selectors I encourage you to read [this post](/news/explained-css-pseudo-classes-cef3c3177361/) by Nash Vail, who does a fantastic job of explaining them.

Next are pseudo-element selectors which I have written about [here](https://peterlunch.com/css-pseudo-elements/). These selectors select parts of an element. A part of an element might be the first letter of the element or the content before and after the element.

With pseudo-element selectors it is important to note that they use `::` (double colons) vs. `:` (single colons) like pseudo classes.

```CSS
p {
  width: 600px;
  line-height: 1.5;
  font-weight: 500;
}

p::first-letter {
  color: white;
  background-color: rgb(55, 97, 117);
  border-radius: 3px;
  box-shadow: 3px 3px 0 rgb(212, 173, 81);
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

## Summary

Now you should have a good understanding of CSS selectors and how you can use them to find HTML elements on your web pages.

I hope you enjoyed reading this article. If you learnt something from this post then checkout the rest of my posts [here](https://bit.ly/2Re6Vdf) or [sign up to my newsletter](ttps://mailchi.mp/bfaa8a288d7c/7o1pve3bv9) to get ridiculously good and super exclusive newbie content.
