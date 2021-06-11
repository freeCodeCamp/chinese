> -  原文地址：[How to Use CSS Selectors to Style Your Web Page](https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/)
> -  原文作者：[Peter LynchPeter Lynch](https://www.freecodecamp.org/news/author/peter-lynch/)
> -  译者：Assone
> -  校对者：

![How to Use CSS Selectors to Style Your Web Page](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/CSS-Selectors.png)
![如何使用CSS选择器设计网页样式](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/CSS-Selectors.png)

CSS selectors are one of the most important parts of CSS. They give you the ability to target HTML elements on your web page that you want to style.
CSS选择器是是CSS最重要的部分之一。它们能够使你在网页上针对你想要的HTML元素进行设置样式的能力。

Without CSS selectors, you wouldn't be able to style your page to look how you want.
如果没有CSS选择器，你就无法将页面设置成你想要的样子。

Thankfully CSS selectors have been around for a while, and you can style elements on your however you want.
值得庆幸的是CSS选择器已经存在一段时间了，你可以随心所欲地对你的元素进行样式设计。

But if you to really want to unlock the power of CSS and create amazing elements, then you need to understand what you can do with CSS selectors. Namely, you need to understand the basic CSS selectors before you work your way up to the advanced CSS selectors.
但如果你真的想要释放CSS的力量并创建令人惊叹的元素，那么你需要了解你能用CSS选择器做什么。也就是说，你需要先了解基本的CSS选择器，然后再学习高级的CSS选择器。

This post will look into both. By the end, it will have you well on your way to unlocking the power of CSS selectors to create your own incredible elements. So let's get started by looking at what CSS selectors are.
这篇文章将对这两方面进行研究。到最后，你会发现，你已经开始释放CSS选择器的力量并创造自己的不可思议的元素。所以，让我们从什么是CSS选择器开始吧。

## What are CSS Selectors?
## 什么是CSS选择器？

If you've written any CSS before, then you've likely seen a CSS selector. They are the first part of a CSS rule. You use CSS selectors to select the HTML elements you want to style.
如果你之前写过任何CSS，那么你可能已经见过CSS选择器了。它们是CSS规则的第一部分。你可以使用CSS选择器来选择你要设置样式的HTML元素。

In CSS, selectors are defined by the CSS selector specification. This means that each selector must be [supported](https://www.w3.org/TR/selectors-3/#selectors) by the browser for it to actually work.
在CSS里，选择器由CSS选择器规范来定义。这意味着每个选择器必须得到浏览器的[支持](https://www.w3.org/TR/selectors-3/#selectors)才能发挥作用。

CSS selectors tend to be split into five different categories. This post is going to look at them in two key categories of basic and advanced. Below are the five categories.
CSS选择器通常分为五个不同的种类。这篇文章将从基础和高级两个关键类别来研究它们。以下是这五个类别。

1.  Simple selectors
2.  Combinator selectors
3.  Pseudo-class selectors
4.  Pseudo-element selectors
5.  Attribute selectors

1. 简单选择器
2. 组合选择器
3. 伪类选择器
4. 伪元素选择器
5. 属性选择器

In order to get good at something you have to understand the basics so let's start there.
想要做好一件事，你必须了解基础知识，所以让我们从这里开始。

# Basic CSS Selectors
# 基础选择器

You've likely seen many types of CSS selectors – the fundamental CSS selectors that are enough to get you building stylish web pages. Let's look at each of the basic CSS selectors to ensure we understand what they do.
你可能见过许多类型的选择器 - 这些基本的CSS选择器足以让你构建时尚的网页。让我们来看看每个基本的CSS选择器，以确保我们了解它们的作用。

## CSS Element (type) selector
## CSS 元素（标签）选择器

The CSS element selector selects HTML elements based on the element name. In HTML element names are things like `h1`, `p`, or semantic names like `article` or `footer`. Therefore, element selectors select all the HTML elements with the name you select.
CSS元素选择器根据元素名来选择HTML元素。在HTML中，元素名就是类似于`h1`、 `p`的东西，或者类似于`article`或`footer`之类有意义的名字。因此，元素选择器选择所有具有你选择的名称的HTML元素。

Let's look a CSS selector example for element selectors:
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

In the example above, we have selected all elements on the page that are of the type `h3` and `article` and applied styles to those elements.
在以上的例子，我们选择器页面上标签名为`h3`和`article`的所有元素，并对这些元素应用了样式。

Element selectors help you keep your code simple by applying the styling to all elements on a page of that type. This means you only have to keep track of your styles for those elements in one place.
元素选择器帮助你保持你代码的简洁，并将样式应用页面上这种类型的所有元素上。

## CSS id selector

The id selector selects the HTML elements that have an id attribute that matches the selector. As you cannot have more than one element with the same id in a HTML document, this selector allows you to select an individual element. This means that the styling on the selected element will be unique.

To select an element with a specific id, you use a `#` (hash) character followed by the id of the HTML element. In this case it would look something like this `#id-name`.

Let's look a CSS selector example for the id selector.

```css
#projects-flex-container {
	width: 90vw;
	display: flex;
}
```

In the example above, we have selected the individual HTML element with the id `#projects-flex-container` and applied styling to it. This styling will only apply to that individual element.

One thing to note, though, is that you should be careful when using id selectors. As id selectors can't be reused on other elements, you should be asking yourself if you need to be using an id selector to target the element.

## CSS class selector

The class selector selects HTML elements that have a class attribute that matches the selector. The class selector is useful for targeting multiple elements, things like cards or images that you want to have matching styles.

To select an element with a specific class, you use a `.` character (period) and then follow it with the class name.

Let's look a CSS selector example for the class selector.

```css
.project-card {
	color: #badA55;
	padding: 5px;
	border-radius: 5px;
}
```

In the above example we have selected all elements with the class name `project-card` using the CSS class selector. All elements with the class `project-card` will have the styles listed applied to them.

## Universal selector

The universal selector selects all HTML elements. This means every single element on your page, from the headings to the footer. You'll often use it to make the page's margin and padding consistent or to do what is know as zero out.

The syntax for the universal selector is the `*` character (star).

```css
* {
	margin: 0;
	padding: 0;
}
```

In the above example, it has zeroed out the margin and padding for the whole page by using the universal selector.

# How to Group CSS Selectors

Before we get into the advanced CSS selectors, we need to quickly look at grouping CSS selectors. This is a common practice you will see out in the wild and it helps make your code clean and readable.

Grouping allows you to select multiple HTML elements at once and only state their style definitions once.

Let's look at an example of a grouping selector to explain.

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

In the above CSS code we have three elements `h1`, `h2` and `h3` and each of these elements have the same style definitions. As a result we can clean up our code by grouping the selectors.

To group selectors we separate each selector with a `,` character (comma).

```css
h1, h2, h3 {
	text-align: left;
	letter-spacing: 3px;
	color: #111111;
}
```

Because their style definitions are the same, we now only have to write it once.

Note that grouping selectors can be used for all of the selectors mentioned in this article, meaning the selectors don't have to match.

We could group a class selector with an id selector if we want them to share style definitions. And we could group the style property and values that match and then define different definitions on each element.

Let's extend our example to understand this concept.

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

If you want to level up your CSS, then you will want to understand advanced CSS selectors.

# Advanced CSS Selectors

Advanced CSS selectors allow you to push the boundaries of CSS. They help you get highly specific in what elements you want to target and what state that element is in when targeting it.

Let's get straight into some advanced CSS selectors by looking at attribute selectors.

## CSS attribute selectors

Attribute selectors let you select elements based on whether a certain attribute is present or not. To put it another way, this CSS selector will match any element on your page if it has a certain attribute.

An attribute is content added to the opening tag of a HTML element. It can be things like `id`, `name` or `value`.

```HTML
<a title="Learn to code for free!" href="https://www.freecodecamp.org/">Learn to code</a>
```

The title is an attribute of the a element.

There are seven attribute selectors that each allow you to find elements based on whether an attribute is present and what the value may contain.

1.  Present selector
2.  Equals selector (`=`)
3.  Begins with selector (`^`)
4.  Ends with selector (`$`)
5.  Contains selector (`*`)
6.  White space selector (`~`)
7.  Hypen selector (`|`)

The common syntax for these selectors is the selector followed by `[ ]` (square brackets) in which you state what you are looking for. The selector could be anything like a class selector or even a universal selector.

```css
selector[attribute] 
```

Today we are going to look at the five most common attribute selectors. In order to understand these five attribute selectors, let's look at each of them with examples.

### Present attribute selector

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
