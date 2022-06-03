> -  原文地址：[HTML Space – How to Add Spaces in HTML](https://www.freecodecamp.org/news/html-space-how-to-add-spaces/)
> -  原文作者：[Quincy Larson](https://www.freecodecamp.org/news/author/quincylarson/)
> -  译者：
> -  校对者：

![HTML Space – How to Add Spaces in HTML](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/jeremy-thomas-E0AHdsENmDg-unsplash.jpg)

Adding a space to your HTML can be deceptively difficult. And there are at least 5 of ways to go about doing this.

This tutorial will show you several examples. It will also show you how to use fancy versions of space, too.

You can do all this in raw HTML, without the need for CSS. But be advised that CSS is the preferred way to add space to your HTML. And freeCodeCamp has a ton of tutorials on how to accomplish this using [the CSS box model](https://www.freecodecamp.org/news/css-box-model-explained-with-examples/).

## What is the ASCII character for a space?

The ASCII character code for a space is 20. But this is just the standard way. There are several

There are 5 types of spaces in HTML that you can use. To the naked eye, they look the same but they serve slightly different purposes.

And there is also the Tab Character, which represents pressing the tab key on your keyboard. And the Carriage Return Character, which represents pressing the enter key on your keyboard.

```
+---------------------+-----------+
|      Character      | HTML Code |
+---------------------+-----------+
| Non-breaking space  | &nbsp;    |
| En space            | &ensp;    |
| Em space            | &emsp;    |
| Thin space          | &thinsp;  |
| Standard space      | &#20;     |
| New Line (Return)   | &#13;     |
| Tab Character       | &#09;     |
+---------------------+-----------+
```

## How wide is a space character?

There are four common widths for space characters:

1.  Standard-width space. This is also called "non-line breaking space" because it will not cause a line break (AKA carriage return).
2.  Em space. This is called "Em" because it's as wide as the letter M is in whichever typeface you're using. (If you've heard the term em-dash, this is a dash as wide as the letter M.)
3.  En space. This is called "En" because it's as wide as the letter n is in your typeface.
4.  And finally, there's "Thin space", which is the thinnest of all spaces.

## What is the symbol for space in HTML?

The most commonly-used HTML entity is `&#20;`

You can try throwing this text to force it to render a space.

For example, let's say you want to put two spaces after a sentence, but something else in the website rendering engine is automatically removing one of the spaces. You may be able to type `&#20;&#20;` to add two spaces.

## Is space a non-ASCII character?

No. Space is an ASCII character. It's ASCII value is 20, and you can type it like this: `&#20;`

## How do I make white space in HTML?

You may want to use CSS to center your HTML elements instead of hard coding spaces.

But if you just want a quick and dirty way to create whitespace, and push text around, you can use the same space character over and over like this:

```html
[The text you want to add trailing whitespace to]&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[the text you want to add trailing whitespace to]
```

## What character looks like a space but isn't?

There are two characters that look like spaces but aren't:

1.  The New Line character – also known as the "carriage return". The HTML code for newline character is: `&#13;`
2.  The Tab Character, which is what you get when you press the tab button in a text field. The HTML code for Tab Character is: `&#09;`

I hope this tutorial has been helpful. Go forth and make space. 🚀