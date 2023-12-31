> -  原文地址：[What is an SVG File?](https://www.freecodecamp.org/news/what-is-an-svg-file/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：Utopia-xxl
> -  校对者：

![什么是 SVG 文件？](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/svg.png)

SVG 意思是可缩放矢量图形。它是一种 web 友好的基于矢量的文件格式，用于在 Internet 上呈现二维图像。

你可以通过扩展名识别 SVG 文件 – `.svg`.

与其他流行的图像格式（如 PNG、JPEG 和 JPG）不同——它们以像素的形式存储图像信息，因为它们是基于光栅的格式——SVG 将图形信息存储为一组点和线。

这意味着无论 SVG 文件如何重新加工、缩放或调整大小，它们都不会像 PNG、JPG 和其他光栅图像那样变得模糊和像素化。

本文将向你展示 SVG 图像文件的可能性，以及如何通过编码为自己制作一个 SVG。

## 文章目录

-   [如何制作 SVG 文件](#howtomakeansvgfile)
    -   [如何使用图像编辑程序制作 SVG](#howtomakeansvgwithimageeditingprograms)
    -   [如何使用 XML 制作 SVG](#howtomakeansvgwithxml)
-   [SVG 文件有什么用途？](#whatisansvgfileusedfor)
-   [如何打开 SVG 文件](#howtoopenansvgfile)
-   [如何将 SVG 文件转换为图像？](#howdoiconvertansvgfiletoanimage)
-   [结论](#conclusion)

<h2 id="howtomakeansvgfile">如何制作SVG文件</h2>

<h3 id="howtomakeansvgwithimageeditingprograms">如何使用图像编辑程序制作 SVG</h3>

你可以使用 Adobe Illustrator、CorelDraw、Adobe Photoshop、Microsoft Visio 和 GIMP 等图像编辑软件制作 SVG 文件。

有了这些程序，当涉及到绘制的 SVG 时，你的创造力就是你的极限。

这取决于你对这些程序的了解和经验。

此外，如果使用 Google Docs 创建插图和绘图，可以将它们导出为 SVG。

<h3 id="howtomakeansvgwithxml">如何使用 XML 制作 SVG</h3>

如果您不知道如何使用上面列出的图像编辑程序但您可以编写代码，则可以使用 XML 编写 SVG。

要编写 SVG 代码，请创建一个`.svg`扩展名为的文件： 
![ss1](https://www.freecodecamp.org/news/content/images/2022/06/ss1.png)

**第 1 步**: 定义 SVG 的开始和结束标签

```xml
<svg>
    <!--  -->
</svg>
```

**第 2 步**: 在标签内定义版本和 `xmlns` 属性，分别设置为 `1.1` 和 `"http://www.w3.org/2000/svg"` 。

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    
</svg>
```

**第 3 步**: 在自闭合标签中指定要绘制的形状。例如，`<rect>` 绘制矩形。

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect />
</svg>
```

**第 4 步**: 指定你想要设置的宽度和高度:

```xml
 width="200" height="100"
```

**第 5 步**: 设置 `fill` 属性来设置要填充形状的颜色：

```xml
fill="#2ecc71"
```

The code now looks as shown in the snippet below:

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="#2ecc71" />
</svg>
```

最后，这就是显示器中显示的内容： 
![ss2](https://www.freecodecamp.org/news/content/images/2022/06/ss2.png)

你还可以使用 `rx` 和 `ry` 属性在 `x` 和 `y` 轴上定义边界半径：

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="#2ecc71" rx="4" ry="4" />
</svg>
```

![ss3](https://www.freecodecamp.org/news/content/images/2022/06/ss3.png)

绘制 SVG 后，你就可以将其用作引入图片时 `src` 的值：

```html
<img src="svgdraw.svg" alt="A rectangle made with SVG" />
```

如果需要，可以将 SVG 直接嵌入到 HTML 代码中：

```html
<body>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="100" fill="#2ecc71" />
    </svg>
</body>
```

<h2 id="howtomakeansvgfile">SVG 文件有什么用途？</h2>

因为 SVG 文件终生不变，所以网站图标和徽标通常是用它们制作的。

SVG 的一个显着优势是其中的文本可以被 Google 等搜索引擎读取，因此 SVG 文件用于制作信息图表和插图。

<h2 id="howtoopenansvgfile">如何打开 SVG 文件</h2>

Google Chrome、Edge、Safari 和 Firefox 等现代浏览器具有内置功能，可以使用它们打开 SVG 文件。

你还可以在可用于制作它们的专用编辑软件中打开 SVG 文件。例如 Adobe Illustrator、CorelDraw、Adobe Photoshop、Microsoft Visio 和 GIMP。

如果要编辑 SVG 文件，可以使用 VS Code、Atom 和 Sublime Text 等代码编辑器打开它们，然后进行编辑。

<h2 id="howdoiconvertansvgfiletoanimage">如何将 SVG 文件转换为图像？</h2>

如果要将 SVG 转换为其他图像格式，例如 PNG 和 JPG，可以使用 Adobe Photoshop 等图像编辑程序。

您还可以使用名为[Convertio](https://convertio.co/svg-png/)的在线工具。

您需要做的就是上传您的 SVG，然后选择您想要转换的格式。
![ss4](https://www.freecodecamp.org/news/content/images/2022/06/ss4.png)

<h2 id="conclusion">结论</h2>

你应该使用 SVG 的原因有很多。

所有这些原因中我最喜欢的是搜索引擎可以读取 SVG 文件上的文本。这是因为 SVG 文件是用纯 XML（用于传输数字数据的标记语言）编写的。

如果 Google 和其他搜索引擎在 SVG 文件中找到相关关键字，则可以极大地促进 SEO （搜索引擎优化）。

感谢你的阅读。
