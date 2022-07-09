> -  原文地址：[What is an SVG File?](https://www.freecodecamp.org/news/what-is-an-svg-file/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：Utopia-xxl
> -  校对者：

![What is an SVG File?](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/svg.png)

SVG stands for scalable vector graphics. It's a web-friendly vector-based file format used to render two-dimensional images on the internet.

You can identify SVG files by their extension – `.svg`.

Unlike other popular image formats like PNG, JPEG, and JPG – which store image information in form of pixels because they are raster-based formats – SVGs store graphics information as a set of points and lines.

This means no matter how SVG files are reworked, zoomed, or resized, they don’t become blurred and pixelated like PNG, JPG, and other raster images.

This article will show you the possibilities of SVG image files and how you can make one for yourself by coding it.

## Table of Contents

-   [How to Make an SVG File](#howtomakeansvgfile)
    -   [How to Make an SVG with Image Editing Programs](#howtomakeansvgwithimageeditingprograms)
    -   [How to Make an SVG with XML](#howtomakeansvgwithxml)
-   [What is an SVG File Used for?](#whatisansvgfileusedfor)
-   [How to Open an SVG File](#howtoopenansvgfile)
-   [How do I Convert an SVG File to an Image?](#howdoiconvertansvgfiletoanimage)
-   [Conclusion](#conclusion)

## How to Make an SVG File

### How to Make an SVG with Image Editing Programs

You can make an SVG file with image editing software like Adobe Illustrator, CorelDraw, Adobe Photoshop, Microsoft Visio, and GIMP.

With these programs, your creativity is your limit when it comes to the SVGs you can draw.

It depends on how knowledgeable and experienced you are with the programs.

In addition, if you create an illustration and drawings with Google Docs, you can export them to SVG.

### How to Make an SVG with XML

If you don’t know how to use the image editing programs listed above but you can code, you can code up an SVG with XML.

To code an SVG, create a file with the `.svg` extension:  
![ss1](https://www.freecodecamp.org/news/content/images/2022/06/ss1.png)

**Step 1**: Define your SVG opening and closing tags

```xml
<svg>
    <!--  -->
</svg>
```

**Step 2**: Define the version and `xmlns` attributes inside the opening tag and set both to `1.1` and `"http://www.w3.org/2000/svg"` respectively.

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    
</svg>
```

**Step 3**: Specify the shape you want to draw in a self-closing tag. For example, `<rect>` for rectangle.

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect />
</svg>
```

**Step 4**: Specify the width and height you want:

```xml
 width="200" height="100"
```

**Step 5**: Define the color with which you want to fill the shape with the `fill` attribute:

```xml
fill="#2ecc71"
```

The code now looks as shown in the snippet below:

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="#2ecc71" />
</svg>
```

And at the end, this is what shows in the browser:  
![ss2](https://www.freecodecamp.org/news/content/images/2022/06/ss2.png)

You can also define border-radius on the `x` and `y` axis with the `rx` and `ry` attributes:

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="#2ecc71" rx="4" ry="4" />
</svg>
```

![ss3](https://www.freecodecamp.org/news/content/images/2022/06/ss3.png)

After drawing the SVG, you can then use it as the value for the source (`src`) of an image:

```html
<img src="svgdraw.svg" alt="A rectangle made with SVG" />
```

If you want, you can embed the SVG straight into your HTML code:

```html
<body>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="100" fill="#2ecc71" />
    </svg>
</body>
```

## What is an SVG File Used for?

Because SVG files remain the same for life, website icons and logos are usually made with them.

An excellent advantage of SVG is that the text in them can be read by search engines like Google, so SVG files are used for making infographics and illustrations.

## How to Open an SVG File

Modern browsers like Google Chrome, Edge, Safari, and Firefox have built-in functionalities that make them open SVG files for you.

You can also open SVG files in specialized editing software you can use to make them. Again, examples are Adobe Illustrator, CorelDraw, Adobe Photoshop, Microsoft Visio, and GIMP.

If you want to edit SVG files, you can open them with a Code Editor like VS Code, Atom, and Sublime Text then make your edits.

## How do I Convert an SVG File to an Image?

If you want to convert an SVG to other image formats like PNG, and JPG, you can use image editing programs like Adobe Photoshop.

You can also use an online tool called [Convertio](https://convertio.co/svg-png/).

All you need to do is to upload your SVG, then select the format you want to convert it to.  
![ss4](https://www.freecodecamp.org/news/content/images/2022/06/ss4.png)

## Conclusion

There are a lot of reasons why you should be using SVG.

My favorite of all those reasons is that search engines can read the text on SVG files. This is because SVG files are written in pure XML – the markup language for transmitting digital data.

If Google and other search engines find relevant keywords in the SVG files, it can lead to a massive boost in SEO.

Thank you for reading.
