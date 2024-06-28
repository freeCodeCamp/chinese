> -  原文地址：[How to Center a Div with CSS – 10 Different Ways](https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/)
> -  原文作者：[Soham De Roy](https://www.freecodecamp.org/news/author/sohamderoy/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Center a Div with CSS – 10 Different Ways](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/Group-49.png)

对一个开发者来说，将**一个 div 居中**可能是世界上最困难的工作。

读完这篇文章，你就会觉得没有那么难了。这篇文章将讲解 10 种居中`div`的方式。我们将从 CSS 的 **position** 属性、**Flexbox**和**Grid**三个方面来探索如何实现居中。

我相信通读完整篇文章之后，你将成为居中`divs`的专家。

## 如何居中一个`Div`

我将使用同样的 HTML 来讲解 10 种方法。这个 HTML 包含一个父`div`和一个子`div`元素。

本文的目的是让内部`div`实现相对于父元素的居中。仅通过对 CSS 修改，来呈现 10 种不同的方法。

HTML 文件如下：

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width、 initial-scale=1.0" />
    <title>Centering divs</title>
    <link rel="stylesheet" href="./basicStyle.css" />
    <!-- 这里改变CSS文件的链接 -->
    <link rel="stylesheet" href="" />
    <style>
      * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <div id="parentContainer">
      <div id="childContainer"></div>
    </div>
  </body>
</html>
```

以下是基础样式：

```CSS
#parentContainer {
  width: 400px;
  height: 400px;
  background-color: #f55353;
}
#childContainer {
  width: 100px;
  height: 100px;
  background-color: #feb139;
}
```

结果：

![Screenshot-2022-05-27-at-15.02.59](https://www.freecodecamp.org/news/content/images/2022/06/Screenshot-2022-05-27-at-15.02.59.png)

基本的 HTML 和 CSS 样式结果

我们创建了一个父元素`div`，并且将其`width`和`height`设置为`400px`，`color`设置为`#f55353`。

同时，我们在内部创建了一个子元素 `div`，并且将其`width`和`height`设置为`100px`， 将`color`设置为`#feb139`。

最终目标是完成如下图的转变：

![Group-23](https://www.freecodecamp.org/news/content/images/2022/06/Group-23.png)

## 如何使用 CSS 的`position`属性实现 div 的居中

### 1. 如何运用 position: relative、 absolute 以及 top、left 偏移值

```CSS
#parentContainer {
  position: relative;
}
#childContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%、 -50%);
}
```

CSS 中的**position**属性是设置元素在页面的定位方式。position 属性的默认值为`static`，其他值包括：`relative`、 `absolute`、 `fixed`和`sticky`。

如果将一个 DOM 元素设置为`position: absolute`，该元素 **相对于整个页面的位置就是绝对的**。如果我们想要一个`div`相对于整个页面居中的话，可以采用这个方法。

此外，将父元素设置为 `position: relative`，同时将子元素的位置设置为(通过 `position: absolute`)**绝对，这时的绝对是相对于父元素的，而不是整个页面**。

上述代码例子就是采用这样的方法。我们给父元素添加 `position: relative`，子元素添加`position: absolute`。

除了使用 position 属性，我们还可以使用`top`、`right`、`bottom`和`left`四个属性来定义元素的位置，这样决定元素最终的位置（定位）。

`top`和`bottom`指定元素**垂直方向的定位**，`left`和`right`指定元素 **水平方向的定位**。

### 2. 如何使用 position: relative 和 absolute， top、left、right 和 bottom 偏移值以及 margin: auto

```CSS
#parentContainer {
  position: relative;
}
#childContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

除了我们从第一点学习到的知识点外，在这里我们使用了 CSS 中的`margin`属性， `margin: auto`允许浏览器给子元素选择**合适的外边距** 。

通常子元素占据了指定的宽度后，浏览器会 **均匀地分配剩下的空间**，剩下的空间包括左右外边距、上下外边距和上下左右外边距三种情况。

如果我们只设置了`top: 0`、`bottom: 0`以及`margin: auto`，子元素就会**垂直居中**。

同样，如果我们只设置了`left: 0`、`right: 0`以及`margin: auto`，子元素就会**水平居中**。

如果我们像代码示例这样，声明了所有属性，就会得到一个完美的**垂直且水平居中的 div**。

## 如何使用 CSS 中 Flexbox 来居中 Div

### 3. 如何使用 Flexbox、 justify-content 和 align-item

上述的两种方式是使用经典的办法实现页面元素居中。现代方法更多使用**Flexbox** (一维布局模型) 和**Grid**布局(更为复杂的二维布局模型) 属性。

让我们来看看 Flexbox 方法：

Flexbox 不仅仅是个单一的属性，而是一个由一组属性组成的模块。其中一些属性用于**容器**（即父容器），一些用于其中的**子元素**。

下图显示 Flexbox 相关的父元素和子元素的属性列表：
![Group-42](https://www.freecodecamp.org/news/content/images/2022/07/Group-42.png)

通过本文来讲解所有的属性不太现实，所以我们仅讲解我们会用到的一些属性。

如上所述，Flexbox 模型中有两个不同的实体：父容器和子元素。

`display: flex`属性将容器定义为一个 flex 容器。`flex-direction`是另一个容器属性，包含四个值：`row` (默认值)、`row-reverse`、 `column`和`column-reverse`。

使用 flexbox 的时候，我们要思考两个轴， **主轴**和**交叉轴**。

当`flex-direction`的值为`row`或`row-reverse`时，**水平轴是主轴，垂直轴是交叉轴**。

同样的，当`flex-direction`的值为`column`或`column-reverse`时，**垂直轴是主轴，水平轴是交叉轴。**详细解释可以参考下图：

![Group-43](https://www.freecodecamp.org/news/content/images/2022/07/Group-43.png)

![Group-44](https://www.freecodecamp.org/news/content/images/2022/07/Group-44.png)

父容器的`justify-content`属性定义子元素沿着主轴的对齐。因此`justify-content: center`将所有子元素相对于主轴居中。

同样的，父容器的`align-items`属性定义了子元素沿着交叉轴的对齐。因此`align-items: center`将所有子元素相对于交叉轴居中。

所以上述代码实例将子元素相对于父元素水平及垂直居中。

在这个方法中，我们不需要特别定义子元素。仅`display: flex`、`justify-content`和`align-items`就可以在父容器中完美解决居中问题。

```CSS
#parentContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 4. 如何使用 Flexbox、justify-content 和 align-self

这个方法和上述方法类似，是上述方面的替换方案。

取代`align-items`属性(父容器的属性)，该属性是沿着交叉轴对齐**所以子元素**，我们使用`align-self` (子元素属性)设置沿着交叉轴的**单个 flex 元素**的对齐方式。

```CSS
#parentContainer {
  display: flex;
  justify-content: center;
}
#childContainer {
  align-self: center;
}
```

### 5. 如何使用 Flexbox 和 margin: auto

Flexbox 给予我们充分的能力来对齐元素和分配空间。如上文所述，`margin: auto`也可以使浏览器给子元素分配合适的外边距。

在大多数情况下，它允许子元素采用其指定的宽度，并且浏览器在左右边距对或上下边距对或上下左右边距平均分配剩余空间。

这意味着将父容器设置为`flex`同时将子元素设置为`margin: auto`，浏览器就会在水平和垂直方向平均分配剩下的空间。

```CSS
#parentContainer {
  display: flex;
}
#childContainer {
  margin: auto;
}
```

## 如何使用 CSS Grid 居中 Div

### 6. 如何使用 Grid、justify-content 和 align-items

CSS Grid 或者 Grid 使用的是**二维**布局模型，而 Flexbox 使用的是**一维**模型。

与 Flexbox 类似，也有 grid 容器（父容器）和 grid 元素（子元素）这对概念。

下图列出了可用于父容器和子元素的所有属性。由于 CSS Grid 本身就是一个巨大的话题，因此本文不讨论每个属性。让我们讨论一下在本文中使用的属性。

![Group-45](https://www.freecodecamp.org/news/content/images/2022/07/Group-45.png)

`display: grid`将元素设置为一个 grid 容器。

`justify-items`和`align-items`在 grid 内对齐元素，分配沿着内联(横)轴和块(纵)轴。

另外，如果 gird 的总大小小于 grid 容器的话（当将所有 grid 元素都设置为固定元素单位如 px 时有可能发生），我们就可以在 grid 容器中使用 `justify-content`和`align-content`来控制内部元素的对齐方式。

`justify-content`和`align-content`对齐 grid，分配沿着内联(横)轴和块(纵)轴。

这里有一份完整的 grid 属性介绍: [Grid 完整手册](https://css-tricks.com/snippets/css/complete-guide-grid/)

由于在我们的示例中只有一个**grid 单元格**，并且内部只有一个元素。所以使用`justify-content`和`justify-items`，或者 `align-content`和`align-items`得到相同的结果。

```CSS
#parentContainer {
  display: grid;
  justify-content: center;
  align-items: center;
}
```

### 7. 如何使用 Grid 和 place-items

可以使用`place-items`来在一次声明中设置`align-items`和`justify-items`。同样的，可以使用`place-content`在一次声明中设置`justify-content`和`align-content`。

如上文所述，我们可以即可以使用`justify-content`和`justify-items`，又可以使用`align-content`和`align-items`。同样我们可以交替使用`place-items`和`place-content`，得到相同的结果。(仅针对我们这个用例，其他情况要具体情况具体分析)。

```CSS
#parentContainer {
  display: grid;
  place-items: center;
}
```

### 8. 如何使用 Grid、align-self 和 justify-self

和 Flexbox 一样，Grid 也支持使用`align-self`和`justify-self`属性(子元素属性)来对齐单个 grid 元素。

`justify-self`将元素在 grid 单元格内的沿着内联(横)轴对齐，`align-self`将元素在 grid 单元格内的沿着块(纵)轴对齐。

```CSS
#parentContainer {
  display: grid;
}
#childContainer {
  align-self: center;
  justify-self: center;
}
```

### 9. 如何使用 Grid 和 place-self

`place-self`属性通过一个声明设置`justify-self`和`align-self` 属性。所以，将子元素设置为`place-self: center`，就可以垂直水平居中该子元素。

```CSS
#parentContainer {
  display: grid;
}
#childContainer {
  place-self: center;
}
```

### 10. 如何使用 Grid 和 margin: auto

和 Flexbox 类似 Grid 也给予我们充分的能力来对齐元素和分配空间。

如第五种方法所示，我们可以像使用 flexbox 方法一样使用 grid，å将子元素设置为`margin: auto`，可以得到相同的结果。

```CSS
#parentContainer {
  display: grid;
}
#childContainer {
  margin: auto;
}
```

## 结果

如我们期望的那样，所有方法都会得到相同的结果：

![Screenshot-2022-05-27-at-15.02.39](https://www.freecodecamp.org/news/content/images/2022/06/Screenshot-2022-05-27-at-15.02.39.png)

## 总结

本文讨论了 10 种将 div 居中的方法，包括：

1. 使用**position: relative**、**absolute**和**top**、**left**偏移值
2. 使用**position**: **relative**和**absolute**、**top**、**left** **right**和**bottom**偏移值和**margin: auto**
3. 使用**flexbox**、**justify-content**、 **align-item**
4. 使用**flexbox**、**justify-content**和**align-self**
5. 使用**flexbox**和**margin: auto**
6. 使用**grid** **justify-content**和**align-items**
7. 使用**grid**和**place-items**
8. 使用**grid**、**align-self**和**justify-self**
9. 使用**grid**和**place-self**
10. 使用**grid**和**margin: auto**

我们也讲解了`justify-content`、`align-items`、`position`等属性，它们是什么意思，如何搭配使用来使得 div 居中。

## 资源推荐

1.  [Flexbox 完全手册](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
2.  [Grid 完全手册](https://css-tricks.com/snippets/css/complete-guide-grid/)
3.  [通过创建登陆页面来学习使用 flexbox 和 grid](https://www.freecodecamp.org/news/css-flexbox-和-grid-tutorial/)

## GitHub 链接

你可以在 github 上找到所有示例的代码: [Github Link](https://github.com/sohamderoy/blog-setup-centring-divs)

## 结束语

谢谢阅读！希望你喜欢这篇关于`div`居中的 10 种不同方法的文章，希望这篇文章将来对你有用。

可以把这篇文章分享给你的朋友——我将非常感谢。更多惊喜内容，请持续关注。再见！🖖

## 社交账号

-   [LinkedIn](https://www.linkedin.com/feed/)
-   [个人网站](https://www.sohamderoy.dev/)
-   [Twitter](https://twitter.com/_sohamderoy)
