> -  原文地址：[How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/use-svg-images-in-css-html/)
> -  原文作者：[Edidiong Asikpo](https://www.freecodecamp.org/news/author/edidiong/)
> -  译者：
> -  校对者：

![How to Use SVG Images in CSS and HTML – A Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-15-at-3.59.07-PM.png)

SVG stands for Scalable Vector Graphics. It is a unique type of image format for vector-based graphics written in Extensible Markup Language (XML).

In this tutorial, I will explain why you'd want to use SVG images and how you can use them in CSS and HTML.

# Why should you use SVG images?

There are a number of reasons to use SVG images, some of which are:

-   SVG images do not lose their quality when zoomed or resized.
-   They can be created and edited with an IDE or text editor.
-   They are accessible and animatable.
-   They have a small file size and are highly scalable.
-   And they can be searched, indexed, scripted, and compressed.

Now let's see how you can actually work with SVG images.

# How to download the SVG image used in this tutorial

If you want to work with the SVG image I've used in this tutorial, follow the steps (and diagram) below to download it.

-   Go to [unDraw](https://undraw.co).
-   Change the background color to yellow.
-   In the search box, search for the word **happy**.

![unDraw's Homepage](https://i.imgur.com/ncSY7Rn.png)

-   Click on the image named **Happy news**.
-   On the pop-up window, click on the **Download SVG to your projects** button.

![Download the SVG file](https://i.imgur.com/qGrT73n.png)

If you followed the steps above correctly, the SVG image should be on your computer now.  

![](https://i.imgur.com/3uCGy6B.png)

Now, open the SVG image in your favorite IDE or text editor. Rename it to **happy.svg** or whatever name you prefer.

# How to use SVG images in CSS and HTML

There are several different ways to use SVG images in CSS and HTML. We will explore six different methods in this tutorial.

## 1\. How to use an SVG as an `<img>`

This method is the simplest way to add SVG images to a webpage. To use this method, add the `<img>` element to your HTML document and reference it in the `src` attribute, like this:

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