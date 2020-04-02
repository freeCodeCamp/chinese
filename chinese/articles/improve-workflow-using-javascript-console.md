> * 原文地址：[How you can improve your workflow using the JavaScript console](https://www.freecodecamp.org/news/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472/)
> * 原文作者：Riccardo Canella
> * 译者：Zhuotao Lian
> * 校对者：

![How you can improve your workflow using the JavaScript console](https://cdn-media-1.freecodecamp.org/images/1*U62GMx7Z7U56CArkK2tfCQ.jpeg)

by Riccardo Canella

As a web developer, you know very well the need to debug your code. We often use external libraries for logs, and to format and/or display them in some cases, but the console of our browsers is much more powerful than we think.

When we think about the console, the first thing that comes to mind and the  `console.log`, right? But there are many more methods than those we imagine. Now we will see how to make the most of using the console, and I’ll give you some tips to make them these methods more readable

### What is the Console?

The JavaScript console is a built-in feature in modern browsers that comes with out-of-the-box development tools in a shell-like interface. It allows a developer to:

-   View a log of errors and warnings that occur on a web page.
-   Interact with the web page using JavaScript commands.
-   Debug applications and traverse the DOM directly in the browser.
-   Inspect and analyze network activity

Basically, it empowers you to write, manage, and monitor JavaScript right within your browser.

#### Console.log, Console.error, Console.warn and Console.info

These are probably the most used methods of all. You can pass more than one parameter to these methods. Each parameter is evaluated and concatenated in a string delimited by the space, but in case of objects or arrays you can navigate between their properties.

![](https://cdn-media-1.freecodecamp.org/images/mb28MA52eZS1oW000KV2KHJfjW93hGAkaFln)

#### Console.group

This method allows you to group a series of console.logs (but also error info, and so on) under a group that can be collapsed. The syntax is really very simple: just enter all the  `console.log`  we want to group before a  `console.group()`  (or  `console.groupCollapsed()`  if we want it to be closed by default). Then add a  `console.groupEnd()`  at the end to close the group.

![](https://cdn-media-1.freecodecamp.org/images/HmjCThNsjXDndqMmnXsoJfhaDvJWSe9HthWY)

Example of how to use the console.group

The results will look like this:

![](https://cdn-media-1.freecodecamp.org/images/oaS8o7IqXG2FYAlTwpMxjAoVaV94nCpjTDHw)

#### Console.table

Since I discovered the  `console.table`  my life has changed. Displaying JSON or very large JSON arrays inside a  `console.log`  is a terrifying experience. The  `console.table`  allows us to visualize these structures inside a beautiful table where we can name the columns and pass them as parameters.

![](https://cdn-media-1.freecodecamp.org/images/zTSGqfZmTDJNuDtoUsC8UuRBB8PAZ5OMME87)

Example of how to use the console.table

The result is wonderful and very useful in debugging:

![](https://cdn-media-1.freecodecamp.org/images/nLfvcHJ1b6LuD5CzcZxk36jl9YzlUF3I41h1)

#### Console.count, Console.time and Console.timeEnd

These three methods are the Swiss army knife for every developer who needs to debug. The  `console.count`  counts and outputs the number of times that  `count()`  has been invoked on the same line and with the same label. The  `console.time`  starts a timer with a name specified as an input parameter, and can run up to 10,000 simultaneous timers on a given page. Once initiated, we use a call to  `console.timeEnd`  to stop the timer and print the elapsed time to the Console.

![](https://cdn-media-1.freecodecamp.org/images/2pxTmE0ZHBasKm2ZmZaj-ajMYHvhjhVDGhID)

Example of how to use the console.time and console.count

The output will look like this:

![](https://cdn-media-1.freecodecamp.org/images/Tt4dNjkK0yCpYzAHD6ZEFluIQ6IHl9cjv-nl)

#### Console.trace and Console.assert

These methods simply print a stack trace from the point where it was called. Imagine you are creating a JS library and want to inform the user where the error was generated. In that case, these methods can be very useful. The  `console.assert`  is like the  `console.trace`  but will print only if the condition passed didn’t pass.

![](https://cdn-media-1.freecodecamp.org/images/wXYN1gjig-dXgTSQPtf7rPPWR3uNvFrtsrGw)

As we can see, the output is exactly what React (or any other library) would show us when we generate an exception.

![](https://cdn-media-1.freecodecamp.org/images/ZH4tfVHdbM-xG0R2TcTuQ58RuuozuPTGddug)

### Delete all the Consoles?

Using consoles often forces us to eliminate them. Or sometimes we forget about the production build (and only notice them by mistake days and days later). Of course, I do not advise anyone to abuse consoles where they are not needed (the console in the change input handle can be deleted after you see that it works). You should leave error logs or trace logs in development mode to help you debug. I use Webpack a lot, both at work and in my own projects. This tool allows you to delete all the consoles that you do not want to remain (by type) from the production build using the  [uglifyjs-webpack-plugin][1]?

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')var debug = process.env.NODE_ENV !== "production";.....optimization: {        minimizer: !debug ? [            new UglifyJsPlugin({                // Compression specific options                uglifyOptions: {                    // Eliminate comments                    comments: false,                    compress: {                       // remove warnings                       warnings: false,                       // Drop console statements                       drop_console: true                    },                }           })] : []}
```

The configuration is really trivial and it simplifies the work, so have fun with the console (but do not abuse it!)

[1]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
