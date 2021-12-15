> -  原文地址：[HTML Button onclick – JavaScript Click Event Tutorial](https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：luojiyin
> -  校对者：

![HTML Button onclick – JavaScript Click Event Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/javascript-onclick.png)

当你访问一个网站时，你可能点击一些东西，像链接或者按键。

链接可能跳转到当前网页的某一部分，也可能该网站的另一个网页，更或者是另一个网站。按键由Javascrpt各种事件控制，触发某些函数

在本教程中，我们将探索在JavaScript中使用两种不同的方式触发点击事件。

首先，我们将看传统的 `onclick` 风格 ，你可以在HTML里添加。然后我们将看到更现代的 "click" `eventListner` 是如何工作的, 它可以让HTML和JavaScript分离。

## 如何使用`onclick`事件

当一个按键被点击时，对应的`onclick`事件会执行里面的函数。这可能发生在用户提交一个表单，也可能在你修改网页里的内容，以及其他类似的事情。

你把想执行的函数名放到按键标签里。

### 基础 `onclick` 语法

```html
<element onclick="functionToExecute()">Click</element>
```

例如

```html
<button onclick="functionToExecute()">Click</button>
```

请注意 `onclick`属性值是你想执行的函数名，它会调用该函数。

在JavaScript中，它会通过函数名调用函数，当你在函数名后加上括号。

## `onclick` 事件例子

我已经准备好了一些基本的HTML和样式，我们练习怎样把 `onclick` 事件加入进去。

```html
<div>
  <p class="name">freeCodeCamp</p>
  <button>Change to Blue</button>
</div>
```

让它好看些的CSS，以及所有其他的示例代码:

```css
 body {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
      }
p {
   font-size: 2rem;
}

button {
    padding: 7px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button.blue {
    background-color: #3498db;
}

button.green {
    background-color: #2ecc71;
}

button.orange {
   background-color: orangered;
}
```

这是我们看到的网页:  
![changeColor](https://www.freecodecamp.org/news/content/images/2021/08/changeColor.png)

我们的目标是当我们点击这个按键时，文本的颜色变成蓝色。所以我们需要添加一个 `onclick`属性到按键上，然后白编写JavaScript函数来改变颜色。

我们需要在HTML做一些小小的改变.

```html
<div>
  <p class="name">freeCodeCamp</p>
  <button onclick="changeColor()">Change to Blue</button>
</div>
```

我们要执行的函数是`changeColor()`,所以我们需要把它写到一个JavaScript文件里，或者写再HTML文件的`<script>`标签里。

如果你想把你的脚本写在一个JavaScript文件中，你需要在HTML里用下面的语法引用它。

```html
<script src="path-to-javascript-file"></script>
```

如果你想在HTML里写脚本，把它放在script标签里。

```html
<script>
  // Your Scripts
</script>
```

现在让我们来写`changeColor()`函数

首先，我们需要选择我们想操作的元素，也就是在`<p>`标签内的 `freeCodeCamp ` 文本

在JavaScript中，你可以用DOM的 getElementById()，getElementsByClassName()，或者querySelector()方法把DOM对象存储在变量中。

在本教程中，我将使用`querySelector()` ，因为它更现代，而且运行更快。我还将使用 `const`来声明我们的变量，而不用`let`和`var`。因为使用`const`，事情将变得更安全，变量是只读的。

```js
const name = document.querySelector(".name");
```

现在我们已经选定了文本，让我们来编写自己函数。在JavaScript中，函数的基本语法是这样的。

```js
function funcctionName () {
    // What to do
} 
```

这就是我们的函数

```js
function changeColor() {
    name.style.color = "blue";
}
```

发生了什么事情？

HTML中的`changeColor()`是我们要执行的函数，如果的这个名字与HTML中的函数名不一样，它就不会起作用。所以我们的函数名写成  `changeColor`。

在DOM(文档对象模型，指所有的HTML)中，要改变任何有关`style`的东西，你需要写上`style`，然后加上一个`.`。后面是你想要改变的东西，这可以是颜色(color)，背景颜色(background)，字体大小(fontsize)等。

因此，在我们的函数中，我们声明了变量来获取`freeCodeCamp`文本，然后我们把颜色改为蓝色。

点击按键时，文本的颜色会变成蓝色。

![changeColor](https://www.freecodecamp.org/news/content/images/2021/08/changeColor.gif)

我们的起作用了！！！

我们可以把事情做得更进一步，把我们的文字有更多的颜色变化。

```html
<div>
      <p class="name">freeCodeCamp</p>
      <button onclick="changeColor('blue')" class="blue">Blue</button>
      <button onclick="changeColor('green')" class="green">Green</button>
      <button onclick="changeColor('orangered')" class="orange">Orange</button>
</div>
```

我们要把文本颜色改成蓝色，橙色和橙红色。



我们的网页稍微变化一下：

![changeColors](https://www.freecodecamp.org/news/content/images/2021/08/changeColors.png)

让`freeCodeCamp`文本通过我们写的函数可以变成蓝色，绿色，和橙红。

```js
const name = document.querySelector(".name");

function changeColor(color) {
   name.style.color = color;
}
```

 name变量获取了`name`的DOM对象(我们在这里存储了`freeCodeCamp`文本),然后颜色会根据我们传入`changeColor()`的颜色值变化。

![changeColors](https://www.freecodecamp.org/news/content/images/2021/08/changeColors.gif)

## How to Use the click `eventListener` in JavaScript

In JavaScript, there are multiple ways of doing the same thing. As JavaScript itself evolved over time, we started needing to separate the HTML, CSS, and JavaScript code in order to comply with best practices.

Event listeners make this possible as they let you separate the JavaScript from the HTML. You can also do this with onclick, but lets take another approach here.

### Basic `eventListener` syntax

```js
 element.addEventListener("type-of-event", functionToExecute)
```

Now, let's change the freeCodeCampt text to blue by using the click eventListner

This is our new HTML:

```html
 <div>
      <p class="name">freeCodeCamp</p>
      <button>Change Color</button>
 </div>
```

And this is what it looks like:

![colorChange](https://www.freecodecamp.org/news/content/images/2021/08/colorChange.png)

This time around in our script, we need to select the button too (not just the freeCodeCamp text). That’s because there’s nothing JavaScript in the opening tag of our button, which is cool.

So, our script looks like this:

```js
const name = document.querySelector(".name");
const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        name.style.color = "blue";
 });
```

We can also separate our function totally from the `eventListener` and our functionality will still remain the same:

```js
btn.addEventListener("click", changeColor);
      function changeColor() {
        name.style.color = "blue";
}
```

![changeColorWithEvents](https://www.freecodecamp.org/news/content/images/2021/08/changeColorWithEvents.gif)

## How to Build a " Show More" and "Show Less" Button with JavaScrpit

One of the best ways to learn is by making projects, so let's take what we've learned about the `onclick` and "click" `eventListner` to do build something.

When you visit a blog, you often see excerpts of articles first. Then you can click on a "read more" button to show the rest. Let's try to do that.

This is the HTML we are dealing with:

```html
 <article id="content">
      <p>
        freeCodeCamp is one of the best platforms to learn how to code.
        freeCodeCamp has a detailed curriculum that will take you from zero to
        hero in web development, software engineering, machine learning, and
        more.
      </p>

      <p>
        freeCodeCamp also has a YouTube channel containing over 1000 videos on
        web development, software engineering, machine learning, data science,
        freelance web development, database administration, and pretty much
        anything related to tech. To get updates when videos are uploaded, you
        need to subscribe to the channel and turn on notifications. You can also
        follow freeCodeCamp on Twitter, where links to well written articles and
        videos are tweeted daily.
      </p>

      <p>
        Since no one has to pay to learn how to code on freeCodeCamp,
        freeCodeCamp runs on voluntary donations from donors all around the
        world in order to pay employees and maintain servers. If you are
        generous enough consider joining the donors.
      </p>
    </article>

<button onclick="showMore()">Show more</button>
```

It’s simple HTML with some facts about freeCodeCamp. And there's a button we already attach an `onclick` to. The function we want to execute is `showMore()`, which we will write soon.

Without a CSS, this is what we have:  
![articleunstyled](https://www.freecodecamp.org/news/content/images/2021/08/articleunstyled.png)

It's not super ugly, but we can make it look better and act the way we want it to. So we have some CSS which I will explain below:

```css
<style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      article {
        width: 400px;
        background: #fff;
        padding: 20px 20px 0;
        font-size: 18px;
        max-height: 270px;
        overflow: hidden;
        transition: max-height 1s;
        text-align: justify;
        margin-top: 20px;
      }

      p {
        margin-bottom: 16px;
      }

      article.open {
        max-height: 1000px;
      }

      button {
        background: #0e0b22;
        color: #fff;
        padding: 0.6rem;
        margin-top: 20px;
        border: none;
        border-radius: 4px;
      }

      button:hover {
        cursor: pointer;
        background: #1e1d25;
      }
</style>
```

What's the CSS doing?

With the universal selector (`*`), we are removing the default margin and padding assigned to elements so we can add our own margin and padding.

We also have box sizing set to border-box so we can include the padding and border in our elements’ total width and height.

We centered everything in the body with Flexbox and gave it a light grey background.

Our `<article>` element, which contains the text, has a width of `400px`, a white background (#fff), and has a padding of 20px at the top, 20 on the left and right, and 0 at the bottom.

The paragraph tags inside of it have a font-size of 18px, and then we gave them a maximum height of `270px`. Due to the max height of the article element, all the text won't be contained and will overflow. To fix this, we set overflow to hidden in order not to show that text at first.

The transition property ensures that every change happens after 1 second. All text inside the `article` are justified and have a margin top of 20 pixels so it doesn’t stay too attached to the top of the page.

Because we removed the default margin, our paragraphs got all pushed together. So we set a bottom margin of 16 pixels in order to separate them from one another.

Our selector, `article.open`, has a property of `max-height` set to `1000px`. This means that any time the article element has a class of `open` attached to it, the maximum height will change from `270px` to `1000px` to show the rest of the article. This is possible with JavaScript – our game changer.

We styled our button with a darkish background and made it white. We set its border to none to remove HTML’s default border on buttons, and we gave it a border radius of `4px` so it has a slightly rounded border.

Finally, we used the `hover` pseudo-class in CSS to change the button cursor to a pointer. The background color slightly changes when a user hovers their cursor over it.

There we go – that’s the CSS.

Our page now looks better:

![articlestyled](https://www.freecodecamp.org/news/content/images/2021/08/articlestyled.png)

The next thing we need to do is to write our JavaScript so we can see the rest of the article that is hidden.

We have an `onclick` attribute inside our button opening tag ready to execute a `showMore()` function, so let's write the function.

We need to select our article first, because we have to show the rest of it:

```js
const article = document.querySelector("#content");
```

The next thing we need to do is write the function `showMore()` so we can toggle between seeing the rest of the article and hiding it.

```js
function showMore() {
     if (article.className == "open") {
       // read less
       article.className = "";
       button.innerHTML = "Show more";
     } else {
       //read more
       article.className = "open";
       button.innerHTML = "Show less";
     }
  }
```

What is the function doing?

We use an `if…else` statement here. This is a crucial part of JavaScript that helps you make decisions in your code if a certain condition is met.

The basic syntax looks like this:

```js
if (condition == "something") {
  // Do something
} else {
  // Do something else
}
```

Here, if the class name of the article equals open (that is, we want to add the class of open to it, which was set to a maximum height of 1000px in the CSS), then we want to see the rest of the article. Else, we want the article to return to the initial state where a part of it is hidden.

We do this by assigning it a class of open in the else block, which makes it show the rest of the article. Then we set the class to an empty string (none) in the if block, which makes it return to the initial state.

Our code is working fine with a smooth transition:  
![article](https://www.freecodecamp.org/news/content/images/2021/08/article.gif)

We can separate the HTML and JavaScript and still use `onclick`, because onclick is JavaScript. So it's possible to write this in a JavaScript file instead of starting from the HTML.

```js
 button.onclick = function () {
     if (article.className == "open") {
       // read less
       article.className = "";
       button.innerHTML = "Show more";
     } else {
       //read more
       article.className = "open";
       button.innerHTML = "Show less";
     }
  };
```

![articleonclick](https://www.freecodecamp.org/news/content/images/2021/08/articleonclick.gif)

We can also do this using an eventListner:

```html
<article id="content">
      <p>
        freeCodeCamp is one of the best platforms to learn how to code.
        freeCodeCamp has a detailed curriculum that will take you from zero to
        hero in web development, software engineering, machine learning, and
        many more.
      </p>

      <p>
        freeCodeCamp also has a YouTube channel containing over 1000 videos on
        web development, software engineering, machine learning, data science,
        freelance web development, database administration, and pretty more
        anything related to tech. To get updates when videos are uploaded, you
        need to subscribe to the channel and turn on notifications. You can also
        follow freeCodeCamp on Twitter, where links to well written articles and
        videos are tweeted daily.
      </p>

      <p>
        Since no one has to pay to learn how to code on freeCodeCamp,
        freeCodeCamp runs on voluntary donations from donors all around the
        world in order to pay employees and maintain servers. If you are
        generous enough consider joining the donors.
      </p>
</article>

<button id="read-more">Show more</button>
```

```js
 const article = document.querySelector("#content");
 const button = document.querySelector("#read-more");

button.addEventListener("click", readMore);

function readMore() {
     if (article.className == "open") {
       // Read less
     article.className = "";
     button.innerHTML = "Show more";
   } else {
     article.className = "open";
     button.innerHTML = "Show less";
   }
}
```

Our functionality remains the same!

## Conclusion

I hope this tutorial helps you understand how the click event works in JavaScript. We explored two different methods here, so now you can start using them in your coding projects.

Thank you for reading, and keep coding.