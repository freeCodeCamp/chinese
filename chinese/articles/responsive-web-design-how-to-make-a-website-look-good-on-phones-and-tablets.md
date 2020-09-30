> -   原文地址：[Responsive Web Design – How to Make a Website Look Good on Phones and Tablets 响应式网页设计入门](https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-look-good-on-phones-and-tablets/)
> -   作者：Adam Henson
> -   译者：
> -   校对者：

![响应式网页设计 – 怎样让一个网站在手机、平板上好看](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/curve-design-futuristic-lines-911738.jpg)

在联网设备快速发展的格局中, 响应式网页设计在Web开发中仍然至关重要。

不久前，“响应式网页设计”一词尚不存在. 但是今天，我们大多数人不得不在某种程度上采用它。

[据统计][1], 截至 2019 年, 61% 的 Google 搜索访问来自移动设备. 在 2020 年 9 月，[Google 将改变其搜索算法][2]，让其优先展示移动端友好的网站。

**在这篇文章中，我将介绍以下内容:**

-   响应式网页设计是什么?
-   视口元标签及其作用
-   响应式网页设计中适应手机和平板电脑的有效技术
-   帮助模拟和监控手机和平板电脑用户体验的工具

## 响应式网页设计是什么? (RWD)

Responsive web design is an approach that focuses on a website user’s environment. The user's environment will depend on which device they have connected to the internet.

There are many device characteristics that provide opportunities for user-centric focus. Some of these include:

-   network connection
-   screen size
-   type of interaction (touch screens, track pads)
-   graphic resolution.

Before responsive web design was popular, many companies managed an entirely separate website that received traffic forwarded based on the user-agent.

But in responsive web design the server always sends the same HTML code to all devices, and CSS is used to alter the rendering of the page on the device.

Regardless of the two strategies above, the first step in creating a website for phone or tablet is to ensure the browser knows the intention. This is where the viewport meta tag comes into play.

## The Viewport Meta Tag to Identify a Mobile Website

The meta viewport tag instructs the browser how to adjust the page to the width of each device.

When the meta viewport element is absent, mobile browsers will display web pages with default desktop settings. This results in a seemingly zoomed out, unresponsive experience.

Below is a standard implementation:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Viewport meta tag example

Now that the browser knows what's going, we can utilize popular techniques to make our website responsive. 🙌

## CSS Media Queries for Different Screen Sizes and Orientations

If you're new to responsive web design, media queries are the first, most important CSS feature to learn. Media queries allow you to style elements based on viewport width. One popular CSS strategy is to write mobile styles first and build on top of them with more complex, desktop specific styles.

Media queries are an important part of responsive web design commonly used for grid layouts, font sizes, margins, and padding that differ between screen size and orientation.

Below is an example of a common use case of mobile first styling in which a column is 100% width for smaller devices, but in larger viewports is 50%.

```css
.column {
    width: 100%;
}
```

Mobile first CSS example

The code above is a simple example, but what it's actually doing is pretty interesting.

1.  In considering mobile first, the "column" element is set to have a width of 100%;
2.  By using a `min-width` media query, we define rules specifically for viewports with a minimum width of `600px` (viewports wider than `600px`). So, for viewports wider than `600px`, our column element will have a width that is 50% of its parent.

Although media queries are essential for responsive web design, many other new CSS features are also becoming widely adopted and supported in browsers. Flexbox is one of these new, important CSS feature in terms of responsive web design.

## What is Flexbox?

You might be wondering - "what does Flexbox do"? The better question is - "what can't Flexbox do"? What's the easiest way to vertically center with CSS? Flexbox. How do you create a responsive grid layout? Flexbox. How can we achieve global peace? Flexbox.

The Flexbox Layout (Flexible Box) module provides a more efficient way to lay out, align and distribute space among items in a container, even when their size is dynamic (hence the word “flex”).

In the below example we combine media queries as explained above to create a responsive grid.

```html
<style>
  main {
    background: #d9d7d5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div {
    background: #767775;
    flex-basis: 100%;
    height: 100px;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 600px) {
    main {
      flex-wrap: nowrap;
    }
div {
  flex-basis: 33%;
}
```

CSS flexbox example

We accomplish the following with this code:

1.  Establish a flexbox layout with `display: flex` in our `main` container element.
2.  Style for mobile first. We set the `main` element to `flex-wrap: wrap` which allows child elements to wrap within our flexbox layout as illustrated below in figure 1. We set `flex-basis: 100%` on our `div` elements to ensure they encompass 100% of the parent width in the flexbox layout (figure 1).
3.  Style for larger devices like tablets and desktop. We utilize a media query similar to our example in the previous section to set our container `main` element to `flex-wrap: nowrap`. This makes sure that child elements do not wrap and that they maintain a column within a row type of layout. By setting `div` to `flex-basis: 33%` within the media query - we establish columns that are 33% the width of the parent.
4.  In this example the magic would appear in larger devices with our combined media query and flexbox rules. Because we defined `display: flex`, and because we didn't override the rule within the media query, we have a flexbox layout for mobile, tablet, and desktop. The media query `flex-basis: 33%` and inherited `display: flex` rules will give us a recognizable flexbox layout as seen in figure 2. In the past, to achieve this column type of layout, we would need to do some serious heavy lifting and write tangles of CSS.

![](https://www.freecodecamp.org/news/content/images/2020/07/grid-mobile-1.png)

Figure 1: Mobile flexbox grid example

![](https://www.freecodecamp.org/news/content/images/2020/07/grid-desktop.png)

Figure 2: Desktop flexbox grid example

Flexbox provides a great way of achieving varying, fluid layouts. In some cases we might not have such freedom in vertical space. We may need to fit an element within a fixed height. In this situation, we have another technique at our disposal - horizontal scroll.

## Horizontal Scrolling with Overflow Scroll

There may come a time that you have content overflowing the viewport without a graceful way of handling it. Behold... overflow scroll to the rescue. 🦸

Common uses for this technique include scrollable menus and tables. Below is an example of a scrollable menu.

Responsive Web Design RWD Responsive menu Overflow scroll example This is a lot of content! Yes we have another item

```html
<style>
  menu {
    background: #d9d7d5;
    padding: 0.25rem;
    overflow-y: scroll;
    white-space: nowrap;
  }

```

Example horizontal scroll menu

How'd you do that!? Let's take a deeper dive.

-   `overflow-y: scroll` is the key ingredient of this recipe. By specifying it child elements will overflow the horizontal axis with scrolling behavior.
-   Not so fast! Although you may think `` `overflow-y` `` would be enough, we have to also tell the browser not to wrap the child elements with `white-space: nowrap` 🤷

Now that we have a few RWD layout techniques up our sleeve, let's take a look at elements that pose challenges specific to their visual nature - images and video.

## Responsive Images

By using modern image tag attributes we can accommodate a range of devices and resolutions. Below is an example of a responsive image.

```html
<style>
    img {
        max-width: 100%;
    }
</style>
```

This is doing a lot of things. Let's break it down:

1.  By setting `max-width: 100%` the image will scale up or down based on its container width.
2.  By using a combination of `picture`, `source`, and `img` tags we are actually only rendering one image and are only loading the best fitting image based on the user's device.
3.  **WebP** is a modern image format that provides superior compression for images on the web. By utilizing `source` we can reference a WebP image to use for browsers that support it, and another `source` tag to reference a PNG version of the images that don't support WebP.
4.  `srcset` is used to tell the browser which image to use based on the device's resolution.
5.  We establish [native lazy loading][8] by utilizing the `loading="lazy"` attribute / value pair.

## Responsive Video

Responsive video is another subject that has inspired a large number of articles and documentation.

One key strategy to establish responsive images, video, iframes and other elements involves the use of aspect-ratio. The aspect ratio box is not a new technique and quite a useful tool to have up your sleeve as a web developer.

[This article provides a solid demonstration][9] about how to achieve "fluid" width videos. Let's take a look at the code and break it down.

```html
<style>
    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
```

In this example we have a YouTube video embed as an iframe and a `div` container with `videoWrapper` class. This code is doing a lot... let's dig in.

-   `position: relative` on the container element allows child elements to utilize absolution positioning relative to it.
-   `height: 0` combined with `padding-bottom: 56.25%` is the key ingredient here which establishes a dynamic behavior, enforcing a `16:9` aspect ratio.
-   `position: absolute`, `top: 0` and `left: 0` set on the iframe creates a behavior in which the element positions itself absolutely relative to its parent... sticking it to the top left.
-   And finally width and height of 100% makes the child, iframe element 100% of its parent. The parent, `.videoWrapper` takes full control of establishing this aspect ratio layout.

I know... it's a lot. There's more we can do to make video and images look the best on phones and tablets. I'd encourage research on those topics independently in addition to this.

Okay, now that we're masters of responsive web design, how can we test what we've done? Fortunately, we have a number of tools to simulate and monitor user experience on a variety of devices.

## Tools to Simulate and Monitor Responsive Websites

There are a variety of useful tools to help us create websites with responsive web design. Below are a couple that I find especially useful.

### Chrome DevTools Mobile Emulation

Chrome's DevTools provides mobile emulation of a range of tablet and mobile devices. It also provides a "responsive" option which allows you to define a custom viewport size.

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.19.18-PM.png)

Figure 3: Chrome DevTools mobile and tablet device emulation

### Monitoring Mobile Website Performance with Foo

Lighthouse is an open-source tool that provides a way of analyzing website performance specific to a device.

[Foo uses Lighthouse behind the scenes to monitor website performance and provides feedback for analysis][11]. You can setup monitoring for both desktop and mobile devices to get continuous feedback about how responsive your website is.

For example, a Lighthouse report will callout images that are improperly loaded based on device.

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-12-at-6.31.09-PM.png)

Figure 4: Lighthouse report with mobile device emulation

## Conclusion

Responsive web design will continue to rapidly evolve, but if we stay on top of current trends we can provide the best experience for our users. I hope these tools and techniques are helpful!

Not only will our website users benefit from a versatile design but also search engines will rank our web pages higher.

[1]: https://www.statista.com/statistics/275814/mobile-share-of-organic-search-engine-visits/
[2]: https://webmasters.googleblog.com/2020/03/announcing-mobile-first-indexing-for.html
[3]: https://my-image.com/my-image-100.webp
[4]: https://my-image.com/my-image-200.webp
[5]: https://my-image.com/my-image-100.png
[6]: https://my-image.com/my-image-200.png
[7]: https://my-image.com/my-image-200.png
[8]: https://web.dev/native-lazy-loading/
[9]: https://css-tricks.com/fluid-width-video/
[10]: http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1
[11]: https://www.foo.software/lighthouse/
