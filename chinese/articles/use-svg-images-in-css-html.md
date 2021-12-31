> -  原文地址：[How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/use-svg-images-in-css-html/)
> -  原文作者：[Edidiong Asikpo](https://www.freecodecamp.org/news/author/edidiong/)
> -  译者：lzzlzz
> -  校对者：

![How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-15-at-3.59.07-PM.png)

SVG stands for Scalable Vector Graphics. It is a unique type of image format for vector-based graphics written in Extensible Markup Language (XML).
SVG是指可缩放的矢量图形。这是一种可以使用可扩展标记语言（XML)进行编写的基于向量的图像类型。
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
## 1\. 如何利用`<img>`元素使用SVG图像 

This method is the simplest way to add SVG images to a webpage. To use this method, add the `<img>` element to your HTML document and reference it in the `src` attribute, like this:
这是将SVG图像加入网页当中最简单的方式。为了使用这种方法，需要在HTML文档中添加一个`<img>`元素，并且在该元素的`src`属性中指定该SVG图像的引用，代码如下所示：
```html
<img src = "happy.svg" alt="My Happy SVG"/>
```

Assuming you downloaded the SVG image from unDraw and renamed it to **happy.svg**, you can go ahead and add the code snippet above into your HTML document.
如果你从unDraw网站上下载了SVG图像并将它重命名为**happy.svg**，你可以继续向下进行并将上面的代码片段添加到你的HTML文档中。


If you did everything correctly, your webpage should look exactly like the demo below. 👀
如果每一步都操作正确，你的页面应该同下面demo中所示内容类似。👀

When you add an SVG image using the `<img>` tag without specifying the size, it assumes the size of the original SVG file.
当使用`<img>`标签添加SVG图像时没有指定图像大小，就默认原始SVG图像的大小。

For instance, in the demo above, I didn't modify the size of the SVG image, so it assumed its original size (which was a width of  `600.53015px` and a height of `915.11162px`).
例如，上面的demo中，没有修改SVG图像的大小，所以它保持了原始的大小（宽为`600.53015px`，高为`915.11162px`）。
**Note:** to change the original size, you have to specify the `width` and `height` with CSS as you can see in the demo below. You can also update the original `width` and `height` directly.
**注意:** 为了改变原始大小，你需要像以下demo中一样使用CSS指定`width`和`height`，也可以直接更该原始图像的宽和高。

Even though we can change the size of SVG images added via the `<img>` tag, there are still some restrictions if you want to make major style changes to the SVG image.
虽然可以通过`<img>`标签来改变SVG图像的大小，但是在对SVG图像的主要样式进行修改时，这种方式仍有一些限制。

## 2\. How to use SVG as a CSS `background-image`
## 2\. 如何在CSS的 `background-image`属性中使用SVG图像
This is similar to adding SVG to an HTML document using the `<img>`  tag. But this time we do it with CSS instead of HTML as you can see in the code snippet below.
这种方式类似于使用`<img>`标签将SVG图像添加到HTML文档的方式，但是如以下代码所示，这种方法使用CSS操作代替了对HTML的操作。
```css=
body {
  background-image: url(happy.svg);
}
```

When you use an SVG as a CSS background image, it has similar limitations to using `<img>`. Still, it allows a bit more customization.
使用SVG图像作为CSS背景图像与使用`<img>`标签的方式具有类似的限制。不过，这种方式支持更多自定义操作。

Check out the demo below and feel free to make modifications to it using CSS.
可以查看下面的demo并随意使用CSS对其进行修改。

## 3\. How to use inline SVG images
## 3\. 如何使用内联SVG图像
SVG images can be written directly into the HTML document using the`<svg> </svg>` tag.
使用`<svg> </svg>`标签可以将SVG图像直接写入HTML文档中。
To do this, open the SVG image in VS code or your preferred IDE, copy the code, and paste it inside the `<body>` element in your HTML document.
为了实现这个操作，需要使用VS code或者其他IDE打开SVG图像文件并复制其中的代码，然后将其粘贴到你的HTML文档中的`<body>`元素中，如下所示。

```htmlembedded=
<body>
 // Paste the SVG code here.
</body>
```

If you did everything correctly, your webpage should look exactly like the demo below.
如果每一步操作都正确，你的页面应该同下面demo中所示内容类似。

When you use SVG inline in the HTML document, it reduces load time because it serves as an HTTP request.
在HTML文档中内联使用SVG图像的方式可以减少加载时间，因为只需要进行一次HTTP请求。
Using this method lets you perform more customization as opposed to using either the `<img>` or `background-image` methods.
这种方式相较于使用`<img>` 或 `background-image`这两种方式具有更高的自定义性。

## 4\. How to use an SVG as an `<object>`
## 4\. 如何利用`<object>`元素使用SVG图像
You can also use an HTML `<object>` element to add SVG images to a webpage using the code syntax below:
还可以使用HTML中的`<object>`标签来将SVG图像添加到网页中，具体方式如以下代码所示：
```
<object data="happy.svg" width="300" height="300"> </object>
```

You use the `data` attribute to specify the URL of the resource that you'll use by the object, which is the SVG image in our case.
使用`data`属性指定`<object>`所展示资源的URL，在本例中就是指SVG图像。

You use the `width` and `height` to specify the size of the SVG image.
然后，使用`width` 和 `height`两个属性指定SVG图像的大小。

Again, below is a demo for you to explore. 😃
同样，如果一切正常，你的网页现在应该长这个样子。😃

Using the `<object>` is supported across all browsers that support SVG.
所有支持SVG的浏览器都支持使用 `<object>`。

## 5\. How to use SVG as an `<iframe>`
## 5\. 如何利用`<iframe>`元素使用SVG图像

Even though this isn't advisable, you can also add an SVG image using an `<iframe>`  as seen in the demo below.
虽然不建议使用这种方式，但是你的确能够使用`<iframe>`标签来添加一个SVG图像，正如下例所示。

Just keep in mind, though, that `<iframe>`s can be difficult to maintain and will be bad for your site's Search Engine Optimization (SEO).
但是要记住，`<iframe>`元素难以维护而且将不利于你的网站进行SEO优化。

Using `<iframe>` also defeats the purpose of the _Scalable_ in the name _Scalable Vector Graphics_ because SVG images added with this format are not scalable.
而且，使用`<iframe>`元素也影响了可缩放的矢量图形的可缩放性，因为使用这种方式添加的SVG图像不可以缩放。
## 6\. How to use SVG as an <embed>
## 6\. 如何利用`<embed>`元素使用SVG图像
The HTML `<embed>` element is another way to use an SVG image in HTML and CSS using this syntax: `<embed src="happy.svg" />`.
利用`<embed>`元素是在HTML和CSS中使用SVG图像的另一种方式，其用法为`<embed src="happy.svg" />`。
Keep in mind, however, that this method has limitations, too. According to MDN, most modern browsers have deprecated and removed support for browser plug-ins. This means that relying upon `<embed>` is generally not wise if you want your site to be operable on the average user's browser.
然后，需要注意的是，这种方式也有其局限性。根据MDN的解释，大多数现代浏览器已经废弃和移除了对浏览器插件的支持。这意味着如果想要支持所有的用户浏览器，使用这种`<embed>`的方式是不明智的。

Below is a demo of using the HTML `<embed>` element to add an SVG image.
下面是一个使用利用`<embed>`元素使用SVG图像的例子。
## Conclusion
## 总结
I hope you were able to learn about the different ways of using SVG images in CSS and HTML. This will hopefully guide you towards choosing the right method when adding SVG images to a website.
希望本文可以让你了解在CSS和HTML中使用SVG图像的不同方式，并引导你选择一种合适的方式将SVG图像添加到网站中。

If you have any questions, you can send me a [message on Twitter](https://twitter.com/Didicodes), and I'll be happy to answer every single one.
如果有任何疑问，可以通过[Twitter](https://twitter.com/Didicodes)给我发送信息，我很乐意回复每一个问题。
