> -  原文地址：[CSS Background Color – How to Change the Background Color in HTML](https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/)
> -  原文作者：[Ilenia Magoni](https://www.freecodecamp.org/news/author/ilenia/)
> -  译者：
> -  校对者：

![CSS Background Color – How to Change the Background Color in HTML](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/html-background-color.png)

You have started creating your HTML page, and you want to give it some color – maybe change the color of the text or set a nice background. So how do you do that?

In this article I'll show you how you can change the background color of a page in a few different ways.

# How to Change the Background Color of an HTML Element

You can change the background color of an HTML element using the `background-color` CSS property and giving it a value of a color.

```CSS
p {
  background-color: pink;
}
```

With this code, the paragraphs are given a pink background.

For example, this code will make all paragraph elements in your HTML file have a pink background because the `background-color` property has a value of `pink`.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-16.png)

There are about 140 color names that you can use, like `teal`, `hotpink`, `indigo` and many others.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-23.png)

A few of the possible color names you can use

Note: if you give a background-color to an element and don't see it change, it can be a syntax error, or it can also be that the element does not have a width or height. Try to put some content in it, or give it a width and an height using the CSS properties `width` and `height`.

There are actually almost 16.8 million colors that you can use. You can use all these colors using RGB values. There are also HSL colors where you have about 3.7 million colors to choose from. In the next section you will learn about all these different ways of creating colors.

# Different Color Notations

The `background-color` property accepts colors as possible values. Here you will see four different notations for color values.

The first will be color names, and there are around 140 keywords that you can use. This is the easiest way to choose a color as it doesn't require understanding special notations – but it has a limited range of options.

The second and third ways to name or choose colors are RGB values and hexadecimal values. In these notations, colors are identified by the amount of red, green, and blue that they contain.

This comes from how a screen produces color. A screen is made of pixels, and each pixel is lighted by LEDs of three different colors, green, blue and red, that can shine at different intensities.

The fourth notation is HSL colors, or Hue-Saturation-Lightness. This notation comes from Graphic Design, as it reflects a more natural way for humans to think about color: a pure color (hue), of which saturation and lightness can be varied.

You can use any of these color notations to give a color to the background, but let's see them in more details, so you can choose the one you prefer.

## HTML Color Names

There are 16 basic colors recognised in the first version of HTML. Now there are 140+ named colors you can use.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-24.png)

The 16 basic colors

```CSS
body {
  background-color: black;
}
```

WIth this CSS, the `body` is given a black background

![](https://www.freecodecamp.org/news/content/images/2021/08/image-17.png)

An example of an HTML page with the `body` being given a `background-color` of `black`

You can see all the named colors in the appendix at the end of the article.

## RGB Colors

RGB stands for Red-Green-Blue. The colors in this format are written `rgb(0,0,0)`, where each value is a number between `0` and `255` representing the amount of red, green, and blue used to make each color, respectively.

For example, if you have `rgb(0,0,0)` you get black.

To get red, you write `rgb(255,0,0)`, where there is as much red as possible with `255`, `0` for blue, and `0` for green.

You can get other variations of red with small amounts of green and/or blue, and a bit less red. For example you can get an orange red with `rgb(255,69,0)` or a dark red with `rgb(139,0,0)`.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-25.png)

The colors of the rgb values presented above.

```CSS
div {
  background-color: rgb(139,0,0);
}
```

The `div` elements are given a dark red background.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-18.png)

An example of an HTML page with the `div` element being given a `background-color` of `rgb(139,0,0)`

Below an example of how the color changes when you adjust two of the RGB values: the top left corner of the colored square is equal to `rgb(0,0,0)`, the top right is equal to `rgb(0,0,255)`, the bottom left corner to `rgb(0,255,0)` and the bottom right corner to `rgb(0,255,255)`.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-28.png)

Fortunately, you don't need to guess the numbers to get the color you want. You can find various color pickers online that let you choose the color with sliders (or other methods) and give you the RGB color value you want to use.

## Hexadecimal Colors

Hexadecimal colors are a different way to write RGB colors. With hexadecimals you also have three numbers, one for each color, with 256 possible values.

In this case, though, each color has two digits that go from `0` to `F` (that is,  `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, and `A`, `B`, `C`, `D`, `E`, `F`). One single digit has 16 possible values, and two digits have 256 possible values, from `00`, to `FF` (255).

Hexadecimal colors are written with a `#` in front of the value. Red is written as `#FF0000`, dark red as `#8B0000`, and orange red as `#FF4500`, for example.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-2.png)

The colors mentioned in the section above.

```
h1 {
  background-color: #FF4500;
}
```

The `h1` elements are given a background of orange red.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-19.png)

An example of an HTML page with the `h1` element being given a `background-color` of `#FF4500`

You can also use color pickers to generate hexadecimal values.

### Hexadecimal shorthand

You can write hexadecimal numbers in shorthand form, using only three digits instead of six. For example, you can write red like `#F00`. This reduces the number of possible colors to just above 4,000, but it is shorter to write, and sometimes that is what is important.

Each digit is in place of two identical digits, so we can't write `#8B0000` in shorthand form, as `8` and `B` are not identical. But we can write `#800` which is equal to `#880000`, pretty similar to the other dark red. And orange red can be `#F40` (equal to `#FF4400`).

![](https://www.freecodecamp.org/news/content/images/2021/08/image-8.png)

The colors mentioned in the section above.

## HSL Colors

HSL means Hue-Saturation-Lightness, and it is a completely different way of writing colors than what we have seen so far.

HSL colors are represented with three numbers: the hue goes from `0` to `360`, and saturation and lightness from `0` to `100`.

The hue determines the base color, and its value is an angle, a degree on the color wheel. In this case, red is `0`, green is `120`, blue is `240`, and `360` is again red.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-11.png)

All possible colors changing only the hue, with hue of 0 to the left and hue of 360 on the right.

Saturation goes from `0`, which makes the color gray, to `100`, which shows the full color.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-9.png)

Variation of saturation for red, 0% on the left, 100% on the right.

Lightness is the amount of black or white added to the color. `0` is black, `50` is the color itself, and `100` is white.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-10.png)

Variation of lightness, with 0% on the left, and 100% on the right.

For example, you'd write red as `hsl(0,100%,50%)`, orange red as `hsl(16,100%,50%)`, and dark red as `hsl(0,100%,27%)`.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-26.png)

It can be easier to find similar colors using HSL than with the other color schemes. With red and its variations you have seen that to get a darker red you can just change the lightness percentage, and mixing red with an other color is enough to change its hue value a bit.

Let's see it in action with a mixed color in hexadecimal, like orange (`#FFA500` or `rgb(255,166,0)`), written in HSL as `hsl(39,100%,50%)`. You can get a lighter orange just by increasing the lightness.

So for example you can write `hsl(39,100%,65%)` to get this lighter orange. With the other notations you would have needed to write `rgb(255,193,77)` or `#FFC14D`.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-27.png)

![](https://www.freecodecamp.org/news/content/images/2021/08/image-20.png)

An example of an HTML page with the `main` element being given a `background-color` of `hsl(39, 100%, 65%)`

You can also find color pickers online for HSL colors.

# Property name short-hand

You can also set the background color using the short-hand `background` property.

```CSS
p {
  background: pink;
}

body {
  background: black;
}

div {
  background: rgb(139,0,0);
}

h1 {
  background: #FF4500;
}

main {
  background: hsl(39,100%,65%);
}
```

The same CSS properties seen before, but with the `background` shorthand property.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-21.png)

An example of an HTML page with all the elements being given a background color.

This is a more versatile property, [as it is shorthand for various `background` properties](/news/learn-css-background-properties/), like `background-image` and `background-position`. When you use it with a color value it works exactly the same as `background-color`.

# Conclusion

You have learned how to give a background color to your HTML elements using the `background-color` property and its shorthand `background`, and using different color notations.

Now you have all the tools you need to add whatever colors you want to your web pages. Enjoy!

# Appendix

## All 140+ named colors

![](https://www.freecodecamp.org/news/content/images/2021/08/CodePen-colored-squares-2.png)

## Spelling Variations

The color names containing the word "Gray" can also be written with the spelling "Grey" as shown below.

![](https://www.freecodecamp.org/news/content/images/2021/08/image-22.png)