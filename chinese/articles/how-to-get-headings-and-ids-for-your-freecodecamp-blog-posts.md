> -  原文地址：[How to Get Headings and IDs for Your freeCodeCamp Blog Post Table of Contents](https://www.freecodecamp.org/news/how-to-get-headings-and-ids-for-your-freecodecamp-blog-posts/)
> -  原文作者：[Scott Spence](https://www.freecodecamp.org/news/author/scott/)
> -  译者：gyf11069
> -  校对者：

![如何为您的 freeCodeCamp 博客文章获取标题和 ID](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/brett-jordan-M9NVqELEtHU-unsplash-1.jpg)

在这篇文章中，我们将从 freeCodeCamp 博客文章中获取所有标题，以在 Ghost CMS 中制作目录(ToC)。

我最近在 freeCodeCamp 上发表了一篇 [相当长的文章](/news/build-your-developer-portfolio-from-scratch-with-sveltekit-and-graphcms/) 需要在文章中添加一个目录。

科尔比法约克 写了一篇关于如何做到这一点的非常好的支持文章。它非常详细地说明了该过程。

您可以查看视频和关于所有详细信息的全面指南：

[如何在您的博客文章或文章中添加目录](https://www.freecodecamp.org/news/how-to-add-a-table-of-contents-to-your-blog-post-or-article)

科尔比 的文章详细说明了您需要目录 (ToC) 的原因以及如何使用 Ghost 编辑器（用于在 Ghost CMS 中撰写本文的编辑器）创建目录。

问题是，我需要为其添加链接的文章中有 33 个标题。滚动浏览 10,000 字文档以获取标题然后滚动到顶部以将其添加到目录中的想法让我想知道是否有更好的方法来做到这一点！

### 目录:

-   [JavaScript 来拯救!](#javascript-to-the-rescue-)
-   [获取元素属性](#get-the-element-properties)
-   [获取元素 id 和 `innerText`](#get-the-element-id-and-innertext)
-   [筛选 `localName`](#filter-on-the-localname)
-   [结论](#conclusion)

## JavaScript 来拯救!

考虑到这个想法，我快速搜索并找到了一个可以使用的 [Stack Overflow](https://stackoverflow.com/a/7115083/1138354) 回答，代码如下:

```js
var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {
  // "el" 是你的元素
  console.log( el.id ); // 打印 ID
});
```

所以，让我们现在跳转到浏览器并尝试一下。

我现在将在浏览器中查看已发布的帖子并打开开发人员工具。（在 Chrome 和 Edge 中，打开开发工具的快捷键是 F12。）然后我将该示例代码粘贴到控制台并按 Enter，这是输出：

![带有开发工具的浏览器窗口打开，代码片段运行显示页面上的所有元素 ID](https://www.freecodecamp.org/news/content/images/2022/01/image-42.png)

## 获取元素属性

效果不错，但我也想要标题，因此查看元素属性的一种快速方法是将它们`el`包括在一些花括号中：

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  console.log({el});
});
```

你会注意到我已经对函数进行了一些清理，将内联函数替换为箭头函数，并替换`var`为`let`因此语法更时髦。

现在在浏览器中运行该片段会为我提供每个元素的对象：

![带有开发工具的浏览器页面在控制台上打开，将各个元素显示为对象](https://www.freecodecamp.org/news/content/images/2022/01/image-43.png)

然后，我现在可以扩展其中一个元素以获取与其相关的所有属性。从这里我想要得到`id`（我已经知道在哪）以及`innerText`头标和标题：

![带有开发工具的浏览器页面在控制台上打开，其中一个元素对象展开以显示所有属性](https://www.freecodecamp.org/news/content/images/2022/01/image-45.png)

## 获取元素 id 和 `innerText`

让我们将`innerText`元素添加到我们正在使用的代码片段中，看看现在是什么样子。代码如下：

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  console.log(el.id);
  console.log(el.innerText);
});
```

这是我们从中得到的输出：

![带有开发工具的浏览器页面在控制台上打开，显示来自每个具有 id 的元素的所有 innerText](https://www.freecodecamp.org/news/content/images/2022/01/image-46.png)

好的，干扰信息真的有点多，因为它显示`innerText`了文档中每个元素的内容，其中包含很多不相关的信息。我们真正感兴趣的是头标的标题和它的 id。

## 筛选`localName`

我在文章中使用的所有标题都是`h2`标题，所以我想要一种过滤方法。所以我需要从本案例中的`{el}`属性中获取表示`h2`元素类型的`localName`

因此，让我们使用一个`if`函数来查看`localName`是否包含`h2`以及是否将其注销。我还将使用模板文字将锚 id `#`添加到 id 的开头：

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  if (el.localName.includes(`h2`)) {
    console.log(`#${el.id}`);
    console.log(el.innerText);
  }
});
```

现在让我们看一下输出：

![带有开发工具的浏览器页面在控制台上打开，使用 if 函数过滤 h2 元素](https://www.freecodecamp.org/news/content/images/2022/01/image-47.png)


好看多了！

现在我可以使用该输出开始制作我的 ToC（文章目录）!

## 结论

我们采用了一个相当扩展的过程，并将其变成了一个便于使用的代码片段，我们可以在每次需要为我们的博客文章创建 ToC （目录）时在浏览器控制台中使用。

就是这样，希望你发现它有用！ 🙏

如果您喜欢这些内容，可以在我的 [博客](https://scottspence.com/) 也可以在 [推特](https://twitter.com/spences10) 上关注我。
