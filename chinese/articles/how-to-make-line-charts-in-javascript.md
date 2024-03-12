、> -  原文地址：[Line Charts Tutorial – How to Create a Line Graph in JavaScript](https://www.freecodecamp.org/news/how-to-make-line-charts-in-javascript/)
> -  原文作者：[Shachee Swadia](https://www.freecodecamp.org/news/author/shachee/)
> -  译者：Papaya HUANG
> -  校对者：

![Line Charts Tutorial – How to Create a Line Graph in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/line-chart.png)

数据可视化这个话题包含了众多不同的[图表](https://datavizcatalogue.com/)供你学习和构建。

但是有几个基本的、常青的图表，每个处理分析的数据设计师和 Web 开发人员都应该知道。

其中之一是**折线图**，它主要用于表示随时间变化的数据。

本教程将教会你如何使用 JavaScript 快速地创建漂亮的交互式折线（和阶梯线）图表。我们将看一些很酷的示例并逐步构建它们，过程既清晰又有趣。

方便起见，你可以在我的[CodePen](https://codepen.io/collection/pgPwyr)上找到所有示例，你可以进一步调整这些折线图，熟悉技能。

### 我们的数据集

在过去的 20 年里，网球世界的发展可谓精彩纷呈。 [三巨头](https://en.wikipedia.org/wiki/Big_Three_(tennis)) — 罗杰·费德勒、 拉斐尔·纳达尔以及诺瓦克·德约科维奇 — 赢得了惊人的 63 次 (过去一共 78 场)大满贯赛事。这些赛事是网球界最负盛名的锦标赛。

我决定绘制他们出色的竞争关系。本教程中的 JS 折线图将直观地展现**三巨头的大满贯冠军争夺战**。而第一个发球已经来了！


# **四步构建折线图**

在 JavaScript 中创建任何图表的过程都分为四个步骤，折线图也不例外：

1.  制作一个带容器（container）的 HTML 页面。
2.  引用 JavaScript 文件。
3.  添加数据。
4.  编写可视化代码。

让我们逐步拆解这些步骤。

### 1. 制作一个带容器（container）的 HTML 页面

首先，设定一个你希望你的图表出现的地方。

如果还没有确定，请创建一个基本网页。然后为折线图创建一个容器——添加一个 HTML 块级元素并为其提供唯一 ID 以供进一步引用。

代码如下：

```html
<html>
  <head>
    <title>Line Chart JS</title>
    <style type="text/css">      
      html, body, #container { 
        width: 100%; height: 100%; margin: 0; padding: 0; 
      } 
    </style>
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

`width`和`height`参数设置为 100%，因此折线图会渲染整个 web 页面。当然你可以根据自己的喜好来设定这些参数。


### 2. 引用 JavaScript 文件

然后在`<head>`部分引用所有我们需要的 JavaScript 文件。 

有非常多[JavaScript 图表库](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries)辅助你通过简单的方式视觉化数据，其中大部分都支持折线图，你可以根据自己的项目需求做选择。

出于教学说明的目的，在本教程中我将使用[AnyChart JS Charts](https://www.anychart.com/)。它很方便灵活，附有[图表文档](https://docs.anychart.com)和[API 参考](https://api.anychart.com)，除非商用，你可以免费使用。

我通过[CDN](https://www.anychart.com/download/cdn/)选择了“base”模块。 (当然，你可以下载并放入自己的网站文件夹中，或者使用你自己的链接)。

```html
<html>
  <head>
    <title>Line Chart JS</title>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js"></script>
    <style type="text/css">      
      html, body, #container { 
        width: 100%; height: 100%; margin: 0; padding: 0; 
      } 
    </style>
  </head>
  <body>  
    <div id="container"></div>
    <script>
      // 折线图JavaScript代码
    </script>
  </body>
</html>
```

折线图的 JavaScript 代码将放在 `<script>`和`</script>`标签之间，该组标签位于 `<body>` 部分 (如果需要的话，你也可以放在`<head>`部分)。

### 3\. 添加数据

然后在你的折线图中添加你需要可视化的数据。

我清点了[费德勒、纳达尔和德约科维奇获得大满贯头衔](https://en.wikipedia.org/wiki/Big_Three_(tennis)#Grand_Slam_tournaments)的次数，以年为统计单位。我将以数组的形式添加到折线图数据中。

如果你更倾向使用其他的形式， 如 JSON、XML、CSV 或者其他，你可以参考[处理数据的不同形式](https://docs.anychart.com/Working_with_Data/Overview)。

```javascript
var data = [
  ["2003", 1, 0, 0],
  ["2004", 4, 0, 0],
  ["2005", 6, 0, 0],
  ["2006", 9, 1, 0],
  ["2007", 12, 2, 0],
  ["2008", 13, 5, 1],
  ["2009", 15, 6, 1],
  ["2010", 16, 9, 1],
  ["2011", 16, 10, 4],
  ["2012", 17, 11, 5],
  ["2013", 17, 13, 6],
  ["2014", 17, 14, 7],
  ["2015", 17, 14, 10],
  ["2016", 17, 14, 12],
  ["2017", 19, 16, 12],
  ["2018", 20, 17, 14],
  ["2019", 20, 19, 16],
  ["2020", 20, 20, 17],
  ["2021", 20, 20, 20],
  ["2022", 20, 22, 20]
];
```

在每一个数组中，第一个参数(纵行 #0)是年份，之后是三位选手（按上述名称顺序）获得头衔的次数(逐年累加)。


### 4\. 编写可视化代码

热身环节结束，球场已经就绪。让我们开始比赛并且快速编写一些 JavaScript 代码吧！

首先，添加 `anychart.onDocumentReady()`：

```html
<script>
  anychart.onDocumentReady(function() {
    // JS折线图代码在这里
  });
</script>
```

其他的内容就编写在这个函数内部。

所以，第二步，引用数据（上一步骤的）。

第三步，创建数据集并且映射（map）每一个系列 (对应每一位选手):

```javascript
// 创建数据集
var dataSet = anychart.data.set(data);

// 映射所有系列
var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});
```

第四步，创建一个折线图实例，以及三个映射后的数据的系列。

```javascript
// 创建一个这些图
var chart = anychart.line();

// 创建系列级名称
var firstSeries = chart.line(firstSeriesData);
firstSeries.name("Roger Federer");
var secondSeries = chart.line(secondSeriesData);
secondSeries.name("Rafael Nadal");
var thirdSeries = chart.line(thirdSeriesData);
thirdSeries.name("Novak Djokovic");
```

第五步，为了让折线图一目了然，添加图例和标题：

```javascript
// 添加图例
chart.legend().enabled(true);
  
// 添加标题
chart.title("Big Three's Grand Slam Title Race");
```

最后，引用容器元素 ID 并且绘制折线图

```javascript
// 设置在哪里展现折线图
chart.container("container");
  
// 绘制折线图
chart.draw();
```

就这么多！一个用 JS 绘制的图表就完成了，像是[直落两盘](https://sports.answers.com/Q/What_does_straight_sets_mean_in_a_game_of_tennis) 的胜利，不是吗？

![A basic multi-line chart, JS.](https://www.freecodecamp.org/news/content/images/2022/09/line-chart-1.png)

三巨头大满贯头衔比赛折线图 - 通过 AnyChart 创建

可以在[CodePen](https://codepen.io/shacheeswadia/pen/gOvjVaK)查看包含 HTML/CSS/JS 的基础版本折线图。为了避免意外，这里也是所有代码：

```html
<html>
  <head>
    <title>Line Chart JS</title>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js"></script>
    <style type="text/css">      
      html, body, #container { 
        width: 100%; height: 100%; margin: 0; padding: 0; 
      } 
    </style>
  </head>
  <body>  
    <div id="container"></div>
    <script>
      anychart.onDocumentReady(function () {
  
        // 添加数据
        var data = [
          ["2003", 1, 0, 0],
          ["2004", 4, 0, 0],
          ["2005", 6, 0, 0],
          ["2006", 9, 1, 0],
          ["2007", 12, 2, 0],
          ["2008", 13, 5, 1],
          ["2009", 15, 6, 1],
          ["2010", 16, 9, 1],
          ["2011", 16, 10, 4],
          ["2012", 17, 11, 5],
          ["2013", 17, 13, 6],
          ["2014", 17, 14, 7],
          ["2015", 17, 14, 10],
          ["2016", 17, 14, 12],
          ["2017", 19, 16, 12],
          ["2018", 20, 17, 14],
          ["2019", 20, 19, 16],
          ["2020", 20, 20, 17],
          ["2021", 20, 20, 20],
          ["2022", 20, 22, 20]
        ];
  
        // 创建数据集
        var dataSet = anychart.data.set(data);

        // 映射所有数据到系列
        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
        var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
        var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});

        // 创建折线图
        var chart = anychart.line();

        // 创建系列及命名
        var firstSeries = chart.line(firstSeriesData);
        firstSeries.name("Roger Federer");
        var secondSeries = chart.line(secondSeriesData);
        secondSeries.name("Rafael Nadal");
        var thirdSeries = chart.line(thirdSeriesData);
        thirdSeries.name("Novak Djokovic");

        // 添加图标
        chart.legend().enabled(true);
  
        // 添加标题
        chart.title("Big Three's Grand Slam Title Race");
  
        // 设置在哪里展现折线图
        chart.container("container");
  
        // 绘制折线图
        chart.draw();
  
      });
    </script>
  </body>
</html>
```

# **如何自定义折线图**

通过上述四个步骤创建出来的折线图已经非常不错了，但是如果你需要自定义一些功能怎么办？

让我来告诉你怎么样快速简单地做一些调整。


### 1\. 命名轴

即使已经很明显，标明折线图的每个轴代表什么总不会错。请使用以下命令将标题添加到 X 轴和 Y 轴：

```javascript
chart.yAxis().title("Titles won");
chart.xAxis().title("Year");
```

### 2\. 自定义标记

默认情况下，当您将鼠标指针移到图表时，每个线条系列上都会显示标记，并且形状各异。为什么不给标记相同的形状？另外，让它们变小会很棒。

看看如何自定义线条系列标记的外观：

```javascript
firstSeries.hovered().markers().type("circle").size(4);
secondSeries.hovered().markers().type("circle").size(4);
thirdSeries.hovered().markers().type("circle").size(4);
```

### 3\. 启用十字准线

十字准线是鼠标指针后的一对垂直线，可帮助您更好地了解当前悬停点的 X 和 Y 值。

在我们的例子中，仅使用一条这样的垂直线来突出显示年份就足够了：

```javascript
chart.crosshair().enabled(true).yStroke(null).yLabel(false);
```

### 4\. 更改工具提示位置

目前，工具提示跟随鼠标指针。但在我们的例子中，最好让它停留在数据点。

要实现这种行为，只需将折线图工具提示位置模式定义为“点（point）”并根据自己的喜好微调其他位置设置。例如：

```javascript
chart.tooltip().positionMode("point");
chart.tooltip().position("right").anchor("left-center").offsetX(5).offsetY(5);
```

查看自定义之后的折线图 (完整的 live 版本请移步[CodePen](https://codepen.io/shacheeswadia/pen/vYdaoyR)。)

![A custom line chart, JS.](https://www.freecodecamp.org/news/content/images/2022/09/line-chart-2.png)


### 5\. 改变颜色

个性化数据可视化的最简单但最有效的方法之一是改变颜色。

下面的代码将每位球员的折线颜色更改为他赢得次数最多的大满贯赛事的主色：温网的紫色代表费德勒，法网的棕色代表纳达尔，澳网的蓝色代表德约科维奇。此外，调整线条的粗细：

```javascript
firstSeries.normal().stroke("#7b60a2", 2.5);
secondSeries.normal().stroke("#db7346", 2.5);
thirdSeries.normal().stroke("#43a7dc", 2.5);
```

### 6\. 改进标题和图例文本

本教程的最后一个更改（并使交互式折线图完整）是自定义标题和图例。

可以添加副标题以提供更多相关信息，并且可以借助 HTML 进行一些文本样式的快速调整，使图表具吸引力：

```javascript
chart
  .title()
  .enabled(true)
  .useHtml(true)
  .text(
    '<span style="color: #006331; font-size:20px;">Big Three&#39;s Grand Slam Title Race</span>' +
      '<br/><span style="font-size: 16px;">(Triumphs at Australian Open, French Open, Wimbledon, U.S. Open)</span>'
  );
```

对于图表图例来说，修改字体大小和 padding 很容易：

```javascript
chart.legend().enabled(true).fontSize(14).padding([10, 0, 10, 0]);
```

看看结果如何！(可以在[CodePen](https://codepen.io/shacheeswadia/pen/wvyxVqZ)查看 JS 代码。)

![Advanced line chart built with JavaScript](https://www.freecodecamp.org/news/content/images/2022/09/line-chart-3.png)


## 如何创建一个阶梯线图

就像五盘的网球比赛总是更令人兴奋一样，这里有一些额外的内容可以使本教程和线图可视化更加精彩。

从数据可视化的角度来说，在我们的案例中，阶梯折线图的效果会更好。我们只需要稍微修改一下。

将`line()`函数改成`stepLine()`，折线图就会变成阶梯折线图。

```javascript
// 创建一个阶梯线图
var chart = anychart.stepLine();

// 创建系列和名称
var firstSeries = chart.stepLine(firstSeriesData);
firstSeries.name("Roger Federer");
var secondSeries = chart.stepLine(secondSeriesData);
secondSeries.name("Rafael Nadal");
var thirdSeries = chart.stepLine(thirdSeriesData);
thirdSeries.name("Novak Djokovic");
```

然后你就可以享用用优美的阶梯线图展现的网球三巨头的大满贯头衔斩获数据。(你可以随时在[CodePen](https://codepen.io/shacheeswadia/pen/zYRmXpv)探索和熟悉完整的代码)

![A stepped line chart visualizing the Grand Slam title race of Federer, Nadal, and Djokovic. JavaScript HTML5.](https://www.freecodecamp.org/news/content/images/2022/09/line-chart-4.png)

这里也有完整的代码：

```html
<html>
  <head>
    <title>Line Chart JS</title>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js"></script>
    <style type="text/css">      
      html, body, #container { 
        width: 100%; height: 100%; margin: 0; padding: 0; 
      } 
    </style>
  </head>
  <body>  
    <div id="container"></div>
    <script>
      anychart.onDocumentReady(function () {
  
        // 添加数据
        var data = [
          ["2003", 1, 0, 0],
          ["2004", 4, 0, 0],
          ["2005", 6, 0, 0],
          ["2006", 9, 1, 0],
          ["2007", 12, 2, 0],
          ["2008", 13, 5, 1],
          ["2009", 15, 6, 1],
          ["2010", 16, 9, 1],
          ["2011", 16, 10, 4],
          ["2012", 17, 11, 5],
          ["2013", 17, 13, 6],
          ["2014", 17, 14, 7],
          ["2015", 17, 14, 10],
          ["2016", 17, 14, 12],
          ["2017", 19, 16, 12],
          ["2018", 20, 17, 14],
          ["2019", 20, 19, 16],
          ["2020", 20, 20, 17],
          ["2021", 20, 20, 20],
          ["2022", 20, 22, 20]
        ];
  
        // 创建数据集
        var dataSet = anychart.data.set(data);

        // 为所有系列映射数据
        var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
        var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
        var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});

        // 创建一个阶梯折线图
        var chart = anychart.stepLine();

        // 创建系列并命名
        var firstSeries = chart.stepLine(firstSeriesData);
        firstSeries.name("Roger Federer");
        var secondSeries = chart.stepLine(secondSeriesData);
        secondSeries.name("Rafael Nadal");
        var thirdSeries = chart.stepLine(thirdSeriesData);
        thirdSeries.name("Novak Djokovic");

        // 创建图例并自定义参数
        chart.legend().enabled(true).fontSize(14).padding([10, 0, 10, 0]);
  
        // 添加标题并自定义参数
        chart
          .title()
          .enabled(true)
          .useHtml(true)
          .text(
            '<span style="color: #006331; font-size:20px;">Big Three&#39;s Grand Slam Title Race</span>' +
              '<br/><span style="font-size: 16px;">(Triumphs at Australian Open, French Open, Wimbledon, U.S. Open)</span>'
          );
  
        // 命名轴
        chart.yAxis().title("Titles won");
        chart.xAxis().title("Year");
  
        // 自定义标记
        firstSeries.hovered().markers().type("circle").size(4);
        secondSeries.hovered().markers().type("circle").size(4);
        thirdSeries.hovered().markers().type("circle").size(4);
  
        // 开启十字轴，并且去掉十字轴的Y轴
        chart.crosshair().enabled(true).yStroke(null).yLabel(false);
  
        // 改变工具提示的位置
        chart.tooltip().positionMode("point");
        chart.tooltip().position("right").anchor("left-center").offsetX(5).offsetY(5);
  
        // 在普通状态下改变系列折线样式
        firstSeries.normal().stroke("#7b60a2", 2.5);
        secondSeries.normal().stroke("#db7346", 2.5);
        thirdSeries.normal().stroke("#43a7dc", 2.5);
  
        // 设置在哪里放置折线图
        chart.container("container");
  
        // 绘制折线图
        chart.draw();
  
      });
    </script>
  </body>
</html>
```

# **总结**

从本教程可以看到，使用 JavaScript 创建交互折线图（阶梯线图）非常简单直白。如果你有任何的建议，欢迎告诉我。

敬仰这些职业运动员在自己领域的成就非常鼓舞人心。

让我们借助这个动力，继续探索数据可视化领域，创建更多（更好）的图表。
