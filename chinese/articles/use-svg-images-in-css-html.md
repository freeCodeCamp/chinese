> -  原文地址：[How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/use-svg-images-in-css-html/)
> -  原文作者：[Edidiong Asikpo](https://www.freecodecamp.org/news/author/edidiong/)
> -  译者：lzzlzz
> -  校对者：

![How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-15-at-3.59.07-PM.png)

SVG 指可缩放矢量图形，是一种可以使用可扩展标记语言（XML)进行编写的矢量图形。

本教程将解释为什么需要使用 SVG 图像，以及如何在 CSS 和 HTML 中使用它们。

# 为什么需要使用 SVG 图像？


使用 SVG 图像的原因有很多，其中一些原因如下所示：


-   SVG 图像在放大或缩小的时候不会失真。

-   SVG 图像可以使用 IDE 和文本编辑器进行创建和编辑。

-   SVG 图像支持动画和交互。

-   SVG 图像文件小并且具有高扩展性。

-   SVG 图像可以被搜索、索引、脚本化以及压缩。


现在来看如何使用 SVG 图像。


# 如何下载本教程中使用的 SVG 图像


如果你想使用本教程中的 SVG 图像，可以通过以下步骤下载。


-   访问 [unDraw](https://undraw.co)。

-   将背景色改为黄色。

-   在搜索框中搜索关键词**happy**。

![unDraw's Homepage](https://i.imgur.com/ncSY7Rn.png)


-   点击图像名称 **Happy news**。

-   在弹出框中，点击 **Download SVG to your projects** 按钮。

![Download the SVG file](https://i.imgur.com/qGrT73n.png)


如果你正确执行了以上步骤，本教程中的 SVG 图像应该已经在你的电脑中了。

![](https://i.imgur.com/3uCGy6B.png)


现在，使用你喜爱的 IDE 或者文本编辑器打开这个 SVG 图像，并将它重命名为**happy.svg**或者任何你喜欢的名字。


# 如何在 CSS 和 HTML 中使用 SVG 图像

There are several different ways to use SVG images in CSS and HTML. We will explore six different methods in this tutorial.
在 CSS 和 HTML 中使用 SVG 图像有许多不同的方式。接下来，本教程将介绍其中 6 种方式。


## 1\. 如何利用`<img>`元素使用 SVG 图像 


利用`<img>`元素将 SVG 图像添加到网页中是最简单的方式。使用这种方法，需要在 HTML 文档中添加一个`<img>`元素，并且在该元素的`src`属性中指定该 SVG 图像的引用，代码如下所示：
```html
<img src = "happy.svg" alt="My Happy SVG"/>
```


如果你已经从 unDraw 网站上下载了 SVG 图像并将它重命名为**happy.svg**，你可以继续向下进行并将上面的代码片段添加到你的 HTML 文档中。



如果每一步都操作正确，你的页面应该同下面 demo 中所示内容类似。👀


当使用`<img>`标签添加 SVG 图像时没有指定大小，浏览器将默认显示原始 SVG 图像的大小。


例如，上面的 demo 中，没有修改 SVG 图像的大小，所以它保持了原始的大小（宽为`600.53015px`，高为`915.11162px`）。

**注意:** 为了改变原始大小，你需要像以下 demo 中一样使用 CSS 指定`img`的`width`和`height`，也可以直接更改原始图像的宽和高。

虽然可以通过`<img>`标签来改变 SVG 图像的大小，但是在对 SVG 图像的主要样式进行修改时，这种方式仍有一些限制。


## 2. 如何在 CSS 的 `background-image`属性中使用 SVG 图像
This is similar to adding SVG to an HTML document using the `<img>`  tag. But this time we do it with CSS instead of HTML as you can see in the code snippet below.
这种方式类似于使用`<img>`标签将 SVG 图像添加到 HTML 文档的方式，但是这种方法使用 CSS 操作代替了对 HTML 的操作，具体方式如下所示。
```css=
body {
  background-image: url(happy.svg);
}
```


使用 SVG 图像作为 CSS 背景图像与使用`<img>`标签的方式具有类似的限制。不过，这种方式支持更多自定义操作。


可以查看下面的 demo 并随意使用 CSS 对其进行修改。


## 3. 如何使用内联 SVG 图像

使用`<svg> </svg>`标签可以将 SVG 图像直接写入 HTML 文档中。

为了实现这种方式，需要使用 VS code 或者其他 IDE 打开 SVG 图像文件并复制其中的代码，然后将其粘贴到你的 HTML 文档中的`<body>`元素中，如下所示。

```htmlembedded=
<body>
 // Paste the SVG code here.
</body>
```


如果每一步操作都正确，你的页面应该同下面 demo 中所示内容类似。


在 HTML 文档中内联使用 SVG 图像的方式可以减少加载时间，因为只需要进行一次 HTTP 请求。

并且这种方式相较于使用`<img>` 或 `background-image`这两种方式具有更高的自定义性。


## 4\. 如何利用`<object>`元素使用 SVG 图像

还可以使用 HTML 中的`<object>`标签来将 SVG 图像添加到网页中，具体方式如以下代码所示：
```
<object data="happy.svg" width="300" height="300"> </object>
```


使用`data`属性指定`<object>`所展示资源的 URL，在本例中就是指 SVG 图像。


然后，使用`width` 和 `height`两个属性指定 SVG 图像的大小。


同样，如果一切正常，你的网页现在应该长这个样子。😃


所有支持 SVG 的浏览器都支持使用 `<object>`。


## 5\. 如何利用`<iframe>`元素使用 SVG 图像


虽然不建议使用这种方式，但是你的确能够使用`<iframe>`标签来添加一个 SVG 图像，正如下例所示。


但是要记住，`<iframe>`元素难以维护而且将不利于你的网站进行 SEO 优化。


而且，使用`<iframe>`元素也影响了可缩放矢量图形的可缩放性，因为使用这种方式添加的 SVG 图像不可以缩放。

## 6\. 如何利用`<embed>`元素使用 SVG 图像

利用`<embed>`元素是在 HTML 和 CSS 中使用 SVG 图像的另一种方式，其用法为`<embed src="happy.svg" />`。

然后，需要注意的是，这种方式也有其局限性。根据 MDN 的解释，大多数现代浏览器已经废弃和移除了对浏览器插件的支持。这意味着如果想要支持所有用户的浏览器，使用`<embed>`方式是不明智的。


下面是一个使用利用`<embed>`元素使用 SVG 图像的例子。
## Conclusion
## 总结

希望本文可以让你了解在 CSS 和 HTML 中使用 SVG 图像的不同方式，并引导你选择一种合适的方式将 SVG 图像添加到网站中。


如果有任何疑问，可以通过[Twitter](https://twitter.com/Didicodes)给我发送信息，我很乐意回复每一个问题。
