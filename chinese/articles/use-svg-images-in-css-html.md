> -  原文地址：[How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/use-svg-images-in-css-html/)
> -  原文作者：[Edidiong Asikpo](https://www.freecodecamp.org/news/author/edidiong/)
> -  译者：lzzlzz
> -  校对者：

![How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-15-at-3.59.07-PM.png)

SVG stands for Scalable Vector Graphics. It is a unique type of image format for vector-based graphics written in Extensible Markup Language (XML).
SVG是指可缩放的向量图形。这是一种可以使用可扩展标记语言（XML)进行编写的基于向量的图像类型。
In this tutorial, I will explain why you'd want to use SVG images and how you can use them in CSS and HTML.
在本教程中，我将解释为什么需要使用SVG图像，以及如何在CSS和HTML中使用它们。

# Why should you use SVG images?
# 为什么需要使用SVG图像？

There are a number of reasons to use SVG images, some of which are:
使用SVG图像的原因有很多，其中一些原因如下所示：

-   SVG images do not lose their quality when zoomed or resized.
-   当放大或缩小的时候，SVG图像不会失真。
-   They can be created and edited with an IDE or text editor.
-   可以使用IDE和文本编辑器创建和编辑SVG图像。
-   They are accessible and animatable.
-   SVG图像可以获取并支持动画。
-   They have a small file size and are highly scalable.
-   SVG图像文件小并且具有高扩展性。
-   And they can be searched, indexed, scripted, and compressed.
-   SVG图像可以被搜索、索引、脚本化以及压缩。

Now let's see how you can actually work with SVG images.
现在来看如何实际使用SVG图像。

# How to download the SVG image used in this tutorial
# 如何下载本教程中使用的SVG图像

If you want to work with the SVG image I've used in this tutorial, follow the steps (and diagram) below to download it.
如果你想使用本教程中使用的SVG图像范例，可以根据以下步骤下载。

-   Go to [unDraw](https://undraw.co).
-   访问 [unDraw](https://undraw.co)。
-   Change the background color to yellow.
-   将背景色改为黄色。
-   In the search box, search for the word **happy**.
-   在搜索框中搜索关键词**happy**。

![unDraw's Homepage](https://i.imgur.com/ncSY7Rn.png)

-   Click on the image named **Happy news**.
-   点击图像名称 **Happy news**。
-   On the pop-up window, click on the **Download SVG to your projects** button.
-   在弹出框中，点击 **Download SVG to your projects** 按钮。

![Download the SVG file](https://i.imgur.com/qGrT73n.png)

If you followed the steps above correctly, the SVG image should be on your computer now.  
如果正确操作了以上步骤，本教程中的SVG图像应该已经在你的电脑中了。

![](https://i.imgur.com/3uCGy6B.png)

Now, open the SVG image in your favorite IDE or text editor. Rename it to **happy.svg** or whatever name you prefer.
现在，使用你喜欢的IDE或者文本编辑器打开这个SVG图像，并将它重命名为**happy.svg**或者任何你喜欢的名字。

# How to use SVG images in CSS and HTML
# 如何在CSS和HTML中使用SVG图像

There are several different ways to use SVG images in CSS and HTML. We will explore six different methods in this tutorial.
在CSS和HTML中使用SVG图像有几种不同的方式。接下来，本文将介绍6种不同的方式。

## 1\. How to use an SVG as an `<img>`
## 1\. 如何把SVG当作`<img>`来使用

This method is the simplest way to add SVG images to a webpage. To use this method, add the `<img>` element to your HTML document and reference it in the `src` attribute, like this:
这是将SVG图像加入网页当中最简单的方式。为了使用这种方法，需要在HTML文档中添加一个`<img>`元素，并且在该元素的`src`属性中指定该SVG图像的引用，代码如下所示：
```html
<img src = "happy.svg" alt="My Happy SVG"/>
```

Assuming you downloaded the SVG image from unDraw and renamed it to **happy.svg**, you can go ahead and add the code snippet above into your HTML document.


If you did everything correctly, your webpage should look exactly like the demo below. 👀

When you add an SVG image using the `<img>` tag without specifying the size, it assumes the size of the original SVG file.

For instance, in the demo above, I didn't modify the size of the SVG image, so it assumed its original size (which was a width of  `600.53015px` and a height of `915.11162px`).

**Note:** to change the original size, you have to specify the `width` and `height` with CSS as you can see in the demo below. You can also update the original `width` and `height` directly.

Even though we can change the size of SVG images added via the `<img>` tag, there are still some restrictions if you want to make major style changes to the SVG image.

## 2\. How to use SVG as a CSS `background-image`

This is similar to adding SVG to an HTML document using the `<img>`  tag. But this time we do it with CSS instead of HTML as you can see in the code snippet below.

```css=
body {
  background-image: url(happy.svg);
}
```

When you use an SVG as a CSS background image, it has similar limitations to using `<img>`. Still, it allows a bit more customization.

Check out the demo below and feel free to make modifications to it using CSS.

## 3\. How to use inline SVG images

SVG images can be written directly into the HTML document using the`<svg> </svg>` tag.

To do this, open the SVG image in VS code or your preferred IDE, copy the code, and paste it inside the `<body>` element in your HTML document.

```htmlembedded=
<body>
 // Paste the SVG code here.
</body>
```

If you did everything correctly, your webpage should look exactly like the demo below.

When you use SVG inline in the HTML document, it reduces load time because it serves as an HTTP request.

Using this method lets you perform more customization as opposed to using either the `<img>` or `background-image` methods.

## 4\. How to use an SVG as an `<object>`

You can also use an HTML `<object>` element to add SVG images to a webpage using the code syntax below:

```
<object data="happy.svg" width="300" height="300"> </object>
```

You use the `data` attribute to specify the URL of the resource that you'll use by the object, which is the SVG image in our case.

You use the `width` and `height` to specify the size of the SVG image.

Again, below is a demo for you to explore. 😃

Using the `<object>` is supported across all browsers that support SVG.

## 5\. How to use SVG as an `<iframe>`

Even though this isn't advisable, you can also add an SVG image using an `<iframe>`  as seen in the demo below.

Just keep in mind, though, that `<iframe>`s can be difficult to maintain and will be bad for your site's Search Engine Optimization (SEO).

Using `<iframe>` also defeats the purpose of the _Scalable_ in the name _Scalable Vector Graphics_ because SVG images added with this format are not scalable.

## 6\. How to use SVG as an <embed>

The HTML `<embed>` element is another way to use an SVG image in HTML and CSS using this syntax: `<embed src="happy.svg" />`.

Keep in mind, however, that this method has limitations, too. According to MDN, most modern browsers have deprecated and removed support for browser plug-ins. This means that relying upon `<embed>` is generally not wise if you want your site to be operable on the average user's browser.

Below is a demo of using the HTML `<embed>` element to add an SVG image.

## Conclusion

I hope you were able to learn about the different ways of using SVG images in CSS and HTML. This will hopefully guide you towards choosing the right method when adding SVG images to a website.

If you have any questions, you can send me a [message on Twitter](https://twitter.com/Didicodes), and I'll be happy to answer every single one.
