> -  原文地址：[How to Use CSS Selectors to Style Your Web Page](https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/)
> -  原文作者：[Peter LynchPeter Lynch](https://www.freecodecamp.org/news/author/peter-lynch/)
> -  译者：
> -  校对者：

![How to Use CSS Selectors to Style Your Web Page](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/CSS-Selectors.png)

CSS selectors are one of the most important parts of CSS. They give you the ability to target HTML elements on your web page that you want to style.

Without CSS selectors, you wouldn't be able to style your page to look how you want.

Thankfully CSS selectors have been around for a while, and you can style elements on your however you want.

But if you to really want to unlock the power of CSS and create amazing elements, then you need to understand what you can do with CSS selectors. Namely, you need to understand the basic CSS selectors before you work your way up to the advanced CSS selectors.

This post will look into both. By the end, it will have you well on your way to unlocking the power of CSS selectors to create your own incredible elements. So let's get started by looking at what CSS selectors are.

## What are CSS Selectors?

If you've written any CSS before, then you've likely seen a CSS selector. They are the first part of a CSS rule. You use CSS selectors to select the HTML elements you want to style.

In CSS, selectors are defined by the CSS selector specification. This means that each selector must be [supported](https://www.w3.org/TR/selectors-3/#selectors) by the browser for it to actually work.

CSS selectors tend to be split into five different categories. This post is going to look at them in two key categories of basic and advanced. Below are the five categories.

1.  Simple selectors
2.  Combinator selectors
3.  Pseudo-class selectors
4.  Pseudo-element selectors
5.  Attribute selectors

In order to get good at something you have to understand the basics so let's start there.

# Basic CSS Selectors

You've likely seen many types of CSS selectors – the fundamental CSS selectors that are enough to get you building stylish web pages. Let's look at each of the basic CSS selectors to ensure we understand what they do.

## CSS Element (type) selector

The CSS element selector selects HTML elements based on the element name. In HTML element names are things like `h1`, `p`, or semantic names like `article` or `footer`. Therefore, element selectors select all the HTML elements with the name you select.

Let's look a CSS selector example for element selectors:

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

Element selectors help you keep your code simple by applying the styling to all elements on a page of that type. This means you only have to keep track of your styles for those elements in one place.

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