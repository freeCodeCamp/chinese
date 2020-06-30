> * 原文地址：[How you can improve your workflow using the JavaScript console](https://www.freecodecamp.org/news/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472/)
> * 原文作者：Riccardo Canella
> * 译者：Zhuotao Lian
> * 校对者：

![t如何使用 JavaScript 控制台改善工作流程](https://cdn-media-1.freecodecamp.org/images/1*U62GMx7Z7U56CArkK2tfCQ.jpeg)

作者：Riccardo Canella

作为一名 web 开发者，你一定清楚调试代码的必要性。我们经常使用外部库来记录日志，并在某些情况下格式化并/或显示它们。但浏览器的控制台，远比我们想象的强大。

当提到控制台时，我们会首先想到 `console.log`，没错吧？但它还拥有许多其他的方法。 现在，我们将了解如何充分利用控制台。我还会给出一些提示，以便你更好地理解这些方法。

### 什么是控制台？

JavaScript 控制台是现代浏览器中内置的开箱即用的开发工具，其界面类似 Shell。 它允许开发人员执行以下操作：

-   查看网页上发生的错误和警告的日志。
-   使用 JavaScript 命令与网页进行交互。
-   调试应用程序并直接在浏览器中遍历 DOM。
-   检查并分析网络活动。

简言之，它使你得以在浏览器中编写，管理和监视 JavaScript。

#### Console.log，Console.error，Console.warn 和 Console.info

这些可能是最常用的方法，它们允许你传递多个参数。每个参数都将被评估，并以空格分隔连接成字符串，但对于对象或数组，你可以查看其内在属性。
![](https://cdn-media-1.freecodecamp.org/images/mb28MA52eZS1oW000KV2KHJfjW93hGAkaFln)

#### Console.group

该方法允许你将一系列控制台日志（也包括错误信息等）归纳在可折叠的小组下。语法非常简单：只需在 `console.group()` 后输入所需的 `console.log`（或输入 `console.groupColladed()` 来让其以默认方式关闭），然后在末尾添加 `console.groupEnd()` 来结束分组。

![](https://cdn-media-1.freecodecamp.org/images/HmjCThNsjXDndqMmnXsoJfhaDvJWSe9HthWY)

console.group 使用示例

结果如下所示：

![](https://cdn-media-1.freecodecamp.org/images/oaS8o7IqXG2FYAlTwpMxjAoVaV94nCpjTDHw)

#### Console.table

自从发现 `console.table`，我的生活发生了改变。在 console.log 中显示 JSON 或超大的 JSON 数组是一种令人恐惧的体验。`console.table` 使我们可以在漂亮的表格中可视化这些结构，它允许通过传递参数的方式命名列。

![](https://cdn-media-1.freecodecamp.org/images/zTSGqfZmTDJNuDtoUsC8UuRBB8PAZ5OMME87)

console.table 使用示例

结果非常令人满意，并且对于调试非常有用：

![](https://cdn-media-1.freecodecamp.org/images/nLfvcHJ1b6LuD5CzcZxk36jl9YzlUF3I41h1)

#### Console.count，Console.time 和 Console.timeEnd

对于每一名需要调试的开发人员，这三种方法都如同瑞士军刀。 `console.count` 能计数并输出在同一行和相同标签上调用 `count()` 的次数。`console.time` 能启动以指定输入参数为名的计时器，并且最多能在给定页面上同时运行一万个计时器。 一旦启动，我们可以通过调用 `console.timeEnd` 来停止计时器，并将经过的时间打印到控制台。

![](https://cdn-media-1.freecodecamp.org/images/2pxTmE0ZHBasKm2ZmZaj-ajMYHvhjhVDGhID)

console.time 和 console.count 使用示例

输出如下所示：

![](https://cdn-media-1.freecodecamp.org/images/Tt4dNjkK0yCpYzAHD6ZEFluIQ6IHl9cjv-nl)

#### Console.trace 和 Console.assert

这些方法的功能只是从其被调用的位置打印堆栈跟踪。 假设你正在创建一个 JS 库，并且想告知用户错误发生的位置。 在这种情况下，这些方法可能会非常有用。`console.assert` 类似于 `console.trace`，但仅在条件未通过时才会打印。

![](https://cdn-media-1.freecodecamp.org/images/wXYN1gjig-dXgTSQPtf7rPPWR3uNvFrtsrGw)

如你所见，输出正是产生异常时 React（或任何其他库）向我们所展示的内容。

![](https://cdn-media-1.freecodecamp.org/images/ZH4tfVHdbM-xG0R2TcTuQ58RuuozuPTGddug)

### Delete all the Consoles?

Using consoles often forces us to eliminate them. Or sometimes we forget about the production build (and only notice them by mistake days and days later). Of course, I do not advise anyone to abuse consoles where they are not needed (the console in the change input handle can be deleted after you see that it works). You should leave error logs or trace logs in development mode to help you debug. I use Webpack a lot, both at work and in my own projects. This tool allows you to delete all the consoles that you do not want to remain (by type) from the production build using the  [uglifyjs-webpack-plugin][1]?

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')var debug = process.env.NODE_ENV !== "production";.....optimization: {        minimizer: !debug ? [            new UglifyJsPlugin({                // Compression specific options                uglifyOptions: {                    // Eliminate comments                    comments: false,                    compress: {                       // remove warnings                       warnings: false,                       // Drop console statements                       drop_console: true                    },                }           })] : []}
```

The configuration is really trivial and it simplifies the work, so have fun with the console (but do not abuse it!)

[1]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
