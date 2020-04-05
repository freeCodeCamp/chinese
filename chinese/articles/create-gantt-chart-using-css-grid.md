> * 原文地址：[How to Create a Simple Gantt Chart Using CSS Grid 如何用 CSS 绘制甘特图](https://www.freecodecamp.org/news/create-gantt-chart-using-css-grid/)
> * 原文作者：Alfrick Opidi
> * 译者：sheenalu
> * 校对者：

![How to Create a Simple Gantt Chart Using CSS Grid](https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

甘特图是一种便利的条状图，用于在项目管理中显示任务进度。它以级联水平条形图显示项目活动，宽度表示项目持续时间。

作为前端web设计人员或开发人员，你可以使用甘特图来管理项目并提高团队的工作效率。

在本文中，我将向你展示如何用CSS布局绘制简单的甘特图。本文只需使用纯CSS，不需要外部库或其它杂项。

你可以参考  [本教程][1] ，学习如何使用布局系统来应用CSS规则。

图表将显示从1月到12月的典型软件开发生命周期过程。

以下是本课程结束时甘特图的屏幕截图：

![](https://paper-attachments.dropbox.com/s_71DD472E9787F22210482D610A0DD84B11827762D701C2FF3CA4E87715003165_1567325886724_gantt-chart.png)

让我们开始吧！

## 步骤1: 创建类名为container的div元素

首先，为甘特图创建一个类名为container的div元素：

```css
<div class="container">


```

为其添加CSS样式：

```css
.container {    max-width: 1200px; 
    min-width: 650px;    margin: 0 auto; 
    padding: 50px;
}
```

## 创建类名为chart的div元素

在总容器里创建一个div元素，并将其类名设置为chart。步骤如下：

```css
<div class="chart">

```

为其添加CSS样式：

```css
.chart { 
    display: grid;    border: 2px solid #000;    position: relative;    overflow: hidden; 
} 
```

注意：我已设置chart类的  **display**  属性为  **grid.**  因此，其所有直接子元素将自动成为  _网格项_.

## Step 3: 为甘特图创建行

创建第一行，即甘特图的标题行。

```css
<div class="chart-row chart-period">
<div class="chart-row-item">
    </div><span>January</span><span>February</span>span>March</span>
    <span>April</span><span>May</span><span>June</span><span>July</span>
    <span>August</span><span>September</span><span>October</span>
    <span>November</span><span>December</span>
</div>
```

请注意，我已经提供了12个 **span**  元素，它们将横跨整个行，显示项目持续的月份，即从1月到12月。

CSS样式如下：

```css
.chart-row {    display: grid; 
    grid-template-columns: 50px 1fr; 
    background-color: #DCDCDC;
}
```

```css
.chart-period { 
    color:  #fff;    background-color:  #708090 !important;    border-bottom: 2px solid #000;    grid-template-columns: 50px repeat(12, 1fr);
}

```

请注意，我使用了**grid-template-columns** 来指定网格布局中的列数及各列宽度。

到目前为止，它在浏览器中显示如下：

![](https://paper-attachments.dropbox.com/s_71DD472E9787F22210482D610A0DD84B11827762D701C2FF3CA4E87715003165_1567023822884_gantt1.png)

接下来，添加一些纵向贯穿整个图表的线条，使其看上去像盒子一样，这有助于显示每个项目的持续时间。

我仍旧使用12个  **span**  元素来创建线条。

```css
<div class="chart-row chart-lines"> 
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
    <span></span><span></span>    <span></span></div>
```

CSS样式如下：

```css
.chart-lines { 
    position: absolute;    height: 100%;    width: 100%;    background-color: transparent;    grid-template-columns: 50px repeat(12, 1fr);}

```

其在浏览器中的效果如下：

![](https://paper-attachments.dropbox.com/s_71DD472E9787F22210482D610A0DD84B11827762D701C2FF3CA4E87715003165_1567024250393_gantt2.png)

## 步骤4：添加条目项

最后，让我们添加条目来说明长达一年的软件开发过程。

以下例子展示我如何添加条目1：

```css
<div class="chart-row">    <div class="chart-row-item">1</div> 
    <ul class="chart-row-bars">        <li class="chart-li-one">Planning</li>
    </ul>
</div>
```

让我描述一下上面代码中发生了什么：

-   首先，我在前面已经介绍过了，条目1中的 **div**  元素有一个  **chart-row**类。
-   含有**chart-row-item** 类的**div** 用于对甘特图的条目进行编号。其样式如下：

```css
.chart-row-item { 
    background-color: #808080;    border: 1px solid #000;    border-top: 0;  border-left: 0;    padding: 20px 0;  font-size: 15px;    font-weight: bold;    text-align: center;
}
```

-   为了在甘特图上显示任务，我创建了一个无序列表，并将其样式设置为显示水平条形图，该条形图的长度显示了任务的持续时间。

**chart-row-bars** 的CSS样式如下：

```css
.chart-row-bars { 
    list-style: none; 
    display: grid;  padding: 15px 0;    margin: 0;    grid-template-columns: repeat(12, 1fr); 
    grid-gap: 10px 0;    border-bottom: 1px solid #000;
}
```

-   条目项定义在li标签里，其样式如下：

```css
li {    font-weight: 450;    text-align: left;    font-size: 15px;  min-height: 15px;    background-color: #708090;    padding: 5px 15px;  color: #fff;    overflow: hidden;    position: relative;    cursor: pointer;    border-radius: 15px;
 } 

```

请注意，我使用了**grid-column**属性来指定项目持续时间。

例如，在“开发”条目中，grid-column属性为 **grid-column: 3/9;**  这使该任务从网格的3月横跨到8月。

条目1在浏览器中的显示效果如下：

![](https://paper-attachments.dropbox.com/s_71DD472E9787F22210482D610A0DD84B11827762D701C2FF3CA4E87715003165_1567024868326_gantt3.png)

我采用与条目1一样的方法将其他条目添加到图表中。最终，它生成了一个漂亮的甘特图，正如我早前展示的一样。

## 总结

就是这样！你可以在CodePen上查看本教程的全部代码： 

如你所见，用CSS绘制甘特图并不复杂。你可以使用它来高效管理web开发项目,并确保每个人都朝着规定的目标前进。

此外，甘特图也可于其它行业的项目管理。例如，如果你在卖  [堆肥厕所][2]，可以使用甘特图来显示一段时期的销售数量。

当然，甘特图可以用来做很多事情，我只是触及了一些皮毛。

你还可以对甘特图稍作调整，以满足特定需求和项目目标。例如，你可以用它们来显示各种任务之间的关系、一些任务的完成如何依赖另一个任务、如何为项目的成功分配资源以及确保每个人在同一页上从而显示清晰的项目要求。

你有什么问题或意见吗？

请通过下面的Twitter联系我，我会尽我所能做出回复。

[1]: https://www.freecodecamp.org/learn/responsive-web-design/css-grid/
[2]: https://www.waterless-toilet.com/top-6-best-composting-toilets-to-choose/
