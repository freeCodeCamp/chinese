> -  原文地址：[Markdown Cheat Sheet – How to Write Articles in Markdown Language](https://www.freecodecamp.org/news/markdown-cheatsheet/)
> -  原文作者：[Kealan Parr](https://www.freecodecamp.org/news/author/kealan/)
> -  译者：
> -  校对者：

![Markdown Cheat Sheet – How to Write Articles in Markdown Language](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Markdown-cheatsheet.png)

As a developer, you have likely heard of [HTML](https://en.wikipedia.org/wiki/HTML), which stands for **H**yper**T**ext **M**arkup **L**anguage.

And you may know that HTML is a language used to create websites – but what does **markup** mean?

[Markup languages](https://techterms.com/definition/markup_language) are languages that use tags to define different elements within a text document. Most people are familiar with **Rich Text Editors** – programs that allow users to add extra formatting, images, and links to their documents.

![image-30](https://www.freecodecamp.org/news/content/images/2022/08/image-30.png)

A screenshot of the GUI of the Microsoft Word software (a Rich Text Editor).

But markup languages use tags like:

-   <p> </p>  is a paragraph tag.
-   <b> </b> makes bold text.

There are quite a few markup languages like [XML](https://en.wikipedia.org/wiki/XML), [HTML](https://en.wikipedia.org/wiki/HTML), and the topic of this article: **Markdown**.

Developers generally use markdown for documentation – and it is often included in most repositories. For example, I used markdown to write this article on freeCodeCamp.

So let's look at all we can do with markdown.

**Disclaimer:** There is no unifying body or specification to standardise markdown – just some widely accepted best practices. So your mileage might vary depending on what markdown parser you're using for this cheat sheet.

# Markdown Cheat Sheet

Here are some of the most commonly used methods for manipulating text in markdown.

# How to Create Headers in Markdown

There are six markdown headers, H1 thorough to H6. I'll show you how it displays visually, and also the way you create it using markdown.

H1's are the biggest and generally are the "main" headers, and each header after H1 gets smaller.

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

# How to Add Typographical Emphasis in Markdown

The ways you commonly add emphasis with text are bold, italics and strikethroughs. Combining too much emphasis can make words much less clear, so choose carefully how you want to emphasize each bit of text.

There are also subscript and superscript notation that you'll use to write the names of various chemical compounds, for example. You may also use them as part of mathematical notation.

**How to make text bold:**

Add double asterisks around your text. It'll make that text appear bold. Like this: `**Bold text**`

_How to make your text italic:_

Add single asterisks around your text to make it appear in italics, like this: `*Italics*`

How to ~Strike through~ certain text:

If you want to "cross something out" in text, use the strikethrough method, like this: `~~Strike through~~`.

### How to Write Subscripts in Markdown

If you want to write the chemical symbol for water, for example, you can make a subscript "2" by typing `H~2~0`.

This results in: H20.

### How to Write Superscripts in Markdown

Say you want to write an exponent - or superscript. You do that like this: `X^2^` which results in this: X2.

# How to Make Lists in Markdown

There are multiple types of lists in markdown. For example, you can have ordered lists and unordered lists.

Ordered lists are commonly used when you want to follow steps in a certain order (like following a recipe: cook the chicken...serve the dish). But unordered lists work well for things that don't require sequential steps like a recipe (a shopping list, for example).

### How to Make an Unordered List in Markdown

This is how the unordered list looks.

-   Chili oil
-   Rice
-   Spring onions

And this is how you create it in markdown:

```
- Chili oil
- Rice
- Spring onions
```

### How to Make an Ordered List in Markdown

This is how the ordered list looks.

1.  First item
2.  Second item

And this is how you create it in markdown:

```
1. First item 
2. Second item
```

# How to Create Links in Markdown

The two most common ways of linking things in markdown documents is either by hyperlinks or images. Both can help make your writing much clearer and more eloquent, and should be used where appropriate.

Here's what a hyperlink in text looks like:

[Kealan's site](https://www.kealanparr.com)

And here's how you'd create that link in Markdown:

`[Kealan's site](https://www.kealanparr.com)`

You put the text you want to link in square brackets (here, "Kealan's site"), and then immediately follow them with parenthesis containing the URL.

Say you want to include an image in an article. To get it to appear like this:

![View of natural rock landscape formations making a valley ending in a road crossing through with a blue sky.](https://images.unsplash.com/photo-1660866838784-6c5158c0f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)

You simple use the following notation:

```
![View of natural rock landscape formations making a valley ending in a road crossing through with a blue sky.](https://images.unsplash.com/photo-1660866838784-6c5158c0f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)
```

It's similar to a regular link, but you include the exclamation point before the brackets.

## How to Use HTML in Markdown

You can use regular HTML in Markdown documents (depending on the parser that's being used).

So feel free to just input any valid HTML you like.

## How to Add Spacing in Markdown

If you want to add a horizontal line to divide up sections of a document, you can make one like this:

* * *

By using three dashes like this:

```
---
```

## How to Create Tables in Markdown

Tables come in handy in your articles. To make a table that looks like this:

| Name | Age |
| --- | --- |
| Kealan | 25 |
| Jake | 28 |

Here's the notation you'd use:

```
| Name   | Age |
| ------ | --- |
| Kealan | 25  |
| Jake   | 28  |
```

The only real "gotcha" you have to be aware of when making a markdown table is that you keep the pipes (|) vertically in line. Then your markdown table will appear as above in this article. An image to make that clearer is:

![image-139](https://www.freecodecamp.org/news/content/images/2022/08/image-139.png)

A markdown table is displayed, with Name and Age as the headers and Kealan, Jake and 25 & 28 as the values.

## **How to Add Code and Syntax in Markdown**

Adding code snippets to your markdown can be incredibly helpful if you are creating documentation for developers, for example.

The below is a very simple JavaScript example, but almost all modern programming languages are supported (with syntax highlighting and so on).

```javascript
console.log('example log')
```

  
\`\`\`javascript  
console.log('example log')  
\`\`\`

Just type the three backticks followed by the programming language and then enter to start writing your code. End the code block with three backticks.

# How to Add Quotes in Markdown

When you reference someone else's work, it is expected and courteous to credit them. One easy way you can do that is by quoting them.

If you want to add quotes in markdown:

> "This is a quote, from someone who is very wise" - Anonymous

Just add this symbol, which renders it like the above quote:

`> "This is a quote, from someone who is very wise" - Anonymous`

# Conclusion

I hope this has been a useful reference for you, and that you've learned a new feature of markdown you hadn't seen before.

There are lots more features (not even counting all the HTML variations you could create), but this article has covered the most used features.