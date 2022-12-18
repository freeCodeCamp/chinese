> -  原文地址：[How to Lazy Load Images in React](https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/)
> -  原文作者：[Victor Eke](https://www.freecodecamp.org/news/author/victoreke/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Lazy Load Images in React](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/How-to-lazy-load-images-in-React-1.png)

优化网站上的资源（如图片懒加载）是提高web性能最有效的办法之一。

这样做可以确保网站高速运行、有良好的[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)以及用户体验。

在这篇文章中，你将学习如何在React应用中实现懒加载。我将讲解这样做的好处，以及如何通过代码中实现。

在开始之前，让我解释一下什么是懒加载，以及它是如何运作的。

## 什么是懒加载?

> 懒加载是延迟加载一些资源（如：图片）的一种策略，以用户的行为和导航模式为依据，判断图片在被需要的时候才加载。通常来说，仅当这些资源滚动到视图中才被加载。 [(来源: MDN Docs)](https://developer.mozilla.org/en-US/docs/Glossary/Lazy_load)

[Unsplash](http://unsplash.com)就是一个很好的例子。当你滚动页面的时候，一开始会看到一个模糊的低质量图像占位符[LQIP](https://web.dev/image-component/)，当图片被滚动到视图中时，整个图片被完全加载。

![unsplash-lazy-load-image-illustration-](https://www.freecodecamp.org/news/content/images/2022/08/unsplash-lazy-load-image-illustration-.gif)

这背后的理念是推迟视口以外图片的加载，以此来减少带宽的使用，提高用户体验，并加快页面加载的速度。

现在懒加载已经是一种`image/iframe`，所以仅需在img/iframe元素中添加 `loading=" lazy"`属性，如下：

```html
<img src="image.jpg" alt="Image Alt" loading="lazy" />
<iframe src="iframe" loading="lazy"></iframe>
```

在不需要更多配置的情况下就可以生效。

遗憾的是，根据[caniuse.com](https://caniuse.com/?search=lazyloadin)显示，不是所有的浏览器都支持这样的方式。 同时，在Firefox中，`loading= "lazy"` 属性并不能在`iframe`元素中使用。 在这些情况下，你需要搭配其他的库或者工具一起使用。


## 开始实现懒加载

本文将使用一个名为[React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component)的库。  
这个流行的库能够帮助你快速且轻松地在React应用中实现一些图片渲染的能力和效果。

代码示例可以在[GitHub仓库](https://github.com/evavic44/react-lazyload)查看。

### 步骤 1 – 安装React Lazy Load Image组件

我们首先通过NPM来安装React lazy load image组件：

```js
// Yarn
$ yarn add react-lazy-load-image-component
or
// NPM
$ npm i --save react-lazy-load-image-component
```

### 步骤 2 – 引用组件

这里我们将直接通过组件来引用，你也可以通过外部URL的方式来引用图片。在这个例子中，我将图片作为images目录下的组件引用：

```js
import Image from "../images/bird.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
```


### 步骤 3 – 声明图片

使用`LazyLoadImage`替换掉`img`来声明图片，使用你习惯的`src`属性来声明图片。

代码如下：

```js
import React from "react";
import Image from "../images/bird.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function App() {
  return (
    <div>
      <LazyLoadImage src={Image}
        width={600} height={400}
        alt="Image Alt"
      />
     </div>
  );
}
```

同时，需要明确定义图片的宽和高，以避免[累积布局偏移(CLS)](https://web.dev/cls/)问题。

若要查看组件效果，可以打开浏览器的开发者工具，如果是Windows和Linux系统，使用组合键 Ctrl + Shift + E；如果是Mac使用 Cmd + Opt + E。然后将节流设置为较低的网络(3G)，禁用缓存，并刷新页面。

  
![network-tab](https://www.freecodecamp.org/news/content/images/2022/08/network-tab.png)

效果如下:

  

![default](https://www.freecodecamp.org/news/content/images/2022/08/default.gif)

Default（默认）时，因为图片并不在视口，图片没有加载。一旦你开始滚动，图片到达视图，懒加载就被禁用，我们就可以看到图片。

[Live演示](https://react-lazyload.vercel.app/default)

### 步骤 4 – 添加图片占位符

另外，在图片加载的过程中，我们可以先提供一个低分辨率的图片。这样就可以填充图片区域，让用户知道有一个图片正在加载。我们将这种占位符图片称为低质量图片占位符(LQIP)。

这样做不仅能使页面更美观，同时也给用户对实际图片的一个预估。

我使用[squoosh.app](https://squoosh.app/)来获取更小尺寸的图片。你可以在这个工具中引用你需要的图片，并且尝试各种分辨率和质量直至你觉得满意。

你还可以使用其他的图片处理工具：

-   [Photoshop](https://www.adobe.com/products/photoshop.html)
-   [Responsive Breakpoints](https://responsivebreakpoints.com)

  

![rasterized-image](https://www.freecodecamp.org/news/content/images/2022/08/rasterized.png)

一开始，我们的图片大小为 `288KB`，但是我们成功将其压缩为`2.41KB`。使用占位符图片需要在图片添加一个`PlaceholderSrc`属性，并包含图片的值。

```js
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/placeholder.jpg";

<LazyLoadImage src={Image}
    width={600} height={400}
    PlaceholderSrc={PlaceholderImage}
    alt="Image Alt"
/>
```

  

![React-lazyload-LQIP-](https://www.freecodecamp.org/news/content/images/2022/08/React-lazyload---LQIP-.gif)

你可以看到一开始加载的是占位符图片，一旦完成加载，就替换成主图。

[Live Demo](https://react-lazyload.vercel.app/placeholder)

### 步骤 5 – 添加模糊图

LazyLoadImage提供一个插件，在加载前模糊图片，加载完成后去除掉模糊。

将其与占位符图片结合，可以提升整体效果。

为了使用模糊效果，我们必须引用控制它的CSS文件：

```js
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/placeholder.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

<LazyLoadImage src={Image}
    width={600} height={400}
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
```

  

![React-lazyload---Blur](https://www.freecodecamp.org/news/content/images/2022/08/React-lazyload---Blur.gif)

[Live演示](https://react-lazyload.vercel.app/blur)



## 为什么要对图片实现懒加载?

你可能会好奇，为什么要在web应用中使用懒加载这么麻烦的技术。这样做值得吗，我为什么要关注文章中的观点？

以下是使用懒加载的理由：

### 1\. 懒加载节省数据和带宽

由于在视口外的图片不被及时加载，懒加载可以节省带宽的使用。这有利于提升特别是手机用户的使用性能。

### 2\. 懒加载减少CDN花销

如[Cloudinary](https://cloudinary.com)或 [Imagekit](https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/imagekit.io)这样的媒体内容服务提供收费的媒体存储计划。懒加载可以确保仅从CDN请求的图片被加载，减少了服务器花销。


### 3\. 懒加载提升SEO

页面速度是影响SEO (搜索引擎也更有可能推荐你的页面)的关键要素。因为页面加载时间少，搜索引擎会乐于推荐你的页面。

## 总结

我认为优化页面是每一个web开发者应该修炼的技术。它给用户提供了更好的体验，特别是使用手机的用户。

这里是[GitHub上关于这篇文章的代码](https://github.com/Evavic44/react-lazyload)。

这篇文章就到这里，如果你已经读到了这里，我确信你对我其他的文章也会感兴趣。欢迎通过查看我的[博客](https://eke.hashnode.dev)或者关注我的twitter[@victorekea](https://twitter.com/victorekea)来获取更多内容。

## 其他资源

-   [React Lazy Load Image 组件](https://www.npmjs.com/package/react-lazy-load-image-component)
-   [Demo](https://react-lazyload.vercel.app)
